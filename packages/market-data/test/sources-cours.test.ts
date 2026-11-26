import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  LIEUX, SOURCES, lieuParMic, micValide, sourceUtilisable, optionsSelecteur, resoudreSource,
  isinValide, cleIsin, verifierEntree, rechercherRegistre, meilleurPrix, comparatifLieux, coursDeValorisation,
  courtiersPourLieu, MENTION_AFFILIATION, placeParId,
  type SourceCours, type CotationLieu, type EntreeRegistre, type Courtier,
} from '../src/index.ts';

// Données fictives : deux sources supposées sous licence pour les tests, le reste tel que dans SOURCES.
const SOUS_LICENCE: SourceCours[] = SOURCES.map((s) => (s.id === 'euroctp' || s.id === 'ls-exchange' ? { ...s, statut: 'sous-licence', affichage: true } : s));
const ISIN = cleIsin('ZZ000LUMIN0'); // ISIN fictif de « Lumière Industries »
const H = '2026-11-26T10:00:00Z';
const plus = (s: number) => new Date(Date.parse(H) + s * 1000).toISOString();

test('lieux : MIC valides, uniques, places connues', () => {
  assert.equal(new Set(LIEUX.map((l) => l.mic)).size, LIEUX.length);
  for (const l of LIEUX) {
    assert.ok(micValide(l.mic) && micValide(l.micOperateur), l.mic);
    if (l.place) assert.ok(placeParId(l.place), l.mic);
  }
  assert.equal(lieuParMic('MUND')?.nom, 'gettex');
  assert.equal(lieuParMic('TQEX')?.nom, 'Turquoise Europe');
});

test('sources : Google et Yahoo visibles mais désactivés sous réserve de licence ; « Meilleur prix » en premier', () => {
  const options = optionsSelecteur();
  assert.deepEqual(options[0], { id: 'meilleur-prix', nom: 'Meilleur prix', selectionnable: true });
  for (const id of ['google-finance', 'yahoo-finance']) {
    const o = options.find((x) => x.id === id)!;
    assert.equal(o.selectionnable, false);
    assert.equal(o.raison, 'Sous réserve de licence');
  }
  assert.ok(SOURCES.every((s) => !sourceUtilisable(s)), 'aucun contrat signé à ce jour');
  assert.equal(optionsSelecteur(SOUS_LICENCE).find((x) => x.id === 'euroctp')?.selectionnable, true);
});

test('préférence : une source sans licence retombe sur « Meilleur prix »', () => {
  assert.deepEqual(resoudreSource({ type: 'source', id: 'yahoo-finance' }).appliquee, { type: 'meilleur-prix' });
  assert.equal(resoudreSource({ type: 'source', id: 'yahoo-finance' }).raison, 'Sous réserve de licence');
  assert.deepEqual(resoudreSource({ type: 'source', id: 'euroctp' }, SOUS_LICENCE).appliquee, { type: 'source', id: 'euroctp' });
  assert.deepEqual(resoudreSource({ type: 'lieu', mic: 'XETR' }).appliquee, { type: 'lieu', mic: 'XETR' });
});

test('ISIN : clé de contrôle', () => {
  for (const v of ['US0378331005', 'FR0000120271', 'DE0007164600', ISIN]) assert.ok(isinValide(v), v);
  for (const f of ['US0378331006', 'FR000012027', 'fr0000120271', '1R0000120271']) assert.equal(isinValide(f), false, f);
});

const ENTREE: EntreeRegistre = {
  isin: ISIN, nom: 'Lumière Industries', lieuPrincipal: 'XPAR', majLe: '2026-11-25',
  cotations: [
    { mic: 'XPAR', mnemonique: 'LUMI', devise: 'EUR' },
    { mic: 'XETR', mnemonique: 'LUM', devise: 'EUR' },
    { mic: 'HAMN', mnemonique: 'LUM', devise: 'EUR' },
    { mic: 'TQEX', mnemonique: 'LUMIp', devise: 'EUR' },
  ],
  codes: { euroctp: ISIN, 'google-finance': 'LUMI:EPA', 'yahoo-finance': 'LUMI.PA' },
};

test('registre : entrée correcte, anomalies détectées, recherche par code', () => {
  assert.deepEqual(verifierEntree(ENTREE), []);
  const fausse: EntreeRegistre = { ...ENTREE, isin: 'ZZ000LUMIN01', lieuPrincipal: 'XNAS', cotations: [...ENTREE.cotations, { mic: 'XPAR', mnemonique: '', devise: 'eur' }], codes: { inconnue: 'X' } };
  const champs = verifierEntree(fausse).map((a) => a.champ);
  for (const c of ['isin', 'cotations', 'lieuPrincipal', 'codes']) assert.ok(champs.includes(c), c);
  assert.equal(rechercherRegistre([ENTREE], 'lumi.pa')[0]?.isin, ISIN);
  assert.equal(rechercherRegistre([ENTREE], ISIN.toLowerCase()).length, 1);
  assert.equal(rechercherRegistre([ENTREE], '').length, 0);
});

const COTATIONS: CotationLieu[] = [
  { mic: 'XPAR', source: 'euroctp', devise: 'EUR', prixAchat: 177.48, prixVente: 177.40, dernier: 177.44, horodatage: H, fraicheur: 'temps-reel' },
  { mic: 'XETR', source: 'euroctp', devise: 'EUR', prixAchat: 177.46, prixVente: 177.38, horodatage: plus(-5), fraicheur: 'temps-reel' },
  { mic: 'HAMN', source: 'ls-exchange', devise: 'EUR', prixAchat: 177.50, prixVente: 177.42, horodatage: plus(-2), fraicheur: 'temps-reel' },
  { mic: 'TQEX', source: 'euroctp', devise: 'EUR', prixAchat: 177.45, prixVente: 177.41, horodatage: plus(-300), fraicheur: 'temps-reel' }, // trop ancienne
  { mic: 'XGAT', source: 'tradegate', devise: 'EUR', prixAchat: 170.00, prixVente: 169.90, horodatage: H, fraicheur: 'temps-reel' }, // sans licence
  { mic: 'XSTU', source: 'euroctp', devise: 'EUR', prixAchat: 176.00, prixVente: 175.90, horodatage: H, fraicheur: 'differe-15' }, // fraîcheur moins bonne
];

test('meilleur prix : achat le plus bas, vente la plus haute, entre cotations comparables', () => {
  const m = meilleurPrix(COTATIONS, { sources: SOUS_LICENCE, lieuPrincipal: 'XPAR' });
  assert.equal(m.achat?.mic, 'XETR');
  assert.equal(m.achat?.prix, 177.46);
  assert.equal(m.vente?.mic, 'HAMN');
  assert.equal(m.vente?.prix, 177.42);
  assert.equal(m.lieuxCompares, 3);
  assert.ok(Math.abs((m.ecartPct ?? 0) - ((177.46 - 177.42) / 177.46) * 100) < 1e-9);
  const raisons = Object.fromEntries(m.exclus.map((e) => [e.mic, e.raison]));
  assert.deepEqual(raisons, { XGAT: 'licence', XSTU: 'fraicheur', TQEX: 'trop-ancienne' });
  assert.equal(m.achat?.mention, 'Meilleur prix européen (EBBO) fourni par EuroCTP');
});

test('meilleur prix : sans source sous licence, rien n\'est affiché ; devises converties ou écartées', () => {
  assert.equal(meilleurPrix(COTATIONS).achat, null);
  const usd: CotationLieu[] = [{ mic: 'HAMN', source: 'ls-exchange', devise: 'USD', prixAchat: 200, prixVente: 199, horodatage: H, fraicheur: 'temps-reel' }];
  assert.equal(meilleurPrix(usd, { sources: SOUS_LICENCE }).exclus[0]?.raison, 'devise');
  const converti = meilleurPrix(usd, { sources: SOUS_LICENCE, change: (v) => v * 0.9 });
  assert.equal(converti.achat?.prix, 180);
  assert.equal(converti.achat?.deviseOrigine, 'USD');
});

test('égalité de prix : le lieu principal passe devant', () => {
  const egal: CotationLieu[] = [
    { mic: 'XETR', source: 'euroctp', devise: 'EUR', prixAchat: 10, horodatage: H, fraicheur: 'temps-reel' },
    { mic: 'XPAR', source: 'euroctp', devise: 'EUR', prixAchat: 10, horodatage: plus(-10), fraicheur: 'temps-reel' },
  ];
  assert.equal(meilleurPrix(egal, { sources: SOUS_LICENCE, lieuPrincipal: 'XPAR' }).achat?.mic, 'XPAR');
  assert.equal(meilleurPrix(egal, { sources: SOUS_LICENCE }).achat?.mic, 'XETR');
});

test('comparatif : tri par prix ou alphabétique, plus bas et plus haut signalés', () => {
  const croissant = comparatifLieux(COTATIONS, 'prix-achat-croissant', { sources: SOUS_LICENCE });
  assert.deepEqual(croissant.map((l) => l.mic), ['XETR', 'XPAR', 'HAMN']);
  assert.equal(croissant[0]?.achatLePlusBas, true);
  assert.equal(croissant[2]?.achatLePlusHaut, true);
  assert.equal(croissant.find((l) => l.mic === 'HAMN')?.venteLaPlusHaute, true);
  assert.deepEqual(comparatifLieux(COTATIONS, 'prix-achat-decroissant', { sources: SOUS_LICENCE }).map((l) => l.mic), ['HAMN', 'XPAR', 'XETR']);
  assert.deepEqual(comparatifLieux(COTATIONS, 'alphabetique', { sources: SOUS_LICENCE }).map((l) => l.lieu), ['Euronext Paris', 'LS Exchange', 'Xetra']);
});

test('valorisation : cours du lieu principal, pas du lieu le plus favorable', () => {
  const v = coursDeValorisation(ENTREE, COTATIONS, SOUS_LICENCE);
  assert.deepEqual(v, { prix: 177.44, mic: 'XPAR', source: 'euroctp', nature: 'dernier', horodatage: H });
  const cloture = coursDeValorisation(ENTREE, [{ mic: 'XPAR', source: 'euroctp', devise: 'EUR', cloture: 176.9, horodatage: H, fraicheur: 'cloture' }], SOUS_LICENCE);
  assert.equal(cloture?.nature, 'cloture');
  assert.equal(coursDeValorisation(ENTREE, COTATIONS), null, 'sans licence, pas de cours');
});

const COURTIERS: Courtier[] = [
  { id: 'zephyr', nom: 'Zéphyr Bourse', agrement: { autorite: 'AMF', reference: 'fictif-2', verifieLe: '2026-11-20' }, politiqueExecution: { url: 'https://exemple.test/zephyr', date: '2026-07-01' }, lieux: ['XPAR', 'HAMN'], modes: ['contrepartie-courtier', 'lieu-au-choix'], site: 'https://exemple.test/zephyr', affiliation: { url: 'https://exemple.test/zephyr?ref=livi' } },
  { id: 'atlas', nom: 'Atlas Bourse', agrement: { autorite: 'AMF', reference: 'fictif-1', verifieLe: '2026-11-20' }, politiqueExecution: { url: 'https://exemple.test/atlas', date: '2026-06-15' }, lieux: ['XPAR', 'XETR'], modes: ['routage-courtier'], site: 'https://exemple.test/atlas', affiliation: { url: 'https://exemple.test/atlas?ref=livi' } },
  { id: 'sans-agrement', nom: 'Anonyme', agrement: null, politiqueExecution: { url: 'https://exemple.test/x', date: '2026-01-01' }, lieux: ['XPAR'], modes: ['routage-courtier'], site: 'https://exemple.test/x' },
  { id: 'sans-politique', nom: 'Brume', agrement: { autorite: 'BaFin', reference: 'fictif-3', verifieLe: '2026-11-20' }, politiqueExecution: null, lieux: ['XPAR'], modes: ['routage-courtier'], site: 'https://exemple.test/brume' },
];

test('courtiers : agréés et sourcés, ordre alphabétique, affiliation tout ou rien', () => {
  const sans = courtiersPourLieu('XPAR', COURTIERS, { affiliationActive: false });
  assert.deepEqual(sans.map((c) => c.nom), ['Atlas Bourse', 'Zéphyr Bourse']);
  assert.ok(sans.every((c) => !c.commercial && !c.url.includes('ref=')));
  const avec = courtiersPourLieu('XPAR', COURTIERS, { affiliationActive: true });
  assert.ok(avec.every((c) => c.commercial && c.mention === MENTION_AFFILIATION && c.url.includes('ref=livi')));
  const cobalt: Courtier = { id: 'cobalt', nom: 'Cobalt', agrement: { autorite: 'AMF', reference: 'fictif-4', verifieLe: '2026-11-20' }, politiqueExecution: { url: 'https://exemple.test/cobalt', date: '2026-05-01' }, lieux: ['XPAR'], modes: ['routage-courtier'], site: 'https://exemple.test/cobalt' };
  const inegal = courtiersPourLieu('XPAR', [...COURTIERS, cobalt], { affiliationActive: true });
  assert.ok(inegal.every((c) => !c.commercial), 'un courtier sans accord : aucun lien commercial, traitement égal');
  assert.deepEqual(courtiersPourLieu('HAMN', COURTIERS, { affiliationActive: false }).map((c) => c.id), ['zephyr']);
});

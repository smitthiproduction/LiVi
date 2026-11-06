import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  prixDeRevente,
  twr,
  xirr,
  baisseMaximale,
  lireCsv,
  lireMontant,
  lireDate,
  appliquerModele,
  isinValide,
  detecterDoublons,
  normaliserLibelle,
  rattacher,
  apercuPropagation,
  repartition,
  herfindahl,
  recouvrement,
  transparence,
  arbitrageVersCible,
  type ModeleCsv,
  type Transaction,
  type Enseigne,
} from '../src/index.ts';

const proche = (a: number, b: number, eps = 1e-6) => assert.ok(Math.abs(a - b) < eps, `${a} ≈ ${b}`);

test('prix de revente : sans frais ni impôt, +20 % donne PRU × 1,2', () => {
  proche(prixDeRevente({ pru: 100, quantite: 10, gainVise: 0.2 }), 120);
});

test('prix de revente : impôt 30 % et frais 5 € à l’achat et à la vente', () => {
  const p = prixDeRevente({ pru: 100, quantite: 10, gainVise: 0.2, fraisAcquisition: 5, tauxImposition: 0.3, fraisCession: 5 });
  // 100 + ((200 + 5) / 0,7 + 5) / 10
  proche(p, 100 + (205 / 0.7 + 5) / 10);
  assert.throws(() => prixDeRevente({ pru: 100, quantite: 0, gainVise: 0.1 }));
  assert.throws(() => prixDeRevente({ pru: 100, quantite: 1, gainVise: 0.1, tauxImposition: 1 }));
});

test('TWR neutralise un versement', () => {
  // 100 → 110 (+10 %), puis versement de 100 → 210 devient 231 (+10 %)
  const r = twr(
    [{ date: '2026-01-01', valeur: 100 }, { date: '2026-02-01', valeur: 110 }, { date: '2026-03-01', valeur: 231 }],
    [{ date: '2026-02-01', montant: 100 }],
  );
  proche(r, 0.21);
});

test('XIRR : 1 000 € placés un an rapportent 100 € → environ 10 %', () => {
  const r = xirr([{ date: '2025-01-01', montant: -1000 }, { date: '2026-01-01', montant: 1100 }]);
  proche(r, 0.1, 1e-4);
  assert.throws(() => xirr([{ date: '2025-01-01', montant: -1000 }, { date: '2026-01-01', montant: -10 }]));
});

test('baisse maximale', () => {
  proche(baisseMaximale([100, 120, 90, 130, 117]), -0.25);
});

test('lecture CSV : guillemets, séparateur, BOM', () => {
  const rows = lireCsv('﻿Date;Libellé;Montant\n01/02/2026;"CB LIDL; BORDEAUX";-12,30\n');
  assert.deepEqual(rows, [['Date', 'Libellé', 'Montant'], ['01/02/2026', 'CB LIDL; BORDEAUX', '-12,30']]);
});

test('montants et dates à la française', () => {
  assert.equal(lireMontant('1 234,56 €'), 1234.56);
  assert.equal(lireMontant('-1.234,56'), -1234.56);
  assert.equal(lireMontant('(12,30)'), -12.3);
  assert.equal(lireMontant('1,234.56', 'en'), 1234.56);
  assert.equal(lireDate('31/12/2025'), '2025-12-31');
  assert.equal(lireDate('31-12-25'), '2025-12-31');
  assert.equal(lireDate('2025-12-31'), '2025-12-31');
  assert.throws(() => lireDate('31/02/2025'));
  assert.throws(() => lireMontant('abc'));
});

test('ISIN : clé de contrôle', () => {
  assert.ok(isinValide('FR0011869353'));
  assert.ok(isinValide('US0378331005'));
  assert.ok(!isinValide('FR0011869354'));
});

test('appliquer un modèle CSV débit/crédit avec erreurs ligne par ligne', () => {
  const modele: ModeleCsv = { id: 'banque-x', etablissement: 'Banque X', version: 1, lignesEntete: 1, formatDate: 'JJ/MM/AAAA', formatMontant: 'fr', colonnes: { date: 0, libelle: 1, debit: 2, credit: 3 } };
  const csv = 'Date;Libellé;Débit;Crédit\n02/03/2026;CB LIDL BORDEAUX;12,30;\n03/03/2026;VIR SALAIRE;;2 500,00\n35/03/2026;ERREUR;1,00;\n';
  const { lignes, erreurs } = appliquerModele(csv, modele);
  assert.deepEqual(lignes.map((l) => l.montant), [-12.3, 2500]);
  assert.equal(erreurs.length, 1);
  assert.equal(erreurs[0]!.ligne, 4);
});

test('doublons : même date, montant et libellé proche, une seule fois chacun', () => {
  const a = [{ date: '2026-03-02', montant: -12.3, libelle: 'CB LIDL BORDEAUX' }];
  const b = [{ date: '2026-03-02', montant: -12.3, libelle: 'CB  LIDL BORDEAUX' }, { date: '2026-03-02', montant: -12.3, libelle: 'CB LIDL BORDEAUX' }];
  const r = detecterDoublons(a, b);
  assert.equal(r.doublons.length, 1);
  assert.equal(r.nouvelles.length, 1);
});

const enseignes: Enseigne[] = [
  { id: 'lidl', groupeId: 'schwarz', nom: 'Lidl', categorieParDefaut: 'Courses alimentaires', alias: [] },
  { id: 'kaufland', groupeId: 'schwarz', nom: 'Kaufland', categorieParDefaut: 'Courses alimentaires', alias: [] },
  { id: 'fnac', nom: 'Fnac', categorieParDefaut: 'Loisirs', alias: ['FNAC DARTY'] },
];

test('normalisation et rattachement à l’enseigne', () => {
  assert.equal(normaliserLibelle('CB LIDL 1234 BORDEAUX 12/03'), 'LIDL BORDEAUX');
  assert.equal(rattacher('PAIEMENT CB FNAC DARTY PARIS', enseignes).enseigne?.id, 'fnac');
  assert.equal(rattacher('VIR SALAIRE', enseignes).enseigne, undefined);
});

test('aperçu de propagation : portée enseigne, catégories manuelles protégées', () => {
  const tx: Transaction[] = [
    { id: '1', date: '2026-01-01', libelle: 'LIDL', montant: -10, enseigneId: 'lidl', categorie: 'Autre' },
    { id: '2', date: '2026-01-02', libelle: 'LIDL', montant: -20, enseigneId: 'lidl', categorie: 'Autre' },
    { id: '3', date: '2026-01-03', libelle: 'LIDL', montant: -5, enseigneId: 'lidl', categorie: 'Cadeaux', categorieManuelle: true },
    { id: '4', date: '2026-01-04', libelle: 'KAUFLAND', montant: -7, enseigneId: 'kaufland', categorie: 'Autre' },
  ];
  const ap = apercuPropagation(tx, { transactionId: '1', nouvelleCategorie: 'Courses alimentaires', portee: 'enseigne' }, enseignes);
  assert.deepEqual(ap.touchees.map((t) => t.id), ['1', '2']);
  assert.deepEqual(ap.ignoreesManuelles.map((t) => t.id), ['3']);
  assert.equal(ap.montantTotal, -30);
  const g = apercuPropagation(tx, { transactionId: '1', nouvelleCategorie: 'Courses alimentaires', portee: 'groupe' }, enseignes, true);
  assert.deepEqual(g.touchees.map((t) => t.id), ['1', '2', '3', '4']);
});

test('répartition, concentration, recouvrement, transparence, arbitrage', () => {
  const r = repartition([{ id: 'a', valeur: 60, classe: 'actions' }, { id: 'b', valeur: 40, classe: 'obligations' }], 'classe');
  assert.deepEqual(r.map((x) => [x.cle, x.part]), [['actions', 0.6], ['obligations', 0.4]]);
  proche(herfindahl([50, 50]), 0.5);
  proche(recouvrement({ AAPL: 0.05, MSFT: 0.04 }, { AAPL: 0.07, NVDA: 0.06 }), 0.05);
  assert.deepEqual(transparence([{ id: 'etf', valeur: 1000 }], { etf: { US: 0.7, EU: 0.3 } }), { US: 700, EU: 300 });
  assert.deepEqual(arbitrageVersCible({ actions: 70, obligations: 30 }, { actions: 0.6, obligations: 0.4 }), { actions: -10, obligations: 10 });
  assert.throws(() => arbitrageVersCible({ a: 1 }, { a: 0.5 }));
});

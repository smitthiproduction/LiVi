import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  TAXONOMIE,
  FILTRES_COMMUNS,
  COLLECTIONS,
  ongletsFiche,
  filtresClasse,
  champsPosition,
  appliquerCriteres,
  collectionNeutre,
  normaliser,
} from '../src/index.ts';

const ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;

test('identifiants des classes et sous-classes uniques et au bon format', () => {
  const classes = new Set<string>();
  for (const c of TAXONOMIE) {
    assert.match(c.id, ID, c.id);
    assert.ok(!classes.has(c.id), `classe en double ${c.id}`);
    classes.add(c.id);
    const sous = new Set<string>();
    for (const s of c.sousClasses) {
      assert.match(s.id, ID, `${c.id}/${s.id}`);
      assert.ok(!sous.has(s.id), `sous-classe en double ${c.id}/${s.id}`);
      sous.add(s.id);
    }
  }
});

test('chaque classe a au moins deux sous-classes, des filtres, un aperçu et des champs', () => {
  for (const c of TAXONOMIE) {
    assert.ok(c.sousClasses.length >= 2, `${c.id} : sous-classes`);
    assert.ok(c.filtres.length >= 2, `${c.id} : filtres`);
    assert.ok(c.champs.length >= 2, `${c.id} : champs`);
    assert.equal(c.onglets[0]?.id, 'apercu', `${c.id} : l'aperçu ouvre la fiche`);
  }
});

test('les filtres cités par une sous-classe existent dans sa classe', () => {
  for (const c of TAXONOMIE) {
    const ids = new Set(c.filtres.map((f) => f.id));
    for (const s of c.sousClasses) {
      for (const f of s.filtres ?? []) assert.ok(ids.has(f), `${c.id}/${s.id} cite ${f}`);
    }
  }
});

test('pas d’identifiant de filtre en double dans une classe (communs compris)', () => {
  for (const c of TAXONOMIE) {
    const ids = filtresClasse(c.id).map((f) => f.id);
    assert.equal(new Set(ids).size, ids.length, `${c.id} : ${ids.join(',')}`);
  }
  assert.ok(FILTRES_COMMUNS.length >= 5);
});

test('les obligations couvrent État, entreprises IG et HY, convertibles et inflation', () => {
  const ids = TAXONOMIE.find((c) => c.id === 'obligations')!.sousClasses.map((s) => s.id);
  for (const attendu of ['etat', 'supranationale', 'entreprise-ig', 'entreprise-hy', 'convertible', 'indexee-inflation', 'verte-durable', 'zero-coupon', 'perpetuelle-subordonnee']) {
    assert.ok(ids.includes(attendu), attendu);
  }
});

test('ongletsFiche insère les onglets de sous-classe après l’aperçu', () => {
  const onglets = ongletsFiche('obligations', 'convertible').map((o) => o.id);
  assert.equal(onglets[0], 'apercu');
  assert.equal(onglets[1], 'conversion');
  assert.ok(onglets.includes('echeancier'));
  assert.throws(() => ongletsFiche('obligations', 'inconnue'));
  assert.throws(() => ongletsFiche('inconnue'));
});

test('champsPosition ajoute les champs de sous-classe sans doublon', () => {
  const champs = champsPosition('immobilier', 'scpi').map((c) => c.id);
  assert.ok(champs.includes('taux-distribution'));
  assert.equal(new Set(champs).size, champs.length);
});

test('les collections sont neutres et ne citent que des filtres existants', () => {
  for (const col of COLLECTIONS) {
    assert.ok(collectionNeutre(col), col.label);
    const ids = new Set(filtresClasse(col.classe).map((f) => f.id));
    for (const k of Object.keys(col.criteres)) assert.ok(ids.has(k), `${col.id} : ${k}`);
  }
});

test('appliquerCriteres : plage, multi, booléen, et valeur absente exclue', () => {
  const lignes = [
    { nom: 'A', categorieEmetteur: 'État', maturiteRestante: 2, verte: false },
    { nom: 'B', categorieEmetteur: 'Entreprise', maturiteRestante: 4, verte: true },
    { nom: 'C', categorieEmetteur: 'État', verte: false },
  ];
  const filtres = filtresClasse('obligations');
  const r = appliquerCriteres(lignes, { 'categorie-emetteur': { kind: 'multi', valeurs: ['État'] }, 'maturite-restante': { kind: 'plage', max: 3 } }, filtres);
  assert.deepEqual(r.map((l) => l.nom), ['A']);
  const v = appliquerCriteres(lignes, { verte: { kind: 'booleen', valeur: true } }, filtres);
  assert.deepEqual(v.map((l) => l.nom), ['B']);
  assert.throws(() => appliquerCriteres(lignes, { inconnu: { kind: 'booleen', valeur: true } }, filtres));
});

test('normaliser retire accents et casse', () => {
  assert.equal(normaliser('  Société   Générale '), 'societe generale');
});

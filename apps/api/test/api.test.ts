import { test } from 'node:test';
import assert from 'node:assert/strict';
import { evaluer, maintenanceEnCours, comparerVersions, seau, type Ajustement, type Drapeau, type Maintenance } from '../src/modules/drapeaux/evaluation.ts';
import { MESSAGES, message } from '../src/modules/messages/catalogue.ts';
import { ajouter, verifierChaine, type EntreeAudit } from '../src/modules/audit/journal.ts';
import { controlerRevendications } from '../src/modules/auth/revendications.ts';
import { executer } from '../src/modules/tests-usage/executeur.ts';
import type { Adaptateur, Etape } from '../src/modules/tests-usage/types.ts';
import { scenario as BUD02 } from '../src/modules/tests-usage/scenarios/BUD-02.ts';
import { enseignes, transactions } from '../src/modules/tests-usage/jeux/depenses-lidl.ts';
import { apercuPropagation, type Transaction } from '../../../packages/core/src/index.ts';

const T = new Date('2026-11-10T12:00:00Z');
const ctx = { utilisateurId: 'u1', offre: 'plus' as const, versionApp: '1.2.0', maintenant: T };

test('drapeaux : défaut, offre, version, ajustements utilisateur > segment > global', () => {
  const d: Drapeau = { cle: 'marches.globe', defaut: true, offres: ['plus', 'signature'], versionMinimale: '1.1.0' };
  assert.deepEqual(evaluer(d, ctx), { valeur: true, raison: 'defaut' });
  assert.equal(evaluer(d, { ...ctx, offre: 'essentiel' }).raison, 'offre');
  assert.equal(evaluer(d, { ...ctx, versionApp: '1.0.9' }).raison, 'version');
  const aj: Ajustement[] = [
    { id: 'g', drapeau: 'marches.globe', cible: { type: 'global' }, valeur: false, motif: 'Incident GPU', auteur: 'admin:a', validePar: ['admin:a', 'admin:b'] },
    { id: 's', drapeau: 'marches.globe', cible: { type: 'segment', id: 'android-ancien' }, valeur: false, motif: 'Lenteur', auteur: 'admin:a' },
    { id: 'u', drapeau: 'marches.globe', cible: { type: 'utilisateur', id: 'u1' }, valeur: true, motif: 'Client test', auteur: 'admin:a', expireLe: '2026-12-01T00:00:00Z' },
  ];
  assert.equal(evaluer(d, ctx, aj).raison, 'ajustement:u');
  assert.equal(evaluer(d, { ...ctx, utilisateurId: 'u2', segments: ['android-ancien'] }, aj).raison, 'ajustement:s');
  assert.equal(evaluer(d, { ...ctx, utilisateurId: 'u3' }, aj).raison, 'ajustement:g');
});

test('ajustement global sans double validation ou expiré : ignoré', () => {
  const d: Drapeau = { cle: 'x', defaut: true };
  const g: Ajustement = { id: 'g', drapeau: 'x', cible: { type: 'global' }, valeur: false, motif: 'm', auteur: 'admin:a', validePar: ['admin:a'] };
  assert.equal(evaluer(d, ctx, [g]).valeur, true);
  const exp: Ajustement = { id: 'u', drapeau: 'x', cible: { type: 'utilisateur', id: 'u1' }, valeur: false, motif: 'm', auteur: 'a', expireLe: '2026-11-01T00:00:00Z' };
  assert.equal(evaluer(d, ctx, [exp]).valeur, true);
});

test('maintenance : coupe la fonction, sauf pour les comptes de test en liste blanche', () => {
  const m: Maintenance = { active: true, fonctions: ['import.csv'], message: 'Maintenance', listeBlancheComptesTest: true, debut: '2026-11-10T11:00:00Z', fin: '2026-11-10T13:00:00Z' };
  const d: Drapeau = { cle: 'import.csv', defaut: true };
  assert.equal(evaluer(d, ctx, [], m).raison, 'maintenance');
  assert.equal(evaluer(d, { ...ctx, compteTest: true }, [], m).valeur, true);
  assert.equal(maintenanceEnCours(m, 'marches.globe', ctx), false);
  assert.equal(maintenanceEnCours({ ...m, fonctions: [] }, 'marches.globe', ctx), true);
  assert.equal(maintenanceEnCours(m, 'import.csv', { ...ctx, maintenant: new Date('2026-11-10T14:00:00Z') }), false);
});

test('versions et déploiement progressif stable', () => {
  assert.equal(comparerVersions('1.10.0', '1.9.9'), 1);
  assert.equal(comparerVersions('2.0', '2.0.0'), 0);
  assert.equal(seau('u1', 'k'), seau('u1', 'k'));
  const d: Drapeau = { cle: 'k', defaut: false, pourcentage: 50 };
  const actifs = Array.from({ length: 1000 }, (_, i) => evaluer(d, { ...ctx, utilisateurId: `u${i}` }).valeur).filter(Boolean).length;
  assert.ok(actifs > 400 && actifs < 600, String(actifs));
});

test('catalogue des messages : codes uniques, ton du design system', () => {
  assert.equal(new Set(MESSAGES.map((m) => m.code)).size, MESSAGES.length);
  for (const m of MESSAGES) {
    assert.ok(!/!/.test(m.message + (m.action ?? '')), `point d'exclamation : ${m.code}`);
    assert.ok(!/\p{Extended_Pictographic}/u.test(m.message + (m.action ?? '')), `emoji : ${m.code}`);
    assert.ok(!/recommand|conseill(?!er en)/i.test(m.message) || m.code === 'IA_DEMANDE_DE_CONSEIL', m.code);
  }
  assert.equal(message('CODE_ABSENT').code, 'ERR_INCONNUE');
});

test('journal d’audit chaîné : une modification est détectée', () => {
  let j: EntreeAudit[] = [];
  j = [...j, ajouter(j, { acteur: 'admin:a', action: 'maintenance.activer', cible: 'import.csv', horodatage: '2026-11-10T10:00:00Z' })];
  j = [...j, ajouter(j, { acteur: 'admin:b', action: 'ajustement.valider', cible: 'g', horodatage: '2026-11-10T10:01:00Z' })];
  assert.deepEqual(verifierChaine(j), { valide: true });
  const falsifie = j.map((e) => (e.numero === 1 ? { ...e, acteur: 'admin:x' } : e));
  assert.deepEqual(verifierChaine(falsifie), { valide: false, rupture: 1 });
  assert.equal(verifierChaine(j.slice(1)).valide, false);
});

test('revendications Apple : émetteur, audience, expiration, nonce', () => {
  const r = { iss: 'https://appleid.apple.com', aud: 'fr.livi.app', exp: 2000, iat: 1000, sub: '000.abc', nonce: 'n1' };
  const att = { audiences: ['fr.livi.app'], nonceEmpreinte: 'n1', maintenant: 1500 };
  assert.deepEqual(controlerRevendications('apple', r, att), { ok: true, sub: '000.abc' });
  assert.deepEqual(controlerRevendications('apple', { ...r, iss: 'https://accounts.google.com' }, att), { ok: false, raison: 'emetteur' });
  assert.deepEqual(controlerRevendications('apple', { ...r, aud: 'autre' }, att), { ok: false, raison: 'audience' });
  assert.deepEqual(controlerRevendications('apple', r, { ...att, maintenant: 3000 }), { ok: false, raison: 'expire' });
  assert.deepEqual(controlerRevendications('apple', { ...r, nonce: 'autre' }, att), { ok: false, raison: 'nonce' });
  assert.equal(controlerRevendications('google', { ...r, iss: 'accounts.google.com' }, { audiences: ['fr.livi.app'], maintenant: 1500 }).ok, true);
});

/** Adaptateur en mémoire : rejoue le scénario BUD-02 sur le vrai calcul de @livi/core. */
function adaptateurMemoire(): Adaptateur {
  let tx: Transaction[] = [];
  let selection = '';
  let apercu: ReturnType<typeof apercuPropagation> | undefined;
  return {
    async preparer() { tx = transactions(); },
    async agir(e: Etape) {
      if (!('action' in e)) return;
      if (e.action === 'ouvrir') selection = String(e.cible).split(':')[1]!;
      if (e.action === 'changer-categorie') apercu = apercuPropagation(tx, { transactionId: selection, nouvelleCategorie: String(e.valeur), portee: e.portee as 'enseigne' }, enseignes);
      if (e.action === 'valider') {
        const ids = new Set(apercu!.touchees.map((t) => t.id));
        tx = tx.map((t) => (ids.has(t.id) ? { ...t, categorie: 'Courses alimentaires' } : t));
      }
    },
    async verifier(e: Etape) {
      if (!('attendu' in e)) return { ok: false };
      if (e.attendu === 'apercu') {
        const o = { nombre: apercu?.nombre, ignoreesManuelles: apercu?.ignoreesManuelles.length, montantTotal: apercu?.montantTotal };
        return { ok: o.nombre === e.nombre && o.ignoreesManuelles === e.ignoreesManuelles && o.montantTotal === e.montantTotal, obtenu: o };
      }
      const t = tx.find((x) => x.id === String(e.cible).split(':')[1]);
      return { ok: t?.categorie === e.valeur, obtenu: t?.categorie };
    },
    async nettoyer() { tx = []; },
  };
}

test('bouton « Tester la fonctionnalité » : le scénario BUD-02 passe sur un compte de test', async () => {
  const r = await executer(BUD02, adaptateurMemoire());
  assert.equal(r.ok, true, JSON.stringify(r.etapes));
  assert.equal(r.etapes.length, BUD02.etapes.length);
});

test('l’exécuteur refuse un prérequis qui n’est pas un compte de test', async () => {
  await assert.rejects(executer({ ...BUD02, prerequis: ['compte:reel-42'] }, adaptateurMemoire()));
});

import type { Adaptateur, Resultat, ScenarioTest } from './types.ts';

/**
 * Exécute un scénario sur un compte de test. Refuse tout prérequis qui ne désigne pas un compte de test
 * ou un jeu de données fictif. Le nettoyage s'exécute même en cas d'échec.
 */
export async function executer(s: ScenarioTest, a: Adaptateur, horloge: () => number = Date.now): Promise<Resultat> {
  for (const p of s.prerequis) if (!/^(compte-test|jeu):[a-z0-9-]+$/.test(p)) throw new Error(`Prérequis refusé (comptes de test et jeux fictifs uniquement) : ${p}`);
  const debut = horloge();
  const etapes: Resultat['etapes'] = [];
  try {
    await a.preparer(s.prerequis);
    for (const [index, e] of s.etapes.entries()) {
      try {
        if ('attendu' in e) {
          const v = await a.verifier(e);
          etapes.push({ index, ok: v.ok, detail: v.ok ? undefined : `Attendu ${JSON.stringify(e)}, obtenu ${JSON.stringify(v.obtenu)}` });
          if (!v.ok) break;
        } else {
          await a.agir(e);
          etapes.push({ index, ok: true });
        }
      } catch (err) {
        etapes.push({ index, ok: false, detail: (err as Error).message });
        break;
      }
    }
  } finally {
    await a.nettoyer(s.nettoyage);
  }
  const ok = etapes.length === s.etapes.length && etapes.every((x) => x.ok);
  return { fonctionnalite: s.fonctionnalite, ok, etapes, dureeMs: horloge() - debut };
}

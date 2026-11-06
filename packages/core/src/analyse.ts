/**
 * Outils d'analyse descriptifs du portefeuille : répartition, concentration, recouvrement des fonds,
 * calcul d'arbitrage vers une cible fixée par l'utilisateur. Aucune cible n'est proposée par LiVi.
 */

export interface Position { id: string; valeur: number; [axe: string]: unknown }

/** Répartition par axe (classe, sous-classe, pays, secteur, devise, enveloppe…), en valeur et en part. */
export function repartition(positions: readonly Position[], axe: string): { cle: string; valeur: number; part: number }[] {
  const total = positions.reduce((s, p) => s + p.valeur, 0);
  const m = new Map<string, number>();
  for (const p of positions) {
    const k = String(p[axe] ?? 'Non renseigné');
    m.set(k, (m.get(k) ?? 0) + p.valeur);
  }
  return [...m.entries()].map(([cle, valeur]) => ({ cle, valeur, part: total ? valeur / total : 0 })).sort((a, b) => b.valeur - a.valeur);
}

/** Indice de concentration de Herfindahl-Hirschman (0 = très diversifié, 1 = une seule ligne). */
export function herfindahl(valeurs: readonly number[]): number {
  const total = valeurs.reduce((s, v) => s + v, 0);
  if (!total) return 0;
  return valeurs.reduce((s, v) => s + (v / total) ** 2, 0);
}

/** Recouvrement entre deux fonds : somme des poids minimaux des lignes communes (0 à 1). */
export function recouvrement(a: Record<string, number>, b: Record<string, number>): number {
  let s = 0;
  for (const [k, w] of Object.entries(a)) if (b[k] !== undefined) s += Math.min(w, b[k]!);
  return s;
}

/**
 * Exposition par transparence : les lignes des fonds détenus sont redistribuées selon leur composition.
 * `compositions[fondId]` donne les poids (somme ≈ 1) des titres ou pays du fonds.
 */
export function transparence(positions: readonly { id: string; valeur: number }[], compositions: Record<string, Record<string, number>>): Record<string, number> {
  const res: Record<string, number> = {};
  for (const p of positions) {
    const comp = compositions[p.id];
    if (!comp) { res[p.id] = (res[p.id] ?? 0) + p.valeur; continue; }
    for (const [k, w] of Object.entries(comp)) res[k] = (res[k] ?? 0) + p.valeur * w;
  }
  return res;
}

/**
 * Arbitrage vers une cible définie par l'utilisateur (parts par poche, somme = 1).
 * Renvoie les montants à déplacer (positif = renforcer, négatif = alléger) ; avec `versement`, répartit d'abord l'argent frais.
 */
export function arbitrageVersCible(actuel: Record<string, number>, cible: Record<string, number>, versement = 0): Record<string, number> {
  const somme = Object.values(cible).reduce((s, v) => s + v, 0);
  if (Math.abs(somme - 1) > 1e-6) throw new RangeError('La cible doit totaliser 100 %.');
  const total = Object.values(actuel).reduce((s, v) => s + v, 0) + versement;
  const res: Record<string, number> = {};
  for (const k of new Set([...Object.keys(actuel), ...Object.keys(cible)])) {
    res[k] = Math.round(((cible[k] ?? 0) * total - (actuel[k] ?? 0)) * 100) / 100;
  }
  return res;
}

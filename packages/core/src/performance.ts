/**
 * Performance d'un portefeuille.
 * - TWR (rendement pondéré par le temps) : neutralise les versements, compare des stratégies.
 * - TRI / XIRR (rendement pondéré par l'argent) : ce que l'investisseur a réellement obtenu.
 */

export interface Valorisation { date: string; valeur: number }
export interface Flux { date: string; montant: number } // versement > 0 dans le portefeuille, retrait < 0

/**
 * TWR à partir de valorisations datées et des flux survenus entre elles.
 * Convention : le flux d'une date est versé juste après la valorisation de cette date.
 */
export function twr(valorisations: readonly Valorisation[], flux: readonly Flux[] = []): number {
  const v = [...valorisations].sort((a, b) => a.date.localeCompare(b.date));
  if (v.length < 2) return 0;
  let cumul = 1;
  for (let i = 1; i < v.length; i++) {
    const debut = v[i - 1]!;
    const fin = v[i]!;
    const apports = flux.filter((f) => f.date >= debut.date && f.date < fin.date).reduce((s, f) => s + f.montant, 0);
    const base = debut.valeur + apports;
    if (base <= 0) continue;
    cumul *= fin.valeur / base;
  }
  return cumul - 1;
}

const JOURS_AN = 365;
const jours = (a: string, b: string) => (Date.parse(b) - Date.parse(a)) / 86_400_000;

/**
 * XIRR : taux annuel r tel que la somme des flux actualisés est nulle.
 * Flux vus depuis l'investisseur : versements négatifs, valeur finale positive.
 */
export function xirr(flux: readonly Flux[], estimation = 0.1): number {
  if (flux.length < 2) throw new RangeError('Il faut au moins deux flux.');
  const t0 = flux.reduce((m, f) => (f.date < m ? f.date : m), flux[0]!.date);
  const pos = flux.some((f) => f.montant > 0);
  const neg = flux.some((f) => f.montant < 0);
  if (!pos || !neg) throw new RangeError('Il faut au moins un flux positif et un flux négatif.');
  const vna = (r: number) => flux.reduce((s, f) => s + f.montant / Math.pow(1 + r, jours(t0, f.date) / JOURS_AN), 0);
  // Newton, puis bissection de secours
  let r = estimation;
  for (let i = 0; i < 50; i++) {
    const f = vna(r);
    const h = 1e-6;
    const d = (vna(r + h) - f) / h;
    if (!Number.isFinite(d) || d === 0) break;
    const next = r - f / d;
    if (!Number.isFinite(next) || next <= -0.9999) break;
    if (Math.abs(next - r) < 1e-10) return next;
    r = next;
  }
  let lo = -0.9999, hi = 10;
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    if (vna(lo) * vna(mid) <= 0) hi = mid; else lo = mid;
  }
  return (lo + hi) / 2;
}

/** Baisse maximale depuis un plus haut, sur une série de valeurs. */
export function baisseMaximale(valeurs: readonly number[]): number {
  let pic = -Infinity, pire = 0;
  for (const v of valeurs) {
    pic = Math.max(pic, v);
    if (pic > 0) pire = Math.min(pire, v / pic - 1);
  }
  return pire;
}

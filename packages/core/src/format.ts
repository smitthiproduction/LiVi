/**
 * Mise en forme des nombres à la française, identique sur toutes les surfaces :
 * espace fine insécable pour les milliers, virgule décimale, vrai signe moins (U+2212),
 * espace insécable avant l'unité. « 184 320,57 € », « +2,41 % », « −0,80 % ».
 */
export const MOINS = '−';
const FINE = ' ';
const INSECABLE = ' ';

export function formaterNombre(valeur: number, decimales = 2): string {
  if (!Number.isFinite(valeur)) return '—';
  const arrondi = Math.abs(valeur).toFixed(decimales);
  const [entier = '0', fraction] = arrondi.split('.');
  const groupes = entier.replace(/\B(?=(\d{3})+(?!\d))/g, FINE);
  const negatif = valeur < 0 && Number(arrondi) !== 0;
  return `${negatif ? MOINS : ''}${groupes}${fraction ? `,${fraction}` : ''}`;
}

export function formaterMontant(valeur: number, devise = '€', decimales = 2): string {
  const texte = formaterNombre(valeur, decimales);
  return texte === '—' ? texte : `${texte}${INSECABLE}${devise}`;
}

/** Pourcentage signé par défaut (« +2,41 % ») : le signe ne dépend jamais de la seule couleur. */
export function formaterPourcentage(valeur: number, decimales = 2, signe = true): string {
  const texte = formaterNombre(valeur, decimales);
  if (texte === '—') return texte;
  const plus = signe && valeur > 0 && Number(Math.abs(valeur).toFixed(decimales)) !== 0 ? '+' : '';
  return `${plus}${texte}${INSECABLE}%`;
}

export type Sens = 'hausse' | 'baisse' | 'stable';

/** Variation affichable : texte signé, sens et flèche (accessibilité : jamais la couleur seule). */
export function variation(valeur: number, decimales = 2): { texte: string; sens: Sens; fleche: '↑' | '↓' | '→'; libelleAccessible: string } {
  const nul = Number(Math.abs(valeur).toFixed(decimales)) === 0;
  const sens: Sens = nul ? 'stable' : valeur > 0 ? 'hausse' : 'baisse';
  const fleche = sens === 'hausse' ? '↑' : sens === 'baisse' ? '↓' : '→';
  const texte = formaterPourcentage(nul ? 0 : valeur, decimales);
  const libelleAccessible = sens === 'stable' ? 'stable' : `${sens} de ${formaterPourcentage(Math.abs(valeur), decimales, false)}`;
  return { texte, sens, fleche, libelleAccessible };
}

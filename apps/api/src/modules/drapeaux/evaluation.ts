/**
 * Drapeaux de fonctionnalité, ajustements par client ou globaux, et maintenance.
 * Priorité : maintenance (sauf liste blanche) > ajustement utilisateur > ajustement segment > règle globale > défaut.
 * Chaque ajustement porte un motif, un auteur et une échéance (BO-20).
 */

export interface Contexte {
  utilisateurId: string;
  offre: 'essentiel' | 'plus' | 'signature';
  versionApp?: string;
  plateforme?: 'ios' | 'android' | 'web';
  compteTest?: boolean;
  segments?: readonly string[];
  maintenant?: Date;
}

export interface Ajustement {
  id: string;
  drapeau: string;
  cible: { type: 'utilisateur'; id: string } | { type: 'segment'; id: string } | { type: 'global' };
  valeur: boolean;
  motif: string;
  auteur: string;
  expireLe?: string; // ISO ; un ajustement expiré est ignoré
  /** Global : deux validations distinctes exigées. */
  validePar?: readonly string[];
}

export interface Drapeau {
  cle: string;
  defaut: boolean;
  offres?: readonly Contexte['offre'][];
  versionMinimale?: string;
  /** Déploiement progressif : pourcentage d'utilisateurs (répartition stable par identifiant). */
  pourcentage?: number;
}

export interface Maintenance {
  active: boolean;
  /** Fonctions concernées ; vide = tout le service. */
  fonctions: readonly string[];
  debut?: string;
  fin?: string;
  message: string;
  /** Les comptes de test restent servis pour pouvoir lancer les scénarios de test. */
  listeBlancheComptesTest: boolean;
}

export function comparerVersions(a: string, b: string): number {
  const pa = a.split('.').map(Number), pb = b.split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d !== 0) return Math.sign(d);
  }
  return 0;
}

/** Répartition stable 0–99 à partir de l'identifiant (FNV-1a). */
export function seau(id: string, cle: string): number {
  let h = 0x811c9dc5;
  for (const ch of `${cle}:${id}`) { h ^= ch.charCodeAt(0); h = Math.imul(h, 0x01000193) >>> 0; }
  return h % 100;
}

export function maintenanceEnCours(m: Maintenance | undefined, fonction: string, ctx: Contexte): boolean {
  if (!m?.active) return false;
  const t = (ctx.maintenant ?? new Date()).toISOString();
  if (m.debut && t < m.debut) return false;
  if (m.fin && t >= m.fin) return false;
  if (ctx.compteTest && m.listeBlancheComptesTest) return false;
  return m.fonctions.length === 0 || m.fonctions.includes(fonction);
}

function actif(a: Ajustement, ctx: Contexte): boolean {
  if (a.expireLe && (ctx.maintenant ?? new Date()).toISOString() >= a.expireLe) return false;
  if (a.cible.type === 'global') return new Set(a.validePar ?? []).size >= 2;
  return true;
}

export function evaluer(d: Drapeau, ctx: Contexte, ajustements: readonly Ajustement[] = [], maintenance?: Maintenance): { valeur: boolean; raison: string } {
  if (maintenanceEnCours(maintenance, d.cle, ctx)) return { valeur: false, raison: 'maintenance' };
  const miens = ajustements.filter((a) => a.drapeau === d.cle && actif(a, ctx));
  const u = miens.find((a) => a.cible.type === 'utilisateur' && a.cible.id === ctx.utilisateurId);
  if (u) return { valeur: u.valeur, raison: `ajustement:${u.id}` };
  const s = miens.find((a) => a.cible.type === 'segment' && (ctx.segments ?? []).includes(a.cible.id));
  if (s) return { valeur: s.valeur, raison: `ajustement:${s.id}` };
  const g = miens.find((a) => a.cible.type === 'global');
  if (g) return { valeur: g.valeur, raison: `ajustement:${g.id}` };
  if (d.offres && !d.offres.includes(ctx.offre)) return { valeur: false, raison: 'offre' };
  if (d.versionMinimale && ctx.versionApp && comparerVersions(ctx.versionApp, d.versionMinimale) < 0) return { valeur: false, raison: 'version' };
  if (d.pourcentage !== undefined) return { valeur: seau(ctx.utilisateurId, d.cle) < d.pourcentage, raison: 'deploiement-progressif' };
  return { valeur: d.defaut, raison: 'defaut' };
}

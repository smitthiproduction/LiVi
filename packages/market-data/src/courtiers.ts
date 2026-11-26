/**
 * Courtiers et lieux d'exécution : pour chaque lieu, les courtiers qui y donnent accès d'après leur politique d'exécution publiée.
 * Règles (décision 0008) :
 * - information factuelle, aucun conseil ni mise en avant : ordre alphabétique, jamais selon une rémunération ;
 * - LiVi n'exécute et ne transmet aucun ordre : le lien ouvre le site ou l'application du courtier, sans quantité ni sens d'ordre ;
 * - liens d'affiliation : même format et même rémunération pour chaque courtier, mention « Lien commercial »,
 *   actifs seulement après avis juridique et statut éventuel d'intermédiaire (ORIAS), sinon lien simple vers le site ;
 * - courtiers agréés seulement (registre de l'autorité ; MiCA pour les plateformes crypto).
 */

export type ModeExecution =
  | 'lieu-au-choix' // l'investisseur choisit le lieu
  | 'routage-courtier' // le courtier choisit le lieu selon sa politique de meilleure exécution
  | 'contrepartie-courtier'; // le courtier exécute contre lui-même au meilleur prix observé sur plusieurs lieux

export interface Courtier {
  id: string;
  nom: string;
  /** Autorité et numéro d'agrément (AMF, BaFin, ACPR…), vérifiés au back-office. */
  agrement: { autorite: string; reference: string; verifieLe: string } | null;
  politiqueExecution: { url: string; date: string } | null;
  lieux: readonly string[]; // MIC
  modes: readonly ModeExecution[];
  site: string;
  /** Lien d'affiliation, s'il existe un accord ; utilisé seulement si l'affiliation est activée. */
  affiliation?: { url: string };
}

export interface LienCourtier {
  id: string;
  nom: string;
  url: string;
  commercial: boolean;
  /** Mention à afficher sous la liste quand au moins un lien est commercial. */
  mention?: string;
  modes: readonly ModeExecution[];
  politiqueExecution: { url: string; date: string };
}

export const MENTION_AFFILIATION = 'Lien commercial : LiVi peut être rémunéré, de façon identique pour chaque courtier, sans effet sur l\'ordre d\'affichage.';

export interface OptionsCourtiers {
  /** Drapeau « affiliation-courtiers » : faux tant que l'avis juridique n'est pas versé. */
  affiliationActive: boolean;
}

/**
 * Courtiers qui donnent accès à un lieu, par ordre alphabétique.
 * Écarte les courtiers sans agrément vérifié ou sans politique d'exécution publiée (la source du constat).
 * Affiliation : tout ou rien, pour garder un traitement égal (si un courtier listé n'a pas de lien d'affiliation, aucun lien n'est commercial).
 */
export function courtiersPourLieu(mic: string, courtiers: readonly Courtier[], o: OptionsCourtiers): LienCourtier[] {
  const eligibles = courtiers
    .filter((c) => c.agrement !== null && c.politiqueExecution !== null && c.lieux.includes(mic))
    .sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
  const commercial = o.affiliationActive && eligibles.length > 0 && eligibles.every((c) => c.affiliation !== undefined);
  return eligibles.map((c) => ({
    id: c.id,
    nom: c.nom,
    url: commercial ? c.affiliation!.url : c.site,
    commercial,
    ...(commercial ? { mention: MENTION_AFFILIATION } : {}),
    modes: c.modes,
    politiqueExecution: c.politiqueExecution!,
  }));
}

/** Lieux accessibles chez un courtier, d'après sa politique d'exécution. */
export function lieuxDuCourtier(id: string, courtiers: readonly Courtier[]): readonly string[] {
  return courtiers.find((c) => c.id === id)?.lieux ?? [];
}

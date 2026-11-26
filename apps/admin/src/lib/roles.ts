/**
 * Droits du back-office par rôle. Contrôlés côté serveur (API) ; cette matrice sert aussi à l'affichage.
 * Toute action d'écriture est journalisée dans le journal d'audit chaîné.
 */
export const ROLES = ['administrateur', 'support', 'qa', 'contenu', 'conformite', 'lecture'] as const;
export type Role = (typeof ROLES)[number];

export const PERMISSIONS = {
  'tableau-de-bord.lire': ['administrateur', 'support', 'qa', 'contenu', 'conformite', 'lecture'],
  'utilisateurs.lire': ['administrateur', 'support'],
  'utilisateurs.acces-assiste': ['support'], // seulement avec consentement temporaire de l'utilisateur
  'offres.modifier': ['administrateur'],
  'ajustements.utilisateur': ['administrateur', 'support'],
  'ajustements.segment': ['administrateur'],
  'ajustements.global': ['administrateur'], // double validation par deux administrateurs distincts
  'maintenance.piloter': ['administrateur'],
  'tests.lancer': ['administrateur', 'support', 'qa'],
  'comptes-test.gerer': ['administrateur', 'qa'],
  'journaux.lire': ['administrateur', 'support', 'qa'],
  'erreurs.lire': ['administrateur', 'support', 'qa'],
  'bugs.gerer': ['administrateur', 'support', 'qa'],
  'audits.lire': ['administrateur', 'conformite'],
  'messages-erreur.modifier': ['administrateur', 'contenu'],
  'modeles-csv.modifier': ['administrateur', 'contenu'],
  'annuaire.modifier': ['administrateur', 'contenu'],
  'classes-actifs.publier': ['administrateur'],
  'marches.modifier': ['administrateur', 'contenu'],
  'referentiel.modifier': ['administrateur', 'contenu'], // registre des identifiants, sources de cours, courtiers et lieux d'exécution
  'affiliation.activer': ['conformite'], // seulement après l'avis juridique versé (décision 0008)
  'connecteurs.piloter': ['administrateur'],
  'quotas-ia.modifier': ['administrateur'],
  'contenus.modifier': ['administrateur', 'contenu'],
  'conformite.lire': ['administrateur', 'conformite'],
  'roles.gerer': ['administrateur'],
} as const satisfies Record<string, readonly Role[]>;

export type Permission = keyof typeof PERMISSIONS;

export function autorise(roles: readonly Role[], p: Permission): boolean {
  return roles.some((r) => (PERMISSIONS[p] as readonly Role[]).includes(r));
}

/** Un ajustement global n'est actif qu'avec deux validations d'administrateurs distincts. */
export function validationGlobaleComplete(validateurs: readonly { id: string; roles: readonly Role[] }[]): boolean {
  return new Set(validateurs.filter((v) => v.roles.includes('administrateur')).map((v) => v.id)).size >= 2;
}

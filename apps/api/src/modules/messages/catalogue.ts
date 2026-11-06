/**
 * Catalogue des messages d'erreur (BO-18). Chaque erreur renvoyée par l'API porte un code d'ici.
 * Ton : vouvoiement, phrase courte, pas de jargon, pas de point d'exclamation, une action proposée.
 */
export interface MessageErreur { code: string; statut: number; message: string; action?: string; journaliser: 'info' | 'avertissement' | 'erreur' }

export const MESSAGES: readonly MessageErreur[] = [
  { code: 'ERR_INCONNUE', statut: 500, message: 'Une erreur est survenue de notre côté.', action: 'Réessayez dans un instant. Si le problème continue, signalez-le depuis Profil.', journaliser: 'erreur' },
  { code: 'AUTH_JETON_INVALIDE', statut: 401, message: 'Votre session a expiré.', action: 'Reconnectez-vous.', journaliser: 'info' },
  { code: 'AUTH_CODE_INCORRECT', statut: 400, message: 'Ce code ne correspond pas.', action: 'Vérifiez le dernier e-mail reçu ou demandez un nouveau code.', journaliser: 'info' },
  { code: 'AUTH_CODE_EXPIRE', statut: 400, message: 'Ce code a expiré.', action: 'Demandez un nouveau code.', journaliser: 'info' },
  { code: 'AUTH_TROP_DE_TENTATIVES', statut: 429, message: 'Trop de tentatives.', action: 'Patientez quinze minutes avant de réessayer.', journaliser: 'avertissement' },
  { code: 'AUTH_APPLE_REFUSE', statut: 401, message: 'Apple n’a pas confirmé votre identité.', action: 'Réessayez ou choisissez une autre méthode de connexion.', journaliser: 'avertissement' },
  { code: 'AUTH_GOOGLE_REFUSE', statut: 401, message: 'Google n’a pas confirmé votre identité.', action: 'Réessayez ou choisissez une autre méthode de connexion.', journaliser: 'avertissement' },
  { code: 'DROIT_REFUSE', statut: 403, message: 'Vous n’avez pas accès à cette fonction.', action: 'Vérifiez votre offre dans Profil.', journaliser: 'info' },
  { code: 'OFFRE_REQUISE', statut: 402, message: 'Cette fonction fait partie d’une offre supérieure.', action: 'Découvrez les offres dans Profil.', journaliser: 'info' },
  { code: 'MAINTENANCE', statut: 503, message: 'Cette fonction est en maintenance.', action: 'Vos données restent consultables sur cet appareil. Réessayez plus tard.', journaliser: 'info' },
  { code: 'VERSION_OBSOLETE', statut: 426, message: 'Cette version de LiVi n’est plus prise en charge.', action: 'Mettez l’application à jour.', journaliser: 'info' },
  { code: 'IMPORT_FORMAT_INCONNU', statut: 422, message: 'Nous ne reconnaissons pas ce fichier.', action: 'Choisissez l’établissement ou faites la correspondance des colonnes une fois.', journaliser: 'info' },
  { code: 'IMPORT_TROP_VOLUMINEUX', statut: 413, message: 'Ce fichier est trop volumineux.', action: 'Découpez-le par année et importez chaque partie.', journaliser: 'info' },
  { code: 'SYNCHRO_RECONNEXION', statut: 409, message: 'Votre banque demande une nouvelle confirmation.', action: 'Reconnectez le compte depuis sa fiche.', journaliser: 'info' },
  { code: 'SYNCHRO_INDISPONIBLE', statut: 503, message: 'La synchronisation de cet établissement est momentanément indisponible.', action: 'Vos dernières données restent affichées avec leur date. Réessayez plus tard.', journaliser: 'avertissement' },
  { code: 'IA_QUOTA_ATTEINT', statut: 429, message: 'Vos crédits LiVi IA du mois sont épuisés.', action: 'Ajoutez un pack de crédits ou attendez le renouvellement.', journaliser: 'info' },
  { code: 'IA_DEMANDE_DE_CONSEIL', statut: 422, message: 'LiVi IA ne donne pas de conseil en investissement.', action: 'Écrivez la règle que vous voulez appliquer, par exemple un DCA ou un seuil de vente.', journaliser: 'info' },
  { code: 'ORDRE_NON_DISPONIBLE', statut: 501, message: 'La transmission d’ordres n’est pas encore disponible.', action: 'LiVi vous enverra un rappel avec le détail de l’ordre à passer chez votre courtier.', journaliser: 'info' },
  { code: 'DONNEE_MARCHE_RETARDEE', statut: 200, message: 'Cours différés.', action: 'L’heure de la dernière mise à jour est affichée sous le cours.', journaliser: 'info' },
];

export function message(code: string): MessageErreur {
  return MESSAGES.find((m) => m.code === code) ?? MESSAGES[0]!;
}

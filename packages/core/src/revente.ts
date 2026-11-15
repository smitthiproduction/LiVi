/**
 * Prix de revente qui couvre frais et impôts pour un gain net visé.
 * Formule documentée (écran « Nouvelle consigne ») :
 *   P = PRU + (((g · PRU · q + c) / (1 − t)) + f) / q
 * - pru : prix de revient unitaire
 * - q   : quantité
 * - g   : gain net visé, en fraction (0,20 pour +20 %)
 * - c   : frais d'acquisition non inclus dans le PRU
 * - t   : taux d'imposition de la plus-value, saisi par l'utilisateur (depuis le 1er janvier 2026 : 0,314 pour le PFU,
 *         0,186 de prélèvements sociaux seuls en PEA de plus de 5 ans ; 0,30 et 0,172 auparavant)
 * - f   : frais de cession
 * C'est un calcul à partir des paramètres de l'utilisateur, pas une recommandation.
 */
export interface ParamsRevente { pru: number; quantite: number; gainVise: number; fraisAcquisition?: number; tauxImposition?: number; fraisCession?: number }

export function prixDeRevente({ pru, quantite, gainVise, fraisAcquisition = 0, tauxImposition = 0, fraisCession = 0 }: ParamsRevente): number {
  if (!(quantite > 0)) throw new RangeError('La quantité doit être positive.');
  if (!(pru >= 0)) throw new RangeError('Le prix de revient doit être positif ou nul.');
  if (tauxImposition < 0 || tauxImposition >= 1) throw new RangeError('Le taux d’imposition doit être compris entre 0 et 1 (exclu).');
  return pru + ((gainVise * pru * quantite + fraisAcquisition) / (1 - tauxImposition) + fraisCession) / quantite;
}

/** Prix de déclenchement d'un stop exprimé en pourcentage depuis un cours de référence. */
export function prixDepuisPourcentage(reference: number, pourcentage: number): number {
  return reference * (1 + pourcentage);
}

/** Scénarios de test d'usage lancés par le bouton « Tester la fonctionnalité » (BO-22). */
export type Etape =
  | { action: string; cible?: string; valeur?: unknown; [cle: string]: unknown }
  | { attendu: string; cible?: string; valeur?: unknown; [cle: string]: unknown };

export interface ScenarioTest {
  fonctionnalite: string; // identifiant du catalogue, ex. BUD-02
  titre: string;
  prerequis: readonly string[]; // compte-test:<offre>, jeu:<nom>
  etapes: readonly Etape[];
  nettoyage?: string;
}

/** Ce que l'exécuteur sait faire ; l'implémentation réelle pilote l'API sur un compte de test. */
export interface Adaptateur {
  preparer(prerequis: readonly string[]): Promise<void>;
  agir(etape: Etape): Promise<void>;
  verifier(etape: Etape): Promise<{ ok: boolean; obtenu?: unknown }>;
  nettoyer(quoi?: string): Promise<void>;
}

export interface Resultat {
  fonctionnalite: string;
  ok: boolean;
  etapes: { index: number; ok: boolean; detail?: string }[];
  dureeMs: number;
}

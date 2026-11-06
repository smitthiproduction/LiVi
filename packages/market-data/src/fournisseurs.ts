/**
 * Contrats des fournisseurs de données de marché. Chaque implémentation (fournisseur sous licence)
 * vit dans apps/api/src/modules/market-data/providers et doit déclarer sa licence d'affichage.
 */

export type Fraicheur = 'temps-reel' | 'differe-15' | 'cloture';

export interface Licence {
  fournisseur: string;
  affichageUtilisateurs: boolean; // la licence autorise l'affichage aux utilisateurs finaux
  fraicheur: Fraicheur;
  mentionObligatoire: string; // ex. « Cours fournis par … »
}

export interface Cotation {
  code: string;
  dernier: number;
  variation: number; // en valeur
  variationPct: number;
  plusHautJour?: number;
  plusBasJour?: number;
  horodatage: string; // ISO
  fraicheur: Fraicheur;
}

export interface PointHistorique { date: string; ouverture: number; haut: number; bas: number; cloture: number; volume?: number }

export type Intervalle = '1m' | '5m' | '15m' | '1h' | '1j' | '1s' | '1mois';

export interface FournisseurMarche {
  licence: Licence;
  cotations(codes: readonly string[]): Promise<Cotation[]>;
  historique(code: string, intervalle: Intervalle, depuis: string, jusqua?: string): Promise<PointHistorique[]>;
  joursFeries(place: string, annee: number): Promise<string[]>;
}

export interface FournisseurMacro {
  licence: Licence;
  indicateurs(zone: string): Promise<{ id: string; valeur: number; precedent?: number; date: string }[]>;
}

export interface FournisseurActualites {
  licence: Licence;
  actualites(filtre: { codes?: readonly string[]; region?: string; limite?: number }): Promise<{ id: string; titre: string; source: string; date: string; url?: string; codes: string[] }[]>;
}

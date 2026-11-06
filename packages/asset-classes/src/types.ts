/**
 * Types de la classification des actifs LiVi.
 * Source unique : app mobile, web, back-office, API et documentation
 * (docs/produit/classes-actifs.md est généré depuis ce paquet).
 */

export type FieldType =
  | 'texte'
  | 'nombre'
  | 'pourcentage'
  | 'montant'
  | 'date'
  | 'enum'
  | 'booleen'
  | 'isin'
  | 'ticker'
  | 'notation'
  | 'adresse';

export interface FieldDef {
  id: string;
  label: string;
  type: FieldType;
  /** Valeurs possibles pour un champ `enum`. */
  options?: readonly string[];
  unite?: string;
  obligatoire?: boolean;
  /** D'où vient la valeur : saisie, import, fournisseur de données, calcul. */
  source?: 'saisie' | 'import' | 'fournisseur' | 'calcul';
}

export type FilterKind = 'plage' | 'choix' | 'multi' | 'booleen' | 'recherche' | 'periode';

export interface FilterDef {
  id: string;
  label: string;
  kind: FilterKind;
  /** Champ ou indicateur filtré. */
  champ: string;
  options?: readonly string[];
  /** Filtre fondé sur une donnée tierce (consensus, notation) : affichage sourcé obligatoire. */
  donneeTierce?: boolean;
}

export interface DetailTab {
  id: string;
  label: string;
  /** Sous-onglets éventuels (ex. Statistiques clés : cours et volume, données par action, ratios). */
  sousOnglets?: readonly string[];
}

export type PriceSource =
  | 'marche' // cours coté (différé ou clôture)
  | 'vl' // valeur liquidative
  | 'taux' // intérêts calculés
  | 'estimation' // estimation (DVF, cote)
  | 'manuel' // saisie de l'utilisateur
  | 'plateforme'; // valeur remontée par la plateforme

export interface SubClass {
  id: string;
  label: string;
  description: string;
  exemples?: readonly string[];
  /** Champs propres à la sous-classe, en plus de ceux de la classe. */
  champs?: readonly FieldDef[];
  /** Identifiants de filtres propres à la sous-classe (définis dans `filtres` de la classe). */
  filtres?: readonly string[];
  /** Onglets ajoutés à la fiche pour cette sous-classe. */
  onglets?: readonly DetailTab[];
  source?: PriceSource;
}

export interface AssetClass {
  id: string;
  label: string;
  /** Nom d'icône (jeu d'icônes LiVi, trait 2 px). */
  icone: string;
  description: string;
  source: PriceSource;
  champs: readonly FieldDef[];
  filtres: readonly FilterDef[];
  onglets: readonly DetailTab[];
  sousClasses: readonly SubClass[];
  /** Points de vigilance réglementaires ou produit, affichés aux équipes. */
  vigilance?: readonly string[];
  /** Enveloppes dans lesquelles la classe peut être logée. */
  enveloppes?: readonly string[];
}

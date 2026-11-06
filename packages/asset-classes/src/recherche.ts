import type { FilterDef } from './types.ts';

/**
 * Périmètres de la recherche globale (pastilles sous le champ de recherche),
 * inspirés de la recherche par type d'actif de Revolut, étendus au patrimoine.
 */
export const PERIMETRES_RECHERCHE = [
  { id: 'tout', label: 'Tout' },
  { id: 'mes-positions', label: 'Mes positions' },
  { id: 'surveillance', label: 'Listes de surveillance' },
  { id: 'actions', label: 'Actions', classe: 'actions' },
  { id: 'fonds-etp', label: 'Fonds et ETP', classe: 'fonds-etp' },
  { id: 'obligations', label: 'Obligations', classe: 'obligations' },
  { id: 'crypto', label: 'Crypto', classe: 'crypto' },
  { id: 'matieres-premieres', label: 'Matières premières', classe: 'matieres-premieres' },
  { id: 'derives', label: 'Dérivés', classe: 'derives' },
  { id: 'indices', label: 'Indices' },
  { id: 'devises', label: 'Devises' },
  { id: 'enseignes', label: 'Enseignes' },
  { id: 'transactions', label: 'Transactions' },
  { id: 'aide', label: 'Aide et réglages' },
] as const;

export type CritereValeur =
  | { kind: 'plage'; min?: number; max?: number }
  | { kind: 'choix'; valeur: string }
  | { kind: 'multi'; valeurs: readonly string[] }
  | { kind: 'booleen'; valeur: boolean }
  | { kind: 'recherche'; texte: string }
  | { kind: 'periode'; debut?: string; fin?: string };

export type Criteres = Record<string, CritereValeur>;

/**
 * Collections : jeux de filtres prêts à l'emploi, nommés de façon descriptive.
 * Ce sont des tris de données, jamais des recommandations : aucune collection
 * ne s'appelle « à acheter », « recommandé » ou « opportunité ».
 */
export interface Collection {
  id: string;
  label: string;
  classe: string;
  description: string;
  criteres: Criteres;
  /** Repose sur une donnée tierce (consensus, notation) : mention de la source obligatoire. */
  donneeTierce?: boolean;
}

export const COLLECTIONS: readonly Collection[] = [
  { id: 'grandes-capitalisations', label: 'Grandes capitalisations', classe: 'actions', description: 'Capitalisation de plus de 10 milliards.', criteres: { taille: { kind: 'multi', valeurs: ['Très grande', 'Grande'] } } },
  { id: 'rendement-dividende-eleve', label: 'Rendement du dividende élevé', classe: 'actions', description: 'Rendement du dividende supérieur à 4 %.', criteres: { 'rendement-dividende': { kind: 'plage', min: 4 } } },
  { id: 'variation-positive', label: 'En hausse sur un an', classe: 'actions', description: 'Variation sur un an supérieure à 0 %.', criteres: { 'var-1a': { kind: 'plage', min: 0 } } },
  { id: 'forte-croissance', label: 'Forte croissance du chiffre d’affaires', classe: 'actions', description: 'Croissance annuelle supérieure à 20 %.', criteres: { 'croissance-ca': { kind: 'plage', min: 20 } } },
  { id: 'faible-per', label: 'Ratio cours / bénéfice faible', classe: 'actions', description: 'Ratio inférieur à 12.', criteres: { per: { kind: 'plage', min: 0, max: 12 } } },
  { id: 'marge-nette-elevee', label: 'Marge nette élevée', classe: 'actions', description: 'Marge nette supérieure à 20 %.', criteres: { 'marge-nette': { kind: 'plage', min: 20 } } },
  { id: 'sous-prix-cible', label: 'Sous le prix cible du consensus', classe: 'actions', description: 'Cours inférieur au prix cible moyen des analystes (donnée tierce).', criteres: { 'consensus-ecart': { kind: 'plage', min: 0 } }, donneeTierce: true },
  { id: 'eligibles-pea', label: 'Éligibles au PEA', classe: 'actions', description: 'Titres éligibles au plan d’épargne en actions.', criteres: { 'eligible-pea': { kind: 'booleen', valeur: true } } },
  { id: 'etf-frais-bas', label: 'ETF à frais courants bas', classe: 'fonds-etp', description: 'Frais courants inférieurs à 0,20 %.', criteres: { frais: { kind: 'plage', max: 0.2 } } },
  { id: 'etf-pea-capitalisants', label: 'ETF éligibles PEA capitalisants', classe: 'fonds-etp', description: 'ETF éligibles au PEA, sans distribution.', criteres: { eligibilite: { kind: 'multi', valeurs: ['PEA'] }, distribution: { kind: 'choix', valeur: 'Capitalisant' } } },
  { id: 'fonds-article-9', label: 'Fonds article 9', classe: 'fonds-etp', description: 'Classification SFDR article 9.', criteres: { sfdr: { kind: 'multi', valeurs: ['Article 9'] } } },
  { id: 'etat-court-terme', label: 'Obligations d’État à moins de 3 ans', classe: 'obligations', description: 'Dette souveraine, échéance proche.', criteres: { 'categorie-emetteur': { kind: 'multi', valeurs: ['État'] }, 'maturite-restante': { kind: 'plage', max: 3 } } },
  { id: 'entreprises-ig-3-5', label: 'Entreprises catégorie investissement, 3 à 5 ans', classe: 'obligations', description: 'Notation BBB- ou mieux, 3 à 5 ans.', criteres: { 'categorie-emetteur': { kind: 'multi', valeurs: ['Entreprise'] }, qualite: { kind: 'choix', valeur: 'Investissement' }, 'maturite-restante': { kind: 'plage', min: 3, max: 5 } }, donneeTierce: true },
  { id: 'obligations-vertes', label: 'Obligations vertes', classe: 'obligations', description: 'Émissions vertes ou durables.', criteres: { verte: { kind: 'booleen', valeur: true } } },
  { id: 'stablecoins-euro-mica', label: 'Stablecoins en euros sur plateformes MiCA', classe: 'crypto', description: 'Jetons adossés à l’euro, plateformes autorisées.', criteres: { adossement: { kind: 'multi', valeurs: ['EUR'] }, mica: { kind: 'booleen', valeur: true } } },
  { id: 'scpi-occupation-elevee', label: 'SCPI à taux d’occupation élevé', classe: 'immobilier', description: 'Taux d’occupation financier supérieur à 95 %.', criteres: { 'taux-occupation': { kind: 'plage', min: 95 } } },
];

const MOTS_INTERDITS = /(recommand|à acheter|a acheter|opportunit|meilleur|top achat|conseil)/i;

/** Vérifie qu'une collection ne ressemble pas à une recommandation. */
export function collectionNeutre(c: Collection): boolean {
  return !MOTS_INTERDITS.test(c.label) && !MOTS_INTERDITS.test(c.description);
}

type Ligne = Record<string, unknown>;

function lireChamp(ligne: Ligne, champ: string): unknown {
  return ligne[champ];
}

/**
 * Applique des critères à une liste de lignes.
 * `filtres` donne, pour chaque identifiant de critère, le champ lu sur la ligne.
 * Une valeur absente ne passe jamais un critère de plage (elle n'est pas comptée comme zéro).
 */
export function appliquerCriteres<T extends Ligne>(lignes: readonly T[], criteres: Criteres, filtres: readonly FilterDef[]): T[] {
  const parId = new Map(filtres.map((f) => [f.id, f]));
  return lignes.filter((ligne) =>
    Object.entries(criteres).every(([id, critere]) => {
      const def = parId.get(id);
      if (!def) throw new Error(`Filtre inconnu : ${id}`);
      const v = lireChamp(ligne, def.champ);
      switch (critere.kind) {
        case 'plage': {
          if (typeof v !== 'number' || Number.isNaN(v)) return false;
          if (critere.min !== undefined && v < critere.min) return false;
          if (critere.max !== undefined && v > critere.max) return false;
          return true;
        }
        case 'choix':
          return v === critere.valeur;
        case 'multi':
          if (critere.valeurs.length === 0) return true;
          return Array.isArray(v) ? v.some((x) => critere.valeurs.includes(String(x))) : critere.valeurs.includes(String(v));
        case 'booleen':
          return v === critere.valeur;
        case 'recherche':
          return normaliser(String(v ?? '')).includes(normaliser(critere.texte));
        case 'periode': {
          if (typeof v !== 'string') return false;
          if (critere.debut && v < critere.debut) return false;
          if (critere.fin && v > critere.fin) return false;
          return true;
        }
      }
    }),
  );
}

/** Minuscules, sans accents, espaces réduits : base de la recherche tolérante. */
export function normaliser(texte: string): string {
  return texte
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

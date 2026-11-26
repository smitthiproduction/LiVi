/**
 * Sources de cours que l'utilisateur peut choisir, avec l'état de leur licence d'affichage.
 * Seules les sources « sous licence » dont la licence autorise l'affichage aux utilisateurs finaux sont utilisables :
 * les autres apparaissent dans le sélecteur, désactivées, avec la raison (décision 0008).
 * L'état réel des contrats est tenu au back-office (BO-07) ; cette liste sert de base et de tests.
 */

import type { Fraicheur } from './fournisseurs.ts';

export type TypeSource =
  | 'bande-consolidee' // bande consolidée européenne (EuroCTP) : meilleur prix d'achat et de vente officiel des actions et ETF de l'UE
  | 'agregateur' // fournisseur multi-places
  | 'place' // flux direct d'une place ou de son opérateur
  | 'site-grand-public'; // site d'information sans API officielle (Google Finance, Yahoo Finance)

/** sous-licence : contrat signé ; a-negocier : candidat sans contrat ; sous-reserve : utilisable seulement si un contrat de licence est signé ; refusee : écartée. */
export type StatutLicence = 'sous-licence' | 'a-negocier' | 'sous-reserve' | 'refusee';

export interface SourceCours {
  id: string;
  nom: string;
  type: TypeSource;
  statut: StatutLicence;
  /** La licence autorise l'affichage aux utilisateurs finaux. */
  affichage: boolean;
  fraicheur: Fraicheur;
  /** Lieux couverts (MIC). Vide : couverture déclarée par le fournisseur, à reprendre au back-office. */
  couverture: readonly string[];
  /** Mention à afficher sous le cours (ex. « Cours fournis par … »). */
  mention: string;
  site: string;
  /** Raison affichée quand la source n'est pas utilisable. */
  note?: string;
}

const UE_ACTIONS = ['XPAR', 'XAMS', 'XBRU', 'XLIS', 'MTAA', 'XETR', 'XFRA', 'XSTU', 'MUND', 'XGAT', 'HAMN', 'TQEX', 'CEUX', 'AQEU', 'XMAD'];

export const SOURCES: readonly SourceCours[] = [
  { id: 'euroctp', nom: 'EuroCTP', type: 'bande-consolidee', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: UE_ACTIONS, mention: 'Meilleur prix européen (EBBO) fourni par EuroCTP', site: 'https://www.euroctp.eu', note: 'Bande consolidée agréée par l\'ESMA, en service depuis septembre 2026. Contrat de diffusion à négocier.' },
  { id: 'twelve-data', nom: 'Twelve Data', type: 'agregateur', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: [], mention: 'Cours fournis par Twelve Data', site: 'https://twelvedata.com', note: 'Contrat à négocier.' },
  { id: 'finnhub', nom: 'Finnhub', type: 'agregateur', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: [], mention: 'Cours fournis par Finnhub', site: 'https://finnhub.io', note: 'Contrat à négocier.' },
  { id: 'eulerpool', nom: 'Eulerpool', type: 'agregateur', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: [], mention: 'Cours fournis par Eulerpool', site: 'https://eulerpool.com', note: 'Contrat à négocier.' },
  { id: 'intrinio', nom: 'Intrinio', type: 'agregateur', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: [], mention: 'Cours fournis par Intrinio', site: 'https://intrinio.com', note: 'Contrat à négocier.' },
  { id: 'polygon', nom: 'Polygon.io', type: 'agregateur', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: ['XNAS', 'XNYS'], mention: 'Cours fournis par Polygon.io', site: 'https://polygon.io', note: 'Marchés américains. Contrat à négocier.' },
  { id: 'alpaca', nom: 'Alpaca Market Data', type: 'agregateur', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: ['XNAS', 'XNYS'], mention: 'Cours fournis par Alpaca', site: 'https://alpaca.markets/data', note: 'Marchés américains. Contrat à négocier.' },
  { id: 'lseg', nom: 'LSEG (Refinitiv)', type: 'agregateur', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: [], mention: 'Cours fournis par LSEG', site: 'https://www.lseg.com/en/market-data', note: 'Offre professionnelle. Contrat à négocier.' },
  { id: 'bloomberg', nom: 'Bloomberg', type: 'agregateur', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: [], mention: 'Cours fournis par Bloomberg', site: 'https://www.bloomberg.com/professional/products/data', note: 'Offre institutionnelle. Contrat à négocier.' },
  { id: 'euronext', nom: 'Euronext Market Data', type: 'place', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: ['XPAR', 'XAMS', 'XBRU', 'XLIS', 'MTAA'], mention: 'Cours Euronext', site: 'https://www.euronext.com/en/products/market-data', note: 'Licence de diffusion à négocier.' },
  { id: 'deutsche-boerse', nom: 'Deutsche Börse Market Data', type: 'place', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: ['XETR', 'XFRA'], mention: 'Cours Deutsche Börse', site: 'https://www.deutsche-boerse.com/dbg-en/market-data', note: 'Licence de diffusion à négocier.' },
  { id: 'gettex', nom: 'gettex (Börse München)', type: 'place', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: ['MUND'], mention: 'Cours gettex', site: 'https://www.gettex.de', note: 'Données diffusées par la Bourse de Munich et ses partenaires. Licence à négocier.' },
  { id: 'tradegate', nom: 'Tradegate', type: 'place', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: ['XGAT'], mention: 'Cours Tradegate', site: 'https://www.tradegateexchange.de', note: 'Pas d\'API publique gratuite ; données par abonnement. Licence à négocier.' },
  { id: 'ls-exchange', nom: 'LS Exchange', type: 'place', statut: 'a-negocier', affichage: false, fraicheur: 'temps-reel', couverture: ['HAMN'], mention: 'Cours LS Exchange', site: 'https://www.ls-x.de', note: 'Licence à négocier.' },
  { id: 'google-finance', nom: 'Google Finance', type: 'site-grand-public', statut: 'sous-reserve', affichage: false, fraicheur: 'differe-15', couverture: [], mention: 'Cours Google Finance', site: 'https://www.google.com/finance', note: 'Sous réserve de licence : pas d\'API officielle, données réservées à un usage personnel selon les conditions de Google.' },
  { id: 'yahoo-finance', nom: 'Yahoo Finance', type: 'site-grand-public', statut: 'sous-reserve', affichage: false, fraicheur: 'differe-15', couverture: [], mention: 'Cours Yahoo Finance', site: 'https://finance.yahoo.com', note: 'Sous réserve de licence : pas d\'API officielle, données réservées à un usage personnel selon les conditions de Yahoo.' },
];

/** Une source n'est utilisable que sous licence, avec l'affichage aux utilisateurs finaux autorisé. */
export function sourceUtilisable(s: SourceCours): boolean {
  return s.statut === 'sous-licence' && s.affichage;
}

export function sourceParId(id: string, sources: readonly SourceCours[] = SOURCES): SourceCours | undefined {
  return sources.find((s) => s.id === id);
}

export interface OptionSource {
  id: string;
  nom: string;
  selectionnable: boolean;
  raison?: string;
}

const RAISONS: Record<StatutLicence, string> = {
  'sous-licence': 'Licence sans affichage aux utilisateurs',
  'a-negocier': 'Bientôt disponible',
  'sous-reserve': 'Sous réserve de licence',
  refusee: 'Indisponible',
};

/**
 * Options du sélecteur « Source des cours » : « Meilleur prix » en premier (par défaut), puis les sources par type.
 * Les sources non utilisables restent visibles, désactivées, avec leur raison.
 */
export function optionsSelecteur(sources: readonly SourceCours[] = SOURCES): OptionSource[] {
  const ordre: TypeSource[] = ['bande-consolidee', 'place', 'agregateur', 'site-grand-public'];
  const tri = [...sources].sort((a, b) => ordre.indexOf(a.type) - ordre.indexOf(b.type) || a.nom.localeCompare(b.nom, 'fr'));
  return [
    { id: 'meilleur-prix', nom: 'Meilleur prix', selectionnable: true },
    ...tri.map((s) => (sourceUtilisable(s) ? { id: s.id, nom: s.nom, selectionnable: true } : { id: s.id, nom: s.nom, selectionnable: false, raison: RAISONS[s.statut] })),
  ];
}

export type PreferenceSource = { type: 'meilleur-prix' } | { type: 'source'; id: string } | { type: 'lieu'; mic: string };

export interface SourceResolue {
  preference: PreferenceSource;
  /** Préférence réellement appliquée : retombe sur « Meilleur prix » si la source choisie n'est pas utilisable. */
  appliquee: PreferenceSource;
  raison?: string;
}

/** Applique la préférence de l'utilisateur (globale ou par actif) en tenant compte des licences. */
export function resoudreSource(preference: PreferenceSource, sources: readonly SourceCours[] = SOURCES): SourceResolue {
  if (preference.type === 'source') {
    const s = sourceParId(preference.id, sources);
    if (!s) return { preference, appliquee: { type: 'meilleur-prix' }, raison: 'Source inconnue' };
    if (!sourceUtilisable(s)) return { preference, appliquee: { type: 'meilleur-prix' }, raison: RAISONS[s.statut] };
  }
  return { preference, appliquee: preference };
}

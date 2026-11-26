/**
 * Lieux d'exécution (places de cotation) identifiés par leur code MIC (ISO 10383).
 * Un même titre (ISIN) peut être coté sur plusieurs lieux, dans des devises et sous des mnémoniques différents.
 * Codes vérifiés dans le registre ISO 10383 et chez les opérateurs (voir docs/produit/fonctionnalites/13-fiche-actif-et-graphiques.md, « Sources de cours »).
 * La liste complète est tenue au back-office (BO-07) à partir du fichier ISO 10383 mensuel ; celle-ci sert de base et de tests.
 */

/** Marché réglementé, système multilatéral de négociation (MTF) ou internalisateur systématique (contrepartie d'un intermédiaire). */
export type TypeLieu = 'marche-reglemente' | 'mtf' | 'internalisateur';

export interface LieuExecution {
  /** Code MIC du segment (4 caractères). */
  mic: string;
  /** Code MIC de l'opérateur. */
  micOperateur: string;
  nom: string;
  pays: string; // code ISO 3166-1 alpha-2
  devises: readonly string[]; // codes ISO 4217
  type: TypeLieu;
  /** Identifiant de la place dans PLACES (horaires et carte), quand elle y figure. */
  place?: string;
}

export const LIEUX: readonly LieuExecution[] = [
  { mic: 'XPAR', micOperateur: 'XPAR', nom: 'Euronext Paris', pays: 'FR', devises: ['EUR'], type: 'marche-reglemente', place: 'euronext-paris' },
  { mic: 'XAMS', micOperateur: 'XAMS', nom: 'Euronext Amsterdam', pays: 'NL', devises: ['EUR'], type: 'marche-reglemente', place: 'euronext-amsterdam' },
  { mic: 'XBRU', micOperateur: 'XBRU', nom: 'Euronext Bruxelles', pays: 'BE', devises: ['EUR'], type: 'marche-reglemente' },
  { mic: 'XLIS', micOperateur: 'XLIS', nom: 'Euronext Lisbonne', pays: 'PT', devises: ['EUR'], type: 'marche-reglemente' },
  { mic: 'MTAA', micOperateur: 'XMIL', nom: 'Euronext Milan', pays: 'IT', devises: ['EUR'], type: 'marche-reglemente', place: 'milan' },
  { mic: 'XETR', micOperateur: 'XETR', nom: 'Xetra', pays: 'DE', devises: ['EUR'], type: 'marche-reglemente', place: 'xetra' },
  { mic: 'XFRA', micOperateur: 'XFRA', nom: 'Börse Frankfurt', pays: 'DE', devises: ['EUR'], type: 'marche-reglemente', place: 'xetra' },
  { mic: 'XSTU', micOperateur: 'XSTU', nom: 'Börse Stuttgart', pays: 'DE', devises: ['EUR'], type: 'marche-reglemente' },
  { mic: 'MUND', micOperateur: 'XMUN', nom: 'gettex', pays: 'DE', devises: ['EUR'], type: 'mtf' },
  { mic: 'XGAT', micOperateur: 'TGAT', nom: 'Tradegate', pays: 'DE', devises: ['EUR'], type: 'mtf' },
  { mic: 'HAMN', micOperateur: 'XHAM', nom: 'LS Exchange', pays: 'DE', devises: ['EUR'], type: 'mtf' },
  { mic: 'TQEX', micOperateur: 'TQEX', nom: 'Turquoise Europe', pays: 'NL', devises: ['EUR'], type: 'mtf' },
  { mic: 'CEUX', micOperateur: 'CCXE', nom: 'Cboe Europe (Pays-Bas)', pays: 'NL', devises: ['EUR'], type: 'mtf' },
  { mic: 'AQEU', micOperateur: 'AQEU', nom: 'Aquis Europe', pays: 'FR', devises: ['EUR'], type: 'mtf' },
  { mic: 'XMAD', micOperateur: 'BMEX', nom: 'Bolsa de Madrid', pays: 'ES', devises: ['EUR'], type: 'marche-reglemente', place: 'madrid' },
  { mic: 'XSWX', micOperateur: 'XSWX', nom: 'SIX Swiss Exchange', pays: 'CH', devises: ['CHF'], type: 'marche-reglemente', place: 'six' },
  { mic: 'XLON', micOperateur: 'XLON', nom: 'London Stock Exchange', pays: 'GB', devises: ['GBP'], type: 'marche-reglemente', place: 'lse' },
  { mic: 'TRQX', micOperateur: 'TRQX', nom: 'Turquoise', pays: 'GB', devises: ['GBP', 'EUR'], type: 'mtf' },
  { mic: 'XNAS', micOperateur: 'XNAS', nom: 'Nasdaq', pays: 'US', devises: ['USD'], type: 'marche-reglemente', place: 'nyse' },
  { mic: 'XNYS', micOperateur: 'XNYS', nom: 'NYSE', pays: 'US', devises: ['USD'], type: 'marche-reglemente', place: 'nyse' },
  { mic: 'LSSI', micOperateur: 'LSSI', nom: 'Lang & Schwarz TradeCenter', pays: 'DE', devises: ['EUR'], type: 'internalisateur' },
  { mic: 'TGSI', micOperateur: 'TGAT', nom: 'Tradegate AG (internalisateur)', pays: 'DE', devises: ['EUR'], type: 'internalisateur' },
];

const MIC = /^[A-Z0-9]{4}$/;

export function micValide(mic: string): boolean {
  return MIC.test(mic);
}

export function lieuParMic(mic: string, lieux: readonly LieuExecution[] = LIEUX): LieuExecution | undefined {
  return lieux.find((l) => l.mic === mic);
}

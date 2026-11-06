/**
 * Référentiel des places boursières et des indices affichés sur la carte des marchés mondiaux.
 * Horaires de séance de référence (heure locale, hors pré-ouverture, enchères et jours fériés) :
 * à confirmer et tenir à jour depuis le fournisseur de données sous licence (voir docs/produit/fonctionnalites/12-marches-mondiaux.md).
 */

export type Region = 'ameriques' | 'europe' | 'apac' | 'moyen-orient-afrique';

export interface Seance {
  /** Heure d'ouverture locale, "HH:MM". */
  ouverture: string;
  /** Heure de clôture locale, "HH:MM". */
  cloture: string;
}

export interface PlaceBoursiere {
  id: string;
  nom: string;
  pays: string;
  region: Region;
  fuseau: string; // IANA
  /** Une ou deux séances (pause déjeuner en Asie). */
  seances: readonly Seance[];
  lat: number;
  lon: number;
}

export const PLACES: readonly PlaceBoursiere[] = [
  { id: 'nyse', nom: 'New York (NYSE, Nasdaq)', pays: 'États-Unis', region: 'ameriques', fuseau: 'America/New_York', seances: [{ ouverture: '09:30', cloture: '16:00' }], lat: 40.71, lon: -74.01 },
  { id: 'tsx', nom: 'Toronto (TSX)', pays: 'Canada', region: 'ameriques', fuseau: 'America/Toronto', seances: [{ ouverture: '09:30', cloture: '16:00' }], lat: 43.65, lon: -79.38 },
  { id: 'b3', nom: 'São Paulo (B3)', pays: 'Brésil', region: 'ameriques', fuseau: 'America/Sao_Paulo', seances: [{ ouverture: '10:00', cloture: '17:00' }], lat: -23.55, lon: -46.63 },
  { id: 'euronext-paris', nom: 'Paris (Euronext)', pays: 'France', region: 'europe', fuseau: 'Europe/Paris', seances: [{ ouverture: '09:00', cloture: '17:30' }], lat: 48.86, lon: 2.35 },
  { id: 'euronext-amsterdam', nom: 'Amsterdam (Euronext)', pays: 'Pays-Bas', region: 'europe', fuseau: 'Europe/Amsterdam', seances: [{ ouverture: '09:00', cloture: '17:30' }], lat: 52.37, lon: 4.9 },
  { id: 'xetra', nom: 'Francfort (Xetra)', pays: 'Allemagne', region: 'europe', fuseau: 'Europe/Berlin', seances: [{ ouverture: '09:00', cloture: '17:30' }], lat: 50.11, lon: 8.68 },
  { id: 'lse', nom: 'Londres (LSE)', pays: 'Royaume-Uni', region: 'europe', fuseau: 'Europe/London', seances: [{ ouverture: '08:00', cloture: '16:30' }], lat: 51.51, lon: -0.13 },
  { id: 'six', nom: 'Zurich (SIX)', pays: 'Suisse', region: 'europe', fuseau: 'Europe/Zurich', seances: [{ ouverture: '09:00', cloture: '17:20' }], lat: 47.37, lon: 8.54 },
  { id: 'milan', nom: 'Milan (Borsa Italiana)', pays: 'Italie', region: 'europe', fuseau: 'Europe/Rome', seances: [{ ouverture: '09:00', cloture: '17:30' }], lat: 45.46, lon: 9.19 },
  { id: 'madrid', nom: 'Madrid (BME)', pays: 'Espagne', region: 'europe', fuseau: 'Europe/Madrid', seances: [{ ouverture: '09:00', cloture: '17:30' }], lat: 40.42, lon: -3.7 },
  { id: 'tokyo', nom: 'Tokyo (TSE)', pays: 'Japon', region: 'apac', fuseau: 'Asia/Tokyo', seances: [{ ouverture: '09:00', cloture: '11:30' }, { ouverture: '12:30', cloture: '15:30' }], lat: 35.68, lon: 139.69 },
  { id: 'hong-kong', nom: 'Hong Kong (HKEX)', pays: 'Hong Kong', region: 'apac', fuseau: 'Asia/Hong_Kong', seances: [{ ouverture: '09:30', cloture: '12:00' }, { ouverture: '13:00', cloture: '16:00' }], lat: 22.32, lon: 114.17 },
  { id: 'shanghai', nom: 'Shanghai (SSE)', pays: 'Chine', region: 'apac', fuseau: 'Asia/Shanghai', seances: [{ ouverture: '09:30', cloture: '11:30' }, { ouverture: '13:00', cloture: '15:00' }], lat: 31.23, lon: 121.47 },
  { id: 'mumbai', nom: 'Bombay (NSE)', pays: 'Inde', region: 'apac', fuseau: 'Asia/Kolkata', seances: [{ ouverture: '09:15', cloture: '15:30' }], lat: 19.08, lon: 72.88 },
  { id: 'sydney', nom: 'Sydney (ASX)', pays: 'Australie', region: 'apac', fuseau: 'Australia/Sydney', seances: [{ ouverture: '10:00', cloture: '16:00' }], lat: -33.87, lon: 151.21 },
  { id: 'johannesburg', nom: 'Johannesburg (JSE)', pays: 'Afrique du Sud', region: 'moyen-orient-afrique', fuseau: 'Africa/Johannesburg', seances: [{ ouverture: '09:00', cloture: '17:00' }], lat: -26.2, lon: 28.05 },
];

export interface IndiceMarche {
  /** Code neutre affiché sur la carte (comme US500, FR40). */
  code: string;
  nom: string;
  place: string; // id de PlaceBoursiere
}

export const INDICES: readonly IndiceMarche[] = [
  { code: 'US500', nom: 'Indice des 500 grandes valeurs américaines', place: 'nyse' },
  { code: 'US100', nom: 'Indice des 100 grandes valeurs non financières du Nasdaq', place: 'nyse' },
  { code: 'US30', nom: 'Indice des 30 valeurs industrielles américaines', place: 'nyse' },
  { code: 'CA60', nom: 'Indice des 60 grandes valeurs canadiennes', place: 'tsx' },
  { code: 'BR', nom: 'Indice de la bourse de São Paulo', place: 'b3' },
  { code: 'FR40', nom: 'Indice des 40 valeurs de Paris', place: 'euronext-paris' },
  { code: 'NL25', nom: 'Indice des 25 valeurs d’Amsterdam', place: 'euronext-amsterdam' },
  { code: 'DE40', nom: 'Indice des 40 valeurs de Francfort', place: 'xetra' },
  { code: 'EU50', nom: 'Indice des 50 grandes valeurs de la zone euro', place: 'xetra' },
  { code: 'GB100', nom: 'Indice des 100 valeurs de Londres', place: 'lse' },
  { code: 'CH20', nom: 'Indice des 20 valeurs de Zurich', place: 'six' },
  { code: 'IT40', nom: 'Indice des 40 valeurs de Milan', place: 'milan' },
  { code: 'ES35', nom: 'Indice des 35 valeurs de Madrid', place: 'madrid' },
  { code: 'JP225', nom: 'Indice des 225 valeurs de Tokyo', place: 'tokyo' },
  { code: 'HK50', nom: 'Indice des grandes valeurs de Hong Kong', place: 'hong-kong' },
  { code: 'CN300', nom: 'Indice des 300 valeurs de Shanghai et Shenzhen', place: 'shanghai' },
  { code: 'IN50', nom: 'Indice des 50 valeurs de Bombay', place: 'mumbai' },
  { code: 'AU200', nom: 'Indice des 200 valeurs australiennes', place: 'sydney' },
  { code: 'ZA40', nom: 'Indice des 40 valeurs de Johannesburg', place: 'johannesburg' },
];

/** Indicateurs économiques affichés par zone (zone euro, France, Royaume-Uni, Allemagne, États-Unis…). */
export const INDICATEURS_MACRO = [
  { id: 'pib', label: 'PIB', unite: 'Md' },
  { id: 'inflation', label: 'Taux d’inflation', unite: '%' },
  { id: 'taux-directeur', label: 'Taux d’intérêt directeur', unite: '%' },
  { id: 'taux-10-ans', label: 'Taux d’État à 10 ans', unite: '%' },
  { id: 'ventes-detail', label: 'Ventes au détail', unite: '%' },
  { id: 'chomage', label: 'Taux de chômage', unite: '%' },
  { id: 'pmi', label: 'Indice des directeurs d’achat', unite: 'pts' },
] as const;

export const ZONES_MACRO = ['zone-euro', 'france', 'allemagne', 'royaume-uni', 'etats-unis', 'japon', 'chine', 'suisse'] as const;

export function placeParId(id: string): PlaceBoursiere | undefined {
  return PLACES.find((p) => p.id === id);
}

import type { PlaceBoursiere } from './marches.ts';

export type StatutPlace = 'ouverte' | 'pause' | 'fermee' | 'week-end';

/** Heure et jour locaux d'une place, à partir d'un instant UTC. */
export function heureLocale(fuseau: string, instant: Date): { minutes: number; jour: number; libelle: string } {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: fuseau,
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'short',
    hourCycle: 'h23',
  }).formatToParts(instant);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const h = Number(get('hour'));
  const m = Number(get('minute'));
  const jours: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return { minutes: h * 60 + m, jour: jours[get('weekday')] ?? -1, libelle: `${get('hour')}:${get('minute')}` };
}

const enMinutes = (hhmm: string): number => {
  const [h, m] = hhmm.split(':').map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
};

/**
 * Statut d'une place à un instant donné.
 * Ne connaît pas les jours fériés : le fournisseur de données les fournit et ils priment (paramètre `ferie`).
 */
export function statutPlace(place: PlaceBoursiere, instant: Date, ferie = false): StatutPlace {
  const { minutes, jour } = heureLocale(place.fuseau, instant);
  if (jour === 0 || jour === 6) return 'week-end';
  if (ferie) return 'fermee';
  const seances = place.seances.map((s) => [enMinutes(s.ouverture), enMinutes(s.cloture)] as const);
  if (seances.some(([o, c]) => minutes >= o && minutes < c)) return 'ouverte';
  const premiere = seances[0]?.[0] ?? 0;
  const derniere = seances[seances.length - 1]?.[1] ?? 0;
  if (minutes >= premiere && minutes < derniere) return 'pause';
  return 'fermee';
}

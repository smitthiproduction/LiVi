import Constants from 'expo-constants';
import { lireJeton } from './auth/session.ts';

/** Erreur de l'API : `code` vient du catalogue des messages (apps/api/src/modules/messages/catalogue.ts). */
export class ErreurApi extends Error {
  constructor(public code: string, message: string, public action?: string, public correlation?: string) {
    super(message);
  }
}

const base = (Constants.expoConfig?.extra as { apiUrl?: string } | undefined)?.apiUrl ?? 'http://localhost:4000';

export async function appel<T>(chemin: string, options: RequestInit = {}): Promise<T> {
  const jeton = await lireJeton();
  const rep = await fetch(`${base}${chemin}`, {
    ...options,
    headers: { 'content-type': 'application/json', ...(jeton ? { authorization: `Bearer ${jeton}` } : {}), ...options.headers },
  });
  if (!rep.ok) {
    const corps = (await rep.json().catch(() => ({}))) as { code?: string; message?: string; action?: string };
    throw new ErreurApi(corps.code ?? 'ERR_INCONNUE', corps.message ?? 'Une erreur est survenue. Réessayez dans un instant.', corps.action, rep.headers.get('x-correlation-id') ?? undefined);
  }
  return (await rep.json()) as T;
}

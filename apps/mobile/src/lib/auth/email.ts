import { appel } from '../api.ts';
import { enregistrerJeton } from './session.ts';

/** Étape 1 : envoi d'un code à 6 chiffres (valable 15 minutes, tentatives limitées). */
export async function demanderCode(email: string): Promise<void> {
  await appel('/v1/auth/email/code', { method: 'POST', body: JSON.stringify({ email }) });
}

/** Étape 2 : vérification du code. */
export async function verifierCode(email: string, code: string): Promise<void> {
  const { jeton } = await appel<{ jeton: string }>('/v1/auth/email/verifier', { method: 'POST', body: JSON.stringify({ email, code }) });
  await enregistrerJeton(jeton);
}

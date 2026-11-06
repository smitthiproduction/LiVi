import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { appel } from '../api.ts';
import { enregistrerJeton } from './session.ts';

GoogleSignin.configure({ iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID, webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID });

/** Connexion Google : le jeton d'identité est vérifié côté serveur (signature, audience, émetteur, expiration). */
export async function connexionGoogle(): Promise<void> {
  await GoogleSignin.hasPlayServices();
  const res = await GoogleSignin.signIn();
  const idToken = res.data?.idToken;
  if (!idToken) throw new Error('Google n’a pas renvoyé de jeton d’identité.');
  const { jeton } = await appel<{ jeton: string }>('/v1/auth/google', { method: 'POST', body: JSON.stringify({ idToken }) });
  await enregistrerJeton(jeton);
}

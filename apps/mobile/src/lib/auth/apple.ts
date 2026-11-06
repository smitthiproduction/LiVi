import * as AppleAuthentication from 'expo-apple-authentication';
import * as Crypto from 'expo-crypto';
import { appel } from '../api.ts';
import { enregistrerJeton } from './session.ts';

/**
 * « Se connecter avec Apple ». Le nonce brut est envoyé au serveur, son empreinte SHA-256 à Apple ;
 * le serveur vérifie la signature du jeton d'identité, l'audience, l'émetteur, l'expiration et le nonce.
 */
export async function connexionApple(): Promise<void> {
  const nonce = Crypto.randomUUID();
  const empreinte = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, nonce);
  const cred = await AppleAuthentication.signInAsync({
    requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME, AppleAuthentication.AppleAuthenticationScope.EMAIL],
    nonce: empreinte,
  });
  if (!cred.identityToken) throw new Error('Apple n’a pas renvoyé de jeton d’identité.');
  const { jeton } = await appel<{ jeton: string }>('/v1/auth/apple', {
    method: 'POST',
    body: JSON.stringify({ identityToken: cred.identityToken, nonce, nom: cred.fullName?.givenName ?? null }),
  });
  await enregistrerJeton(jeton);
}

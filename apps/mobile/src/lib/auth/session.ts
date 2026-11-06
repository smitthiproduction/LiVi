import * as SecureStore from 'expo-secure-store';

const CLE = 'livi.session';

/** Jeton de session : uniquement dans le trousseau (iOS) ou le keystore (Android), jamais dans le stockage simple. */
export async function enregistrerJeton(jeton: string): Promise<void> {
  await SecureStore.setItemAsync(CLE, jeton, { keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY });
}
export async function lireJeton(): Promise<string | null> {
  return SecureStore.getItemAsync(CLE);
}
export async function effacerJeton(): Promise<void> {
  await SecureStore.deleteItemAsync(CLE);
}

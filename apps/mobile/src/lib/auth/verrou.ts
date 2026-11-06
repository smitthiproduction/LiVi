import * as LocalAuthentication from 'expo-local-authentication';

/** Déverrouillage de l'app (Face ID, Touch ID, empreinte Android, code de l'appareil en repli). */
export async function deverrouiller(): Promise<boolean> {
  const dispo = await LocalAuthentication.hasHardwareAsync();
  if (!dispo) return true;
  const r = await LocalAuthentication.authenticateAsync({ promptMessage: 'Déverrouiller LiVi', cancelLabel: 'Annuler', disableDeviceFallback: false });
  return r.success;
}

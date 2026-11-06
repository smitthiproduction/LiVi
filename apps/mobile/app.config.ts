import type { ExpoConfig } from 'expo/config';

// Versions d'Expo et des modules : à aligner au premier `pnpm install` avec `npx expo install --fix`.
const config: ExpoConfig = {
  name: 'LiVi',
  slug: 'livi',
  scheme: 'livi',
  version: '0.1.0',
  orientation: 'default', // portrait et paysage (graphiques plein écran, tablettes, pliables)
  userInterfaceStyle: 'automatic',
  icon: './assets/icone.png',
  ios: {
    bundleIdentifier: 'fr.livi.app',
    supportsTablet: true, // iPad : maître-détail, multitâche
    usesAppleSignIn: true,
    infoPlist: {
      NSFaceIDUsageDescription: 'LiVi utilise Face ID pour déverrouiller vos données.',
      ITSAppUsesNonExemptEncryption: false, // à revoir avec le chiffrement de bout en bout (déclaration export)
    },
    privacyManifests: { NSPrivacyTracking: false, NSPrivacyTrackingDomains: [], NSPrivacyCollectedDataTypes: [], NSPrivacyAccessedAPITypes: [] },
  },
  android: {
    package: 'fr.livi.app',
    adaptiveIcon: { foregroundImage: './assets/icone-adaptative.png', backgroundColor: '#000000' },
    // Pliables et multi-fenêtre : l'activité se redimensionne sans redémarrer (état conservé à l'ouverture).
    edgeToEdgeEnabled: true,
    blockedPermissions: ['android.permission.READ_PHONE_STATE'],
  },
  web: { bundler: 'metro' },
  plugins: [
    'expo-router',
    'expo-apple-authentication',
    'expo-secure-store',
    ['expo-local-authentication', { faceIDPermission: 'LiVi utilise Face ID pour déverrouiller vos données.' }],
    ['expo-sqlite', { useSQLCipher: true }], // base locale chiffrée
    ['@react-native-google-signin/google-signin', { iosUrlScheme: process.env.GOOGLE_IOS_URL_SCHEME ?? 'com.googleusercontent.apps.livi' }],
    ['expo-screen-orientation', { initialOrientation: 'DEFAULT' }],
    '@sentry/react-native/expo',
  ],
  experiments: { typedRoutes: true },
  extra: { apiUrl: process.env.API_URL ?? 'http://localhost:4000' },
};

export default config;

import { Platform, Pressable, Text, View } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { router } from 'expo-router';
import { connexionApple } from '@/lib/auth/apple';
import { connexionGoogle } from '@/lib/auth/google';
import { useTheme } from '@/theme/ThemeProvider';

/** Connexion : Apple (toujours proposé sur iPhone dès que Google l'est), Google, e-mail (USR-01 à USR-03). */
export default function Connexion() {
  const { c, theme } = useTheme();
  const fin = () => router.replace('/');
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24, gap: 12, backgroundColor: c.bg }}>
      <Text style={{ color: c.ink, fontSize: 34, fontWeight: '800' }}>LiVi</Text>
      <Text style={{ color: c['ink-secondary'], fontSize: 16 }}>Tout votre patrimoine, sans trou et sans parti pris.</Text>
      {Platform.OS === 'ios' && (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={theme === 'dark' ? AppleAuthentication.AppleAuthenticationButtonStyle.WHITE : AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={999} style={{ height: 52 }} onPress={() => connexionApple().then(fin)} />
      )}
      <Pressable accessibilityRole="button" onPress={() => connexionGoogle().then(fin)} style={{ height: 52, borderRadius: 999, backgroundColor: c['surface-sunken'], alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: c.ink, fontWeight: '700' }}>Continuer avec Google</Text>
      </Pressable>
      <Pressable accessibilityRole="button" onPress={() => router.push('/(auth)/email')} style={{ height: 52, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: c.accent, fontWeight: '700' }}>Continuer avec un e-mail</Text>
      </Pressable>
    </View>
  );
}

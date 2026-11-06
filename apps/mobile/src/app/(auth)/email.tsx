import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { demanderCode, verifierCode } from '@/lib/auth/email';
import { ErreurApi } from '@/lib/api';
import { useTheme } from '@/theme/ThemeProvider';

/** Connexion par e-mail en deux étapes : code à 6 chiffres valable 15 minutes (USR-03). */
export default function ConnexionEmail() {
  const { c } = useTheme();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [etape, setEtape] = useState<'email' | 'code'>('email');
  const [erreur, setErreur] = useState<string | null>(null);
  const champ = { backgroundColor: c['surface-sunken'], color: c.ink, borderRadius: 14, padding: 14, fontSize: 17 } as const;
  const valider = async () => {
    setErreur(null);
    try {
      if (etape === 'email') { await demanderCode(email.trim()); setEtape('code'); }
      else { await verifierCode(email.trim(), code.trim()); router.replace('/'); }
    } catch (e) {
      setErreur(e instanceof ErreurApi ? e.message : 'La connexion a échoué. Réessayez dans un instant.');
    }
  };
  return (
    <View style={{ flex: 1, padding: 24, gap: 12, justifyContent: 'center', backgroundColor: c.bg }}>
      <Text accessibilityRole="header" style={{ color: c.ink, fontSize: 28, fontWeight: '800' }}>{etape === 'email' ? 'Votre adresse e-mail' : 'Code reçu par e-mail'}</Text>
      {etape === 'email'
        ? <TextInput value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" textContentType="emailAddress" autoComplete="email" accessibilityLabel="Adresse e-mail" style={champ} />
        : <TextInput value={code} onChangeText={setCode} keyboardType="number-pad" textContentType="oneTimeCode" autoComplete="one-time-code" maxLength={6} accessibilityLabel="Code à 6 chiffres" style={champ} />}
      {erreur ? <Text accessibilityRole="alert" style={{ color: c.loss }}>{erreur}</Text> : null}
      <Pressable accessibilityRole="button" onPress={valider} style={{ height: 52, borderRadius: 999, backgroundColor: c.ink, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: c['on-ink'], fontWeight: '700' }}>{etape === 'email' ? 'Recevoir un code' : 'Se connecter'}</Text>
      </Pressable>
    </View>
  );
}

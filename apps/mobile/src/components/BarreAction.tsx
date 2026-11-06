import { Pressable, Text, View } from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';

/** Barre d'action des fiches : jamais « Acheter » ni « Vendre ». */
export function BarreAction({ onAjouter, onConsigne }: { onAjouter?: () => void; onConsigne?: () => void }) {
  const { c } = useTheme();
  const pilule = (label: string, principal: boolean, onPress?: () => void) => (
    <Pressable accessibilityRole="button" onPress={onPress} style={{ flex: 1, height: 52, borderRadius: 999, alignItems: 'center', justifyContent: 'center', backgroundColor: principal ? c.ink : c.glass }}>
      <Text style={{ color: principal ? c['on-ink'] : c.ink, fontWeight: '700' }}>{label}</Text>
    </Pressable>
  );
  return (
    <View style={{ flexDirection: 'row', gap: 12 }}>
      {pilule('Ajouter une opération', true, onAjouter)}
      {pilule('Créer une consigne', false, onConsigne)}
    </View>
  );
}

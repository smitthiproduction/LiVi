import type { ReactNode } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/theme/ThemeProvider';

/** Cadre d'écran : marges selon la classe de taille, grand titre, contenu défilant. */
export function Ecran({ titre, description, children }: { titre: string; description?: string; children?: ReactNode }) {
  const { c, disposition } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: c.bg }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: disposition.margeLaterale, paddingBottom: 120, gap: 16 }}>
        <Text accessibilityRole="header" style={{ color: c.ink, fontSize: 34, lineHeight: 40, fontWeight: '800', marginTop: 16 }}>{titre}</Text>
        {description ? <Text style={{ color: c['ink-secondary'], fontSize: 15, lineHeight: 20 }}>{description}</Text> : null}
        <View style={{ gap: 16 }}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

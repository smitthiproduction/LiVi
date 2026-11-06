import { Pressable, ScrollView, Text } from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';

/** Rangée de pastilles défilante (périmètres de recherche, onglets de fiche). */
export function Pastilles({ elements, actif, onChoisir }: { elements: { id: string; label: string }[]; actif?: string; onChoisir?: (id: string) => void }) {
  const { c } = useTheme();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
      {elements.map((e) => {
        const sel = e.id === (actif ?? elements[0]?.id);
        return (
          <Pressable key={e.id} accessibilityRole="tab" accessibilityState={{ selected: sel }} onPress={() => onChoisir?.(e.id)}
            style={{ paddingHorizontal: 14, paddingVertical: 8, borderRadius: 999, backgroundColor: sel ? c['surface-raised'] : c['surface-sunken'] }}>
            <Text style={{ color: c.ink, fontWeight: sel ? '700' : '500' }}>{e.label}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

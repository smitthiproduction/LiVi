import { Tabs, Slot } from 'expo-router';
import { View } from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';
import { BarreLaterale } from '@/components/BarreLaterale';

/** Classe compacte : barre d'onglets ; classes moyenne et étendue : barre latérale (tablette, pliable déplié). */
export default function Onglets() {
  const { disposition, c } = useTheme();
  if (disposition.navigation === 'barre-laterale') {
    return (
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: c.bg }}>
        <BarreLaterale />
        <View style={{ flex: 1 }}><Slot /></View>
      </View>
    );
  }
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: c.accent, tabBarInactiveTintColor: c['ink-secondary'], tabBarStyle: { backgroundColor: c['glass-strong'], borderTopColor: c.hairline } }}>
      <Tabs.Screen name="index" options={{ title: 'Accueil' }} />
      <Tabs.Screen name="patrimoine" options={{ title: 'Patrimoine' }} />
      <Tabs.Screen name="marches" options={{ title: 'Marchés' }} />
      <Tabs.Screen name="ia" options={{ title: 'LiVi IA' }} />
      <Tabs.Screen name="activite" options={{ title: 'Activité' }} />
    </Tabs>
  );
}

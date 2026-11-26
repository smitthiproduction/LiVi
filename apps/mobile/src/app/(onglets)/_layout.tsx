import { Tabs, Slot } from 'expo-router';
import { View } from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';
import { BarreLaterale } from '@/components/BarreLaterale';

/** Classe compacte : barre d'onglets ; moyenne : rail de 72 pt ; étendue et plus : barre latérale de 248 pt. Même ordre partout : Accueil, Patrimoine, Budget, Marchés, LiVi IA. */
export default function Onglets() {
  const { disposition, c } = useTheme();
  if (disposition.navigation !== 'onglets') {
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
      <Tabs.Screen name="budget" options={{ title: 'Budget' }} />
      <Tabs.Screen name="marches" options={{ title: 'Marchés' }} />
      <Tabs.Screen name="ia" options={{ title: 'LiVi IA' }} />
    </Tabs>
  );
}

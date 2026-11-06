import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { BandeauMaintenance } from '@/components/BandeauMaintenance';

export default function Racine() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <BandeauMaintenance />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(onglets)" />
            <Stack.Screen name="(auth)/connexion" options={{ presentation: 'modal' }} />
            <Stack.Screen name="recherche" options={{ presentation: 'modal' }} />
            <Stack.Screen name="actif/[id]" />
            <Stack.Screen name="test-fonctionnalite" options={{ presentation: 'modal' }} />
          </Stack>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

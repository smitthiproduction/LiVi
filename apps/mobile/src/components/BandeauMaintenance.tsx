import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { lireEtatService, type EtatService } from '@/lib/maintenance';
import { useTheme } from '@/theme/ThemeProvider';

/** Bandeau affiché pendant une maintenance (BO-21). Les données locales restent consultables. */
export function BandeauMaintenance() {
  const { c } = useTheme();
  const [etat, setEtat] = useState<EtatService | null>(null);
  useEffect(() => { lireEtatService().then(setEtat).catch(() => setEtat(null)); }, []);
  if (!etat?.maintenance.active) return null;
  return (
    <View accessibilityRole="alert" style={{ backgroundColor: c['accent-soft'], padding: 12 }}>
      <Text style={{ color: c.ink }}>{etat.maintenance.message ?? 'Maintenance en cours. Vos données restent consultables sur cet appareil.'}</Text>
    </View>
  );
}

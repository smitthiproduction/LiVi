import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';

const ENTREES = [
  { href: '/', label: 'Accueil' },
  { href: '/patrimoine', label: 'Patrimoine' },
  { href: '/marches', label: 'Marchés' },
  { href: '/ia', label: 'LiVi IA' },
  { href: '/activite', label: 'Activité' },
] as const;

/** Navigation des classes moyenne et étendue (iPad, pliable déplié). */
export function BarreLaterale() {
  const { c } = useTheme();
  return (
    <View style={{ width: 248, paddingTop: 56, paddingHorizontal: 16, gap: 4, backgroundColor: c['glass-strong'], borderRightColor: c.hairline, borderRightWidth: 0.5 }}>
      {ENTREES.map((e) => (
        <Link key={e.href} href={e.href} style={{ paddingVertical: 12 }}>
          <Text style={{ color: c.ink, fontSize: 17, fontWeight: '600' }}>{e.label}</Text>
        </Link>
      ))}
    </View>
  );
}

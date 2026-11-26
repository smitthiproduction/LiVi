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

/** Navigation latérale : rail de 72 pt en classe moyenne (iPad portrait, pliable déplié), barre de 248 pt au-delà. */
export function BarreLaterale() {
  const { c, disposition, typo } = useTheme();
  const rail = disposition.navigation === 'rail';
  return (
    <View style={{ width: disposition.largeurNavigation, paddingTop: 56, paddingHorizontal: rail ? 4 : 16, gap: 4, alignItems: rail ? 'center' : 'stretch', backgroundColor: c['glass-strong'], borderRightColor: c.hairline, borderRightWidth: 0.5 }}>
      {ENTREES.map((e) => (
        <Link key={e.href} href={e.href} accessibilityLabel={e.label} style={{ paddingVertical: 12, minHeight: 44 }}>
          <Text style={{ color: c.ink, fontSize: rail ? typo.caption.fontSize : 17, fontWeight: '600', textAlign: rail ? 'center' : 'left' }}>{e.label}</Text>
        </Link>
      ))}
    </View>
  );
}

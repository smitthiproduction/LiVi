import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { useColorScheme, useWindowDimensions, AccessibilityInfo, Platform } from 'react-native';
import { couleurs, espacements, rayons, typographie, type Theme } from '@livi/design-tokens';
import { disposition, detecterFormat, type Disposition, type Format } from './formats.ts';

type Apparence = Theme | 'systeme';

interface ContexteTheme {
  theme: Theme;
  c: (typeof couleurs)[Theme];
  espacements: typeof espacements;
  rayons: typeof rayons;
  typo: typeof typographie;
  apparence: Apparence;
  choisirApparence: (a: Apparence) => void;
  format: Format;
  disposition: Disposition;
}

const Ctx = createContext<ContexteTheme | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const schema = useColorScheme();
  const { width, height } = useWindowDimensions();
  const [apparence, choisirApparence] = useState<Apparence>('systeme');
  const theme: Theme = apparence === 'systeme' ? (schema === 'light' ? 'light' : 'dark') : apparence;
  const valeur = useMemo<ContexteTheme>(() => {
    const fenetre = { largeur: width, hauteur: height, plateforme: Platform.OS === 'web' ? 'web' : (Platform.OS as 'ios' | 'android') };
    return {
      theme,
      c: couleurs[theme],
      espacements,
      rayons,
      typo: typographie,
      apparence,
      choisirApparence,
      format: detecterFormat(fenetre),
      disposition: disposition(fenetre),
    };
  }, [theme, apparence, width, height]);
  return <Ctx.Provider value={valeur}>{children}</Ctx.Provider>;
}

export function useTheme(): ContexteTheme {
  const v = useContext(Ctx);
  if (!v) throw new Error('useTheme doit être utilisé sous ThemeProvider.');
  return v;
}

/** Préférence système « Réduire les animations » (le globe passe en 2D). */
export async function reduireAnimations(): Promise<boolean> {
  return AccessibilityInfo.isReduceMotionEnabled();
}

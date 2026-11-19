/**
 * Formats d'écran et disposition. Fonctions pures, testées sans React Native.
 * Classes de taille alignées sur les recommandations Android (Material 3) et équivalentes
 * aux classes compact / regular d'Apple. Voir docs/design/responsive-et-formats.md.
 */

export type ClasseTaille = 'compacte' | 'moyenne' | 'etendue' | 'large' | 'tres-large';

/** Classe de taille selon la largeur de fenêtre en points (dp). */
export function classeDeTaille(largeur: number): ClasseTaille {
  if (largeur < 600) return 'compacte';
  if (largeur < 840) return 'moyenne';
  if (largeur < 1200) return 'etendue';
  if (largeur < 1600) return 'large';
  return 'tres-large';
}

export type Format =
  | 'telephone'
  | 'telephone-grand'
  | 'pliable-externe-etroit' // écran externe haut et étroit (type Galaxy Z Fold)
  | 'pliable-passeport' // écran externe large, ratio proche d'un passeport ouvert
  | 'pliable-deplie' // écran intérieur quasi carré
  | 'pliable-clapet' // écran intérieur haut d'un pliable à clapet (type Galaxy Z Flip)
  | 'tablette'
  | 'bureau';

export interface Fenetre {
  largeur: number;
  hauteur: number;
  plateforme: 'ios' | 'android' | 'web';
  /** L'appareil signale une charnière (API Window Manager sur Android). */
  pliable?: boolean;
  /** Posture signalée : à plat, semi-ouvert (table), plié. */
  posture?: 'a-plat' | 'semi-ouvert' | 'plie';
}

export function detecterFormat(f: Fenetre): Format {
  const petit = Math.min(f.largeur, f.hauteur);
  const grand = Math.max(f.largeur, f.hauteur);
  const ratio = grand / petit;
  if (f.plateforme === 'web' && f.largeur >= 1024) return 'bureau';
  if (f.pliable) {
    if (ratio < 1.35 && petit >= 560) return 'pliable-deplie';
    if (ratio >= 2.3 && petit < 380) return 'pliable-externe-etroit';
    if (ratio >= 2.05 && petit >= 380) return 'pliable-clapet';
    if (ratio < 2.05 && petit >= 380 && petit < 600) return 'pliable-passeport';
  }
  if (petit >= 600) return f.plateforme === 'web' ? 'bureau' : 'tablette';
  return petit >= 428 ? 'telephone-grand' : 'telephone';
}

export interface Disposition {
  /** Compacte : barre d'onglets ; moyenne : rail d'icônes et libellés ; étendue et plus : barre latérale. */
  navigation: 'onglets' | 'rail' | 'barre-laterale';
  /** Largeur de la navigation latérale en points (0 avec la barre d'onglets). */
  largeurNavigation: 0 | 72 | 248;
  colonnes: 1 | 2 | 3;
  maitreDetail: boolean;
  /** Le globe peut s'afficher à côté de son panneau d'informations. */
  globeCoteACote: boolean;
  margeLaterale: number;
}

export function disposition(f: Fenetre): Disposition {
  const classe = classeDeTaille(f.largeur);
  const format = detecterFormat(f);
  if (format === 'pliable-deplie' && f.posture === 'semi-ouvert') {
    // Posture « table » : contenu en haut, contrôles en bas, une colonne.
    return { navigation: 'onglets', largeurNavigation: 0, colonnes: 1, maitreDetail: false, globeCoteACote: false, margeLaterale: 24 };
  }
  switch (classe) {
    case 'compacte':
      return { navigation: 'onglets', largeurNavigation: 0, colonnes: 1, maitreDetail: false, globeCoteACote: false, margeLaterale: f.largeur < 360 ? 12 : 16 };
    case 'moyenne':
      return { navigation: 'rail', largeurNavigation: 72, colonnes: 2, maitreDetail: true, globeCoteACote: false, margeLaterale: 24 };
    case 'etendue':
      return { navigation: 'barre-laterale', largeurNavigation: 248, colonnes: 2, maitreDetail: true, globeCoteACote: true, margeLaterale: 32 };
    default:
      return { navigation: 'barre-laterale', largeurNavigation: 248, colonnes: 3, maitreDetail: true, globeCoteACote: true, margeLaterale: 40 };
  }
}

/** Le globe 3D est-il permis ? Sinon, carte 2D. */
export function globeAutorise(opts: { reduireAnimations: boolean; imagesParSeconde?: number; economieEnergie?: boolean }): boolean {
  if (opts.reduireAnimations || opts.economieEnergie) return false;
  return opts.imagesParSeconde === undefined || opts.imagesParSeconde >= 45;
}

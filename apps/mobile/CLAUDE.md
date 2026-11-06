# apps/mobile — règles locales

Application iPhone (puis Android) en **Expo + React Native + Expo Router**, TypeScript strict. Complète le `CLAUDE.md` racine.

## Structure
- `src/app/` : écrans (routage par fichiers). `(onglets)/` = Accueil, Patrimoine, Marchés, LiVi IA, Activité ; `(auth)/` = connexion Apple, Google, e-mail ; `actif/[id]` = fiche par classe ; `recherche` ; `test-fonctionnalite` (comptes de test).
- `src/components/` : composants (Ecran, Pastilles, BarreAction, BarreLaterale, CarteMarches, BandeauMaintenance).
- `src/theme/` : `ThemeProvider` (jetons, apparence, format) et `formats.ts` (classes de taille, pliables, disposition) **testé sans React Native**.
- `src/lib/` : `api.ts` (erreurs typées avec code du catalogue), `auth/` (Apple, Google, e-mail, session, verrou biométrique), `stockage/` (SQLite chiffré), `maintenance.ts`.

## Règles
1. Styles depuis `useTheme()` uniquement ; aucun hex dans un composant.
2. Mise en page depuis `disposition` (onglets en compact, barre latérale en moyen/étendu, maître-détail sur tablette et pliable déplié).
3. Onglets de fiche depuis `ongletsFiche()` ; filtres depuis `filtresClasse()` ; calculs depuis `@livi/core`.
4. Jeton de session et clé de base dans le trousseau (`expo-secure-store`, `WHEN_UNLOCKED_THIS_DEVICE_ONLY`) ; données dans SQLite chiffré.
5. « Se connecter avec Apple » toujours présent sur iOS quand Google est proposé.
6. Jamais « Acheter » ni « Vendre » ; barre d'action = « Ajouter une opération », « Créer une consigne ».
7. Le globe passe en 2D si « Réduire les animations », économie d'énergie ou moins de 45 images par seconde (`globeAutorise`).
8. Chaque écran : libellés d'accessibilité, texte dynamique, test sur la matrice d'appareils.

## Commandes
```bash
pnpm --filter @livi/mobile test        # tests purs (formats)
pnpm --filter @livi/mobile typecheck
pnpm --filter @livi/mobile ios         # build de développement (Xcode requis)
pnpm --filter @livi/mobile build:ios   # EAS Build
```

## À faire au premier lancement
`pnpm install`, puis `npx expo install --fix` (aligne les versions des modules sur le SDK Expo du moment), ajout des icônes dans `assets/`, création des identifiants Apple (Sign in with Apple, App ID `fr.livi.app`) et Google (clients iOS et web).

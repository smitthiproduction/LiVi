---
name: mobile-ios
description: Développe l'application iPhone (puis Android) en React Native et Expo : écrans, navigation, connexion Apple, Google et e-mail, Face ID, base locale chiffrée, widgets, formats d'écran. À utiliser pour tout ce qui vit dans apps/mobile.
tools: Read, Grep, Glob, Edit, Write, Bash
---

Tu développes `apps/mobile` (Expo, React Native, Expo Router, TypeScript strict).

## Règles
- Lire `apps/mobile/CLAUDE.md`, `docs/design/responsive-et-formats.md`, `docs/architecture/authentification.md`.
- Styles depuis `@livi/design-tokens` uniquement ; trois thèmes ; `useFormFactor()` pour adapter la mise en page (compacte, moyenne, étendue, pliable).
- Calculs depuis `@livi/core`, onglets de fiche depuis `ongletsFiche()` de `@livi/asset-classes`, jamais codés en dur.
- Données de l'utilisateur dans SQLite chiffré ; secrets dans le trousseau (`expo-secure-store`) ; aucune donnée financière dans les journaux.
- Connexion : « Se connecter avec Apple » toujours proposée dès que Google l'est (règle App Store) ; e-mail par lien ou code.
- Barre d'action des fiches : « Ajouter une opération », « Créer une consigne » ; jamais « Acheter ».
- Chaque écran a un scénario de test d'usage (skill `livi-test-fonctionnalite`) et passe la matrice d'appareils (`docs/qualite/matrice-appareils.md`).

## Vérification
`pnpm --filter @livi/mobile typecheck`, `pnpm --filter @livi/mobile test`, build de développement iOS (EAS ou Xcode), lecture VoiceOver de l'écran modifié.

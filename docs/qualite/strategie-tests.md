# Stratégie de tests

| Niveau | Outil | Ce qu'on teste | Où |
|---|---|---|---|
| Unitaires purs | `node --test` (sans dépendance) | Calculs, classification, marchés, formats, drapeaux, audit, messages, rôles, exécuteur de scénarios | `packages/*/test`, `apps/*/test` |
| Composants | Testing Library (React Native, React) | Rendu, accessibilité, états | `apps/mobile`, `apps/web`, `apps/admin` |
| API | Tests d'intégration sur base de test | Routes, autorisations, erreurs du catalogue | `apps/api` |
| Bout en bout | Playwright (web, back-office), Maestro (mobile) | Parcours critiques : connexion, import, catégorisation, consigne | CI |
| Tests d'usage | Bouton « Tester la fonctionnalité » | Un scénario par fonctionnalité, sur compte de test | Back-office, app |
| Appareils | Matrice manuelle et fermes d'appareils | Formats, thèmes, accessibilité | Avant chaque version |

## Parcours critiques (bloquants)
Connexion Apple, Google, e-mail · import CSV avec aperçu et doublons · propagation de catégorie · patrimoine net juste · création et validation d'une consigne · maintenance avec compte de test · export et suppression du compte.

## État actuel
Tests purs : paquets partagés et logique de l'API, du mobile, du web et du back-office (`pnpm test:packages` et `pnpm test:apps`) ; voir `docs/suivi/etat-du-projet.md` pour le décompte.

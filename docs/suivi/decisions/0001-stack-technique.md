# 0001 — Stack technique et monorepo

- Date : 2026-11-06
- Statut : acceptée

## Contexte
LiVi vise l'iPhone d'abord, puis Android (Samsung, pliables), le web et un back-office, avec une équipe réduite assistée d'agents. Les calculs financiers, la classification des actifs et les données de marché doivent être identiques sur toutes les surfaces.

## Décision
- **Monorepo** pnpm + turbo, TypeScript strict partout.
- **Mobile** : Expo, React Native, Expo Router ; un seul code pour iOS puis Android ; Skia pour le globe et les graphiques.
- **Web et back-office** : Next.js (App Router) ; three.js et react-three-fiber pour le globe.
- **API** : Fastify, Prisma, PostgreSQL (hébergement UE), Redis pour les files et limites.
- **Paquets partagés sans dépendance d'exécution** (`core`, `asset-classes`, `market-data`) : testables par `node --test` grâce à l'exécution native du TypeScript par Node 22.18+, sans installation.
- **Jetons de design** générés depuis le design system LiVi (une seule source).

## Conséquences
- Un calcul est écrit une fois et testé une fois.
- Les agents peuvent vérifier le cœur métier même sans accès réseau.
- Les versions Expo et React Native sont à aligner à l'installation (`npx expo install --fix`).

## Alternatives écartées
Swift natif puis Kotlin (deux codes, équipe réduite) ; Flutter (pas de partage avec le web React) ; backend Python (deux langages pour les calculs).

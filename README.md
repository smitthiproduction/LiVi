# LiVi

Application française de suivi de patrimoine : budget, comptes, placements, biens et dettes dans un seul outil, sur iPhone (puis Android), web et back-office. **LiVi ne vend aucun produit financier et ne recommande aucun placement.** LiVi IA (offre Signature) n'exécute que les consignes écrites par l'utilisateur, validées une par une.

> État : amorçage (novembre 2026). Socles testés et applications en squelette. Voir [docs/suivi/etat-du-projet.md](docs/suivi/etat-du-projet.md).

## Arborescence

```
apps/
  mobile/     iPhone puis Android (Expo, React Native, Expo Router) — formats téléphone, pliables, tablette
  web/        Application web (Next.js) — globe 3D, carte 2D, espace de travail
  admin/      Back-office (Next.js) — journaux, audits, erreurs, bugs, ajustements, maintenance, tests
  api/        API (Fastify, Prisma, PostgreSQL) — authentification Apple, Google, e-mail
packages/
  core/           Calculs : performance, CSV, catégorisation, analyse, prix de revente, mise en forme
  asset-classes/  14 classes et 85 sous-classes d'actifs, filtres, onglets, recherche, collections
  market-data/    Places boursières, indices, statut des séances, projections du globe
  design-tokens/  Jetons du design system LiVi (sombre, clair, pastel)
  ui-web/         Composants CSS du design system pour le web et le back-office
docs/         Produit, design, architecture, sécurité, réglementation, qualité, exploitation, suivi
old/          Archive des ordres et des versions remplacées (retour en arrière)
infra/        Services locaux (PostgreSQL, Redis, serveur de courriels de test)
scripts/      Génération et vérification des docs, archivage des ordres
.claude/      Agents et skills de développement
.github/      Intégration continue, sécurité, modèles
```

## Démarrer

```bash
nvm use                 # Node 22.18+
corepack enable         # pnpm 9
pnpm verifier           # tests purs + cohérence des docs (fonctionne sans installation)
pnpm install
docker compose -f infra/docker-compose.yml up -d
cp .env.example .env    # puis renseigner les valeurs (jamais commitées)
pnpm dev
```

## Règles

- Agents et développeurs : [CLAUDE.md](CLAUDE.md) (règles complètes) et [AGENTS.md](AGENTS.md).
- Contribuer : [CONTRIBUTING.md](CONTRIBUTING.md). Sécurité : [SECURITY.md](SECURITY.md).
- Documentation : [docs/README.md](docs/README.md). Historique : [CHANGELOG.md](CHANGELOG.md).

## Licence

Propriétaire, tous droits réservés. Voir [LICENSE.md](LICENSE.md).

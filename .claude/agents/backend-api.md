---
name: backend-api
description: Développe l'API (Fastify, Prisma, PostgreSQL) : authentification, sessions, offres et paiements, relais de synchronisation, passerelle IA, données de marché, drapeaux, maintenance, journal d'audit, catalogue des messages d'erreur. À utiliser pour apps/api.
tools: Read, Grep, Glob, Edit, Write, Bash
---

Tu développes `apps/api`.

## Règles
- Lire `apps/api/CLAUDE.md`, `docs/architecture/` et `docs/securite/`.
- Le serveur ne stocke pas en clair les transactions des utilisateurs : synchro chiffrée de bout en bout, relais d'agrégateur sans conservation.
- Toute route : validation des entrées (schéma), authentification, autorisation, limitation de débit, journal sans donnée financière, erreurs renvoyées avec un code du catalogue des messages.
- Passerelle IA : quotas par offre, routage Haiku/Sonnet, coût mesuré à l'appel, coupe-circuit ; jamais de clé côté client.
- Ordres courtiers : désactivés tant que l'avis juridique n'est pas versé ; validation ordre par ordre.
- Migrations Prisma revues, réversibles, sans perte.

## Vérification
`pnpm --filter @livi/api typecheck`, `pnpm --filter @livi/api test`, contrat OpenAPI à jour (`apps/api/openapi.yaml`).

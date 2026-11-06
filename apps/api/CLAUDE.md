# apps/api — règles locales

API **Fastify + Prisma + PostgreSQL**, TypeScript exécuté par Node 22. Complète le `CLAUDE.md` racine.

## Structure
- `src/server.ts` : construction de l'app (journaux masqués, en-têtes de sécurité, limitation de débit, erreurs du catalogue, corrélation).
- `src/modules/<domaine>/` : un dossier par domaine (auth, utilisateurs, offres, synchro, ia, marches, referentiel, modeles-csv, annuaire, drapeaux, etat, messages, audit, journaux, erreurs, bugs, tests-usage, sante).
- Logique pure testée sans dépendance : `drapeaux/evaluation.ts`, `messages/catalogue.ts`, `audit/journal.ts`, `auth/revendications.ts`, `tests-usage/executeur.ts`.
- `prisma/schema.prisma` : modèle serveur. **Les transactions et positions n'y sont pas** : seulement des blobs chiffrés côté client.
- `openapi.yaml` : contrat, mis à jour avec chaque route.

## Règles
1. Chaque route : schéma zod, authentification, autorisation (rôle, offre, drapeau), limitation de débit, réponse d'erreur avec un code de `messages/catalogue.ts`.
2. Journaux : jamais de montant, IBAN, e-mail, jeton, code ; masquage configuré dans `server.ts`.
3. Toute action sensible (connexion, liaison, export, suppression, ajustement, maintenance) écrit dans le journal d'audit chaîné.
4. Jetons Apple et Google : signature vérifiée par JWKS, puis `controlerRevendications`.
5. Ajustements globaux : deux validations ; tous les ajustements ont motif, auteur et échéance.
6. Maintenance : les comptes de test restent servis (liste blanche) pour les scénarios de test.
7. Scénarios de test : un par fonctionnalité dans `tests-usage/scenarios/<ID>.ts`, jeux fictifs dans `tests-usage/jeux/`.
8. Passerelle IA : clé uniquement ici, quotas, coût mesuré, refus des demandes de conseil (`IA_DEMANDE_DE_CONSEIL`).
9. Ordres courtiers : route désactivée (`ORDRE_NON_DISPONIBLE`) tant que l'avis juridique n'est pas versé.

## Commandes
```bash
pnpm --filter @livi/api test       # tests purs, sans base
pnpm --filter @livi/api dev        # serveur local (après pnpm install et base démarrée : infra/docker-compose.yml)
pnpm --filter @livi/api db:migrate
```

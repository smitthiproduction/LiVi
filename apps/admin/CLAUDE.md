# apps/admin — règles locales

Back-office **Next.js**. Complète le `CLAUDE.md` racine. Spécification : `docs/exploitation/back-office.md`.

- Accès : comptes du back-office avec 2FA obligatoire ; rôles et permissions dans `src/lib/roles.ts` (testé), **contrôlés côté serveur** par l'API.
- Aucune donnée financière d'un utilisateur visible par défaut ; accès assisté seulement avec consentement temporaire, journalisé.
- Ajustements : motif, auteur, échéance obligatoires ; global = deux administrateurs distincts (`validationGlobaleComplete`).
- Maintenance : message clair pour les utilisateurs, comptes de test en liste blanche.
- Bouton « Tester la fonctionnalité » : uniquement sur comptes de test, résultat journalisé (`ExecutionTest`).
- Thème clair par défaut (densité de lecture), jetons uniquement.
- Vérification : `pnpm --filter @livi/admin test` (droits), typecheck, scénario de test de la page modifiée.

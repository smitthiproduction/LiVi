# Contribuer à LiVi

1. Lire [CLAUDE.md](CLAUDE.md) et [docs/suivi/etat-du-projet.md](docs/suivi/etat-du-projet.md).
2. Créer une branche : `feat/…`, `fix/…`, `docs/…`, `chore/…`.
3. Si la tâche vient d'un nouvel ordre du porteur de projet : `pnpm ordre:archiver` (voir [old/README.md](old/README.md)).
4. Spécifier dans `docs/produit/catalogue.json`, puis `pnpm docs:generate`.
5. Coder en réutilisant `packages/*`, avec les jetons du design system.
6. Tester : `pnpm verifier` et `pnpm typecheck` ; ajouter le scénario du bouton de test.
7. Documenter : docs du domaine, `CHANGELOG.md` (section « Non publié »), `docs/suivi/journal.md`, `docs/suivi/etat-du-projet.md`.
8. Committer en convention : `type(portée): résumé` (`feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `securite`, `conformite`).
9. Ouvrir une pull request avec le modèle ; l'intégration continue doit être verte, et la vérification « docs à jour » échoue si du code change sans `CHANGELOG.md` ni journal.

Définition de « terminé » : [docs/qualite/definition-of-done.md](docs/qualite/definition-of-done.md).

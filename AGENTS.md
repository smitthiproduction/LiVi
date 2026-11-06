# Instructions pour les agents de développement

Ce dépôt suit les règles de [`CLAUDE.md`](CLAUDE.md), valables pour tout agent (Claude Code, Codex, Cursor, Copilot…) et pour les développeurs humains. En bref :

1. Lire `docs/suivi/etat-du-projet.md` puis le `CLAUDE.md` de l'application concernée (`apps/*/CLAUDE.md`).
2. Archiver tout nouvel ordre du porteur de projet dans `old/` (`pnpm ordre:archiver`) avant de modifier quoi que ce soit.
3. Respecter les interdits : aucun conseil en investissement, aucun bouton « Acheter / Vendre », aucun ordre sans validation explicite, aucun secret ni donnée réelle, aucune donnée financière dans les journaux, ne jamais modifier `old/`.
4. Réutiliser les sources de vérité (`packages/*`, `docs/produit/catalogue.json`) ; ne jamais modifier un fichier généré.
5. Tester (`pnpm verifier`, `pnpm typecheck`), documenter (docs, `CHANGELOG.md`, `docs/suivi/journal.md`), puis ouvrir une pull request.

Rôles et procédures détaillés : `.claude/agents/` et `.claude/skills/`.

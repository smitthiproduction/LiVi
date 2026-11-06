---
name: livi-mise-a-jour-docs
description: Mettre à jour la documentation après un changement : docs du domaine, docs générées, CHANGELOG, journal, état du projet, décisions. À utiliser à la fin de chaque tâche.
---

# Mettre à jour la documentation

1. **Docs du domaine** : la page qui décrit le comportement modifié (`docs/produit`, `docs/architecture`, `docs/design`, `docs/securite`, `docs/reglementation`, `docs/exploitation`, `docs/qualite`) et le `CLAUDE.md` de l'application si une règle change.
2. **Docs générées** : `pnpm docs:generate` (catalogue, classes d'actifs). Ne jamais les modifier à la main.
3. **CHANGELOG.md** : ligne dans « Non publié » (Ajouté, Modifié, Corrigé, Sécurité, Retiré).
4. **docs/suivi/journal.md** : entrée datée (ordre, ce qui a été fait, fichiers clés, points ouverts).
5. **docs/suivi/etat-du-projet.md** : réécrire les sections « En cours », « Fait récemment », « Prochaines étapes ».
6. **Décision** structurante : `docs/suivi/decisions/NNNN-titre.md`.
7. `pnpm docs:check` doit passer.

---
name: livi-verification
description: Vérifier un changement avant commit ou avant une version : tests, typage, docs, appareils, sécurité, conformité. À utiliser à la fin de chaque tâche et avant toute publication.
---

# Vérifier avant de livrer

## Toujours
```bash
pnpm verifier      # tests des paquets + cohérence des docs
pnpm typecheck
```
- [ ] Les tests couvrent le cas nominal, une valeur absente, un format étranger, une erreur.
- [ ] Aucun secret, aucune donnée réelle, aucune donnée financière dans les journaux (`git diff` relu).
- [ ] Docs du domaine, `CHANGELOG.md`, `docs/suivi/journal.md` à jour.

## Interface
- [ ] Scénario du bouton « Tester la fonctionnalité » vert sur un compte de test.
- [ ] Matrice d'appareils (`docs/qualite/matrice-appareils.md`) : au minimum iPhone compact, iPhone grand, iPad, web 360 et 1280 px, dans les trois thèmes.
- [ ] VoiceOver ou TalkBack sur l'écran modifié.

## Avant une version
- [ ] Revue `securite` si authentification, chiffrement, droits ou dépendances ont changé.
- [ ] Revue `conformite` si un texte, une donnée ou une publicité a changé.
- [ ] Version minimale et notes de version renseignées (back-office BO-24).

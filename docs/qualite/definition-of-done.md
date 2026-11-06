# Définition de « terminé »

Une tâche est terminée quand :
1. Le comportement correspond à l'entrée du catalogue (`docs/produit/catalogue.json`) et à la page du module.
2. Les tests passent : `pnpm verifier` et `pnpm typecheck` ; les calculs ont des tests avec cas limites.
3. Le scénario de test d'usage existe et passe sur un compte de test.
4. L'interface est vérifiée sur la matrice d'appareils, dans les trois thèmes, avec lecteur d'écran et texte agrandi.
5. Les revues nécessaires sont faites : `securite` (authentification, chiffrement, droits, dépendances), `conformite` (textes, données, publicité).
6. La documentation est à jour : docs du domaine, docs générées, `CHANGELOG.md`, `docs/suivi/journal.md`, `docs/suivi/etat-du-projet.md`.
7. L'ordre d'origine est archivé dans `old/` et sa section Résultat complétée.

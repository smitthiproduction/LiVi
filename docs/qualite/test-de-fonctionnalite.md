# Bouton « Tester la fonctionnalité »

Objectif : vérifier une fonctionnalité en conditions réelles d'usage, sur un compte de test actif, à tout moment, y compris pendant une maintenance, pour résoudre un problème sans toucher un compte réel.

## Où
- Back-office › Maintenance et tests (permission `tests.lancer`).
- Dans l'app, écran « Tester une fonctionnalité », visible seulement quand le compte connecté est un compte de test.

## Comment
1. Choisir la fonctionnalité (identifiant du catalogue) et le compte de test (Essentiel, Plus ou Signature).
2. Le jeu de données fictif est chargé ; le scénario s'exécute étape par étape.
3. Résultat affiché : chaque étape verte ou rouge, détail de l'écart, durée, version.
4. Le jeu est réinitialisé, même en cas d'échec ; l'exécution est journalisée.

## Règles
Comptes de test et jeux fictifs uniquement (refus automatique sinon) ; un scénario par fonctionnalité (skill `livi-test-fonctionnalite`) ; un scénario rouge bloque la sortie du drapeau. Exemple livré : `BUD-02` (propagation de catégorie), testé dans `apps/api/test/api.test.ts`.

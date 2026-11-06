---
name: livi-fonctionnalite
description: Ajouter ou modifier une fonctionnalité de LiVi de bout en bout : catalogue, spécification, code, scénario de test, drapeau, documentation. À utiliser pour toute nouvelle fonction ou tout changement de comportement visible.
---

# Ajouter ou modifier une fonctionnalité

## 1. Catalogue
Ajouter ou modifier l'entrée dans `docs/produit/catalogue.json` :
`{"id": "MOD-NN", "module": "NN. Nom", "nom", "description", "surfaces", "offre": "Essentiel|Plus|Signature|Option payante|Interne", "priorite": "MVP (juil. 2027)|V1.5 (oct. 2027)|V2 (2028)|V3 (2029)", "contraintes", "dependance"}`.
L'identifiant ne change jamais une fois publié. Puis `pnpm docs:generate`.

## 2. Spécification
Mettre à jour la page du module dans `docs/produit/fonctionnalites/` (comportement, écrans, cas limites, contraintes). Vérifier la conformité (skill `livi-conformite`) si la fonction touche l'argent, les données ou la publicité.

## 3. Code
- Calcul réutilisable → `packages/core` avec tests.
- Donnée de référence → `packages/asset-classes` ou `packages/market-data`.
- Écrans → `apps/mobile`, `apps/web`, `apps/admin` ; route → `apps/api`.
- Derrière un drapeau `fonctionnalite.<id-minuscule>` (back-office BO-20) tant qu'elle n'est pas validée.

## 4. Test d'usage
Créer le scénario du bouton « Tester la fonctionnalité » (skill `livi-test-fonctionnalite`).

## 5. Documentation
Skill `livi-mise-a-jour-docs` : CHANGELOG, journal, état du projet.

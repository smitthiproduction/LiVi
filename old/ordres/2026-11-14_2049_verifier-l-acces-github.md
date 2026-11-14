# Ordre : Vérifier l'accès GitHub

- Reçu le : 2026-11-14T19:49:43.328Z
- Statut : livré

## Texte de l'ordre

L’accès ghitub lié est ouvert vérifie

## Interprétation

- Ce qui sera fait : vérifier l'accès en écriture au dépôt, pousser le commit d'amorçage, contrôler le premier passage de l'intégration continue et corriger ce qui bloque.
- Ce qui ne sera pas fait : fusionner les pull requests Dependabot ou changer la visibilité du dépôt sans accord.
- Points à valider avec le porteur de projet : dépôt public ou privé ; tri des mises à jour Dependabot.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Accès et push | `chef-de-projet` | `main` présent sur GitHub au commit `aa5a094` |
| Intégration continue | `qa-tests` | Tests purs et docs verts ; job d'installation corrigé |
| Suivi | `documentaliste` | CHANGELOG, journal, état du projet à jour |

## Fichiers archivés avant modification

- `old/versions/2026-11-14_2049/.github/workflows/ci.yml`
- `old/versions/2026-11-14_2049/.github/workflows/ios.yml`

## Résultat

- Accès en écriture confirmé ; `main` poussé (commit `aa5a094`), dépôt https://github.com/smitthiproduction/LiVi (public).
- CI sur `main` : tests purs et docs verts, sécurité (CodeQL, gitleaks) verte, job « Typage, lint et build » en échec : `actions/setup-node` avec `cache: pnpm` exige un `pnpm-lock.yaml` absent.
- Correctif sur la branche `fix/ci-installation` (pull request) : cache retiré, job d'installation non bloquant, fichier de verrouillage conservé en artefact ; même correction pour le build iOS.
- Deux commits de plus sur la même branche après lecture des erreurs de la CI : types de three.js, une seule version de React (19.0.0 ; le build web et back-office échouait sur react 19.0.0 contre react-dom 19.3.1), configuration ESLint commune, deux erreurs de typage (API, mobile), `expo-constants` ajouté.
- Résultat : installation, typage, lint et build des quatre applications verts en CI ; tests purs et docs verts ; CodeQL et gitleaks verts.
- Reste : la revue des dépendances échoue tant que le « Dependency graph » n'est pas activé dans les réglages du dépôt ; `pnpm-lock.yaml` à commiter (disponible en artefact de la CI).
- Dependabot a ouvert des pull requests de mises à jour, laissées au tri du porteur.

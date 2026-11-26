---
name: livi-maquette-figma
description: Concevoir, modifier ou valider une maquette LiVi dans Figma à partir de l'inventaire docs/design/maquettes.json (cadres MQ-…, nombre tenu à jour dans l'inventaire). À utiliser pour toute maquette d'écran, tout nouvel écran à maquetter ou tout changement de statut.
---

# Concevoir une maquette dans Figma

Fichier : https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq · inventaire : `docs/design/maquettes.json` · guide : `docs/design/figma.md`.

## Avant
1. Lire l'entrée de la maquette dans `maquettes.json` (écran, format, état, fonctionnalités) et les fonctionnalités dans `docs/produit/catalogue.json`.
2. Lire les règles : `CLAUDE.md` §2 et §5, `docs/design/direction-artistique.md`, `docs/design/responsive-et-formats.md`, `docs/produit/navigation.md`, et la page de module dans `docs/produit/fonctionnalites/`.
3. Écran absent de l'inventaire : l'ajouter dans `maquettes.json` (identifiant suivant, groupe, format, fonctionnalités) avant de dessiner.

## Dans Figma (serveur MCP Figma, `.mcp.json`)
1. Ouvrir une session sur le fichier, aller au cadre par son identifiant (`figma` dans l'inventaire).
2. Passer le statut à `en-cours` (pastille du cadre et `maquettes.json`).
3. Supprimer le bloc « à concevoir », garder barres système et navigation, construire avec des **instances** de la page Composants, les **variables** (Couleurs, Espacements, Rayons) et les **styles** de texte et d'effet. Aucune valeur en dur.
4. Données fictives et vraisemblables, nombres à la française ; aucune donnée réelle.
5. Vérifier par captures dans les trois modes (Sombre, Clair, Pastel) : rien de tronqué, contrastes lisibles, cibles de 44 pt.
6. Passer le statut à `a-valider`, puis `validee` après accord du porteur de projet. Nommer une version Figma à chaque lot validé.

## Dans le dépôt
1. Mettre à jour `maquettes.json` (statut, identifiant Figma si le cadre a changé), puis `pnpm docs:generate` et `pnpm verifier`.
2. Composant nouveau ou modifié : l'agent `design-system` le crée dans Figma et documente `docs/design/figma.md` ; jeton nouveau : `tokens.json`, `pnpm tokens:build`, puis la variable Figma.
3. Journal, CHANGELOG, commit `docs(maquettes): MQ-… écran`.

## Interdits
- Bouton « Acheter », « Vendre », « recommandé », suggestion maison.
- Cadre hors inventaire, couleur codée en dur, maquette supprimée (déplacer dans la page Archive).

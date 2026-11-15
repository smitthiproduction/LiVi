# Ordre : Maquettes lot 1 : entrée, compte, accueil et comptes

- Reçu le : 2026-11-15T03:21:22.216Z
- Statut : livré, à valider par le porteur de projet

## Texte de l'ordre

C'est parfait allons y (validation de la proposition : commencer par le premier lot MQ-001 à MQ-039, connexion, accueil, comptes et import, dessinés dans leurs emplacements et montrés dans les trois thèmes)

## Interprétation

- Ce qui sera fait : dessiner les 39 maquettes MQ-001 à MQ-039 (groupes « 01 · Entrée et compte » et « 02 · Accueil et comptes », format iPhone) dans leurs cadres du fichier Figma, avec les composants, variables et styles du fichier et des données fictives ; compléter les composants qui manquent ; vérifier chaque écran dans les thèmes Sombre, Clair et Pastel ; passer les statuts à « à valider » dans `docs/design/maquettes.json` ; documenter.
- Ce qui ne sera pas fait : les autres formats (Android, pliables, tablettes, web) des mêmes écrans, prévus dans leurs propres cadres de l'inventaire ; le code des écrans.
- Points à valider avec le porteur de projet : les 39 écrans (contenu, ton, hiérarchie), les deux nouveaux jetons `knob` et `scrim`, le choix de montrer les sources et dates sous chaque montant.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Composants manquants (icônes, interrupteur, cases, champ, barre de navigation, poignée, ligne de réglage) | `design-system` | Instances réutilisables, liées aux variables, sans valeur en dur |
| MQ-001 à MQ-023 (page 01) | `design-system` | Aucun bloc « à concevoir », aucun chevauchement avec la barre du bas, aucun texte tronqué |
| MQ-024 à MQ-039 (page 02) | `design-system` | Mêmes critères, sommes et pourcentages cohérents entre écrans |
| Revue trois thèmes | `qa-tests` | Captures Sombre, Clair, Pastel lisibles |
| Dépôt | `documentaliste` | Statuts, docs générées, guide Figma, CHANGELOG, journal, état du projet ; `pnpm verifier` vert |

## Fichiers archivés avant modification

- `old/versions/2026-11-15_0421/docs/design/maquettes.json`
- `old/versions/2026-11-15_0421/packages/design-tokens/src/tokens.json`

## Résultat

Livré le 15 novembre 2026 sur la branche `docs/maquettes-lot-1`.

- Figma : 39 cadres dessinés (pages 01 et 02), étiquette « MQ-… · À valider » au-dessus de chacun ; 22 icônes et 7 composants ajoutés (Interrupteur, Case radio, Case à cocher, Champ de saisie, Barre de navigation, Poignée de feuille, Ligne de réglage) ; variables `surface/knob` et `surface/scrim`.
- Jetons : `knob` et `scrim` ajoutés à `packages/design-tokens/src/tokens.json` (44 couleurs), CSS et TS régénérés.
- Dépôt : statuts `a-valider` pour MQ-001 à MQ-039 dans `docs/design/maquettes.json`, `docs/design/maquettes.md` régénéré, `docs/design/figma.md`, `CHANGELOG.md`, `docs/suivi/journal.md`, `docs/suivi/etat-du-projet.md`.
- Vérifications : contrôle automatique des 39 cadres (aucun bloc restant, aucun chevauchement) ; captures des trois thèmes ; 57 tests verts ; docs cohérentes.
- Écarts : les planches de revue sont envoyées au porteur de projet et ne sont pas versées dans le dépôt ; le nuancier de la page Fondations ne montre pas encore les deux nouveaux jetons.

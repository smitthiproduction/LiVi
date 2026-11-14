# Ordre : Préparer Figma pour les 200 maquettes

- Reçu le : 2026-11-14T21:26:14.730Z
- Statut : livré

## Texte de l'ordre

tu as acces au navigateur pour github et figma je te laisse faire le necessaire pour qu'on puisse ensuite creer les 200 maquettes figma

## Interprétation

- Ce qui sera fait : finir les réglages GitHub laissés ouverts (fusion de la pull request n° 16, Dependency graph) ; préparer un fichier Figma complet pour que les 200 maquettes puissent être dessinées ensuite : variables des trois thèmes depuis `tokens.json`, styles, composants de base, gabarits de formats, 200 cadres nommés, inventaire versionné dans le dépôt et règles pour les agents.
- Ce qui ne sera pas fait : dessiner les 200 écrans (étape suivante, lot par lot) ; changer la visibilité du dépôt ; fusionner les mises à jour Dependabot.
- Points à valider avec le porteur de projet : liste des 200 écrans (`docs/design/maquettes.md`) ; ordre des lots ; dépôt public ou privé.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| GitHub | `chef-de-projet` | PR 16 fusionnée, Dependency graph actif |
| Variables, styles, composants Figma | `design-system` | Liés aux jetons, trois modes fonctionnels |
| Inventaire et 200 cadres | `design-system`, `documentaliste` | 200 cadres, chaque fonctionnalité couverte |
| Liaison dépôt | `qa-tests`, `documentaliste` | Test des gabarits, `pnpm docs:check` vert |

## Fichiers archivés avant modification

- `old/versions/2026-11-14_2226/CLAUDE.md`
- `old/versions/2026-11-14_2226/scripts/generer-docs.ts`
- `old/versions/2026-11-14_2226/scripts/verifier-docs.mjs`
- `old/versions/2026-11-14_2226/.claude/agents/design-system.md`

## Résultat

- GitHub : PR n° 16 fusionnée (`5dc965f`) ; Dependency graph, alertes Dependabot et signalement privé des vulnérabilités activés via le navigateur.
- Figma : https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq — 3 collections (42 couleurs × 3 modes, 9 espacements, 6 rayons), 14 styles de texte, 12 styles d'effet, 16 icônes, 17 composants, 14 gabarits, 200 cadres `MQ-…`, pages Couverture, Fondations, Composants, Formats, 10 groupes, Archive.
- Dépôt (branche `feat/maquettes-figma`) : `docs/design/maquettes.json` et `maquettes.md`, `docs/design/figma.md`, skill `livi-maquette-figma`, `.mcp.json`, contrôles dans `scripts/verifier-docs.mjs`, test des gabarits.
- Écart : la vignette du fichier Figma ne peut pas être définie par l'API (clic droit sur le cadre Couverture › « Définir comme vignette »).

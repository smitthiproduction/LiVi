# Ordre : Restes Figma et points ouverts de la revue

- Reçu le : 2026-11-20T01:05:18.452Z
- Statut : livré le 20 novembre 2026 (maquettes à valider, rapports des agents à arbitrer)

## Texte de l'ordre

reprend et ce qui reste vas y. (Messages suivants : « t'as le navigateur avec github, claude console et figma ouvert » ; « tu pourras à la fin lancer les 2 agents : Chrysae UX Simulation Auditor; Figma UX & Spec Auditor ».) Restes annoncés : rail de navigation en composant Figma, couverture à 247 écrans, contrôle des liens du prototype, branche fusionnée à supprimer, alerte de sécurité Dependabot ; points ouverts de la revue : écran Aide (R-13), fiches d'Horizon Vie et d'Atlas Bourse (R-14), import de Caisse du Port (R-15), étape 3 sur MQ-204 (R-46), jours du 12 et du 13 novembre dans les opérations (R-52).

## Interprétation

- Ce qui sera fait : les restes annoncés à la fin de la livraison précédente (rail en composant, couverture, contrôle des liens, branche fusionnée, alerte Dependabot), puis les cinq points restés ouverts de la revue du 15 novembre ; à la fin, lancer les deux agents de la Claude Console avec leurs définitions et verser leurs rapports.
- Ce qui ne sera pas fait : la suite du lot 7 (fiches, budget, marchés et LiVi IA sur les autres formats) ; les corrections issues des rapports des deux agents, qui demandent l'arbitrage du porteur.
- Points à valider avec le porteur de projet : nouvelle fonctionnalité USR-13 « Aide » au MVP ; lignes « En ligne » de l'écran Aide (articles et documents ouverts dans le navigateur intégré) ; « Chrysae UX Simulation Auditor » appliqué à LiVi avec des personas transposés.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Sécurité | `securite` | Alerte Dependabot n° 1 fermée par la mise à jour de zod, CI verte |
| Restes Figma | `design-system` | Rail en composant à variantes, couverture à jour, contrôle des liens sans écart |
| Points ouverts de la revue | `design-system`, `revue-maquettes` | R-13, R-14, R-15, R-46, R-52 corrigés, vérifiés dans les trois thèmes |
| Audits | agents de la Console | Rapports versés dans `docs/audit-figma/` et `docs/qualite/revues/` |
| Livraison | `documentaliste` | Inventaire, catalogue, docs, PR fusionnée, version Figma |

## Fichiers archivés avant modification

- `old/versions/2026-11-20_0205/docs/design/maquettes.json`
- `old/versions/2026-11-20_0205/docs/qualite/revues/2026-11-15-revue-maquettes.md`

## Résultat

- GitHub : branche de la PR n° 32 supprimée ; PR n° 33 « securite(api): zod 4.6.6 » fusionnée, alerte Dependabot n° 1 passée à « Fixed » ; branche supprimée.
- Figma : composant « Rail de navigation » (`186:537`, 5 variantes) posé dans MQ-246 et MQ-247 ; couverture à 253 écrans ; MQ-248 (`187:9151`), MQ-249 (`187:9288`), MQ-250 (`187:9672`), MQ-251 à MQ-253 (`187:10226`, `187:10422`, `187:10549`) ; liens des lignes d'établissement (MQ-024, 027, 028, 030, 210, 237, 238, 239) ; MQ-204 « Étape 3 sur 3 » ; MQ-089 jours du 12 et du 13 novembre et défilement. Contrôle : 157 cadres, 644 liens, 14 points de départ, aucun écart mesuré. Planches Sombre, Clair, Pastel. Version « Restes de la revue ».
- Dépôt : `catalogue.json` (USR-13, 177 fonctionnalités), `maquettes.json` (253 maquettes ; 57 validées, 111 à valider, 85 à faire), `navigation.md`, `figma.md`, `responsive-et-formats.md`, `parcours-utilisateur.md` §11, suivi de la revue du 15 novembre (partie 3), état, journal, CHANGELOG, `CLAUDE.md`.
- Agents de la Console, lancés avec leurs définitions (lecture seule dans Figma) : « Figma UX & Spec Auditor » › `docs/audit-figma/2026-11-20-formats-notifications-restes.md` (0 bloquant, 13 importants, 20 améliorations ; 12 appels Figma) ; « Chrysae UX Simulation Auditor », transposé à LiVi › `docs/qualite/revues/2026-11-20-simulation-ux-5-personas.md` (65 annotations : 2 bloquantes, 37 majeures, 26 mineures ; 15 appels Figma).
- Tests : paquets et applications verts, `docs:check` vert.
- Écarts : le quota quotidien du serveur MCP Figma a été atteint après les deux audits ; les corrections objectives relevées par les agents (troncatures du Fold plié, largeur de la pastille, fin de l'import de Caisse du Port, avatar du web, cibles du rail et de la barre latérale, liens obligatoires de l'écran des offres) restent à faire à la prochaine séance.

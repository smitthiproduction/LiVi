# Ordre : Validation du lot 2 et maquettes lot 3

- Reçu le : 2026-11-15T05:59:27.245Z
- Statut : livré, lot 3 à valider par le porteur de projet

## Texte de l'ordre

valide du lot 2 ok continuons (validation du lot 2, MQ-040 à MQ-066 ; suite proposée : lot 3, page 04)

## Interprétation

- Ce qui sera fait : enregistrer la validation du lot 2 (statuts `validee`, étiquettes, version Figma « Lot 2 validé ») ; dessiner le lot 3, MQ-067 à MQ-078 (groupe « 04 · Investissements et analyse », page 04) ; vérifier dans les trois thèmes ; passer les statuts à « à valider » ; documenter.
- Ce qui ne sera pas fait : les autres formats de ces écrans ; le code des écrans.
- Points à valider avec le porteur de projet : les 12 écrans ; le vocabulaire « à ajouter, à retirer » du calculateur d'arbitrage ; le choix d'afficher le TWR en grand et le TRI à côté.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Validation du lot 2 | `documentaliste` | Statuts `validee`, étiquettes, version Figma nommée |
| MQ-067 à MQ-078 (page 04) | `design-system` | Aucun bloc « à concevoir », aucun chevauchement, chiffres cohérents avec les lots 1 et 2 |
| Neutralité des analyses | `conformite` | Méthode affichée, aucune cible proposée, mesures passées présentées comme telles |
| Revue trois thèmes | `qa-tests` | Captures Sombre, Clair, Pastel |
| Dépôt | `documentaliste` | Statuts, docs, CHANGELOG, journal, état du projet, tests et docs verts |

## Fichiers archivés avant modification

- `old/versions/2026-11-15_0659/docs/design/maquettes.json`

## Résultat

Livré le 15 novembre 2026 sur la branche `docs/maquettes-lot-3`.

- Lot 2 : 27 statuts `validee`, étiquettes « Validée », version Figma « Lot 2 validé ».
- Lot 3 : 12 cadres dessinés sur la page 04 avec les composants existants (aucun nouveau composant).
- Données : placements de 103 245,03 € en 9 lignes, gain de 7 812,40 € sur 1 an (TWR +8,9 %, TRI +8,4 %), concentration 0,24 et arbitrage calculés avec `herfindahl` et `arbitrageVersCible` de `packages/core`, revenus de 1 748,30 € sur 12 mois, plafonds légaux de 2026 (PEA 150 000 €, livret A 22 950 €, LDDS 12 000 €).
- Vérifications : contrôle automatique des 12 cadres, captures des trois thèmes, 57 tests verts, docs cohérentes.
- Écart : aucun.

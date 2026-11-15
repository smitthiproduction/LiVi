# Ordre : Validation du lot 4 et maquettes lot 5 recherche et marches

- Reçu le : 2026-11-15T06:38:58.886Z
- Statut : livré, lot 5 à valider par le porteur de projet

## Texte de l'ordre

Valide continue (validation du lot 4, MQ-079 à MQ-097 ; suite proposée : lot 5, recherche et marchés, page 06)

## Interprétation

- Ce qui sera fait : enregistrer la validation du lot 4 (statuts `validee`, étiquettes, version Figma « Lot 4 validé ») ; dessiner le lot 5, MQ-098 à MQ-114 (groupe « 06 · Recherche et marchés », page 06) ; vérifier dans les trois thèmes ; passer les statuts à « à valider » ; documenter.
- Ce qui ne sera pas fait : les autres formats de ces écrans ; le code des écrans, dont le vrai globe 3D.
- Points à valider avec le porteur de projet : les 17 écrans ; le rendu en points du globe et de la carte (contours simplifiés) ; la navigation de l'onglet Marchés (Monde ou Découvrir, puis région, puis Globe, Carte ou Liste).

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Validation du lot 4 | `documentaliste` | Statuts `validee`, étiquettes, version Figma nommée |
| MQ-098 à MQ-114 (page 06) | `design-system` | Aucun bloc « à concevoir », aucun chevauchement, étiquettes du globe et de la carte lisibles |
| Neutralité et licences | `conformite` | Tris présentés comme tels, noms de collections descriptifs, sources et dates des données tierces, article sous licence |
| Revue trois thèmes | `qa-tests` | Captures Sombre, Clair, Pastel |
| Dépôt | `documentaliste` | Statuts, docs, CHANGELOG, journal, état du projet, tests et docs verts |

## Fichiers archivés avant modification

- `old/versions/2026-11-15_0738/docs/design/maquettes.json`

## Résultat

Livré le 15 novembre 2026 sur la branche `docs/maquettes-lot-5`.

- Lot 4 : 19 statuts `validee`, étiquettes « Validée », version Figma « Lot 4 validé ».
- Lot 5 : 17 cadres dessinés sur la page 06 avec les composants existants. Globe (projection orthographique) et carte (projection équirectangulaire) calculés dans Figma à partir de contours simplifiés des continents dessinés à la main.
- Données : séance du vendredi 13 novembre, places fermées le dimanche 15 avec le temps avant chaque ouverture (Sydney 16 h 22 min, Tokyo 17 h 22 min, Paris 25 h 22 min, New York 31 h 52 min) ; exposition par pays reprise du lot 3.
- Vérifications : contrôle automatique des 17 cadres, captures des trois thèmes, 57 tests verts, docs cohérentes.
- Écart : une étiquette d'indice retirée de la carte 2D pour éviter un chevauchement (elle reste sur le globe et dans la vue liste).

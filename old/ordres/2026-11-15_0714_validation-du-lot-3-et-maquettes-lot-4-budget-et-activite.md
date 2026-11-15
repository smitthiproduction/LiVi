# Ordre : Validation du lot 3 et maquettes lot 4 budget et activite

- Reçu le : 2026-11-15T06:14:49.624Z
- Statut : livré, lot 4 à valider par le porteur de projet

## Texte de l'ordre

Valide continuons (validation du lot 3, MQ-067 à MQ-078 ; suite proposée : lot 4, budget et activité, page 05)

## Interprétation

- Ce qui sera fait : enregistrer la validation du lot 3 (statuts `validee`, étiquettes, version Figma « Lot 3 validé ») ; dessiner le lot 4, MQ-079 à MQ-097 (groupe « 05 · Budget et activité », page 05) ; vérifier dans les trois thèmes ; passer les statuts à « à valider » ; documenter.
- Ce qui ne sera pas fait : les autres formats de ces écrans ; le code des écrans.
- Points à valider avec le porteur de projet : les 19 écrans ; le sélecteur « Fil, Budget, Abonnements » en haut de l'onglet Activité ; l'application automatique des opérations sur titres à leur date d'effet, avec aperçu préalable.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Validation du lot 3 | `documentaliste` | Statuts `validee`, étiquettes, version Figma nommée |
| MQ-079 à MQ-097 (page 05) | `design-system` | Aucun bloc « à concevoir », aucun chevauchement, chiffres cohérents avec les lots précédents |
| Contraintes du catalogue | `conformite` | Catégorisations manuelles jamais écrasées sans le dire, correction d'annuaire anonymisée, alerte présentée comme n'étant pas un ordre |
| Revue trois thèmes | `qa-tests` | Captures Sombre, Clair, Pastel |
| Dépôt | `documentaliste` | Statuts, docs, CHANGELOG, journal, état du projet, tests et docs verts |

## Fichiers archivés avant modification

- `old/versions/2026-11-15_0714/docs/design/maquettes.json`

## Résultat

Livré le 15 novembre 2026 sur la branche `docs/maquettes-lot-4`.

- Lot 3 : 12 statuts `validee`, étiquettes « Validée », version Figma « Lot 3 validé ».
- Lot 4 : 19 cadres dessinés sur la page 05 avec les composants existants (aucun nouveau composant).
- Données : budget de novembre de 1 800,00 € en huit enveloppes (1 240,00 € dépensés), abonnements de 98,94 € par mois, transfert mensuel de 300,00 € vers le PEA, division par 2 de Lumière Industries au 1er décembre avec lots et alertes ajustés.
- Vérifications : contrôle automatique des 19 cadres, captures des trois thèmes, 57 tests verts, docs cohérentes.
- Écart : aucun.

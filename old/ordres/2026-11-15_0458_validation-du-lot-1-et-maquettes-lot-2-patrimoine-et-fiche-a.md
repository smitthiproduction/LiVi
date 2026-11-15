# Ordre : Validation du lot 1 et maquettes lot 2 : patrimoine et fiche actif

- Reçu le : 2026-11-15T03:58:06.563Z
- Statut : livré, lot 2 à valider par le porteur de projet

## Texte de l'ordre

Je valide continue (validation du lot 1, MQ-001 à MQ-039 ; suite proposée et acceptée : lot 2, patrimoine et fiche actif, MQ-040 à MQ-066)

## Interprétation

- Ce qui sera fait : enregistrer la validation du lot 1 (statuts `validee`, étiquettes Figma, version Figma « Lot 1 validé ») ; dessiner le lot 2, MQ-040 à MQ-066 (groupe « 03 · Patrimoine et fiche actif », page 03 du fichier Figma), avec les composants, variables et styles du fichier ; vérifier dans les trois thèmes ; passer les statuts à « à valider » ; documenter.
- Ce qui ne sera pas fait : les autres formats de ces écrans (cadres propres dans l'inventaire) ; le code des écrans.
- Points à valider avec le porteur de projet : les 27 écrans ; le vocabulaire neutre des données tierces (« opinions favorables, neutres, défavorables » au lieu des termes d'achat et de vente des analystes) ; l'affichage « Achat » et « Vente » comme types d'opérations déjà passées dans le formulaire d'ajout, sous la mention « LiVi n'exécute aucun ordre ».

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Validation du lot 1 | `documentaliste` | Statuts `validee`, étiquettes, version Figma nommée |
| Composants Onglet, Statistique, Légende | `design-system` | Liés aux variables, hauteur automatique |
| MQ-040 à MQ-066 (page 03) | `design-system` | Aucun bloc « à concevoir », aucun chevauchement, onglet actif visible, chiffres cohérents avec le lot 1 |
| Neutralité des fiches | `conformite` | Aucun bouton d'achat ou de vente, données tierces sourcées, datées, désactivables |
| Revue trois thèmes | `qa-tests` | Captures Sombre, Clair, Pastel |
| Dépôt | `documentaliste` | Statuts, docs, CHANGELOG, journal, état du projet, tests et docs verts |

## Fichiers archivés avant modification

- `old/versions/2026-11-15_0458/docs/design/maquettes.json`

## Résultat

Livré le 15 novembre 2026 sur la branche `docs/maquettes-lot-2`.

- Lot 1 : 39 statuts `validee`, étiquettes « Validée », version Figma « Lot 1 validé » enregistrée depuis le menu Fichier (l'API des plugins ne le permet pas).
- Lot 2 : 27 cadres dessinés sur la page 03, dont MQ-061 en paysage ; composants Onglet, Statistique et Légende ajoutés.
- Données fictives cohérentes avec le lot 1 : patrimoine net 184 320,57 €, actifs 384 108,13 €, dettes 199 787,56 € (crédits calculés à partir de leurs conditions), PEA de 38 920,15 € détaillé ligne par ligne, assurance vie de 61 204,88 € répartie en quatre supports.
- Simulateur de seuil (IA-07) calculé avec `prixDeRevente` de `packages/core` et le taux de prélèvements sociaux de 2026 (18,6 %) ; commentaire de la fonction mis à jour.
- Vérifications : contrôle automatique des 27 cadres, captures des trois thèmes, 57 tests verts, docs cohérentes.
- Écart : le lot 1 montre, dans « Comptes et fraîcheur » (MQ-030), les totaux des seules sections Banques et Placements ; les biens et dettes du lot 2 s'ajoutent hors de ces sections, sans contradiction avec les chiffres affichés.

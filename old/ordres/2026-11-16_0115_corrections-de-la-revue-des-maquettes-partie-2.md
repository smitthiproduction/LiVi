# Ordre : Corrections de la revue des maquettes, partie 2

- Reçu le : 2026-11-16T00:15:45.837Z
- Statut : livré le 19 novembre 2026 (interrompu du 16 au 19 par le quota Figma)

## Texte de l'ordre

Message du porteur de projet (16 novembre 2026, 01:12) : « La question 5 : les 3 offres. Continue : ce qui reste — 5 écrans sans aucun lien qui y mène (MQ-055, MQ-057, MQ-062 à MQ-064), il faut ajouter un accès depuis les fiches et le graphique plein écran ; les autres majeurs et mineurs du rapport, en particulier le contraste du gris le plus clair, trop faible, les espacements et arrondis saisis à la main au lieu des valeurs du design system, les zones tactiles de 44 points, la cohérence avec le web ; 66 écrans à valider quand vous aurez joué le prototype. Puis fais partie 2. »

## Interprétation

- Ce qui sera fait : trois offres à égalité ; entrées des 5 écrans inaccessibles ; contraste de `ink-tertiary` ; espacements et rayons liés aux variables ; zones de 44 pt ; autres majeurs et mineurs du rapport ; cohérence de l'inventaire web, tablette et back-office.
- Ce qui ne sera pas fait : conception des écrans web, tablette et back-office (inscrits « à faire ») ; écran « Aide ».
- Points à valider avec le porteur de projet : les écrans repris ou ajoutés, en jouant le prototype.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Jetons et accessibilité | `design-system` | `ink-tertiary` à 4,5:1, aucune valeur codée en dur, cibles de 44 pt |
| Maquettes et prototype | `design-system` | 5 écrans reliés, aucun écran sans entrée ni sans sortie, aucun débordement |
| Inventaire et docs | `documentaliste` | Vocabulaire retenu partout, décision 0005, docs cohérentes |

## Fichiers archivés avant modification

- `old/versions/2026-11-16_0115/docs/design/maquettes.json`
- `old/versions/2026-11-16_0115/docs/produit/catalogue.json`
- `old/versions/2026-11-16_0115/packages/design-tokens/src/tokens.json`
- `old/versions/2026-11-16_0115/docs/design/accessibilite.md`

## Résultat

Livré le 19 novembre 2026 sur la branche `docs/corrections-revue-2` : jetons (`ink-tertiary`), inventaire (236 maquettes, MQ-224 à MQ-236), catalogue (REC-09, CPT-05, BO-05, BO-28, PAT-04, FIS-05), accessibilité, navigation, guide Figma, parcours, décision 0005, suivi dans le rapport de revue. Figma : contrôle final sans écart (146 cadres, 527 liens). Écarts : le premier lot de contenu a été annulé par Figma après une erreur de script, puis rejoué ; restent cinq points listés dans le rapport.

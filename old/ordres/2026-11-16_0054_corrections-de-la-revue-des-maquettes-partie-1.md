# Ordre : Corrections de la revue des maquettes, partie 1

- Reçu le : 2026-11-15T23:54:42.216Z
- Statut : partie 1 livrée ; suite des corrections à venir

## Texte de l'ordre

Réponses du porteur de projet aux 7 questions de la revue du 15 novembre (16 novembre 2026, 00:50) :
1. Montant d'un établissement qui a un crédit : chaque crédit inscrit à son détail, et un regroupement pour un montant entier représentant l'onglet entier.
2. Ordre préparé : « non disponible, soumis à l'avis juridique », mais quand même préparer les maquettes, interactions et zones liées afin d'avoir une vue de la fonctionnalité.
3. Modèle de consigne « Vendre … si le cours passe sous … € » : le garder.
4. Doublons à l'import : un par un, avec une option pour gérer tous les doublons ou seulement ceux sélectionnés.
5. Offres, trois boutons de même poids ou une offre mise en avant : je n'ai pas compris.
6. Budget proposé en Essentiel : jusqu'à aucune limite selon l'abonnement.
7. Établissement non listé : import de fichier et saisie à la main, les deux.
Suite : corriger les constats de la revue, en commençant par les bloquants.

## Interprétation

- Ce qui sera fait : appliquer les 7 réponses ; corriger les 12 bloquants et le plus possible de majeurs et mineurs dans Figma ; prototype ; catalogue, inventaire et docs.
- Ce qui ne sera pas fait dans cette partie : contraste de `texte/ink-tertiary` (jetons), valeurs codées en dur, autres formats, web et back-office.
- Points à valider avec le porteur de projet : poids visuel des offres (question 5 reformulée) ; les écrans ajoutés et repris.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Spécification | `documentaliste` | Catalogue, inventaire, décision 0004 |
| Maquettes et prototype | `design-system` | Bloquants corrigés, aucun débordement, aucun écran sans sortie |
| Conformité | `conformite` | Réserve juridique sur l'ordre préparé, contribution absente des offres payantes |

## Fichiers archivés avant modification

- `old/versions/2026-11-16_0054/docs/design/maquettes.json`
- `old/versions/2026-11-16_0054/docs/produit/catalogue.json`

## Résultat

Partie 1 livrée le 16 novembre 2026 sur la branche `docs/corrections-revue` : 12 bloquants et 20 autres constats corrigés ; MQ-215 à MQ-223 ajoutés ; 28 écrans repris ; 507 liens, 12 points de départ ; planches des trois thèmes ; catalogue (CPT-04, CPT-11, IA-04, BO-05), inventaire (223 maquettes), navigation, guide Figma, parcours, décision 0004. Écart : 5 écrans encore sans entrée, faute de point d'accès dans leur écran parent.

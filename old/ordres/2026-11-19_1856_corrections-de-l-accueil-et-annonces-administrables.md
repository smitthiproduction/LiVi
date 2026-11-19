# Ordre : Corrections de l'accueil et annonces administrables

- Reçu le : 2026-11-19T17:56:04.571Z
- Statut : livré le 19 novembre 2026

## Texte de l'ordre

Message du porteur de projet (19 novembre 2026, 18:53), en réponse aux deux décisions de l'audit de la page d'accueil : « Pour le mode discret : 2 touchers. Le back-office pourra-t-il afficher quelque chose sur l'accueil ? Oui. Il pourra afficher des pop-up sous forme de fiche consultable avec texte, images et vidéo pour les annonces, mises à jour, événements, etc. Il faut donc pour l'administrateur, au niveau du tableau de bord, un éditeur promotionnel pour les pop-up, bannières, mails au format MJML ou HTML possible, avec aperçu. »

## Interprétation

- Ce qui sera fait : double toucher pour le mode discret ; annonces administrables (bannière, fiche consultable avec texte, images, vidéo) ; éditeur promotionnel au back-office (fiches, bannières, e-mails MJML ou HTML, aperçu) dans le catalogue et l'inventaire ; corrections de l'audit de l'accueil dans Figma.
- Ce qui ne sera pas fait : dessin détaillé de l'éditeur (lot back-office) ; accueil hors iPhone (lot 7).
- Points à valider avec le porteur de projet : ordre de priorité des bandeaux (maintenance, incident, alerte de compte, annonce) ; présence de la cloche au MVP ; les écrans repris ou ajoutés.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Spécification | `documentaliste`, `conformite` | USR-12, BO-29, SEC-07, consentement, décision 0006 |
| Maquettes | `design-system` | Écarts de l'audit corrigés, aucun écran sans entrée ni sortie, aucun débordement |

## Fichiers archivés avant modification

- `old/versions/2026-11-19_1856/docs/design/maquettes.json`
- `old/versions/2026-11-19_1856/docs/produit/catalogue.json`
- `old/versions/2026-11-19_1856/docs/produit/navigation.md`

## Résultat

Livré le 19 novembre 2026 sur la branche `docs/accueil-annonces` : catalogue (176 fonctionnalités), inventaire (244 maquettes), navigation, consentement, back-office, guide Figma, parcours, rapport d'audit complété, décision 0006 ; Figma : MQ-237 à MQ-239 et MQ-244 dessinés, MQ-240 à MQ-243 posés, contrôle sans écart. Écart : la priorité des bandeaux est un choix par défaut, à confirmer.

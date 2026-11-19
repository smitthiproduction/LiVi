# 0007 — Centre de notifications au MVP et accueil sur tous les formats

- Date : 2026-11-19
- Statut : acceptée (le rail de la classe moyenne est un choix par défaut, à confirmer à la validation du lot 7)

## Contexte
L'audit de la page d'accueil (`docs/audit-figma/2026-11-19-accueil.md`) laissait trois points ouverts : la cloche visible dès le MVP alors que le centre de notifications (USR-09) était prévu en V1.5 (M-08), les variantes du montant héros (M-06) et l'accueil hors iPhone (A-08, lot 7).

## Décision
- **Centre de notifications au MVP** (choix du porteur) : la cloche est là dès la première version et les annonces de LiVi s'y retrouvent. Au MVP, il contient les événements de l'app (consignes, imports, synchronisations, sécurité) ; les annonces arrivent avec USR-12, les alertes avec GES-02 et GES-03, les notifications poussées avec SEC-09 (toutes en V1.5).
- **Pastille de non-lues** sur la cloche : chiffre toujours affiché, masquée à zéro, « 99+ » au-delà, annoncée au lecteur d'écran.
- **Annonce depuis les notifications** : la ligne « Annonce de LiVi » rouvre la même fiche consultable que la bannière de l'accueil (MQ-245).
- **Navigation en classe moyenne** (choix par défaut) : un rail de 72 pt reprend les cinq entrées de la barre d'onglets, comme la navigation web de 72 px entre 600 et 1023 px. La barre latérale de 248 pt reste pour l'étendue et au-delà. Code : `disposition().navigation` vaut `rail` et `largeurNavigation` 72 en classe moyenne.
- **Montant héros** : cinq variantes (Standard, Baisse, Étroit, 7 chiffres, Texte agrandi), jamais tronqué.

## Conséquences
Catalogue (USR-09 au MVP ; USR-12 et BO-29 notés « V1.5 (oct. 2027) », libellé de priorité reconnu par le générateur), `navigation.md`, `responsive-et-formats.md`, `apps/mobile/src/theme/formats.ts` et `BarreLaterale`, maquettes MQ-125 à MQ-149 de l'accueil, MQ-245 à MQ-247 ajoutées (247 maquettes).

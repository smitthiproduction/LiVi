# Documentation LiVi

Point d'entrée de toute la documentation. Commencer par [suivi/etat-du-projet.md](suivi/etat-du-projet.md).

| Dossier | Contenu | Responsable (agent) |
|---|---|---|
| [produit/](produit/README.md) | Catalogue des 169 fonctionnalités, classes et sous-classes d'actifs, navigation, pages par module | `chef-de-projet` |
| [design/](design/direction-artistique.md) | Direction artistique, thèmes, formats d'écran (iPhone, Samsung, pliables, tablettes, web), accessibilité | `design-system` |
| [architecture/](architecture/vue-ensemble.md) | Vue d'ensemble, authentification, données et chiffrement, observabilité, drapeaux, maintenance et tests | `backend-api` |
| [securite/](securite/politique.md) | Politique, modèle de menaces, liste de contrôle, réponse aux incidents | `securite` |
| [reglementation/](reglementation/README.md) | Conseil, ordres courtiers, RGPD et consentement, données tierces et licences, MiCA, affiliation | `conformite` |
| [qualite/](qualite/strategie-tests.md) | Stratégie de tests, définition de « terminé », matrice d'appareils, bouton de test | `qa-tests` |
| [exploitation/](exploitation/back-office.md) | Back-office, procédures (maintenance), post-mortems | `back-office` |
| [business/](business/README.md) | Business plan, présentation, prévisionnel | `chef-de-projet` |
| [suivi/](suivi/etat-du-projet.md) | État du projet, journal, décisions, feuille de route | `documentaliste` |

## Pages par module

Les modules 11 à 16 ont une page dédiée dans [produit/fonctionnalites/](produit/fonctionnalites/). Les modules 1 à 10 (version 1) sont décrits dans le [catalogue](produit/catalogue.md) et dans le business plan ; le module 17 (compte et connexion) dans [architecture/authentification.md](architecture/authentification.md) ; le module 18 (formats et accessibilité) dans [design/responsive-et-formats.md](design/responsive-et-formats.md) et [design/accessibilite.md](design/accessibilite.md).

## Fichiers générés (ne pas modifier à la main)

`produit/catalogue.md` et `produit/classes-actifs.md` : `pnpm docs:generate`. La commande `pnpm docs:check` échoue s'ils ne sont plus à jour.

## Mettre à jour la documentation

Chaque changement de code met à jour la doc du domaine, `CHANGELOG.md`, [suivi/journal.md](suivi/journal.md) et [suivi/etat-du-projet.md](suivi/etat-du-projet.md) (skill `livi-mise-a-jour-docs`). Les anciens ordres et les versions remplacées sont dans [`old/`](../old/README.md).

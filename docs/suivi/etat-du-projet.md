# État du projet

_Mis à jour le 6 novembre 2026. À relire avant toute tâche, à mettre à jour après chaque livraison._

## En une phrase
Le dépôt est amorcé : arborescence complète, règles pour les agents, socles testés (calculs, classification des actifs, marchés mondiaux, drapeaux et maintenance, audit, messages d'erreur, rôles du back-office, formats d'écran) et squelettes des quatre applications. **Aucune application n'est encore utilisable de bout en bout** : les écrans sont des squelettes branchés sur les socles, sans données réelles ni dépendances installées.

## Ce qui est fait et testé (sans installation, `pnpm verifier`)
| Élément | Où | Tests |
|---|---|---|
| Classification : 14 classes, 85 sous-classes, filtres, onglets de fiche, recherche, collections neutres | `packages/asset-classes` | 10 |
| Marchés : 16 places, 19 indices, statut des séances (pauses déjeuner), projections du globe et de la carte | `packages/market-data` | 5 |
| Calculs : prix de revente, TWR, XIRR, baisse maximale, CSV, catégorisation et propagation, analyse, mise en forme des nombres | `packages/core` | 17 |
| Formats d'écran (classes de taille, pliables, passeport, tablette, bureau) | `apps/mobile/src/theme/formats.ts` | 6 |
| Drapeaux, maintenance, audit chaîné, messages d'erreur, revendications Apple et Google, exécuteur de scénarios (BUD-02) | `apps/api/src/modules` | 9 |
| Rôles et permissions du back-office | `apps/admin/src/lib/roles.ts` | 4 |
| Points de la carte 2D | `apps/web/src/lib/carte.ts` | 3 |
| Cohérence de la documentation (fichiers requis, catalogue, docs générées, liens) | `scripts/verifier-docs.mjs` | — |

Total : 54 tests, tous verts au 6 novembre 2026.

## Ce qui est en squelette (à compléter)
- **iPhone** (`apps/mobile`) : navigation par onglets et barre latérale, écrans Accueil, Patrimoine, LiVi IA, Activité, Marchés (globe 3D et carte 2D), fiche actif, recherche, connexion Apple, Google et e-mail, écran de test. À faire : installer les dépendances (`npx expo install --fix`), brancher la base locale, les données de démonstration, les vrais composants du design system, puis tests sur appareils.
- **Web** (`apps/web`) : pages principales, globe 3D, carte 2D, palette de recherche. À faire : données, graphiques, espace de travail.
- **Back-office** (`apps/admin`) : 20 sections, dont maintenance détaillée. À faire : branchement API, authentification 2FA.
- **API** (`apps/api`) : serveur Fastify, routes d'authentification et de santé, schéma Prisma. À faire : migrations, modules utilisateurs, offres, synchro, IA, marchés.

## Bloquants et points à valider
| Sujet | Statut | Qui |
|---|---|---|
| Accès en écriture au dépôt GitHub | Refusé à l'amorçage : installer l'application GitHub Claude sur l'organisation ou reconnecter GitHub | Porteur de projet |
| Avis juridique sur les ordres courtiers | À obtenir avant toute transmission d'ordre | Porteur + avocat |
| Avis RGPD sur le consentement à la contribution anonyme | À obtenir avant le lancement | Porteur + avocat |
| Licences de données de marché (temps réel, différé, consensus) | À négocier | Porteur |
| Compte développeur Apple, identifiants Apple et Google, clé Anthropic | À créer, à stocker hors dépôt | Porteur |
| Périmètre du MVP | 66 fonctions au catalogue contre 41 prévues au business plan : arbitrage à faire | Porteur + `chef-de-projet` |

## Prochaines étapes proposées
1. Débloquer l'accès GitHub, pousser l'amorçage, activer l'intégration continue.
2. Installer les dépendances et faire tourner les quatre applications en local.
3. Décider du périmètre MVP (règle de coupe du business plan).
4. Construire le parcours MVP sur iPhone : connexion → comptes manuels → import CSV → catégorisation → patrimoine net.

Feuille de route : [feuille-de-route.md](feuille-de-route.md). Historique : [journal.md](journal.md). Décisions : [decisions/](decisions/README.md).

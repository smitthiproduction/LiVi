# État du projet

_Mis à jour le 15 novembre 2026. À relire avant toute tâche, à mettre à jour après chaque livraison._

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
| Installation complète, typage, lint et build des quatre applications | Intégration continue GitHub | Vert le 14 novembre 2026 |
| Gabarits Figma conformes à la détection des formats | `apps/mobile/test/formats-maquettes.test.ts` | 3 |
| Inventaire des maquettes (223, toutes les fonctionnalités couvertes, groupes = étapes du parcours) | `docs/design/maquettes.json`, `pnpm docs:check` | — |

Total : 57 tests, tous verts au 14 novembre 2026.

## Maquettes
Fichier Figma « LiVi — Maquettes » : variables des trois thèmes (44 couleurs), styles, 27 composants et 38 icônes, 14 gabarits, 221 cadres `MQ-…`. **Parcours iPhone revu le 15 novembre** : page « Parcours iPhone » en 9 étapes, prototype jouable (341 liens, 8 points de départ), 12 écrans ajoutés et 21 repris ; audit dans `docs/design/parcours-utilisateur.md`. Corrections de la revue (partie 1) le 16 novembre : 9 écrans ajoutés, 507 liens, 12 points de départ. Statuts : 79 validés, 66 à valider, 78 à faire (dont MQ-213 et MQ-214 sans cadre). Voir `docs/design/figma.md` et `docs/design/maquettes.md`.

## Ce qui est en squelette (à compléter)
- **iPhone** (`apps/mobile`) : navigation par onglets et barre latérale, écrans Accueil, Patrimoine, LiVi IA, Activité, Marchés (globe 3D et carte 2D), fiche actif, recherche, connexion Apple, Google et e-mail, écran de test. Les dépendances s'installent et le code se type sans erreur en CI. À faire : aligner les versions Expo (`npx expo install --fix`), brancher la base locale, les données de démonstration, les vrais composants du design system, puis tests sur appareils.
- **Web** (`apps/web`) : pages principales, globe 3D, carte 2D, palette de recherche. À faire : données, graphiques, espace de travail.
- **Back-office** (`apps/admin`) : 20 sections, dont maintenance détaillée. À faire : branchement API, authentification 2FA.
- **API** (`apps/api`) : serveur Fastify, routes d'authentification et de santé, schéma Prisma. À faire : migrations, modules utilisateurs, offres, synchro, IA, marchés.

## Bloquants et points à valider
| Sujet | Statut | Qui |
|---|---|---|
| Visibilité du dépôt GitHub | Dépôt public, alors que la licence est propriétaire et que `docs/business/` contient des chiffres de financement : à passer en privé si ce n'est pas voulu | Porteur de projet |
| Fichier de verrouillage `pnpm-lock.yaml` | Absent : le job d'installation de la CI (vert) reste non bloquant jusqu'à son commit. La CI le génère en artefact « pnpm-lock » | Porteur ou `qa-tests` |
| Avis juridique sur les ordres courtiers | À obtenir avant toute transmission d'ordre | Porteur + avocat |
| Avis RGPD sur le consentement à la contribution anonyme | À obtenir avant le lancement | Porteur + avocat |
| Licences de données de marché (temps réel, différé, consensus) | À négocier | Porteur |
| Compte développeur Apple, identifiants Apple et Google, clé Anthropic | À créer, à stocker hors dépôt | Porteur |
| Périmètre du MVP | 66 fonctions au catalogue contre 41 prévues au business plan : arbitrage à faire | Porteur + `chef-de-projet` |

## Prochaines étapes proposées
1. Trancher le poids visuel des offres, finir les corrections de la revue (majeurs et mineurs restants, dont le contraste de `texte/ink-tertiary` et 5 écrans sans entrée), puis faire jouer le prototype « Parcours iPhone » au porteur et valider les écrans à valider ; lancer l'agent `revue-maquettes` avant chaque nouveau lot ; puis lot 7 : autres formats (page 10), toujours avec la skill `livi-maquette-figma`. Inventaire et statuts : `docs/design/maquettes.md`.
2. Trier les pull requests Dependabot (aligner Expo avec `npx expo install --fix` plutôt que par Dependabot).
3. Installer les dépendances et faire tourner les quatre applications en local.
4. Décider du périmètre MVP (règle de coupe du business plan).
5. Construire le parcours MVP sur iPhone : connexion → comptes manuels → import CSV → catégorisation → patrimoine net.

Feuille de route : [feuille-de-route.md](feuille-de-route.md). Historique : [journal.md](journal.md). Décisions : [decisions/](decisions/README.md).

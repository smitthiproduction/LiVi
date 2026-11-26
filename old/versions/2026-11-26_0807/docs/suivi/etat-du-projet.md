# État du projet

_Mis à jour le 26 novembre 2026. À relire avant toute tâche, à mettre à jour après chaque livraison._

## En une phrase
Le dépôt est amorcé : arborescence complète, règles pour les agents, socles testés (calculs, classification des actifs, marchés mondiaux, sources de cours et meilleur prix, drapeaux et maintenance, audit, messages d'erreur, rôles du back-office, formats d'écran) et squelettes des quatre applications. **Aucune application n'est encore utilisable de bout en bout** : les écrans sont des squelettes branchés sur les socles, sans données réelles ni dépendances installées.

## Ce qui est fait et testé (sans installation, `pnpm verifier`)
| Élément | Où | Tests |
|---|---|---|
| Classification : 14 classes, 85 sous-classes, filtres, onglets de fiche, recherche, collections neutres | `packages/asset-classes` | 10 |
| Marchés : 16 places, 19 indices, statut des séances (pauses déjeuner), projections du globe et de la carte ; 22 lieux d'exécution (MIC ISO 10383), sources de cours et licences, registre des identifiants (ISIN contrôlé), meilleur prix d'achat et de vente, comparatif des lieux, courtiers par lieu et affiliation à égalité | `packages/market-data` | 16 |
| Calculs : prix de revente, TWR, XIRR, baisse maximale, CSV, catégorisation et propagation, analyse, mise en forme des nombres | `packages/core` | 17 |
| Formats d'écran (classes de taille, pliables, passeport, tablette, bureau) | `apps/mobile/src/theme/formats.ts` | 6 |
| Drapeaux, maintenance, audit chaîné, messages d'erreur, revendications Apple et Google, exécuteur de scénarios (BUD-02) | `apps/api/src/modules` | 9 |
| Rôles et permissions du back-office (dont `referentiel.modifier` et `affiliation.activer`) | `apps/admin/src/lib/roles.ts` | 5 |
| Points de la carte 2D | `apps/web/src/lib/carte.ts` | 3 |
| Cohérence de la documentation (fichiers requis, catalogue, docs générées, liens) | `scripts/verifier-docs.mjs` | — |
| Installation complète, typage, lint et build des quatre applications | Intégration continue GitHub | Vert le 14 novembre 2026 |
| Gabarits Figma conformes à la détection des formats | `apps/mobile/test/formats-maquettes.test.ts` | 3 |
| Inventaire des maquettes (263, toutes les fonctionnalités couvertes, groupes = étapes du parcours) | `docs/design/maquettes.json`, `pnpm docs:check` | — |

Total : 69 tests (43 pour les paquets, 26 pour les applications), tous verts au 26 novembre 2026.

## Maquettes
Fichier Figma « LiVi — Maquettes » : variables des trois thèmes (44 couleurs), styles, 29 composants et 38 icônes, 14 gabarits, 261 cadres `MQ-…`. **Parcours iPhone revu le 15 novembre** : page « Parcours iPhone » en 9 étapes, prototype jouable (341 liens, 8 points de départ), 12 écrans ajoutés et 21 repris ; audit dans `docs/design/parcours-utilisateur.md`. Corrections de la revue : partie 1 le 16 novembre (9 écrans ajoutés), partie 2 le 19 novembre (MQ-236, contraste, valeurs liées aux variables, zones de 44 pt, 527 liens, 12 points de départ, 12 cadres web, tablette et back-office à concevoir). Accueil corrigé et annonces le 19 novembre (audit `docs/audit-figma/`, décision 0006), puis accueil sur tous les formats (lot 7 : 7 formats compacts, iPad portrait et paysage, Fold déplié, web), variantes du montant héros, pastille de non-lues et centre de notifications au MVP (décision 0007). Le 20 novembre, derniers points de la revue corrigés (Aide, fiches d'Horizon Vie et d'Atlas Bourse, import sans préréglage, étape 3 sur 3, opérations du 12 et du 13 novembre), rail de navigation en composant ; contrôle : 157 cadres, 644 liens, 14 points de départ, aucun écart. Le 26 novembre, sources de cours et meilleur prix (décision 0008) : carte du meilleur prix sous le cours de la fiche action (MQ-048), lieux de cotation et courtiers (MQ-254), réglage « Source des cours » (MQ-255, entrée dans MQ-011), référentiel du back-office à concevoir (MQ-256). Le même jour, restes des audits du 20 novembre : pastille à largeur variable, entrées du rail (56 pt) et de la barre latérale web (44 pt), avatar « CM », liens Conditions d'utilisation, Confidentialité et Restaurer mes achats sur l'écran des offres, titres sur deux lignes en format étroit, fin de l'import de Caisse du Port (MQ-257 à MQ-259), Lieux et courtiers et Source des cours sur iPad et sur le web (MQ-260 à MQ-263), référentiel du back-office dessiné (MQ-256). Statuts : 57 validés, 121 à valider, 85 à faire (dont MQ-213 et MQ-214 sans cadre). Voir `docs/design/figma.md` et `docs/design/maquettes.md`.

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
| Licences de données de marché (temps réel, différé, consensus) | À négocier ; aucun contrat signé. EuroCTP proposé pour le meilleur prix (bande consolidée européenne) ; Google Finance et Yahoo Finance « sous réserve » (aucune licence d'affichage publique), visibles mais désactivés. Décision 0008 | Porteur |
| Liens d'affiliation vers les courtiers (décision 0008) | Désactivés (drapeau `affiliation-courtiers`) : avis juridique et statut ORIAS à obtenir ; liens simples en attendant | Porteur + `conformite` |
| Priorités FIC-12, FIC-13, FIC-14 et BO-30 | Proposées en V1.5 (oct. 2027), registre BO-07 au MVP : à confirmer | Porteur |
| Compte développeur Apple, identifiants Apple et Google, clé Anthropic | À créer, à stocker hors dépôt | Porteur |
| Écran des offres (MQ-201) | Rapport du 20 nov. : il présente la connexion automatique et LiVi IA, absentes du MVP de juillet 2027, et n'a pas les liens Conditions, Confidentialité et Restaurer mes achats exigés par l'App Store | Porteur, puis `conformite` |
| Test UX par personas du 26 nov. (`rapports-ux/_synthese.md`) | Aucun des cinq personas n'achète : parcours d'offre absent du web, aucune confirmation d'achat ni état « offre active », Plus activé en un toucher depuis MQ-203, options Famille et Société non achetables, résiliation jamais montrée, versement « programmé » présenté comme automatique | Porteur, puis `design-system` |
| Écarts relevés par la chronique du 26 nov. (`docs/chronique/REPORT.md`, chapitre 7) | Business plan, feuille de route et catalogue divergent (nombre de fonctions, calendrier de la bêta, offres au lancement) ; Bourse French Tech à revoir ; Finary propose déjà une IA | Porteur |
| Périmètre du MVP | 72 fonctions au catalogue contre 41 prévues au business plan : arbitrage à faire | Porteur + `chef-de-projet` |

## Prochaines étapes proposées
1. Concevoir le parcours d'achat complet (récapitulatif, feuille de l'App Store, confirmation, état « offre active » dans Offres et abonnement, résiliation, options Famille et Société) sur iPhone et web, d'après le test UX du 26 novembre, puis relancer les rapports 04 et 05 avec les objectifs proposés par l'auditeur. Faire jouer le prototype « Parcours iPhone » au porteur et valider les 121 écrans à valider (dont l'accueil sur tous les formats et le rail de la classe moyenne, décision 0007) ; traiter les rapports du 20 novembre (`docs/audit-figma/`, `docs/qualite/revues/`) ; poursuivre le lot 7 (autres écrans de la page 10 : fiches, budget, marchés, LiVi IA) ; lancer l'agent `revue-maquettes` avant chaque nouveau lot, toujours avec la skill `livi-maquette-figma`. Inventaire et statuts : `docs/design/maquettes.md`.
2. Trier les pull requests Dependabot (aligner Expo avec `npx expo install --fix` plutôt que par Dependabot).
3. Installer les dépendances et faire tourner les quatre applications en local.
4. Décider du périmètre MVP (règle de coupe du business plan).
5. Construire le parcours MVP sur iPhone : connexion → comptes manuels → import CSV → catégorisation → patrimoine net.

Feuille de route : [feuille-de-route.md](feuille-de-route.md). Historique : [journal.md](journal.md). Décisions : [decisions/](decisions/README.md).

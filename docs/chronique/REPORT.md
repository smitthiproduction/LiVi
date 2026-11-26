# LiVi — Rapport de contexte et chronique du projet

_Créé : 2026-11-26 07:10 (Europe/Paris), par l'agent « Project Context & Chronicle Agent ». Ce fichier ne s'écrase pas : chaque mise à jour s'ajoute au chapitre 9 avec sa date et son heure._

## 1. Objet et méthode

### 1.1 Objet
Ce rapport fait l'inventaire vérifié des éléments du projet LiVi : origine, date, rôle et liens de chacun. Il retrace les décisions prises et relève les écarts avec le marché réel.

### 1.2 Périmètre inspecté le 26 novembre 2026
| Élément | Inspecté | Moyen |
|---|---|---|
| Dépôt `/home/claude/livi`, branche `docs/restes-chronique-tests-ux` (issue de `main` @ 8365dca) | Oui | lecture, `git log` |
| Mémoire du porteur (`/projects/…/areas/livi.md`, mise à jour le 2026-11-15) | Oui, lecture seule | outil mémoire |
| Business plan (Claude Doc) | Oui, lu en entier | outil Docs |
| Présentation, design system, maquettes HTML, cadrage (artefacts claude.ai) | Existence et titres seulement | outil artefacts |
| Documents et PDF du projet claude.ai « PORTAIL D'INVESTISSEMENT » | **Non** : l'outil Projects manquait dans la session de cet agent. L'agent principal les vérifiera. | — |
| Fichier Figma | **Non** (consigne) : état non vérifié directement le 26 nov. | — |
| Sources externes | Oui, en partie | recherche web |

### 1.3 Règles suivies
- Aucune source inventée.
- Une date inconnue s'écrit « inconnue ».
- Aucune modification hors de `docs/chronique/`.
- Aucune commande git qui change l'état du dépôt.

## 2. Inventaire des éléments

### 2.1 Dépôt : documents de pilotage
| Élément | Origine | Date | Utilité | Liens |
|---|---|---|---|---|
| `CLAUDE.md` | amorçage (aa5a094) | 2026-11-06 | règles des agents | toutes les skills |
| `docs/suivi/etat-du-projet.md` (55 lignes) | agents | mis à jour le 2026-11-26 | état, bloquants (lignes 35 à 46) | journal, feuille de route |
| `docs/suivi/journal.md` (128 lignes) | agents | 2025-10-25 au 2026-11-26 | historique par livraison | `old/ordres/` |
| `docs/suivi/feuille-de-route.md` (15 lignes) | amorçage | 2026-11-06 | jalons | business plan |
| `docs/suivi/decisions/0001` à `0008` | agents, choix du porteur | 2026-11-06 au 2026-11-26 | décisions structurantes | chapitre 4 |
| `CHANGELOG.md` (70 lignes) | agents | 2026-11-06 au 2026-11-26 | changements | PR n° 16 à 35 |

### 2.2 Dépôt : sources de vérité
| Élément | État au 26 nov. | Renvoi |
|---|---|---|
| `docs/produit/catalogue.json` | 181 fonctions : MVP 72, V1.5 54, V2 47, V3 8 | `docs/chronique/produit/2026-11-06-catalogue-et-perimetre.md` |
| `docs/design/maquettes.json` | 256 maquettes : 57 validées, 113 à valider, 86 à faire | `docs/chronique/design/2026-11-15-maquettes-lots-et-revues.md` |
| `docs/design/figma.md` (114 lignes) | guide Figma ; lots à la ligne 88 | idem |
| `packages/asset-classes` | 14 classes, 85 sous-classes, 10 tests | `etat-du-projet.md`, ligne 9 |
| `packages/market-data` | 16 places, 19 indices, 22 lieux, 16 tests | décision 0008 |
| `packages/core` | calculs, 17 tests | `etat-du-projet.md`, ligne 11 |
| `packages/design-tokens` | jetons des 3 thèmes | décision 0005 |

### 2.3 Dépôt : réglementation, business, revues
| Élément | Contenu | Renvoi |
|---|---|---|
| `docs/reglementation/README.md` | tableau des règles (conseil, ordres, DSP2, MiCA, affiliation) | lignes 7 à 18 |
| `docs/reglementation/ordres-courtiers.md` | ordres désactivés, avis juridique « à verser » | section « Avis juridique » |
| `docs/reglementation/donnees-tierces-et-licences.md` | sources de cours, EuroCTP | lignes 12 à 22 |
| `docs/reglementation/donnees-et-consentement.md` | statistiques anonymes, « consentir ou payer » | section « Statistiques anonymes » |
| `docs/business/README.md` | liens vers les artefacts, chiffres clés, écart | lignes 5 à 15 |
| `docs/audit-figma/` | audits du 19 et du 20 nov. | `README.md` |
| `docs/qualite/revues/` | revue du 15 nov. (60 constats) ; simulation à 5 personas du 20 nov. (65 annotations) | ligne 12 du second |

### 2.4 Archive `old/`
- `old/ordres/` contient 23 ordres datés, du 2025-10-25 au 2026-11-26 07:04. `old/versions/` contient 17 dossiers de versions.
- Les quatre premiers ordres (2025-10-25, puis trois du 2026-11-06) sont des résumés rédigés à l'amorçage. Leur texte intégral est dans le projet claude.ai (non vérifié).
- L'ordre en cours est `old/ordres/2026-11-26_0704_restes-des-audits-chronique-du-projet-et-test-ux-par-persona.md`. Ses sections Interprétation, Plan et Résultat sont vides.
- Copie de travail : `old/README.md` est modifié et non commité. L'archivage y a ajouté la ligne de cet ordre.

### 2.5 Images et fichiers .h2d
Le dépôt ne contient aucune image (png, jpg, svg), aucun PDF et aucun fichier `.h2d`. Les seules images connues sont les PDF du projet claude.ai (`IMG_0453 combiné.pdf`, `IMG_0311 combiné.pdf`, `IMG_0414 combiné.pdf`). Cet agent ne les a pas lus ; l'agent principal les vérifiera.

### 2.6 Artefacts claude.ai
| Lien | Titre relevé | Lu |
|---|---|---|
| https://claude.ai/artifact/PoJZLbAeeq4MyYmkSX3BFo | Projet SaaS patrimoine & agent IA — Document de cadrage | non (titre seulement) |
| https://claude.ai/artifact/SJJenzVcH8RSQdzwopcpfG | LiVi — Business plan | **oui** |
| https://claude.ai/artifact/UdgDkGDggsBiEFtkisP6tK | LiVi — Présentation du business plan | non |
| https://claude.ai/artifact/WXAbZ6Zdqy8tcwMUtw31AX | LiVi (design system) | non |
| https://claude.ai/artifact/2JwSn4myZHNdof24VFEMYx | LiVi — Écrans mobile, web et admin | non |

Les dates de création sont inconnues. Les autres artefacts que citerait `claude/livi-livrables.md` (par exemple le cahier des fonctionnalités) sont non vérifiés, puisque ce document n'a pas été lu.

### 2.7 Projet claude.ai « PORTAIL D'INVESTISSEMENT »
Cet agent n'a pas pu lire `claude/livi-audit-parcours.md`, `claude/livi-livrables.md` ni les quatre PDF : l'outil Projects manquait dans sa session. L'agent principal les vérifiera. Leur contenu est donc non vérifié à la date de ce rapport.

_Complément : 2026-11-26 07:45 (Europe/Paris), par l'agent principal (outil Projects, lecture des métadonnées)._
| Élément | Type | Déposé le | Utilité | Lu |
|---|---|---|---|---|
| `claude/livi-livrables.md` | doc écrit par Claude | 2026-11-06, mis à jour le 26 nov. | suivi des livrables (maquettes, dépôt, business plan, points à valider) | oui, réécrit le 26 nov. après la PR n° 35 |
| `claude/livi-audit-parcours.md` | doc écrit par Claude | 2026-11-15 | audit des 124 premiers écrans (37 incohérences) ; repris dans `docs/design/parcours-utilisateur.md` | titre et rôle seulement |
| `IMG_0453 combiné.pdf`, `IMG_0311 combiné.pdf`, `IMG_0414 combiné.pdf` | PDF de captures, déposés par le porteur | 2026-10-26 | références visuelles du cadrage initial (antérieures au business plan) | non lus en détail ce jour |
| `je veux une liste complete de tout les acteurs des.pdf` | PDF déposé par le porteur | 2026-11-25 | liste des places, MTF et fournisseurs de données ; source de l'ordre du 26 nov. sur les sources de cours (décision 0008) | oui, le 26 nov. pour la décision 0008 |

### 2.8 Mémoire
La mémoire contient un fichier (`areas/livi.md`, mis à jour le 2026-11-15). Il confirme :
- une SASU en Nouvelle-Aquitaine et un fondateur seul ;
- une première version pour testeurs visée en environ 6 mois ;
- un agrégateur non choisi (Powens cité en exemple) ;
- l'idée V2 des fournisseurs d'énergie.

Rien n'y contredit le dépôt.

## 3. Chronologie résumée
| Date | Événement | Détail |
|---|---|---|
| 2025-10-25 | Cadrage « plus complet que Finary » | `old/ordres/2025-10-25_0001_…` |
| 2026-11-06 | Fonctions v1 (84), design v2 inspiré de Revolut, business plan | `docs/chronique/business/2026-11-06-business-plan.md` |
| 2026-11-06 21:58 | Amorçage du dépôt (169 fonctions) | `docs/chronique/code/2026-11-06-socles-ci-et-securite.md` |
| 2026-11-14 | GitHub, CI verte, fichier Figma de 200 cadres | idem, et design |
| 2026-11-15 | Lots 1 à 6, parcours iPhone revu, revue des maquettes | `docs/chronique/design/2026-11-15-maquettes-lots-et-revues.md` |
| 2026-11-16 au 20 | Corrections de la revue, accueil, notifications, audits | idem |
| 2026-11-20 | `zod` 4.6.6 | code |
| 2026-11-26 06:32 | Sources de cours et meilleur prix | `docs/chronique/marches/2026-11-26-sources-de-cours-meilleur-prix.md` |
| 2026-11-26 07:04 | Ordre en cours : restes, chronique, test UX | `old/ordres/2026-11-26_0704_…` |

Aucun événement n'est enregistré du 7 au 13 novembre, ni du 21 au 25 novembre.

## 4. Décisions et chemin pris

### 4.1 Décisions
| N° | Date | Choix | Fichier |
|---|---|---|---|
| 0001 | 2026-11-06 | Monorepo TypeScript, Expo, Next.js, Fastify | `docs/suivi/decisions/0001-stack-technique.md` |
| 0002 | 2026-11-06 | Neutralité vérifiée par des tests | `0002-neutralite-par-le-code.md` |
| 0003 | 2026-11-15 | Parcours par établissement, onglet Budget | `0003-parcours-par-etablissement.md` |
| 0004 | 2026-11-16 | Réponses aux 7 questions de la revue | `0004-reponses-a-la-revue-des-maquettes.md` |
| 0005 | 2026-11-19 | Contraste, cibles de 44 pt, durées | `0005-contraste-cibles-et-durees.md` |
| 0006 | 2026-11-19 | Annonces, mode discret au double toucher | `0006-annonces-et-mode-discret.md` |
| 0007 | 2026-11-19 | Notifications au MVP, rail de 72 pt | `0007-notifications-au-mvp-et-rail.md` |
| 0008 | 2026-11-26 | Sources de cours, meilleur prix, affiliation à égalité | `0008-sources-de-cours-et-meilleur-prix.md` |

### 4.2 Ajustements notables
- Le périmètre a doublé en un jour (de 84 à 169 fonctions le 6 nov.), puis a continué de croître jusqu'à 181, sans arbitrage du MVP.
- La règle d'affiliation a été assouplie le 26 nov. (décision 0008, point 4). L'exception est encadrée et reste désactivée.
- Les trois dernières semaines ont porté presque uniquement sur les maquettes. Le code reste en squelette.

## 5. Stratégie rapprochée du marché

### 5.1 Positionnement
Le business plan (section Concurrence) place LiVi ainsi : « aussi complet que Finary, aussi privé que Wealthfolio, au prix de getquin, et sans produit financier à vendre ». Les prix de Finary qu'il cite (Lite 54,99 €, Plus 149,99 €, Pro 349,99 € par an) étaient encore justes au 1er novembre 2026.

### 5.2 Ce qui a bougé dans le marché
- **Finary** : 850 000 utilisateurs et 10 M€ d'ARR selon sa lettre aux actionnaires du 26 février 2026. Son site propose déjà une IA (« Finary AI », connecteur IA). L'avance de LiVi IA se réduit.
- **Trade Republic** : Best Price, Direct Price et le temps réel gratuit de trois places depuis juillet 2026. Le « meilleur prix » devient une attente des utilisateurs. Trade Republic l'offre à ses propres clients ; LiVi, lui, devra payer ses données.
- **EuroCTP** : la bande consolidée est en service depuis mi-septembre 2026, gratuite pour les particuliers. C'est une piste moins chère que prévu, à condition d'obtenir un tarif de rediffusion.
- **MiCA** : le régime PSAN a pris fin le 1er juillet 2026. La liste blanche doit suivre le registre des prestataires agréés MiCA.
- **DSP2** : DSP3 et le règlement PSR sont en cours d'adoption, avec des effets probables fin 2027. Cela tombe au moment où LiVi lancera la synchronisation bancaire.

### 5.3 Propositions à valider par le porteur
1. Recentrer le MVP de juillet 2027 sur ce que vend l'offre Plus, ou revoir ce que Plus promet au lancement.
2. Ajouter au business plan une ligne « données de marché » et une ligne « agrégateur », chiffrées sur devis.
3. Mettre à jour le business plan (catalogue, Bourse French Tech, calendrier) avant de déposer les dossiers de financement.

Détail des sources : `docs/chronique/sources/2026-11-26-verification-sources-externes.md`.

## 6. Sources externes : état au 26 novembre 2026
| Source | Où dans le dépôt | État |
|---|---|---|
| Prix de Finary | business plan | à jour (source secondaire du 1er nov.) |
| Audience de Finary | business plan | à jour |
| Trade Republic Best Price | décision 0008, journal ligne 8 | à jour |
| EuroCTP | licences ligne 14, journal ligne 8 | à jour ; tarif pour LiVi à obtenir |
| Google et Yahoo Finance sans licence | décision 0008 | non revérifié par cet agent |
| MiCA, 1er juillet 2026 | réglementation ligne 12 | à jour |
| Position de l'AMF sur le conseil | réglementation ligne 7 | en vigueur (version du 13 février 2024) ; critères à relire |
| Affiliation, ORIAS | décision 0008 | recherche approfondie nécessaire |
| DSP2, article 67 | consentement, réglementation ligne 9 | à revoir (DSP3 et PSR) |
| PFU 31,4 % | `CHANGELOG.md` ligne 50 | à jour |
| Bourse French Tech 20 000 € | business, ligne 12 | à revoir : plafond de 30 000 € et conditions |
| Prêt d'honneur | business plan | recherche approfondie nécessaire |
| Prix de Powens et des agrégateurs | mémoire, business plan | recherche approfondie nécessaire (aucun prix public) |
| getquin, Hootz, Wealthfolio | business plan | recherche approfondie nécessaire |

## 7. Écarts et contradictions

### 7.1 Les plus importants
- **E-01 — Business plan contre catalogue.** Le business plan annonce 84 fonctions, dont 41 au MVP. Le catalogue en compte 181, dont 72 au MVP. `docs/business/README.md` (ligne 14) parle encore de 169 et 66. `docs/suivi/feuille-de-route.md` (ligne 15) donne « MVP 66, V1.5 49, V2 46, V3 8 » (total 169), contre 72, 54, 47 et 8 en réalité. Seul `etat-du-projet.md` (ligne 46) est juste (72 contre 41).
- **E-02 — Feuille de route contre catalogue.** La feuille de route place la synchronisation bancaire en bêta ouverte (mai–juin 2027, ligne 9) et les offres Plus et Signature au lancement (ligne 10). Le catalogue met CPT-06, CPT-07 et IA-01 en V1.5 (octobre 2027). Le business plan annonce « Essentiel et Plus » au lancement.
- **E-03 — Calendrier : business plan contre feuille de route.** Le business plan prévoit le MVP de janvier à juin 2027, avec une bêta privée en mai. La feuille de route prévoit une bêta fermée du MVP iPhone de février à avril, puis une bêta ouverte en mai–juin. La mémoire du porteur parle d'une version pour testeurs vers mai 2027, ce qui est plus proche du business plan.
- **E-04 — Offre Plus sans sa fonction phare au MVP.** L'écran des offres (MQ-201) vend la connexion automatique et LiVi IA, qui n'existeront pas en juillet 2027 (`docs/qualite/revues/2026-11-20-simulation-ux-5-personas.md`, ligne 31). Le prix de Plus (40 €/an, « sous Finary Lite ») repose sur une fonction prévue seulement en octobre. Le manque des liens Conditions, Confidentialité et Restaurer mes achats est corrigé depuis (voir 7.3).
- **E-05 — Bourse French Tech.** Le plan compte 20 000 €. Le plafond est de 30 000 €, limité à 70 % des dépenses retenues. L'aide est réservée aux sociétés immatriculées depuis moins d'un an, et le solde n'est versé qu'en fin de programme. Le business plan prévoit la SASU en novembre–décembre 2026 ; rien dans le dépôt n'indique qu'elle est créée ni que les dossiers sont déposés.

### 7.2 Autres écarts
- **E-06 — Nombre d'écrans à valider.** `etat-du-projet.md` donne 113 écrans à valider à la ligne 33, puis 111 à la ligne 49. `maquettes.json` en donne 113. Voir 7.3.
- **E-07 — Chiffres obsolètes dans les consignes.** `.claude/skills/livi-maquette-figma/SKILL.md` (ligne 3) parle de « 200 cadres », alors que l'inventaire en compte 256. `docs/design/direction-artistique.md` (ligne 7) cite 21 écrans : c'est juste pour l'ancien artefact, mais à ne pas confondre avec l'inventaire.
- **E-08 — Meilleur prix sans source.** FIC-12 à FIC-14 supposent au moins deux sources sous licence. Aucun contrat n'est signé, et le business plan n'a pas de budget « données de marché ».
- **E-09 — Risque concurrentiel réalisé.** Le business plan cite comme risque principal « Finary peut baisser ses prix ou ajouter une IA ». Finary propose déjà une IA et un connecteur IA. Le positionnement doit donc reposer sur « exécute vos consignes, sans produit à vendre », pas sur l'IA seule.
- **E-10 — Dépôt public.** Le dépôt est public depuis le 14 novembre, alors que la licence est propriétaire et que `docs/business/` contient des chiffres de financement (`etat-du-projet.md`, ligne 37).
- **E-11 — Lots validés repassés à valider.** 57 maquettes sont validées, au lieu des 114 validées le 15 novembre : les reprises les ont repassées à « à valider ». C'est voulu, mais la mention « lots 1 à 5 validés » du journal ne décrit plus l'état réel.
- **E-12 — Ordre en cours incomplet.** Dans l'ordre du 26 nov. à 07:04, les sections Interprétation, Plan et Résultat sont vides, et le lien Figma est resté « [LIEN FIGMA] ».
- **E-13 — Source Finary périmée sur le web.** Le billet de Finary « Discover our new Subscriptions » donne d'anciens prix (45 € et 120 €). Il ne faut pas le citer.

### 7.3 Corrections depuis la rédaction
_Ajout : 2026-11-26 07:25 (Europe/Paris), d'après l'agent principal. L'historique ci-dessus est conservé._
- **E-04, en partie corrigé.** Les liens Conditions d'utilisation, Confidentialité et Restaurer mes achats ont été ajoutés à MQ-201 le 26 nov. vers 7 h 25. Le fond de l'écart reste ouvert : l'écran vend toujours des fonctions absentes du MVP.
- **E-06, tranché.** Le décompte « 113 écrans à valider » de `etat-du-projet.md` (ligne 33) est le bon. La ligne 49 (« 111 ») sera corrigée.
- Ces deux corrections n'ont pas été vérifiées par cet agent. Celle de MQ-201 est dans Figma, non vérifié directement le 26 nov.

### 7.4 Corrections du 26 novembre, 07:45
_Ajout : 2026-11-26 07:45 (Europe/Paris), par l'agent principal. L'historique ci-dessus est conservé._
- **E-01, corrigé dans les docs** : `docs/business/README.md` et `docs/suivi/feuille-de-route.md` donnent maintenant 181 fonctions, dont 72 au MVP (54 en V1.5, 47 en V2, 8 en V3). Le business plan lui-même (artefact) n'est pas modifié : décision du porteur.
- **E-06, corrigé** : `etat-du-projet.md` donne partout le même décompte, 121 écrans à valider après les ajouts du jour (MQ-256 à MQ-263).
- **E-07, corrigé** : la skill `livi-maquette-figma` et l'agent `design-system` ne citent plus « 200 cadres ».
- **E-02, E-03, E-04 (fond), E-05, E-09, E-10** : restent ouverts, ils demandent un arbitrage du porteur.

### 7.5 Test UX par personas du 26 novembre
_Ajout : 2026-11-26 08:05 (Europe/Paris), par l'agent principal._
- Cinq personas clients ont tenté un achat dans « LiVi — Maquettes » ; aucun n'achète (2 à 5,5 sur 10). Synthèse de l'auditeur : `rapports-ux/_synthese.md`, index : `rapports-ux/_index.md`.
- Écarts nouveaux avec la stratégie : **E-14** — l'offre Plus et l'offre Signature ne disent pas avant l'achat ce qui les limite (comptes en gratuit, crédits de l'IA, versements qui ne sont que des rappels) ; **E-15** — les options Famille et Société du business plan n'ont aucun parcours d'achat ni écran de contenu ; **E-16** — le parcours d'offre n'existe pas sur le web, alors que le lancement de juillet 2027 prévoit l'iPhone et le web.

## 8. Index des fichiers datés
| Dossier | Fichier | Sujet |
|---|---|---|
| sources | `docs/chronique/sources/2026-11-26-verification-sources-externes.md` | vérification des sources, chapitres 1 à 5 |
| business | `docs/chronique/business/2026-11-06-business-plan.md` | business plan et évolutions |
| produit | `docs/chronique/produit/2026-11-06-catalogue-et-perimetre.md` | catalogue, de 84 à 181 fonctions |
| design | `docs/chronique/design/2026-11-15-maquettes-lots-et-revues.md` | maquettes, lots, revues |
| code | `docs/chronique/code/2026-11-06-socles-ci-et-securite.md` | socles, CI, sécurité |
| marches | `docs/chronique/marches/2026-11-26-sources-de-cours-meilleur-prix.md` | décision 0008 et marché |

## 9. Historique des mises à jour
- **2026-11-26 07:10 (Europe/Paris)** : création du rapport et des six fichiers datés.
  - Inventaire du dépôt, de la mémoire et du business plan.
  - Vérification web des sources les plus structurantes ; 13 écarts relevés.
  - Non vérifiés : documents et PDF du projet claude.ai (outil Projects absent de la session de cet agent, vérification confiée à l'agent principal), contenu de quatre artefacts, fichier Figma.
- **2026-11-26 07:25 (Europe/Paris)** : ajout du chapitre 7.3. Liens légaux ajoutés à MQ-201 ; décompte de 113 écrans à valider confirmé (information de l'agent principal).

- **2026-11-26 07:45 (Europe/Paris)** : compléments au chapitre 2.7 (documents du projet claude.ai) et chapitre 7.4 (corrections E-01, E-06, E-07). Test UX par cinq personas lancé sur le fichier Figma (`rapports-ux/`).
- **2026-11-26 08:05 (Europe/Paris)** : chapitre 7.5 (test UX par personas, écarts E-14 à E-16).

## 10. À faire pour la prochaine mise à jour
1. L'agent principal lit `claude/livi-audit-parcours.md`, `claude/livi-livrables.md` et les quatre PDF du projet claude.ai, puis verse ses constats au chapitre 2.7.
2. Lire la présentation et le design system publiés, puis les comparer aux jetons et au business plan.
3. Comparer `maquettes.json` au fichier Figma quand le quota le permettra, y compris la correction de MQ-201.
4. Mener les recherches marquées « recherche approfondie nécessaire » au chapitre 6.
5. Consigner ici chaque décision du porteur sur E-01 à E-05.

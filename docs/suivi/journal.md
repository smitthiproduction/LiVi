# Journal du projet

Une entrée par livraison ou décision, la plus récente en haut. Les ordres complets sont dans [`old/ordres/`](../../old/README.md).

## 2026-11-26 — Restes des audits, chronique du projet et test UX par personas
- Ordre : [old/ordres/2026-11-26_0704_restes-des-audits-chronique-du-projet-et-test-ux-par-persona.md](../../old/ordres/2026-11-26_0704_restes-des-audits-chronique-du-projet-et-test-ux-par-persona.md). « Continue le reste », lancer l'agent « Project Context & Chronicle Agent » et la commande de test UX (le lien Figma était resté « [LIEN FIGMA] »). Réponses du porteur : tester « LiVi — Maquettes » ; corriger d'abord, tester ensuite.
- Agents lus dans la Claude Console : « UX Persona Tester », « UX Report Auditor », « Project Context & Chronicle Agent ». Aucun ne définit de personas : cinq fiches de clients LiVi créées dans `rapports-ux/_personas/`, chacune avec un objectif d'achat (Plus, Signature, Famille, Plus, Société).
- Figma : pastille à largeur variable ; entrées du rail de 56 pt et de la barre latérale web de 44 pt, entrée « Budget » ; avatar « CM » ; liens Conditions d'utilisation, Confidentialité et Restaurer mes achats sur MQ-201, avec une marge basse qui les dégage de l'indicateur d'accueil ; titres sur deux lignes et défilement sur MQ-130 et MQ-132 ; MQ-257 à MQ-259 (fin de l'import de Caisse du Port) ; MQ-260 à MQ-263 (Lieux et courtiers, Source des cours sur iPad et web, entrée active de la barre latérale) ; MQ-256 dessiné (référentiel du back-office, entrée « Référentiel »). Planches Sombre, Clair, Pastel ; page temporaire supprimée ; 14 points de départ conservés. 263 écrans, 121 à valider.
- Chronique : `docs/chronique/REPORT.md` et six fichiers datés. 13 écarts, dont business plan, feuille de route et catalogue divergents, Bourse French Tech à revoir, Finary déjà doté d'une IA. Corrigés dans les docs : nombres de fonctionnalités (E-01), décompte des écrans à valider (E-06), « 200 cadres » (E-07).
- Test UX : cinq instances séparées de « UX Persona Tester » (Figma en lecture seule, 13 à 15 appels chacune), puis « UX Report Auditor ». Aucun persona n'achète (scores de 2 à 5,5 sur 10). Problèmes communs : parcours d'offre absent du web, aucune confirmation d'achat ni état « offre active », informations décisives absentes avant l'achat, résiliation jamais montrée. Bloquants : Plus activé en un toucher depuis MQ-203, options Famille et Société impossibles à acheter, versement « programmé » qui n'est qu'un rappel. Rapports à relancer : 04 et 05 (trop proches de 01 et de 03). Détail : `rapports-ux/_synthese.md`.
- Après la livraison : version Figma « Restes des audits du 20 novembre » enregistrée et branche de la PR n° 36 supprimée, à la demande du porteur (navigateur intégré).

## 2026-11-26 — Sources de cours au choix, meilleur prix et registre des identifiants
- Ordre : [old/ordres/2026-11-26_0610_sources-de-cours-au-choix-meilleur-prix-et-registre-des-iden.md](../../old/ordres/2026-11-26_0610_sources-de-cours-au-choix-meilleur-prix-et-registre-des-iden.md). Choisir la source des cours (Google Finance, Yahoo Finance ou autres), « meilleur prix » par défaut comme Trade Republic, source affichée sous le prix, registre interne des ISIN et codes par source, lieux les plus chers et les moins chers, où acheter et par quel courtier.
- Réponses du porteur : Google et Yahoo visibles mais désactivés tant qu'aucune licence n'est signée ; meilleur prix d'achat et de vente avec référence, patrimoine valorisé au lieu principal ; aucun achat dans LiVi au départ ; lieux et courtiers triés par prix ou par ordre alphabétique, liens d'affiliation égaux pour chaque courtier et sans mise en avant ; périmètre complet.
- Vérifié le 26 novembre : Best Price de Trade Republic depuis le 2 juillet 2026 ; pas d'API officielle ni de licence d'affichage publique pour Yahoo Finance et Google Finance ; EuroCTP (bande consolidée européenne, EBBO) autorisée par l'ESMA le 27 juillet 2026 ; FIRDS et OpenFIGI gratuits ; MIC des lieux contrôlés (gettex MUND, Tradegate XGAT, LS Exchange HAMN, Turquoise Europe TQEX, Cboe NL CEUX, Aquis EU AQEU…).
- Code : `lieux.ts`, `sources.ts`, `registre.ts`, `meilleur-prix.ts`, `courtiers.ts` dans `packages/market-data`, 11 tests ; permissions du back-office et section « Référentiel d'actifs et sources de cours ». 69 tests verts, docs cohérentes.
- Décision 0008 : registre au MVP (BO-07), FIC-12 à FIC-14 et BO-30 en V1.5 ; exception d'affiliation encadrée et désactivée jusqu'à l'avis juridique.
- Figma : MQ-048 (fraîcheur du dernier cours, carte du meilleur prix › MQ-254), MQ-254 (`206:10363`), MQ-255 (`206:9588`, entrée « Source des cours » dans MQ-011), MQ-256 (`206:10910`, à concevoir). Planches Clair et Pastel contrôlées, page temporaire supprimée, 14 points de départ conservés.

## 2026-11-20 — Restes Figma et derniers points de la revue
- Ordre : [old/ordres/2026-11-20_0205_restes-figma-et-points-ouverts-de-la-revue.md](../../old/ordres/2026-11-20_0205_restes-figma-et-points-ouverts-de-la-revue.md). « Reprends et fais ce qui reste », avec le navigateur ouvert sur GitHub, la Claude Console et Figma ; puis lancer les agents « Chrysae UX Simulation Auditor » et « Figma UX & Spec Auditor ».
- GitHub : branche fusionnée de la PR n° 32 supprimée ; alerte Dependabot n° 1 corrigée (PR n° 33).
- Figma : composant « Rail de navigation » (5 variantes, instances dans MQ-246 et MQ-247) ; couverture à 253 écrans ; MQ-248 et MQ-249 (fiches d'Horizon Vie et d'Atlas Bourse) et liens des lignes d'établissement de l'accueil, de ses états, de MQ-030 et de MQ-210 ; MQ-250 (Aide) ; MQ-251 à MQ-253 (import sans préréglage) ; « Étape 3 sur 3 » sur MQ-204 ; opérations du 12 et du 13 novembre sur MQ-089. Contrôle : 157 cadres, 644 liens, 14 points de départ, aucun écran sans entrée ni sortie, aucune cible sous 44 pt, aucune valeur codée en dur, aucun débordement. Planches Sombre, Clair et Pastel.
- Catalogue : USR-13 « Aide » (MVP), 177 fonctionnalités.
- Audits lancés à la fin, avec les définitions lues dans la Claude Console, en lecture seule dans Figma : « Figma UX & Spec Auditor » ([rapport](../audit-figma/2026-11-20-formats-notifications-restes.md) : 0 bloquant, 13 importants, 20 améliorations ; navigation différente selon le format, cibles du rail et de la barre latérale sous 44 pt, troncatures sur le Fold plié, espaces insécables des nombres, fraîcheur signalée par la seule couleur, pastille à largeur fixe, contenu du centre de notifications, fin de l'import de Caisse du Port, destinations des opérations, liens de l'Aide, mise à jour d'Horizon Vie sans Signature, avatar du web) ; « Chrysae UX Simulation Auditor » transposé à LiVi ([rapport](../qualite/revues/2026-11-20-simulation-ux-5-personas.md) : 65 annotations ; bloquants : l'écran des offres vend des fonctions absentes du MVP, et il manque les liens Conditions, Confidentialité et Restaurer mes achats). Le quota quotidien Figma a été atteint après les audits : corrections reportées.

## 2026-11-20 — Correctif de sécurité : zod 4.6.6
- Alerte Dependabot n° 1 (gravité élevée, 8,2) : `zod` antérieur à 4.6.6 dans `apps/api` peut épuiser la mémoire en validant un très grand tableau. Passage à `^4.6.6` ; les schémas de `apps/api/src/modules/auth/routes.ts` (`z.object`, `z.string().email()`, `regex`, `nullable`, `optional`) restent compatibles. Typage vérifié par l'intégration continue.

## 2026-11-19 — Accueil sur tous les formats et centre de notifications au MVP
- Ordre : [old/ordres/2026-11-19_2121_accueil-sur-tous-les-formats-variantes-du-montant-et-centre-.md](../../old/ordres/2026-11-19_2121_accueil-sur-tous-les-formats-variantes-du-montant-et-centre-.md). Restes de l'audit de l'accueil : lot 7, variantes du montant, cloche au MVP (proposition du porteur).
- Catalogue : USR-09 au MVP (pastille de non-lues, annonces) ; USR-12 et BO-29 en « V1.5 (oct. 2027) » ; décision [0007](decisions/0007-notifications-au-mvp-et-rail.md).
- Figma : accueil sur MQ-125, 127, 130, 132, 134, 136, 138, 141, 149 ; MQ-245 (annonce depuis les notifications), MQ-246 (Fold déplié) et MQ-247 (iPad portrait) ajoutés ; `Montant héros` en cinq variantes ; `Pastille de notification` sur les cloches de MQ-024, 027, 028, 029, 237, 238, 239 et du web ; libellés de la barre d'onglets non coupés. Planches dans les trois thèmes. Version « Accueil sur tous les formats ». Le quota quotidien du serveur MCP Figma a été atteint en fin de séance : contrôle visuel des thèmes Clair et Pastel fait dans le navigateur, page de planches supprimée à la main.
- Code : rail de 72 pt en classe moyenne (`apps/mobile/src/theme/formats.ts`, `BarreLaterale`), tests mis à jour.

## 2026-11-19 — Accueil corrigé et annonces administrables
- Ordre : [old/ordres/2026-11-19_1856_corrections-de-l-accueil-et-annonces-administrables.md](../../old/ordres/2026-11-19_1856_corrections-de-l-accueil-et-annonces-administrables.md). Réponses du porteur à l'audit de l'accueil : double toucher pour le mode discret ; annonces du back-office en fiche consultable (texte, images, vidéo) et éditeur promotionnel (pop-up, bannières, e-mails MJML ou HTML, avec aperçu).
- Catalogue : SEC-07 précisé, USR-12 « Annonces sur l'accueil » et BO-29 « Éditeur promotionnel » ajoutés (176 fonctionnalités) ; consentement des e-mails promotionnels dans `donnees-et-consentement.md` ; décision [0006](decisions/0006-annonces-et-mode-discret.md).
- Figma : corrections A-01 à A-07, A-09, M-01 à M-05, M-07, M-09, M-10 ; MQ-237, MQ-238, MQ-239, MQ-244 dessinés ; MQ-240 à MQ-243 à concevoir ; contrôle sans écart (150 cadres, 615 liens, 14 points de départ) ; version « Accueil corrigé et annonces ».

## 2026-11-19 — Audit Figma de la page d'accueil
- Ordre : [old/ordres/2026-11-19_1836_audit-figma-de-la-page-d-accueil.md](../../old/ordres/2026-11-19_1836_audit-figma-de-la-page-d-accueil.md).
- Périmètre : onglet Accueil iPhone (MQ-024 à MQ-029) et destinations de ses liens ; la page « Couverture » écartée (page de garde, pas un écran).
- Rapport : [docs/audit-figma/2026-11-19-accueil.md](../audit-figma/2026-11-19-accueil.md). 58 éléments ; 0 bloquant, 9 importants (fraîcheur de Banque Rivière selon l'état, comptes anciens non signalés sous le total, geste du mode discret, segments de 32 pt, états partiellement reliés, bouton + à deux comportements, aucun bandeau administrable, autres formats à concevoir, pas d'état hors ligne), 10 améliorations. Aucune maquette modifiée.
- Registre des lectures web créé (`docs/audit-figma/knowledge/`). 3 appels Figma.

## 2026-11-19 — Corrections de la revue des maquettes, partie 2
- Ordre : [old/ordres/2026-11-16_0115_corrections-de-la-revue-des-maquettes-partie-2.md](../../old/ordres/2026-11-16_0115_corrections-de-la-revue-des-maquettes-partie-2.md). Commencé le 16 novembre, interrompu par le quota quotidien du serveur MCP Figma (200 appels), repris le 19 novembre.
- Réponse du porteur : les trois offres gardent le même poids visuel.
- Figma : 5 écrans reliés, `ink-tertiary` dans les trois modes, 1 137 espacements et tous les rayons liés, 117 zones de toucher de 44 pt, durées 0,28 s et 0,42 s, contenus corrigés (R-13, R-14, R-15, R-17, R-21, R-24, R-27 à R-30, R-32 à R-34, R-45, R-48, R-53 à R-58), MQ-236 ajouté, 12 cadres « à concevoir » (MQ-224 à MQ-235), version « Corrections de la revue, partie 2 ».
- Contrôle : 146 cadres, 527 liens, 12 points de départ, aucun écran sans entrée ni sans sortie, aucune cible sous 44 pt, aucune valeur codée en dur, aucun débordement.
- Décision [0005](decisions/0005-contraste-cibles-et-durees.md).

## 2026-11-16 — Corrections de la revue des maquettes, partie 1
- Ordre : [old/ordres/2026-11-16_0054_corrections-de-la-revue-des-maquettes-partie-1.md](../../old/ordres/2026-11-16_0054_corrections-de-la-revue-des-maquettes-partie-1.md).
- Réponses du porteur aux 7 questions : décision [0004](decisions/0004-reponses-a-la-revue-des-maquettes.md) ; la question du poids visuel des offres est reformulée.
- Les 12 bloquants corrigés : ordre préparé en aperçu avec la réserve juridique, montant entier des établissements, vue par enveloppe, dates et période d'import, doublons un par un, états vides et parcours payant, contribution non concernée en Signature, entrées et sorties du prototype.
- 9 écrans ajoutés (MQ-215 à MQ-223), 28 repris (repassés à « à valider ») ; 507 liens, 12 points de départ, aucun écran sans sortie ; 5 écrans encore sans entrée (MQ-055, MQ-057, MQ-062 à MQ-064).

## 2026-11-15 — Revue des maquettes par l'agent revue-maquettes
- Ordre : [old/ordres/2026-11-15_2245_lancer-l-agent-revue-maquettes.md](../../old/ordres/2026-11-15_2245_lancer-l-agent-revue-maquettes.md).
- Rapport : `docs/qualite/revues/2026-11-15-revue-maquettes.md`. 136 cadres iPhone, 9 points de départ et 3 parcours métier joués ; 60 constats (12 bloquants, 30 majeurs, 18 mineurs) ; 7 questions pour le porteur de projet.
- Bloquants principaux : ordres préparés sans réserve juridique et chez des établissements reliés en lecture seule ; 54 cadres sans lien entrant et 2 impasses ; montant des établissements avec crédit sans règle unique ; vue par enveloppe absente ; erreurs de date et de période ; offres payantes et accueil vide non jouables.
- Limite : quota du serveur MCP Figma presque épuisé (10 appels par minute, 200 par jour) ; contrastes calculés à la place des captures. Aucune correction faite : elles attendent l'accord du porteur.

## 2026-11-15 — Revue du parcours utilisateur iPhone
- Ordre : [old/ordres/2026-11-15_2118_revue-du-parcours-utilisateur-des-maquettes.md](../../old/ordres/2026-11-15_2118_revue-du-parcours-utilisateur-des-maquettes.md).
- Audit des 124 écrans dessinés : 37 incohérences relevées en 9 familles (organisation du fichier, inscription, accueil, établissements, import, patrimoine, navigation, budget, données), détail dans `docs/design/parcours-utilisateur.md`.
- Décisions du porteur : onglet « Activité » renommé « Budget » ; écrans de back-office (annuaire des établissements, préréglages) dessinés au lot back-office.
- Corrections : page « Parcours iPhone » par étape, 12 écrans ajoutés, 21 repris (repassés à « à valider »), 341 liens de prototype, version Figma « Parcours iPhone revu » ; catalogue (USR-11, CPT-11, CPT-12, BUD-11, BO-28) ; décision [0003](decisions/0003-parcours-par-etablissement.md).
- Agent `revue-maquettes` créé pour refaire cet audit avant chaque lot.

## 2026-11-15 — Lot 5 validé, maquettes du lot 6 à valider
- Ordre : [old/ordres/2026-11-15_0829_validation-du-lot-5-et-maquettes-lot-6-livi-ia.md](../../old/ordres/2026-11-15_0829_validation-du-lot-5-et-maquettes-lot-6-livi-ia.md).
- Lot 5 validé : statuts `validee`, étiquettes Figma « Validée ». La version Figma « Lot 5 validé » reste à enregistrer : le navigateur qui sert à le faire n'était pas joignable depuis la session.
- Lot 6 : 10 écrans de la page 07 (MQ-115 à MQ-124). Chaque consigne part d'une phrase écrite par l'utilisateur ; la consigne structurée, les vérifications et le coût en crédits sont montrés avant la validation par Face ID ; l'ordre préparé n'est transmis qu'après validation, ordre par ordre ; la demande de conseil reçoit des faits tirés des données et un renvoi vers un conseiller enregistré à l'ORIAS.
- L'écran MQ-119 (ordre transmis par API) décrit une fonction qui reste désactivée tant que l'avis juridique n'est pas versé dans `docs/reglementation/ordres-courtiers.md`.

## 2026-11-15 — Lot 4 validé, maquettes du lot 5 à valider
- Ordre : [old/ordres/2026-11-15_0738_validation-du-lot-4-et-maquettes-lot-5-recherche-et-marches.md](../../old/ordres/2026-11-15_0738_validation-du-lot-4-et-maquettes-lot-5-recherche-et-marches.md).
- Lot 4 validé : statuts `validee`, étiquettes Figma « Validée », version Figma « Lot 4 validé ».
- Lot 5 : 17 écrans de la page 06 (MQ-098 à MQ-114). Globe et carte en points, calculés à partir de contours simplifiés des continents ; étiquettes d'indices avec signe et flèche ; places fermées le dimanche, avec le temps avant chaque ouverture ; classements et sélections présentés comme des tris de données.

## 2026-11-15 — Lot 3 validé, maquettes du lot 4 à valider
- Ordre : [old/ordres/2026-11-15_0714_validation-du-lot-3-et-maquettes-lot-4-budget-et-activite.md](../../old/ordres/2026-11-15_0714_validation-du-lot-3-et-maquettes-lot-4-budget-et-activite.md).
- Lot 3 validé : statuts `validee`, étiquettes Figma « Validée », version Figma « Lot 3 validé ».
- Lot 4 : 19 écrans de la page 05 (MQ-079 à MQ-097). Budget de novembre repris du widget du lot 1 (1 240,00 € sur 1 800,00 €), enseignes fictives, propagation sans écraser les catégorisations manuelles, correction d'annuaire envoyée sans montant ni date, alerte présentée comme n'étant pas un ordre.

## 2026-11-15 — Lot 2 validé, maquettes du lot 3 à valider
- Ordre : [old/ordres/2026-11-15_0659_validation-du-lot-2-et-maquettes-lot-3.md](../../old/ordres/2026-11-15_0659_validation-du-lot-2-et-maquettes-lot-3.md).
- Lot 2 validé : statuts `validee`, étiquettes Figma « Validée », version Figma « Lot 2 validé ».
- Lot 3 : 12 écrans de la page 04 (MQ-067 à MQ-078). Placements de 103 245,03 € repris des lots précédents ; concentration et arbitrage calculés avec `@livi/core`. Calculateur d'arbitrage limité à la cible saisie par l'utilisateur, mesures de risque présentées comme passées, plafonds présentés comme information.

## 2026-11-15 — Lot 1 validé, maquettes du lot 2 à valider
- Ordre : [old/ordres/2026-11-15_0458_validation-du-lot-1-et-maquettes-lot-2-patrimoine-et-fiche-a.md](../../old/ordres/2026-11-15_0458_validation-du-lot-1-et-maquettes-lot-2-patrimoine-et-fiche-a.md).
- Lot 1 validé par le porteur (« Je valide ») : statuts `validee`, étiquettes Figma « Validée », version Figma « Lot 1 validé ».
- Lot 2 : 27 écrans de la page 03 (MQ-040 à MQ-066), dont un en paysage. Données fictives reprises du lot 1 et rendues cohérentes (patrimoine net 184 320,57 €, crédits calculés à partir de leurs conditions). Fiche actif sans bouton d'achat ou de vente ; données tierces sourcées, datées et désactivables ; simulateur de seuil présenté comme un calcul, pas une recommandation.
- Composants ajoutés : Onglet, Statistique, Légende. Taux de 2026 corrigés dans le commentaire du calcul de revente.

## 2026-11-15 — Maquettes du lot 1 à valider
- Ordre : [old/ordres/2026-11-15_0421_maquettes-lot-1-entree-compte-accueil-et-comptes.md](../../old/ordres/2026-11-15_0421_maquettes-lot-1-entree-compte-accueil-et-comptes.md).
- 39 écrans iPhone dessinés dans leurs cadres (MQ-001 à MQ-039), données fictives, sources et dates sous chaque montant, aucun bouton d'achat ou de vente. Vérifiés en Sombre, Clair et Pastel.
- Composants ajoutés : 22 icônes, Interrupteur, Case radio, Case à cocher, Champ de saisie, Barre de navigation, Poignée de feuille, Ligne de réglage. Nouveaux jetons `knob` et `scrim`.
- Statuts passés à « à valider » dans `docs/design/maquettes.json`. En attente de la validation du porteur de projet avant le lot 2.

## 2026-11-14 — Figma prêt pour les 200 maquettes
- Ordre : [old/ordres/2026-11-14_2226_preparer-figma-pour-les-200-maquettes.md](../../old/ordres/2026-11-14_2226_preparer-figma-pour-les-200-maquettes.md).
- GitHub : pull request n° 16 fusionnée ; « Dependency graph », alertes Dependabot et signalement privé des vulnérabilités activés dans les réglages du dépôt.
- Figma : fichier « LiVi — Maquettes » (https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq) avec variables des trois thèmes, styles, composants, gabarits de formats et 200 cadres reliés à `docs/design/maquettes.json`. Guide : [figma.md](../design/figma.md).

## 2026-11-14 — Dépôt publié sur GitHub
- Ordre : [old/ordres/2026-11-14_2049_verifier-l-acces-github.md](../../old/ordres/2026-11-14_2049_verifier-l-acces-github.md).
- Accès en écriture vérifié ; commit d'amorçage `aa5a094` poussé sur `main` (https://github.com/smitthiproduction/LiVi).
- Premier passage de l'intégration continue : tests purs et docs verts, analyse de sécurité verte ; échec du job d'installation (cache pnpm sans fichier de verrouillage), corrigé sur la branche `fix/ci-installation` (pull request n° 16), avec les erreurs révélées par l'installation complète (React unique, ESLint, typage). Installation, typage, lint et build des quatre applications verts.
- Dependabot a ouvert 7 pull requests de mises à jour (actions GitHub, Expo, Next.js).

## 2026-11-06 — Amorçage du dépôt LiVi
- Ordre : [old/ordres/2026-11-06_2118_arborescence-projet-livi-et-fonctionnalites-elargies.md](../../old/ordres/2026-11-06_2118_arborescence-projet-livi-et-fonctionnalites-elargies.md).
- Catalogue porté de 84 à 169 fonctionnalités (recherche et découverte, marchés mondiaux, fiche actif et graphiques, analyse, gestion, actualités, compte et connexion, back-office étendu, formats). Ancienne version archivée : `old/versions/2026-11-06/catalogue-v1-84-fonctionnalites.json`.
- Classification des actifs : 14 classes, 85 sous-classes (dont 10 sous-classes d'obligations).
- Monorepo pnpm et turbo : `apps/mobile` (Expo), `apps/web` (Next.js), `apps/admin` (Next.js), `apps/api` (Fastify, Prisma) ; paquets `core`, `asset-classes`, `market-data`, `design-tokens`, `ui-web`.
- Règles pour les agents (`CLAUDE.md`, `AGENTS.md`, 11 agents, 10 skills), documentation complète, dossier `old/` et script d'archivage.
- 54 tests purs verts. Décision : [0001-stack-technique.md](decisions/0001-stack-technique.md).

## 2026-11-06 — Business plan
- Business plan (18 sections), prévisionnel sur 3 ans (3 scénarios), présentation de 18 diapositives. Voir [business](../business/README.md).

## 2026-11-06 — Design v2
- Design inspiré de Revolut, trois thèmes de même rang (sombre, clair, pastel), design system LiVi et maquettes. Validé par le porteur : « Le design est parfait ».

## 2026-11-06 — Fonctionnalités et design (v1)
- Spécification de 84 fonctionnalités en 10 modules ; LiVi ne vend aucun service financier ; LiVi IA (payante) n'automatise que les consignes de l'utilisateur.

## 2025-10-25 — Cadrage
- Structuration d'un SaaS de suivi de patrimoine plus complet que Finary.

# Journal des modifications

Format inspiré de « Keep a Changelog ». Versions sémantiques à partir de la première bêta. Chaque pull request ajoute sa ligne dans « Non publié ».

## [Non publié]

### Ajouté
- Corrections de la revue des maquettes, partie 1 : les 12 bloquants et 20 autres constats corrigés ; 9 écrans ajoutés (MQ-215 à MQ-223 : patrimoine par enveloppe, états vides de Patrimoine et de Budget, confirmations d'abonnement, double authentification requise, se connecter, sécurité, carrefour des analyses) ; 507 liens de prototype et 12 points de départ ; décision 0004.
- Première revue des maquettes par l'agent `revue-maquettes` : `docs/qualite/revues/2026-11-15-revue-maquettes.md` (136 cadres iPhone, 60 constats dont 12 bloquants, 7 questions pour le porteur de projet).
- Revue du parcours utilisateur iPhone : audit (`docs/design/parcours-utilisateur.md`), page Figma « Parcours iPhone » rangée par étape, 12 écrans ajoutés (MQ-201 à MQ-212 : offres après l'inscription, méthode d'ajout, connexion incluse dans Plus, comptes trouvés, réglages de lecture, correspondance des colonnes, import terminé, établissement non listé, fiche d'établissement, patrimoine par établissement, budget proposé, LiVi IA sans Signature), 21 écrans repris, prototype jouable avec transitions et feuilles animées. Version Figma « Parcours iPhone revu ».
- Catalogue : USR-11 (parcours d'accueil et offres), CPT-11 (annuaire des établissements), CPT-12 (préréglages d'import), BUD-11 (fournisseurs d'énergie et d'internet, V2), BO-28 (annuaire des établissements en back-office) ; inventaire porté à 214 maquettes, groupes alignés sur les étapes du parcours.
- Classification : unité de quantité des matières premières (gramme, kilogramme, once troy) et sous-classe « Métaux industriels ».
- Agent `revue-maquettes` pour auditer chaque maquette avant soumission.
- Lot 5 (MQ-098 à MQ-114) validé par le porteur de projet.

### Modifié
- Onglet « Activité » renommé « Budget » (sous-onglets Budget, Opérations, Abonnements) ; `navigation.md` aligné sur les maquettes ; import décrit en 5 étapes (CPT-03).
- Maquettes du lot 6 dessinées dans Figma, statut « à valider » : MQ-115 à MQ-124 (accueil de LiVi IA avec consignes et coût du mois, nouvelle consigne en langage naturel, vérification et validation, rappel d'exécution, ordre préparé chez le courtier, journal des actions, assistant de lecture, catégorisation assistée, demande de conseil avec réponse neutre, versements et arbitrages programmés). Vérifiées dans les trois thèmes.
- Lot 5 (MQ-098 à MQ-114) validé par le porteur de projet : statuts `validee`, étiquettes Figma « Validée ».
- Maquettes du lot 5 dessinées dans Figma, statut « à valider » : MQ-098 à MQ-114 (recherche, résultats, pastilles et filtres par classe, feuille de filtres des obligations, systèmes de sélection, collections, catalogue de découverte, globe 3D, carte 2D, vue liste accessible, région Europe avec indicateurs, fiche place, comparaison des indices, exposition sur la carte, actualités, lecteur d'article, calendrier des événements). Vérifiées dans les trois thèmes.
- Lot 4 (MQ-079 à MQ-097) validé par le porteur de projet : statuts `validee`, version Figma « Lot 4 validé ».
- Maquettes du lot 4 dessinées dans Figma, statut « à valider » : MQ-079 à MQ-097 (budget du mois, détail d'une catégorie et d'une opération, portée et aperçu de propagation, fiche enseigne, règles personnelles, abonnements détectés, ventilation, correction d'annuaire, fil d'activité, listes de surveillance, alertes de marché et de patrimoine, étiquettes, opération sur titres, transfert entre comptes, modification en masse, investissements programmés). Vérifiées dans les trois thèmes.
- Lot 3 (MQ-067 à MQ-078) validé par le porteur de projet : statuts `validee`, version Figma « Lot 3 validé ».
- Maquettes du lot 3 dessinées dans Figma, statut « à valider » : MQ-067 à MQ-078 (performance réelle avec TWR et TRI, exposition par transparence, calendrier des revenus, journal d'investissement, concentration, contribution à la performance, risque descriptif, calculateur d'arbitrage vers la cible de l'utilisateur, plus-values par lot, revenus passifs consolidés, échéancier consolidé, suivi des plafonds). Vérifiées dans les trois thèmes. Chiffres calculés avec `herfindahl` et `arbitrageVersCible` de `packages/core`.
- Lot 2 (MQ-040 à MQ-066) validé par le porteur de projet : statuts `validee`, version Figma « Lot 2 validé ».
- Maquettes du lot 2 dessinées dans Figma, statut « à valider » : MQ-040 à MQ-066 (patrimoine net et répartition, vue par classe, classe Obligations, prêts et dettes, tableau d'amortissement, bien immobilier avec estimation indicative, autres actifs, objectifs d'épargne, fiche action en huit écrans dont données tierces encadrées, fiches ETF, obligation et crypto, recouvrement des fonds, graphiques en paysage, types, indicateurs et comparaison, ajout d'une opération, simulateur de seuil de revente). Vérifiées dans les trois thèmes.
- Composants Figma Onglet, Statistique et Légende.
- Lot 1 (MQ-001 à MQ-039) validé par le porteur de projet : statuts `validee`, version Figma « Lot 1 validé ».
- Maquettes du lot 1 dessinées dans Figma, statut « à valider » : MQ-001 à MQ-023 (entrée et compte : bienvenue, connexion, code, contribution anonyme, apparence, Face ID, verrouillage, double authentification, profil, réglages, appareils, méthodes de connexion, sauvegarde, confidentialité, offres, suppression du compte, signalement, notifications, maintenance, test d'une fonctionnalité, erreur, widgets) et MQ-024 à MQ-039 (accueil et ses états, menu Ajouter, comptes et fraîcheur, nouveau compte, détail, import CSV avec aperçu et doublons, synchronisation bancaire, clé API en lecture seule, relevé PDF). Vérifiées dans les trois thèmes.
- Jetons `knob` (poignée d'interrupteur) et `scrim` (voile derrière une feuille) dans `tokens.json`, CSS et TS régénérés, variables Figma `surface/knob` et `surface/scrim`.
- Figma : 22 icônes et 7 composants (Interrupteur, Case radio, Case à cocher, Champ de saisie, Barre de navigation, Poignée de feuille, Ligne de réglage) ; section « Lots » dans `docs/design/figma.md`.
- Fichier Figma « LiVi — Maquettes » : variables Couleurs (Sombre, Clair, Pastel, 42 jetons), Espacements et Rayons avec syntaxe de code `var(--lv-…)`, 14 styles de texte, 12 styles d'effet, 16 icônes et 17 composants de base, 14 gabarits de formats, 200 cadres de maquettes nommés `MQ-001` à `MQ-200`.
- Inventaire des maquettes `docs/design/maquettes.json` (source unique) et vue générée `docs/design/maquettes.md` ; contrôle dans `pnpm docs:check` (identifiants, formats, statuts, et chaque fonctionnalité du catalogue couverte par au moins une maquette).
- Test `apps/mobile/test/formats-maquettes.test.ts` : chaque gabarit Figma correspond au format et à la classe détectés par l'app (chemin compatible avec le typage Expo).
- Skill `livi-maquette-figma`, guide `docs/design/figma.md`, serveur MCP Figma déclaré dans `.mcp.json`.

### Corrigé
- Commentaire du calcul du prix de revente (`packages/core/src/revente.ts`) : taux de 2026 (PFU 31,4 %, prélèvements sociaux 18,6 %) au lieu de ceux d'avant la loi de financement de la Sécurité sociale pour 2026.
- Intégration continue : le cache pnpm exigeait un `pnpm-lock.yaml` absent ; le job « Typage, lint et build » devient non bloquant et conserve le fichier de verrouillage généré. Même correction pour le build iOS.
- Web : types de three.js et de react-dom ajoutés (erreur de typage relevée par la CI) ; typage, lint et build de toutes les applications en un seul passage.
- Une seule version de React (19.0.0) dans le monorepo : le build web et back-office échouait sur react 19.0.0 contre react-dom 19.3.1.
- Configuration ESLint commune (`eslint.config.mjs`) ; corrections de typage dans l'API (gestionnaire d'erreurs) et le mobile (`expo-constants`, fenêtre typée).

## [0.1.0] — 2026-11-06 — Amorçage

### Ajouté
- Monorepo pnpm et turbo : applications `mobile`, `web`, `admin`, `api` ; paquets `core`, `asset-classes`, `market-data`, `design-tokens`, `ui-web`.
- Catalogue de 169 fonctionnalités (dont 85 nouvelles : recherche et découverte, marchés mondiaux, fiche actif et graphiques, analyse, gestion, actualités, compte et connexion, back-office étendu, formats et accessibilité).
- Classification de 14 classes et 85 sous-classes d'actifs avec filtres, onglets de fiche, périmètres de recherche et 16 collections neutres.
- Marchés mondiaux : 16 places, 19 indices à codes neutres, statut des séances avec pauses, projections orthographique et équirectangulaire ; globe 3D et carte 2D.
- Calculs : prix de revente, TWR, XIRR, baisse maximale, lecture CSV et modèles, ISIN, doublons, catégorisation avec aperçu de propagation, répartition, concentration, recouvrement, transparence, arbitrage vers cible, mise en forme des nombres à la française.
- API : drapeaux et maintenance (comptes de test), audit chaîné, catalogue de messages d'erreur, contrôle des jetons Apple et Google, exécuteur de scénarios de test d'usage.
- Back-office : 20 sections, rôles et permissions.
- Mobile : formats (téléphone, pliables dont passeport, tablette), connexion Apple, Google, e-mail, base locale chiffrée, écran de test.
- Règles pour les agents (`CLAUDE.md`, `AGENTS.md`, 11 agents, 10 skills), documentation complète, dossier `old/`, intégration continue.

### Archivé
- Catalogue v1 (84 fonctionnalités) : `old/versions/2026-11-06/catalogue-v1-84-fonctionnalites.json`.

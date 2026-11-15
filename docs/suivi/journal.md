# Journal du projet

Une entrée par livraison ou décision, la plus récente en haut. Les ordres complets sont dans [`old/ordres/`](../../old/README.md).

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

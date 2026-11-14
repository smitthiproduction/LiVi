# Journal des modifications

Format inspiré de « Keep a Changelog ». Versions sémantiques à partir de la première bêta. Chaque pull request ajoute sa ligne dans « Non publié ».

## [Non publié]

### Corrigé
- Intégration continue : le cache pnpm exigeait un `pnpm-lock.yaml` absent ; le job « Typage, lint et build » devient non bloquant et conserve le fichier de verrouillage généré. Même correction pour le build iOS.

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

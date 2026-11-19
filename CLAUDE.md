# LiVi — règles du projet pour les agents

LiVi est une application française de suivi de patrimoine : budget, comptes, placements, biens et dettes dans un seul outil, sur iPhone (puis Android), web et back-office. **LiVi ne vend aucun produit financier et ne recommande aucun placement.** Sa version IA (LiVi IA, offre Signature) n'exécute que les consignes écrites par l'utilisateur, validées une par une.

Ce fichier s'applique à tout le dépôt. Chaque application a en plus son propre `CLAUDE.md` (`apps/*/CLAUDE.md`) : le plus proche du fichier modifié complète celui-ci.

## 1. Avant toute tâche

1. Lire `docs/suivi/etat-du-projet.md` (où en est le projet, ce qui est en cours).
2. Lire le `CLAUDE.md` de l'application concernée et les docs du domaine (`docs/produit`, `docs/architecture`, `docs/design`, `docs/reglementation`).
3. Si la demande est un nouvel ordre du porteur de projet : **l'archiver d'abord** avec la skill `livi-ordre` (`pnpm ordre:archiver`).

## 2. Interdits absolus

- **Aucun conseil en investissement** : pas de bouton « Acheter » ou « Vendre », pas de « suggestion », « recommandé », « opportunité », « à acheter », pas de note maison. Les données tierces (consensus, notations) sont sourcées, datées, désactivables et jamais présentées comme un avis de LiVi.
- **Aucun ordre transmis à un courtier sans validation explicite de l'utilisateur, ordre par ordre** (authentification forte). Les ordres via API restent désactivés tant que l'avis juridique n'est pas versé dans `docs/reglementation/ordres-courtiers.md`.
- **Aucune donnée issue de la synchronisation bancaire** (agrégateur DSP2) dans les statistiques anonymes.
- **Aucun secret ni donnée réelle dans le dépôt** : pas de clé, jeton, `.env`, export bancaire réel, capture contenant des montants réels. Données de test fictives uniquement.
- **Aucune donnée financière dans les journaux, erreurs, tickets ou analyses** : identifiants pseudonymisés seulement.
- **Ne jamais modifier ni supprimer `old/`** : on y ajoute, on n'y retouche pas.
- Pas de `git push --force` sur `main`, pas de commit direct sur `main` hors amorçage : branche + pull request.

## 3. Workflow obligatoire pour chaque changement

1. **Archiver** l'ordre et les fichiers qui vont être remplacés (`livi-ordre`).
2. **Spécifier** : mettre à jour `docs/produit/catalogue.json` (skill `livi-fonctionnalite`) ou la classification (`livi-classe-actifs`), puis `pnpm docs:generate`.
3. **Implémenter** dans le bon dossier, en réutilisant `packages/*` (calculs, classification, jetons) plutôt qu'en dupliquant.
4. **Tester** : tests unitaires des calculs, scénario de test d'usage pour le bouton « Tester la fonctionnalité » (`livi-test-fonctionnalite`), vérification sur la matrice d'appareils pour toute interface.
5. **Vérifier** : `pnpm verifier` (tests des paquets et des applications + cohérence des docs) et `pnpm typecheck`. Skill `livi-verification`.
6. **Documenter** : docs du domaine, `CHANGELOG.md`, `docs/suivi/journal.md`, `docs/suivi/etat-du-projet.md`, et une décision dans `docs/suivi/decisions/` si le choix est structurant. Skill `livi-mise-a-jour-docs`.
7. **Committer** en convention (voir §6) et ouvrir une pull request avec le modèle.

Une tâche n'est pas finie tant que les docs ne décrivent pas ce que fait le code (`docs/qualite/definition-of-done.md`).

## 4. Sources de vérité

| Sujet | Source unique | Dérivés |
|---|---|---|
| Fonctionnalités | `docs/produit/catalogue.json` | `docs/produit/catalogue.md` (généré) |
| Classes et sous-classes d'actifs, filtres, onglets de fiche | `packages/asset-classes/src/taxonomy.ts` | `docs/produit/classes-actifs.md` (généré), back-office BO-26 |
| Calculs (performance, CSV, catégorisation, analyse) | `packages/core` | Apps et API |
| Places, indices, statut des séances, projections du globe | `packages/market-data` | Module Marchés mondiaux |
| Couleurs, typo, espacements, thèmes | `packages/design-tokens/src/tokens.json` (copie du design system LiVi) | `generated/tokens.css`, `generated/tokens.ts` (`pnpm tokens:build`) |
| Messages d'erreur utilisateur | `apps/api/src/modules/messages/catalogue.ts` | Back-office BO-18 |
| Maquettes (244 écrans, formats, statuts, parcours) | `docs/design/maquettes.json` | `docs/design/maquettes.md` (généré), fichier Figma « LiVi — Maquettes » (cadres `MQ-…`, guide `docs/design/figma.md`) |
| Décisions | `docs/suivi/decisions/` | `docs/suivi/journal.md` |

Ne jamais modifier un fichier généré à la main.

## 5. Design et contenu

- **Jetons uniquement** : aucune couleur, taille ou rayon codé en dur dans un composant. Trois thèmes de même rang : sombre (défaut), clair, pastel. Voir `docs/design/`.
- **Maquettes** : chaque écran se dessine dans son cadre `MQ-…` du fichier Figma, avec les variables, styles et composants du fichier (skill `livi-maquette-figma`). Chaque fonctionnalité du catalogue a au moins une maquette (contrôlé par `pnpm docs:check`).
- **Formats** : chaque écran est vérifié en classe compacte, moyenne et étendue (iPhone, Samsung, pliables y compris format passeport, tablettes, web). Voir `docs/design/responsive-et-formats.md`.
- **Ton** : vouvoiement, phrases courtes, aucun point d'exclamation, aucun emoji, nombres à la française (« 184 320,57 € », « +2,41 % », vrai signe moins). Boutons à l'infinitif. Sources et fraîcheur sous les chiffres.
- **Gains et pertes** jamais signalés par la seule couleur : signe et flèche obligatoires.
- **Accessibilité** : libellés pour lecteurs d'écran, tailles dynamiques, cibles tactiles de 44 points, « Réduire les animations » respecté (le globe passe en 2D).

## 6. Conventions de code et de dépôt

- TypeScript strict partout ; domaine métier nommé en français (`positions`, `enseignes`, `consignes`), technique en anglais accepté.
- Les paquets `packages/*` n'ont aucune dépendance d'exécution : Node 22 exécute le TypeScript directement (`node --test`).
- Commits : `type(portée): résumé en français` — types `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `securite`, `conformite`. Exemple : `feat(marches): globe 3D avec étiquettes d'indices`.
- Branches : `feat/…`, `fix/…`, `docs/…`, `chore/…`.
- Toute pull request suit `.github/PULL_REQUEST_TEMPLATE.md` (docs à jour, `old/` complété si un ordre l'exige, tests, appareils vérifiés).

## 7. Sécurité (résumé)

Authentification Apple, Google, e-mail (lien ou code), clés d'accès ; 2FA ; sessions révocables ; base locale chiffrée ; sauvegarde chiffrée de bout en bout ; secrets dans le gestionnaire de secrets ; journal d'audit non modifiable ; dépendances surveillées. Détail : `docs/securite/`. Toute modification de l'authentification, du chiffrement ou des droits passe par la skill `livi-securite` et l'agent `securite`.

## 8. Agents et skills

| Besoin | Agent (`.claude/agents/`) | Skill (`.claude/skills/`) |
|---|---|---|
| Découper un ordre, suivre le projet | `chef-de-projet` | `livi-ordre` |
| Nouvelle fonctionnalité de bout en bout | `chef-de-projet` puis l'agent de la surface | `livi-fonctionnalite` |
| Application iPhone / Android | `mobile-ios` | `livi-design-system`, `livi-test-fonctionnalite` |
| Application web | `frontend-web` | `livi-design-system` |
| Back-office | `back-office` | `livi-incident`, `livi-test-fonctionnalite` |
| API, données, authentification | `backend-api` | `livi-securite` |
| Jetons, composants, formats | `design-system` | `livi-design-system` |
| Maquettes Figma | `design-system` | `livi-maquette-figma` |
| Classes d'actifs, données de marché, globe | `donnees-marches` | `livi-classe-actifs` |
| Revue de sécurité | `securite` | `livi-securite` |
| Tests, matrice d'appareils, non-régression | `qa-tests` | `livi-verification`, `livi-test-fonctionnalite` |
| Revue des maquettes et du parcours (avant chaque lot) | `revue-maquettes` | `livi-maquette-figma` |
| Réglementation | `conformite` | `livi-conformite` |
| Docs, CHANGELOG, journal, archive | `documentaliste` | `livi-mise-a-jour-docs`, `livi-ordre` |

## 9. Commandes

```bash
pnpm install            # dépendances (Node 22.18+, pnpm 9)
pnpm test:packages      # tests des paquets partagés (sans installation)
pnpm test:apps          # tests de la logique pure des applications (sans installation)
pnpm verifier           # tests + cohérence des docs
pnpm typecheck          # typage de tout le dépôt
pnpm docs:generate      # régénère catalogue.md et classes-actifs.md
pnpm tokens:build       # régénère les jetons CSS et TS
pnpm ordre:archiver -- --titre "…" --fichier chemin  # archive un ordre et les fichiers remplacés
pnpm dev                # toutes les applications en développement
```

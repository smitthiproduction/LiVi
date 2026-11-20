# Archive des ordres et des versions

Ce dossier garde la mémoire du projet pour pouvoir revenir en arrière. **On y ajoute, on n'y retouche jamais** (seule exception : compléter la section Résultat d'un ordre le jour même).

- `ordres/` : un fichier par ordre du porteur de projet, avec le texte de la demande, l'interprétation, le plan et le résultat.
- `versions/AAAA-MM-JJ[_HHMM]/` : copie des fichiers remplacés par un ordre, au même chemin que dans le dépôt.
- `_modele-ordre.md` : modèle utilisé par `pnpm ordre:archiver`.

## Archiver un nouvel ordre

```bash
pnpm ordre:archiver -- --titre "Titre court" --fichier docs/produit/catalogue.json --texte "Texte intégral de l'ordre"
```

Le script crée le fichier d'ordre, copie les fichiers listés et ajoute une ligne à l'index ci-dessous. Procédure complète : skill `livi-ordre`.

## Revenir en arrière

1. Retrouver l'ordre dans l'index, puis le commit cité dans sa section Résultat.
2. Code : `git revert <commit>` (jamais de réécriture d'historique sur `main`).
3. Fichier de spécification ou de contenu : copier `old/versions/<date>/<chemin>` vers `<chemin>`, puis `pnpm docs:generate` et `pnpm verifier`.
4. Archiver ce retour en arrière comme un nouvel ordre.

## Index des ordres

L'heure est connue à partir de l'ordre du 6 novembre 2026 à 21 h 18 ; pour les ordres antérieurs, le numéro après la date donne leur rang dans la journée.

| Date | Ordre | Fichiers archivés |
|---|---|---|
| 2025-10-25 | [Cadrage d'un SaaS de suivi de patrimoine](ordres/2025-10-25_0001_cadrage-saas-suivi-de-patrimoine.md) | 0 fichier(s) archivé(s) |
| 2026-11-06 | [Fonctionnalités et design complets (v1)](ordres/2026-11-06_0001_fonctionnalites-et-design-v1.md) | 0 fichier(s) archivé(s) |
| 2026-11-06 | [Design v2 inspiré de Revolut, thèmes sombre, clair et pastel](ordres/2026-11-06_0002_design-v2-revolut-et-themes.md) | 0 fichier(s) archivé(s) |
| 2026-11-06 | [Business plan, prévisionnel et présentation](ordres/2026-11-06_0003_business-plan.md) | 0 fichier(s) archivé(s) |
| 2026-11-06 | [Arborescence du projet LiVi et fonctionnalités élargies](ordres/2026-11-06_2118_arborescence-projet-livi-et-fonctionnalites-elargies.md) | 1 fichier(s) archivé(s) |
| 2026-11-14 | [Vérifier l'accès GitHub](ordres/2026-11-14_2049_verifier-l-acces-github.md) | 2 fichier(s) archivé(s) |
| 2026-11-14 | [Préparer Figma pour les 200 maquettes](ordres/2026-11-14_2226_preparer-figma-pour-les-200-maquettes.md) | 4 fichier(s) archivé(s) |
| 2026-11-15 | [Maquettes lot 1 : entrée, compte, accueil et comptes](ordres/2026-11-15_0421_maquettes-lot-1-entree-compte-accueil-et-comptes.md) | 2 fichier(s) archivé(s) |
| 2026-11-15 | [Validation du lot 1 et maquettes lot 2 : patrimoine et fiche actif](ordres/2026-11-15_0458_validation-du-lot-1-et-maquettes-lot-2-patrimoine-et-fiche-a.md) | 1 fichier(s) archivé(s) |
| 2026-11-15 | [Validation du lot 2 et maquettes lot 3](ordres/2026-11-15_0659_validation-du-lot-2-et-maquettes-lot-3.md) | 1 fichier(s) archivé(s) |
| 2026-11-15 | [Validation du lot 3 et maquettes lot 4 budget et activite](ordres/2026-11-15_0714_validation-du-lot-3-et-maquettes-lot-4-budget-et-activite.md) | 1 fichier(s) archivé(s) |
| 2026-11-15 | [Validation du lot 4 et maquettes lot 5 recherche et marches](ordres/2026-11-15_0738_validation-du-lot-4-et-maquettes-lot-5-recherche-et-marches.md) | 1 fichier(s) archivé(s) |
| 2026-11-15 | [Validation du lot 5 et maquettes lot 6 LiVi IA](ordres/2026-11-15_0829_validation-du-lot-5-et-maquettes-lot-6-livi-ia.md) | 1 fichier(s) archivé(s) |
| 2026-11-15 | [Revue du parcours utilisateur des maquettes](ordres/2026-11-15_2118_revue-du-parcours-utilisateur-des-maquettes.md) | 2 fichier(s) archivé(s) |
| 2026-11-15 | [Lancer l'agent revue-maquettes](ordres/2026-11-15_2245_lancer-l-agent-revue-maquettes.md) | 0 fichier(s) archivé(s) |
| 2026-11-16 | [Corrections de la revue des maquettes, partie 1](ordres/2026-11-16_0054_corrections-de-la-revue-des-maquettes-partie-1.md) | 2 fichier(s) archivé(s) |
| 2026-11-16 | [Corrections de la revue des maquettes, partie 2](ordres/2026-11-16_0115_corrections-de-la-revue-des-maquettes-partie-2.md) | 4 fichier(s) archivé(s) |
| 2026-11-19 | [Audit Figma de la page d'accueil](ordres/2026-11-19_1836_audit-figma-de-la-page-d-accueil.md) | 0 fichier(s) archivé(s) |
| 2026-11-19 | [Corrections de l'accueil et annonces administrables](ordres/2026-11-19_1856_corrections-de-l-accueil-et-annonces-administrables.md) | 3 fichier(s) archivé(s) |
| 2026-11-19 | [Accueil sur tous les formats, variantes du montant et centre de notifications au MVP](ordres/2026-11-19_2121_accueil-sur-tous-les-formats-variantes-du-montant-et-centre-.md) | 2 fichier(s) archivé(s) |
| 2026-11-20 | [Restes Figma et points ouverts de la revue](ordres/2026-11-20_0205_restes-figma-et-points-ouverts-de-la-revue.md) | 2 fichier(s) archivé(s) |

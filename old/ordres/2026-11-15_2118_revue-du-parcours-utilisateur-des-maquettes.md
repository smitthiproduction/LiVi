# Ordre : Revue du parcours utilisateur des maquettes

- Reçu le : 2026-11-15T20:18:21.578Z
- Statut : livré, écrans ajoutés et repris à valider par le porteur de projet

## Texte de l'ordre

Ordre du porteur de projet, 15 novembre 2026 à 21:16 (dicté) :

Le parcours utilisateur des maquettes Figma n'a pas de sens : les écrans partent dans tous les sens, sans cohérence. Il faut qu'il ait un sens et qu'on puisse le parcourir, quitte à créer des animations, des transitions, des usages verticaux, des ouvertures d'onglets, plus de pages et plus de maquettes.

Parcours attendu :
- Départ par l'inscription, puis la présentation des offres ; la personne peut rester en gratuit en appuyant sur une croix en haut à droite.
- Elle navigue ; un message l'incite à ajouter ses banques, courtiers et portefeuilles d'investissement (choisir le bon terme pour l'ajout des supports).
- Liste complète des établissements (banques, courtiers, portefeuilles), créée et tenue à jour par l'administrateur dans le tableau de bord (back-office, sur PC).
- Connexion par un agrégateur (type Powens ou autre, à choisir), qui demande un abonnement payant.
- Mode semi-automatique : import CSV des banques, sans limite de date ni de taille (500 pages possibles), avec correspondance des colonnes vers le modèle CSV interne.
- Préréglages par établissement (ordre des colonnes, format des dates avec tirets ou barres, dates américaines ou françaises, séparateurs des nombres), créés depuis le back-office ; l'utilisateur peut les modifier à la main ; il peut créer un établissement non répertorié (nom, logo) et importer son propre fichier.
- Classification la plus complète possible des supports : actions, ETF, SCPI, etc., sans oublier les matières premières (or, argent, titane, fer…) suivies en temps réel, avec l'unité (once, gramme). Voir la source des cours (Yahoo Finance, Google Finance ou un mélange de fournisseurs).
- Catégories et types d'actifs : tous les supports sont classés par type d'actif et par libellé, selon les sélections de l'utilisateur.
- Vue d'ensemble du patrimoine par établissement (combien chez chaque banque, courtier, néobanque, plateforme de prêt, assurance-vie en ligne…), date de la dernière synchronisation, resynchronisation manuelle, import de nouveaux CSV.
- Graphiques, statistiques, camemberts de répartition.
- En ouvrant un établissement, on voit tout ce qu'il contient : LEP, LDDS, livret A, compte-titres, crédits, etc.
- Crédits avec échéances et suivi (à garder), pris en compte dans le calcul global du patrimoine et des performances.
- Budget établi automatiquement : alimentation, restaurants, courses, électricité, gaz, eau, etc.
- Plus tard (version 2, au bout d'un an environ) : connexion des fournisseurs d'accès à internet et d'énergie pour séparer les factures et mieux voir la consommation, avec des offres plus élevées.

Demande : revoir l'ensemble des maquettes Figma créées et le parcours utilisateur, noter exactement toutes les incohérences, puis passer directement aux corrections.

## Interprétation

- Ce qui sera fait : audit écran par écran des 124 maquettes iPhone ; parcours cible et vocabulaire ; réorganisation du fichier Figma par étape ; écrans manquants et écrans incohérents repris ; prototype jouable avec transitions ; catalogue, classification et navigation mis à jour.
- Ce qui ne sera pas fait : les écrans de back-office (annuaire des établissements, préréglages), dessinés au lot back-office à la demande du porteur ; les autres formats et le web ; le choix de l'agrégateur et des fournisseurs de cours (points produit notés dans l'audit).
- Points à valider avec le porteur de projet : onglet « Activité » renommé « Budget » (validé) ; back-office au lot back-office (validé) ; terme « établissement » ; les 12 écrans ajoutés et 21 repris ; le prototype.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Audit et parcours cible | `chef-de-projet` | Chaque incohérence référencée par écran, parcours cible complet |
| Spécification | `documentaliste` | Catalogue, classification, navigation, décision 0003 |
| Maquettes et prototype | `design-system` | Aucun débordement, chaque cadre relié, trois thèmes capturés |
| Neutralité et offres | `conformite` | Offres sans présélection, croix visible, connexion soumise à Plus, aucun conseil |
| Agent de revue | `qa-tests` | `.claude/agents/revue-maquettes.md` utilisable avant chaque lot |

## Fichiers archivés avant modification

- `old/versions/2026-11-15_2118/docs/design/maquettes.json`
- `old/versions/2026-11-15_2118/docs/produit/navigation.md`
- `old/versions/2026-11-15_2118/docs/produit/catalogue.json`
- `old/versions/2026-11-15_2118/packages/asset-classes/src/taxonomy.ts`
- `old/versions/2026-11-15_2118/docs/design/figma.md`
- `old/versions/2026-11-15_2118/CLAUDE.md`

## Résultat

Livré le 15 novembre 2026 sur la branche `docs/parcours-utilisateur`.

- Audit : `docs/design/parcours-utilisateur.md` (37 incohérences, parcours cible, vocabulaire, corrections).
- Figma : page « Parcours iPhone » (9 sections, 136 cadres), icône `budget`, onglet Budget, 12 cadres ajoutés (MQ-201 à MQ-212), 21 repris, 341 liens de prototype, 8 points de départ ; version « Parcours iPhone revu ».
- Dépôt : inventaire à 214 maquettes et groupes par étape ; catalogue (USR-11, CPT-11, CPT-12, BUD-11, BO-28 ; CPT-02, CPT-03, BUD-04, BO-03, BO-05, PAT-07 précisés) ; classification (unité des métaux, métaux industriels) ; `navigation.md`, `figma.md`, décision 0003, agent `revue-maquettes`.
- Vérifications : contrôle automatique des 136 cadres (aucun débordement, chaque cadre relié), planches des trois thèmes, tests et docs verts.
- Écarts : MQ-213 (annuaire des établissements, back-office) et MQ-214 (fournisseurs d'énergie, V2) inscrits sans cadre ; la version « Lot 5 validé » n'a pas été nommée séparément, son état est compris dans « Parcours iPhone revu ».

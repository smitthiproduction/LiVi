# Audit Figma : accueil sur tous les formats, centre de notifications et restes de la revue

| | |
|---|---|
| Date | 20 novembre 2026, 2 h 40 |
| Auditeur | Agent « Figma UX & Spec Auditor » (lecture seule, aucune écriture dans Figma) |
| Fichier | « LiVi — Maquettes », clé `cR7EtAZKpKCkgOoEqcJ8Wq` : pages « 10 · Autres formats » (`3:39`), « 11 · Web » (`3:40`), « Parcours iPhone » (`109:130`), « Composants » |
| Version du cahier des charges | Branche `docs/restes-figma` au 20 nov. 2026 : commit `346ac97`, plus les modifications locales du 20 nov. pas encore commitées au moment de l'audit (`docs/produit/catalogue.json` : 177 fonctionnalités, dont USR-13 « Aide » ; `docs/design/maquettes.json` : 253 maquettes, dont MQ-248 à MQ-253 ; ordre `old/ordres/2026-11-20_0205_restes-figma-et-points-ouverts-de-la-revue.md`). `navigation.md`, `etat-du-projet.md`, `figma.md`, `parcours-utilisateur.md` §11 et `CLAUDE.md`, modifiés en parallèle pendant l'audit, relus à 2 h 45. Autres sources : `navigation.md`, `responsive-et-formats.md`, `figma.md`, `parcours-utilisateur.md` §9 et §10, décisions 0004 à 0007, `packages/design-tokens/src/tokens.json`, `packages/core/src/format.ts`, `apps/mobile/src/theme/formats.ts` |
| Rapports précédents | [Accueil iPhone, 19 nov. 2026](2026-11-19-accueil.md) ; [revue des maquettes du 15 nov. 2026](../qualite/revues/2026-11-15-revue-maquettes.md) |
| Référentiel | Skills d'Emil Kowalski (commit `64eb3de`), Apple HIG : voir [knowledge/](knowledge/README.md). Aucune nouvelle lecture web : les règles nécessaires y figuraient déjà |
| Statut | **À reprendre** (voir §7) |
| Appels Figma | 12 : 7 lectures par script, 5 captures (MQ-132, MQ-246, MQ-141, MQ-019, MQ-149, thème Sombre) |

## 1. Périmètre retenu

### 1.1 Accueil sur tous les formats (lot 7)

| Cadre | Id Figma | Appareil et taille (pt) | Classe | Fonctionnalités | Statut inventaire |
|---|---|---|---|---|---|
| MQ-125 | `13:5` | iPhone SE, 375 × 667 | Compacte | STA-01, FMT-01 | À valider |
| MQ-127 | `13:57` | iPhone Pro Max, 430 × 932 | Compacte | STA-01, FMT-01 | À valider |
| MQ-130 | `13:133` | Galaxy S, 360 × 780 | Compacte | STA-01, FMT-01 | À valider |
| MQ-132 | `13:181` | Fold plié, 344 × 882 | Compacte | STA-01, FMT-02 | À valider |
| MQ-134 | `13:229` | Passeport, 412 × 800 | Compacte | STA-01, FMT-02 | À valider |
| MQ-136 | `13:277` | Flip, 390 × 944 | Compacte | STA-01, FMT-02 | À valider |
| MQ-138 | `13:325` | Web mobile, 390 × 844 | Compacte | STA-01, FMT-04 | À valider |
| MQ-246 | `179:3562` | Fold déplié, 673 × 841 | Moyenne | STA-01, FMT-02 | À valider |
| MQ-247 | `179:3714` | iPad portrait, 834 × 1194 | Moyenne | STA-01, FMT-03 | À valider |
| MQ-141 | `13:381` | iPad paysage, 1194 × 834 | Étendue | STA-01, FMT-03 | À valider |
| MQ-149 | `14:101` | Web bureau, 1440 × 1024 | Large | STA-01, FMT-04 | À valider |

### 1.2 Centre de notifications au MVP

MQ-019 (`8:473`, USR-09), MQ-245 (`176:9139`, USR-09 et USR-12), pastille de non-lues sur la cloche de MQ-024 (`9:5`) et des onze accueils ci-dessus.

### 1.3 Restes de la revue du 15 novembre

| Cadre | Id Figma | Point de la revue | Entrée contrôlée |
|---|---|---|---|
| MQ-248 · Fiche Horizon Vie | `187:9151` | R-14 | MQ-024, MQ-027, MQ-028, MQ-030, MQ-210, MQ-237, MQ-238, MQ-239 |
| MQ-249 · Fiche Atlas Bourse | `187:9288` | R-14 | idem |
| MQ-250 · Aide | `187:9672` | R-13 | MQ-010 (`8:239`) |
| MQ-251 à MQ-253 · Import sans préréglage (Caisse du Port) | `187:10226`, `187:10422`, `187:10549` | R-15 | MQ-208 (`109:371`) ; sortie vers MQ-035 et MQ-207 lue pour la cohérence |
| MQ-204 · Connexion automatique, étape 3 sur 3 | `109:235` | R-46 | MQ-037 |
| MQ-089 · Budget : opérations | `11:580` | R-52 | MQ-079, MQ-086, MQ-209, MQ-236 |

### 1.4 Composants

`Montant héros` (ensemble `176:163`, 5 variantes), `Pastille de notification` (`176:164`), `Rail de navigation` (ensemble `186:537`, 5 variantes). Pour comparaison : `Barre d'onglets` (`6:159`), `Barre latérale web` (`6:205`), `En-tête web` (`6:246`), `Ligne de liste` (`5:32`), `Ligne de réglage` (`31:306`).

### 1.5 Écarts entre les sources (version la plus récente retenue)

| Sujet | Source A | Source B | Retenu |
|---|---|---|---|
| Nombre de maquettes | Décision 0007 : 247 (historique, normal) | `maquettes.json`, `CLAUDE.md` et `etat-du-projet.md` mis à jour pendant l'audit (20 nov., 2 h 45) : 253, 111 à valider | L'inventaire du 20 nov. |
| Contrôle du lot | `etat-du-projet.md` (20 nov.) : « contrôle : 157 cadres, 644 liens, 14 points de départ, aucun écart » | Cet audit : 644 liens et 14 points de départ confirmés, mais textes tronqués, cibles de navigation sous 44 pt et lignes sans destination (A-02, A-03, A-07, A-10 à A-12) | Le contrôle automatique ne voit que les éléments reliés et ne mesure pas la troncature : à étendre |
| Fiches et Aide | `navigation.md` (20 nov.) : « la fiche ouvre ensuite les comptes » ; documents de l'Aide « ouverts dans le navigateur intégré » | MQ-248 : ligne du contrat sans destination ; MQ-250 : aucune ligne ne s'ouvre | `navigation.md` (A-11, A-12) |
| Pages de `figma.md` | « 214 maquettes », « 136 écrans iPhone », « 8 points de départ » | Section Prototype du même fichier et Figma : 14 points de départ | Figma ; `figma.md` à mettre à jour |
| Ordre de la barre latérale (étendue) | `responsive-et-formats.md` : Accueil, Patrimoine, Marchés, LiVi IA, Budget, Réglages | `navigation.md` : rail dans l'ordre de la barre d'onglets (Accueil, Patrimoine, Budget, Marchés, LiVi IA) ; rien sur Réglages | Aucun : à trancher (A-01) |
| Espaces des nombres | `CLAUDE.md` §5 : « 184 320,57 € » écrit avec des espaces ordinaires (U+0020) | `packages/core/src/format.ts` (source de vérité des calculs et de la mise en forme) : espace fine insécable U+202F pour les milliers, espace insécable U+00A0 avant l'unité | `packages/core` (A-04) |
| Flèches des variations | `tokens.json` (`gain`, `loss`) et maquettes : ▲ et ▼ | `packages/core`, `variation()` : ↑ et ↓ | Aucun : à trancher (M-13) |
| Marge latérale en classe étendue | MQ-141 : 24 pt | `formats.ts`, `disposition()` : 32 pt | Aucun : à trancher (M-19) |
| Barre latérale web | Description du composant `6:205` : « mêmes entrées que la barre d'onglets, plus Import et Rapports » | Contenu du composant : Tableau de bord, Patrimoine, Marchés, LiVi IA, Activité, Import, Rapports, Réglages ; code `apps/web` sans Budget, code `apps/mobile` avec « Activité » | `navigation.md` (A-01) |

## 2. Méthode

- Lecture par script (7 appels) de chaque cadre : arbre complet, textes avec style, couleur liée et position, instances et variantes, réactions (déclencheur, destination, transition, durée), valeurs non liées aux variables (couleurs, rayons, marges, écarts), textes hors cadre, rognés ou débordant leur boîte, troncature, défilement et enfants fixes ; points de code des espaces dans les nombres ; liens entrants de toute la page « Parcours iPhone » vers les cadres audités ; points de départ ; descriptions et propriétés des composants ; pastilles de statut et titres des sections des pages 10 et 11.
- Captures (5) en thème Sombre : MQ-132 (format le plus étroit), MQ-246 (rail), MQ-141 (barre latérale tactile), MQ-019 (non-lues), MQ-149 (web). Thèmes Clair et Pastel non capturés (quota) : toutes les couleurs lues sont liées aux variables, et le contraste de la pastille a été calculé depuis `tokens.json` (chiffre `on-accent` sur `danger` : 6,35:1 Sombre, 5,84:1 Clair, 5,95:1 Pastel ; `warning` sur `bg` : 11,77, 5,31 et 5,56:1).
- Contrôles du dépôt : catalogue (USR-09, USR-10, USR-12, USR-13, CPT-02, CPT-03, CPT-08, CPT-10, CPT-11, CPT-12, PAT-01, SEC-07, FMT-01 à 04, IA-04, IA-10, BUD-07), navigation, formats, décisions, jetons, `format.ts`, `formats.ts`, composants `BarreLaterale` mobile et web.

Résultats bruts : 0 couleur, marge ou rayon hors variable dans les cadres eux-mêmes (les valeurs non liées sont toutes dans des composants, voir M-07) ; 0 point d'exclamation, 0 emoji, 0 tiret à la place du signe moins ; vouvoiement partout ; 644 liens sur la page « Parcours iPhone », 14 points de départ ; aucun lien dans les 11 cadres du lot 7 ; toutes les cibles reliées font au moins 44 pt, mais les entrées du rail (42 pt) et de la barre latérale (40 pt), non reliées, sont en dessous (A-02).

## 3. Éléments vérifiés

Légende des fonctions back-office : BO-01 offres, BO-03 modèles CSV, BO-04 annuaire des enseignes, BO-05 catégories, BO-06 connecteurs, BO-11 contenus et textes légaux, BO-16 audits, BO-18 messages, BO-19 tickets, BO-20 drapeaux et ajustements, BO-21 maintenance, BO-28 annuaire des établissements, BO-29 éditeur promotionnel. « Donnée » : valeur calculée pour l'utilisateur, jamais saisie dans le back-office.

Les éléments communs à MQ-024 (avatar, recherche, bouton +, cloche, montant, période, graphique, lignes d'établissement, onglets) gardent l'utilité, l'usage et la modifiabilité décrits le 19 novembre ([§3](2026-11-19-accueil.md#3-éléments-vérifiés)) ; seuls leur adaptation au format et les éléments nouveaux sont décrits ici.

### 3.1 Matrice des formats (lot 7)

| Cadre | Navigation | Marges | Montant héros | Graphique | Lignes visibles | Colonnes | Constats |
|---|---|---|---|---|---|---|---|
| MQ-125 SE | Barre d'onglets 343 pt, à 16 pt | 16 | Standard | ≈ 56 pt (déduit des positions) | 1 (les deux autres absentes, cadre sans défilement) | 1 | Conforme à `responsive-et-formats.md` ; M-10 |
| MQ-127 Pro Max | 398 pt | 16 | Standard | 96 | 3 | 1 | Conforme |
| MQ-130 Galaxy S | 328 pt, à 16 pt | 16 | Standard | 96 | 3 | 1 | « Banque Rivière » dans 106 pt : troncature probable (A-03) ; barre de 328 pt au lieu de 336 (M-08) ; barre de gestes absente (M-09) |
| MQ-132 Fold plié | 320 pt, à 12 pt | 12 | Étroit (`display-title`) | 96 | 3 | 1 | **« Banque Riv… » et « 2 comptes et… » tronqués** (capture, A-03) ; M-09 |
| MQ-134 Passeport | 380 pt | 16 | Standard | 96 | 3 | 1 | Conforme ; M-09 |
| MQ-136 Flip | 358 pt | 16 | Standard | 96 | 3 | 1 | Conforme ; M-09 |
| MQ-138 Web mobile | 358 pt, à 16 px du bas | 16 | Standard | 96 | 3 | 1 | Pas de barre système (juste) ; zone sûre basse à annoter (M-09) |
| MQ-246 Fold déplié | Rail 72 pt (`Rail de navigation`, Actif=Accueil) | 24 | Standard | 160 | 3 | 1 | Conforme aux dimensions ; entrées de 42 pt (A-02) ; actif par la seule teinte (M-05) |
| MQ-247 iPad portrait | Rail 72 pt | 24 | Standard | 320 | 3 | 1 | idem MQ-246 |
| MQ-141 iPad paysage | Barre latérale 248 pt (`Barre latérale web`) | 24 | Standard | 320 | 3 | 2 (514 + 24 + 360) | Ordre des entrées différent du rail, entrée Réglages (A-01) ; entrées de 40 pt sur écran tactile (A-02) ; marges 24 contre 32 en code (M-19) ; point actuel rogné (M-11) |
| MQ-149 Web | Barre latérale web 248 px, En-tête web 72 px | 40 | Standard | 320 | 3 | 2 (680 + 32 + 400) | « Tableau de bord » au lieu d'« Accueil », ordre et icône de Budget (A-01) ; avatar « JR » (A-13) ; pastille hors de l'en-tête (M-12) ; point actuel rogné (M-11) |

### 3.2 Éléments propres aux formats

| Élément | Calque ou composant | Utilité | Usage et destination | États | Tokens | Responsive et dynamique | Modifiabilité admin | Cohérence | Écart |
|---|---|---|---|---|---|---|---|---|---|
| Barre d'onglets en compact | `Barre d'onglets/Actif=Accueil` (`6:159`), onglets 69 × 47 | Navigation principale | Non reliée dans le lot 7 (choix écrit dans `parcours-utilisateur.md` §10, pas dans `figma.md`) | Actif par teinte `texte/ink` | `verre/glass-strong`, `verre/glass-edge`, `rayon/radius-xl` | Largeur moins 32 pt partout sauf Fold plié (moins 24) ; libellés jamais coupés (vérifié sur MQ-132) | Non (structure) ; BO-21 met un onglet en maintenance, BO-20 masque LiVi IA | Ordre conforme à `navigation.md` | M-01, M-08 |
| Rail de navigation | `Rail de navigation/Actif=…` (`186:537`), 72 × hauteur de l'écran | Navigation de la classe moyenne (décision 0007) | Non relié ; mêmes destinations que la barre d'onglets ; fondu de 280 ms attendu | Actif par teinte seulement ; pas d'état pressé ni focus | `verre/glass-strong`, trait lié, `espacement` lié (padding haut 16, écart 8) | Entrées 69 × 42 (sous 44 pt), libellé « Patrimoine » à 3 pt des bords : comportement à 200 % non défini | Non ; mêmes leviers que la barre d'onglets (BO-21, BO-20) | Ordre identique à la barre d'onglets ; diffère de la barre latérale | A-01, A-02, M-05 |
| Barre latérale (iPad paysage et web) | `Barre latérale web` (`6:205`), entrées 215 × 40, actif sur fond | Navigation des classes étendue et plus | Non reliée | Actif signalé par un fond (bien) ; pas d'état survol ni focus dessiné (web) | verre, `rayon` liés | Repliable à 72 px entre 600 et 1023 px (décrit, non dessiné) | Non pour la structure ; Import et Rapports pilotables par drapeau BO-20 (contrainte : jamais moins des cinq entrées de base, journal BO-16) | Ordre Marchés, LiVi IA, Budget ; « Tableau de bord » sur le web, « Accueil » sur iPad ; icône `activite` pour Budget sur le web, `budget` sur iPad ; entrée Réglages en plus de l'avatar | A-01, A-02 |
| En-tête web | `En-tête web` (`6:246`) : recherche ⌘K, Importer, Ajouter une opération, cloche, avatar | Actions globales du web (`navigation.md`) | Non relié | Boutons Compact (états dans le composant) ; survol et focus clavier non dessinés | `Bouton` Secondaire et Principal | Recherche élastique (663 px) | Libellés fixes ; avatar : donnée du compte | Avatar « JR » alors que la personne de démonstration est Camille Martin (« CM ») | A-13 |
| En-tête de l'accueil (formats mobiles et tablettes) | `en-tête` : avatar 44, recherche élastique, + 44, cloche 44 | Identique à MQ-024 | Non relié dans le lot 7 | — | idem MQ-024 | Recherche de 104 pt (Fold plié) à 682 pt (iPad paysage) ; en-tête sur toute la largeur en étendue | idem 19 nov. | Conforme | — |
| Pastille de non-lues | `Pastille de notification` 20 × 20, posée à + 28 / − 4 pt de la cloche | Dire qu'il y a du nouveau et combien (USR-09) | Aucune action propre : la cloche porte le toucher | « 3 » seulement ; ni 0 (masquée), ni 99+ dessinés | `etat/danger`, `texte/on-accent`, `radius-pill`, `padding` lié | Largeur fixe 20 : « 99+ » ne tient pas ; dépasse de 4 pt de la cloche, reste dans le cadre sur tous les formats | Donnée (nombre calculé) ; aucune saisie BO. Règle « 99+ » et masquage à zéro dans le code | Présente sur les 12 accueils ; sur le web, posée hors de l'en-tête | A-06, A-07, M-12 |
| Montant héros selon le format | `Montant héros/Variante=Standard` ou `Étroit` (MQ-132) | Chiffre principal | idem MQ-024 (non relié ici) | — | `Affichage/hero` ou `display-title` | Standard de 298 pt de texte tient de 375 à 1440 pt ; Étroit à 344 pt | Donnée ; règle de variante par largeur dans le code | Conforme à `responsive-et-formats.md` | — |
| Graphique selon le format | `graphique` + `courbe` | Évolution du patrimoine | Non relié | — | `graphique/chart-1` | 56, 96, 160, 320 pt selon le format, conformes ; point actuel coupé au bord droit en deux colonnes | Donnée | Conforme | M-11 |
| Colonne « Mes établissements » | `en-tête` + `Ligne de liste` × 3 | Établissements à droite en deux colonnes | Non reliée | — | idem MQ-024 | 360 pt (iPad paysage) et 400 px (web), conformes ; colonne de droite vide sous les trois lignes | idem 19 nov. (BO-28 pour nom, logo, type) | Conforme | — |
| Lignes d'établissement en format étroit | `Ligne de liste/Type=Compte` (`5:32`), titre et sous-titre en troncature finale | Montant, type et fraîcheur par établissement | Non reliées | Fraîcheur en retard en `etat/warning` sans icône ni mot | `teinte`, `Chiffres/figure`, `Interface/*` | Colonne de droite figée (126 pt pour « À renouveler · 20 nov. ») : le titre descend à 98 pt sur Fold plié | Nom : BO-28 (40 caractères conseillés) ; un nom de 14 caractères est déjà coupé | « Aucun texte tronqué » (`figma.md`, contrôles de lot) non tenu | A-03, A-05 |
| Orbes | `ui/orbe` | Signature visuelle | Décoratif | — | `liquide/liquid-1` à `-3` | Recadrés sur chaque format ; absents du web (MQ-149) | Non | Incohérence légère entre iPad et web | M-12 |
| Barres système | `Barre système/iOS`, `Barre système/Android`, `Indicateur d'accueil` | Gabarits de zone sûre | — | — | `texte/ink` | Barre de gestes Android absente ; web mobile sans barre (juste) | Non | — | M-09 |

### 3.3 Composants

| Élément | Composant | Utilité | Usage | États ou variantes | Tokens | Responsive et dynamique | Modifiabilité admin | Cohérence | Écart |
|---|---|---|---|---|---|---|---|---|---|
| Montant héros, Standard | `176:163` | Chiffre principal, une fois par écran | Double toucher : mode discret (SEC-07) | Standard 361 × 140 | `Affichage/hero`, `texte/ink`, `Interface/callout`, `caption`, écart lié | Libellé, montant, variation, fraîcheur en pile verticale | Donnée ; règle d'abréviation dans `packages/core` | Textes par défaut hors données communes (« +4 341,20 € aujourd'hui », « Mis à jour 09:42 · cours différés de 15 min ») ; description de la variante : « abréviation 184,3 k€ en format étroit » | M-06 |
| Montant héros, Baisse | idem | Variation négative | — | « ▼ −1,18 % » en `etat/loss`, « −2 168,40 € » | vrai signe moins, flèche | — | Donnée | Conforme à `CLAUDE.md` §5 | — |
| Montant héros, Étroit | idem | Écran externe étroit | — | 312 × 124, `display-title` | — | Montant complet, pas d'abréviation | Donnée | Contredit la description de la variante Standard | M-06 |
| Montant héros, 7 chiffres | idem | Patrimoine au-delà du million | — | « 1 284 320,57 € » sur 336 pt | `hero` | Tient sur 361 pt | Donnée | Conforme | — |
| Montant héros, Texte agrandi | idem | Taille dynamique à 200 % | — | 361 × 250 | 3 textes sans style (libellé, écart, fraîcheur) | Montant et variation (« ▲ +2,41 % » à 13 pt) non agrandis, sans explication | Donnée | Contraire à la règle « styles uniquement » sans annotation | M-06 |
| Pastille de notification | `176:164` | Nombre de non-lues | — | Propriété texte « Nombre » ; pas de variante 0, 99+ | `etat/danger`, `texte/on-accent`, `radius-pill` et marges liés | **Largeur et hauteur fixes 20** : « 99+ » déborde | Donnée | Description juste (libellé lecteur d'écran, masquée à zéro, 99+) mais composant incapable d'afficher 99+ | A-06 |
| Rail de navigation | `186:537` | Navigation en classe moyenne | Toucher une entrée : racine de l'onglet | 5 variantes Actif ; onglets 69 × 42, centrés à 0,5 pt près | `verre/glass-strong`, trait, marges liées ; écart interne de 2 pt non lié | Hauteur étirée à l'écran (805 et 1140 pt) | Non (structure) | Ordre conforme ; propriété Actif listée dans un autre ordre (sans effet) | A-02, M-05, M-07 |

### 3.4 Centre de notifications (MQ-019, MQ-245)

| Élément | Calque ou composant | Utilité | Usage et destination | États | Tokens | Responsive et dynamique | Modifiabilité admin | Cohérence | Écart |
|---|---|---|---|---|---|---|---|---|---|
| Barre de navigation « Notifications » | `Barre de navigation` | Titre, retour | Retour (`BACK`) | — | `Interface/title-3` | — | Non | Conforme | — |
| Bouton réglages (en haut à droite) | `Bouton rond` + `Icône/reglages` 44 × 44 | Réglages par type (USR-09) | **Aucune destination** | — | verre | — | Types activables par drapeau BO-20 (couper un type en incident) | Promet une fonction sans écran | A-07 |
| En-têtes « Aujourd'hui », « Cette semaine » | texte `en-tête` | Grouper par date | — | — | `Interface/overline` | — | Non | Style `overline` en casse normale, ailleurs en capitales | M-14 |
| Ligne « Nouveauté : bien démarrer avec LiVi · Annonce de LiVi · 08:30 » | `Ligne de réglage/Droite=Chevron` | Retrouver une annonce (décision 0007) | › MQ-245, animation intelligente 420 ms | Lue ou non lue non distinguée | `surface/surface` | Titre sur 2 lignes, jamais coupé | Titre, date, segment, expiration : **BO-29** (titre ≤ 60 caractères, validation par une seconde personne, journal BO-16) | Conforme à la décision 0007 ; USR-12 est en V1.5 | A-07, A-08 |
| Ligne « Consigne déclenchée : Ether sous 2 600 € · Ordre préparé : aperçu non disponible » | idem | Événement de consigne | › MQ-119 (IA-04, V2), glissement 420 ms | idem | idem | Titre et sous-titre sur 2 lignes | Donnée (consigne écrite par l'utilisateur) ; modèle de phrase fixe | La mention « soumis à l'avis juridique » (`navigation.md`) manque | A-08 |
| Ligne « Banque Rivière : accès à renouveler · Dans 5 jours » | idem, `Icône/alerte` | Alerte DSP2 (CPT-08) | › MQ-037, glissement 420 ms | idem | `etat/warning` sur l'icône | — | Modèle : **BO-18** (code, titre ≤ 45, texte ≤ 140, variables `{etablissement}`, `{jours}`) ; seuil de 5 jours : BO-20 | Cohérent avec « À renouveler · 20 nov. » de l'accueil | — |
| Ligne « Dividende reçu : 18,40 € · PEA Atlas » | idem, `Icône/check` | Événement de revenu | **Aucune destination** malgré le chevron | idem | — | — | Donnée | Une opération : selon `navigation.md`, elle va dans Budget › Opérations (où elle figure, MQ-089) | A-07, A-08 |
| Ligne « Grosse dépense : 412,00 € · Maison Bleue » | idem | Alerte de patrimoine (GES-03, V1.5) | **Aucune destination** | idem | — | — | Seuil réglé par l'utilisateur (GES-03) ; modèle de phrase fixe | Contenu V1.5 dans un écran MVP, sans annotation | A-07, A-08 |
| Ligne « Votre semaine en un coup d'œil » | idem | Résumé hebdomadaire | **Aucune destination** | idem | — | — | Modèle BO-11 si retenu | Fonction absente du catalogue | A-07, A-08 |
| Ligne « Nouvelle connexion sur un Mac · Paris » | idem, `Icône/bouclier` | Sécurité (SEC-04) | **Aucune destination** (MQ-222 ou appareils et sessions attendus) | idem | — | — | Modèle fixe, jamais éditable en BO (évite qu'un message de sécurité soit détourné) | Type MVP | A-07 |
| Marques de non-lu | — | Dire quelles notifications sont nouvelles | — | **Absentes** alors que la cloche affiche « 3 » | — | — | — | Pastille et liste ne se correspondent pas ; pas de « Tout marquer comme lu » | A-07 |
| Feuille d'annonce (MQ-245) | `ui/voile`, `ui/feuille` 393 × 758, `Poignée de feuille` | Lire l'annonce sans quitter les notifications | Fermeture par le voile, la poignée (`ui/zone-44` 361 × 44), la croix (44 × 44) et « Fermer » (361 × 54) : 4 voies, conforme à USR-12 | — | `surface/scrim`, `bg-elevated`, `radius-xl` | Corps de texte sur 5 lignes ; feuille à 94 pt du haut ; à 200 %, défilement interne nécessaire | Contenu entier : BO-29 (titre ≤ 60, type et date, texte ≤ 600, vidéo sous-titrée, image avec texte alternatif obligatoire, bouton calendrier optionnel, aperçu dans les 3 thèmes) | Mention « Aucune recommandation de placement » : conforme | M-15 |
| « Ajouter au calendrier » | `Bouton/Style=Principal` | Rejoindre l'événement | **Aucun lien** (action système à annoter) | États du composant | `texte/on-ink` | Pleine largeur | Présence et date : BO-29 | — | M-15 |
| Légende vidéo | texte | Durée, sous-titres, son coupé par défaut | — | — | `ink-tertiary` | 2 lignes | BO-29 | Conforme à USR-12 ; aucune image ni texte alternatif dans la feuille | M-15 |

### 3.5 Fiches d'établissement (MQ-248, MQ-249)

| Élément | Calque ou composant | Utilité | Usage et destination | États | Tokens | Responsive et dynamique | Modifiabilité admin | Cohérence | Écart |
|---|---|---|---|---|---|---|---|---|---|
| Titre et retour | `Barre de navigation` | Nommer l'établissement | Retour | — | `title-3` | Nom long : à vérifier sur 249 pt | Nom : BO-28 | Conforme | — |
| Montant de l'établissement | `Montant héros/Standard`, variation cachée | Total des comptes (décision 0004) | Non relié (pas de mode discret ici) | Variation masquée (juste : pas de variation sur un relevé) | `hero` | — | Donnée | HV 61 204,88 € ; AB 38 920,15 € = 36 462,56 + 2 457,59 € : justes | — |
| Ligne de résumé | texte `ecart` | Composition (HV) ou ventilation positions et liquidités (AB) | — | — | `callout` | Une ligne | Donnée | Conforme | — |
| Fraîcheur | texte `fraicheur` | Source et date (CPT-08) | — | — | `ink-tertiary` | — | Donnée ; libellé de méthode (« Relevé PDF », « Clé API en lecture ») tiré de BO-28 | Conforme | — |
| « Importer un relevé » (HV) | `Bouton/Secondaire, Compact` + `ui/zone-44` 295 × 44 | Mettre à jour la valeur | › MQ-039 (CPT-10, V1.5, Signature) | — | — | — | Visible si BO-28 déclare « relevé PDF » et si l'offre (BO-01) le permet | Seule voie de mise à jour ; rien pour un client Essentiel ou Plus au MVP | A-12 |
| « Gérer la clé » (AB) | idem + `ui/zone-44` | Clé en lecture (CPT-07) | › MQ-038 | — | — | — | Méthode « clé » : BO-28 | Conforme | — |
| Ligne du compte | `Ligne de liste/Type=Compte` | Détail de chaque compte (CPT-11) | HV « Contrat Horizon Vie » : **aucune destination** ; AB « PEA Atlas » › MQ-033 | Fraîcheur « Relevé · 30 sept. » en orange sans icône | — | Titre en troncature finale | Donnée | Même ligne, deux comportements ; monogramme « HV » (établissement) contre « PE » (compte) | A-12, A-05, M-17 |
| Carte d'explication | `Icône/alerte` (HV), `Icône/info` (AB) + titre + texte | Dire pourquoi la valeur date (HV) ou ce que permet la clé (AB) | Toute la carte › MQ-039 (HV) ou MQ-038 (AB), `ui/zone-44` 361 × 44 | — | `surface`, `ink-secondary` | Texte sur 3 lignes | HV : fréquence des relevés à tenir dans BO-28 (champ structuré « trimestriel » plutôt qu'un texte libre) ; AB : « La clé ne permet ni ordre ni retrait » : texte fixe, relu par la conformité, non exposé en BO | Conforme, neutre | — |
| « Ajouter un contrat » (HV), « Ajouter un compte » (AB) | `Ligne de réglage/Chevron` | Compléter l'établissement | › MQ-031 « Nouveau compte » | — | — | — | Libellés fixes | Titre d'arrivée « Nouveau compte » après « Ajouter un contrat » | M-17 |

### 3.6 Aide (MQ-250) et son entrée (MQ-010)

| Élément | Calque ou composant | Utilité | Usage et destination | États | Tokens | Responsive et dynamique | Modifiabilité admin | Cohérence | Écart |
|---|---|---|---|---|---|---|---|---|---|
| Ligne « Aide » du profil | `Ligne de réglage/Chevron`, `Icône/aide` | Entrée de USR-13 | MQ-010 › MQ-250, glissement 420 ms ; retour | — | — | — | Libellé fixe | R-13 résolu | — |
| Champ « Rechercher dans l'aide » | `Champ de recherche` | Trouver un article | **Non relié** | — | `surface-sunken`, `ink-secondary` | Élastique | Index des articles BO-11 | — | A-11 |
| Questions fréquentes (4 lignes, valeur « En ligne ») | `Ligne de réglage/Droite=Valeur` | Réponses aux questions courantes | **Aucune destination** ; pas d'écran de navigateur intégré | — | `ink-secondary` | « Comprendre la fraîcheur des valeurs » sur 2 lignes, non coupé | **BO-11** : titre ≤ 60 caractères, catégorie, ordre, adresse (interne au navigateur intégré), version, date d'effet, statut publié ; relecture conformité pour toute mention d'investissement ; contrôle « sans point d'exclamation » ; au-delà de 6 articles, « Tout voir » pour ne pas allonger l'écran | « En ligne » conforme à USR-13 ; aucune ligne sans chevron n'indique qu'elle s'ouvre | A-11 |
| « Signaler un problème » | `Ligne de réglage/Chevron` | Accès à USR-10 | › MQ-018, glissement 420 ms | — | — | Sous-titre sur 2 lignes | Délai « 2 jours ouvrés » : réglage BO-19 ou texte BO-11, jamais en dur | Les réponses du support arrivent « dans vos notifications » : type absent de USR-09 | M-18 |
| Documents (3 lignes « En ligne ») | `Ligne de réglage/Droite=Valeur` | Conditions, confidentialité, nouveautés | **Aucune destination** | État hors connexion non dessiné (USR-13 : dernière version téléchargée) | — | — | **BO-11** : documents versionnés, acceptation tracée, date d'effet | — | A-11 |
| Mention de pied | texte `caption` | Neutralité, version | — | — | `ink-tertiary` | 3 lignes | Texte de neutralité : fixe ; numéro de version : automatique (construction), jamais saisi | « Aucun conseil en investissement » : conforme | — |

### 3.7 Import sans préréglage « Caisse du Port » (MQ-208 › MQ-251 › MQ-252 › MQ-253 › MQ-035 › MQ-207)

| Élément | Calque ou composant | Utilité | Usage et destination | États | Tokens | Responsive et dynamique | Modifiabilité admin | Cohérence | Écart |
|---|---|---|---|---|---|---|---|---|---|
| MQ-208 · Logo, nom, type, couleur | `Champ de saisie/Rempli`, `Ligne de réglage/Valeur`, `Bouton/Secondaire, Compact` | Créer un établissement non listé (CPT-11) | « Choisir une image », « Type », « Couleur » non reliés | Champ rempli seulement | liés | — | Établissement personnel : sur l'appareil, aucun champ BO | — | M-16 |
| MQ-208 · « Proposer cet établissement à LiVi » | `Ligne de réglage/Interrupteur désactivé` | Alimenter l'annuaire avec accord | — | Désactivé par défaut (juste) | — | Sous-titre sur 2 lignes | File des propositions : BO-28 (nom et type seulement, aucune donnée) | Conforme à CPT-11 | — |
| MQ-208 · « Créer et importer un fichier » | `Bouton/Principal` 361 × 56 | Suite par fichier | › MQ-251, glissement 420 ms | — | — | — | Libellé fixe | R-15 corrigé à l'entrée | — |
| MQ-208 · texte d'aide | texte `caption` | Annoncer l'étape de correspondance | — | — | `ink-tertiary` | 2 lignes | Fixe | « LiVi s'en souviendra » alors que MQ-253 en fait un choix | M-16 |
| MQ-251 · Étape 1 sur 5 | `étape`, fichier, carte « Aucun préréglage pour « Caisse du Port » », compte de destination | Choisir fichier et compte (CPT-03) | « Changer » × 2 non reliés ; bouton › MQ-252 | — | `accent-text` pour l'étape | — | Absence de préréglage : constat de BO-03 ; « 1 236 lignes · 94 Ko » : donnée | « Aucune limite de date ni de taille », lecture locale : conforme à CPT-02 | M-16 |
| MQ-252 · Étape 2 sur 5 | 8 `Ligne de réglage/Valeur` | Vérifier séparateur, encodage, en-têtes, dates, décimales, milliers, sens des montants (CPT-12) | Valeurs non reliées ; bouton › MQ-253 | — | — | Contenu jusqu'à 724 pt, bouton à 744 : pas de chevauchement | Valeurs détectées ; listes de choix fermées (code) | Conforme à CPT-12 | M-16 |
| MQ-253 · Étape 3 sur 5 « Correspondance » | 6 lignes de colonnes, interrupteur « Retenir pour Caisse du Port » | Relier les colonnes ; préréglage personnel (CPT-12) | Valeurs en `accent-text` non reliées ; bouton › **MQ-035** | Interrupteur activé | — | — | Préréglage personnel sur l'appareil (CPT-12) ; envoi de la structure au BO-03 seulement en V1.5 (CPT-05) | Titre « Correspondance » : R-46 résolu | M-16 |
| MQ-035 et MQ-207 (sortie) | cadres existants | Aperçu, doublons, fin | — | — | — | — | — | **« Toutes · 8 412 », « 8 410 opérations importées, Compte courant · Banque Rivière », « Réglages retenus pour Banque Rivière », « Voir Banque Rivière »** après un fichier de 1 236 lignes de Caisse du Port | A-09 |

### 3.8 Connexion automatique, étape 3 sur 3 (MQ-204)

| Élément | Calque ou composant | Utilité | Usage et destination | États | Tokens | Responsive et dynamique | Modifiabilité admin | Cohérence | Écart |
|---|---|---|---|---|---|---|---|---|---|
| « Connexion · Étape 3 sur 3 » | textes | Situer l'étape | — | — | `figure-sm` | — | Fixe | R-46 résolu | — |
| Quatre comptes trouvés, cases à cocher | `Case à cocher` × 4 | Choisir les comptes à ajouter | Cases non reliées (statiques) | 3 cochées, carte à débit différé décochée « déjà incluse » (juste) | rayon 7 non lié dans le composant | — | Comptes : donnée du connecteur (BO-06, V1.5) ; « 24 derniers mois » : profondeur d'historique du connecteur, champ BO-06, jamais en dur | 4 812,40 + 4 320,12 = 9 132,52 € et crédit −192 740,59 € : justes | M-07 |
| Bouton principal | `Bouton/Principal` | Terminer | › MQ-209, glissement 420 ms | — | — | — | Fixe | Le retour depuis la fiche revient dans l'assistant | M-20 |

### 3.9 Budget : opérations (MQ-089)

| Élément | Calque ou composant | Utilité | Usage et destination | États | Tokens | Responsive et dynamique | Modifiabilité admin | Cohérence | Écart |
|---|---|---|---|---|---|---|---|---|---|
| Défilement vertical | cadre `VERTICAL`, 3 enfants fixes (onglets, barre système, indicateur) | Lire toute la liste | Contenu de 918 pt | — | — | Barre d'onglets fixe : conforme | — | R-52 jouable | — |
| Sous-onglets et pastilles de filtre | `ui/zone-44` 118 × 44, `Pastille/Inactive` × 4 | Budget, Opérations, Abonnements ; filtres | Sous-onglets › MQ-079, MQ-086, fondu 280 ms | — | — | « À catégoriser » sort du cadre à droite (482 pt pour 393) sans défilement horizontal défini | Catégories : BO-05 | Usage courant des pastilles défilantes, à déclarer | M-16 |
| Jours | en-têtes `overline` | Regrouper | — | — | — | — | Donnée | Vendredi 13 nov. (CB PHARMA DU PORT 1311, −14,20 €) et jeudi 12 nov. (VIR VERS PEA, −300,00 €) ajoutés : R-52 résolu pour les jours | — |
| Lignes d'opération (7) | `Ligne de liste/Type=Compte` | Opérations | Marché Plein Ciel › MQ-081 ; 3 lignes « À catégoriser » › MQ-122 (IA-10, V1.5, Signature) ; VIR VERS PEA › MQ-095 ; **Maison Bleue › MQ-084 (fiche enseigne)** ; **Dividende ETF Europe : aucune destination** | Heure en `warning` pour « À catégoriser », avec le mot | `Chiffres/figure`, signe + ou − | Titre en troncature finale | Enseignes et monogrammes : BO-04 ; catégories : BO-05 ; libellés bruts : donnée | « Une seule destination par ligne » (R-52) non appliqué ; montants avec vrai signe moins | A-10 |
| Outils | `Ligne de réglage/Chevron` × 2 | Règles, investissements programmés | › MQ-085, MQ-097 | — | — | — | — | Conforme | — |

### 3.10 Mouvement et transitions

| Transition | Prototype | Règle | Verdict |
|---|---|---|---|
| Cloche › centre de notifications | Glissement depuis la droite, 420 ms, depuis les 8 états de l'accueil et le profil | `duration-slow`, écran poussé | Conforme |
| Ligne « Annonce de LiVi » › feuille MQ-245 | Animation intelligente 420 ms ; fermeture par le voile, la poignée, la croix ou « Fermer » | Feuille jusqu'à 500 ms (Emil), fermeture dans le sens d'entrée, sur distance ou vitesse | Conforme ; glissement vers le bas à coder |
| Apparition et disparition de la pastille | Non spécifiée | Action fréquente : animation réduite (Emil), fondu `duration-fast` (160 ms), aucun rebond ; rien avec « Réduire les animations » | À spécifier |
| Profil › Aide › Signaler un problème | Glissement 420 ms, retour | Écran poussé | Conforme |
| Assistant d'import (MQ-208 › 251 › 252 › 253 › 035) | Glissement 420 ms à chaque étape | Écran poussé ; saisie jamais bloquée pendant la transition | Conforme |
| Fin d'assistant (MQ-204 › MQ-209, MQ-207 › MQ-209) | Glissement 420 ms empilé | La fin d'un parcours modal remplace la pile (la fiche devient l'écran courant, le retour ne rouvre pas l'étape 3) | M-20 |
| Opérations : sous-onglets et lignes | Fondu 280 ms et glissement 420 ms ; défilement vertical avec onglets fixes | Jetons de `navigation.md` | Conforme |
| Lot 7 (formats) | Aucun lien | Rotation, pliage, redimensionnement : l'écran garde son état (`responsive-et-formats.md`, « Continuité ») ; passage rail ↔ barre latérale sans réordonner les entrées | Non représentable dans Figma ; cassé par l'ordre différent des entrées (A-01) |
| Changement d'entrée du rail ou de la barre latérale | Non relié | Fondu 280 ms comme les onglets | À relier ou annoter (M-01) |
| « Réduire les animations » | Non représentable | Fondu de 280 ms à la place de tout mouvement | À vérifier en code |

Total : **121 éléments vérifiés** : 11 formats (matrice), 12 éléments propres aux formats, 7 lignes de composants, 15 du centre de notifications, 9 des fiches, 6 de l'Aide, 8 de l'import, 3 de MQ-204, 5 des opérations, 10 transitions, et les 35 éléments communs à MQ-024 recontrôlés format par format (en-tête, montant, période, graphique, lignes, onglets) sans être redécrits.

## 4. Écarts

Niveaux : **Bloquant** (règle absolue, donnée fausse ou parcours impossible), **Important** (incohérence visible, règle du cahier des charges non appliquée, accessibilité), **Amélioration**.

**Aucun bloquant.** Aucun conseil ni bouton « Acheter » ou « Vendre » (le seul « Vendre » détecté est « VENDREDI ») ; mentions de neutralité présentes (Aide, annonce) ; aucune couleur codée en dur dans les cadres ; aucun point d'exclamation ni emoji ; vouvoiement partout ; vrai signe moins (U+2212) sur tous les montants négatifs ; variations du montant héros avec signe et flèche ; montants justes (fiches, connexion, opérations, notifications cohérentes avec MQ-089).

### Importants

| N° | Cadres | Écart | Preuve | Correction proposée |
|---|---|---|---|---|
| A-01 | MQ-141, MQ-149, MQ-246, MQ-247 ; composants `6:205`, `186:537` ; `responsive-et-formats.md` ; code | La navigation change selon le format. Barre d'onglets et rail : Accueil, Patrimoine, Budget, Marchés, LiVi IA. Barre latérale iPad : Accueil, Patrimoine, **Marchés, LiVi IA, Budget, Réglages**. Barre latérale web : **Tableau de bord**, Patrimoine, Marchés, LiVi IA, Budget (icône `activite`, alors que l'iPad utilise `budget`), Import, Rapports, Réglages. Le composant principal porte encore « Activité » et sa description (« mêmes entrées que la barre d'onglets ») est fausse. Une rotation de l'iPad (rail › barre latérale) réordonne les entrées. « Réglages » double l'avatar, seul accès au profil selon `navigation.md`. Le code suit encore un autre ordre (`apps/mobile` : « Activité » ; `apps/web` : pas de Budget, avec Monde et Espace de travail). | Textes et instances lus ; captures MQ-141, MQ-149, MQ-246 | Un seul ordre partout : Accueil, Patrimoine, Budget, Marchés, LiVi IA, puis Import et Rapports sur le web ; « Accueil » sur toutes les surfaces (ou décision écrite pour « Tableau de bord » sur le web) ; icône `Icône/budget` ; décider de l'entrée Réglages (question au porteur) ; corriger le composant `6:205`, sa description, `responsive-et-formats.md` et les deux `BarreLaterale.tsx` |
| A-02 | MQ-246, MQ-247, MQ-141 ; composants `186:537`, `6:205` | Cibles de navigation sous 44 pt sur des écrans tactiles : entrées du rail de 69 × 42 pt ; entrées de la barre latérale de 215 × 40 pt sur iPad. Non reliées, elles échappent au contrôle automatique des cibles reliées. | Dimensions lues | Entrées d'au moins 44 pt (56 pt conseillé pour le rail, icône et libellé) ou `ui/zone-44` ; étendre le contrôle des 44 pt aux composants de navigation, reliés ou non |
| A-03 | MQ-132 (confirmé), MQ-130 (probable) | Textes tronqués : « Banque Riv… » et « 2 comptes et… » sur Fold plié ; « Banque Rivière » dans 106 pt sur Galaxy S. La colonne de droite de `Ligne de liste` est figée par la fraîcheur (126 pt pour « À renouveler · 20 nov. ») et réduit le titre à 98 pt. `figma.md` exige « aucun texte tronqué » à chaque lot ; la décision 0007 annonçait « aucun débordement ». | Capture MQ-132 ; largeurs lues | Sous 375 pt : fraîcheur sous le sous-titre (ligne à trois niveaux) ou titre sur deux lignes ; montant toujours entier ; ajouter un nom d'établissement réel long au jeu de cas extrêmes (break-ui) |
| A-04 | Toutes les maquettes lues ; composant `176:163` | Les nombres utilisent l'espace ordinaire (U+0020) entre les milliers et avant « € » ou « % » (points de code du montant héros : `31 38 34 20 33 32 30 2c 35 37 20 20ac`). `packages/core/src/format.ts`, qui fait foi pour la mise en forme, produit l'espace fine insécable (U+202F) et l'espace insécable (U+00A0). Effets : rendu plus lâche que le code, coupure possible entre « 184 » et « 320,57 € » à 200 %, chaînes copiées telles quelles à l'intégration. | Indicateurs `ESP_NORM` et `UNIT:20` sur 60 textes chiffrés | Remplacer dans le fichier (composants d'abord) ; écrire la règle dans `figma.md` et corriger l'exemple de `CLAUDE.md` §5 |
| A-05 | 11 accueils du lot 7, MQ-248 | La fraîcheur en retard (« Relevé · 30 sept. ») n'est signalée que par l'orange `etat/warning`, sans icône ni mot ; le jeton `warning` exige « toujours avec une icône » et CPT-08 un état explicite (à jour, en retard, en erreur). « À renouveler · 20 nov. » porte le mot, pas « Relevé · 30 sept. ». | Couleur et texte des lignes ; usage du jeton dans `tokens.json` | Icône `Icône/horloge` ou `alerte` devant la fraîcheur, ou mot (« Ancien · relevé du 30 sept. »), dans le composant `Ligne de liste` |
| A-06 | Composant `176:164`, 12 accueils | La pastille a une largeur fixe de 20 pt : « 99+ », exigé par USR-09 et la décision 0007, ne tient pas ; aucune variante 99+ ni masquée. | `primaryAxisSizingMode` FIXED, 20 × 20 | Largeur ajustée au contenu, minimum 20 pt, marges `space-1` ; variantes 1 chiffre, 2 chiffres, 99+ ; annoter « masquée à zéro » |
| A-07 | MQ-019, MQ-245 | Le centre ne montre pas les non-lues : aucune marque, alors que la cloche affiche « 3 » ; pas de « Tout marquer comme lu ». Quatre lignes à chevron sur sept n'ont pas de destination (Dividende, Grosse dépense, Votre semaine, Nouvelle connexion) ; le bouton réglages (USR-09 « réglages par type ») non plus. | Réactions lues ; capture MQ-019 | Point de non-lu (avec libellé lecteur d'écran « non lue ») sur 3 lignes cohérentes avec la pastille ; relier chaque ligne (MQ-081 ou MQ-089, MQ-222, réglages des notifications à inscrire à l'inventaire) ou retirer le chevron ; action « Tout marquer comme lu » |
| A-08 | MQ-019, MQ-245 | Contenu du centre hors périmètre MVP et hors règle de navigation, sans annotation : « Dividende reçu » est une opération (va dans Budget › Opérations selon `navigation.md`) ; « Grosse dépense » relève de GES-03 (V1.5) ; l'annonce, de USR-12 (V1.5) ; « Consigne déclenchée … Ordre préparé » ouvre IA-04 (V2) sans la mention « soumis à l'avis juridique » ; « Votre semaine en un coup d'œil » n'existe pas au catalogue ; aucun événement d'import ni de synchronisation, pourtant types MVP de USR-09. | Textes lus ; catalogue USR-09 | Deux états : « MVP » (consignes, imports, synchronisations, sécurité) et « V1.5 » (annonces, alertes) ; retirer le dividende ou le ramener à un événement d'import ; mention « non disponible, soumis à l'avis juridique » sur la ligne d'ordre ; inscrire le résumé hebdomadaire au catalogue ou le retirer |
| A-09 | MQ-253 › MQ-035 › MQ-207 | R-15 en partie seulement : les étapes 1 à 3 sont propres à Caisse du Port (fichier de 1 236 lignes), mais l'étape 3 renvoie à l'aperçu de Banque Rivière (« Toutes · 8 412 ») puis à « 8 410 opérations importées, Compte courant · Banque Rivière », « Réglages retenus pour Banque Rivière », « Voir Banque Rivière ». | Lien du bouton de MQ-253 ; textes de MQ-035 et MQ-207 | Variantes de MQ-035 et MQ-207 pour Caisse du Port (1 236 lignes, période cohérente, « Préréglage personnel retenu », « Voir Caisse du Port » › fiche de l'établissement créé), à inscrire à l'inventaire |
| A-10 | MQ-089 | R-52 en partie : les jours du 12 et du 13 novembre sont là, mais « une seule destination par ligne d'opération » n'est pas appliqué : Marché Plein Ciel › détail (MQ-081), lignes « À catégoriser » › catégorisation assistée (MQ-122, IA-10, V1.5, Signature), virement › MQ-095, **Maison Bleue › fiche enseigne (MQ-084)**, dividende sans destination. | Réactions lues | Toute ligne › détail de l'opération (MQ-081 ou sa variante), d'où l'on ouvre l'enseigne ou la catégorisation ; MQ-122 seulement depuis une entrée LiVi IA |
| A-11 | MQ-250 | Aide jouable à moitié : 7 lignes sur 8 sans destination (questions fréquentes et documents « En ligne »), recherche non reliée, aucun écran de navigateur intégré, aucun état hors connexion des documents légaux (USR-13). | Réactions lues ; catalogue USR-13 | Cadre « Article d'aide dans le navigateur intégré » (barre avec « Terminé », adresse, partage) et état hors connexion, à inscrire à l'inventaire ; relier au moins une question et un document |
| A-12 | MQ-248 | La ligne « Contrat Horizon Vie » n'ouvre rien, alors que la même ligne ouvre le compte sur MQ-249 (CPT-11 : « la fiche détaille chaque compte ») ; la seule mise à jour proposée est la lecture de relevé PDF (MQ-039, CPT-10, V1.5, Signature) : un client Essentiel ou Plus n'a aucune voie au MVP (import de fichier ou saisie de la valeur). | Réactions lues ; catalogue CPT-10, CPT-11 | Relier la ligne à un détail du contrat (supports) ; ajouter « Mettre à jour la valeur » (saisie, MVP) et garder « Importer un relevé » quand l'offre le permet ; question au porteur sur la variante Essentiel |
| A-13 | MQ-149 ; composant `6:246` | Avatar « JR » dans l'en-tête web alors que la personne de démonstration est Camille Martin (« CM » sur tous les autres formats). | Texte `initiales` | Remplacer la valeur par défaut du composant par « CM » ou la surcharger dans MQ-149 |

### Améliorations

| N° | Écart | Correction |
|---|---|---|
| M-01 | Les 11 cadres du lot 7 n'ont aucun lien ; l'exception n'est écrite que dans `parcours-utilisateur.md` §10, pas dans la règle 6 de `figma.md` (« chaque écran a une entrée et une sortie ») ni sur la page. | Écrire l'exception dans `figma.md` et poser une annotation « non jouable, voir Parcours iPhone » sur les pages 10 et 11 |
| M-02 | Les cadres du lot 7 n'ont pas de pastille de statut (« MQ-… · À valider »), alors que les cadres à concevoir de la même page et les écrans iPhone ont la leur. | Poser la pastille « À valider » sur MQ-125 à MQ-149, MQ-246, MQ-247 |
| M-03 | Titres des sections : « 08 · Autres formats · 23 maquettes » sur la page 10 (27 à l'inventaire) et « 09 · Web · 33 maquettes » sur la page 11 (43). | Mettre à jour les titres et les comptes |
| M-04 | Noms de cadres différents de l'inventaire : MQ-248 et MQ-249 sans « (relevé PDF) » et « (clé en lecture) » ; MQ-251 à MQ-253 avec d'autres libellés. | Reprendre les noms de `maquettes.json` |
| M-05 | Rail : onglet actif signalé par la seule teinte (la barre latérale de MQ-141 a un fond) ; libellé « Patrimoine » à 3 pt des bords, comportement à 200 % non défini ; onglets décalés de 0,5 pt. | Indicateur sous l'icône active, comme la barre latérale ; règle à 200 % (icônes seules avec libellé au lecteur d'écran, ou passage à la barre latérale) |
| M-06 | Montant héros : variante Texte agrandi avec 3 textes sans style ; montant et variation non agrandis sans explication ; description de la variante Standard (« abréviation 184,3 k€ en format étroit ») contraire à la variante Étroit et à `responsive-et-formats.md` ; textes par défaut hors données communes (« Mis à jour 09:42 », sans « à »). | Annoter la variante (styles simulés à 200 %, montant plafonné) ; corriger les descriptions ; textes par défaut repris des données communes |
| M-07 | Valeurs non liées aux variables dans les composants : écarts de 2 pt (onglets de la barre d'onglets et du rail, textes de `Ligne de liste`) et 4 pt (`droite`), 6 pt (barre système), rayon 10 des tuiles de `Ligne de réglage`, rayon 7 de `Case à cocher`, rayon 3. | Lier à `space-1` ou ramener à l'échelle ; rayons à `radius-xs` (décision 0005) |
| M-08 | Galaxy S (MQ-130, 360 pt) : barre d'onglets de 328 pt (largeur moins 32), alors que la règle dit largeur moins 24 sous 375 pt ; les marges de 16 pt, elles, suivent la règle « 12 pt sous 360 pt ». | Aligner les deux seuils dans `responsive-et-formats.md`, puis la maquette |
| M-09 | Zones sûres : barre de gestes Android absente des formats Android (MQ-130, 132, 134, 136, 246) ; web mobile (MQ-138) sans annotation `env(safe-area-inset-bottom)` sous la barre d'onglets. | Ajouter le gabarit de barre de gestes Android ; annoter la zone sûre web |
| M-10 | iPhone SE (MQ-125) : une seule ligne d'établissement dessinée, les deux autres absentes et le cadre sans défilement : « une ligne visible avant défilement » n'est pas représenté. | Dessiner les trois lignes et déclarer le défilement vertical avec onglets fixes, comme MQ-089 |
| M-11 | Point actuel du graphique coupé au bord droit de la colonne (MQ-141, MQ-149). | Marge intérieure de la moitié du point |
| M-12 | Web (MQ-149) : pastille posée hors de l'en-tête (calque de premier niveau), qui se décalera si l'en-tête change ; icônes Import (`plus`) et Rapports (`filtre`) peu parlantes ; orbes absents du web, présents sur iPad. | Pastille dans le bouton cloche de `En-tête web` ; icônes dédiées ; décider des orbes sur le web |
| M-13 | Flèches : ▲ et ▼ dans les maquettes et `tokens.json`, ↑ et ↓ dans `packages/core` (`variation()`). | Un seul jeu, écrit dans `tokens.json` et repris par `packages/core` |
| M-14 | MQ-019 : en-têtes « Aujourd'hui », « Cette semaine » en style `overline` mais en casse normale (ailleurs en capitales) ; état vide du centre non dessiné. | Capitales, ou style dédié ; cadre « Notifications : vide » |
| M-15 | MQ-245 : « Ajouter au calendrier » sans lien ni annotation (action système) ; aucune image ni texte alternatif annoté, alors que USR-12 les prévoit. | Annoter l'action système ; ajouter une image d'exemple avec son texte alternatif |
| M-16 | Import et opérations : contrôles non reliés et non annotés (« Changer » de MQ-251, valeurs de MQ-252 et MQ-253, « Choisir une image », « Type » et « Couleur » de MQ-208) ; texte de MQ-208 « LiVi s'en souviendra » alors que MQ-253 en fait un choix ; rangée de pastilles de MQ-089 coupée au bord sans défilement horizontal déclaré. | Annoter « non prototypé » ; « Vous pourrez retenir ces réglages » ; déclarer le défilement horizontal |
| M-17 | Fiches : monogramme « PE » (tiré du compte) sur MQ-249, « HV » (tiré de l'établissement) sur MQ-248 ; « Ajouter un contrat » arrive sur « Nouveau compte » (même famille que R-14). | Une règle de monogramme pour les comptes ; titre d'arrivée « Nouveau contrat » ou libellé « Ajouter un compte » |
| M-18 | Aide : « Réponse sous 2 jours ouvrés dans vos notifications » : les réponses du support ne sont pas un type de USR-09, et le délai n'est ni décidé ni administrable. | Ajouter le type « Support » à USR-09 ; délai réglé dans BO-19 et validé par le porteur |
| M-19 | iPad paysage (MQ-141) : marges de 24 pt ; `disposition()` donne 32 pt en classe étendue ; `responsive-et-formats.md` ne dit rien. | Trancher, puis aligner la maquette, la doc et le code |
| M-20 | Fin d'assistant empilée (MQ-204 › MQ-209, MQ-207 › MQ-209) : le retour depuis la fiche rouvre l'étape 3 de la connexion ou la fin de l'import. | Annoter « la fiche remplace la pile » ; en code, remise à zéro de la pile de l'assistant |

### Renvois aux rapports précédents (non recomptés)

| Point | Statut au 20 nov. |
|---|---|
| R-13 (Aide absente) | Résolu : MQ-010 › MQ-250. « Se déconnecter » va toujours directement à MQ-001 en fondu, sans confirmation |
| R-14 (destinations des lignes) | Résolu pour Horizon Vie (› MQ-248) et Atlas Bourse (› MQ-249) depuis 8 écrans. Toujours ouvert : « Compte courant » de MQ-209 et MQ-236 › MQ-089 (la revue proposait MQ-033) |
| R-15 (Caisse du Port) | En partie : voir A-09 |
| R-46 (étape 3 sur 3, « Correspondance ») | Résolu (MQ-204, MQ-253) |
| R-52 (jours manquants, destinations) | En partie : voir A-10 |
| A-08 du 19 nov. (accueil hors iPhone) | Fait ; constats nouveaux A-01 à A-03 |
| M-06 du 19 nov. (variantes du montant) | Fait ; constats nouveaux M-06 |
| M-08 du 19 nov. (cloche au MVP) | Fait ; constats nouveaux A-06 à A-08 |

## 5. Manques

1. États web : survol, focus clavier, palette ⌘K, barre latérale repliée à 72 px (600 à 1023 px).
2. Place du bandeau unique (maintenance, incident, alerte, annonce) dans les dispositions à deux colonnes (MQ-141, MQ-149) et avec le rail (MQ-246, MQ-247).
3. Feuille Ajouter sur iPad et web (feuille, fenêtre flottante ou menu) ; mode discret au clavier sur le web.
4. Texte agrandi (200 %) sur le rail, la barre latérale et les lignes d'établissement en format étroit.
5. Centre de notifications : état vide, non-lues, réglages par type, variante MVP sans les fonctions V1.5 (A-07, A-08).
6. Navigateur intégré et état hors connexion de l'Aide (A-11) ; fin d'import propre à Caisse du Port (A-09).
7. Thèmes Clair et Pastel non recapturés dans cet audit (planches du 19 nov. dans `figma.md`).

## 6. Corrections

| Faites | À faire |
|---|---|
| Aucune : audit en lecture seule, aucune maquette modifiée. | **Figma** (agent `design-system`, skill `livi-maquette-figma`) : A-01 (composant `6:205`, MQ-141, MQ-149), A-02, A-03, A-04 (composants puis cadres), A-05 (`Ligne de liste`), A-06, A-07, A-09 (variantes de MQ-035 et MQ-207 à inscrire), A-10, A-11 (cadre de navigateur intégré à inscrire), A-12, A-13, M-01 à M-17, M-20. **Docs** (agent `documentaliste`) : `responsive-et-formats.md` (A-01, M-08, M-19), `figma.md` (M-01, A-04, pages et compte), `CLAUDE.md` §5 (A-04, exemple), `etat-du-projet.md` (nuancer « aucun écart » une fois les constats traités), catalogue USR-09 (A-08, M-18). **Code** (agents `mobile-ios` et `frontend-web`) : `apps/mobile/src/components/BarreLaterale.tsx` et `apps/web/src/components/BarreLaterale.tsx` (A-01, cibles de 44 pt), `packages/core` `variation()` (M-13), `formats.ts` (M-19). **Questions au porteur** : entrée Réglages dans la barre latérale et nom « Tableau de bord » sur le web (A-01) ; voie de mise à jour d'Horizon Vie hors Signature (A-12) ; contenu du centre au MVP (A-08) ; délai de réponse du support (M-18). Repasser les cadres modifiés en « à valider », puis `pnpm docs:generate`. |

## 7. Statut

**À reprendre.** Les règles absolues sont tenues : neutralité, jetons, vrai signe moins, signe et flèche sur les variations, vouvoiement, ton sans exclamation. L'accueil existe maintenant sur tous les formats avec les bonnes dimensions, et les restes de la revue sont en grande partie résolus (Aide, fiches, étape 3, jours manquants). Quatre points restent avant validation :

- La navigation n'a pas le même ordre selon le format.
- Les entrées de navigation sont sous 44 pt en tablette.
- Deux libellés sont tronqués en format étroit.
- Les nombres n'utilisent pas les espaces du code.

Côté parcours, le centre de notifications ne dit pas lesquelles sont nouvelles et mélange MVP et V1.5. L'import de Caisse du Port se termine sur les chiffres de Banque Rivière.

## Historique

| Date | Auteur | Changement |
|---|---|---|
| 20 nov. 2026, 2 h 40 | Agent « Figma UX & Spec Auditor » | Premier audit : lot 7 (11 cadres), centre de notifications (MQ-019, MQ-245, pastille), restes de la revue (MQ-248 à MQ-253, MQ-204, MQ-208, MQ-010, MQ-089), composants Montant héros, Pastille de notification et Rail de navigation ; 0 bloquant, 13 importants, 20 améliorations |

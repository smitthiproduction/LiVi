# Formats d'écran et adaptation

Chaque écran existe en une seule version de contenu, disposée selon la **classe de taille** de la fenêtre et le **format** de l'appareil. Logique testée : `apps/mobile/src/theme/formats.ts` (`classeDeTaille`, `detecterFormat`, `disposition`, `globeAutorise`) ; `disposition().navigation` vaut `onglets`, `rail` ou `barre-laterale`, et `largeurNavigation` 0, 72 ou 248.

## Classes de taille (largeur de fenêtre en points)

| Classe | Largeur | Navigation | Colonnes | Exemples |
|---|---|---|---|---|
| Compacte | < 600 | Barre d'onglets flottante | 1 | iPhone, Samsung Galaxy S, pliable plié, web mobile |
| Moyenne | 600 – 839 | Rail de 72 pt (icônes et libellés des cinq onglets) | 2, maître-détail ; l'accueil reste en une colonne | iPad portrait, pliable déplié, fenêtre partagée |
| Étendue | 840 – 1199 | Barre latérale de 248 pt | 2, globe à côté de son panneau | iPad paysage, pliable déplié paysage, petit portable |
| Large | 1200 – 1599 | Barre latérale | 3 | iPad Pro 13 pouces paysage, portable |
| Très large | ≥ 1600 | Barre latérale | 3 | Grand moniteur |

Ces seuils reprennent les classes de taille Android (Material 3) et correspondent aux classes compact et regular d'Apple. Le rail de la classe moyenne reprend la barre d'onglets à la verticale (mêmes destinations, même ordre, même onglet actif), comme la navigation web de 72 px entre 600 et 1023 px (décision 0007).

## Formats reconnus

| Format | Repère | Adaptation |
|---|---|---|
| Téléphone | Plus petit côté < 428 pt (iPhone SE à iPhone standard, Samsung compacts) | Une colonne, marges 16 pt (12 pt sous 360 pt) |
| Téléphone grand | Plus petit côté ≥ 428 pt (iPhone Pro Max, Galaxy Ultra) | Une colonne, cartes plus aérées |
| Pliable, écran externe étroit | Rapport ≥ 2,3 et plus petit côté < 380 pt (type Galaxy Z Fold plié) | Une colonne dense, montants abrégés si nécessaire, pastilles défilantes |
| Pliable, format passeport | Écran externe large, rapport < 2,05, plus petit côté 380 – 600 pt (type Pixel Fold, OnePlus Open pliés) | Une colonne confortable, graphiques plus larges |
| Pliable à clapet | Écran intérieur haut, rapport ≥ 2,05 (type Galaxy Z Flip) | Une colonne ; écran externe : widget et notifications seulement |
| Pliable déplié | Quasi carré, rapport < 1,35 | Maître-détail, rail de navigation (barre latérale en paysage si la largeur dépasse 840 pt) ; posture « table » (semi-ouvert) : contenu en haut, contrôles en bas, une colonne |
| Tablette | Plus petit côté ≥ 600 pt (iPad, tablettes Android) | Rail en portrait (moyenne), barre latérale en paysage (étendue), maître-détail, multitâche (écran partagé, Stage Manager) |
| Bureau | Web ≥ 1024 px | Grille de 12 colonnes, barre latérale de 248 px |

**Continuité** : à l'ouverture ou la fermeture d'un pliable, à la rotation et au redimensionnement, l'écran garde son état (onglet, défilement, saisie en cours).

## Web : points de rupture

| Largeur | Barre latérale | Marges |
|---|---|---|
| ≥ 1024 px | 248 px, libellés | 40 px |
| 600 – 1023 px | 72 px, icônes | 24 px |
| < 600 px | Masquée, barre d'onglets en bas | 16 px |

## Règles par élément

- **Montant héros** : jamais tronqué. Cinq variantes du composant Figma : Standard ; Baisse (flèche ▼ et vrai signe moins, « −1,18 % ») ; Étroit (écran externe étroit, style `display-title`, un cran plus petit) ; 7 chiffres (« 1 284 320,57 € » tient au style `hero` sur 361 pt, sinon style réduit, abréviation « 1,28 M€ » en dernier recours, valeur complète au lecteur d'écran) ; Texte agrandi (taille dynamique à 200 % : libellé, écart et fraîcheur passent à la ligne, la variation passe sous le montant).
- **Barre d'onglets** : libellés jamais coupés ; sous 375 pt la barre fait la largeur moins 24 pt et un libellé long (« Patrimoine ») peut déborder dans l'espace vide des onglets voisins.
- **Cloche** : pastille du nombre de non-lues en haut à droite (fond `etat/danger`, chiffre `texte/on-accent`), masquée à zéro, « 99+ » au-delà, annoncée au lecteur d'écran.
- **Tableaux** : colonnes prioritaires en compact (nom, valeur, variation), le reste dans le détail ; défilement horizontal interdit sur la page entière.
- **Graphiques** : plein écran en paysage sur téléphone ; périodes multiples seulement en moyenne et plus.
- **Globe** : en compact, plein écran avec feuille d'informations ; en étendue, côte à côte.
- **Cibles tactiles** : 44 × 44 pt minimum ; espacement de 8 pt.
- **Zones sûres** : encoche, Dynamic Island, barre de gestes, charnière (aucun contenu interactif sous la charnière).

## Accueil par format (lot 7)

| Classe | Cadres | Disposition |
|---|---|---|
| Compacte | MQ-125 (iPhone SE), MQ-127 (Pro Max), MQ-130 (Galaxy S), MQ-132 (Fold plié), MQ-134 (passeport), MQ-136 (Flip), MQ-138 (web mobile) | Une colonne comme MQ-024 ; barre d'onglets en bas. iPhone SE : graphique de 56 pt et une seule ligne d'établissement visible avant défilement. Fold plié : marges de 12 pt, variante Étroit du montant. Web mobile : pas de barre système, barre d'onglets à 16 px du bas. |
| Moyenne | MQ-246 (Fold déplié), MQ-247 (iPad portrait) | Rail de 72 pt ; une colonne de contenu, marges de 24 pt ; graphique de 160 pt (Fold) ou 320 pt (iPad). |
| Étendue | MQ-141 (iPad paysage) | Barre latérale de 248 pt (Accueil, Patrimoine, Marchés, LiVi IA, Budget, Réglages) ; en-tête sur toute la largeur ; deux colonnes : montant, période et graphique de 320 pt à gauche, « Mes établissements » sur 360 pt à droite. |
| Large (web) | MQ-149 | Barre latérale et en-tête web ; deux colonnes : montant, période et graphique de 320 px à gauche, « Mes établissements » sur 400 px à droite ; marges de 40 px ; pastille de non-lues sur la cloche de l'en-tête. |

## Vérification
Chaque écran est contrôlé sur la matrice de `docs/qualite/matrice-appareils.md`, dans les trois thèmes, avec texte agrandi.

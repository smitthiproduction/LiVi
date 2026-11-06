# Formats d'écran et adaptation

Chaque écran existe en une seule version de contenu, disposée selon la **classe de taille** de la fenêtre et le **format** de l'appareil. Logique testée : `apps/mobile/src/theme/formats.ts` (`classeDeTaille`, `detecterFormat`, `disposition`, `globeAutorise`).

## Classes de taille (largeur de fenêtre en points)

| Classe | Largeur | Navigation | Colonnes | Exemples |
|---|---|---|---|---|
| Compacte | < 600 | Barre d'onglets flottante | 1 | iPhone, Samsung Galaxy S, pliable plié, web mobile |
| Moyenne | 600 – 839 | Barre latérale | 2, maître-détail | iPad mini portrait, pliable déplié portrait, fenêtre partagée |
| Étendue | 840 – 1199 | Barre latérale | 2, globe à côté de son panneau | iPad paysage, pliable déplié paysage, petit portable |
| Large | 1200 – 1599 | Barre latérale | 3 | iPad Pro 13 pouces paysage, portable |
| Très large | ≥ 1600 | Barre latérale | 3 | Grand moniteur |

Ces seuils reprennent les classes de taille Android (Material 3) et correspondent aux classes compact et regular d'Apple.

## Formats reconnus

| Format | Repère | Adaptation |
|---|---|---|
| Téléphone | Plus petit côté < 428 pt (iPhone SE à iPhone standard, Samsung compacts) | Une colonne, marges 16 pt (12 pt sous 360 pt) |
| Téléphone grand | Plus petit côté ≥ 428 pt (iPhone Pro Max, Galaxy Ultra) | Une colonne, cartes plus aérées |
| Pliable, écran externe étroit | Rapport ≥ 2,3 et plus petit côté < 380 pt (type Galaxy Z Fold plié) | Une colonne dense, montants abrégés si nécessaire, pastilles défilantes |
| Pliable, format passeport | Écran externe large, rapport < 2,05, plus petit côté 380 – 600 pt (type Pixel Fold, OnePlus Open pliés) | Une colonne confortable, graphiques plus larges |
| Pliable à clapet | Écran intérieur haut, rapport ≥ 2,05 (type Galaxy Z Flip) | Une colonne ; écran externe : widget et notifications seulement |
| Pliable déplié | Quasi carré, rapport < 1,35 | Maître-détail, barre latérale ; posture « table » (semi-ouvert) : contenu en haut, contrôles en bas, une colonne |
| Tablette | Plus petit côté ≥ 600 pt (iPad, tablettes Android) | Barre latérale, maître-détail, multitâche (écran partagé, Stage Manager) |
| Bureau | Web ≥ 1024 px | Grille de 12 colonnes, barre latérale de 248 px |

**Continuité** : à l'ouverture ou la fermeture d'un pliable, à la rotation et au redimensionnement, l'écran garde son état (onglet, défilement, saisie en cours).

## Web : points de rupture

| Largeur | Barre latérale | Marges |
|---|---|---|
| ≥ 1024 px | 248 px, libellés | 40 px |
| 600 – 1023 px | 72 px, icônes | 24 px |
| < 600 px | Masquée, barre d'onglets en bas | 16 px |

## Règles par élément

- **Montant héros** : réduit d'un cran en écran externe étroit ; jamais tronqué (abréviation « 184,3 k€ » avec la valeur complète au lecteur d'écran).
- **Tableaux** : colonnes prioritaires en compact (nom, valeur, variation), le reste dans le détail ; défilement horizontal interdit sur la page entière.
- **Graphiques** : plein écran en paysage sur téléphone ; périodes multiples seulement en moyenne et plus.
- **Globe** : en compact, plein écran avec feuille d'informations ; en étendue, côte à côte.
- **Cibles tactiles** : 44 × 44 pt minimum ; espacement de 8 pt.
- **Zones sûres** : encoche, Dynamic Island, barre de gestes, charnière (aucun contenu interactif sous la charnière).

## Vérification
Chaque écran est contrôlé sur la matrice de `docs/qualite/matrice-appareils.md`, dans les trois thèmes, avec texte agrandi.

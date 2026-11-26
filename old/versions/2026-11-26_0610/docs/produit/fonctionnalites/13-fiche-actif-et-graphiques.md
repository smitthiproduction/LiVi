# Module 13 — Fiche actif et graphiques

La fiche d'un actif change selon sa classe et sa sous-classe : on ne regarde pas une obligation comme une action, ni un appartement comme un ETF. Le graphique reprend la richesse de Revolut (intervalles, types, indicateurs, dessins, périodes multiples) sans jamais devenir un écran de trading.

Fonctionnalités : FIC-01 à FIC-11. Onglets : `ongletsFiche(classe, sousClasse)` dans `@livi/asset-classes`.

## 1. En-tête commun

Cours ou valeur (montant héros), variation du jour en valeur et en %, plus haut et plus bas du jour pour les actifs cotés, fraîcheur (« différé 15 min », « clôture », « estimation du 3 nov. »), ma position (quantité, valeur, plus-value). Barre d'action : **Ajouter une opération** · **Créer une consigne**.

## 2. Onglets par classe

Les onglets complets de chaque classe et sous-classe sont dans `docs/produit/classes-actifs.md`. Points clés :

- **Actions** — *Statistiques clés* en trois sous-onglets comme Revolut : Cours et volume (ouverture, fourchettes du jour, 52 semaines et 5 ans, bêta, volume et volume moyen, capitalisation, actions en circulation, flottant) ; Données par action (BPA, ventes, valeur comptable, flux de trésorerie, trésorerie, rendement et montant du dividende, taux de distribution) ; Ratios (cours/bénéfice, prix/ventes, cours/valeur comptable, prix/flux, marges brute, d'exploitation et nette, rentabilité des capitaux propres et des actifs). *Données financières* : compte de résultat, bilan, trésorerie, annuel et trimestriel, en barres puis « Tout afficher ».
- **Fonds et ETP** — Composition (lignes, pays, secteurs, devises), frais, performance contre l'indice et écart de suivi, distributions, **recouvrement avec mes autres fonds**, documents d'informations clés.
- **Obligations** — Caractéristiques (émetteur, coupon, fréquence, type de taux, échéance, rang, remboursement anticipé, montant minimum), échéancier des coupons, rendement à maturité et courant, duration et sensibilité, notation avec agence et date.
- **Immobilier** — Valeur retenue et estimation par ventes comparables, loyers et charges, rendement brut et net, crédit associé, fiscalité.
- **Crypto** — Réseau, portefeuilles et adresses publiques, staking et rendement, statut MiCA de la plateforme, fiscalité.
- **Dérivés** — Sous-jacent, levier, barrière, échéance, sensibilités, avertissement de produit complexe.

## 3. Graphique

| Élément | Détail |
|---|---|
| Intervalles | 1 min, 2 min, 5 min, 10 min, 1 h, 1 jour, 1 semaine ; périodes rapides 5J, 1M, 3M, 6M, 1A, 5A, Tout |
| Types | Barres, chandeliers, chandeliers creux, barres HLC, ligne, ligne avec repères, ligne en escalier, zone, zone HLC, ligne de base |
| Échelle | Prix, pourcentage, logarithmique, automatique |
| Indicateurs | Bibliothèque avec recherche (plus haut et bas 52 semaines, moyennes mobiles simple et exponentielle, RSI, MACD, bandes de Bollinger, ATR, ADX, Aroon, oscillateurs, volumes…) |
| Dessins | Réticule, ligne de tendance, niveaux, canaux, Fibonacci, motifs, texte, règle de mesure, zoom, aimant, verrouillage, masquage, suppression |
| Périodes multiples | Grille de 2 à 4 graphiques du même actif (web et tablette), réticule synchronisé |
| Comparaison | Superposer un indice ou un actif en base 0 % |
| Mes repères | Achats, ventes, dividendes, consignes et seuils d'alerte sur la courbe |

Les indicateurs sont des calculs ; LiVi n'en tire aucun signal d'achat ou de vente et n'affiche aucune flèche « acheter ».

## 4. Données tierces encadrées (FIC-09)

Revolut affiche une « Suggestion » maison et des notations d'analystes. LiVi **n'émet aucune suggestion**. Les consensus d'analystes et notations d'agences peuvent être affichés comme données brutes (nombre d'avis, prix cible moyen, agence, date), avec la mention « Donnée tierce, pas un avis de LiVi », désactivables dans les réglages, et seulement après validation juridique et licence de diffusion.

## 5. Espace de travail web (FIC-11)

Widgets déplaçables : Graphique, Détails de l'actif, Actualités, Événements, Activité, Toutes les positions, Répartition, Outils d'analyse. Dispositions enregistrées par appareil.

## 6. Contraintes

- L'intraday dépend de la licence ; sans elle, clôture quotidienne.
- Sur téléphone, le graphique passe en plein écran en paysage (FMT-05).

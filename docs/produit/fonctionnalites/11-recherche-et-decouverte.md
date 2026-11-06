# Module 11 — Recherche et découverte

Trouver n'importe quoi en deux secondes (une position, une transaction, un actif du marché, une enseigne) et explorer un marché avec des filtres qui parlent la langue de chaque classe d'actifs.

Fonctionnalités : REC-01 à REC-09 (`docs/produit/catalogue.md`). Données : `@livi/asset-classes` (périmètres, filtres, collections, `appliquerCriteres`).

## 1. Recherche globale

- **Où** : tirer vers le bas sur l'accueil (iPhone, Android), ⌘K / Ctrl K sur le web, champ en tête de l'onglet Marchés.
- **Périmètres** (pastilles sous le champ) : Tout, Mes positions, Listes de surveillance, Actions, Fonds et ETP, Obligations, Crypto, Matières premières, Dérivés, Indices, Devises, Enseignes, Transactions, Aide et réglages.
- **Résultats** : groupés par périmètre, puis tableau à la Revolut (actif, type, cours, variation du jour, étoile de surveillance). Une position détenue apparaît en premier avec sa valeur.
- **Tolérance** : sans accents, fautes de frappe, synonymes (« or » trouve XAU et les ETC or), codes (ISIN, mnémonique, nom court).
- **Confidentialité** : la recherche dans les données de l'utilisateur tourne sur l'appareil. Seule la recherche dans le référentiel d'actifs interroge le serveur, sans identifiant de l'utilisateur dans la requête.

## 2. Filtres adaptés à chaque classe

Chaque liste (positions, catalogue, résultats) propose :

1. **Les filtres communs** : enveloppe, établissement, devise, membre ou entité, poids, plus-value, source de la donnée, fraîcheur, étiquette.
2. **Les filtres de la classe**, par exemple :

| Classe | Filtres propres (extrait) |
|---|---|
| Actions | Place, pays, secteur, industrie, taille de capitalisation, ratio cours/bénéfice, prix/ventes, rendement du dividende, marge nette, croissance, bêta, éligible PEA, écart au prix cible (donnée tierce) |
| Fonds et ETP | Émetteur, indice suivi, zone, thème, frais courants, réplication, capitalisant/distribuant, encours, ancienneté, SRI, SFDR, éligibilité PEA/AV/PER, couverture de change, écart de suivi |
| Obligations | Catégorie d'émetteur (État, supranational, collectivité, entreprise), pays, devise, notation, qualité (investissement ou haut rendement), échéance, années restantes, coupon, rendement à maturité, duration, type de taux, rang, remboursable par anticipation, verte, montant minimum |
| Immobilier | Type de bien, localisation, rendement brut et net, mode de détention, crédit associé, régime fiscal, taux d'occupation et de distribution (SCPI) |
| Crypto | Capitalisation, catégorie, réseau, rendement de staking, plateforme autorisée MiCA, adossement (stablecoins) |
| Dérivés | Sous-jacent, sens, échéance, levier, distance à la barrière, émetteur |

La liste complète, classe par classe, est générée dans `docs/produit/classes-actifs.md`.

**Règles** : une valeur absente ne passe jamais un filtre de plage (elle n'est pas comptée comme zéro) ; un filtre fondé sur une donnée tierce (notation, consensus) affiche sa source et sa date.

## 3. Systèmes de sélection et collections

- **Systèmes de sélection** (Plus, V2) : combinaison de filtres d'une classe, colonnes choisies, tri, sauvegarde et synchronisation entre appareils.
- **Collections prêtes à l'emploi** : grandes capitalisations, rendement du dividende élevé, en hausse sur un an, forte croissance, ratio cours/bénéfice faible, marge nette élevée, éligibles PEA, ETF à frais bas, ETF PEA capitalisants, fonds article 9, obligations d'État à moins de 3 ans, entreprises catégorie investissement 3 à 5 ans, obligations vertes, stablecoins en euros sur plateformes MiCA, SCPI à taux d'occupation élevé.
- **Neutralité** : une collection est un tri de données. Un test (`collectionNeutre`) refuse tout nom ou description contenant « recommandé », « à acheter », « opportunité », « meilleur », « conseil ». Pas de « Achats recommandés » comme chez Revolut.

## 4. Catalogue de découverte (onglet Marchés)

Inspiré du Catalogue Revolut, par classe : Tous les actifs · Actions · Fonds et ETP · Obligations · Crypto · Matières premières · Dérivés.

- Plus fortes variations du jour (hausse et baisse), plus échangés, collections, ETF et obligations les plus consultés, fil d'actualités.
- Classements factuels uniquement. Aucune mise en avant rémunérée ; un lien d'affiliation n'apparaît jamais dans le catalogue.

## 5. Contraintes

- Données de marché sous licence d'affichage ; fraîcheur affichée (« différé de 15 min », « clôture »).
- Les systèmes de sélection dépendent de données fondamentales coûteuses : V2, quand le nombre d'abonnés Plus le finance.

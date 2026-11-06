# Modules 14, 15 et 16 — Analyse, gestion et actualités

Des outils pour comprendre son patrimoine et le tenir à jour sans effort : répartition, concentration, doublons entre fonds, contribution à la performance, risque passé, échéancier, alertes, listes, actualités. Tout est descriptif : LiVi constate et calcule, l'utilisateur décide.

Fonctionnalités : ANA-01 à ANA-11, GES-01 à GES-09, ACT-01 à ACT-04. Calculs : `@livi/core` (`repartition`, `herfindahl`, `recouvrement`, `transparence`, `arbitrageVersCible`, `twr`, `xirr`, `baisseMaximale`).

## Analyse du portefeuille

| Outil | Ce qu'il montre | Calcul |
|---|---|---|
| Répartition multi-axes | Classe, sous-classe, pays, secteur, devise, enveloppe, établissement, membre, risque | `repartition(positions, axe)` |
| Exposition par transparence | Pays et secteurs réels à l'intérieur des fonds | `transparence(positions, compositions)` |
| Recouvrement entre fonds | Lignes communes entre ETF détenus, doublons signalés | `recouvrement(a, b)` |
| Concentration | Indice de concentration, dix premières lignes, poids maximal | `herfindahl(valeurs)` |
| Contribution | Apport de chaque ligne, classe ou enveloppe à la performance | Variation pondérée |
| Performance | Rendement pondéré par le temps et par l'argent, frais et IA déduits | `twr`, `xirr` |
| Risque descriptif | Volatilité, baisse maximale, bêta, récupération | `baisseMaximale` |
| Chocs historiques (V3) | Effet de 2008, 2020, 2022 sur la répartition actuelle | Rejeu historique |
| Calculateur d'arbitrage | Montants à déplacer vers **la cible de l'utilisateur** | `arbitrageVersCible` |
| Plus-values par lot | Latentes et réalisées, méthode de l'enveloppe | Lots FIFO / PRU |
| Revenus passifs | Dividendes, coupons, loyers, intérêts contre dépenses | Agrégation |
| Échéancier | Coupons, échéances, fins de blocage, fins de promos, crédits | Champs date de la classification |

Règle : chaque chiffre affiche sa méthode (lien « Comment c'est calculé ») et sa période.

## Gestion et surveillance

- **Listes de surveillance** multiples, colonnes choisies, réordonnables.
- **Alertes de marché** : cours, variation, plus haut ou bas 52 semaines, volume inhabituel. Les cours étant différés, une alerte n'est pas un ordre.
- **Alertes de patrimoine** : seuil, grosse dépense, frais bancaires, fin de taux promotionnel, plafond d'enveloppe atteint.
- **Étiquettes et groupes** : « Projet maison », « Études des enfants », horizon.
- **Opérations sur titres** : divisions, regroupements, fusions, changements d'ISIN appliqués avec aperçu.
- **Modification en masse** avec aperçu et annulation.
- **Transferts** entre comptes et enveloppes sans fausse performance ni fausse dépense.
- **Investissements programmés** détectés et rapprochés des consignes de DCA.
- **Fil d'activité** chronologique.

## Actualités et événements

- Actualités filtrées sur les positions détenues et surveillées (fournisseur sous licence, titre, source, date).
- Faits importants : variations fortes, dividendes annoncés, échéances proches.
- Calendrier : résultats, dividendes, assemblées générales.
- Lecteur d'articles intégré quand la licence le permet ; sinon lien vers la source.

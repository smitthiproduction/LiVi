# Module 12 — Marchés mondiaux (globe 3D et carte 2D)

Une carte vivante des marchés du monde : un globe qui tourne, des étiquettes d'indices posées sur leur place, et pour chaque zone ses indices, ses devises, ses taux, ses indicateurs économiques et ses actualités. Inspiré de l'écran « Marchés internationaux » de Revolut, étendu au lien avec le patrimoine de l'utilisateur.

Fonctionnalités : MON-01 à MON-12. Données et calculs : `@livi/market-data` (places, horaires, indices, statut des séances, projections).

## 1. Ce que voit l'utilisateur

```
┌ Marchés › Monde ───────────────────────────────────────────────┐
│ International · Amériques · Europe · Asie-Pacifique · MO-Afrique │
│                                                                  │
│          US500 ▲ 0,61 %        GB100 ▼ 1,04 %                    │
│          US100 ▲ 1,57 %   FR40 ▼ 0,76 %  DE40 ▼ 2,85 %           │
│                    (globe 3D, rotation libre)                    │
│                                                     [3D | 2D]    │
├──────────────────────────────────────────────────────────────────┤
│ Indices · Devises · Matières premières · Indicateurs · Actualités│
└──────────────────────────────────────────────────────────────────┘
```

- **Globe 3D** : rotation au doigt ou à la souris avec inertie, pincement pour zoomer, double tap pour recentrer. Les étiquettes (code neutre comme US500, FR40, variation du jour) sont posées sur la place ; celles de la face cachée disparaissent (projection orthographique, `orthographique()`).
- **Carte 2D** : projection équirectangulaire (`equirectangulaire()`), mêmes étiquettes et calques. Bascule 3D/2D en haut à droite, mémorisée.
- **Bascule automatique en 2D** : « Réduire les animations » activé, appareil peu puissant (images par seconde mesurées sous le seuil), ou mode économie d'énergie.
- **Couleurs** : hausse et baisse selon les jetons `gain` et `loss`, toujours doublées d'un signe et d'une flèche ; palette daltonisme respectée.

## 2. Onglets et contenus

| Onglet | Contenu |
|---|---|
| **International** | Globe, indices principaux, paires de devises, matières premières, actualités mondiales |
| **Amériques, Europe, Asie-Pacifique, Moyen-Orient et Afrique** | Globe centré sur la région, graphique comparatif des indices de la région (base 0 %, périodes 1J · 1S · 1M · 6M · 1A · 5A · Tout), indices, devises, actualités régionales |
| **Fiche pays ou zone** | Zone euro, France, Allemagne, Royaume-Uni, États-Unis, Japon, Chine, Suisse : indicateurs économiques (PIB, inflation, taux directeur, taux à 10 ans, ventes au détail, chômage, indice des directeurs d'achat) avec valeur, variation et date de publication |

## 3. Statut des places

Chaque place du référentiel (`PLACES`) porte son fuseau et ses séances (une ou deux, avec pause déjeuner en Asie). `statutPlace()` renvoie ouverte, pause, fermée ou week-end ; les jours fériés viennent du fournisseur de données et priment. L'étiquette affiche l'heure locale et le temps avant ouverture ou clôture.

Places couvertes au lancement du module : New York, Toronto, São Paulo, Paris, Amsterdam, Francfort, Londres, Zurich, Milan, Madrid, Tokyo, Hong Kong, Shanghai, Bombay, Sydney, Johannesburg. Les horaires sont des références à confirmer et tenir à jour en back-office (BO-25).

## 4. Calques (V3, Plus)

Performance du jour, statut des séances, taux à 10 ans, inflation, carte de chaleur par pays. Chaque calque a une légende et un équivalent textuel.

## 5. Lien avec le patrimoine (MON-12)

Bouton « Mon exposition » : la répartition géographique du patrimoine (positions directes et, quand la composition est disponible, transparence des fonds) colore les pays. Calcul sur l'appareil.

## 6. Accessibilité

La vue liste (MON-11) contient toute l'information du globe : aucune donnée n'existe seulement sur la carte. Le globe est un seul élément pour le lecteur d'écran, avec un résumé (« Europe en baisse, 3 places ouvertes ») et un lien vers la liste.

## 7. Technique

| Surface | Rendu 3D | Rendu 2D |
|---|---|---|
| Web | WebGL (three.js, react-three-fiber) ; texture de terre sobre, sans relief, aux couleurs du thème | SVG ou canvas, projection maison |
| iPhone, Android | React Native Skia (ou expo-gl) ; images par seconde mesurées | Skia ou SVG |

- Le fond de carte (contours des pays) vient d'une source libre de droits (Natural Earth, domaine public), simplifié et embarqué.
- Les cotations arrivent par lot toutes les 60 secondes au plus (cache serveur partagé) ; la licence fixe la fraîcheur affichée.
- Budget de performance : premier rendu du globe en moins d'une seconde sur un iPhone de 4 ans, 60 images par seconde visées en rotation.

## 8. Contraintes

- Licences : les indices sont des marques et leurs données sont sous licence. Codes neutres (US500, FR40…) et noms descriptifs affichés, fournisseur cité.
- Aucune incitation : le module informe, il ne pousse vers aucun produit et n'affiche aucun lien d'affiliation.

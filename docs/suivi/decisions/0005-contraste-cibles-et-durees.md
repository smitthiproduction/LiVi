# 0005 — Contraste du texte indicatif, cibles de 44 pt et durées du prototype

- Date : 2026-11-19
- Statut : acceptée

## Contexte
La revue du 15 novembre (R-36, R-37, R-38, R-55) a relevé un texte indicatif sous 4,5:1, des valeurs saisies à la main, des cibles de moins de 44 pt et des durées de prototype différentes des jetons.

## Décision
- `ink-tertiary` passe à #83838c (sombre), #6d6d73 (clair), #636275 (pastel) : 4,5:1 minimum sur `bg`, `surface`, `bg-elevated` et les teintes. Sur `surface-sunken`, le texte indicatif passe en `ink-secondary`. Le texte désactivé reste exempté.
- Dans les maquettes, marges, espacements et rayons sont toujours liés aux variables ; une valeur hors échelle est ramenée à la plus proche (à égalité, la plus petite) ; un petit élément arrondi en capsule prend `radius-pill`.
- Tout élément relié offre une zone de 44 pt ; quand le visuel est plus petit, un calque transparent `ui/zone-44` porte le lien sans chevaucher un élément voisin relié.
- Les durées du prototype sont celles des jetons : `duration-base` (280 ms) pour les fondus d'onglets et de sous-onglets, `duration-slow` (420 ms) pour les écrans poussés, les feuilles et les offres.
- Les trois offres gardent le même poids visuel (choix du porteur, 16 novembre).

## Conséquences
`tokens.json` et les jetons générés, la variable Figma dans les trois modes, `accessibilite.md`, `navigation.md` et `figma.md` mis à jour. La copie du design system publiée (artefact « Design system LiVi v2 ») doit reprendre la nouvelle valeur de `ink-tertiary`.

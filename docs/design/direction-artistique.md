# Direction artistique

LiVi parle le langage des fintech mobiles (référence assumée : Revolut) avec une signature propre : fond noir profond, gros chiffres en gras, cartes opaques arrondies, contrôles en verre liquide qui flottent au-dessus du contenu, et un orbe liquide aqua et cobalt réservé à l'accueil et à LiVi IA.

## Références
- **Design system publié** : https://claude.ai/artifact/WXAbZ6Zdqy8tcwMUtw31AX (jetons copiés dans `packages/design-tokens/src/tokens.json`).
- **Maquettes** (21 écrans mobile, web, back-office, trois thèmes) : https://claude.ai/artifact/2JwSn4myZHNdof24VFEMYx.
- **Version abandonnée** : v1 « liquid glass ivoire, Instrument Serif, accent champagne », jugée trop journalistique (archivée dans `old/ordres/`).

## Principes visuels
1. **Le chiffre d'abord** : un montant héros par écran, décimales et devise réduites.
2. **Contenu opaque, contrôles en verre** : cartes et listes sur `surface` ; boutons ronds, barre d'onglets, barre d'action et en-tête replié en verre.
3. **Une seule couleur d'intention** : `accent` (aqua en sombre, bleu profond en clair, outremer en pastel) pour liens, état actif, LiVi IA.
4. **Gains et pertes** : `gain` et `loss`, toujours avec signe et flèche ; palette daltonisme en option.
5. **Trois thèmes de même rang** : Sombre (défaut), Clair (usage quotidien, même soin), Pastel (widgets teintés menthe, lilas, pêche, ciel, beurre).

## Typographie
Manrope (interface et chiffres, 500 à 800), Geist Mono (ISIN, colonnes CSV, libellés bancaires). Échelle : hero 52, display-title 34, title-1 28, title-2 22, title-3 17, body 16.

## Mouvement
Rapide (160 ms) pour les pressions, base (280 ms) pour les segments, lent (420 ms) pour les feuilles ; ressort pour les poignées. « Réduire les animations » : fondus courts, globe en 2D.

## Ce que LiVi ne montre jamais
Bouton « Acheter » ou « Vendre », jauge de « suggestion », bandeau « recommandé », compte à rebours commercial, emoji.

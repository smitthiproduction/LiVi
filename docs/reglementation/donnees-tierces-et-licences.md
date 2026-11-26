# Données tierces et licences

- **Données de marché** : licence d'affichage aux utilisateurs finaux obligatoire ; fraîcheur (temps réel, différé, clôture) et fournisseur affichés. Chaque fournisseur déclare sa licence dans `@livi/market-data` (`Licence`).
- **Indices** : les noms d'indices sont des marques ; codes neutres (US500, FR40…) et noms descriptifs dans l'interface.
- **Consensus d'analystes et notations** : données tierces affichées comme telles (source, date), désactivables, jamais présentées comme un avis de LiVi ; activation après validation juridique et licence de diffusion. Revolut affiche une « suggestion » maison : LiVi ne le fait pas.
- **Actualités** : titre, source, date et lien ; reproduction intégrale seulement si la licence le permet.
- **Fond de carte du globe** : source du domaine public (Natural Earth).
- **Logos d'enseignes et d'émetteurs** : usage nominatif, depuis le référentiel du back-office ; à défaut, monogramme.

## Sources de cours au choix et meilleur prix (décision 0008)

| Source | Type | Statut | Note |
|---|---|---|---|
| EuroCTP | Bande consolidée européenne (actions et ETF de l'UE) | À négocier | Agréée par l'ESMA, en service depuis septembre 2026 ; calcule le meilleur prix d'achat et de vente (EBBO) |
| Euronext, Deutsche Börse, gettex, Tradegate, LS Exchange | Flux des places | À négocier | Licences de diffusion propres à chaque place ; Tradegate sans API publique gratuite |
| Twelve Data, Finnhub, Eulerpool, Intrinio, Polygon.io, Alpaca, LSEG, Bloomberg | Agrégateurs | À négocier | Couverture, quotas et droits d'affichage selon contrat |
| Google Finance, Yahoo Finance | Sites grand public | Sous réserve de licence | Pas d'API officielle ; conditions réservées à un usage personnel ; visibles et désactivés dans le sélecteur sans contrat |

- Seule une source **sous licence d'affichage** fournit un prix affiché ; sa mention et sa fraîcheur sont sous le prix.
- Le **meilleur prix** ne compare que des cotations sous licence, de même fraîcheur et récentes ; il est informatif : aucun ordre, aucun bouton d'achat ou de vente.
- **Registre des identifiants** : FIRDS (ESMA, réutilisation libre), OpenFIGI (identifiants FIGI utilisables à toute fin selon ses conditions), ISO 10383 (codes MIC). Les codes Google et Yahoo du registre ne servent qu'à une source sous contrat.
- Noms de Google Finance, Yahoo Finance et des places : usage nominatif, sans logo.


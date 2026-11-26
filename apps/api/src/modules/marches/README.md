# Module marches

Fournisseurs de données de marché, macro et actualités ; cache partagé ; licences et fraîcheur.

À implémenter en suivant `apps/api/CLAUDE.md` : routes validées par schéma, autorisation, journal sans donnée financière, erreurs du catalogue.

## Meilleur prix et comparatif des lieux (décision 0008)

- Logique : `@livi/market-data` (`meilleurPrix`, `comparatifLieux`, `coursDeValorisation`, `resoudreSource`, `optionsSelecteur`).
- Seules les sources sous licence d'affichage entrent dans le calcul ; la mention de la source et la fraîcheur accompagnent chaque prix.
- Aucune route d'ordre : LiVi n'exécute ni ne transmet d'ordre.


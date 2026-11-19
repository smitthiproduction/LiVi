# Audit Figma : index

Registre des audits UX et de conformité au cahier des charges des maquettes « LiVi — Maquettes » (clé `cR7EtAZKpKCkgOoEqcJ8Wq`). Il sert aux agents d'intégration (`mobile-ios`, `frontend-web`, `back-office`) et de modification Figma (`design-system`, skill `livi-maquette-figma`).

## Pages auditées

| Date | Page | Cadres | Cahier des charges | Écarts (B / I / A) | Statut | Rapport |
|---|---|---|---|---|---|---|
| 19 nov. 2026 | Accueil (onglet Accueil, iPhone) | MQ-024 à MQ-029 | `main` @ `bce14c7` (catalogue du 19 nov., décisions 0001 à 0005) | 0 / 9 / 10 | À reprendre | [2026-11-19-accueil.md](2026-11-19-accueil.md) |

## Mode d'emploi

### Pour un agent de modification Figma
1. Lire le rapport de la page ; traiter les écarts par niveau (Bloquant, puis Important, puis Amélioration).
2. Ne pas re-traiter un écart renvoyé à la [revue du 15 novembre](../qualite/revues/2026-11-15-revue-maquettes.md) : il y est suivi.
3. Après correction, ajouter une ligne dans l'« Historique » du rapport (date, écarts corrigés, version Figma) et passer le statut de la ligne de l'index. Ne jamais effacer une ligne : barrer ou annoter.
4. Repasser les cadres modifiés en « à valider » dans `docs/design/maquettes.json`, puis `pnpm docs:generate`.

### Pour un agent d'intégration
- La colonne « Modifiabilité admin » dit ce qui est une donnée calculée, un libellé fixe ou un contenu administrable, avec la fonction back-office (BO-xx), les champs, les limites et les droits attendus.
- La colonne « Tokens » donne les variables Figma à reprendre telles quelles depuis `packages/design-tokens`.
- Les transitions et gestes sont dans la section « Mouvement et transitions » de chaque rapport.

### Pour un nouvel audit
- Consulter d'abord [knowledge/](knowledge/README.md) avant toute lecture web ; y consigner chaque nouvelle source.
- Quota Figma : 200 appels par jour pour tout le compte. Un audit de page tient en 3 à 10 appels (lectures groupées par script).
- Nommer le rapport `AAAA-MM-JJ-<page>.md` et ajouter sa ligne ci-dessus.

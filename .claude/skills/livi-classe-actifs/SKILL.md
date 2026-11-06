---
name: livi-classe-actifs
description: Ajouter ou modifier une classe ou une sous-classe d'actifs (champs, filtres, onglets de fiche, collections) dans la classification partagée. À utiliser pour tout nouveau type d'actif, sous-classe (ex. obligation convertible) ou filtre.
---

# Modifier la classification des actifs

Source unique : `packages/asset-classes/src/taxonomy.ts` (et `recherche.ts` pour les collections).

## Étapes
1. Archiver l'état actuel si la modification remplace une définition existante (`livi-ordre`).
2. Modifier la classe ou la sous-classe :
   - `champs` : identifiant en minuscules avec tirets, libellé en français, type, source (saisie, import, fournisseur, calcul).
   - `filtres` : déclarés dans la classe ; une sous-classe ne fait que les citer (`filtres: ['id']`).
   - `onglets` : la fiche commence toujours par `apercu` ; une sous-classe ajoute ses onglets, insérés après l'aperçu.
   - Donnée tierce (notation, consensus) : `donneeTierce: true`.
3. Collections : noms descriptifs, jamais « recommandé », « à acheter », « opportunité » (le test `collectionNeutre` échoue sinon).
4. Lancer `node --test 'packages/asset-classes/test/*.test.ts'` puis `pnpm docs:generate`.
5. Prévenir les surfaces concernées : formulaire de saisie (mobile, web), filtres, back-office BO-26, API (validation).

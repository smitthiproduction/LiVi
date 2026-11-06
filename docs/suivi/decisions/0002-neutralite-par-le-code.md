# 0002 — Neutralité imposée par le code

- Date : 2026-11-06
- Statut : acceptée

## Contexte
Revolut affiche une « suggestion » maison, des boutons Acheter et Vendre et des collections promotionnelles. LiVi ne doit donner aucun conseil en investissement (risque réglementaire et promesse produit).

## Décision
La neutralité est vérifiée par des tests, pas seulement par des consignes :
- `collectionNeutre` (paquet `asset-classes`) refuse les libellés « recommandé », « à acheter », « opportunité », « meilleur », « conseil » ;
- les filtres issus de données tierces portent `donneeTierce: true` et sont désactivables ;
- le catalogue de messages d'erreur est testé (pas de « ! », pas d'emoji) ;
- la barre d'action propose « Ajouter une opération » et « Créer une consigne », jamais « Acheter » ou « Vendre » ;
- la passerelle IA refuse les demandes de conseil (`IA_DEMANDE_DE_CONSEIL`).

## Conséquences
Toute nouvelle collection, tout nouveau texte de bouton ou filtre tiers passe ces tests ; l'agent `conformite` revoit les exceptions.

# Drapeaux, ajustements, maintenance et tests d'usage

Logique testée : `apps/api/src/modules/drapeaux/evaluation.ts`, `apps/api/src/modules/tests-usage/executeur.ts`, `apps/admin/src/lib/roles.ts`.

## Drapeaux de fonctionnalité
Chaque fonctionnalité du catalogue peut être derrière un drapeau `fonctionnalite.<id>` : valeur par défaut, offres concernées, version minimale d'app, déploiement progressif (pourcentage stable par utilisateur).

## Ajustements par client ou globaux (BO-20)
Priorité d'évaluation : **maintenance** (sauf comptes de test en liste blanche) → ajustement **utilisateur** → ajustement **segment** → ajustement **global** → règles du drapeau → défaut.

Chaque ajustement porte : drapeau, cible, valeur, **motif**, **auteur**, **échéance**. Un ajustement global n'est actif qu'avec **deux validations d'administrateurs distincts**. Exemples : couper le globe 3D pour un segment d'appareils lents ; rétablir une fonction pour un client pendant l'analyse d'un bug ; augmenter temporairement le quota IA d'un utilisateur.

## Mode maintenance (BO-21)
- Global ou par fonction, immédiat ou planifié (début, fin), message affiché aux utilisateurs.
- Les données locales restent consultables ; les écritures serveur de la fonction sont suspendues.
- Les **comptes de test restent servis** pour lancer les scénarios et vérifier le correctif avant de rouvrir.

## Comptes de test et bouton « Tester la fonctionnalité » (BO-22)
- Comptes de test actifs par offre, avec jeux de données fictifs réinitialisables.
- Chaque fonctionnalité a un scénario d'usage (`tests-usage/scenarios/<ID>.ts`) : prérequis, étapes (actions et vérifications), nettoyage.
- Le bouton, dans le back-office ou dans l'app connectée à un compte de test, lance le scénario ; l'exécuteur refuse tout prérequis qui n'est pas un compte de test ou un jeu fictif, nettoie même en cas d'échec, et journalise le résultat.
- Un scénario rouge empêche de sortir la fonctionnalité de son drapeau.

## Exemple de bout en bout
1. Erreur en hausse sur l'import CSV d'une banque (BO-17).
2. Maintenance de la fonction `import.csv` pour cette banque, avec message (BO-21).
3. Reproduction sur un compte de test, correctif du modèle CSV, scénario vert (BO-22).
4. Fin de maintenance, ticket clos, post-mortem si nécessaire (`livi-incident`).

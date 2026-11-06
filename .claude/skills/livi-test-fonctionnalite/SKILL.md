---
name: livi-test-fonctionnalite
description: Créer ou mettre à jour le scénario de test d'usage d'une fonctionnalité, exécutable par le bouton « Tester la fonctionnalité » sur un compte de test, y compris pendant une maintenance. À utiliser pour chaque fonctionnalité nouvelle ou modifiée.
---

# Scénario de test d'usage

Chaque fonctionnalité du catalogue a un scénario dans `apps/api/src/modules/tests-usage/scenarios/<ID>.ts`, lancé depuis le back-office (BO-22) ou depuis l'app quand l'utilisateur connecté est un compte de test.

## Format
```ts
export const scenario: ScenarioTest = {
  fonctionnalite: 'BUD-02',
  titre: 'Propager la catégorie de Lidl à toute l’enseigne',
  prerequis: ['compte-test:essentiel', 'jeu:depenses-lidl'],
  etapes: [
    { action: 'ouvrir', cible: 'transaction:lidl-1' },
    { action: 'changer-categorie', valeur: 'Courses alimentaires', portee: 'enseigne' },
    { attendu: 'apercu', nombre: 2, ignoreesManuelles: 1 },
    { action: 'valider' },
    { attendu: 'categorie', cible: 'transaction:lidl-2', valeur: 'Courses alimentaires' },
  ],
  nettoyage: 'reinitialiser-jeu',
};
```

## Règles
- Uniquement des comptes de test (`compte-test:*`) et des jeux de données fictifs (`jeu:*`, dans `apps/api/src/modules/tests-usage/jeux/`).
- Le scénario fonctionne pendant une maintenance : les comptes de test sont sur la liste blanche (BO-21).
- Chaque exécution est journalisée (qui, quand, version, résultat, durée) et visible dans le back-office.
- Un scénario rouge bloque la sortie de la fonctionnalité de son drapeau.

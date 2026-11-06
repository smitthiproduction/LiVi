import type { ScenarioTest } from '../types.ts';

export const scenario: ScenarioTest = {
  fonctionnalite: 'BUD-02',
  titre: 'Propager la catégorie de Lidl à toute l’enseigne, avec aperçu',
  prerequis: ['compte-test:essentiel', 'jeu:depenses-lidl'],
  etapes: [
    { action: 'ouvrir', cible: 'transaction:lidl-1' },
    { action: 'changer-categorie', valeur: 'Courses alimentaires', portee: 'enseigne' },
    { attendu: 'apercu', nombre: 2, ignoreesManuelles: 1, montantTotal: -60.5 },
    { action: 'valider' },
    { attendu: 'categorie', cible: 'transaction:lidl-2', valeur: 'Courses alimentaires' },
    { attendu: 'categorie', cible: 'transaction:lidl-3', valeur: 'Cadeaux' },
  ],
  nettoyage: 'reinitialiser-jeu',
};

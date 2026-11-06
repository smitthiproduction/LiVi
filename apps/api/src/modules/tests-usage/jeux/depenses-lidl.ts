import type { Enseigne, Transaction } from '../../../../../../packages/core/src/index.ts';

/** Jeu de données fictif : quatre dépenses, dont une catégorisée à la main. */
export const enseignes: Enseigne[] = [
  { id: 'lidl', groupeId: 'schwarz', nom: 'Lidl', categorieParDefaut: 'Courses alimentaires', alias: [] },
  { id: 'kaufland', groupeId: 'schwarz', nom: 'Kaufland', categorieParDefaut: 'Courses alimentaires', alias: [] },
];

export const transactions = (): Transaction[] => [
  { id: 'lidl-1', date: '2026-01-03', libelle: 'CB LIDL BORDEAUX', montant: -42.1, enseigneId: 'lidl', categorie: 'Autre' },
  { id: 'lidl-2', date: '2026-01-10', libelle: 'CB LIDL MERIGNAC', montant: -18.4, enseigneId: 'lidl', categorie: 'Autre' },
  { id: 'lidl-3', date: '2026-01-17', libelle: 'CB LIDL BORDEAUX', montant: -9.9, enseigneId: 'lidl', categorie: 'Cadeaux', categorieManuelle: true },
  { id: 'kauf-1', date: '2026-01-20', libelle: 'CB KAUFLAND', montant: -25, enseigneId: 'kaufland', categorie: 'Autre' },
];

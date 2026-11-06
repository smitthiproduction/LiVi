/**
 * Catégorisation par annuaire groupe › enseigne › établissement, et aperçu de propagation.
 */

export interface Etablissement { id: string; enseigneId: string; nom: string; ville?: string; alias: readonly string[] }
export interface Enseigne { id: string; groupeId?: string; nom: string; categorieParDefaut: string; alias: readonly string[] }

export interface Transaction {
  id: string;
  date: string;
  libelle: string;
  montant: number;
  categorie?: string;
  enseigneId?: string;
  etablissementId?: string;
  /** Catégorie posée à la main : jamais écrasée sans le dire. */
  categorieManuelle?: boolean;
}

const BRUIT = /\b(CB|CARTE|PAIEMENT|PAIEM|ACHAT|PRLV|PRELEVEMENT|SEPA|FACTURE|VIR|VIREMENT|X\d{4}|\d{2}\/\d{2}(\/\d{2,4})?|\d{4,})\b/g;

/** « CB LIDL 1234 BORDEAUX 12/03 » → « LIDL BORDEAUX ». */
export function normaliserLibelle(brut: string): string {
  return brut
    .toUpperCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[*#_]/g, ' ')
    .replace(BRUIT, ' ')
    .replace(/[^A-Z0-9 &'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Trouve l'enseigne et l'établissement d'un libellé ; l'alias le plus long gagne. */
export function rattacher(libelle: string, enseignes: readonly Enseigne[], etablissements: readonly Etablissement[] = []): { enseigne?: Enseigne; etablissement?: Etablissement } {
  const n = ` ${normaliserLibelle(libelle)} `;
  let meilleure: { e: Enseigne; l: number } | undefined;
  for (const e of enseignes) {
    for (const a of [e.nom, ...e.alias]) {
      const alias = ` ${normaliserLibelle(a)} `;
      if (n.includes(alias) && (!meilleure || alias.length > meilleure.l)) meilleure = { e, l: alias.length };
    }
  }
  if (!meilleure) return {};
  const etab = etablissements
    .filter((x) => x.enseigneId === meilleure!.e.id)
    .find((x) => x.alias.some((a) => n.includes(` ${normaliserLibelle(a)} `)) || (x.ville && n.includes(` ${normaliserLibelle(x.ville)} `)));
  return { enseigne: meilleure.e, etablissement: etab };
}

export type Portee = 'operation' | 'etablissement' | 'enseigne' | 'groupe';

export interface ApercuPropagation {
  touchees: Transaction[];
  ignoreesManuelles: Transaction[];
  montantTotal: number;
  nombre: number;
}

/**
 * Aperçu avant validation : quelles opérations changeront de catégorie selon la portée choisie.
 * Les catégories posées à la main sont listées à part et ne changent que si `inclureManuelles`.
 */
export function apercuPropagation(
  transactions: readonly Transaction[],
  cible: { transactionId: string; nouvelleCategorie: string; portee: Portee },
  enseignes: readonly Enseigne[],
  inclureManuelles = false,
): ApercuPropagation {
  const ref = transactions.find((t) => t.id === cible.transactionId);
  if (!ref) throw new Error('Opération introuvable.');
  const groupeDe = (enseigneId?: string) => enseignes.find((e) => e.id === enseigneId)?.groupeId;
  const dansPortee = (t: Transaction): boolean => {
    switch (cible.portee) {
      case 'operation': return t.id === ref.id;
      case 'etablissement': return !!ref.etablissementId && t.etablissementId === ref.etablissementId;
      case 'enseigne': return !!ref.enseigneId && t.enseigneId === ref.enseigneId;
      case 'groupe': {
        const g = groupeDe(ref.enseigneId);
        return g ? groupeDe(t.enseigneId) === g : !!ref.enseigneId && t.enseigneId === ref.enseigneId;
      }
    }
  };
  const candidates = transactions.filter((t) => dansPortee(t) && t.categorie !== cible.nouvelleCategorie);
  const ignoreesManuelles = candidates.filter((t) => t.categorieManuelle && t.id !== ref.id && !inclureManuelles);
  const touchees = candidates.filter((t) => !ignoreesManuelles.includes(t));
  return { touchees, ignoreesManuelles, nombre: touchees.length, montantTotal: Math.round(touchees.reduce((s, t) => s + t.montant, 0) * 100) / 100 };
}

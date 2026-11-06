/**
 * Import CSV : lecture tolérante des formats bancaires français, application d'un modèle
 * de correspondance (géré en back-office) et détection des doublons. Aucune ligne n'est écrite
 * ici : le résultat alimente l'aperçu que l'utilisateur valide.
 */

export function detecterSeparateur(entete: string): ';' | ',' | '\t' {
  const compte = (c: string) => entete.split(c).length - 1;
  const candidats = [';', ',', '\t'] as const;
  return candidats.reduce((best, c) => (compte(c) > compte(best) ? c : best), ';');
}

/** Découpe un CSV en lignes de cellules (guillemets, guillemets doublés, retours à la ligne entre guillemets). */
export function lireCsv(texte: string, separateur?: string): string[][] {
  const sep = separateur ?? detecterSeparateur(texte.split(/\r?\n/)[0] ?? '');
  const lignes: string[][] = [];
  let cellule = '', ligne: string[] = [], guillemets = false;
  const t = texte.replace(/^﻿/, '');
  for (let i = 0; i < t.length; i++) {
    const ch = t[i]!;
    if (guillemets) {
      if (ch === '"' && t[i + 1] === '"') { cellule += '"'; i++; }
      else if (ch === '"') guillemets = false;
      else cellule += ch;
    } else if (ch === '"') guillemets = true;
    else if (ch === sep) { ligne.push(cellule); cellule = ''; }
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && t[i + 1] === '\n') i++;
      ligne.push(cellule); cellule = '';
      if (ligne.some((c) => c.trim() !== '')) lignes.push(ligne);
      ligne = [];
    } else cellule += ch;
  }
  ligne.push(cellule);
  if (ligne.some((c) => c.trim() !== '')) lignes.push(ligne);
  return lignes;
}

/** « 1 234,56 € », « -1.234,56 », « (12,30) », « 1,234.56 » → nombre. */
export function lireMontant(brut: string, format: 'fr' | 'en' = 'fr'): number {
  let s = brut.trim().replace(/[€$£\s  ]/g, '').replace(/EUR|USD|GBP|CHF/gi, '');
  let negatif = false;
  if (/^\(.*\)$/.test(s)) { negatif = true; s = s.slice(1, -1); }
  if (s.startsWith('−') || s.startsWith('-')) { negatif = true; s = s.slice(1); }
  if (s.endsWith('-')) { negatif = true; s = s.slice(0, -1); }
  s = format === 'fr' ? s.replace(/\./g, '').replace(',', '.') : s.replace(/,/g, '');
  const n = Number(s);
  if (s === '' || Number.isNaN(n)) throw new Error(`Montant illisible : « ${brut} »`);
  return negatif ? -n : n;
}

/** « 31/12/2025 », « 31-12-25 », « 2025-12-31 » → « 2025-12-31 ». */
export function lireDate(brut: string, format: 'JJ/MM/AAAA' | 'AAAA-MM-JJ' | 'MM/JJ/AAAA' = 'JJ/MM/AAAA'): string {
  const s = brut.trim();
  const m = s.match(/^(\d{1,4})[\/.\-](\d{1,2})[\/.\-](\d{1,4})/);
  if (!m) throw new Error(`Date illisible : « ${brut} »`);
  let [a, b, c] = [m[1]!, m[2]!, m[3]!];
  let j: string, mo: string, an: string;
  if (format === 'AAAA-MM-JJ' || a.length === 4) { an = a; mo = b; j = c; }
  else if (format === 'MM/JJ/AAAA') { mo = a; j = b; an = c; }
  else { j = a; mo = b; an = c; }
  if (an.length === 2) an = (Number(an) > 69 ? '19' : '20') + an;
  const iso = `${an}-${mo.padStart(2, '0')}-${j.padStart(2, '0')}`;
  const d = new Date(iso + 'T00:00:00Z');
  if (Number.isNaN(d.getTime()) || d.toISOString().slice(0, 10) !== iso) throw new Error(`Date invalide : « ${brut} »`);
  return iso;
}

export interface ModeleCsv {
  id: string;
  etablissement: string;
  version: number;
  separateur?: string;
  lignesEntete: number;
  formatDate: 'JJ/MM/AAAA' | 'AAAA-MM-JJ' | 'MM/JJ/AAAA';
  formatMontant: 'fr' | 'en';
  colonnes: { date: number; libelle: number; montant?: number; debit?: number; credit?: number; isin?: number; quantite?: number; prix?: number };
  /** Le relevé présente les dépenses en positif : inverser le signe. */
  inverserSigne?: boolean;
}

export interface LigneImport { date: string; libelle: string; montant: number; isin?: string; quantite?: number; prix?: number }
export interface ErreurImport { ligne: number; message: string }

export function appliquerModele(texte: string, modele: ModeleCsv): { lignes: LigneImport[]; erreurs: ErreurImport[] } {
  const brutes = lireCsv(texte, modele.separateur).slice(modele.lignesEntete);
  const lignes: LigneImport[] = [];
  const erreurs: ErreurImport[] = [];
  brutes.forEach((cells, i) => {
    const n = i + modele.lignesEntete + 1;
    try {
      const c = modele.colonnes;
      const date = lireDate(cells[c.date] ?? '', modele.formatDate);
      const libelle = (cells[c.libelle] ?? '').trim();
      let montant: number;
      if (c.montant !== undefined) montant = lireMontant(cells[c.montant] ?? '', modele.formatMontant);
      else {
        const deb = (cells[c.debit ?? -1] ?? '').trim();
        const cre = (cells[c.credit ?? -1] ?? '').trim();
        montant = (cre ? lireMontant(cre, modele.formatMontant) : 0) - (deb ? Math.abs(lireMontant(deb, modele.formatMontant)) : 0);
      }
      if (modele.inverserSigne) montant = -montant;
      const l: LigneImport = { date, libelle, montant };
      if (c.isin !== undefined && cells[c.isin]) l.isin = cells[c.isin]!.trim().toUpperCase();
      if (c.quantite !== undefined && cells[c.quantite]) l.quantite = lireMontant(cells[c.quantite]!, modele.formatMontant);
      if (c.prix !== undefined && cells[c.prix]) l.prix = lireMontant(cells[c.prix]!, modele.formatMontant);
      if (l.isin && !isinValide(l.isin)) throw new Error(`ISIN invalide : ${l.isin}`);
      lignes.push(l);
    } catch (e) {
      erreurs.push({ ligne: n, message: (e as Error).message });
    }
  });
  return { lignes, erreurs };
}

/** Contrôle de la clé d'un ISIN (algorithme de Luhn sur les chiffres convertis). */
export function isinValide(isin: string): boolean {
  if (!/^[A-Z]{2}[A-Z0-9]{9}\d$/.test(isin)) return false;
  const chiffres = isin.split('').map((ch) => (/[A-Z]/.test(ch) ? String(ch.charCodeAt(0) - 55) : ch)).join('');
  let somme = 0;
  let double = false;
  for (let i = chiffres.length - 1; i >= 0; i--) {
    let d = Number(chiffres[i]);
    if (double) { d *= 2; if (d > 9) d -= 9; }
    somme += d;
    double = !double;
  }
  return somme % 10 === 0;
}

const cle = (l: { date: string; montant: number; libelle: string }) => `${l.date}|${l.montant.toFixed(2)}|${l.libelle.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 16)}`;

/**
 * Doublons probables : même date, même montant, libellé proche.
 * Ne supprime rien : renvoie les lignes à proposer comme doublons dans l'aperçu.
 */
export function detecterDoublons<T extends { date: string; montant: number; libelle: string }>(existantes: readonly T[], nouvelles: readonly T[]): { nouvelles: T[]; doublons: T[] } {
  const vues = new Map<string, number>();
  for (const e of existantes) vues.set(cle(e), (vues.get(cle(e)) ?? 0) + 1);
  const res = { nouvelles: [] as T[], doublons: [] as T[] };
  for (const n of nouvelles) {
    const k = cle(n);
    const restant = vues.get(k) ?? 0;
    if (restant > 0) { res.doublons.push(n); vues.set(k, restant - 1); }
    else res.nouvelles.push(n);
  }
  return res;
}

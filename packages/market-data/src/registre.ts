/**
 * Registre interne des identifiants : pour chaque ISIN, ses lieux de cotation (MIC, mnémonique, devise),
 * son lieu principal (cours de valorisation) et ses codes chez chaque source de cours.
 * Alimenté au back-office (BO-07) depuis FIRDS (ESMA), OpenFIGI, le fichier ISO 10383 et les listes des fournisseurs sous licence.
 */

import { lieuParMic, micValide, type LieuExecution, LIEUX } from './lieux.ts';
import { sourceParId, SOURCES, type SourceCours } from './sources.ts';

export interface CotationActif {
  mic: string;
  /** Mnémonique local sur ce lieu (ex. code Euronext, code Xetra). */
  mnemonique: string;
  devise: string;
}

export interface EntreeRegistre {
  isin: string;
  nom: string;
  /** Identifiant FIGI composite, quand il est connu (OpenFIGI). */
  figi?: string;
  /** Lieu principal (MIC) : sert au cours de valorisation du patrimoine. */
  lieuPrincipal: string;
  cotations: readonly CotationActif[];
  /** Code de l'actif chez chaque source (id de source → code). */
  codes: Readonly<Record<string, string>>;
  /** Date de la dernière mise à jour du registre pour cet ISIN (ISO). */
  majLe: string;
}

/** Contrôle de format et clé de l'ISIN (ISO 6166 : 2 lettres, 9 caractères, 1 chiffre de contrôle selon Luhn). */
export function isinValide(isin: string): boolean {
  if (!/^[A-Z]{2}[A-Z0-9]{9}[0-9]$/.test(isin)) return false;
  const chiffres = [...isin].map((c) => (/[0-9]/.test(c) ? c : String(c.charCodeAt(0) - 55))).join('');
  let somme = 0;
  let double = false;
  for (let i = chiffres.length - 1; i >= 0; i--) {
    let n = Number(chiffres[i]);
    if (double) { n *= 2; if (n > 9) n -= 9; }
    somme += n;
    double = !double;
  }
  return somme % 10 === 0;
}

/** Calcule le chiffre de contrôle d'un ISIN à partir de ses 11 premiers caractères. */
export function cleIsin(base: string): string {
  for (let c = 0; c <= 9; c++) if (isinValide(base + c)) return base + c;
  throw new Error('Base d\'ISIN invalide');
}

export interface Anomalie {
  isin: string;
  champ: string;
  message: string;
}

/** Vérifie une entrée du registre avant publication au back-office. */
export function verifierEntree(e: EntreeRegistre, lieux: readonly LieuExecution[] = LIEUX, sources: readonly SourceCours[] = SOURCES): Anomalie[] {
  const a: Anomalie[] = [];
  const err = (champ: string, message: string) => a.push({ isin: e.isin, champ, message });
  if (!isinValide(e.isin)) err('isin', 'ISIN invalide (format ou clé)');
  if (e.cotations.length === 0) err('cotations', 'Aucun lieu de cotation');
  const mics = new Set<string>();
  for (const c of e.cotations) {
    if (!micValide(c.mic)) err('cotations', `MIC invalide : ${c.mic}`);
    else if (!lieuParMic(c.mic, lieux)) err('cotations', `Lieu inconnu du référentiel : ${c.mic}`);
    if (mics.has(c.mic)) err('cotations', `Lieu en double : ${c.mic}`);
    mics.add(c.mic);
    if (!/^[A-Z]{3}$/.test(c.devise)) err('cotations', `Devise invalide sur ${c.mic} : ${c.devise}`);
    if (!c.mnemonique.trim()) err('cotations', `Mnémonique manquant sur ${c.mic}`);
  }
  if (!mics.has(e.lieuPrincipal)) err('lieuPrincipal', 'Le lieu principal doit faire partie des lieux de cotation');
  for (const [id, code] of Object.entries(e.codes)) {
    if (!sourceParId(id, sources)) err('codes', `Source inconnue : ${id}`);
    if (!code.trim()) err('codes', `Code vide pour ${id}`);
  }
  return a;
}

/** Recherche dans le registre par ISIN, mnémonique ou code chez une source. */
export function rechercherRegistre(registre: readonly EntreeRegistre[], requete: string): EntreeRegistre[] {
  const q = requete.trim().toUpperCase();
  if (!q) return [];
  return registre.filter((e) => e.isin === q || e.figi === q || e.cotations.some((c) => c.mnemonique.toUpperCase() === q) || Object.values(e.codes).some((c) => c.toUpperCase() === q));
}

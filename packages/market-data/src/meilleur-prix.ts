/**
 * Meilleur prix affiché sur la fiche d'un actif (mode « Meilleur prix », par défaut) et comparatif des lieux.
 * LiVi n'exécute aucun ordre : ces prix sont informatifs. Le patrimoine est valorisé au cours du lieu principal (coursDeValorisation).
 *
 * Vocabulaire : prixAchat = prix auquel on peut acheter (meilleure offre de vente du carnet) ;
 * prixVente = prix auquel on peut vendre (meilleure offre d'achat du carnet).
 * Le meilleur prix d'achat est le plus bas, le meilleur prix de vente le plus haut.
 */

import type { Fraicheur } from './fournisseurs.ts';
import { lieuParMic, LIEUX, type LieuExecution } from './lieux.ts';
import type { EntreeRegistre } from './registre.ts';
import { sourceParId, sourceUtilisable, SOURCES, type SourceCours } from './sources.ts';

export interface CotationLieu {
  mic: string;
  /** Source qui a fourni la cotation (id de SourceCours). */
  source: string;
  devise: string;
  prixAchat?: number;
  prixVente?: number;
  dernier?: number;
  /** Cours de clôture de la dernière séance. */
  cloture?: number;
  horodatage: string; // ISO
  fraicheur: Fraicheur;
}

export interface PrixRetenu {
  prix: number;
  mic: string;
  lieu: string;
  source: string;
  mention: string;
  fraicheur: Fraicheur;
  horodatage: string;
  /** Devise d'origine, quand le prix a été converti. */
  deviseOrigine?: string;
}

export interface Exclusion {
  mic: string;
  source: string;
  raison: 'licence' | 'fraicheur' | 'trop-ancienne' | 'devise' | 'sans-prix' | 'lieu-inconnu';
}

export interface MeilleurPrix {
  achat: PrixRetenu | null;
  vente: PrixRetenu | null;
  /** Écart entre meilleur prix d'achat et meilleur prix de vente, en pourcentage du prix d'achat. */
  ecartPct: number | null;
  /** Nombre de lieux comparés après filtrage. */
  lieuxCompares: number;
  exclus: Exclusion[];
}

export interface OptionsMeilleurPrix {
  /** Devise d'affichage (EUR par défaut). */
  devise?: string;
  /** Conversion de devises ; sans elle, les cotations dans une autre devise sont écartées. */
  change?: (montant: number, de: string, vers: string) => number | null;
  /** Écart maximal (en secondes) entre une cotation et la plus récente de sa classe de fraîcheur. */
  ecartMaxSecondes?: Partial<Record<Fraicheur, number>>;
  sources?: readonly SourceCours[];
  lieux?: readonly LieuExecution[];
}

const RANG: Record<Fraicheur, number> = { 'temps-reel': 0, 'differe-15': 1, cloture: 2 };
const ECART_DEFAUT: Record<Fraicheur, number> = { 'temps-reel': 60, 'differe-15': 120, cloture: 86_400 };

interface Candidate { c: CotationLieu; lieu: LieuExecution; source: SourceCours; achat?: number; vente?: number }

/**
 * Filtre les cotations comparables : source sous licence d'affichage, lieu connu, même classe de fraîcheur (la meilleure disponible),
 * horodatages proches, même devise (ou convertie).
 */
function comparables(cotations: readonly CotationLieu[], o: OptionsMeilleurPrix): { retenues: Candidate[]; exclus: Exclusion[] } {
  const sources = o.sources ?? SOURCES;
  const lieux = o.lieux ?? LIEUX;
  const devise = o.devise ?? 'EUR';
  const exclus: Exclusion[] = [];
  const base: Candidate[] = [];
  for (const c of cotations) {
    const source = sourceParId(c.source, sources);
    const lieu = lieuParMic(c.mic, lieux);
    if (!source || !sourceUtilisable(source)) { exclus.push({ mic: c.mic, source: c.source, raison: 'licence' }); continue; }
    if (!lieu) { exclus.push({ mic: c.mic, source: c.source, raison: 'lieu-inconnu' }); continue; }
    if (c.prixAchat === undefined && c.prixVente === undefined) { exclus.push({ mic: c.mic, source: c.source, raison: 'sans-prix' }); continue; }
    let achat = c.prixAchat;
    let vente = c.prixVente;
    if (c.devise !== devise) {
      const conv = (v: number | undefined) => (v === undefined || !o.change ? null : o.change(v, c.devise, devise));
      const a = conv(achat);
      const v = conv(vente);
      if ((achat !== undefined && a === null) || (vente !== undefined && v === null)) { exclus.push({ mic: c.mic, source: c.source, raison: 'devise' }); continue; }
      achat = a ?? undefined;
      vente = v ?? undefined;
    }
    base.push({ c, lieu, source, achat, vente });
  }
  if (base.length === 0) return { retenues: [], exclus };
  const meilleure = Math.min(...base.map((b) => RANG[b.c.fraicheur]));
  const ecarts = { ...ECART_DEFAUT, ...o.ecartMaxSecondes };
  const memeClasse = base.filter((b) => {
    if (RANG[b.c.fraicheur] !== meilleure) { exclus.push({ mic: b.c.mic, source: b.c.source, raison: 'fraicheur' }); return false; }
    return true;
  });
  const recente = Math.max(...memeClasse.map((b) => Date.parse(b.c.horodatage)));
  const retenues = memeClasse.filter((b) => {
    if ((recente - Date.parse(b.c.horodatage)) / 1000 > ecarts[b.c.fraicheur]) { exclus.push({ mic: b.c.mic, source: b.c.source, raison: 'trop-ancienne' }); return false; }
    return true;
  });
  return { retenues, exclus };
}

function retenu(b: Candidate, prix: number, devise: string): PrixRetenu {
  return { prix, mic: b.c.mic, lieu: b.lieu.nom, source: b.source.nom, mention: b.source.mention, fraicheur: b.c.fraicheur, horodatage: b.c.horodatage, ...(b.c.devise !== devise ? { deviseOrigine: b.c.devise } : {}) };
}

/** À prix égal, on garde le lieu principal, puis la cotation la plus récente. */
function departage(a: Candidate, b: Candidate, principal?: string): number {
  if (principal && (a.c.mic === principal) !== (b.c.mic === principal)) return a.c.mic === principal ? -1 : 1;
  return Date.parse(b.c.horodatage) - Date.parse(a.c.horodatage);
}

export function meilleurPrix(cotations: readonly CotationLieu[], o: OptionsMeilleurPrix & { lieuPrincipal?: string } = {}): MeilleurPrix {
  const devise = o.devise ?? 'EUR';
  const { retenues, exclus } = comparables(cotations, o);
  const achats = retenues.filter((b) => b.achat !== undefined).sort((x, y) => x.achat! - y.achat! || departage(x, y, o.lieuPrincipal));
  const ventes = retenues.filter((b) => b.vente !== undefined).sort((x, y) => y.vente! - x.vente! || departage(x, y, o.lieuPrincipal));
  const achat = achats[0] ? retenu(achats[0], achats[0].achat!, devise) : null;
  const vente = ventes[0] ? retenu(ventes[0], ventes[0].vente!, devise) : null;
  const ecartPct = achat && vente ? ((achat.prix - vente.prix) / achat.prix) * 100 : null;
  return { achat, vente, ecartPct, lieuxCompares: new Set(retenues.map((b) => b.c.mic)).size, exclus };
}

export type TriLieux = 'prix-achat-croissant' | 'prix-achat-decroissant' | 'alphabetique';

export interface LigneComparatif {
  mic: string;
  lieu: string;
  source: string;
  prixAchat?: number;
  prixVente?: number;
  ecartPct?: number;
  fraicheur: Fraicheur;
  horodatage: string;
  /** Prix d'achat le plus bas parmi les lieux comparés. */
  achatLePlusBas: boolean;
  /** Prix d'achat le plus haut parmi les lieux comparés. */
  achatLePlusHaut: boolean;
  /** Prix de vente le plus haut parmi les lieux comparés. */
  venteLaPlusHaute: boolean;
}

/** Comparatif des lieux d'un actif, trié par prix ou par ordre alphabétique. Les cotations écartées ne sont pas listées. */
export function comparatifLieux(cotations: readonly CotationLieu[], tri: TriLieux = 'prix-achat-croissant', o: OptionsMeilleurPrix = {}): LigneComparatif[] {
  const { retenues } = comparables(cotations, o);
  const achats = retenues.map((b) => b.achat).filter((v): v is number => v !== undefined);
  const ventes = retenues.map((b) => b.vente).filter((v): v is number => v !== undefined);
  const min = achats.length ? Math.min(...achats) : undefined;
  const max = achats.length ? Math.max(...achats) : undefined;
  const venteMax = ventes.length ? Math.max(...ventes) : undefined;
  const lignes: LigneComparatif[] = retenues.map((b) => ({
    mic: b.c.mic,
    lieu: b.lieu.nom,
    source: b.source.nom,
    prixAchat: b.achat,
    prixVente: b.vente,
    ecartPct: b.achat !== undefined && b.vente !== undefined ? ((b.achat - b.vente) / b.achat) * 100 : undefined,
    fraicheur: b.c.fraicheur,
    horodatage: b.c.horodatage,
    achatLePlusBas: achats.length > 1 && b.achat === min,
    achatLePlusHaut: achats.length > 1 && b.achat === max && min !== max,
    venteLaPlusHaute: ventes.length > 1 && b.vente === venteMax,
  }));
  const parNom = (x: LigneComparatif, y: LigneComparatif) => x.lieu.localeCompare(y.lieu, 'fr');
  const sansPrix = Number.POSITIVE_INFINITY;
  if (tri === 'alphabetique') return lignes.sort(parNom);
  if (tri === 'prix-achat-decroissant') return lignes.sort((x, y) => (y.prixAchat ?? -sansPrix) - (x.prixAchat ?? -sansPrix) || parNom(x, y));
  return lignes.sort((x, y) => (x.prixAchat ?? sansPrix) - (y.prixAchat ?? sansPrix) || parNom(x, y));
}

export interface CoursValorisation {
  prix: number;
  mic: string;
  source: string;
  nature: 'dernier' | 'cloture';
  horodatage: string;
}

/**
 * Cours de valorisation du patrimoine : celui du lieu principal du registre (dernier cours, sinon clôture),
 * pour rester stable d'un jour à l'autre et ne pas dépendre du lieu le plus favorable à l'instant.
 */
export function coursDeValorisation(entree: Pick<EntreeRegistre, 'lieuPrincipal'>, cotations: readonly CotationLieu[], sources: readonly SourceCours[] = SOURCES): CoursValorisation | null {
  const candidates = cotations
    .filter((c) => c.mic === entree.lieuPrincipal)
    .filter((c) => { const s = sourceParId(c.source, sources); return s !== undefined && sourceUtilisable(s); })
    .sort((a, b) => RANG[a.fraicheur] - RANG[b.fraicheur] || Date.parse(b.horodatage) - Date.parse(a.horodatage));
  for (const c of candidates) {
    if (c.dernier !== undefined) return { prix: c.dernier, mic: c.mic, source: c.source, nature: 'dernier', horodatage: c.horodatage };
    if (c.cloture !== undefined) return { prix: c.cloture, mic: c.mic, source: c.source, nature: 'cloture', horodatage: c.horodatage };
  }
  return null;
}

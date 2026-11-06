import { createHash } from 'node:crypto';

/**
 * Journal d'audit chaîné (BO-16) : chaque entrée contient l'empreinte de la précédente.
 * Toute modification ou suppression d'une entrée casse la chaîne et se détecte avec `verifierChaine`.
 * Aucune donnée financière : acteur et cible pseudonymisés, détail limité aux métadonnées.
 */
export interface EntreeAudit {
  numero: number;
  horodatage: string;
  acteur: string; // ex. admin:7f3c…, utilisateur:9a1b…, systeme
  action: string; // ex. ajustement.creer, maintenance.activer, session.revoquer, export.donnees
  cible?: string;
  details?: Record<string, string | number | boolean>;
  precedente: string;
  empreinte: string;
}

const empreinte = (e: Omit<EntreeAudit, 'empreinte'>) =>
  createHash('sha256').update(JSON.stringify([e.numero, e.horodatage, e.acteur, e.action, e.cible ?? null, e.details ?? null, e.precedente])).digest('hex');

export function ajouter(journal: readonly EntreeAudit[], e: { acteur: string; action: string; cible?: string; details?: EntreeAudit['details']; horodatage?: string }): EntreeAudit {
  const derniere = journal[journal.length - 1];
  const base = { numero: (derniere?.numero ?? 0) + 1, horodatage: e.horodatage ?? new Date().toISOString(), acteur: e.acteur, action: e.action, cible: e.cible, details: e.details, precedente: derniere?.empreinte ?? '0'.repeat(64) };
  return { ...base, empreinte: empreinte(base) };
}

export function verifierChaine(journal: readonly EntreeAudit[]): { valide: boolean; rupture?: number } {
  let precedente = '0'.repeat(64);
  for (const e of journal) {
    const { empreinte: emp, ...reste } = e;
    if (e.precedente !== precedente || empreinte(reste) !== emp) return { valide: false, rupture: e.numero };
    precedente = emp;
  }
  return { valide: true };
}

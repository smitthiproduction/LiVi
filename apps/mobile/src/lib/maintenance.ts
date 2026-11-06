import { appel } from './api.ts';

/** État renvoyé par l'API (drapeaux évalués pour l'utilisateur, maintenance, compte de test). */
export interface EtatService {
  maintenance: { active: boolean; message?: string; fonctions: string[] };
  drapeaux: Record<string, boolean>;
  compteTest: boolean;
  versionMinimale: string;
}

export async function lireEtatService(): Promise<EtatService> {
  return appel<EtatService>('/v1/etat');
}

import type { FastifyInstance } from 'fastify';
import { evaluer, maintenanceEnCours, type Drapeau, type Maintenance, type Ajustement } from '../drapeaux/evaluation.ts';

/** État du service pour l'utilisateur connecté : drapeaux évalués, maintenance, compte de test, version minimale. */
export async function routesEtat(app: FastifyInstance) {
  app.get('/etat', async (req) => {
    // À brancher : utilisateur depuis la session, drapeaux, ajustements et maintenance depuis la base.
    const ctx = { utilisateurId: 'anonyme', offre: 'essentiel' as const, compteTest: false };
    const drapeaux: Drapeau[] = [];
    const ajustements: Ajustement[] = [];
    const maintenance: Maintenance | undefined = undefined;
    void req;
    return {
      maintenance: { active: maintenanceEnCours(maintenance, '*', ctx), fonctions: [] },
      drapeaux: Object.fromEntries(drapeaux.map((d) => [d.cle, evaluer(d, ctx, ajustements, maintenance).valeur])),
      compteTest: ctx.compteTest,
      versionMinimale: '0.1.0',
    };
  });
}

import type { FastifyInstance } from 'fastify';

/** Santé du service (BO-23) : vivant et prêt (base, files, fournisseurs). */
export async function routesSante(app: FastifyInstance) {
  app.get('/sante/vivant', async () => ({ ok: true }));
  app.get('/sante/pret', async () => ({ ok: true, dependances: { base: 'à brancher', file: 'à brancher', agregateur: 'à brancher', marches: 'à brancher', ia: 'à brancher' } }));
}

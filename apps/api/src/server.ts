import Fastify from 'fastify';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import { randomUUID } from 'node:crypto';
import { message } from './modules/messages/catalogue.ts';
import { routesSante } from './modules/sante/routes.ts';
import { routesEtat } from './modules/etat/routes.ts';
import { routesAuth } from './modules/auth/routes.ts';

/**
 * API LiVi. Principes : aucune donnée financière dans les journaux, erreurs renvoyées avec un code
 * du catalogue, identifiant de corrélation sur chaque réponse, limitation de débit, en-têtes de sécurité.
 */
export async function construire() {
  const app = Fastify({
    genReqId: () => randomUUID(),
    logger: {
      level: process.env.LOG_LEVEL ?? 'info',
      redact: { paths: ['req.headers.authorization', 'req.body', '*.montant', '*.iban', '*.email', '*.identityToken', '*.idToken', '*.code'], censor: '[masqué]' },
    },
  });
  await app.register(helmet);
  await app.register(rateLimit, { max: 120, timeWindow: '1 minute' });
  app.addHook('onSend', async (req, rep) => { rep.header('x-correlation-id', req.id); });
  app.setErrorHandler((err, req, rep) => {
    const code = (err as { codeLivi?: string }).codeLivi ?? 'ERR_INCONNUE';
    const m = message(code);
    req.log[m.journaliser === 'erreur' ? 'error' : m.journaliser === 'avertissement' ? 'warn' : 'info']({ code, err: err.message }, 'erreur');
    rep.status(m.statut).send({ code: m.code, message: m.message, action: m.action });
  });
  await app.register(routesSante);
  await app.register(routesEtat, { prefix: '/v1' });
  await app.register(routesAuth, { prefix: '/v1/auth' });
  return app;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const app = await construire();
  await app.listen({ port: Number(process.env.PORT ?? 4000), host: '0.0.0.0' });
}

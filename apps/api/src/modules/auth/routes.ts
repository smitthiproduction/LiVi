import type { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { createRemoteJWKSet, jwtVerify } from 'jose';
import { createHash } from 'node:crypto';
import { controlerRevendications } from './revendications.ts';

const appleJwks = createRemoteJWKSet(new URL('https://appleid.apple.com/auth/keys'));
const googleJwks = createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'));
const erreur = (codeLivi: string) => Object.assign(new Error(codeLivi), { codeLivi });

/**
 * Connexion Apple, Google et e-mail (USR-01 à USR-03). La signature du jeton est vérifiée avec les clés
 * publiques du fournisseur, puis les revendications (émetteur, audience, expiration, nonce).
 * Création ou liaison de compte, émission de session : à brancher sur le module utilisateurs.
 */
export async function routesAuth(app: FastifyInstance) {
  app.post('/apple', { config: { rateLimit: { max: 10, timeWindow: '1 minute' } } }, async (req) => {
    const corps = z.object({ identityToken: z.string(), nonce: z.string(), nom: z.string().nullable().optional() }).parse(req.body);
    const { payload } = await jwtVerify(corps.identityToken, appleJwks).catch(() => { throw erreur('AUTH_APPLE_REFUSE'); });
    const nonceEmpreinte = createHash('sha256').update(corps.nonce).digest('hex');
    const r = controlerRevendications('apple', payload, { audiences: [process.env.APPLE_CLIENT_ID ?? 'fr.livi.app'], nonceEmpreinte });
    if (!r.ok) throw erreur('AUTH_APPLE_REFUSE');
    return { jeton: 'à-émettre', sujet: r.sub };
  });
  app.post('/google', { config: { rateLimit: { max: 10, timeWindow: '1 minute' } } }, async (req) => {
    const corps = z.object({ idToken: z.string() }).parse(req.body);
    const { payload } = await jwtVerify(corps.idToken, googleJwks).catch(() => { throw erreur('AUTH_GOOGLE_REFUSE'); });
    const audiences = [process.env.GOOGLE_IOS_CLIENT_ID, process.env.GOOGLE_WEB_CLIENT_ID].filter((x): x is string => !!x);
    const r = controlerRevendications('google', payload, { audiences });
    if (!r.ok) throw erreur('AUTH_GOOGLE_REFUSE');
    return { jeton: 'à-émettre', sujet: r.sub };
  });
  app.post('/email/code', { config: { rateLimit: { max: 5, timeWindow: '15 minutes' } } }, async (req) => {
    z.object({ email: z.string().email() }).parse(req.body);
    // À brancher : code à 6 chiffres, haché en base, valable 15 minutes, envoi par le service d'e-mail.
    return { envoye: true };
  });
  app.post('/email/verifier', { config: { rateLimit: { max: 10, timeWindow: '15 minutes' } } }, async (req) => {
    z.object({ email: z.string().email(), code: z.string().regex(/^\d{6}$/) }).parse(req.body);
    throw erreur('AUTH_CODE_INCORRECT'); // à brancher
  });
}

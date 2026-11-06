/**
 * Contrôle des revendications d'un jeton d'identité Apple ou Google, après vérification de la signature
 * (clés publiques JWKS du fournisseur, faite par la bibliothèque JOSE dans la route).
 */
export interface Revendications { iss?: string; aud?: string | string[]; exp?: number; iat?: number; sub?: string; nonce?: string; email?: string; email_verified?: boolean | string }

export const EMETTEURS = {
  apple: ['https://appleid.apple.com'],
  google: ['https://accounts.google.com', 'accounts.google.com'],
} as const;

export function controlerRevendications(
  fournisseur: keyof typeof EMETTEURS,
  r: Revendications,
  attendu: { audiences: readonly string[]; nonceEmpreinte?: string; maintenant?: number; toleranceSecondes?: number },
): { ok: true; sub: string } | { ok: false; raison: string } {
  const t = attendu.maintenant ?? Math.floor(Date.now() / 1000);
  const tol = attendu.toleranceSecondes ?? 60;
  if (!r.iss || !(EMETTEURS[fournisseur] as readonly string[]).includes(r.iss)) return { ok: false, raison: 'emetteur' };
  const aud = Array.isArray(r.aud) ? r.aud : r.aud ? [r.aud] : [];
  if (!aud.some((a) => attendu.audiences.includes(a))) return { ok: false, raison: 'audience' };
  if (!r.exp || r.exp + tol < t) return { ok: false, raison: 'expire' };
  if (r.iat && r.iat - tol > t) return { ok: false, raison: 'emis-dans-le-futur' };
  if (!r.sub) return { ok: false, raison: 'sujet' };
  if (attendu.nonceEmpreinte !== undefined && r.nonce !== attendu.nonceEmpreinte) return { ok: false, raison: 'nonce' };
  return { ok: true, sub: r.sub };
}

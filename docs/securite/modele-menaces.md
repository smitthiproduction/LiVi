# Modèle de menaces (première version)

| Menace | Cible | Parade principale |
|---|---|---|
| Vol de compte (hameçonnage, réutilisation de mot de passe) | Compte LiVi | Connexion Apple/Google/e-mail à usage unique, clés d'accès, 2FA, alerte de nouvelle connexion, révocation à distance |
| Force brute sur les codes e-mail | API auth | 5 tentatives par 15 minutes, codes hachés, expiration 15 minutes |
| Falsification de jeton Apple ou Google | API auth | Signature JWKS, émetteur, audience, expiration, nonce |
| Vol ou perte du téléphone | Données locales | SQLCipher, clé dans le trousseau « appareil déverrouillé seulement », verrou biométrique |
| Fuite de la base serveur | Serveur | Pas de transactions en clair ; blobs chiffrés côté client ; e-mails hachés |
| Abus d'un administrateur | Back-office | Rôles, 2FA, accès assisté consenti, double validation globale, audit chaîné |
| Injection (SQL, CSV, script) | API, imports, web | Prisma paramétré, schémas zod, neutralisation des formules à l'export CSV, CSP stricte |
| Dépendance compromise | Chaîne d'approvisionnement | Versions épinglées, revue de dépendances, alertes, CodeQL |
| Fuite par les journaux | Supervision | Masquage configuré, aucune donnée financière, rétention courte |
| Abus de LiVi IA (coût, contournement) | Passerelle IA | Quotas, coupe-circuit, refus des demandes de conseil, clé côté serveur uniquement |
| Usurpation de LiVi (faux site, faux e-mails) | Utilisateurs | SPF, DKIM, DMARC, domaine unique, communication claire |

À revoir à chaque nouvelle surface (ordres courtiers, B2B, Android).

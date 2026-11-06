# Authentification et comptes

## Méthodes
| Méthode | Surfaces | Détail |
|---|---|---|
| Se connecter avec Apple | iPhone, web | Obligatoire sur iOS dès qu'une connexion tierce est proposée (règles App Store) ; adresse masquée acceptée |
| Google | iPhone, Android, web | Identité seulement (pas d'autre donnée Google) |
| E-mail | Toutes | Code à 6 chiffres ou lien, valable 15 minutes, usage unique ; mot de passe facultatif (haché, jamais en clair) |
| Clé d'accès (passkey) | Toutes | V1.5 |

## Flux Apple
1. L'app génère un nonce aléatoire, envoie son empreinte SHA-256 à Apple.
2. Apple renvoie un jeton d'identité signé.
3. L'API vérifie la signature (clés publiques Apple), puis les revendications : émetteur `https://appleid.apple.com`, audience `fr.livi.app`, expiration, nonce (`controlerRevendications`).
4. L'API crée ou retrouve le compte (identité `APPLE` + `sub`), ouvre une session.

Google suit le même schéma (émetteurs `accounts.google.com`, audiences des clients iOS et web).

## Sessions
- Jeton de session court, rafraîchi ; rangé dans le trousseau (iOS) ou le keystore (Android), jamais dans un stockage simple ; cookie `HttpOnly`, `Secure`, `SameSite=Strict` sur le web.
- Liste des appareils, révocation à distance, alerte de nouvelle connexion (USR-05).
- Verrouillage local par Face ID, Touch ID, empreinte ou code (USR-07).

## Liaison et récupération
- Plusieurs méthodes liées au même compte (USR-06), après vérification forte de la méthode existante.
- Perte de toutes les méthodes : récupération par e-mail vérifié ; les données chiffrées de bout en bout exigent la clé de récupération de l'utilisateur (LiVi ne peut pas la reconstituer).

## Sécurité
Limitation des tentatives (5 codes par 15 minutes), journal d'audit des connexions et liaisons, 2FA pour activer la synchronisation et LiVi IA, comptes du back-office en 2FA obligatoire.

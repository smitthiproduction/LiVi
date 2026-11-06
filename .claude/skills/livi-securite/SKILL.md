---
name: livi-securite
description: Faire une revue de sécurité d'un changement : authentification, sessions, chiffrement, secrets, droits, entrées, dépendances, journaux. À utiliser pour toute modification sensible et avant chaque version.
---

# Revue de sécurité

Référentiels : OWASP ASVS (API, web), OWASP MASVS (mobile), `docs/securite/`.

## Contrôles
1. **Secrets** : `git diff` et historique sans clé ni jeton ; variables dans le gestionnaire de secrets ; rien dans l'app cliente.
2. **Authentification** : jeton d'identité Apple ou Google vérifié côté serveur (signature, audience, émetteur, expiration, nonce) ; lien e-mail à usage unique de 15 minutes ; limitation des tentatives ; sessions révocables.
3. **Autorisation** : chaque route vérifie l'utilisateur et le rôle côté serveur ; aucun identifiant prévisible exposé.
4. **Données** : chiffrement local, synchro chiffrée de bout en bout, TLS ; aucune donnée financière dans journaux, erreurs, tickets.
5. **Entrées** : schéma de validation ; taille maximale des imports ; protection contre l'injection CSV (cellules commençant par =, +, -, @ à l'export).
6. **Dépendances** : alertes ouvertes traitées ; nouvelle dépendance justifiée.
7. **Journal d'audit** : l'action sensible y est écrite.

## Sortie
Constats classés critique, élevé, moyen, faible, avec fichier, scénario et correction.

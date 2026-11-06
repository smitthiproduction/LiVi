# Liste de contrôle de sécurité

## À chaque pull request sensible
- [ ] Aucun secret dans le diff ni dans l'historique.
- [ ] Entrées validées par schéma ; tailles limitées.
- [ ] Autorisation vérifiée côté serveur (utilisateur, rôle, offre, drapeau).
- [ ] Journaux sans donnée financière ni secret.
- [ ] Action sensible écrite dans l'audit.
- [ ] Nouvelle dépendance justifiée et épinglée.

## Mobile (MASVS)
- [ ] Jetons et clés dans le trousseau ou le keystore.
- [ ] Base locale chiffrée.
- [ ] Pas de données sensibles dans les captures d'écran du sélecteur d'apps (masquage à la mise en arrière-plan).
- [ ] Notifications sans montant sur l'écran verrouillé par défaut.
- [ ] Liens profonds validés.

## Web et back-office (ASVS)
- [ ] CSP stricte, HSTS, cookies `HttpOnly` `Secure` `SameSite=Strict`.
- [ ] Protection CSRF sur les formulaires du back-office.
- [ ] 2FA obligatoire pour le back-office.

## Avant une version
- [ ] Analyse CodeQL et dépendances verte.
- [ ] Revue de l'agent `securite`.
- [ ] Audit externe avant le lancement public (juillet 2027), puis annuel.

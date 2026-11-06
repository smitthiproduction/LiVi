# Politique de sécurité

LiVi traite des données financières : la sécurité est une fonctionnalité, pas une étape finale.

## Engagements
1. **Minimisation** : le serveur ne détient pas les transactions en clair ; il ne collecte que ce qui sert le service.
2. **Chiffrement** : local (SQLCipher), de bout en bout pour la synchro, TLS partout.
3. **Authentification forte** : Apple, Google, e-mail à usage unique, clés d'accès ; 2FA pour la synchro, LiVi IA et le back-office.
4. **Moindre privilège** : rôles du back-office, accès assisté consenti et journalisé, secrets dans un gestionnaire dédié.
5. **Traçabilité** : journal d'audit chaîné, infalsifiable sans détection.
6. **Vérification continue** : revue `securite` sur toute modification sensible, analyse de code et de dépendances en intégration continue, audit externe avant le lancement puis chaque année.

## Référentiels
OWASP ASVS niveau 2 (API, web, back-office), OWASP MASVS (mobile), recommandations ANSSI pour l'hébergement et les mots de passe.

## Signaler une vulnérabilité
Voir `SECURITY.md` à la racine.

Documents : `modele-menaces.md`, `checklist.md`, `reponse-incident.md`.

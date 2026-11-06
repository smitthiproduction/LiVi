# Réponse à un incident de sécurité

1. **Détecter** : alerte de supervision, signalement (`SECURITY.md`), anomalie dans l'audit.
2. **Contenir** : maintenance de la fonction, révocation des sessions concernées, rotation des secrets.
3. **Évaluer** : données touchées, utilisateurs concernés, cause.
4. **Notifier** : en cas de violation de données personnelles, notification à la CNIL dans les 72 heures ; information des utilisateurs si le risque est élevé.
5. **Corriger** : correctif, test, audit ciblé.
6. **Apprendre** : post-mortem dans `docs/exploitation/incidents/`, mise à jour du modèle de menaces.

Contacts et registre des violations : tenus hors du dépôt (gestionnaire de secrets et outil interne).

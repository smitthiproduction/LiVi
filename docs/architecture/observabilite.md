# Observabilité : journaux, erreurs, audits, santé

| Signal | Outil | Contenu | Rétention | Back-office |
|---|---|---|---|---|
| Journaux techniques | Pino (API) vers plateforme de journaux UE | Niveau, service, version, identifiant de corrélation, utilisateur pseudonymisé ; **jamais** de montant, IBAN, e-mail, jeton, code | 30 jours | BO-15 |
| Erreurs et plantages | Sentry (mobile, web, API) ou équivalent UE | Pile, version, appareil, format d'écran, fil d'actions sans donnée financière | 90 jours | BO-17 |
| Journal d'audit | Table chaînée (`audit/journal.ts`) | Actions d'administration et actions sensibles | 5 ans | BO-16 |
| Santé | Sondes `/sante/vivant`, `/sante/pret`, supervision externe | API, base, files, agrégateur, marchés, IA | — | BO-23 |
| Exécutions de tests | Table `ExecutionTest` | Scénario, compte de test, résultat par étape, durée, version | 1 an | BO-22 |
| Usage IA | Table `UsageIa` | Tâche, modèle, crédits, coût | 3 ans | Quotas IA |

## Corrélation
Chaque requête reçoit un identifiant (`x-correlation-id`) renvoyé au client ; un signalement depuis l'app (USR-10) l'inclut, ce qui relie signalement, journaux et erreur.

## Messages d'erreur
Toute erreur visible a un code du catalogue (`apps/api/src/modules/messages/catalogue.ts`) : message en français, action proposée, niveau de journalisation. Le back-office (BO-18) édite le catalogue ; un test refuse les points d'exclamation et les emoji.

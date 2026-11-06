# Données et chiffrement

| Donnée | Où | Protection |
|---|---|---|
| Transactions, positions, soldes, consignes | Appareil | SQLite chiffré (SQLCipher), clé aléatoire dans le trousseau, accessible seulement appareil déverrouillé |
| Sauvegarde et synchro (Plus, Signature) | Serveur UE | Chiffrée côté client (clé dérivée de la clé de récupération), illisible pour LiVi |
| Données de l'agrégateur | Relais serveur | Chiffrées pour l'appareil puis effacées du relais |
| Extrait envoyé à LiVi IA | API Claude, le temps de la tâche | Minimisé, montré à l'utilisateur avant envoi quand il touche ses montants |
| Compte, offre, sessions, consentements | Serveur UE | Chiffrement au repos du fournisseur, accès restreint |
| Agrégats anonymes (si consentement) | Serveur UE | Compteurs sans identifiant, publication au-delà de 50 contributeurs, bruit statistique |

## Règles
- TLS partout ; HSTS sur le web.
- Aucune donnée financière dans les journaux, erreurs, tickets, analyses.
- Chaque transaction porte sa source (synchro, CSV, saisie) : seules les sources CSV et saisie alimentent les statistiques anonymes (DSP2, article 67).
- Export complet (CSV, JSON) et suppression du compte depuis l'app.
- Perte de l'appareil sans sauvegarde = perte des données : l'accueil impose un choix de sauvegarde.

# Ordres transmis aux courtiers

**Statut : désactivé.** Aucune transmission d'ordre tant qu'un avis juridique n'est pas versé ci-dessous. L'API renvoie `ORDRE_NON_DISPONIBLE`.

## Cinq règles non négociables (si l'avis est favorable)
1. L'initiative vient de l'utilisateur : LiVi ne propose ni actif, ni seuil, ni montant.
2. Chaque exécution est validée par l'utilisateur, au moment de l'exécution, avec authentification forte.
3. Le courtier exécute ; LiVi ne détient ni fonds, ni mandat.
4. Les ordres natifs du courtier (stop, plan d'investissement) sont créés chez lui plutôt que surveillés et déclenchés par LiVi.
5. Tout est journalisé : consigne, alerte, ordre préparé, validation, réponse du courtier.

Pour les courtiers sans API d'ordres, LiVi envoie un rappel détaillé et l'utilisateur passe l'ordre lui-même.

## Si l'avis conclut à un service réglementé
Rappels seulement, ou partenariat avec un prestataire agréé, ou demande de statut (hors budget du plan actuel).

## Avis juridique
_À verser : date, cabinet, conclusion, conditions._

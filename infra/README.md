# Infrastructure

## Local
`docker-compose.yml` lance PostgreSQL (base `livi`), Redis (files et limites de débit) et Mailpit (réception des codes de connexion par e-mail, interface sur le port 8025). Mots de passe de développement uniquement.

`DATABASE_URL=postgresql://livi:livi-dev-uniquement@localhost:5432/livi`

## Production (à définir)
- Hébergement dans l'Union européenne (données personnelles, RGPD).
- PostgreSQL managé avec chiffrement au repos et sauvegardes chiffrées.
- Secrets dans un gestionnaire dédié, jamais dans le dépôt ni dans les variables de l'intégration continue en clair.
- Supervision : journaux structurés sans donnée financière, traces, alertes (voir `docs/architecture/observabilite.md`).

# Module referentiel

Référentiel d’actifs (ISIN, tickers, éligibilité, opérations sur titres) et classification.

À implémenter en suivant `apps/api/CLAUDE.md` : routes validées par schéma, autorisation, journal sans donnée financière, erreurs du catalogue.

## Registre des identifiants et sources de cours (décision 0008)

- Modèle et contrôles : `@livi/market-data` (`EntreeRegistre`, `verifierEntree`, `rechercherRegistre`, `LIEUX`, `SOURCES`, `Courtier`).
- Routes à prévoir : lecture du registre par ISIN ou par code (`GET /referentiel/actifs/:isin`, `GET /referentiel/recherche?q=`), préférence de source de l'utilisateur (globale et par actif), courtiers par lieu (`courtiersPourLieu`, drapeau `affiliation-courtiers` lu côté serveur).
- Imports planifiés : FIRDS (ESMA), OpenFIGI, ISO 10383 ; journal sans donnée financière.


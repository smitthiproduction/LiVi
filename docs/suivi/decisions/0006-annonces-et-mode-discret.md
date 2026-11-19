# 0006 — Annonces administrables sur l'accueil et geste du mode discret

- Date : 2026-11-19
- Statut : acceptée

## Contexte
L'audit de la page d'accueil du 19 novembre (`docs/audit-figma/2026-11-19-accueil.md`, A-03 et A-07) a posé deux questions au porteur de projet.

## Décision
- **Mode discret** : double toucher sur le montant principal pour masquer, puis pour réafficher (choix du porteur). Le prototype Figma le simule par un toucher simple, faute de déclencheur double toucher.
- **Annonces** : le back-office peut afficher sur l'accueil des annonces (nouveautés, mises à jour, événements) sous forme de bannière et de fiche consultable en feuille, avec texte, images et vidéo (choix du porteur), préparées dans un éditeur promotionnel qui gère aussi les bannières et les e-mails au format MJML ou HTML, avec aperçu (BO-29, USR-12).
- **Priorité** (choix par défaut, à confirmer) : un seul bandeau visible sous l'en-tête, dans l'ordre maintenance, incident, alerte de compte, annonce. La fiche ne s'ouvre jamais d'elle-même au premier lancement ni par-dessus une maintenance ou une alerte, au plus une fois par ouverture de l'app.
- **Garde-fous** : aucune promotion de produit financier ni conseil ; validation par une seconde personne avant publication ; e-mails promotionnels seulement avec consentement et désinscription en un clic ; HTML et MJML nettoyés ; journal d'audit.

## Conséquences
Catalogue (SEC-07, USR-12, BO-29, BO-11), navigation, consentement, maquettes MQ-237 à MQ-244. L'éditeur sera dessiné au lot back-office (cadres « à concevoir » MQ-240 à MQ-242).

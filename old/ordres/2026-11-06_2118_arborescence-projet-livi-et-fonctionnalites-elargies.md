# Ordre : Arborescence du projet LiVi et fonctionnalités élargies

- Reçu le : 2026-11-06T21:18 (heure de Paris), avec une vingtaine de captures d'écran de Revolut (graphique, indicateurs, outils de dessin, onglets de fiche, statistiques clés, données financières, recherche par type, catalogue, marchés internationaux en globe 3D, indicateurs économiques par zone)
- Statut : livré (amorçage)

## Texte de l'ordre

> Attention il manque beaucoup de fonctionnalités d'analyse et de gestion inspire toi de revolut pour la visibilité des gestions des differents outils de recherche, de filtres de recherche adaptés à chaque actifs et leurs specificité, avec des menus adapté par class d'actifs. tu dois etre plus precis et elargir les fonctionnalités et les gestions complete et la visualisation complete du marché de la carte du monde interractif des marchés mondiaux aussi qui bouge en 3d comme sur revolut ou en 2d view avec les differents marchés mondiaux et leurs données complete liés. ne pas oublier les sous class d'actif (ex : obligation, obligation d'entreprise, obligation gouvernementales etc..) commence a creer l'arborescence complete d'un nouveau projet du nom de LiVi et les dossier complet voici le github a lié : https://github.com/smitthiproduction/LiVi.git  il faudra aussi l'ensemble des reglementation d'agent et de skill necessaire pour la creation du projet et son developpement front end, backend developpement d'application IOS complete utilisable sans erreur avec verifivation essaie, gestion du tableau de bord complete sur toute les fonctionnalités liés, lecture des audits, bugs, logs, message d'erreur creation pour tout ajustement par client ou en general, mise en place des securités, de la cybersecurité, gestion des comptes utilisateur connexion apple et google intégré ou mail classique. verification et integration des fonctionnalités avec test d'usage via un bouton test de fonctionalité avec un compte test actifs durant les maintenances pour resoudre des problemes. bien integrer les designs, les adaptation responsive pour les smartphone iphone, samsung, format pliable format passeport, tablette format, format web etc... attention n'oublie pas d'ajuster et de mettre a jour les fichier markdown d'instruction dans les dossiers github regulierment du au changement et n'oublie pas d'inscrire les elemnts importants et necessaires, reglementation, direction de projet artistique etc.. bref il faut un suivi complet de projet un dosier "old" pour archiver les anciens ordre et changement apporté au cas où on doit revenir en arrière.

## Interprétation

- **Ce qui est fait** :
  1. Fonctionnalités d'analyse et de gestion élargies, inspirées de Revolut mais neutres : recherche globale et filtres par classe d'actifs, menus et onglets par classe et sous-classe, fiche actif complète, graphique avancé, analyse, gestion, actualités (catalogue porté de 84 à 169 fonctionnalités).
  2. Marchés mondiaux : globe 3D animé et carte 2D, 16 places, 19 indices, statut des séances, indicateurs économiques par zone.
  3. Sous-classes d'actifs : 14 classes, 85 sous-classes (dont obligations d'État, supranationales, collectivités, entreprises catégorie investissement et haut rendement, convertibles, indexées sur l'inflation, vertes, zéro coupon, perpétuelles).
  4. Arborescence complète du dépôt LiVi : applications iPhone (Expo), web, back-office, API ; paquets partagés ; documentation ; infrastructure ; intégration continue.
  5. Règles pour les agents et skills (front, back, iOS, back-office, sécurité, tests, conformité, docs).
  6. Back-office : journaux, audits, erreurs, bugs, messages d'erreur, ajustements par client ou globaux, maintenance.
  7. Sécurité : connexion Apple, Google et e-mail, 2FA, chiffrement, audit chaîné, politique et modèle de menaces.
  8. Bouton « Tester la fonctionnalité » avec comptes de test actifs pendant les maintenances (scénario BUD-02 en exemple).
  9. Formats : iPhone, Samsung, pliables (dont format passeport), tablettes, web.
  10. Fichiers d'instructions Markdown à jour (règles, réglementation, direction artistique) et suivi de projet.
  11. Dossier `old/` pour archiver les ordres et les versions remplacées.
- **Ce qui n'est pas fait dans cet ordre** : une application iPhone finie et publiable. L'amorçage livre des socles testés et des écrans en squelette ; l'application complète se construit lot par lot selon la feuille de route.
- **Points à valider** : périmètre du MVP (66 fonctions contre 41 au business plan), accès en écriture au dépôt GitHub, avis juridiques (ordres courtiers, consentement), licences de données de marché. Les consensus d'analystes et la « suggestion » de Revolut ne sont pas repris comme avis de LiVi.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Catalogue et classification | `chef-de-projet`, `donnees-marches` | 169 fonctionnalités, 85 sous-classes, docs générées à jour |
| Socles testés | `backend-api`, `donnees-marches` | Tests purs verts sans installation |
| Squelettes des applications | `mobile-ios`, `frontend-web`, `back-office` | Navigation, écrans principaux, formats |
| Sécurité et conformité | `securite`, `conformite` | Politique, menaces, réglementation documentées |
| Docs, suivi, archive | `documentaliste` | `pnpm docs:check` vert, `old/` complet |
| Vérification | `qa-tests` | `pnpm verifier` vert, typage des paquets propre |

## Fichiers archivés avant modification

- `old/versions/2026-11-06/catalogue-v1-84-fonctionnalites.json` (catalogue v1, remplacé par `docs/produit/catalogue.json`)

## Résultat

- Commit d'amorçage sur `main` : « chore(amorcage): arborescence complète du projet LiVi » (voir `git log`).
- Catalogue de 169 fonctionnalités (MVP 66, V1.5 49, V2 46, V3 8) ; 14 classes et 85 sous-classes.
- 54 tests purs verts (paquets et logique des applications) ; `pnpm docs:check` vert.
- Écart : le push vers GitHub a été refusé faute d'accès en écriture ; le dépôt est livré en archive et en bundle Git, à pousser après installation de l'application GitHub Claude.

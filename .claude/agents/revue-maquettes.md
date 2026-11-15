---
name: revue-maquettes
description: Audite les maquettes Figma de LiVi écran par écran, au niveau d'exigence d'Apple : cohérence du parcours utilisateur, respect du cahier des charges et du catalogue, ergonomie, boutons, transitions et liens du prototype, cohérence avec le web, les autres formats et le back-office. À utiliser avant de soumettre un lot, après toute modification du parcours, et avant chaque version. Produit un rapport ; ne corrige que si on le lui demande.
---

Tu es le directeur de la revue des maquettes de LiVi. Ton exigence est celle d'une revue de conception chez Apple : chaque écran a une raison d'être, une place précise dans un parcours, une seule action principale, et rien ne surprend l'utilisateur. Tu ne valides rien par défaut : tu prouves chaque constat par ce que tu as lu dans le fichier ou dans le dépôt.

## Sources à lire avant de commencer

1. `CLAUDE.md` (racine), en particulier §2 (interdits) et §5 (design et contenu).
2. `docs/suivi/etat-du-projet.md`, puis `docs/design/parcours-utilisateur.md` : parcours cible, vocabulaire, incohérences déjà relevées.
3. `docs/design/maquettes.json` : inventaire (groupe = étape du parcours, format, état, fonctionnalités, statut, identifiant du cadre).
4. `docs/produit/catalogue.json` : chaque fonctionnalité, son offre, sa priorité et ses contraintes ; `docs/produit/navigation.md` ; `docs/produit/fonctionnalites/`.
5. `docs/design/figma.md` (pages, composants, conventions du prototype), `docs/design/direction-artistique.md`, `docs/design/accessibilite.md`, `docs/design/responsive-et-formats.md`.
6. `docs/reglementation/` : neutralité, ordres courtiers, données tierces et licences, consentement.
7. Les ordres récents dans `old/ordres/` : ce que le porteur de projet a demandé et validé.

Fichier Figma : « LiVi — Maquettes », clé `cR7EtAZKpKCkgOoEqcJ8Wq`, serveur MCP `figma` (`.mcp.json`). Ouvre une session, puis lis les cadres par leur identifiant. La page « Parcours iPhone » contient une section par étape ; les pages « 10 · Autres formats », « 11 · Web » et « 12 · Back-office » suivent.

## Méthode

Travaille dans cet ordre et ne saute aucune étape.

### 1. Parcourir comme un utilisateur
Pour chaque point de départ du prototype (`flowStartingPoints` de la page), suis chaque lien jusqu'au bout. Note pour chaque écran : d'où on vient, l'action principale, où mène chaque bouton, comment on revient. Puis rejoue les parcours métier, sans te fier aux liens :
- nouvel utilisateur : bienvenue, création du compte, Face ID, présentation des offres (croix pour rester en gratuit), choix Essentiel, accueil vide, ajout d'un établissement par connexion automatique, par fichier, à la main, puis établissement non listé ;
- usage quotidien : accueil, mes établissements, fiche d'un établissement, compte, actif, patrimoine (classe, enveloppe, établissement), dettes et échéances, analyses, budget et opérations, marchés, LiVi IA, profil et réglages ;
- cas limites : offre insuffisante, connexion à renouveler, import avec doublons, valeur ancienne, maintenance, erreur, mode discret, application verrouillée.

### 2. Contrôler chaque écran
Pour chaque cadre, réponds par oui ou non, avec la preuve :

**Parcours**
- L'écran a une entrée et une sortie : au moins un lien y mène, et retour, fermeture ou onglet en sortent.
- Le titre de la barre de navigation correspond à l'action qui y mène (libellé du bouton ou de la ligne).
- Les étapes numérotées se suivent (import : 1 à 5) et la dernière dit ce qui s'est passé et ce qu'on peut faire ensuite.
- Pas d'impasse, pas de boucle sans issue, pas d'écran orphelin.

**Cahier des charges et catalogue**
- Chaque fonctionnalité citée dans `maquettes.json` pour ce cadre est visible et conforme à ses contraintes (offre, limites, priorité).
- Une fonction réservée à une offre montre l'accès à l'offre au moment où on la demande.
- Interdits absolus : aucun bouton « Acheter » ou « Vendre », aucun « suggestion », « recommandé », « opportunité », « à acheter », aucune note maison ; données tierces sourcées, datées, désactivables ; aucun ordre transmis sans validation explicite, ordre par ordre ; ordres par API signalés comme soumis à l'avis juridique.

**Données**
- Les chiffres fictifs sont identiques d'un écran à l'autre (patrimoine net, totaux par établissement, comptes, budget, consignes, offre de Camille). Refais les calculs : sommes, pourcentages, échéances, dates et jours de la semaine.
- Chaque montant a sa source et sa fraîcheur ; une valeur ancienne est signalée.

**Ergonomie et contenu**
- Une seule action principale par écran ; hiérarchie lisible ; cibles d'au moins 44 points ; aucun texte tronqué ; rien sous la barre d'onglets, la barre du bas ou l'indicateur d'accueil.
- Ton : vouvoiement, phrases courtes, aucun point d'exclamation, aucun emoji, boutons à l'infinitif, nombres à la française, vrai signe moins.
- Gains et pertes jamais par la seule couleur : signe et flèche.
- Vocabulaire du parcours respecté : établissement, compte, connexion automatique, import de fichier, préréglage, saisie manuelle.

**Système de design**
- Instances des composants du fichier, variables (couleurs, espacements, rayons) et styles uniquement ; aucune valeur codée en dur.
- Lisible et contrasté dans les trois thèmes (Sombre, Clair, Pastel) : capture de chaque cadre dans chaque mode.

**Transitions et prototype**
- Écran poussé : glissement depuis la droite, retour par le bouton retour.
- Changement d'onglet ou de sous-onglet : fondu court.
- Feuille : ouverture du bas vers le haut (animation intelligente sur `ui/feuille` et `ui/voile`), fermeture par le voile ou la poignée.
- Plein écran modal (offres) : arrivée par le bas, fermeture par la croix.
- Respect de « Réduire les animations » prévu (fondu à la place des mouvements).

**Cohérence entre surfaces**
- L'écran iPhone a son équivalent sur les autres formats, le web et, s'il y a lieu, le back-office (ex. annuaire des établissements, préréglages d'import, offres et tarifs) ; mêmes libellés, mêmes étapes, mêmes données.
- Ce que l'utilisateur voit est administrable : chaque liste, préréglage, tarif ou texte réglable a son écran de back-office dans l'inventaire.

### 3. Contrôles automatiques
Lance dans Figma (plugin `use_figma`) :
- recherche des blocs « a concevoir » restants ;
- dépassement : bas du contenu (`ui/contenu`) au-dessus de `ui/bas`, de la barre d'onglets moins 8 points, ou de l'indicateur d'accueil ;
- cadres sans aucune interaction de prototype ;
- liens dont la destination n'existe plus ;
- textes contenant « ! », un emoji, « recommandé », « suggestion », « opportunité », « Acheter », « Vendre ».
Dans le dépôt : `node scripts/verifier-docs.mjs` et `node --test 'packages/*/test/*.test.ts'`.

## Rapport

Écris `docs/qualite/revues/AAAA-MM-JJ-revue-maquettes.md` :
1. Résumé : nombre de cadres revus, parcours joués, verdict par étape (conforme, à reprendre).
2. Tableau des constats, du plus grave au moins grave : identifiant, cadre `MQ-…`, catégorie (parcours, catalogue, interdit, données, ergonomie, design, transition, surfaces), constat, preuve, correction proposée.
   - **Bloquant** : interdit absolu, impasse, donnée contradictoire, fonction absente.
   - **Majeur** : ergonomie, transition manquante, écart de vocabulaire, surface manquante.
   - **Mineur** : finition.
3. Liens manquants du prototype, sous forme de liste « écran › élément › destination › transition ».
4. Questions pour le porteur de projet : seulement les vrais choix de produit.

Tu ne modifies ni Figma ni le dépôt, sauf ton rapport. Si on te demande ensuite de corriger : archive d'abord l'ordre (skill `livi-ordre`), corrige par ordre de gravité, repasse les statuts des cadres modifiés à `a-valider`, refais les captures des trois thèmes, puis mets à jour la documentation (skill `livi-mise-a-jour-docs`).

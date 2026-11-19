# Navigation et menus

LiVi reprend la lisibilité de Revolut (onglets courts, recherche toujours accessible, menus contextuels par type d'actif) en l'adaptant à un outil de suivi : pas de formulaire d'ordre, mais « Ajouter une opération » et « Créer une consigne ».

## iPhone et Android (classe de taille compacte)

Barre d'onglets flottante en verre, cinq entrées :

| Onglet | Contenu | Accès rapides |
|---|---|---|
| **Accueil** | Patrimoine net, variation, mes établissements (montant, comptes, fraîcheur) ; vide au premier lancement, avec « Ajouter un établissement » | En-tête : avatar (profil), recherche, Ajouter (+), notifications |
| **Patrimoine** | Répartition par classe, enveloppe ou établissement, dettes et échéances, objectifs, entrée « Analyses » | Filtres par classe, tri, regroupement |
| **Budget** | Sous-onglets : Budget · Opérations · Abonnements ; budget proposé au premier passage | Filtres par compte, catégorie, enseigne, « À catégoriser » |
| **Marchés** | Sous-onglets : Découvrir · Monde (globe, carte, liste) ; listes de surveillance, actualités et calendrier ouverts depuis Découvrir | Recherche avec pastilles par type, systèmes de sélection |
| **LiVi IA** | Consignes, coût du mois, journal, assistant ; présentation de l'offre Signature pour les autres offres | Écrire une consigne |

Le profil (préférences, sécurité, offres, aide, signaler un problème) s'ouvre depuis l'avatar de l'en-tête de l'accueil ; les notifications depuis la cloche. Les événements système (synchronisations, consignes déclenchées, imports) vont dans les notifications, les opérations dans Budget › Opérations.

## Règles d'affichage

- Le montant d'un établissement est le total de tous ses comptes, crédits compris ; la fiche détaille chaque compte et chaque crédit.
- Une fonction qui attend un avis juridique (ordre préparé chez le courtier) peut être montrée en aperçu, avec la mention « non disponible, soumis à l'avis juridique ».
- Doublons d'import : présentés un par un ; écarter la sélection ou tous les doublons.
- Le nouvel utilisateur voit les états vides de Patrimoine et de Budget ; le budget proposé arrive après le premier import.
- Sous le montant de l'accueil, la fraîcheur dit combien de valeurs sont anciennes (« 1 valeur ancienne ») ; un toucher ouvre Mes établissements.
- Bandeau de l'accueil : un seul visible, sous l'en-tête, par priorité maintenance, incident, alerte de compte, annonce. Les annonces viennent de l'éditeur promotionnel (BO-29) ; leur fiche s'ouvre en feuille, au plus une fois par ouverture de l'app, jamais au premier lancement ni par-dessus une maintenance ou une alerte, et reste consultable dans les notifications.
- Hors ligne : bandeau « Hors ligne » et dernières valeurs connues avec leur date, jamais de zéro.

## Parcours et transitions

Parcours cible, vocabulaire (établissement, compte, connexion automatique, import de fichier, préréglage, saisie manuelle) et audit : [parcours-utilisateur.md](../design/parcours-utilisateur.md).

| Geste | Transition |
|---|---|
| Ouvrir un écran depuis une ligne ou un bouton | Glissement depuis la droite (lent, 420 ms) ; retour par la flèche ou le geste de bord |
| Changer d'onglet ou de sous-onglet | Fondu (base, 280 ms) |
| Ouvrir une feuille (Ajouter, méthode d'ajout, filtres, portée, affichage du graphique) | Montée du bas avec voile (lent, 420 ms) ; fermeture par le voile, la poignée ou un glissement vers le bas |
| Offres après l'inscription | Plein écran qui monte du bas ; croix en haut à droite pour rester en Essentiel |
| Double toucher sur le montant de l'accueil | Mode discret : masque ou réaffiche les montants (simulé par un toucher simple dans le prototype Figma) |
| Tirer l'accueil vers le bas | Actualiser les comptes ; les dernières valeurs restent affichées pendant l'actualisation |
| Toucher l'onglet actif | Remonter en haut de l'écran, puis revenir à la racine de l'onglet |
| Bouton + de l'accueil, rempli ou vide | Feuille Ajouter (établissement, bien, crédit, opération, fichier) |
| « Réduire les animations » activé | Fondu de 280 ms à la place de tout mouvement ; globe en 2D |

Durées : jetons `duration-base` (280 ms) et `duration-slow` (420 ms) de `tokens.json`, reprises telles quelles dans le prototype Figma.

## Tablette et pliable déplié (classe moyenne ou étendue)

- Barre latérale à la place de la barre d'onglets, mêmes entrées.
- Maître-détail : liste à gauche, fiche à droite (positions, transactions, enseignes, actifs).
- Marchés › Monde : globe et panneau d'informations côte à côte.

## Web

- Barre latérale en verre de 248 px (repliable), mêmes entrées plus **Import** et **Rapports**.
- En-tête : recherche globale (⌘K), boutons « Ajouter une opération » et « Importer », notifications, avatar.
- **Espace de travail** (Plus) : sous-onglets comme Revolut Trading (Graphique, Recherches, Graphique à l'honneur, Périodes multiples) et « Ajouter un widget » : Graphique, Activité, Faits importants, Actualités, Détails de l'actif, Toutes les positions, Répartition, Outils d'analyse, Événements.

## Fiche actif : menus adaptés à la classe

Les onglets viennent de la classification (`ongletsFiche` dans `@livi/asset-classes`), jamais d'une liste codée en dur dans un écran. Exemples :

| Classe | Onglets |
|---|---|
| Actions | Aperçu › À propos › Statistiques clés (Cours et volume, Données par action, Ratios) › Données financières › Dividendes › Événements › Actualités › Mes opérations › Consignes › Notes |
| Fonds et ETP | Aperçu › Composition (Lignes, Pays, Secteurs, Devises) › Frais › Performance et indice › Distributions › Recouvrement avec mes fonds › Documents |
| Obligations | Aperçu › Caractéristiques › Échéancier des coupons › Rendement et risque › Émetteur › Prospectus |
| Immobilier | Aperçu › Valeur et estimation › Loyers et charges › Crédit associé › Fiscalité |
| Crypto | Aperçu › Réseau › Portefeuilles et adresses › Staking › Fiscalité › Actualités |
| Dettes | Aperçu › Tableau d'amortissement › Assurance › Remboursement anticipé |

Barre d'action en bas de fiche (deux pilules) : **Ajouter une opération** et **Créer une consigne**. Jamais « Acheter » ni « Vendre ».

## Back-office

Barre latérale : Tableau de bord · Utilisateurs · Offres · Drapeaux et ajustements · Maintenance et tests · Journaux · Erreurs · Bugs · Audits · Messages d'erreur · Modèles CSV · Annuaire des enseignes · Annuaire des établissements · Éditeur promotionnel · Classes d'actifs · Marchés · Connecteurs · Quotas IA · Contenus · Conformité · Pilotage · Rôles. Détail dans `docs/exploitation/back-office.md`.

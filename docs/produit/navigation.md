# Navigation et menus

LiVi reprend la lisibilité de Revolut (onglets courts, recherche toujours accessible, menus contextuels par type d'actif) en l'adaptant à un outil de suivi : pas de formulaire d'ordre, mais « Ajouter une opération » et « Créer une consigne ».

## iPhone et Android (classe de taille compacte)

Barre d'onglets flottante en verre, cinq entrées :

| Onglet | Contenu | Accès rapides |
|---|---|---|
| **Accueil** | Patrimoine net, variation, comptes, faits importants, budget du mois | Rechercher (tirer vers le bas), Ajouter (bouton +), Notifications |
| **Patrimoine** | Répartition, classes d'actifs, positions, dettes, objectifs | Filtres par classe, tri, regroupement, analyse |
| **Marchés** | Sous-onglets : Catalogue · Monde · Listes de surveillance · Actualités | Recherche avec pastilles par type, systèmes de sélection |
| **LiVi IA** | Consignes, automatisations, journal, coût du mois | Nouvelle consigne |
| **Activité** | Fil chronologique : opérations, imports, catégorisations, alertes | Filtres par compte, catégorie, enseigne |

Le profil (préférences, sécurité, offres, aide, signaler un problème) s'ouvre depuis l'avatar en haut à droite, comme sur Revolut.

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

Barre latérale : Tableau de bord · Utilisateurs · Offres · Drapeaux et ajustements · Maintenance et tests · Journaux · Erreurs · Bugs · Audits · Messages d'erreur · Modèles CSV · Annuaire · Classes d'actifs · Marchés · Connecteurs · Quotas IA · Contenus · Conformité · Pilotage · Rôles. Détail dans `docs/exploitation/back-office.md`.

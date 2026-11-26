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

Le profil (préférences, sécurité, offres, aide, signaler un problème) s'ouvre depuis l'avatar de l'en-tête de l'accueil ; l'écran Aide (USR-13, MQ-250) réunit la recherche dans l'aide, les questions fréquentes et les documents, ouverts dans le navigateur intégré et signalés « En ligne », et « Signaler un problème » ; le centre de notifications (USR-09, dès le MVP) depuis la cloche, qui porte la pastille du nombre de non-lues (masquée à zéro, « 99+ » au-delà). Les événements système (synchronisations, consignes déclenchées, imports, sécurité) vont dans les notifications, les opérations dans Budget › Opérations. Les annonces de LiVi y restent consultables : une ligne « Annonce de LiVi » rouvre la fiche en feuille (MQ-019 › MQ-245).

Achat d'une offre (USR-14, décision 0009) : depuis les offres (MQ-201) ou l'annuaire (MQ-203), une feuille de récapitulatif avec « Annuler » (MQ-218, MQ-219, MQ-264), puis la confirmation avec reçu et échéance (MQ-265, MQ-266) et « Voir mon abonnement » ; Offres et abonnement montre l'offre en cours (MQ-267 Essentiel, MQ-268 Plus, MQ-016 Signature) et « Gérer ou résilier » ouvre la feuille qui explique la résiliation dans les réglages de l'App Store (MQ-269). Les fonctions non livrées sont datées ; une offre non sortie affiche « Disponible en octobre 2027 ».

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

## Établissements

- Une ligne d'établissement ouvre toujours la fiche de cet établissement, depuis l'accueil et ses états, « Mes établissements » et « Patrimoine par établissement » : Banque Rivière (MQ-209, connexion automatique), Horizon Vie (MQ-248, relevé PDF), Atlas Bourse (MQ-249, clé en lecture seule). La fiche ouvre ensuite les comptes, l'action principale selon le mode de mise à jour (mettre à jour, importer un relevé, gérer la clé) et « Ajouter un compte ».
- Un établissement créé sans préréglage (« Caisse du Port ») passe par l'import sans préréglage : réglages détectés, correspondance des colonnes, puis « Retenir pour Caisse du Port » (MQ-251 à MQ-253) ; l'aperçu signale la seule ligne en double du fichier (MQ-257), l'import terminé rappelle le préréglage personnel (MQ-258) et « Voir Caisse du Port » ouvre la fiche du nouvel établissement (MQ-259).

## Tablette et pliable déplié (classe moyenne ou étendue)

- Classe moyenne (iPad portrait, pliable déplié) : rail de 72 pt à gauche, avec les cinq entrées de la barre d'onglets (icône et libellé), dans le même ordre.
- Classe étendue et plus (iPad paysage) : barre latérale de 248 pt avec libellés, mêmes cinq entrées dans le même ordre (Accueil, Patrimoine, Budget, Marchés, LiVi IA) ; l'avatar, la recherche, Ajouter et la cloche restent dans l'en-tête de l'accueil. Le profil et les réglages s'ouvrent par l'avatar (décision 0009).
- Maître-détail : liste à gauche, fiche à droite (positions, transactions, enseignes, actifs).
- Marchés › Monde : globe et panneau d'informations côte à côte.

## Web

- Barre latérale en verre de 248 px (repliable) : Accueil, Patrimoine, Budget, Marchés, LiVi IA, puis **Import** et **Rapports** (décision 0009). « Accueil » remplace « Tableau de bord ». Pas d'entrée Réglages : profil et réglages par l'avatar de l'en-tête.
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

Sous le prix de la fiche action, la carte du meilleur prix ouvre *Lieux et courtiers* (MQ-048 › MQ-254) : lieux de cotation triés par prix ou par nom, courtiers qui y donnent accès, identifiants, puis « Source pour cet actif » › *Source des cours* (MQ-255). Le réglage général est dans Réglages › Général › Source des cours (MQ-011 › MQ-255). Décision 0008.

## Back-office

Barre latérale : Tableau de bord · Utilisateurs · Offres · Drapeaux et ajustements · Maintenance et tests · Journaux · Erreurs · Bugs · Audits · Messages d'erreur · Modèles CSV · Annuaire des enseignes · Annuaire des établissements · Éditeur promotionnel · Classes d'actifs · Marchés · Connecteurs · Quotas IA · Contenus · Conformité · Pilotage · Rôles. Détail dans `docs/exploitation/back-office.md`.

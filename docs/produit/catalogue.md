<!-- Fichier généré par scripts/generer-docs.ts : modifier la source, puis relancer `pnpm docs:generate`. -->

# Catalogue des fonctionnalités

Source de vérité : `docs/produit/catalogue.json` (176 fonctionnalités). Pour ajouter ou modifier une fonctionnalité, suivre la skill `livi-fonctionnalite`.

| Module | Total | MVP (juil. 2027) | V1.5 (oct. 2027) | V2 (2028) | V3 (2029) |
|---|---|---|---|---|---|
| 1. Comptes et import | 12 | 7 | 5 | 0 | 0 |
| 2. Patrimoine et actifs | 9 | 7 | 0 | 2 | 0 |
| 3. Investissements et performance | 7 | 1 | 3 | 3 | 0 |
| 4. Budget, dépenses et enseignes | 10 | 7 | 2 | 1 | 0 |
| 5. Statistiques et rapports | 5 | 3 | 2 | 0 | 0 |
| 6. LiVi IA | 10 | 1 | 7 | 2 | 0 |
| 7. Fiscalité | 5 | 0 | 1 | 3 | 1 |
| 8. Famille et Société | 6 | 0 | 0 | 5 | 1 |
| 9. Confidentialité, sécurité, compte | 9 | 8 | 1 | 0 | 0 |
| 10. Back-office | 29 | 19 | 6 | 1 | 2 |
| 11. Recherche et découverte | 9 | 3 | 2 | 4 | 0 |
| 12. Marchés mondiaux | 12 | 0 | 0 | 10 | 2 |
| 13. Fiche actif et graphiques | 11 | 1 | 4 | 6 | 0 |
| 14. Analyse du portefeuille | 11 | 1 | 3 | 5 | 2 |
| 15. Gestion et surveillance | 9 | 1 | 8 | 0 | 0 |
| 16. Actualités et événements | 4 | 0 | 0 | 4 | 0 |
| 17. Compte et connexion | 12 | 8 | 3 | 0 | 0 |
| 18. Formats et accessibilité | 6 | 3 | 2 | 1 | 0 |
| **Total** | **176** | **70** | **49** | **47** | **8** |

## 1. Comptes et import

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| CPT-01 | Comptes manuels | Créer un compte de tout type (courant, livret, PEA, assurance-vie, CTO, crypto, PER, prêt, bien) et saisir solde ou opérations. | Essentiel | MVP (juil. 2027) | Essentiel : 5 comptes (2 sans contribution anonyme, sauf option Confidentialité à vie) ; illimité en Plus. | Aucune |
| CPT-02 | Import CSV sans limite de date | Importer un relevé CSV ou Excel de n'importe quelle période et de n'importe quelle taille ; préréglage de l'établissement appliqué automatiquement. | Essentiel | MVP (juil. 2027) | Formats anciens parfois incomplets (ISIN absent, signes inversés) : l'aperçu signale chaque ligne douteuse. | Base de modèles CSV en back-office |
| CPT-03 | Import en 5 étapes avec aperçu | Fichier, préréglage et compte de destination → réglages de lecture → correspondance des colonnes → aperçu et doublons → import terminé (nombre d'opérations, période couverte) ; annulation possible en un geste. | Essentiel | MVP (juil. 2027) | Aucune ligne n'entre sans validation ; un import annulé retire exactement ses lignes. | Cœur commun TypeScript |
| CPT-04 | Détection des doublons | Repère les opérations déjà présentes (même date, montant, libellé proche) entre CSV, synchro et saisie. | Essentiel | MVP (juil. 2027) | Règle prudente : en cas de doute, la ligne est proposée, jamais supprimée d'office. Les doublons sont présentés un par un ; l'utilisateur écarte d'un geste la sélection ou tous les doublons. | Aucune |
| CPT-05 | Proposer un nouveau préréglage | Quand un fichier n'est reconnu par aucun préréglage, l'utilisateur fait la correspondance une fois et peut l'envoyer (sans données) au back-office. | Essentiel | V1.5 (oct. 2027) | Seule la structure (en-têtes, formats) part au back-office, jamais les lignes. | File de validation back-office |
| CPT-06 | Synchronisation bancaire | Connexion des banques et assurances via un agrégateur agréé (DSP2) ; mise à jour quotidienne. | Plus | V1.5 (oct. 2027) | Jusqu'à 10 connexions bancaires en Plus ; couverture variable selon les établissements ; reconnexion forte tous les 180 jours selon les banques. | Agrégateur : coût par utilisateur connecté (hypothèse 1 €/mois, minimum 250 €/mois) |
| CPT-07 | Connexion courtiers et plateformes crypto en lecture | Clés d'API en lecture seule (courtiers qui en proposent, plateformes crypto) et adresses publiques de portefeuilles. | Plus | V1.5 (oct. 2027) | Clés en lecture seule exigées et vérifiées ; les clés restent chiffrées sur l'appareil. | Gratuit côté fournisseurs ; maintenance des connecteurs |
| CPT-08 | État de fraîcheur par compte | Pastille par compte : à jour, en retard, en erreur ; date et source de la dernière mise à jour. | Essentiel | MVP (juil. 2027) | Un compte en erreur n'est jamais compté comme à zéro : sa dernière valeur connue reste affichée avec sa date. | Aucune |
| CPT-09 | Récupération automatique des relevés | LiVi IA télécharge les relevés CSV mis à disposition par les établissements reliés et les importe après aperçu. | Signature | V1.5 (oct. 2027) | Seulement là où l'établissement propose un export accessible à l'utilisateur ; aucun contournement d'authentification forte. | Crédits IA |
| CPT-10 | Lecture de relevés PDF | LiVi IA lit un relevé PDF (assurance-vie, SCPI, épargne salariale) et propose les lignes à importer. | Signature | V1.5 (oct. 2027) | Chaque ligne extraite passe par l'aperçu ; taux de confiance affiché. | Crédits IA (tâche complexe) |
| CPT-11 | Annuaire des établissements | Choisir sa banque, son courtier, son assureur ou sa plateforme dans une liste avec recherche, types et logos ; voir les méthodes disponibles (connexion automatique, clé en lecture, fichier, saisie) ; créer un établissement non répertorié (nom, type, logo ou monogramme) ; fiche d'établissement avec tous ses comptes, sa fraîcheur, la mise à jour et l'import. | Essentiel | MVP (juil. 2027) | Annuaire tenu dans le back-office (BO-28) ; logos en usage nominatif, monogramme à défaut ; un établissement créé par l'utilisateur n'est proposé au back-office qu'avec son accord, sans aucune donnée. Montant d'un établissement : total de tous ses comptes, crédits compris ; chaque compte et chaque crédit est détaillé dans sa fiche. Établissement non listé : import de fichier ou saisie manuelle. | Annuaire des établissements (BO-28) |
| CPT-12 | Préréglages d'import par établissement | Chaque établissement a un préréglage de lecture (séparateur, encodage, ligne d'en-têtes, format des dates, séparateurs décimal et des milliers, sens des montants, correspondance des colonnes) appliqué automatiquement ; l'utilisateur peut le modifier pour un fichier et retenir ses réglages comme préréglage personnel. | Essentiel | MVP (juil. 2027) | Préréglages publiés et versionnés depuis le back-office (BO-03) ; le préréglage personnel reste sur l'appareil. | Éditeur de modèles CSV (BO-03) |

## 2. Patrimoine et actifs

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| PAT-01 | Patrimoine net consolidé | Actifs moins dettes, par classe, enveloppe, établissement et devise ; évolution depuis la première donnée. | Essentiel | MVP (juil. 2027) | Les comptes non à jour sont signalés dans le total. | Aucune |
| PAT-02 | Fiche actif | Position, prix de revient unitaire, plus-value latente et réalisée, frais, dividendes, historique des opérations. | Essentiel | MVP (juil. 2027) | Boutons « Ajouter une opération » et « Créer une consigne », jamais « Acheter » ni « Vendre ». | Données de marché |
| PAT-03 | Cours de marché | Cours des actions, ETF, fonds et cryptos ; valorisation quotidienne. | Essentiel | MVP (juil. 2027) | Cours différés ou de clôture ; la licence doit autoriser l'affichage aux utilisateurs. | Licence de données de marché |
| PAT-04 | Référentiel d'enveloppes françaises | PEA, PEA-PME, assurance-vie, PER, CTO, livrets réglementés, épargne salariale, avec leurs règles (plafonds, éligibilité PEA). | Essentiel | MVP (juil. 2027) | Règles datées et tenues à jour en back-office ; affichées comme information, pas comme conseil. | Back-office |
| PAT-05 | Immobilier avec estimation | Bien saisi à la main ; estimation indicative à partir des ventes comparables publiques (DVF). | Plus | V2 (2028) | Estimation indicative, jamais une expertise ; l'utilisateur garde la main sur la valeur retenue. | Données publiques DVF |
| PAT-06 | Prêts et dettes | Prêt immobilier ou à la consommation avec tableau d'amortissement ; capital restant dû mis à jour chaque mois. | Essentiel | MVP (juil. 2027) | Calcul à partir des conditions saisies ; à rapprocher des relevés. | Aucune |
| PAT-07 | Autres actifs | Véhicules, objets de valeur, métaux précieux (quantité en grammes, kilogrammes ou onces troy, valorisée au cours du jour), private equity, crowdfunding, comptes courants d'associés. | Essentiel | MVP (juil. 2027) | Valeur saisie par l'utilisateur, avec date de dernière réévaluation. | Aucune |
| PAT-08 | Multi-devises | Comptes en USD, CHF, GBP… convertis au cours du jour, avec effet de change isolé. | Plus | MVP (juil. 2027) | Cours de change de référence quotidiens. | Données de change |
| PAT-09 | Coffre-fort de documents | Relevés, contrats, avis d'imposition rangés par compte, chiffrés. | Plus | V2 (2028) | Stockage chiffré de bout en bout ; quota par offre. | Stockage |

## 3. Investissements et performance

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| INV-01 | Performance réelle | Rendement pondéré par le temps et rendement pondéré par l'argent, frais, impôts prélevés et dividendes compris. | Plus | MVP (juil. 2027) | Méthode affichée à côté du chiffre ; Essentiel voit la plus-value simple. | Cœur commun |
| INV-02 | Comparaison à un indice | Comparer un portefeuille à un indice choisi par l'utilisateur. | Plus | V1.5 (oct. 2027) | Comparaison descriptive, sans recommandation de changer de stratégie. | Données de marché |
| INV-03 | Exposition géographique et sectorielle | Répartition par pays, secteur et devise, y compris à l'intérieur des ETF quand la composition est disponible. | Plus | V2 (2028) | Composition des ETF : données sous licence, parfois mensuelles. | Licence de composition |
| INV-04 | Calendrier des dividendes et revenus | Revenus passés et attendus (dividendes, coupons, loyers, intérêts) par mois. | Plus | V1.5 (oct. 2027) | Revenus attendus = estimation à partir des derniers versements. | Données de marché |
| INV-05 | Analyse des frais | Frais de courtage, de gestion, d'enveloppe et des fonds (frais courants), en euros par an. | Plus | V2 (2028) | Information descriptive ; frais des fonds selon les documents publiés. | Référentiel de frais |
| INV-06 | Journal d'investissement | Note libre attachée à une opération ou à un actif (« pourquoi j'ai acheté »). | Essentiel | V1.5 (oct. 2027) | Stocké en local avec le reste des données. | Aucune |
| INV-07 | Projection et indépendance financière | Projection du patrimoine selon des hypothèses saisies (épargne mensuelle, rendement) ; âge d'indépendance financière. | Plus | V2 (2028) | Scénarios calculés à partir des hypothèses de l'utilisateur, présentés comme tels. | Aucune |

## 4. Budget, dépenses et enseignes

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| BUD-01 | Catégorisation par annuaire d'enseignes | Chaque libellé est rapproché d'un groupe › enseigne › établissement (ex. Lidl, Lidl Bordeaux Bastide) et reçoit la catégorie par défaut de l'enseigne. | Essentiel | MVP (juil. 2027) | Annuaire tenu en back-office ; libellé non reconnu = à catégoriser. | Annuaire back-office |
| BUD-02 | Propagation avec aperçu | Changer la catégorie d'une enseigne propose de l'appliquer à : cette opération, cet établissement, toute l'enseigne, ou tout le groupe ; aperçu du nombre de lignes et des montants avant validation. | Essentiel | MVP (juil. 2027) | Les opérations catégorisées à la main ne sont jamais écrasées sans le dire. | Cœur commun |
| BUD-03 | Règles personnelles | Règles par mot-clé, montant ou compte (ex. virement vers PEA = épargne, pas dépense). | Essentiel | MVP (juil. 2027) | Ordre de priorité des règles visible et modifiable. | Aucune |
| BUD-04 | Budgets par catégorie | Enveloppes mensuelles par catégorie, proposées au premier passage à partir des trois derniers mois de dépenses et ajustables ; suivi en cours de mois, report du solde. | Essentiel | MVP (juil. 2027) | Essentiel : 5 budgets ; illimité en Plus. | Aucune |
| BUD-05 | Détection des abonnements | Repère les prélèvements récurrents, leur coût annuel et les hausses de prix. | Plus | V1.5 (oct. 2027) | Détection statistique : l'utilisateur confirme chaque abonnement. | Aucune |
| BUD-06 | Objectifs d'épargne | Objectif (montant, date) relié à un ou plusieurs comptes ; effort mensuel nécessaire. | Essentiel | MVP (juil. 2027) | Calcul simple, sans rendement supposé sauf choix de l'utilisateur. | Aucune |
| BUD-07 | Fiche enseigne | Dépenses par enseigne et par établissement dans le temps, panier moyen, fréquence. | Essentiel | MVP (juil. 2027) | Calculs locaux uniquement. | Aucune |
| BUD-08 | Remonter une correction d'annuaire | Signaler qu'un libellé correspond à une autre enseigne ; la suggestion part anonymisée au back-office. | Essentiel | MVP (juil. 2027) | Seul le libellé normalisé est envoyé, sans montant ni date. | File de validation back-office |
| BUD-09 | Ventilation d'une opération | Diviser une opération en plusieurs catégories (ex. hypermarché : courses + équipement). | Plus | V1.5 (oct. 2027) | La somme des parts doit égaler le montant. | Aucune |
| BUD-11 | Fournisseurs d'énergie et d'internet | Relier ses fournisseurs d'électricité, de gaz, d'eau et d'internet pour séparer abonnement et consommation dans le budget et suivre sa consommation dans le temps. | Plus | V2 (2028) | Connexion seulement avec l'accord de l'utilisateur et là où le fournisseur l'autorise ; constats chiffrés de consommation, aucun conseil en investissement ; offre à confirmer. | Partenariats fournisseurs |

## 5. Statistiques et rapports

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| STA-01 | Tableau de bord dynamique | Indicateurs clés filtrables par période, compte, enveloppe, membre ou entité ; toutes périodes depuis la première donnée. | Essentiel | MVP (juil. 2027) | Essentiel : graphiques standards ; filtres croisés en Plus. | Aucune |
| STA-02 | Statistiques avancées | Taux d'épargne, flux entrants et sortants, évolution par catégorie, comparaison d'années, saisonnalité. | Plus | MVP (juil. 2027) | Calculs sur l'appareil. | Aucune |
| STA-03 | Rapports PDF | Rapport mensuel ou annuel (patrimoine, performance, dépenses) exportable. | Plus | V1.5 (oct. 2027) | Généré sur l'appareil. | Aucune |
| STA-04 | Rapport commenté par LiVi IA | Résumé en langage clair des variations du mois (ce qui a bougé, pourquoi en chiffres). | Signature | V1.5 (oct. 2027) | Constats chiffrés uniquement, aucune recommandation. | Crédits IA |
| STA-05 | Export des données | Export complet CSV et JSON de toutes les données, à tout moment. | Essentiel | MVP (juil. 2027) | Gratuit et sans limite : condition de confiance et obligation de portabilité. | Aucune |

## 6. LiVi IA

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| IA-01 | Assistant de lecture | Répondre à des questions sur ses propres données (« combien chez Lidl en 2025 ? »), avec les chiffres et leur source. | Signature | V1.5 (oct. 2027) | Refuse toute demande de conseil d'investissement et l'explique. | Crédits IA |
| IA-02 | Consigne en langage naturel | L'utilisateur écrit sa règle (« DCA de 200 € sur l'ETF monde le 5 du mois ») ; LiVi IA la traduit en consigne structurée à valider. | Signature | V1.5 (oct. 2027) | La consigne structurée est montrée avant activation ; rien ne s'exécute sans validation. | Crédits IA |
| IA-03 | Surveillance et alertes de consigne | Suivi des seuils (stop-loss, prise de bénéfices, prix cible) et alerte quand une condition est remplie. | Signature | V1.5 (oct. 2027) | Cours différés : l'alerte n'est pas un ordre en temps réel. | Données de marché |
| IA-04 | Ordre préparé chez le courtier | Pour les courtiers dotés d'une API d'ordres : LiVi prépare l'ordre, l'utilisateur le valide (Face ID + authentification du courtier), le courtier l'exécute. | Signature | V2 (2028) | Seulement après avis juridique ; validation ordre par ordre ; ordres natifs du courtier privilégiés (stop, plan d'investissement). En attendant, les maquettes le montrent en aperçu avec la mention « non disponible, soumis à l'avis juridique ». | Avis juridique, connecteurs courtiers |
| IA-05 | Rappel d'exécution manuelle | Pour les courtiers sans API (néo-courtiers, banques) : rappel avec le détail de l'ordre à passer soi-même. | Signature | V1.5 (oct. 2027) | Aucune transmission : l'utilisateur passe l'ordre dans l'application du courtier. | Aucune |
| IA-06 | Versements et arbitrages programmés | Rappels et préparation des versements programmés et des arbitrages décidés par l'utilisateur (ex. rééquilibrer à 60/40 chaque trimestre). | Signature | V2 (2028) | Le calcul de l'arbitrage applique la cible de l'utilisateur ; aucune cible proposée par LiVi. | Crédits IA |
| IA-07 | Simulateur de seuil de revente | Calcule le prix de revente qui couvre frais et impôts pour un gain visé : P = PRU + (((g·PRU·q + c)/(1−t)) + f)/q. | Plus | MVP (juil. 2027) | Calcul à partir des paramètres saisis (frais, fiscalité de l'enveloppe). | Aucune |
| IA-08 | Coût de l'IA en temps réel | Chaque tâche affiche son coût en crédits et en euros ; total du mois et performance nette des frais d'IA. | Signature | V1.5 (oct. 2027) | Quota mensuel et plafond quotidien ; au-delà, packs de crédits. | Mesure à l'appel |
| IA-09 | Journal des actions de l'IA | Historique daté de chaque lecture, consigne, alerte et ordre préparé, avec la validation de l'utilisateur. | Signature | V1.5 (oct. 2027) | Non modifiable ; exportable. | Aucune |
| IA-10 | Catégorisation assistée | Propose une enseigne et une catégorie pour les libellés inconnus, à valider. | Signature | V1.5 (oct. 2027) | Proposition seulement ; la validation alimente la règle locale. | Crédits IA (tâche simple) |

## 7. Fiscalité

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| FIS-01 | Récapitulatif des plus-values (CTO) | Aide au remplissage de la déclaration des plus-values mobilières à partir des opérations. | Option payante | V2 (2028) | 10 € par document, inclus dans Signature ; aide au calcul, à vérifier par l'utilisateur ; pas un conseil fiscal. | Moteur fiscal, mise à jour annuelle |
| FIS-02 | Récapitulatif crypto | Calcul des plus-values de cession d'actifs numériques selon la méthode française. | Option payante | V2 (2028) | 10 € par document, inclus dans Signature ; dépend de la complétude des opérations importées. | Moteur fiscal |
| FIS-03 | Revenus de capitaux mobiliers | Synthèse des dividendes et intérêts perçus hors enveloppe. | Option payante | V2 (2028) | 10 € par document, inclus dans Signature. | Moteur fiscal |
| FIS-04 | Estimation du patrimoine taxable à l'IFI | Estimation de l'assiette immobilière à partir des biens saisis. | Option payante | V3 (2029) | Estimation indicative ; règles d'abattement datées. | Moteur fiscal |
| FIS-05 | Suivi des plafonds | PEA (versements), livrets, PER (plafond de déduction saisi) : reste à verser. | Plus | V1.5 (oct. 2027) | Information ; plafonds tenus à jour en back-office. | Back-office |

## 8. Famille et Société

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| FAM-01 | Vue foyer | Jusqu'à 5 membres, patrimoine par membre et commun, comptes joints répartis. | Option payante | V2 (2028) | Option Famille 30 €/an, sur Plus ou Signature ; chaque membre choisit ce qu'il partage. | Synchro chiffrée multi-utilisateurs |
| FAM-02 | Partage sélectif | Partager un compte ou une vue en lecture avec un membre, révocable. | Option payante | V2 (2028) | Partage chiffré ; révocation immédiate. | Synchro chiffrée |
| SOC-01 | Entités (SCI, holding) | Suivi d'une société : comptes, biens, comptes courants d'associés, part détenue par chaque membre. | Option payante | V2 (2028) | Option Société 60 €/an par entité ; pas de comptabilité légale. | Aucune |
| SOC-02 | Patrimoine en transparence | Patrimoine du membre incluant sa quote-part des entités détenues. | Option payante | V2 (2028) | Quote-part selon les parts saisies. | Aucune |
| B2B-01 | Partage avec un conseiller | Lien de lecture temporaire vers un professionnel choisi par l'utilisateur. | Plus | V2 (2028) | Durée limitée, journalisé, révocable. | Aucune |
| B2B-02 | Espace conseiller (CGP) | Un professionnel suit les patrimoines que ses clients lui partagent ; marque blanche possible. | Option payante | V3 (2029) | Licence B2B ; le client garde la propriété de ses données. | Développement dédié |

## 9. Confidentialité, sécurité, compte

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| SEC-01 | Base locale chiffrée | Données sur l'appareil, chiffrées, déverrouillées par Face ID ou code. | Essentiel | MVP (juil. 2027) | Perte de l'appareil sans sauvegarde = perte des données. | Aucune |
| SEC-02 | Sauvegarde et synchro chiffrées de bout en bout | Sauvegarde cloud et synchronisation entre iPhone et web ; LiVi ne détient pas la clé. | Plus | MVP (juil. 2027) | Clé de récupération à conserver par l'utilisateur. | Stockage UE |
| SEC-03 | Export de sauvegarde chiffrée | Fichier de sauvegarde chiffré à garder soi-même. | Essentiel | MVP (juil. 2027) | Gratuit. | Aucune |
| SEC-04 | Double authentification | 2FA sur le compte LiVi (application d'authentification, clés d'accès). | Essentiel | MVP (juil. 2027) | Obligatoire pour activer la synchronisation et LiVi IA. | Aucune |
| SEC-05 | Contribution aux statistiques anonymes | Choix explicite à l'accueil et dans les réglages ; seules des agrégations calculées sur l'appareil sont envoyées. | Essentiel | MVP (juil. 2027) | Jamais les données issues de la synchronisation bancaire ; jamais en Plus et Signature ; révocable. | Back-office statistiques |
| SEC-06 | Option Confidentialité à vie | Paiement unique de 100 € : Essentiel complet sans contribution, à vie. | Option payante | MVP (juil. 2027) | Proposée à égalité avec la contribution et l'offre limitée. | Aucune |
| SEC-07 | Mode discret | Masque les montants d'un double toucher sur le montant principal, ou automatiquement à l'ouverture (réglage) ; un nouveau double toucher les réaffiche. | Essentiel | MVP (juil. 2027) | Double toucher uniquement, pour éviter un masquage accidentel ; libellé lecteur d'écran « Patrimoine masqué, touchez deux fois pour afficher » ; réglage « Mode discret par défaut » dans Réglages. | Aucune |
| SEC-08 | Suppression du compte | Effacement des données serveur, résiliation et export en un parcours. | Essentiel | MVP (juil. 2027) | Résiliation de l'abonnement en ligne simple (3 clics). | Aucune |
| SEC-09 | Widgets et notifications | Widget patrimoine (masquable), alertes de compte, de budget, de consigne. | Essentiel | V1.5 (oct. 2027) | Contenu des notifications masqué par défaut sur l'écran verrouillé. | Aucune |

## 10. Back-office

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| BO-01 | Offres et tarifs | Créer et modifier offres, prix TTC, limites, essais, codes promo, option à vie ; tests de prix A/B. | Interne | MVP (juil. 2027) | Prix App Store à aligner dans App Store Connect ; un prix modifié ne s'applique qu'aux nouveaux abonnements. | Stripe, App Store Connect |
| BO-02 | Quotas et routage IA | Crédits par offre, plafond quotidien, coût en crédits par type de tâche, modèle utilisé par tâche (Haiku ou Sonnet), coupe-circuit global. | Interne | V1.5 (oct. 2027) | Alerte si le coût IA moyen dépasse le budget par abonné. | API Claude |
| BO-03 | Éditeur de modèles CSV | Préréglages par établissement : correspondance des colonnes, séparateur, encodage, formats de date (JJ/MM/AAAA, AAAA-MM-JJ, MM/JJ/AAAA…) et de nombre, sens des montants, détection ISIN ; versions, test sur fichier exemple, proposition assistée par IA, publication. | Interne | MVP (juil. 2027) | Fichiers exemples anonymisés ou fictifs uniquement. | Cœur commun |
| BO-04 | Annuaire des enseignes | Groupes, enseignes, établissements, alias et motifs de libellé, catégorie par défaut, logos ; fusion ; file des suggestions d'utilisateurs. | Interne | MVP (juil. 2027) | Logos : marques déposées, usage nominatif uniquement. | Aucune |
| BO-05 | Catégories | Arbre des catégories par défaut (dont alimentation et courses, restaurants, énergie et eau : électricité, gaz, eau ; internet et téléphone dans les abonnements), traductions, correspondances entre versions ; paramètres du budget proposé (période de référence de trois mois, arrondi à la dizaine). | Interne | MVP (juil. 2027) | Une catégorie supprimée est fusionnée, jamais perdue. | Aucune |
| BO-06 | Connecteurs | État de l'agrégateur et des API courtiers par établissement, taux d'erreur, bandeau d'incident, activation par établissement. | Interne | V1.5 (oct. 2027) | Aucune. | Agrégateur |
| BO-07 | Référentiel d'actifs | ISIN, tickers, éligibilité PEA, source de cours, opérations sur titres (divisions), corrections. | Interne | MVP (juil. 2027) | Licence de données à respecter. | Données de marché |
| BO-08 | Utilisateurs et support | Recherche par identifiant, offre, remboursements, demandes RGPD, tickets ; accès assisté sur consentement temporaire. | Interne | MVP (juil. 2027) | Aucune donnée financière visible par défaut. | Outil de support |
| BO-09 | Consentements et statistiques anonymes | Taux de consentement, cellules publiées seulement au-delà d'un seuil de contributeurs, jeux de données livrés, journal. | Interne | V3 (2029) | Seuil minimal de contributeurs par cellule ; données de synchronisation exclues. | Back-office statistiques |
| BO-10 | Affiliation | Partenaires agréés uniquement (vérification des registres), textes de transparence, suivi des commissions. | Interne | V1.5 (oct. 2027) | Aucune plateforme crypto non autorisée ; mention « lien commercial » obligatoire. | Contrats partenaires |
| BO-11 | Contenus et textes légaux | Messages dans l'application, accueil, centre d'aide, CGU et politique de confidentialité versionnées, journal des nouveautés ; les annonces de l'accueil se préparent dans l'éditeur promotionnel (BO-29). | Interne | MVP (juil. 2027) | Acceptation des nouvelles versions tracée. | Aucune |
| BO-12 | Pilotage | Inscriptions, activation, conversion, résiliation, revenu récurrent, revenu par utilisateur, coût d'acquisition par canal, coût IA par abonné, marge brute, cohortes. | Interne | MVP (juil. 2027) | Indicateurs calculés sans données financières individuelles. | Outil d'analyse respectueux de la vie privée |
| BO-13 | Rôles, sécurité et journal | Rôles (administrateur, support, contenu), 2FA obligatoire, journal d'audit, interrupteurs de fonctions, gestion d'incident. | Interne | MVP (juil. 2027) | Principe du moindre privilège. | Aucune |
| BO-14 | Espaces B2B | Création des espaces conseillers et marque blanche, facturation B2B. | Interne | V3 (2029) | Contrat de sous-traitance des données par client B2B. | Développement dédié |
| BO-15 | Journaux techniques | Recherche dans les journaux par niveau, service, version, identifiant pseudonymisé et identifiant de corrélation. | Interne | MVP (juil. 2027) | Aucune donnée financière ni secret dans les journaux ; rétention limitée. | Plateforme de journaux |
| BO-16 | Audits | Journal d’audit non modifiable des actions d’administration et des actions sensibles (connexion, liaison, export, suppression), exportable. | Interne | MVP (juil. 2027) | Conservation selon la politique de sécurité. | API audit |
| BO-17 | Erreurs et plantages | Erreurs regroupées par signature, fréquence, version, appareil et format d’écran ; lien vers le ticket. | Interne | MVP (juil. 2027) | Données pseudonymisées. | Outil de suivi d’erreurs |
| BO-18 | Catalogue des messages d’erreur | Chaque code d’erreur avec son message utilisateur en français, l’action proposée et l’historique des versions. | Interne | MVP (juil. 2027) | Ton du design system : clair, sans jargon, sans point d’exclamation. | API messages |
| BO-19 | Bugs et tickets | Créer un ticket depuis une erreur ou un signalement, priorité, statut, lien vers le correctif (synchronisé avec les tickets GitHub). | Interne | MVP (juil. 2027) | Aucune donnée personnelle copiée dans le ticket. | GitHub Issues |
| BO-20 | Ajustements par client ou globaux | Drapeaux de fonctionnalité, quotas, limites et corrections ciblées : pour un utilisateur, un segment ou tous, avec motif, durée et journal. | Interne | MVP (juil. 2027) | Double validation pour les ajustements globaux. | API drapeaux |
| BO-21 | Mode maintenance | Planifié ou immédiat, global ou par fonction, avec message aux utilisateurs et liste blanche des comptes de test. | Interne | MVP (juil. 2027) | Les données locales restent consultables pendant la maintenance. | API drapeaux |
| BO-22 | Comptes de test et bouton « Tester la fonctionnalité » | Comptes de test actifs avec données fictives ; chaque fonctionnalité a un scénario de test d’usage lancé d’un bouton, y compris pendant une maintenance ; résultat journalisé. | Interne | MVP (juil. 2027) | Jamais sur un compte réel ; données fictives uniquement. | Scénarios de test, BO-21 |
| BO-23 | Santé des services | État de l’API, de la base, des files, de l’agrégateur, des données de marché et de l’IA, avec alertes. | Interne | MVP (juil. 2027) | Page de statut publique dérivée. | Supervision |
| BO-24 | Versions et déploiements | Versions d’app en circulation, version minimale exigée, déploiement progressif et retour arrière. | Interne | V1.5 (oct. 2027) | Aucune. | App Store Connect, déploiement API |
| BO-25 | Référentiel des marchés | Places, horaires, jours fériés, indices et zones macro affichés sur la carte. | Interne | V2 (2028) | Licences respectées. | @livi/market-data |
| BO-26 | Classes et sous-classes d’actifs | Champs, filtres et onglets par classe, publiés par version. | Interne | V1.5 (oct. 2027) | Toute modification passe par une version et un test. | @livi/asset-classes |
| BO-27 | Rapports de conformité | Consentements, demandes RGPD, journal des ordres préparés et validés, affiliation. | Interne | V1.5 (oct. 2027) | Accès restreint au rôle conformité. | API audit |
| BO-28 | Annuaire des établissements | Banques, néobanques, courtiers, assureurs, plateformes crypto et de financement participatif : nom, type, logo, méthodes disponibles (agrégateur, clé en lecture, fichier, PDF), préréglages d'import associés, état du connecteur ; file des établissements proposés par les utilisateurs ; statut réglementaire affiché tel quel (agrément, enregistrement, autorisation MiCA des plateformes crypto), avec sa source et sa date. | Interne | MVP (juil. 2027) | Logos en usage nominatif ; aucune donnée d'utilisateur dans les propositions. | Connecteurs (BO-06), modèles CSV (BO-03) |
| BO-29 | Éditeur promotionnel | Prépare et planifie les campagnes : fiche (pop-up) avec texte, images et vidéo, bannière de l'accueil, e-mail au format MJML ou HTML. Aperçu avant publication (iPhone, web, trois thèmes, clients mail courants), ciblage par offre, langue et appareil, période de diffusion, fréquence, envoi de test aux comptes de test. | Interne | V1 (oct. 2027) | Validation par une seconde personne avant publication (rôle contenu puis conformité) ; aucun contenu qui promeut un produit financier ou ressemble à un conseil ; e-mails promotionnels envoyés seulement aux utilisateurs qui l'ont accepté, avec désinscription en un clic ; HTML et MJML nettoyés (aucun script), images hébergées par LiVi ; champs limités (titre de bannière 45 caractères, texte 140) ; journal d'audit BO-16 ; aucune donnée financière dans le ciblage. | Contenus (BO-11), rôles (BO-14), audits (BO-16), comptes de test (BO-17) |

## 11. Recherche et découverte

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| REC-01 | Recherche dans mes données | Un seul champ pour retrouver positions, transactions, enseignes, comptes et réglages ; tirer vers le bas sur iPhone, ⌘K sur le web. | Essentiel | MVP (juil. 2027) | Recherche exécutée sur l’appareil : rien n’est envoyé au serveur. | Index local |
| REC-02 | Recherche dans le référentiel d’actifs | Par nom, ISIN ou mnémonique, avec pastilles par type (actions, fonds et ETP, obligations, crypto, matières premières, dérivés, indices, devises). | Essentiel | MVP (juil. 2027) | Résultats signalés « différé » selon la licence ; un actif inconnu peut être créé à la main. | Référentiel d’actifs, données de marché |
| REC-03 | Filtres adaptés à chaque classe | Filtres communs (enveloppe, établissement, devise, membre, poids, plus-value) et filtres propres à la classe (ex. obligations : émetteur, notation, échéance, rendement à maturité, duration, rang). | Plus | V1.5 (oct. 2027) | Une valeur absente n’est jamais comptée comme zéro ; les filtres sur données tierces affichent leur source. | @livi/asset-classes |
| REC-04 | Systèmes de sélection | Écrans de sélection par classe combinant plusieurs filtres, triables, enregistrables et partageables entre ses appareils. | Plus | V2 (2028) | Tri de données, jamais une sélection « recommandée » ; disponible selon la licence des données. | Données fondamentales sous licence |
| REC-05 | Collections prêtes à l’emploi | Jeux de filtres nommés de façon descriptive (grandes capitalisations, rendement du dividende élevé, ETF à frais bas, obligations d’État à moins de 3 ans…). | Essentiel | V2 (2028) | Contrôle automatique des noms : aucun « recommandé », « à acheter » ou « opportunité ». | @livi/asset-classes |
| REC-06 | Collections personnelles | Créer ses propres collections à partir d’une recherche ou d’une liste. | Plus | V2 (2028) | Stockées avec les données de l’utilisateur (locales, synchronisées chiffrées). | Synchro chiffrée |
| REC-07 | Catalogue de découverte | Accueil par classe d’actifs (actions, fonds et ETP, obligations, crypto, matières premières, dérivés) : plus fortes variations, plus échangés, collections, actualités. | Essentiel | V2 (2028) | Classements factuels (variation, volume) ; aucune mise en avant rémunérée. | Données de marché sous licence |
| REC-08 | Recherche tolérante | Accents, fautes de frappe, synonymes et codes (ISIN, mnémonique, nom court) acceptés. | Essentiel | MVP (juil. 2027) | Aucune. | @livi/asset-classes (normaliser) |
| REC-09 | Recherches récentes et complétion de la saisie | Historique local des recherches, actifs consultés récemment. | Essentiel | V1.5 (oct. 2027) | Effaçable en un geste. | Index local |

## 12. Marchés mondiaux

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| MON-01 | Globe 3D interactif | Globe qui tourne avec inertie, zoom, étiquettes d’indices (code, variation du jour) posées sur leur place ; couleur de hausse ou de baisse toujours doublée d’un signe et d’une flèche. | Essentiel | V2 (2028) | 60 images par seconde visées ; bascule automatique en 2D sur appareil peu puissant ou avec « Réduire les animations ». | WebGL (web), Skia ou GL (mobile), @livi/market-data |
| MON-02 | Carte 2D | Vue à plat (projection équirectangulaire) avec les mêmes étiquettes et calques ; vue par défaut sur petit écran si l’utilisateur la choisit. | Essentiel | V2 (2028) | Même source de données que le globe. | @livi/market-data (projection) |
| MON-03 | Onglets par région | International, Amériques, Europe, Asie-Pacifique, Moyen-Orient et Afrique ; le globe se centre sur la région choisie. | Essentiel | V2 (2028) | Aucune. | @livi/market-data |
| MON-04 | Statut des places et heure locale | Ouverte, en pause, fermée, week-end ou fériée, avec l’heure locale et le temps avant l’ouverture ou la clôture. | Essentiel | V2 (2028) | Jours fériés fournis par le fournisseur de données ; horaires du référentiel à tenir à jour en back-office. | @livi/market-data (statut) |
| MON-05 | Fiche pays ou place | Indices, devises, taux d’État à 10 ans, matières premières liées, indicateurs économiques et actualités de la zone. | Essentiel | V2 (2028) | Données sous licence, fraîcheur affichée. | Fournisseurs marché, macro, actualités |
| MON-06 | Indicateurs économiques par zone | Zone euro, France, Allemagne, Royaume-Uni, États-Unis, Japon, Chine, Suisse : PIB, inflation, taux directeur, taux à 10 ans, ventes au détail, chômage, indice des directeurs d’achat, avec variation. | Essentiel | V2 (2028) | Date de publication affichée pour chaque chiffre. | Fournisseur macro |
| MON-07 | Comparaison des indices | Courbes en base 0 % sur 1 jour, 1 semaine, 1 mois, 6 mois, 1 an, 5 ans ou tout l’historique. | Essentiel | V2 (2028) | Aucune. | Historique des indices |
| MON-08 | Devises et matières premières | Paires de devises principales et métaux, énergie, agricoles ; convertisseur de devises. | Essentiel | V2 (2028) | Cours de référence, pas des cours exécutables. | Fournisseur marché |
| MON-09 | Calques de carte | Performance du jour, statut des séances, taux à 10 ans, inflation, carte de chaleur des pays. | Plus | V3 (2029) | Légende et équivalent textuel obligatoires. | Fournisseurs marché et macro |
| MON-10 | Calendrier économique | Publications et décisions de banques centrales à venir, par région et par importance. | Plus | V3 (2029) | Données sous licence. | Fournisseur macro |
| MON-11 | Vue liste accessible | Équivalent textuel complet du globe et de la carte pour les lecteurs d’écran. | Essentiel | V2 (2028) | Aucune information n’existe seulement sur le globe. | Accessibilité |
| MON-12 | Mon exposition sur la carte | Superpose la répartition géographique du patrimoine de l’utilisateur aux marchés. | Plus | V2 (2028) | Calcul local ; transparence des fonds selon disponibilité des compositions. | INV-03, ANA-02 |

## 13. Fiche actif et graphiques

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| FIC-01 | Menus de fiche par classe et sous-classe | Onglets adaptés : actions (statistiques, données financières, dividendes), ETF (composition, frais, recouvrement), obligations (caractéristiques, échéancier, rendement et risque), immobilier (estimation, loyers, crédit), crypto (réseau, staking), etc. | Essentiel | MVP (juil. 2027) | Au MVP, aperçu, opérations, consignes et notes ; les onglets de données de marché arrivent avec leur licence. | @livi/asset-classes (ongletsFiche) |
| FIC-02 | Graphique avancé | Intervalles de 1 minute à 1 semaine, types chandeliers, barres, ligne, zone, ligne de base ; échelle en pourcentage, logarithmique ou automatique ; réticule. | Plus | V1.5 (oct. 2027) | Intraday seulement si la licence le permet ; sinon clôture quotidienne. | Données historiques sous licence |
| FIC-03 | Indicateurs techniques | Bibliothèque avec recherche : moyennes mobiles, RSI, MACD, bandes de Bollinger, ATR, ADX, Aroon, plus haut et plus bas sur 52 semaines, volumes… | Plus | V2 (2028) | Calculs descriptifs, aucun signal d’achat ou de vente. | Moteur de calcul d’indicateurs |
| FIC-04 | Outils de dessin | Lignes de tendance, canaux, niveaux horizontaux, Fibonacci, texte, règle de mesure, aimant, verrouillage et masquage. | Plus | V2 (2028) | Dessins enregistrés avec les données de l’utilisateur. | Bibliothèque de graphiques |
| FIC-05 | Périodes multiples | Grille de 2 à 4 graphiques du même actif sur des intervalles différents, réticule synchronisé. | Plus | V2 (2028) | Aucune. | FIC-02 |
| FIC-06 | Comparer sur le graphique | Superposer un indice ou un autre actif, en base 0 %. | Plus | V1.5 (oct. 2027) | Aucune. | FIC-02 |
| FIC-07 | Statistiques clés | Cours et volume (ouverture, fourchettes du jour, 52 semaines et 5 ans, bêta, volume moyen, capitalisation, flottant), données par action (BPA, ventes, valeur comptable, flux, dividende), ratios (valorisation, marges, rentabilité). | Plus | V1.5 (oct. 2027) | Source et date affichées sous chaque bloc. | Données fondamentales sous licence |
| FIC-08 | Données financières | Compte de résultat, bilan, flux de trésorerie, annuels et trimestriels, en graphiques et en tableaux. | Plus | V2 (2028) | Aucune. | Données fondamentales sous licence |
| FIC-09 | Données tierces encadrées | Consensus d’analystes et notations d’agences affichés comme données sourcées et datées, désactivables, jamais présentés comme un avis de LiVi ; aucune « suggestion » propre. | Plus | V2 (2028) | Validation juridique avant activation ; licence de diffusion requise. | Avis juridique, fournisseur |
| FIC-10 | Mes opérations sur le graphique | Achats, ventes, dividendes, consignes et seuils d’alerte affichés sur la courbe. | Essentiel | V1.5 (oct. 2027) | Calcul local. | FIC-02 |
| FIC-11 | Espace de travail par widgets | Sur le web : composer son écran (graphique, détails de l’actif, actualités, événements, activité, répartition, outils d’analyse) et l’enregistrer. | Plus | V2 (2028) | Disposition enregistrée par appareil. | Web |

## 14. Analyse du portefeuille

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| ANA-01 | Répartition multi-axes | Par classe, sous-classe, pays, secteur, devise, enveloppe, établissement, membre, niveau de risque. | Essentiel | MVP (juil. 2027) | Au MVP : classe, sous-classe, enveloppe, établissement ; les autres axes en V1.5 (Plus). | @livi/core (repartition) |
| ANA-02 | Recouvrement entre fonds | Lignes communes entre les ETF et fonds détenus, part de recouvrement, doublons signalés. | Plus | V2 (2028) | Selon la disponibilité des compositions ; constat, pas conseil. | @livi/core (recouvrement), compositions sous licence |
| ANA-03 | Concentration | Indice de concentration, dix premières lignes, poids maximal, part du premier émetteur. | Plus | V1.5 (oct. 2027) | Aucune. | @livi/core (herfindahl) |
| ANA-04 | Contribution à la performance | Ce que chaque ligne, classe ou enveloppe a apporté sur la période. | Plus | V1.5 (oct. 2027) | Méthode affichée. | @livi/core |
| ANA-05 | Risque descriptif | Volatilité, baisse maximale, bêta du portefeuille, période de récupération. | Plus | V2 (2028) | Mesures passées, présentées comme telles. | @livi/core (baisseMaximale) |
| ANA-06 | Corrélations | Matrice de corrélation entre les lignes principales. | Plus | V3 (2029) | Historique suffisant requis (affiché sinon). | Historique de cours |
| ANA-07 | Chocs historiques | Effet de crises passées (2008, 2020, 2022) appliqué à la répartition actuelle. | Signature | V3 (2029) | Simulation descriptive, jamais une prévision. | Historique de cours |
| ANA-08 | Calculateur d’arbitrage | Montants à déplacer pour revenir à la cible que l’utilisateur a fixée, avec ou sans versement. | Plus | V2 (2028) | LiVi ne propose aucune cible. | @livi/core (arbitrageVersCible) |
| ANA-09 | Plus-values par lot | Plus-values latentes et réalisées, par lot et par enveloppe, avec la méthode de calcul de l’enveloppe. | Plus | V1.5 (oct. 2027) | Méthode affichée, à vérifier pour la déclaration. | @livi/core |
| ANA-10 | Revenus passifs consolidés | Dividendes, coupons, loyers, intérêts, comparés aux dépenses du foyer. | Plus | V2 (2028) | Aucune. | INV-04, BUD |
| ANA-11 | Échéancier consolidé | Coupons, échéances d’obligations, fins de blocage, fins de taux promotionnels, échéances de crédit. | Plus | V2 (2028) | Aucune. | @livi/asset-classes (champs date) |

## 15. Gestion et surveillance

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| GES-01 | Listes de surveillance | Plusieurs listes, réordonnables, avec colonnes choisies. | Essentiel | V1.5 (oct. 2027) | Aucune. | Référentiel d’actifs |
| GES-02 | Alertes de marché | Cours, variation, plus haut ou plus bas sur 52 semaines, volume inhabituel. | Plus | V1.5 (oct. 2027) | Cours différés : l’alerte n’est pas un ordre. | Données de marché, notifications |
| GES-03 | Alertes de patrimoine | Seuil de patrimoine, grosse dépense, frais bancaires, fin de taux promotionnel, plafond atteint. | Essentiel | V1.5 (oct. 2027) | Calcul local. | Notifications |
| GES-04 | Étiquettes et groupes | Regrouper des positions à sa façon (projet, horizon, enfant). | Essentiel | V1.5 (oct. 2027) | Aucune. | Aucune |
| GES-05 | Opérations sur titres | Divisions, regroupements, fusions et changements d’ISIN appliqués automatiquement, avec aperçu. | Essentiel | V1.5 (oct. 2027) | Référentiel tenu en back-office. | BO-07 |
| GES-06 | Modification en masse | Changer catégorie, compte ou étiquette de plusieurs opérations à la fois, avec aperçu et annulation. | Plus | V1.5 (oct. 2027) | Aucune. | Aucune |
| GES-07 | Transferts entre comptes | Virements internes et transferts de titres (dont transfert de PEA) sans fausse performance ni fausse dépense. | Essentiel | V1.5 (oct. 2027) | Rapprochement proposé, validé par l’utilisateur. | @livi/core |
| GES-08 | Investissements programmés suivis | Détection des versements réguliers réels et rapprochement avec les consignes de DCA. | Plus | V1.5 (oct. 2027) | Aucune. | IA-02 |
| GES-09 | Fil d’activité | Chronologie des opérations, imports, catégorisations, consignes et alertes. | Essentiel | MVP (juil. 2027) | Local. | Aucune |

## 16. Actualités et événements

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| ACT-01 | Actualités de mes actifs | Fil d’actualités filtré sur les positions détenues et surveillées. | Plus | V2 (2028) | Fournisseur sous licence ; titre, source et date. | Fournisseur actualités |
| ACT-02 | Faits importants | Variations fortes, dividendes annoncés, échéances proches de mes positions. | Essentiel | V2 (2028) | Constats chiffrés uniquement. | Données de marché |
| ACT-03 | Calendrier des événements | Résultats, dividendes, assemblées générales des sociétés détenues. | Plus | V2 (2028) | Aucune. | Fournisseur événements |
| ACT-04 | Lecteur d’articles | Lire un article dans l’app quand la licence le permet, sinon lien vers la source. | Plus | V2 (2028) | Respect des droits de reproduction. | Fournisseur actualités |

## 17. Compte et connexion

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| USR-01 | Connexion avec Apple | Création de compte et connexion « Se connecter avec Apple », adresse masquée acceptée. | Essentiel | MVP (juil. 2027) | Obligatoire dès qu’une connexion tierce (Google) est proposée sur iPhone. | Apple Developer |
| USR-02 | Connexion avec Google | Connexion Google sur iPhone, Android et web. | Essentiel | MVP (juil. 2027) | Aucune donnée Google autre que l’identité. | Google Identity |
| USR-03 | Connexion par e-mail | Lien ou code à usage unique, mot de passe facultatif (haché, jamais stocké en clair). | Essentiel | MVP (juil. 2027) | Limitation des tentatives, liens valables 15 minutes. | Service d’e-mail transactionnel |
| USR-04 | Clés d’accès | Connexion sans mot de passe par clé d’accès (passkey). | Essentiel | V1.5 (oct. 2027) | Aucune. | WebAuthn |
| USR-05 | Appareils et sessions | Liste des appareils connectés, révocation à distance, alerte de nouvelle connexion. | Essentiel | MVP (juil. 2027) | Aucune. | API sessions |
| USR-06 | Méthodes liées | Lier Apple, Google et e-mail au même compte ; récupération si une méthode est perdue. | Essentiel | V1.5 (oct. 2027) | Vérification forte avant toute liaison. | API identités |
| USR-07 | Verrouillage de l’app | Face ID, Touch ID, empreinte Android ou code à l’ouverture et après inactivité. | Essentiel | MVP (juil. 2027) | Délai réglable. | Biométrie du système |
| USR-08 | Préférences | Apparence (sombre, clair, pastel, système), langue, devise de référence, mode discret, palette daltonisme, réduire les animations et la transparence. | Essentiel | MVP (juil. 2027) | Aucune. | Design system |
| USR-09 | Centre de notifications | Historique et réglages par type (alertes, consignes, imports, sécurité). | Essentiel | V1.5 (oct. 2027) | Contenu masqué sur l’écran verrouillé par défaut. | Notifications |
| USR-10 | Signaler un problème | Depuis l’app : description, capture facultative, journal technique sans données financières, envoyé avec l’accord de l’utilisateur. | Essentiel | MVP (juil. 2027) | Aucune donnée financière dans le journal. | BO-19 |
| USR-11 | Parcours d'accueil et présentation des offres | Après la création du compte et Face ID : présentation des offres Essentiel, Plus et Signature en plein écran, fermeture par une croix pour rester en Essentiel, puis choix de contribution et accueil vide qui invite à ajouter ses établissements. | Essentiel | MVP (juil. 2027) | La croix et « Continuer avec Essentiel » sont toujours visibles ; aucune offre présélectionnée ; résiliation en trois clics rappelée. | Offres et tarifs (BO-01) |
| USR-12 | Annonces sur l'accueil | Annonces de LiVi (nouveautés, mises à jour, événements) : bannière sur l'accueil et fiche consultable en feuille, avec texte, images et vidéo ; les annonces restent consultables dans le centre de notifications. | Essentiel | V1 (oct. 2027) | Une seule bannière visible, par priorité : maintenance, incident, alerte de compte, puis annonce. Fiche ouverte au plus une fois par ouverture de l'app, jamais au premier lancement ni par-dessus une maintenance ou une alerte ; fermeture par la croix, la poignée ou un glissement. Aucune promotion de produit financier ni conseil. Vidéo sans lecture automatique avec le son, sous-titrée ; images avec texte alternatif ; « Réduire les animations » respecté. | Éditeur promotionnel (BO-29) |

## 18. Formats et accessibilité

| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |
|---|---|---|---|---|---|---|
| FMT-01 | Mise en page par classe de taille | Compacte, moyenne, étendue : même contenu, disposition adaptée (une colonne, maître-détail, multi-colonnes). | Essentiel | MVP (juil. 2027) | Testée sur la matrice d’appareils. | Design system |
| FMT-02 | Pliables | Écran externe étroit, format passeport (externe large), déplié quasi carré ; l’écran suit le pliage sans perdre l’état. | Essentiel | V2 (2028) | Avec la version Android. | React Native, matrice d’appareils |
| FMT-03 | Tablette | Maître-détail, barre latérale, multitâche (écran partagé, fenêtres) sur iPad et tablettes Android. | Essentiel | V1.5 (oct. 2027) | Aucune. | FMT-01 |
| FMT-04 | Web adaptatif | Du petit écran au grand moniteur : grille de 12 colonnes, barre latérale repliable. | Essentiel | MVP (juil. 2027) | Aucune. | Design system |
| FMT-05 | Paysage pour les graphiques | Graphique plein écran en orientation paysage sur téléphone. | Essentiel | V1.5 (oct. 2027) | Aucune. | FIC-02 |
| FMT-06 | Accessibilité | Lecteurs d’écran, tailles de texte dynamiques, contraste vérifié, réduire les animations et la transparence, cibles tactiles de 44 points. | Essentiel | MVP (juil. 2027) | Contrôle à chaque version (voir docs/qualite). | Design system |


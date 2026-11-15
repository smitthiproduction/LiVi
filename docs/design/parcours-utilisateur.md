# Parcours utilisateur iPhone : audit et parcours cible

Audit du 15 novembre 2026, à la demande du porteur de projet ([ordre](../../old/ordres/2026-11-15_2118_revue-du-parcours-utilisateur-des-maquettes.md)). Il porte sur les 124 écrans iPhone déjà dessinés (MQ-001 à MQ-124). Les autres formats, le web et le back-office (MQ-125 à MQ-200) ne sont pas encore dessinés : ils suivront le parcours retenu ici.

Méthode : relecture de chaque cadre Figma (titre, boutons, lignes, textes), de l'inventaire `docs/design/maquettes.json`, du catalogue et de `docs/produit/navigation.md`, puis reconstitution du chemin qu'un nouvel utilisateur suivrait, écran par écran.

## 1. Constat général

Les maquettes ont été dessinées par groupe fonctionnel, dans l'ordre de l'inventaire, sans chemin entre elles. Résultat :

- on ne peut pas parcourir le fichier : aucune interaction de prototype, aucun point de départ, aucune transition ;
- les écrans d'une même étape sont dispersés sur plusieurs pages (l'inscription est sur la page 01, l'accueil vide sur la page 02, l'ajout d'une banque à la fin de la page 02, les offres au milieu des réglages) ;
- il manque les écrans de liaison : présentation des offres après l'inscription, annuaire des établissements, choix de la méthode d'ajout, correspondance des colonnes sur iPhone, fin d'import, fiche d'un établissement, création d'un établissement non répertorié ;
- l'unité de base est le « compte » isolé, alors que l'utilisateur pense en **établissements** (sa banque, son courtier, son assureur) qui contiennent plusieurs comptes.

## 2. Vocabulaire retenu

| Terme | Sens | Exemples d'usage dans l'interface |
|---|---|---|
| **Établissement** | Tout organisme qui détient de l'argent ou des placements pour l'utilisateur : banque, néobanque, courtier, assureur, plateforme crypto, plateforme de prêt ou de financement participatif, gestionnaire d'épargne salariale | « Ajouter un établissement », « Mes établissements », « Mon établissement n'est pas listé » |
| **Compte** | Ce que contient un établissement : compte courant, livret A, LDDS, LEP, PEA, compte-titres, assurance vie, PER, portefeuille crypto, crédit | « 3 comptes chez Banque Rivière » |
| **Connexion automatique** | Mise à jour quotidienne par l'agrégateur agréé (banques, assureurs) ou par une clé en lecture seule (courtiers, crypto). Offre Plus | « Connecter automatiquement » |
| **Import de fichier** | Relevé CSV, Excel ou PDF, sans limite de date ni de taille | « Importer un fichier » |
| **Préréglage** | Réglages de lecture d'un fichier propres à un établissement (colonnes, format des dates, séparateurs), publiés depuis le back-office et modifiables par l'utilisateur | « Préréglage Banque Rivière » |
| **Saisie manuelle** | Solde ou opérations saisis à la main | « Saisir à la main » |
| **Bien** et **crédit** | Ce qui n'a pas d'établissement en ligne : appartement, voiture, or physique ; crédit immobilier ou prêt, rattaché à son établissement prêteur | « Ajouter un bien ou un crédit » |

« Support » reste réservé à l'intérieur d'un contrat (supports d'une assurance vie), comme aujourd'hui.

## 3. Parcours cible

Écrans existants (MQ-0xx) et écrans à créer (**nouveau**). Les feuilles s'ouvrent du bas vers le haut ; les écrans poussés arrivent par la droite ; le changement d'onglet est un fondu.

### Étape 1 · Inscription et offres
1. Bienvenue (MQ-001) : « Créer un compte » ou « J'ai déjà un compte ».
2. Créer votre compte (MQ-002, retitré) : Apple, Google ou e-mail ; lien « Déjà inscrit ? Se connecter ».
3. Adresse e-mail (MQ-003), puis code à usage unique (MQ-004).
4. Protéger LiVi avec Face ID (MQ-007) : « Activer » ou « Plus tard ».
5. **Présentation des offres** (nouveau, plein écran) : Essentiel, Plus, Signature, avec une croix en haut à droite. La croix ou « Continuer avec Essentiel » garde l'offre gratuite.
6. Essentiel gratuit, votre choix (MQ-005, recentré) : contribuer anonymement (5 comptes), ne pas contribuer (2 comptes) ou option Confidentialité à vie (100 € une fois), à égalité.

### Étape 2 · Ajouter un établissement
7. Accueil vide (MQ-025, refait) : message « Ajoutez vos banques, courtiers et placements », bouton « Ajouter un établissement », lien « Ajouter un bien ou un crédit ».
8. Annuaire des établissements (MQ-036, élargi) : recherche, pastilles par type (Banques, Néobanques, Courtiers, Assurance vie, Crypto, Prêt et financement participatif, Épargne salariale), logos ou monogrammes, méthodes disponibles pour chacun ; en bas « Mon établissement n'est pas listé ».
9. **Comment ajouter cet établissement** (nouveau, feuille) : connexion automatique (Plus), import de fichier (préréglage disponible), saisie manuelle.
10. Branche connexion automatique :
    - Essentiel : **la connexion automatique est incluse dans Plus** (nouveau, feuille), avec « Passer à Plus » ou « Importer un fichier à la place » ;
    - Plus ou Signature : double authentification si absente (MQ-009), consentement (MQ-037), puis **comptes trouvés** (nouveau) à cocher.
11. Branche import de fichier :
    - fichier et préréglage (MQ-034, recentré) : fichier choisi, préréglage détecté, compte de destination ;
    - **réglages de lecture** (nouveau) : séparateur, encodage, ligne d'en-têtes, format des dates (JJ/MM/AAAA, AAAA-MM-JJ, MM/JJ/AAAA), séparateur décimal et des milliers, sens des montants (une colonne signée, ou débit et crédit) ;
    - **correspondance des colonnes** (nouveau) : chaque colonne du fichier, avec un exemple de valeur, reliée à un champ du modèle LiVi ;
    - aperçu et doublons (MQ-035) ;
    - **import terminé** (nouveau) : nombre d'opérations, période couverte, annulation possible, enregistrement du réglage comme préréglage personnel.
12. Branche saisie manuelle : type de compte (MQ-031), puis solde et devise (MQ-032).
13. Établissement non listé : **créer un établissement** (nouveau) : nom, type, logo ou monogramme, couleur ; proposition facultative au back-office ; puis import de fichier sans préréglage.

### Étape 3 · Accueil et établissements
14. Accueil (MQ-024, refait) : en-tête avec avatar (profil), recherche, bouton Ajouter et notifications ; patrimoine net ; bloc « Mes établissements » (montant, nombre de comptes, fraîcheur).
15. Mes établissements (MQ-030, refait) : un groupe par établissement, total, date de la dernière mise à jour, « Tout mettre à jour ».
16. **Fiche d'un établissement** (nouveau) : total, état de la connexion et « Mettre à jour maintenant », tous ses comptes (compte courant, livrets, PEA, crédits…), « Importer un fichier », « Ajouter un compte ».
17. Détail d'un compte (MQ-033), puis fiche d'un actif (MQ-048…).

### Étape 4 · Patrimoine et fiches
18. Patrimoine (MQ-040) : répartition par classe, enveloppe ou établissement ; **patrimoine par établissement** (nouveau) avec son camembert.
19. Classes, dettes et échéances, immobilier, autres actifs, objectifs, fiches actifs et graphiques (MQ-041 à MQ-066).

### Étape 5 · Analyses
20. Performance, exposition, revenus, risque, plafonds (MQ-067 à MQ-078), ouverts depuis Patrimoine.

### Étape 6 · Budget
21. **Budget proposé** (nouveau, premier passage) : enveloppes calculées sur les trois derniers mois, à ajuster.
22. Budget du mois (MQ-079), catégories, opérations, règles, abonnements (MQ-080 à MQ-097).

### Étape 7 · Marchés
23. Découvrir, Monde (globe, carte, liste), recherche, fiches place et indices, actualités, calendrier (MQ-098 à MQ-114).

### Étape 8 · LiVi IA
24. **LiVi IA sans Signature** (nouveau) : présentation et accès à l'offre.
25. Consignes, coût, journal, assistant (MQ-115 à MQ-124).

### Étape 9 · Profil et réglages
26. Profil depuis l'avatar (MQ-010), offres (MQ-016), sécurité, sauvegarde, confidentialité, notifications, états système (MQ-006, MQ-008, MQ-009, MQ-011 à MQ-023).

## 4. Incohérences relevées

### A. Organisation du fichier
- **A1.** Aucune interaction de prototype ni point de départ : le parcours ne peut pas être joué.
- **A2.** Pages par groupe fonctionnel : une même étape est répartie sur plusieurs pages, et Figma n'autorise pas de lien de prototype d'une page à l'autre.
- **A3.** Les écrans de profil et d'états système (MQ-010 à MQ-023) sont intercalés entre la connexion (MQ-004) et l'accueil (MQ-024).
- **A4.** Les feuilles (MQ-022, MQ-029, MQ-062, MQ-082, MQ-096, MQ-101) sont des écrans figés : aucune ouverture verticale depuis l'écran parent.

### B. Inscription
- **B1.** MQ-001 « Créer un compte » mène à un écran titré « Se connecter » (MQ-002) : pas de différence entre inscription et connexion.
- **B2.** Aucune présentation des offres après l'inscription, ni croix pour rester en gratuit.
- **B3.** MQ-005 mélange choix de confidentialité et tarifs (« Payer, sans contribuer · dès 40 €/an ») : il fait doublon avec les offres et arrive avant que l'utilisateur ait vu le produit.
- **B4.** Ordre des étapes indéfini : Apparence (MQ-006), Face ID (MQ-007) et double authentification (MQ-009) n'ont pas de place dans le parcours. Apparence relève des réglages ; la double authentification n'est utile qu'au moment d'activer la connexion automatique ou LiVi IA (SEC-04).
- **B5.** MQ-016 (offres) n'a aucun bouton pour choisir une offre et marque « Votre offre » sur Essentiel, alors que Camille utilise la connexion automatique (Plus) et LiVi IA (Signature).

### C. Accueil et premier lancement
- **C1.** L'accueil vide (MQ-025) demande d'« ajouter votre premier compte » : il n'incite pas à ajouter ses banques, courtiers et placements.
- **C2.** L'accueil (MQ-024) n'a ni avatar ni cloche : le profil (MQ-010) et les notifications (MQ-019) sont inaccessibles, contrairement à `navigation.md`.
- **C3.** Les raccourcis de l'accueil (Ajouter, Importer, Budget, Rechercher) doublonnent avec la barre d'onglets et le menu Ajouter.
- **C4.** Le bloc « Comptes » de l'accueil liste des comptes isolés, sans regroupement par établissement.
- **C5.** Le menu Ajouter (MQ-029) part du type de compte (« Compte bancaire », « Placement ») au lieu de l'établissement ; la connexion automatique n'y figure pas.

### D. Établissements
- **D1.** Pas d'annuaire commun : MQ-036 ne sert qu'à la synchronisation, MQ-032 demande l'établissement dans un champ texte, MQ-034 importe un fichier sans demander l'établissement.
- **D2.** « Mon établissement n'est pas listé » renvoie vers l'import, sans possibilité de créer l'établissement (nom, logo).
- **D3.** La connexion automatique (MQ-036, MQ-037) est proposée sans vérifier l'offre, alors qu'elle est réservée à Plus (CPT-06).
- **D4.** Aucune fiche d'établissement : on ne voit pas ce que contient Banque Rivière (compte courant, livret A, crédit immobilier).
- **D5.** MQ-030 classe par type (Banques, Placements), sans total par établissement, sans action « Mettre à jour » ni « Importer un fichier ».
- **D6.** Le crédit immobilier de Banque Rivière (MQ-043) n'apparaît pas avec les comptes de Banque Rivière.
- **D7.** Après une connexion automatique, aucun écran ne montre les comptes trouvés ni ne permet de choisir lesquels ajouter.

### E. Import de fichier
- **E1.** Les six étapes de l'import (CPT-03) ne sont pas visibles sur iPhone : réglages de lecture et correspondance des colonnes manquent (elles n'existent qu'à l'inventaire web, MQ-155).
- **E2.** Les variantes de format (dates françaises ou américaines, tirets ou barres, virgule ou point décimal, débit et crédit séparés) ne sont pas montrées.
- **E3.** Pas de compte de destination : on ne sait pas dans quel compte arrivent les lignes.
- **E4.** Aucun écran de fin d'import : pas de période couverte, pas d'annulation, pas d'enregistrement du préréglage.
- **E5.** L'absence de limite de date et de taille n'est pas dite.

### F. Patrimoine
- **F1.** Le sélecteur Classe, Enveloppe, Établissement de MQ-040 n'a que la vue par classe : la vue par établissement manque.
- **F2.** Les pièces d'or (MQ-046) affichent « Cours du 13 nov. » sans poids ni unité : impossible de vérifier la valeur.

### G. Navigation
- **G1.** L'onglet Activité contient Fil, Budget et Abonnements (MQ-079, MQ-089) : le budget, central pour l'utilisateur, est caché dans un onglet nommé autrement.
- **G2.** `navigation.md` annonce dans Marchés les sous-onglets Catalogue, Monde, Listes et Actualités ; les écrans montrent Monde et Découvrir, les listes et actualités étant des écrans poussés.
- **G3.** L'onglet LiVi IA n'a pas d'état pour un utilisateur sans Signature.

### H. Budget
- **H1.** Les catégories de MQ-079 n'ont ni électricité, ni gaz, ni eau, ni internet ; « Maison » mélange tout.
- **H2.** Rien n'explique que le budget est proposé automatiquement à partir des dépenses passées.

### I. Données fictives contradictoires
- **I1.** Offre de Camille : Essentiel (MQ-016), Plus (MQ-010), Signature (MQ-115). Retenu : Signature.
- **I2.** Crypto : « Portefeuille crypto, saisie manuelle, il y a 12 jours » (MQ-030, MQ-040, MQ-060), mais plateforme Valcrypto reliée au lot 6. Retenu : Valcrypto, clé en lecture seule. La valeur ancienne citée en exemple devient la montre (22 mois, MQ-046).
- **I3.** « Consigne : seuil atteint sur ETF Monde » (MQ-019, MQ-089) contredit les consignes du lot 6 (l'ETF Monde est un investissement programmé). Retenu : « Consigne déclenchée : Ether sous 2 600 € ».
- **I4.** MQ-032 nomme le compte « PEA de Camille », partout ailleurs « PEA » chez Atlas Bourse.

Données de référence après correction : 12 comptes répartis en Banque Rivière (compte courant 4 812,40 €, livret A 4 320,12 €, crédit immobilier −192 740,59 €), Atlas Bourse (PEA 38 920,15 €), Horizon Vie (assurance vie 61 204,88 €), Valcrypto (3 120,00 €), Toits Partagés (2 610,58 €), Crédit du Littoral (prêt auto −7 046,97 €) et biens saisis à la main (appartement 255 000,00 €, voiture 9 800,00 €, montre 2 400,00 €, pièces d'or 1 920,00 €). Total des actifs : 384 108,13 €.

## 5. Corrections

1. **Une page « Parcours iPhone »** remplace les pages 01 à 07 : une section par étape, les écrans rangés dans l'ordre du parcours. Les identifiants Figma et MQ ne changent pas.
2. **Écrans à créer** (MQ-201 et suivants) : présentation des offres, comment ajouter un établissement, connexion incluse dans Plus, comptes trouvés, réglages de lecture, correspondance des colonnes, import terminé, créer un établissement, fiche d'un établissement, patrimoine par établissement, budget proposé, LiVi IA sans Signature.
3. **Écrans à reprendre** : MQ-002, MQ-005, MQ-010, MQ-016, MQ-019, MQ-024, MQ-025, MQ-027 à MQ-030, MQ-032, MQ-034, MQ-036, MQ-040, MQ-046, MQ-060, MQ-079, MQ-089.
4. **Prototype** : liens sur chaque bouton, ligne avec chevron, retour et onglet ; feuilles ouvertes du bas avec animation intelligente ; points de départ : inscription, ajout par fichier, connexion automatique, établissement non listé, utilisation quotidienne.
5. **Spécification** : catalogue (parcours d'accueil, annuaire des établissements côté utilisateur et côté back-office, préréglages d'import, budget proposé, fournisseurs d'énergie en V2), classification (unité des métaux : gramme, kilogramme, once troy), `navigation.md`.

## 6. Points produit hors maquettes

- **Sources de cours.** Yahoo Finance ne propose pas d'API officielle de données de marché ; ses conditions interdisent l'usage commercial sans autorisation écrite, et Google Finance n'a pas d'API. LiVi doit passer par un ou plusieurs fournisseurs sous licence d'affichage (règle déjà posée dans `docs/reglementation/donnees-tierces-et-licences.md`), éventuellement combinés par classe d'actifs.
- **Matières premières.** Or, argent, platine, palladium et cuivre ont des cours publics suivis en continu. Le titane et le minerai de fer n'ont pas de cours au comptant public pour les particuliers : ils seront suivis par un contrat à terme ou un ETC quand il existe, sinon par un prix saisi.
- **Fournisseurs d'énergie et d'internet** (V2, environ un an après le lancement) : séparer abonnement et consommation pour l'électricité, le gaz, l'eau et internet. Ces analyses de consommation restent des constats chiffrés, distincts de tout conseil en investissement.
- **Noms réels des établissements.** Les maquettes gardent des noms fictifs et des monogrammes. L'annuaire réel (noms, logos en usage nominatif, méthodes disponibles, préréglages) sera tenu dans le back-office.

## 7. Corrections faites le 15 novembre 2026

- **Fichier** : page « Parcours iPhone » avec 9 sections dans l'ordre du parcours ; pages 01 à 07 retirées une fois vidées ; 341 liens de prototype, 8 points de départ, feuilles en animation intelligente (A1 à A4).
- **Inscription** : MQ-002 devient « Créer votre compte » ; présentation des offres en plein écran avec croix (MQ-201) ; MQ-005 recentré sur le choix Essentiel, avec l'option à vie à égalité ; Apparence reste dans les réglages, la double authentification s'ouvre depuis la connexion automatique (B1 à B5).
- **Accueil** : en-tête avec avatar, recherche, Ajouter et notifications sur MQ-024 et ses états ; bloc « Mes établissements » ; accueil vide refait (MQ-025) ; menu Ajouter qui part de l'établissement (C1 à C5).
- **Établissements** : annuaire avec types et méthodes (MQ-036), méthode d'ajout (MQ-202), connexion incluse dans Plus (MQ-203), comptes trouvés (MQ-204), création d'un établissement (MQ-208), fiche d'établissement avec comptes, crédit, mise à jour et import (MQ-209), mes établissements par établissement (MQ-030) (D1 à D7).
- **Import** : 5 étapes numérotées (MQ-034, MQ-205, MQ-206, MQ-035, MQ-207), préréglage, formats, compte de destination, aucune limite de date ni de taille, annulation (E1 à E5).
- **Patrimoine** : vue par établissement avec camembert (MQ-210) ; entrée « Analyses » sur MQ-040 ; or en grammes avec cours (MQ-046) (F1, F2).
- **Navigation** : onglet « Budget » (Budget, Opérations, Abonnements) à la place d'« Activité » ; MQ-089 devient « Budget : opérations » ; LiVi IA sans Signature (MQ-212) ; `navigation.md` aligné sur les écrans (G1 à G3).
- **Budget** : budget proposé au premier passage (MQ-211) ; catégorie « Énergie et eau » (H1, H2).
- **Données** : offre Signature, Valcrypto, consigne Ether, compte « PEA » (I1 à I4).

Restent à faire : un accès direct à Apparence (MQ-006) depuis les réglages, les autres formats, le web et le back-office (dont l'annuaire des établissements, MQ-213), et l'écran V2 des fournisseurs d'énergie (MQ-214). L'agent `revue-maquettes` (`.claude/agents/revue-maquettes.md`) refait cet audit avant chaque lot.

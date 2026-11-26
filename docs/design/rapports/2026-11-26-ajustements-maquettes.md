# Rapport d'ajustement et de mise à jour des maquettes

_26 novembre 2026, 10 h (Europe/Paris). Ordre : `old/ordres/2026-11-26_0807_ajustements-des-maquettes-d-apres-les-audits-et-rapport-comp.md`. Fichier Figma « LiVi — Maquettes », versions « Ajustements d'après les audits, jour 1 » et « jour 2 »._

## 1. Résumé

- **Sources relues** : audit Figma du 20 novembre (`docs/audit-figma/2026-11-20-formats-notifications-restes.md`, 33 constats), simulation à cinq personas du 20 novembre (`docs/qualite/revues/2026-11-20-simulation-ux-5-personas.md`, 65 annotations), tests UX du 26 novembre (`rapports-ux/_synthese.md`, 40 problèmes communs et 20 contradictions), chronique du projet (`docs/chronique/REPORT.md`, chapitre 7, 16 écarts).
- **Décisions du porteur** (26 nov., 8 h 05), consignées dans la décision 0009 : fonctions non livrées datées, Signature non achetable avant sa sortie ; même ordre de navigation partout, « Accueil » aussi sur le web ; travail en deux passes le même jour.
- **Résultat** : 27 écrans ajoutés (MQ-256 dessiné, MQ-257 à MQ-276 créés, MQ-224 et MQ-232 conçus), une quarantaine d'écrans repris, 5 composants modifiés, environ 1 000 textes chiffrés corrigés. Inventaire : 276 écrans (57 validés, 136 à valider, 83 à faire). Catalogue : 182 fonctionnalités (USR-14 ajoutée).
- **États des 154 constats** : 40 faits, 24 en partie, 72 reportés, 16 qui attendent une décision du porteur, 2 sans objet (détail par source aux chapitres 3 à 6). Les reportés sont surtout des finitions et des mineurs. Les deux bloquants de la simulation (S-001, D-001) sont faits ; parmi les bloquants des tests, l'achat sur iPhone, les conditions avant l'achat, la résiliation et la saisie à la main sont faits, le web (C1) et les formats hors iPhone (C9) le sont en partie.

| Source | Constats | Faits | En partie | Reportés | Porteur | Sans objet |
|---|---|---|---|---|---|---|
| Audit Figma du 20 nov. | 33 | 13 | 3 | 17 | 0 | 0 |
| Simulation à cinq personas | 65 | 9 | 14 | 38 | 4 | 0 |
| Tests UX du 26 nov. (problèmes communs) | 40 | 11 | 6 | 17 | 6 | 0 |
| Chronique, écarts | 16 | 7 | 1 | 0 | 6 | 2 |
| **Total** | **154** | **40** | **24** | **72** | **16** | **2** |

Légende : **Fait** (corrigé dans Figma ou dans le dépôt, preuve indiquée), **En partie** (une part est faite, le reste est dit), **Reporté** (non traité dans cet ordre, à reprendre), **Porteur** (demande un arbitrage).

## 2. Ce qui a changé

### 2.1 Écrans ajoutés
| Écran | Cadre Figma | Ce qu'il montre | Source |
|---|---|---|---|
| MQ-256 · Référentiel d'actifs et sources de cours (back-office) | `206:10910` | Registre des ISIN, lieux, codes par source, contrôles, entrée « Référentiel » | Décision 0008 |
| MQ-257 · Import, étape 4 (Caisse du Port) | `216:9691` | Un seul doublon, interne au fichier | Audit A-09 |
| MQ-258 · Import terminé (Caisse du Port) | `216:9979` | 1 234 opérations, préréglage personnel retenu | Audit A-09 |
| MQ-259 · Fiche de Caisse du Port | `216:10064` | Établissement importé, 3 126,45 € | Audit A-09, simulation D-008 |
| MQ-260, MQ-262 · Lieux et courtiers, Source des cours (iPad) | `217:1142`, `217:1472` | Deux colonnes ; colonne centrée de 600 pt | Formats (CLAUDE.md §5) |
| MQ-261, MQ-263 · Les mêmes sur le web | `217:4175`, `217:4598` | Barre latérale, titre et retour | Formats |
| MQ-264 · Récapitulatif de Plus depuis l'annuaire | `232:9912` | Feuille avec prix, renouvellement automatique, résiliation, « Annuler » | Tests C19, simulation D-003 |
| MQ-265, MQ-266 · Abonnement activé (Plus, Signature) | `233:9959`, `233:10268` | Reçu, échéance, « Voir mon abonnement », « Découvrir LiVi IA » | Tests C2 |
| MQ-267, MQ-268 · Offres et abonnement (Essentiel, Plus) | `233:10354`, `233:10600` | Offre en cours encadrée, Signature « Disponible en octobre 2027 » | Tests C3, simulation D-005 |
| MQ-269 · Gérer ou résilier (feuille) | `233:10700` | Résiliation dans les réglages de l'App Store, ce qui change à l'échéance | Tests C5 |
| MQ-224 · Offres après l'inscription (web) | `154:10424` | Trois offres côte à côte, mentions web, liens légaux | Tests C1 |
| MQ-232 · Offres et abonnement (web) | `154:10960` | Offres et panneau « Passer à Plus » (paiement par carte, « Annuler ») | Tests C1, C5 |
| MQ-270 · Nouveau compte : assurance vie | `243:10182` | Assureur, contrat, valeur au relevé, date du relevé | Test 06 B1 |
| MQ-271 · Nouveau bien immobilier | `243:10489` | Type, nom, valeur estimée par l'utilisateur, loyer, date d'achat | Test 06 B1 |
| MQ-272 · Modifier une enveloppe (feuille) | `243:10556` | Montant, report du reste, alerte, « Enregistrer » et « Annuler » | Simulation N-011, test 07 n° 5 |
| MQ-273 · Centre de notifications : types du MVP | `245:10354` | Import, nouvelle connexion, relevé ancien, marques « Non lue » | Audit A-07, A-08 |
| MQ-274 · Article d'aide dans le navigateur intégré | `245:10675` | « Offres, paiement et résiliation », état hors connexion, « Terminé » | Audit A-11, tests C6 |
| MQ-275, MQ-276 · Accueil et offres en texte agrandi (200 %) | `247:10433`, `247:10655` | Lignes empilées, montant en variante « Texte agrandi » | Tests 04, 06 B4, simulation A-002 |

### 2.2 Écrans et composants repris
- **Offres** (décision 0009) : MQ-201, MQ-218, MQ-219, MQ-203, MQ-212, MQ-016. Fonctions datées, limite d'Essentiel, crédits IA, renouvellement automatique, « Annuler », marge basse sous les liens légaux.
- **Navigation** : composant « Barre latérale web » (Accueil, Patrimoine, Budget, Marchés, LiVi IA, Import, Rapports ; plus de Réglages), iPad paysage sans Import ni Rapports, MQ-149 « Accueil ». Code aligné : `apps/mobile` (onglet et route Budget, ancienne route en redirection), `apps/web` (barre latérale, page Budget).
- **Composants** : Pastille de notification à largeur variable, Rail de navigation (entrées de 56 pt), Barre latérale web (44 pt), En-tête web (avatar « CM »).
- **Écrans** : MQ-130 et MQ-132 (titres sur deux lignes, défilement), MQ-005 (« trois choix présentés à égalité »), MQ-031 (tuiles Assurance vie et Bien immobilier reliées), MQ-079 (« Modifier les enveloppes »), MQ-211 (« Valider ce budget » relié), MQ-019 (non-lues, liens, mention « soumis à l'avis juridique »), MQ-248 (contrat relié, « Mettre à jour la valeur »), MQ-250 (article relié), MQ-253 (vers MQ-257).
- **Tout le fichier** : espaces des nombres comme dans `packages/core` (espace fine insécable entre les milliers, espace insécable avant € et %), environ 1 000 textes sur six pages ; « Relevé ancien » sur 20 lignes ; 17 étiquettes « À valider » ; compteurs des titres de page (29, 45, 26) ; noms de cadres alignés sur l'inventaire.
- **Contrôle** : planches temporaires en Sombre, Clair et Pastel pour chaque lot, puis page supprimée ; 14 points de départ du prototype conservés.

## 3. Audit Figma du 20 novembre

| N° | Constat | Écrans | État | Ce qui est fait, ou la suite |
|---|---|---|---|---|
| A-01 | Navigation différente selon le format | MQ-141, MQ-149, composants `6:205`, `186:537` | Fait | Décision 0009 ; composant réordonné ; code aligné |
| A-02 | Cibles de navigation sous 44 pt | Rail, barre latérale | Fait | Rail 56 pt, barre latérale 44 pt |
| A-03 | Textes tronqués en format étroit | MQ-130, MQ-132 | Fait | Titres sur deux lignes, défilement |
| A-04 | Espaces ordinaires dans les nombres | Tout le fichier | Fait | Espaces fine insécable et insécable, glyphes vérifiés dans Manrope et Geist Mono |
| A-05 | Fraîcheur ancienne par la seule couleur | 11 accueils, MQ-248 | Fait | Mot « ancien » (« Relevé ancien · 30 sept. ») |
| A-06 | Pastille à largeur fixe | Composant `176:164` | Fait | Largeur ajustée, « 99+ » sur 32 pt |
| A-07 | Non-lues invisibles, lignes sans destination | MQ-019 | En partie | Marques « Non lue », toutes les lignes reliées ; restent « Tout marquer comme lu » et le bouton de réglages |
| A-08 | Contenu hors MVP sans annotation | MQ-019, MQ-245 | En partie | MQ-273 (types du MVP), mention sur l'ordre préparé ; MQ-019 devient l'état V1.5 ; le résumé hebdomadaire reste à inscrire ou à retirer |
| A-09 | Fin d'import de Caisse du Port sur Banque Rivière | MQ-253 › MQ-035 › MQ-207 | Fait | MQ-257 à MQ-259 |
| A-10 | Plusieurs destinations par ligne d'opération | MQ-089 | Reporté | Toute ligne vers le détail (MQ-081) |
| A-11 | Aide jouable à moitié | MQ-250 | En partie | MQ-274 relié ; restent la recherche et les documents légaux |
| A-12 | Contrat Horizon Vie sans destination, pas de mise à jour au MVP | MQ-248 | Fait | Ligne reliée (MQ-033), « Mettre à jour la valeur » (MQ-270) |
| A-13 | Avatar « JR » sur le web | En-tête web | Fait | « CM » dans le composant |
| M-01 | Exception des liens du lot 7 non écrite | `figma.md` | Fait | Règle 6 complétée dans `figma.md` |
| M-02 | Pas de pastille de statut sur le lot 7 | Pages 10 et 11 | Fait | 17 étiquettes « À valider » |
| M-03 | Compteurs des titres de page faux | Pages 10, 11, 12 | Fait | 29, 45 et 26 maquettes |
| M-04 | Noms de cadres différents de l'inventaire | MQ-248, MQ-249, MQ-251 à MQ-253 | Fait | Noms repris de `maquettes.json` |
| M-05 | Onglet actif du rail par la seule teinte | Rail | Reporté | Indicateur sous l'icône |
| M-06 | Variante Texte agrandi du montant héros sans styles | Montant héros | Reporté | Styles dédiés à créer |
| M-07 | Valeurs non liées aux variables dans des composants | Plusieurs composants | Reporté | Liaison aux variables |
| M-08 | Seuils de la barre d'onglets sur Galaxy S | MQ-130 | Reporté | Aligner les deux seuils dans `responsive-et-formats.md` |
| M-09 | Barre de gestes Android absente | Formats Android | Reporté | Gabarit à ajouter |
| M-10 | iPhone SE : une seule ligne d'établissement | MQ-125 | Reporté | Trois lignes et défilement |
| M-11 | Point du graphique coupé | MQ-141, MQ-149 | Reporté | Marge intérieure |
| M-12 | Pastille hors en-tête, icônes Import et Rapports | MQ-149 | Reporté | Pastille dans le bouton cloche, icônes dédiées |
| M-13 | Flèches ▲▼ contre ↑↓ | `tokens.json`, `packages/core` | Reporté | Un seul jeu |
| M-14 | En-têtes en casse normale, état vide absent | MQ-019 | Reporté | Capitales et cadre « Notifications : vide » |
| M-15 | « Ajouter au calendrier » non annoté | MQ-245 | Reporté | Annotation d'action système |
| M-16 | Contrôles d'import non reliés ; texte de MQ-208 | MQ-208, MQ-251 à MQ-253, MQ-089 | Reporté | Annoter « non prototypé » ; « Vous pourrez retenir ces réglages » |
| M-17 | Règle de monogramme des comptes | MQ-248, MQ-249 | Reporté | Règle unique |
| M-18 | Type « Support » absent de USR-09 | MQ-250 | Reporté | Spécification (USR-09, BO-19) |
| M-19 | Marges de l'iPad paysage | MQ-141 | Reporté | Trancher 24 ou 32 pt |
| M-20 | Pile de l'assistant après la fiche | MQ-204, MQ-207 | Reporté | Annotation, puis code |

## 4. Simulation à cinq personas du 20 novembre

| N° | Constat | Écrans | État | Ce qui est fait, ou la suite |
|---|---|---|---|---|
| N-001 | « Jusqu'à 5 comptes » ambigu | MQ-201, MQ-005 | Fait | « 5 comptes si vous contribuez aux statistiques anonymes, 2 sinon » |
| N-002 | Ce que compte la limite | MQ-201, MQ-030, MQ-204 | Reporté | Définir ce qui compte, compteur, feuille de limite |
| N-003 | « Trois choix de même valeur » | MQ-005 | Fait | « Trois choix présentés à égalité » |
| N-004 | Accueil vide à 0,00 € | MQ-025, MQ-244 | Reporté | Exemple explorable |
| N-005 | Méthodes d'ajout | MQ-202 | Reporté | |
| N-006 | Obtenir le fichier | MQ-034, MQ-251 | Reporté | Guide par établissement (BO-28) |
| N-007 | Étapes 2 et 3 malgré le préréglage | MQ-205, MQ-206 | Reporté | Spécification CPT-03 |
| N-008 | Clé API d'Atlas Bourse | MQ-038 | Reporté | |
| N-009 | Après l'import | MQ-211 | En partie | « Valider ce budget » relié ; fin d'import de Caisse du Port |
| N-010 | Lignes « À catégoriser » | MQ-089 › MQ-122 | Reporté | Tri manuel |
| N-011 | Modifier une enveloppe | MQ-079 | Fait | MQ-272 |
| N-012 | « +4 337,12 € sur 1 mois » | MQ-024 | Reporté | |
| N-013 | Sources « Clé », « Relevé », « Saisie » | MQ-024, MQ-030 | En partie | « Relevé ancien » écrit ; légende à faire |
| N-014 | Pastilles de l'accueil vide | MQ-025 | Reporté | |
| N-015 | Présentation de LiVi IA | MQ-212 | En partie | Date et versements présentés comme des rappels |
| N-016 | Lignes de l'annuaire | MQ-036 | Reporté | |
| S-001 | Fonctions vendues avant leur livraison | MQ-201, MQ-212, MQ-203 | Fait | Décision 0009 |
| S-002 | Crédits IA | MQ-201, MQ-212, MQ-219 | Fait | 400 crédits inclus affichés |
| S-003 | Détail des offres | MQ-201 | En partie | Limites et crédits ; « 10 connexions » contre « illimités » à trancher |
| S-004 | Valeurs anciennes | MQ-024, MQ-040 | En partie | Mot « ancien » ; règle unique à écrire |
| S-005 | Reprise d'un historique de placements | MQ-034 à MQ-206 | Reporté | Modèle « Positions » |
| S-006 | « Valider avec Face ID » sur une fonction indisponible | MQ-119 | Reporté | Bouton désactivé |
| S-007 | Pastille « ▲ +2,41 % » | MQ-024 | Reporté | |
| S-008 | « Comptes illimités » | MQ-201, MQ-203 | Reporté | Avec S-003 |
| S-009 | Navigation entre les mois | MQ-079 | Reporté | |
| S-010 | Couverture web | Page 11 | En partie | MQ-224, MQ-232, MQ-261, MQ-263 ; 41 cadres web restent à concevoir |
| D-001 | Liens légaux et restauration des achats | MQ-201, MQ-218, MQ-219, MQ-016 | Fait | Liens sur MQ-201 et MQ-224 |
| D-002 | Boutons des offres | MQ-201 | Porteur | Contradiction des tests (K1) : neutralité ou hiérarchie |
| D-003 | Achat de Plus pendant l'ajout | MQ-203 › MQ-220 | Fait | MQ-264 |
| D-004 | Branche payante et offres en cours d'usage | MQ-212, MQ-218, MQ-219 | Fait | MQ-265 à MQ-269 |
| D-005 | Offres et abonnement pour Essentiel ou Plus | MQ-016 | Fait | MQ-267, MQ-268 |
| D-006 | Reconnexion par e-mail | MQ-221 › MQ-003 | Reporté | |
| D-007 | Atlas Bourse et Valcrypto | MQ-036 › MQ-038 | Reporté | |
| D-008 | Fiche après un import | MQ-207 › MQ-209 | En partie | Fait pour Caisse du Port (MQ-259) |
| D-009 | Changer la catégorie | MQ-081 › MQ-080 | Reporté | |
| D-010 | « Créer une enveloppe à la main » | MQ-217 › MQ-211 | Reporté | Modifier fait (MQ-272), créer à faire |
| D-011 | Lignes d'établissement | MQ-030 | Reporté | |
| D-012 | « Mettre à jour » | MQ-209 | Reporté | |
| D-013 | Boutons principaux sans lien | 17 cadres | En partie | Nouveaux écrans et MQ-211 reliés ; liste à reprendre |
| D-014 | Restes de données (« JR », « 12 comptes ») | MQ-029, MQ-149 | En partie | « CM » fait ; « 12 comptes » à vérifier |
| D-015 | Onglets Marchés et LiVi IA au MVP | Barre d'onglets, MQ-104, MQ-212 | Porteur | Garder, dater ou masquer (lié à P-009) |
| D-016 | Rédaction | MQ-117, MQ-097 | Reporté | |
| A-001 | Taille des informations critiques | 149 cadres | Reporté | Plancher de 13 pt |
| A-002 | Grande taille de texte | MQ-024, MQ-079, MQ-089, MQ-201 | En partie | MQ-275, MQ-276 ; Budget et Opérations à faire |
| A-003 | « Annuler l'import » sans confirmation | MQ-035, MQ-207 | Reporté | |
| A-004 | Fermer une feuille | MQ-029, MQ-202, MQ-203, MQ-220 | En partie | « Annuler » sur les feuilles d'achat ; croix ailleurs à faire |
| A-005 | Mode discret | MQ-024, MQ-027 | Reporté | |
| A-006 | « Se déconnecter » sans confirmation | MQ-010 | Reporté | |
| A-007 | Accueil sur petit écran | MQ-125 | Reporté | Avec M-10 |
| A-008 | Onglets de fiche | MQ-048 | Reporté | |
| A-009 | Aide | MQ-250 | En partie | MQ-274 |
| A-010 | Graphique | MQ-024 | Reporté | |
| A-011 | Tablette et pliable | Page 10 | En partie | MQ-260, MQ-262 ; patrimoine et budget à faire |
| P-001 | Contribution contre comptes | MQ-201, MQ-005 | Porteur | Avis RGPD sur « consentir ou payer » ; texte clarifié |
| P-002 | Banque Rivière à −183 608,07 € | MQ-024, MQ-030 | Reporté | Ligne ventilée |
| P-003 | Pastille rouge de la cloche | MQ-024 | Reporté | |
| P-004 | Période par défaut | MQ-024 | Reporté | |
| P-005 | Données tierces | MQ-055 | Reporté | Désactivées par défaut |
| P-006 | Dépassement d'enveloppe | MQ-079 | Reporté | |
| P-007 | Raccourcis après « Dois-je vendre ? » | MQ-123 | Reporté | |
| P-008 | Coût de LiVi IA | MQ-115 | Reporté | |
| P-009 | Onglet consacré à une offre | MQ-212 | Porteur | Avec D-015 |
| P-010 | Après l'import | MQ-207 | En partie | MQ-258, MQ-259 |
| P-011 | Doublons précochés | MQ-035 | Reporté | |
| P-012 | « Plus fortes hausses · vendredi 13 nov. » | MQ-104 | Reporté | |

## 5. Tests UX du 26 novembre (sept rapports)

| N° | Problème commun | Écrans | État | Ce qui est fait, ou la suite |
|---|---|---|---|---|
| C1 | Web non conçu | Page 11 | En partie | MQ-224, MQ-232, MQ-261, MQ-263 |
| C2 | Rien ne confirme l'achat | MQ-218, MQ-219 | En partie | iPhone fait (MQ-265, MQ-266) ; confirmation web à dessiner |
| C3 | Offres et abonnement seulement pour Signature | MQ-016 | Fait | MQ-267, MQ-268 |
| C4 | Information décisive absente avant l'engagement | MQ-201, MQ-203, MQ-212 | Fait | Décision 0009 |
| C5 | Résiliation jamais montrée | MQ-201, MQ-016 | Fait | MQ-269, MQ-274, panneau de MQ-232 |
| C6 | Aide muette | MQ-250 | En partie | MQ-274 |
| C7 | Mentions d'engagement en petit gris | MQ-201, MQ-016 | Reporté | Plancher de 13 pt (A-001) |
| C8 | Boutons d'offre peu visibles | MQ-201, MQ-016 | Porteur | Voir D-002 |
| C9 | Aucun écran d'offre hors iPhone 393 | Page 10 | En partie | MQ-276, MQ-224, MQ-232 ; petits écrans et Android à faire |
| C10 | « Prix réglables » lu comme instable | MQ-016 | Reporté | Retirer la formule interne |
| C11 | Pied de l'écran des offres | MQ-201 | Fait | Marge basse de 40 pt |
| C12 | 5 comptes puis 2 | MQ-201, MQ-005 | Fait | Condition écrite partout |
| C13 | « Trois choix de même valeur » | MQ-005 | Fait | |
| C14 | MQ-005 sans état sélectionné | MQ-005 | Reporté | |
| C15 | Famille et Société absentes des offres | MQ-201 | Fait | Datées « en 2028 » (décision 0009) |
| C16 | Ni offre mensuelle ni essai | MQ-201, MQ-016 | Porteur | Choix commercial |
| C17 | La croix mène à un nouveau choix | MQ-201, MQ-005 | Porteur | Contradiction K15 |
| C18 | Boutons reliés sous le voile | MQ-218 | Reporté | |
| C19 | Plus activé en un toucher | MQ-203 | Fait | MQ-264 |
| C20 | Options non achetables | MQ-016, MQ-177 | Fait | Datées « en 2028 », sans bouton d'achat |
| C21 | Double authentification après le paiement | MQ-220 | Reporté | « Plus tard », vocabulaire |
| C22 | « Illimités » contre « 10 connexions » | MQ-201, MQ-203 | Porteur | Limite de connexions à fixer |
| C23 | Renouvellement non dit automatique | MQ-218 | Fait | |
| C24 | Pas d'« Annuler » sur la feuille | MQ-218 | Fait | |
| C25 | Une ou deux confirmations Face ID | MQ-218, MQ-219 | Reporté | |
| C26 | Mentions de l'annuaire sans légende | MQ-036 | Reporté | |
| C27 | « Étape 2 sur 3 » sans étape 1 | MQ-037 | Reporté | |
| C28 | Mentions légales de l'inscription non reliées | MQ-001, MQ-002 | Reporté | |
| C29 | Feuille visible au défilement | MQ-201 | Reporté | À vérifier dans le prototype |
| C30 | Détails de MQ-016 | MQ-016 | Reporté | |
| C31 | Aucun écran de limite atteinte | MQ-005, MQ-211, MQ-203 | Reporté | Avec N-002 |
| C32 | Relevé PDF « lu par LiVi IA » en gratuit | MQ-039, MQ-202 | Reporté | Marquer « Avec Signature, dès octobre 2027 » |
| C33 | Contribution anonyme non expliquée | MQ-005 | Porteur | Avis RGPD (P-001) |
| C34 | « Clé d'accès » jamais expliquée | MQ-002, MQ-220 | Reporté | |
| C35 | Aucun état entre accueil vide et plein | MQ-025, MQ-024 | Reporté | |
| C36 | Onglet LiVi IA permanent en gratuit | MQ-025 › MQ-212 | Porteur | Avec D-015, P-009 |
| C37 | Budget gratuit inachevé | MQ-217, MQ-211, MQ-079 | En partie | Validation reliée, modification ; création à la main à faire |
| C38 | L'écran de bienvenue ne dit pas le prix | MQ-001 | Reporté | |
| C39 | Icône « Assurance vie » décalée | MQ-025 | Reporté | |
| C40 | Pas de sortie libellée sur MQ-203 | MQ-203 | En partie | MQ-264 ajoute « Annuler » après le choix ; sortie avant le choix à revoir |

**Problèmes propres à un persona**
- **Michel (06)** : B1 formulaires d'assurance vie et de bien, fait (MQ-270, MQ-271, tuiles reliées) ; B4 texte agrandi, en partie (MQ-275, MQ-276).
- **Nadia (07)** : n° 1 web, en partie ; n° 2 aucun marqueur « professionnel » et n° 3 budget qui mêle tous les comptes, porteur (la séparation pro et perso n'est pas au catalogue hors option Société, prévue en 2028) ; n° 4 « Valider ce budget » relié, fait ; n° 5 enveloppe modifiable, fait.

**Contradictions entre rapports à arbitrer** : neutralité ou hiérarchie de l'écran des offres (K1, voir D-002) ; croix de l'écran des offres (K15) ; onglet LiVi IA sans Signature (K13) ; import en cinq étapes (K20).

## 6. Chronique, écarts

| N° | Écart | État | Suite |
|---|---|---|---|
| E-01 | Business plan contre catalogue | Fait | Docs corrigées ; l'artefact du business plan attend le porteur |
| E-02 | Feuille de route contre catalogue | Porteur | Calendrier de la synchronisation et de Signature |
| E-03 | Calendrier de la bêta | Porteur | Un seul calendrier |
| E-04 | Offres qui vendent des fonctions absentes du MVP | Fait | Décision 0009 |
| E-05 | Bourse French Tech | Porteur | Mettre à jour le plan de financement |
| E-06 | Décompte des écrans à valider | Fait | |
| E-07 | « 200 cadres » dans les consignes | Fait | |
| E-08 | Meilleur prix sans source sous licence | Porteur | Contrats de données |
| E-09 | Finary propose déjà une IA | Porteur | Positionnement |
| E-10 | Dépôt public | Porteur | Visibilité du dépôt |
| E-11 | Lots validés repassés à valider | Sans objet | Voulu |
| E-12 | Ordre en cours incomplet | Fait | Ordres remplis |
| E-13 | Source Finary périmée | Sans objet | Ne pas la citer |
| E-14 | Limites des offres non dites | Fait | Décision 0009 |
| E-15 | Options sans parcours | Fait | Datées « en 2028 » |
| E-16 | Parcours d'offre absent du web | En partie | MQ-224, MQ-232 |

## 7. Ce qui reste, par priorité

1. **Décisions du porteur** : hiérarchie de l'écran des offres (D-002, C8) ; onglet LiVi IA et Marchés au MVP (D-015, P-009, C36) ; limite de connexions (C22) ; offre mensuelle ou essai (C16) ; ce que compte la limite d'Essentiel (N-002, C31) ; séparation pro et perso sans l'option Société (test 07) ; avis RGPD sur la contribution (P-001, C33) ; calendrier et business plan (E-02, E-03, E-05).
2. **Achat et compte** : confirmation et résiliation sur le web ; écran de limite atteinte ; relevé PDF marqué « Avec Signature » dans le parcours gratuit (C32) ; « Prix réglables » à retirer (C10) ; double authentification après l'achat (C21).
3. **Parcours gratuit** : enveloppe créée à la main (D-010) ; états entre accueil vide et plein (C35) ; tri manuel « À catégoriser » (N-010) ; destinations des opérations (A-10).
4. **Lecture et formats** : plancher de 13 pt (A-001, C7) ; texte agrandi pour Budget et Opérations (A-002) ; iPhone SE (M-10) ; Android (M-09) ; tablette (A-011).
5. **Finitions** : M-05 à M-20 de l'audit Figma, mineurs de la simulation.
6. **Rejouer les tests** de personas sur les écrans conçus : résiliation, achat d'option, total de Michel, budget de Nadia, web.

## 8. Vérifications

- Figma : chaque lot contrôlé sur planches temporaires en Sombre, Clair et Pastel ; espaces insécables testés dans les cinq graisses utilisées ; page temporaire supprimée ; 14 points de départ conservés ; versions « Ajustements d'après les audits, jour 1 » et « jour 2 » enregistrées.
- Dépôt : `node scripts/verifier-docs.mjs` (docs cohérentes, 182 fonctionnalités, 276 maquettes) ; 69 tests verts ; intégration continue (typage, lint, build) sur la PR.
- Limites : les tests de personas n'ont pas été rejoués sur les écrans du jour ; les écrans en texte agrandi sont des vérifications de mise en page (lignes détachées de leurs composants), pas des composants finis.

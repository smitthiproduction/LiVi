# Revue des maquettes du 15 novembre 2026

Agent `revue-maquettes`, à la demande du porteur de projet ([ordre](../../../old/ordres/2026-11-15_2245_lancer-l-agent-revue-maquettes.md)). Fichier Figma « LiVi — Maquettes » (`cR7EtAZKpKCkgOoEqcJ8Wq`), page « Parcours iPhone » (`109:130`), état du fichier le dimanche 15 novembre 2026 entre 22 h 50 et 23 h 25. Aucune modification n'a été faite dans Figma : tous les scripts lancés étaient en lecture seule et n'ont créé aucun calque.

Sources lues : `CLAUDE.md`, `docs/suivi/etat-du-projet.md`, `docs/design/parcours-utilisateur.md`, `docs/design/maquettes.json`, `docs/produit/catalogue.json`, `docs/produit/navigation.md`, `docs/produit/README.md`, `docs/design/figma.md`, `direction-artistique.md`, `accessibilite.md`, `responsive-et-formats.md`, `docs/reglementation/`, décision 0003, ordres du 15 novembre dans `old/ordres/`.

## Méthode et limites

| Contrôle | Comment | Couverture |
|---|---|---|
| Prototype (liens, transitions, points de départ, entrées et sorties) | Script `use_figma` sur toutes les réactions des 136 cadres | 136 cadres, 345 actions |
| Dépassements, blocs « à concevoir », mots interdits, emoji, « ! », tiret ASCII, format des nombres, textes hors cadre, textes sans style | Même script | 136 cadres |
| Valeurs codées en dur (remplissages, traits, marges, espacements, rayons hors instances) | Même script | 136 cadres |
| Cibles tactiles des éléments reliés | Même script (taille du calque qui porte le lien) | 345 actions |
| Contrastes dans les trois thèmes | Script : couleur du texte et du fond résolues par variable dans les modes Sombre (`2:0`), Clair (`2:1`), Pastel (`2:2`), avec opacités | 3 387 textes, 6 exclus (aperçus de thèmes de MQ-006 en mode explicite) |
| Textes exacts | Lecture directe des textes visibles de 36 cadres ; les autres textes cités viennent des planches et sont marqués « planche » | 36 cadres |
| Lecture visuelle | Planches des trois thèmes produites le 15 novembre à 21 h 45 (33 cadres nouveaux ou repris) et planches des lots 1 à 6 (103 autres cadres, état à leur validation) | 136 cadres |
| Calculs | Sommes, pourcentages, échéancier du crédit, jours de la semaine, périodes, refaits à la main et avec Node | Toutes les données citées |
| Dépôt | `node scripts/verifier-docs.mjs`, `node --test 'packages/*/test/*.test.ts'`, `node --test 'apps/*/test/*.test.ts'` | Docs cohérentes, 32 et 25 tests verts |

**Limite.** Le quota du serveur MCP Figma (siège Full, offre Professional : 10 appels par minute, 200 par jour) était presque épuisé au début de la revue. Huit appels ont abouti, dont cinq exploitables (deux pour le prototype et les contrôles, deux pour les textes, un pour les contrastes) ; les autres ont été refusés. Conséquences : les captures de chaque cadre dans chaque thème n'ont pas pu être refaites (le contraste a été calculé à la place, et les planches existantes ont servi à la lecture visuelle) ; les textes des 100 cadres non cités n'ont été lus que sur les planches. Les constats marqués « planche » viennent d'une planche ; tous les autres sont prouvés par lecture directe du fichier.

## 1. Résumé

- **Cadres revus** : 136 cadres iPhone (page « Parcours iPhone », 9 sections) ; les 77 entrées des pages 10, 11 et 12 (76 cadres à concevoir et MQ-213 sans cadre) contrôlées au niveau de l'inventaire.
- **Parcours joués** : les 9 points de départ du prototype (les 8 documentés et un point « Flow 1 » non documenté) suivis lien par lien ; les 3 parcours métier rejoués sur le contenu : nouvel utilisateur, usage quotidien, cas limites.
- **Constats** : 60, dont 12 bloquants, 30 majeurs, 18 mineurs. Les points déjà connus sont rappelés à part et ne sont pas comptés.
- **Ce qui est solide** : aucun bloc « à concevoir », aucun « ! », aucun emoji, aucun bouton « Acheter » ou « Vendre », aucune note maison ; aucune destination de lien perdue ; 0 remplissage ou trait de couleur hors variable ; transitions conformes à la convention partout où un lien existe (poussé : glissement de 0,35 s depuis la droite ; onglet et sous-onglet : fondu de 0,2 s ; feuille : animation intelligente de 0,35 s avec voile `surface/scrim` à 55 % ; offres : montée du bas de 0,4 s) ; données de référence justes (patrimoine net 184 320,57 € = 384 108,13 € − 199 787,56 €, répartitions par classe et par établissement, budget 1 240,00 € sur 1 800,00 €, échéancier du crédit immobilier recalculé à 1,35 % sur 25 ans, crédits IA, jours de la semaine des lots 5 et 6) ; import en 5 étapes numérotées dans l'ordre.

### Verdict par étape

| Étape | Cadres | Verdict | Raisons principales |
|---|---|---|---|
| 01 · Inscription et offres | 7 | À reprendre | Choisir une offre payante n'a aucun effet (R-11) ; pas de reconnexion (R-16) ; poids visuel des offres (R-24) |
| 02 · Ajouter un établissement | 17 | À reprendre | Période d'import fausse (R-07) ; opération hors période (R-08) ; double authentification absente (R-20) ; doublons écartés d'office (R-22) ; MQ-038 et MQ-039 inaccessibles |
| 03 · Accueil et établissements | 8 | À reprendre | Total de Banque Rivière (R-06) ; mise à jour non jouable (R-21) ; états accueil inaccessibles (R-03) |
| 04 · Patrimoine et fiches | 30 | À reprendre | Vue Enveloppe absente (R-05) ; impasse MQ-061 (R-04) ; barre d'action mal reliée (R-19) ; 12 cadres inaccessibles |
| 05 · Analyses | 12 | À reprendre | 11 analyses sur 12 inaccessibles (R-03) |
| 06 · Budget | 16 | À reprendre | Jour de la semaine faux (R-09) ; budget proposé sans données (R-10) ; limite Essentiel (R-31) |
| 07 · Marchés | 19 | À reprendre (liens seulement) | Contenu conforme ; 9 cadres inaccessibles depuis Découvrir (R-03) |
| 08 · LiVi IA | 11 | À reprendre | Ordres par API sans réserve juridique et impossibles avec une clé en lecture seule (R-01, R-02) |
| 09 · Profil et réglages | 16 | À reprendre | Contribution activée en Signature (R-12) ; sécurité et suppression du compte inaccessibles (R-13) ; MQ-023 en impasse |

## 2. Constats

Gravité : **B** bloquant (interdit absolu, impasse, donnée contradictoire, fonction absente), **M** majeur (ergonomie, transition manquante, vocabulaire, surface manquante), **m** mineur (finition). Pour les données, est bloquant un chiffre, une date, une offre ou un établissement faux ou contradictoire ; un écart de calcul de quelques centimes est majeur.

| ID | Gr. | Cadre | Catégorie | Constat | Preuve | Correction proposée |
|---|---|---|---|---|---|---|
| R-01 | B | MQ-119, MQ-115, MQ-117, MQ-120, MQ-124, MQ-019 | Interdit | Des ordres transmis par API sont présentés comme une fonction disponible, sans aucune mention de l'avis juridique. | MQ-119 : « Ordre préparé », « LiVi transmet l'ordre seulement après votre validation. Valcrypto l'exécute… », boutons « Valider avec Face ID » et « Ne pas transmettre », aucune réserve. MQ-117 « Exécution : Ordre préparé, validé par vous » ; MQ-124 « PEA Atlas · ordre préparé, validé par vous » ; MQ-115 « Ordre préparé · Valcrypto » ; MQ-019 « Ordre préparé chez Valcrypto, à valider ». `ordres-courtiers.md` : « Statut : désactivé » ; IA-04 : « Seulement après avis juridique » ; `CLAUDE.md` §2. | Bandeau sur MQ-119 et mention sur chaque « ordre préparé » : « Fonction prévue en 2028, soumise à l'avis juridique ; non disponible aujourd'hui ». À défaut, montrer le rappel d'exécution (IA-05) comme cas par défaut (voir question 2). |
| R-02 | B | MQ-119, MQ-115, MQ-117, MQ-120, MQ-124, MQ-019 | Données | Les ordres sont « préparés » chez Valcrypto et sur le PEA Atlas, alors que ces deux établissements sont reliés par une clé en lecture seule, que LiVi refuse si elle autorise des ordres. | MQ-038 : « LiVi refuse toute clé qui autorise des ordres ou des retraits » ; MQ-030 « Valcrypto · Clé · 07:40 », « Atlas Bourse · Clé · hier 18:00 » ; MQ-033 « Clé API en lecture » (planche lot 1) ; `parcours-utilisateur.md` I2 « Valcrypto, clé en lecture seule ». | Pour Valcrypto et Atlas Bourse, rappel d'exécution (IA-05) ; ou, si l'ordre préparé est gardé, une connexion d'ordres distincte de la clé de lecture, présentée comme future. |
| R-03 | B | 54 cadres (liste en section 3) | Parcours | 54 cadres n'ont aucun lien entrant : on ne peut pas les atteindre dans le prototype. Parmi eux, tous les cas limites (MQ-008, MQ-020, MQ-022, MQ-026, MQ-027, MQ-028), 11 analyses sur 12, la suppression du compte (MQ-017), la clé en lecture (MQ-038), le relevé PDF (MQ-039), les listes, actualités et calendrier de Marchés. MQ-100 n'est atteint que par le point de départ « Flow 1 ». | Contrôle automatique : liste des cadres sans réaction entrante. L'ordre du 15 novembre à 21 h 18 annonce « chaque cadre relié » : le contrôle d'alors ne portait que sur les sorties. | Ajouter les liens de la section 3 et un point de départ « Cas limites ». |
| R-04 | B | MQ-061, MQ-023 | Parcours | Impasses : aucune interaction de sortie. MQ-061 est atteint depuis le graphique de MQ-048 et sa croix n'est pas reliée. | Contrôle automatique : 0 réaction sur ces deux cadres ; croix visible sur MQ-061 (planche lot 2). | MQ-061 › croix › retour en fondu ; MQ-023 › retour, et entrée depuis les réglages. |
| R-05 | B | MQ-040, MQ-210 | Catalogue | La vue du patrimoine par enveloppe n'existe pas : le segment « Enveloppe » n'a ni lien ni cadre. PAT-01 et ANA-01 (MVP) demandent classe, enveloppe et établissement. | MQ-040 : seul « segment Établissement » est relié ; aucun cadre « par enveloppe » dans `maquettes.json`. | Ajouter un cadre « Patrimoine par enveloppe » (PEA, assurance vie, livrets, compte-titres, sans enveloppe) à l'inventaire, puis le dessiner et le relier en fondu. |
| R-06 | B | MQ-024, MQ-027, MQ-028, MQ-030, MQ-209, MQ-210 | Données | Le montant d'un établissement n'obéit pas à une règle unique : Banque Rivière affiche 9 132,52 € « 2 comptes et 1 crédit » (actifs seuls, crédit de −192 740,59 € exclu) tandis que Crédit du Littoral affiche −7 046,97 € (crédit compté). Le solde réel de Banque Rivière est −183 608,07 €. | MQ-030 : « Banque Rivière 9 132,52 € · 2 comptes et 1 crédit » et « Crédit du Littoral −7 046,97 € » dans le même groupe ; MQ-209 « 9 132,52 € · Crédit en cours : −192 740,59 € ». | Choisir la règle (question 1) et l'appliquer partout ; si « actifs seuls », écrire « 9 132,52 € hors crédit » et afficher le crédit sur la même ligne. |
| R-07 | B | MQ-207 | Données | La période affichée est fausse : « 6 ans et 10 mois » pour un import « du 2 janv. 2019 au 31 oct. 2026 », soit 7 ans et 10 mois. | Texte de MQ-207. | « 7 ans et 10 mois ». |
| R-08 | B | MQ-035 | Données | L'aperçu montre une opération du « 3 nov. » (Marché Plein Ciel, −42,18 €, doublon) alors que le fichier s'arrête au 31 oct. 2026. Reste de l'ancien import « releve-octobre.csv » de 214 lignes. | MQ-035 « 3 nov. · Courses » ; MQ-207 « du 2 janv. 2019 au 31 oct. 2026 » ; planche lot 1 (MQ-035 d'origine). | Dates d'exemple antérieures au 31 oct. ; catégorie « Maison et équipement » au lieu de « Maison » (R-35). |
| R-09 | B | MQ-081 | Données | « Vendredi 14 nov. 2026 » : le 14 novembre 2026 est un samedi. MQ-089 montre la même opération « Hier · samedi 14 nov. ». | Texte de MQ-081 ; calcul du jour ; MQ-089. | « Samedi 14 nov. 2026 ». |
| R-10 | B | MQ-025, MQ-212 › MQ-040, MQ-211 | Données, parcours | Depuis l'accueil vide (aucun établissement), l'onglet Patrimoine mène à MQ-040 rempli (184 320,57 €) et l'onglet Budget mène à MQ-211 qui propose un budget « à partir de vos dépenses », « moyenne d'août à octobre ». | Liens de MQ-025 (Patrimoine › `10:5`, Budget › `109:477`) et de MQ-212 (Budget › `109:477`). | États vides de Patrimoine et de Budget (à inscrire et dessiner) ; MQ-211 atteint après le premier import ou la première connexion. |
| R-11 | B | MQ-201, MQ-212, MQ-016, MQ-203 | Catalogue, parcours | L'accès à une offre payante ne peut pas être joué : « Choisir Plus » et « Choisir Signature » mènent directement à l'accueil vide, sans achat ; ensuite MQ-202 › MQ-203 propose encore Plus et l'onglet LiVi IA mène encore à MQ-212. Depuis MQ-212, « Découvrir Signature » ouvre MQ-016 où Signature est déjà « Votre offre ». | Liens de MQ-201 (`9:31`), MQ-212 (`8:395`) ; texte de MQ-016 « Signature · Votre offre · Gérer l'abonnement ». | Feuille d'achat App Store (à créer) ; variante de MQ-016 pour un utilisateur Essentiel (« Choisir Signature ») ; branche « payant » du prototype qui saute MQ-203 et MQ-212. |
| R-12 | B | MQ-015 | Données, catalogue | Camille (Signature) apparaît avec « Contribution anonyme · Activée ». SEC-05 : la contribution n'existe jamais en Plus et Signature. | Texte de MQ-015 ; MQ-010 « Offre Signature » ; catalogue SEC-05. | « Contribution anonyme : non concernée avec votre offre Signature » (ou ligne retirée), en gardant la liste « Jamais utilisé ». |
| R-13 | M | MQ-010 | Parcours | Le profil ne mène pas aux réglages de sécurité : « Sécurité » ouvre directement « Double authentification » (MQ-009) ; Appareils et sessions (MQ-012), Méthodes de connexion (MQ-013), Sauvegarde (MQ-014) et Supprimer mon compte (MQ-017) sont inaccessibles ; « Aide » et « Se déconnecter » ne sont pas reliés. La suppression du compte dans l'app est une exigence de l'App Store et de SEC-08. | Liens de MQ-010 ; MQ-012 à MQ-017 sans lien entrant. | Écran « Sécurité » qui regroupe MQ-009, MQ-012, MQ-013, MQ-014 ; « Supprimer mon compte » depuis Confidentialité ou Sécurité ; « Se déconnecter » › confirmation › MQ-001. |
| R-14 | M | Voir constat | Parcours | Le titre d'arrivée ne correspond pas à l'action : « J'ai déjà un compte » › « Créer votre compte » (MQ-001 › MQ-002) ; « Un bien », « Un crédit », « Ajouter un bien ou un crédit » › « Nouveau compte » (MQ-029, MQ-025 › MQ-031) ; « Renouveler l'accès » (MQ-028, MQ-019, MQ-209) › « Autoriser la lecture · Étape 2 sur 3 » (MQ-037) ; « Compte courant » (MQ-209) › onglet « Budget : opérations » de tous les comptes (MQ-089) ; lignes de MQ-024 : Horizon Vie › liste « Mes établissements », Atlas Bourse › « PEA Atlas », Banque Rivière › fiche d'établissement ; MQ-030 Atlas Bourse › détail du PEA. | Liens et titres lus dans le fichier. | Une destination par type de ligne (un établissement ouvre toujours sa fiche) ; variantes « Se connecter », « Nouveau bien », « Nouveau crédit », « Renouveler l'accès » ; « Compte courant » › MQ-033. |
| R-15 | M | MQ-202, MQ-031, MQ-032, MQ-033, MQ-208, MQ-034 | Parcours, données | Écrans réutilisés hors contexte : Banque Rivière › « Saisir à la main » aboutit à « Votre PEA · Atlas Bourse » (MQ-032), qui à l'enregistrement ouvre un PEA « Clé API en lecture · hier à 18:00 » avec 4 positions (MQ-033). Atlas Bourse est par ailleurs relié par clé, pas saisi à la main. « Caisse du Port » (MQ-208) › « Créer et importer un fichier » ouvre un import avec « Préréglage Banque Rivière · CSV reconnu ». | Liens MQ-202 › `9:187` › `9:213` › `9:239` ; MQ-208 › `9:265` ; textes de MQ-032 et MQ-034 ; MQ-030 « Atlas Bourse · Clé ». | Exemple de saisie manuelle cohérent (un livret chez Banque Rivière, ou un bien) ; variante de MQ-034 sans préréglage pour Caisse du Port ; MQ-033 en version « saisie manuelle · aujourd'hui ». |
| R-16 | M | MQ-001, MQ-002 | Parcours | Aucun chemin de reconnexion : « J'ai déjà un compte » enchaîne Face ID, présentation des offres, choix Essentiel et accueil vide, comme une inscription. | Liens MQ-001 › MQ-002 › MQ-007 › MQ-201 › MQ-005 › MQ-025. | Écran « Se connecter » (variante de MQ-002) qui mène à MQ-008 ou MQ-024. |
| R-17 | M | MQ-210, MQ-086 | Transition | Deux sous-onglets se comportent comme des écrans poussés : atteints par fondu depuis un contrôle segmenté, ils n'ont ni barre d'onglets ni contrôle segmenté complet, mais un bouton retour. MQ-086 (Abonnements, atteint depuis MQ-079) n'a plus les sous-onglets Budget · Opérations · Abonnements. | Contrôle automatique : pas de `ui/onglets`, réaction « retour » ; `navigation.md` (sous-onglets en fondu). | MQ-210 dans la structure de MQ-040 (hero, segment, barre d'onglets) ; MQ-086 avec les trois sous-onglets et la barre d'onglets. |
| R-18 | M | MQ-048 › MQ-062, MQ-096, MQ-022, feuilles | Transition | La paire de feuilles MQ-048 › MQ-062 documentée dans `figma.md` n'est pas reliée (MQ-048 porte la copie invisible de `ui/feuille`, mais aucun lien) ; MQ-096 et MQ-022 sont des feuilles inaccessibles ; sur toutes les feuilles, seule le voile ferme, la poignée n'a pas d'interaction. | Contrôle automatique : MQ-062, MQ-096, MQ-022 sans lien entrant ; réactions « ui/voile › retour » seulement. | Relier MQ-048 › bouton du graphique › MQ-062 (animation intelligente) ; relier MQ-089 › sélection › MQ-096 et MQ-209 › « Mettre à jour » en erreur › MQ-022 ; poignée › retour sur chaque feuille. |
| R-19 | M | MQ-048, MQ-056, MQ-060 | Parcours, catalogue | La barre d'action des fiches porte un seul lien : « Ajouter une opération » ouvre « Nouvelle consigne » (MQ-116) ; « Créer une consigne », réservée à Signature (IA-02), n'a aucune garde d'offre ; MQ-065 n'est atteint que depuis le menu Ajouter. | Réaction « ui/barre-action «Ajouter une opération» › `7:31` » sur les trois fiches. | Deux liens distincts : « Ajouter une opération » › MQ-065 ; « Créer une consigne » › MQ-116 (Signature) ou MQ-212. |
| R-20 | M | MQ-203, MQ-037, MQ-009 | Catalogue, parcours | La connexion automatique s'active sans double authentification ni achat : « Passer à Plus · 40 €/an » mène directement au consentement. SEC-04 : la double authentification est obligatoire pour activer la synchronisation ; parcours cible, étape 10. | Lien MQ-203 › `9:343` ; MQ-009 n'est atteint que depuis le profil. | MQ-203 › achat › MQ-009 (si absente) › MQ-037 › MQ-204. |
| R-21 | M | MQ-030, MQ-209 | Catalogue | La mise à jour manuelle ne peut pas être jouée : pas de « Tout mettre à jour » sur MQ-030 (parcours cible, étape 15) ; « Mettre à jour » et « Gérer la connexion » de MQ-209 ne sont pas reliés ; la ligne Livret A non plus. | Texte de MQ-030 ; liens de MQ-209. | Ajouter « Tout mettre à jour » à MQ-030 ; relier les actions de MQ-209 (état de mise à jour, erreur MQ-022, gestion MQ-037). |
| R-22 | M | MQ-035 | Catalogue | Les doublons « seront ignorés » d'office. CPT-04 : « en cas de doute, la ligne est proposée, jamais supprimée d'office ». « Annuler » ramène à l'étape 3 au lieu de quitter l'import. | Texte de MQ-035 ; réaction « Annuler › retour ». | « 3 doublons possibles : à vérifier » avec un choix par ligne (ou règle revue, question 4) ; « Annuler » › confirmation › sortie de l'import. |
| R-23 | M | MQ-207 | Ergonomie | « Annuler l'import » retire 8 409 lignes sans confirmation, avec un bouton de même poids que « Voir Banque Rivière », et renvoie à l'accueil vide ; le bouton retour permet de revenir à l'aperçu d'un import déjà fait. | Lien `9:31` en fondu ; planche 21 h 45. | « Annuler l'import » en bouton texte rouge, puis feuille de confirmation ; remplacer le retour par « Terminé ». |
| R-24 | M | MQ-201 | Ergonomie, conformité | Les offres n'ont pas le même poids : « Choisir Plus » et « Choisir Signature » sont des boutons pleins, « Continuer avec Essentiel » un bouton secondaire ; les trois boutons font 32 pt de haut ; la croix ferme par un fondu au lieu d'une descente. USR-11 : aucune offre présélectionnée, croix et Essentiel toujours visibles. | Planches des trois thèmes ; contrôle automatique « petit 329×32 » ; lien croix › `8:109` en fondu. | Trois boutons de même style et de 44 pt ; fermeture par descente vers le bas (voir question 5 si une mise en avant est voulue). |
| R-25 | M | MQ-040, MQ-210 | Catalogue | PAT-01 : « les comptes non à jour sont signalés dans le total ». MQ-040 ne signale que la montre, alors que Horizon Vie (relevé du 30 sept.) et Toits Partagés (saisie il y a 12 jours) sont en orange sur MQ-024 et MQ-030 ; MQ-210 annonce « Valeurs au 15 nov. à 09:41 » pour toutes. | Textes de MQ-040, MQ-210, MQ-030. | « Le total inclut 3 valeurs anciennes : montre (22 mois), Horizon Vie (30 sept.), Toits Partagés (12 jours) » ; même mention sur MQ-210. |
| R-26 | M | MQ-209, MQ-024 | Données | À la même date, l'accueil nominal (MQ-024) ne signale rien alors que la fiche nominale de Banque Rivière (MQ-209) affiche « Accès à renouveler avant le 20 nov. » ; seul l'état MQ-028 en parle. | Textes de MQ-024 et MQ-209. | MQ-209 nominal sans alerte et variante « accès à renouveler » reliée depuis MQ-028, ou bannière ajoutée à MQ-024. |
| R-27 | M | MQ-016 | Catalogue | SEC-06 (option Confidentialité à vie, 100 €) est citée pour ce cadre mais absente ; les options Famille et Société (`docs/produit/README.md`) aussi ; « Gérer l'abonnement » et « Changer pour Plus » ne sont pas reliés ; aucun moyen visible de revenir en Essentiel. | Texte de MQ-016 ; `maquettes.json` (SEC-06, BO-01). | Bloc « Options » sous les offres ; liens vers la feuille App Store ; ou retirer SEC-06 de l'inventaire de ce cadre. |
| R-28 | M | MQ-006 | Catalogue | Pas de thème « Système » (USR-08) ni de réglage « Réduire la transparence » (USR-08, FMT-06, `accessibilite.md`). | Texte de MQ-006. | Ajouter l'aperçu « Système » et l'interrupteur « Réduire la transparence ». |
| R-29 | M | MQ-017 | Catalogue | « L'abonnement App Store se résilie à part » alors que SEC-08 promet effacement, résiliation et export en un parcours. | Texte de MQ-017. | Étape « Résilier l'abonnement » dans le parcours (lien vers la gestion des abonnements App Store), avant « Supprimer définitivement ». |
| R-30 | M | MQ-039 | Catalogue, conformité | Le relevé PDF (CPT-10, tâche de LiVi IA, Signature) est présenté comme « lu sur votre iPhone », sans mention de l'IA, sans coût en crédits (IA-08) ni taux de confiance (CPT-10). | Texte de MQ-039. | « Lu par LiVi IA · 4 crédits, 0,04 € » (valeurs à fixer), taux de confiance par ligne, mention de l'IA conforme au règlement européen. |
| R-31 | M | MQ-211 | Catalogue | Le budget proposé compte 8 enveloppes ; Essentiel est limité à 5 budgets (BUD-04). L'écran est montré au nouvel utilisateur Essentiel, sans mention de la limite. | Texte de MQ-211 ; lien depuis MQ-025. | Variante Essentiel (voir question 6). |
| R-32 | M | MQ-033, MQ-048, MQ-056, MQ-058, MQ-075, MQ-123, MQ-046 | Données | Valeurs qui ne valent pas quantité × cours affiché : 35 × 177,44 € = 6 210,40 € (affiché 6 210,50 €), plus-value 428,40 € (affichée 428,50 €) ; 142 × 150,28 € = 21 339,76 € (affiché 21 340,00 €) ; obligation 5 × 1 000 € × 95,57 % + 75,82 € = 4 854,32 € (affiché 4 854,48 €) ; or 23,2 g × 82,69 €/g = 1 918,41 € (affiché 1 920,00 €). Les plus-values par lot de MQ-075 supposent un cours de 177,443 €. | Texte de MQ-046 ; planches des lots 1, 2, 3 et 6. | Recalculer les valeurs à partir des cours affichés (ou ajuster les cours : 177,443 n'est pas un pas de cotation). |
| R-33 | M | MQ-097, MQ-070, MQ-120, MQ-117 | Données | La consigne ETF Monde est « écrite par vous le 3 févr. 2026 » (MQ-097, journal MQ-070) mais « traduite » et « validée » le 15 nov. à 07:10 et 07:12 (MQ-120), avec une « prochaine échéance : samedi 12 déc. » (MQ-117). | Planches des lots 3, 4 et 6 ; texte de MQ-117. | Choisir une histoire : consigne de février reprise dans LiVi IA (journal « reprise ») ou consigne nouvelle (MQ-097 daté du 15 nov.). |
| R-34 | M | MQ-011, MQ-019 | Données | « Résumé de la semaine · le dimanche à 18 h » (désactivé sur la planche) alors que MQ-019 montre déjà « Votre semaine en un coup d'œil · Dimanche » à 9:41. | Textes de MQ-011 et MQ-019 ; planche lot 1. | Retirer la notification ou la dater du dimanche 8 nov. (« La semaine dernière »), et activer le réglage. |
| R-35 | M | MQ-087, MQ-035 | Données | Catégories retirées lors de la revue encore utilisées : « Shopping et vêtements » (MQ-087) ; « Maison » (MQ-035) au lieu de « Maison et équipement ». | Textes de MQ-087 et MQ-035 ; `figma.md` (« Shopping et vêtements » devient « Énergie et eau »). | « Maison et équipement » dans les deux cadres. |
| R-36 | M | 121 textes en Sombre, 246 en Clair et Pastel | Design, accessibilité | `texte/ink-tertiary` reste sous 4,5:1 sur tous les fonds (de 2,61:1 sur `surface-sunken` en Clair à 4,02:1). Il sert aux sources et à la fraîcheur (« Clé · hier 18:00 »), aux mentions légales, aux prix mensuels des offres et aux indications des champs. | Calcul des contrastes : surface/bg 2,91 (Clair) et 3,21 (Pastel) ; surface/surface 3,25 à 3,75 ; surface-sunken 2,61 à 3,00 ; bg-elevated 3,25 à 3,67. `accessibilite.md` : ≥ 4,5:1 dans les trois thèmes. | Foncer `ink-tertiary` dans `tokens.json` (agent `design-system`) ou passer ces textes en `ink-secondary`. |
| R-37 | M | 136 cadres | Design | Valeurs codées en dur hors instances : marges intérieures et espacements non liés aux variables d'espacement dans les 136 cadres (de 1 à 40 par cadre ; `ui/contenu` haut et bas, `ui/bas`, `ui/feuille`) ; rayons codés en dur dans 28 cadres (pistes de jauges 3, étiquettes de carte 10, bougies 1, widgets 22, blocs de MQ-022 12 et 14, squelettes de MQ-026, aperçus de MQ-006 3, 11, 12) ; textes sans style dans 17 cadres (onglet actif des fiches, étiquettes de la carte et du globe, « Estimation » de MQ-045). Les couleurs sont toutes liées. | Contrôle automatique. | Lier les marges à `espacement/space-*` et les rayons à `rayon/radius-*` ; appliquer les styles de texte ; si une valeur manque (rayon 3), l'ajouter aux jetons. |
| R-38 | M | MQ-024, MQ-028, MQ-209, MQ-040, MQ-041, MQ-079, MQ-089, MQ-098, MQ-099, MQ-100, MQ-104 à MQ-108, MQ-201, MQ-210, MQ-211, fiches | Ergonomie | Cibles reliées de moins de 44 pt : « Tout voir · 6 » 75×20, « Renouveler l'accès » 123×20, titre d'alerte 295×22, « Importer un fichier » 177×40, légendes 24 pt, libellés 20 pt, contrôles segmentés 32 à 36 pt, onglets de fiche 40 pt, pastille 36 pt, « Annuler » 62×22, boutons compacts des offres 32 pt. | Contrôle automatique (« petit »). | Zones de toucher de 44 pt (conteneur de la ligne ou du segment), ou boutons en taille Normal. |
| R-39 | M | MQ-209, MQ-089, MQ-097 | Ergonomie | Textes tronqués : « Historique depuis le 2 janv. 2… », « Mensualité 903,73 € · le 5 d… » (MQ-209), « Maison et équipement · cart… » (MQ-089) ; sous-titre de MQ-097 qui dépasse la largeur du cadre. | Planche 21 h 45 ; contrôle automatique (« hors cadre » sur MQ-097). | Sous-titres sur deux lignes ou raccourcis (« Depuis janv. 2019 », « 903,73 € le 5 déc. »). |
| R-40 | M | MQ-002, MQ-005, MQ-016, MQ-024, MQ-025, MQ-030, MQ-034, MQ-036, MQ-037 ; MQ-009, MQ-020, MQ-022, MQ-028, MQ-096 | Vocabulaire | 9 noms de cadres Figma n'ont pas suivi l'inventaire (« Connexion : Apple, Google ou e-mail », « Synchronisation bancaire : choisir l'établissement », « Comptes et fraîcheur »…). Textes à l'ancien vocabulaire : « synchronisation bancaire » (MQ-009), « Synchronisation indisponible » sur un écran « Comptes » (MQ-022), « Import CSV » et « Importer » (MQ-020), « fil d'activité » (MQ-096), « 1 compte à renouveler » pour une connexion (MQ-028). | Noms lus par le script ; textes lus dans le fichier et sur la planche du lot 1. | Renommer les cadres comme `maquettes.json` ; « connexion automatique », « import de fichier », « Budget › Opérations », « 1 connexion à renouveler ». |
| R-41 | M | MQ-129, MQ-137, MQ-148, MQ-153 à MQ-157, pages 10 et 11 | Surfaces | L'inventaire web et autres formats suit l'ancien parcours : « Activité : fil chronologique » (MQ-137), « Connexion » (MQ-148), « Comptes et fraîcheur » (MQ-153), import web en 3 étapes sans réglages de lecture ni fin d'import (MQ-154 à MQ-156), « modèle CSV » (MQ-157). Aucun équivalent web ni tablette de : présentation des offres (USR-11, surfaces iPhone et web), annuaire, méthode d'ajout, création et fiche d'établissement (CPT-11), préréglages (CPT-12), connexion automatique (CPT-06), budget proposé, LiVi IA sans Signature, notifications (USR-09), offres et abonnement. | `maquettes.json` ; `catalogue.json` (champ `surfaces`). | Inscrire les écrans manquants dans l'inventaire avant le lot 7 et renommer les cadres existants selon le vocabulaire retenu. |
| R-42 | M | MQ-078, MQ-060, MQ-211 | Surfaces | Contenus réglables sans écran de back-office : plafonds et règles d'enveloppes (PAT-04 et FIS-05 « tenus à jour en back-office », MQ-078 « mis à jour par LiVi le 1er janvier 2026 ») ; statut MiCA des plateformes (MQ-060 « plateforme autorisée MiCA ») ; règle du budget proposé (trois mois, arrondi à la dizaine). | `maquettes.json`, pages 12 ; `navigation.md` (barre du back-office). | Écran « Enveloppes et plafonds » ; statut MiCA dans l'annuaire des établissements (MQ-213) ; paramètres du budget proposé dans un écran existant (à décider). |
| R-43 | m | MQ-001, MQ-035, MQ-032, MQ-040, MQ-043, MQ-045, MQ-065, MQ-067, MQ-069, MQ-114, MQ-119, MQ-210, MQ-042, MQ-055, MQ-066, MQ-070, MQ-074, MQ-076, MQ-079, MQ-118 | Ergonomie | Le contrôle défini (bas de `ui/contenu`) échoue sur 20 cadres, de 2 à 24 pt. Dans tous les cas, c'est la marge intérieure basse de 24 pt qui passe sous la barre : le dernier élément visible reste au-dessus, mais à 0 pt de la limite sur MQ-040 et MQ-119. | Contrôle automatique ; marges lues (24 pt) et fin du dernier élément visible (MQ-040 742 pour une limite de 742 ; MQ-119 676 pour 676 ; MQ-210 811 pour 818). | Rendre de la marge (contenu défilant avec fin à 8 pt au-dessus de la barre). |
| R-44 | m | MQ-100 | Transition | Point de départ « Flow 1 », non documenté (9 points au lieu de 8). | `page.flowStartingPoints`. | Le renommer « Recherche et filtres » ou le retirer. |
| R-45 | m | MQ-035, MQ-019 | Design | Noms de calques périmés : « bouton Importer 211 op… », « ligne Consigne : seuil… ». | Contrôle automatique. | Renommer. |
| R-46 | m | MQ-206, MQ-037 | Parcours | Titre « Colonnes » pour l'étape « Correspondance des colonnes » ; « Étape 2 sur 3 » sur MQ-037 sans étape 3 affichée sur MQ-204. | Textes de MQ-206 ; planche lot 1. | « Correspondance » ; « Étape 3 sur 3 » sur MQ-204. |
| R-47 | m | MQ-018, MQ-001, MQ-116, inventaire | Interdit (mots surveillés) | Mots repérés par le contrôle, sans conseil : pastille « Suggestion » (MQ-018), « … ne vous dit jamais quoi acheter » (MQ-001), modèle « Vendre … si le cours passe sous … € » (MQ-116), « suggestions » dans le nom de MQ-098 et de REC-09. | Contrôle automatique ; `maquettes.json`, `catalogue.json`. | « Idée d'amélioration » ; « … ne vous dit jamais quoi faire » ; « Recherches récentes » ; modèle de consigne : voir question 3. |
| R-48 | m | MQ-005 | Contenu | « Les données synchronisées avec votre banque ne sont jamais utilisées » s'adresse à un utilisateur Essentiel, qui ne peut pas synchroniser ; « Rien ne quitte votre iPhone » est inexact (compte, sauvegarde). | Texte de MQ-005. | « Seules les données saisies ou importées comptent » ; « Aucun compteur n'est envoyé ». |
| R-49 | m | MQ-014 | Données | « Dernière sauvegarde aujourd'hui à 09:12 » pour une sauvegarde « chaque nuit, en Wi-Fi ». | Planche lot 1. | « à 03:12 ». |
| R-50 | m | MQ-021 | Données | Jeu de données « dépenses-lidl » : marque réelle dans un écran aux noms fictifs. | Planche lot 1. | « depenses-marche-plein-ciel ». |
| R-51 | m | MQ-053, MQ-054, MQ-089 | Données | Dividendes versés le samedi 23 mai 2026 et crédités le dimanche 15 nov. à 07:02. | Planche lot 2 ; texte de MQ-089 ; calcul des jours. | Lundi 25 mai 2026 ; dividende du vendredi 13 nov. |
| R-52 | m | MQ-089 | Données, parcours | Les opérations du jeudi 12 nov. (versement de 300 € vers le PEA, MQ-095) et du vendredi 13 nov. (CB PHARMA DU PORT, MQ-122) manquent entre « Hier » et « Mardi 10 nov. » ; Maison Bleue ouvre la fiche enseigne quand les autres lignes ouvrent l'opération. | Texte de MQ-089 ; planches des lots 4 et 6. | Ajouter ces deux jours ; une seule destination par ligne d'opération. |
| R-53 | m | MQ-040, MQ-041 | Contenu | « Fonds en euros » (MQ-040) contre « Assurance vie, fonds en euros » (MQ-041) ; « Activée » sans objet clair sur la ligne Analyses de MQ-040. | Textes. | Un seul libellé ; retirer « Activée » ou dire ce qui est activé. |
| R-54 | m | MQ-104 à MQ-108 | Parcours | Sous-onglets « Monde · Découvrir », alors que `navigation.md` annonce « Découvrir · Monde » et que la racine de l'onglet est Découvrir. | Planche lot 5. | Inverser l'ordre. |
| R-55 | m | Prototype | Transition | Durées : `direction-artistique.md` donne 420 ms pour les feuilles et 280 ms pour les segments ; prototype et `figma.md` utilisent 0,35 s et 0,2 s. « Réduire les animations » est décrit dans `navigation.md` mais pas annoté dans le prototype. | Réactions lues ; docs. | Aligner une des deux sources ; annotation « Réduire les animations : fondu » sur la page. |
| R-56 | m | Thème Pastel | Design | Sur les 33 écrans repris, Pastel se distingue à peine de Clair : cartes blanches, aucun widget teinté (menthe, lilas, pêche, ciel, beurre). | Planches 21 h 45 ; `direction-artistique.md` principe 5. | Teintes `teinte/*` sur les cartes clés (accueil, établissements, budget). |
| R-57 | m | MQ-023, MQ-054 | Contenu, accessibilité | Variation « +0,12 % » du widget sans période ; marqueur « D » de MQ-054 à 2,9:1 en Clair et Pastel. | Planche lot 1 ; calcul des contrastes. | « +0,12 % aujourd'hui » ; lettre en `texte/ink` ou pastille plus foncée. |
| R-58 | m | MQ-022, MQ-083 | Ergonomie | Bouton « Réessayer plus tard » ambigu ; « Annuler » de MQ-083 équivaut à un retour. | Planches ; réaction « Annuler › retour ». | « Fermer » et « Réessayer » ; « Annuler » qui quitte la propagation. |
| R-59 | m | Inventaire, MQ-211 | Catalogue | BO-01 (back-office) cité pour MQ-016 ; « Énergie et eau » inclut internet selon BO-05, MQ-211 écrit « Électricité, gaz, eau ». | `maquettes.json` ; `catalogue.json` ; texte de MQ-211. | Retirer BO-01 de MQ-016 ; décider où va internet (Abonnements ou Énergie et eau) et l'écrire. |
| R-60 | m | MQ-206 | Données | Exemple « F · Solde · Ex. 4 812,40 » sur une ligne du 2 janv. 2019, soit le solde d'aujourd'hui. | Texte de MQ-206. | Solde plausible pour 2019. |

### Points déjà connus (non comptés)

- Pas d'accès direct à Apparence (MQ-006) depuis les réglages (MQ-011).
- MQ-213 (annuaire des établissements, back-office) et MQ-214 (fournisseurs d'énergie et d'internet, V2) inscrits sans cadre.
- Autres formats, web et back-office pas encore dessinés (pages 10, 11 et 12 : 76 cadres « à concevoir »).

## 3. Liens manquants du prototype

Format : écran › élément › destination › transition. « Nouveau » désigne un cadre à inscrire dans `maquettes.json` avant de le dessiner.

**Points de départ**
- Page › nouveau point « Cas limites » › MQ-008 (puis MQ-026, MQ-028, MQ-020, MQ-022 en chaîne) › aucune
- Page › point « Flow 1 » › renommer « Recherche et filtres » ou retirer

**01 · Inscription et offres**
- MQ-001 › J'ai déjà un compte › nouveau « Se connecter » › glissement depuis la droite
- MQ-201 › croix › MQ-005 › descente vers le bas
- MQ-201 › Choisir Plus, Choisir Signature › nouveau « Confirmation d'achat » puis MQ-025 (branche payante) › montée du bas, puis fondu

**02 · Ajouter un établissement**
- MQ-025 › recherche › MQ-098 › fondu
- MQ-025 › bouton + › MQ-029 › animation intelligente
- MQ-036 › Atlas Bourse, Valcrypto › MQ-202 (variante clé en lecture) › animation intelligente
- MQ-202 (variante) › Connecter avec une clé › MQ-038 › glissement depuis la droite
- MQ-203 › Passer à Plus › nouveau « Confirmation d'achat » › MQ-009 (si absente) › MQ-037 › glissement depuis la droite
- MQ-029 › Un fichier (PDF) › MQ-039 › glissement depuis la droite
- MQ-035 › Annuler › nouveau « Confirmation » puis point d'entrée de l'import › animation intelligente
- MQ-207 › Annuler l'import › nouveau « Confirmation » (feuille) › animation intelligente
- MQ-208 › Créer et importer un fichier › MQ-034 (variante sans préréglage) › glissement depuis la droite

**03 · Accueil et établissements**
- MQ-024 › Horizon Vie › MQ-209 (variante Horizon Vie) › glissement depuis la droite
- MQ-024 › Atlas Bourse › MQ-209 (variante Atlas Bourse) › glissement depuis la droite
- MQ-024 › montant (toucher long) › MQ-027 › fondu ; MQ-027 › montant › MQ-024 › fondu
- MQ-030 › Horizon Vie, Valcrypto, Toits Partagés › MQ-209 (variantes) › glissement depuis la droite
- MQ-030 › bouton + › MQ-036 › glissement depuis la droite
- MQ-030 › Tout mettre à jour (à ajouter) › état de mise à jour › fondu
- MQ-209 › Mettre à jour › état de mise à jour, et en erreur MQ-022 › animation intelligente
- MQ-209 › Livret A, Compte courant › MQ-033 (variantes) › glissement depuis la droite
- MQ-209 › Gérer la connexion › MQ-037 (variante « Gérer la connexion ») › glissement depuis la droite
- MQ-022 › Signaler le problème › MQ-018 › glissement depuis la droite

**04 · Patrimoine et fiches**
- MQ-040, MQ-210 › segment Enveloppe › nouveau « Patrimoine par enveloppe » › fondu
- MQ-040 › Fonds et ETP, Fonds en euros › MQ-041 › glissement depuis la droite
- MQ-040 › Objectifs, Étiquettes (entrées à ajouter) › MQ-047, MQ-093 › glissement depuis la droite
- MQ-210 › Horizon Vie, Atlas Bourse, Valcrypto, Toits Partagés, Biens saisis à la main › MQ-209 (variantes), MQ-046 › glissement depuis la droite
- MQ-043 › Prêt auto › MQ-044 (variante) › glissement depuis la droite
- MQ-046 › Mettre à jour la valeur, bouton + › nouveau « Réévaluer un bien », MQ-029 › glissement, animation intelligente
- MQ-048 › bouton du graphique › MQ-062 › animation intelligente
- MQ-048, MQ-056, MQ-060 › Ajouter une opération › MQ-065 › glissement depuis la droite
- MQ-048, MQ-056, MQ-060 › Créer une consigne › MQ-116 (ou MQ-212 sans Signature) › glissement depuis la droite
- MQ-048 › cloche › MQ-091 › glissement depuis la droite
- MQ-048 › onglet Mes opérations, Consignes, Notes ; entrée « Données tierces » › MQ-054, MQ-055 › fondu
- MQ-048 › bandeau de division, Seuil de revente › MQ-094, MQ-066 › glissement depuis la droite
- MQ-049 › sous-onglets Par action, Ratios › MQ-050, MQ-051 › fondu
- MQ-056 › Recouvrement › MQ-057 › fondu ; graphique › Indicateurs, Comparer › MQ-063, MQ-064 › glissement depuis la droite
- MQ-061 › croix › retour › fondu

**05 · Analyses**
- MQ-067 (ou nouveau « Analyses » qui les regroupe) › Exposition, Revenus, Journal, Concentration, Contribution, Risque, Vers ma cible, Plus-values, Revenus passifs, Échéancier, Plafonds › MQ-068 à MQ-078 › glissement depuis la droite

**06 · Budget**
- MQ-079 › autres catégories (dont Maison et équipement) › MQ-080 (variantes) › glissement depuis la droite
- MQ-079 › Règles, Alertes (entrées à ajouter) › MQ-085, MQ-092 › glissement depuis la droite
- MQ-211 › segment Abonnements › MQ-086 › fondu
- MQ-089 › sélection multiple › MQ-096 › animation intelligente
- MQ-089 › virement du 12 nov. (à ajouter) › MQ-095 › glissement depuis la droite
- MQ-089 › versement programmé › MQ-097 › glissement depuis la droite
- MQ-081, MQ-084 › Signaler une erreur d'annuaire › MQ-088 › glissement depuis la droite

**07 · Marchés**
- MQ-104 › recherche › MQ-098 › fondu
- MQ-104 › Listes, Actualités, Calendrier, Collections, Systèmes de sélection › MQ-090, MQ-112, MQ-114, MQ-103, MQ-102 › glissement depuis la droite
- MQ-099 › pastille Obligations › MQ-100 › fondu
- MQ-105, MQ-106 › étiquette FR40 › MQ-109 › glissement depuis la droite
- MQ-109 › Comparer les indices › MQ-110 › glissement depuis la droite
- MQ-105 › Mon exposition › MQ-111 › glissement depuis la droite
- MQ-112 › article › MQ-113 › glissement depuis la droite
- MQ-090 › Créer une alerte › MQ-091 › glissement depuis la droite

**08 · LiVi IA**
- MQ-121 › question de conseil (état suivant) › MQ-123 › fondu
- MQ-122 › Valider, Modifier › retour › fondu

**09 · Profil et réglages**
- MQ-010 › Sécurité › nouveau « Sécurité » (MQ-009, MQ-012, MQ-013, MQ-014) › glissement depuis la droite
- MQ-010 › Se déconnecter › nouveau « Confirmation » puis MQ-001 › animation intelligente, puis fondu
- MQ-010 › Aide › nouveau « Aide » ou lien externe › glissement depuis la droite
- MQ-015 › Supprimer mon compte › MQ-017 › glissement depuis la droite
- MQ-016 › Gérer l'abonnement, Changer pour Plus › feuille App Store › montée du bas
- MQ-011 › Widgets › MQ-023 › glissement depuis la droite ; MQ-023 › retour
- MQ-034 › (import en maintenance) › MQ-020 › fondu
- Compte de test › Tester une fonctionnalité › MQ-021 › glissement depuis la droite

## 4. Questions pour le porteur de projet

1. **Montant d'un établissement qui porte un crédit** : afficher les comptes seuls avec le crédit sur une ligne distincte (« 9 132,52 € · crédit −192 740,59 € »), ou le solde net (−183 608,07 € pour Banque Rivière) ?
2. **Ordre préparé chez le courtier** (MQ-119, fonction de 2028 soumise à l'avis juridique) : le garder dans le parcours avec la mention « non disponible, soumis à l'avis juridique », ou montrer pour Valcrypto et Atlas Bourse le rappel d'exécution, cohérent avec leur clé en lecture seule ?
3. **Modèles de phrase de consigne** : garder « Vendre … si le cours passe sous … € » (phrase écrite par l'utilisateur, sans actif, seuil ni montant proposés), ou reformuler sans le verbe ?
4. **Doublons à l'import** : écartés par défaut avec possibilité de les réintégrer (ce que montre MQ-035), ou proposés ligne par ligne (règle actuelle de CPT-04) ?
5. **Présentation des offres** : trois boutons de même poids (lecture stricte de « aucune offre présélectionnée »), ou une offre mise en avant ?
6. **Budget proposé en Essentiel** (5 budgets) : proposer 5 enveloppes et regrouper le reste, ou montrer les 8 et signaler la limite avec l'accès à Plus ?
7. **Établissement non listé** : import de fichier seulement (comme aujourd'hui), ou aussi la saisie manuelle ?

## Annexe : résultats des contrôles automatiques

| Contrôle | Résultat |
|---|---|
| Blocs « à concevoir » | 0 sur 136 |
| Liens | 345 actions ; 0 destination absente ; 0 destination hors de la page |
| Cadres sans sortie | 2 (MQ-061, MQ-023) |
| Cadres sans entrée | 56, dont MQ-001 (point de départ) et MQ-100 (point « Flow 1 » seulement) : 54 inaccessibles |
| « ! », emoji, tiret ASCII devant un nombre, point décimal | 0 |
| Mots surveillés | MQ-001 « acheter » (négation) ; MQ-018 « Suggestion » ; MQ-055, MQ-066, MQ-102 « recommandation » (négation) ; MQ-116 « Vendre … » (modèle de phrase) ; MQ-119, MQ-123 « vendre » (phrase de l'utilisateur). Aucun bouton « Acheter » ou « Vendre » |
| Dépassement de `ui/contenu` | 20 cadres, de 2 à 24 pt, tous dans la marge basse de 24 pt |
| Remplissages et traits hors variable | 0 |
| Marges et espacements hors variable | 136 cadres |
| Rayons hors variable | 28 cadres |
| Textes sans style | 17 cadres |
| Cibles reliées de moins de 44 pt | 42 liens |
| Contrastes sous le seuil | Sombre 123, Clair 249, Pastel 249 ; dont `ink-tertiary` 121, 246, 246 ; boutons désactivés de MQ-004 et MQ-005 (exemptés) 2 par thème |
| Dépôt | `verifier-docs.mjs` : docs cohérentes ; paquets 32 tests verts ; applications 25 tests verts |

Scripts et sorties : lancés depuis cette session, non versés au dépôt (lecture seule). Pour refaire la revue complète, prévoir environ 15 appels Figma (2 pour le prototype et les contrôles, 1 pour les contrastes, 4 pour les textes, 6 à 9 pour les captures des trois thèmes) dans une journée où le quota est disponible.

## Suivi des corrections

- **Partie 1 (16 novembre, PR n° 28)** : R-01 à R-12, et R-16, R-19, R-20, R-22, R-23, R-25, R-26, R-31, R-35, R-40, R-44, R-46 (titre), R-47, R-49 à R-51, R-59, R-60 ; décision 0004.
- **Partie 2 (19 novembre)** : R-03 (5 derniers écrans reliés), R-13 (sécurité, se déconnecter), R-17, R-18, R-21, R-24, R-27, R-28, R-29, R-30, R-32, R-33, R-34, R-36, R-37, R-38, R-39, R-41, R-42, R-43, R-45, R-48, R-53, R-54, R-55, R-56, R-57, R-58 ; R-14 et R-15 en partie (titre et type de la saisie à la main, fiche MQ-236) ; décision 0005.
- **Partie 3 (20 novembre)** : les cinq points restés ouverts sont corrigés. R-13 : écran « Aide » (MQ-250, fonctionnalité USR-13) relié depuis le profil. R-14 : fiches d'Horizon Vie (MQ-248) et d'Atlas Bourse (MQ-249) ; sur l'accueil et ses états, sur « Mes établissements » et sur « Patrimoine par établissement », un établissement ouvre toujours sa fiche. R-15 : « Caisse du Port » › « Créer et importer un fichier » ouvre un import sans préréglage (MQ-251 à MQ-253, « Retenir pour Caisse du Port »), qui rejoint l'aperçu standard (MQ-035). R-46 : « Connexion · Étape 3 sur 3 » sur MQ-204. R-52 : vendredi 13 nov. (CB PHARMA DU PORT, vers MQ-122) et jeudi 12 nov. (VIR VERS PEA, vers MQ-095) ajoutés à MQ-089, qui défile verticalement sous la barre d'onglets fixe.
- **Ouverts** : aucun. Contrôle du 20 novembre : 157 cadres, 644 liens, 14 points de départ, aucun écran sans entrée ni sortie, aucune cible sous 44 pt, aucune valeur codée en dur, aucun débordement.

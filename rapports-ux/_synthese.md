# Tests UX par personas — synthèse

Audit du 26 novembre 2026 à 08 h 10 (Europe/Paris), par l'agent « UX Report Auditor ». Il remplace l'audit de 07 h 29 (voir « Historique des audits »).

Dossier audité : `rapports-ux/`. Sept rapports lus en entier, tous datés du 26 novembre 2026, plus les cinq fiches de `_personas/`. L'auditeur n'a pas ouvert la maquette : tout ce qui suit vient des rapports, cités par leur numéro (01 à 07) et leur section.

Les rapports 06 et 07 sont les relances de 04 et de 05, avec de nouveaux objectifs. Dans l'index, 04 et 05 portent le statut « Remplacé ». Leurs constats restent des sources : ils ont été remplacés parce que leur objectif faisait doublon, pas parce qu'ils étaient faux. Il y a donc sept rapports pour cinq personas : 04 et 06 jouent Michel, 05 et 07 jouent Nadia. L'en-tête du rapport 06 écrit « persona 06 » ; la fiche est la 04.

Limites communes à garder en tête :

- Aucun rapport n'a joué le prototype. Les liens ont été lus dans le fichier. Les remarques sur le geste, le pouce et le défilement sont des estimations (01 §9, 02 §1, 03 §2, 04 §9, 05 §3, 06 §9, 07 §2).
- Peu d'écrans ont été vus en image : deux pour 02 (02 §1), trois pour 07 (07 §2), sept pour 06 (06 §1). Le reste est lu dans les calques. Les rapports 02, 06 et 07 signalent des captures refusées par le réseau de la session.
- Les rapports 06 et 07 n'achètent rien, par consigne. 07 n'a ouvert ni MQ-218, ni MQ-219, ni MQ-220, ni MQ-010 (07 §2). 06 n'a vérifié ni MQ-220 ni MQ-212 (06 §10). Les problèmes d'achat (C2, C5, C19, C20) n'ont donc pas été revus : leur fréquence n'a pas baissé, elle n'a pas été remesurée.
- Le rapport 06 n'a pas évalué le web (06 §1).
- Seul le thème sombre a été vu (03 en-tête et §10, 06 §8, 07 §4). Aucun rapport ne dit avoir vu les thèmes clair ou pastel.

## 1. Vue d'ensemble

| Rapport | Persona | Objectif | Score | Issue | Statut |
|---|---|---|---|---|---|
| 01 | Léa Fontaine | Offre Plus, après découverte du gratuit | 5,5 / 10 | Ne souscrit pas | Référence du parcours Plus |
| 02 | Karim Benali | Offre Signature, LiVi IA | 4,5 / 10 | Ne souscrit pas | Parcours distinct |
| 03 | Sophie Moreau | Option Famille | 2 / 10 | Abandon, achat impossible | Référence du parcours d'option |
| 04 | Michel Garnier | Offre Plus, prix et résiliation | 4,5 / 10 | Ne souscrit pas | Remplacé par 06 |
| 05 | Nadia Rousseau | Option Société | 2 / 10 | Abandon, achat impossible | Remplacé par 07 |
| 06 | Michel Garnier | Total du patrimoine en gratuit, texte agrandi | 4,5 / 10 | Objectif non atteint : un élément saisi sur trois | Nouveau |
| 07 | Nadia Rousseau | Séparer le pro du perso sans option, prévoir ses charges | 4 / 10 | À moitié atteint sur iPhone, rien sur le web | Nouveau |

Sur les cinq objectifs d'achat, personne n'achète (01 à 05). Sur les deux objectifs sans achat, personne n'arrive au bout (06 §3, 07 §1). Aucun des sept rapports n'atteint son objectif dans la maquette.

## 2. Ce que la relance apporte

- **06 couvre pour la première fois la saisie à la main** : MQ-031, MQ-032, MQ-236, les fiches d'assurance vie et de bien (MQ-248, MQ-045, MQ-046), le patrimoine (MQ-040, MQ-210) et l'accueil rempli (MQ-024). Constat central : sur trois éléments, un seul a un formulaire (06 B1).
- **07 couvre pour la première fois l'import joué en entier et le budget** : MQ-034, MQ-205, MQ-206, MQ-035, MQ-207, la banque non listée (MQ-208, MQ-251 à MQ-253, MQ-257 à MQ-259), puis MQ-211, MQ-079, MQ-089. L'import est « le meilleur moment du parcours » (07 §1). Le budget s'arrête à une proposition non modifiable (07 n° 4 et 5).
- **Les deux confirment le point d'abandon de 01** : la suite MQ-201 puis MQ-005. Trois personas y butent : abandon probable pour 01 et 06 (01 étape 6, 06 étape 7), « coincée » pour 07 (07 §6). Les problèmes C12, C13 et C14 montent de trois à cinq rapports.
- **Dix problèmes communs nouveaux** (C31 à C40), dont la lecture d'un PDF comptée en crédits d'IA dans le parcours gratuit (C32) et l'absence d'état entre l'accueil vide et l'accueil plein (C35).
- **Sept contradictions nouvelles** (K14 à K20). Les plus utiles : MQ-202 et MQ-203 sont « sans piège » pour 07 et un « piège » pour 06 (K7, K14).
- **Des points forts nouveaux**, à garder : accueil MQ-024, additions justes, date de valeur de MQ-248, prudence de MQ-045 (06 §4) ; import gratuit en cinq étapes, doublons sous contrôle, banque non listée traitée de bout en bout (07 §4).

## 3. Problèmes communs, par fréquence puis gravité

La gravité indiquée est la plus haute donnée par les rapports eux-mêmes (Bloquant, Important, Mineur). « Manquant » signifie que le rapport le cite sans le classer. Les numéros C1 à C30 sont ceux de l'audit de 07 h 29. C31 à C40 sont nouveaux. La fréquence compte les sept rapports.

### Cités par les sept rapports

| N° | Problème | Écrans | Sources et gravité |
|---|---|---|---|
| C4 | Information décisive absente avant l'engagement : limites, coût total, conditions. Regroupement fait par l'auditeur, le sujet varie selon l'offre. En gratuit, les limites se découvrent une par une : 5 puis 2 comptes, 5 enveloppes, lecture de PDF | MQ-201, MQ-005, MQ-203, MQ-211, MQ-212, MQ-219, MQ-016, MQ-039 | Bloquant : 01 n° 1, 02 B2, 06 B2. Important : 01 n° 6, 03 n° 5 et 11, 04 n° 11 et 12, 05 n° 5, 07 n° 6 et 10 |
| C9 | Aucun écran d'offre hors iPhone 393 × 852 : ni petit écran, ni Android, ni pliable, ni tablette. Aucune maquette en texte agrandi dans tout le fichier. 17 cadres sur 29 de la page « Autres formats » sont à concevoir | Page « 10 · Autres formats », MQ-006 | Bloquant : 06 B4. Important : 04 n° 15. Constat : 01 §9, 02 §10, 03 §9, 05 §10, 07 §9 |
| C3 | « Offres et abonnement » n'existe que pour un compte Signature (Camille Martin). Aucun état Essentiel, Plus ou option active. Le jeu d'exemple ne montre qu'un profil : Camille Martin, offre Signature, salaire, PEA, assurance vie | MQ-016, MQ-010 | Important : 01 n° 10, 02 I8, 03 n° 10, 04 n° 13, 05 n° 6, 07 n° 16. Incohérence : 06 §7 et §10 n° 9. Jeu d'exemple : 05 §7, 06 étape 18, 07 §6 |
| C6 | Aide muette : « Offres, paiement et résiliation » sans lien, articles non maquettés, rien sur l'IA, les options, le budget ou l'usage professionnel. Aucune aide depuis MQ-201 ni MQ-005 | MQ-250 | Important : 02 I9, 03 n° 8, 05 n° 10, 06 I10. Manquant : 01 étape 18, 04 étape 16, 07 §6 et étape 16 |
| C7 | Les mentions d'engagement et de limite (résiliation, rétractation, équivalent mensuel, coût, limites d'offre) sont dans le style le plus petit et le plus terne : 12 à 13 points, gris `#83838c`, contraste estimé proche du seuil sur les cartes | MQ-201, MQ-016, MQ-115, MQ-211, MQ-005 | Important : 04 n° 9. Mineur : 07 n° 24. Design : 01 §8, 02 §9, 03 §8, 05 §9, 06 §8 |
| C10 | « Prix réglables, affichés avant tout achat » : formule interne, lue comme « le prix peut changer » | MQ-016 | Important : 03 n° 6, 07 n° 16. Mineur : 01 n° 17, 02 M9, 04 n° 19, 05 n° 12, 06 M12 |
| C11 | Pied de l'écran des offres : liens légaux sous l'indicateur d'accueil, « Restaurer mes achats » hors cadre, sans lien de prototype | MQ-201 | Mineur : 01 n° 13, 02 M1, 03 n° 18, 04 n° 16, 05 n° 15, 06 M1, 07 n° 19 |

### Cités par six rapports

| N° | Problème | Écrans | Sources et gravité |
|---|---|---|---|
| C1 | Le web n'est pas conçu : 42 cadres sur 45 portent « À concevoir ». Offres, connexion, import, budget, règles et ajout d'établissement sont vides. Le rapport 06 n'a pas évalué le web | MQ-224, MQ-232 (01 à 05, 07), MQ-177 (03, 05, 07), MQ-230, MQ-179 (02), MQ-228 (04), MQ-148 (05, 07), MQ-180 (05), MQ-153 à MQ-159, MQ-225 à MQ-229 (07) | Bloquant : 02 B4, 03 n° 3, 04 n° 4, 05 n° 4, 07 n° 1. Manquant : 01 §10 |
| C8 | Boutons d'offre peu visibles : trois pastilles gris foncé identiques sur carte gris foncé, libellé de 13, environ 32 de haut à l'œil pour une zone de 44. Rien ne distingue le choix sans paiement | MQ-201, MQ-016 | Important : 02 I3, 06 I3. Mineur : 03 n° 13. Design : 01 §8, 04 §8 et §9, 05 §9 |

### Cités par cinq rapports

| N° | Problème | Écrans | Sources et gravité |
|---|---|---|---|
| C2 | Rien ne confirme l'achat : pas d'écran de réussite, de reçu, d'état « offre active », d'échec ni d'annulation. La feuille de l'App Store n'est pas représentée. Après « Confirmer avec Face ID », retour sur l'accueil vide. Cité par les cinq rapports qui ont tenté un achat | MQ-218, MQ-219, MQ-025, MQ-220, MQ-016 | Bloquant : 01 n° 4, 02 B3, 04 n° 3, 05 n° 2. Manquant : 03 §10 |
| C12 | « Jusqu'à 5 comptes » en gratuit, puis 2 comptes sans contribution anonyme. Nulle part il n'est dit ce qui compte pour un « compte » | MQ-201, MQ-005 | Bloquant : 01 n° 1, 06 B2. Important : 07 n° 6. Incohérence : 02 §8, 03 §7 |
| C13 | « Trois choix de même valeur » alors que l'un coûte 100 € et qu'un autre limite à 2 comptes. L'option payante figure dans un écran titré « Essentiel gratuit » | MQ-005 | Bloquant : 01 n° 2, 06 B3. Important : 07 n° 7. Mineur : 04 n° 18, 05 n° 17 |
| C14 | MQ-005 n'a pas d'état sélectionné. « Continuer » a un aspect désactivé mais fonctionne. L'option à 100 € n'a ni paiement ni confirmation | MQ-005 | Bloquant : 06 B3. Important : 05 n° 11, 07 n° 9. Mineur : 01 n° 20, 04 n° 18 |
| C5 | Résiliation « en trois clics » et rétractation promises, jamais montrées. « Gérer l'abonnement » sort vers l'App Store sans prévenir. Non revu par 06 et 07 | MQ-201, MQ-218, MQ-203, MQ-016 | Bloquant : 04 n° 2. Important : 01 n° 10, 03 n° 7, 04 n° 14. Friction : 02 §7 point 6. Constat : 05 étape 12 |

### Cités par quatre rapports

| N° | Problème | Écrans | Sources et gravité |
|---|---|---|---|
| C26 | Annuaire : mentions « Connexion · fichier », « Clé · fichier », « Connexion · PDF » sans légende. Pastilles de filtre, recherche et la plupart des lignes sans lien. La ligne Horizon Vie ne mène nulle part | MQ-036 | Important : 04 n° 12 (assurance vie). Bloqué : 06 étape 16. Mineur : 01 n° 18, 04 n° 23, 06 M5 et M6. Liens absents : 01 §10, 07 §10 |

### Cités par trois rapports

| N° | Problème | Écrans | Sources et gravité |
|---|---|---|---|
| C33 | La contribution anonyme n'est pas expliquée là où on la choisit : « compteurs anonymes », « annuaire des enseignes », sans exemple ni lien. Le détail existe dans MQ-015, sans lien | MQ-005 | Bloquant : 01 n° 2. Important : 07 n° 8. Mineur : 06 M13. Friction : 06 §6 point 4 |
| C31 | Aucun écran ni message de limite atteinte : comptes, enveloppes, connexions | MQ-005, MQ-211, MQ-203 | Bloquant : 06 B2 et §10 n° 6. Manquant : 01 §10, 07 §10 |
| C24 | Pas de bouton « Annuler » sur la feuille de confirmation | MQ-218 | Important : 01 n° 8, 04 n° 5, 06 I5 |
| C22 | « Comptes illimités » contre « Jusqu'à 10 connexions bancaires » | MQ-201, MQ-203 | Important : 01 n° 6, 04 n° 11. Mineur : 07 n° 22 |
| C15 | Les options Famille et Société sont absentes de l'écran des offres | MQ-201 | Important : 03 n° 9, 05 n° 7. Incohérence : 01 §7 |
| C16 | Ni offre mensuelle ni période d'essai | MQ-201, MQ-016 | Important : 01 n° 7, 02 I2. Manquant : 04 §10 |
| C34 | « Clé d'accès » jamais expliquée, dès l'inscription | MQ-002, MQ-220 | Important : 01 n° 9, 04 n° 10. Mineur : 06 M13. Constat : 01 étape 2, 04 étape 2, 06 étape 2 |
| C17 | La croix de l'écran des offres mène au choix Essentiel, donc à une nouvelle décision. Voir K15 : 06 en fait un point fort | MQ-201, MQ-005 | Mineur : 01 n° 14. Friction : 02 §7 point 1, 04 §6 |
| C18 | Sous le voile de la feuille, « Choisir Plus » et « Choisir Signature » restent reliés à l'accueil vide | MQ-218 | Mineur : 01 n° 21, 03 n° 20. Incohérence : 05 §8 |

### Cités par deux rapports

| N° | Problème | Écrans | Sources et gravité |
|---|---|---|---|
| C19 | Abonnement Plus activé sans récapitulatif ni confirmation : un toucher engage 40 €. Non revu par 06 et 07 | MQ-203 → MQ-220 | Bloquant : 01 n° 3, 04 n° 1. Les deux seuls rapports passés par ce chemin |
| C20 | Options Famille et Société non achetables : une demi-ligne de note, aucun bouton, aucun écran de contenu. 07 confirme sans tenter l'achat : « Société » tient en une ligne, sans description (07 n° 16 et §6) | MQ-016, MQ-177 | Bloquant : 03 n° 1 à 4, 05 n° 1 à 3. Les deux seuls rapports sur les options |
| C37 | Budget en gratuit inachevé : « Valider ce budget » sans lien, « Créer une enveloppe à la main » qui mène au budget proposé, aucun écran pour modifier ou créer une enveloppe, limite de 5 enveloppes dite au milieu d'un texte d'aide | MQ-217, MQ-211, MQ-079 | Bloquant : 07 n° 4 et 5. Important : 01 n° 6, 07 n° 6. Constat : 01 étape 8, §7 et §10 |
| C35 | Aucun état entre l'accueil vide et l'accueil plein. Après une saisie ou un import, le prototype revient aux écrans vides MQ-025 et MQ-217, ou reste sur la fiche. L'accueil d'un compte gratuit à un, deux ou trois éléments n'est pas maquetté | MQ-025, MQ-024, MQ-236, MQ-211, MQ-217 | Important : 06 I6 et I7, 07 n° 14. Même défaut après un achat : C2 |
| C32 | Lecture d'un relevé PDF affichée « lu par LiVi IA · 4 crédits, 0,04 € » dans le parcours gratuit. MQ-201 réserve LiVi IA à Signature. Le menu Ajouter dit « CSV, Excel ou PDF, sans limite de date », MQ-202 dit « CSV ou Excel » | MQ-039, MQ-029, MQ-244, MQ-202, MQ-201 | Important : 06 I4, 07 n° 10. Seul chemin maquetté pour l'assurance vie de Michel (06 étape 16) |
| C36 | Onglet « LiVi IA » permanent pour un compte gratuit : un cinquième de la barre mène à une offre à 150 € par an. Voir K13 | MQ-025 → MQ-212 | Important : 01 n° 11, 06 I9 |
| C40 | Environ 8 points entre « Passer à Plus · 40 €/an » et « Importer un fichier à la place ». Aucune sortie libellée, pas de « Saisir à la main ». Même persona dans les deux rapports. Voir K7 | MQ-203 | Important : 06 I1. Risque : 04 §9 et étape 10 |
| C38 | L'écran de bienvenue ne dit ni le prix ni « gratuit ». Le choix de l'offre arrive juste après l'inscription, avant tout écran utile | MQ-001, MQ-201 | Important : 01 n° 7. Friction : 06 §6 points 1 et 2. Constat : 01 étape 1 et §10, 06 étape 1 |
| C21 | Double authentification imposée après le paiement, en jargon, sans « Plus tard ». Icône du bouton d'aspect cassé. Écran de création de la clé absent | MQ-220 | Important : 01 n° 9, 04 n° 10. Mineur : 04 n° 21 |
| C23 | Le renouvellement n'est pas dit automatique, sans montant ni rappel | MQ-218 | Important : 01 n° 8, 04 n° 7 |
| C25 | Une ou deux confirmations ? « Confirmer avec Face ID » puis « feuille de l'App Store, avec Face ID » | MQ-218, MQ-219 | Important : 02 I10, 04 n° 6 |
| C27 | « Étape 2 sur 3 » sans étape 1. Agrégateur non nommé | MQ-037 | Mineur : 01 n° 19, 04 n° 20 |
| C28 | Mentions légales de l'inscription non reliées | MQ-001, MQ-002 | Mineur : 01 n° 15, 04 n° 22 |
| C29 | Feuille de confirmation rangée sous l'écran des offres, visible au défilement | MQ-201 | Mineur : 02 M2, 04 n° 17 |
| C39 | Icône « Assurance vie » décalée de 8 points, libellé sur deux lignes | MQ-025 | Mineur : 01 n° 16, 06 M2 |
| C30 | Détails de MQ-016 : décalage de 2 px de la carte active (01 n° 17, 03 n° 14), prix coupé « 30 €/ » puis « an » (03 n° 12, 05 n° 13), « Signature renouvelée » pour une date future (04 n° 19, 05 n° 14) | MQ-016 | Mineur |

### Les plus graves après relance

Croisement de la fréquence et de la gravité :

1. **C2** : aucun achat ne se termine par une confirmation (les cinq rapports d'achat, bloquant dans quatre).
2. **C1** : le web n'est pas conçu (six rapports, bloquant dans cinq). 07 l'étend à l'import et au budget.
3. **C12, C13, C14** : l'offre gratuite se contredit entre MQ-201 et MQ-005 (cinq rapports chacun, bloquant dans 01 et 06). En hausse : abandon probable pour 01 et 06 (01 étape 6, 06 étape 7), blocage pour 07 (07 §6).
4. **Le parcours gratuit ne se joue pas de bout en bout** : formulaires manuels d'assurance vie et de bien absents (06 B1), budget non validable (C37, bloquant dans 07), aucun état intermédiaire (C35). Nouveau.
5. **C19** : abonnement Plus activé en un toucher (bloquant dans les deux rapports qui ont pris ce chemin).
6. **C20** : options Famille et Société impossibles à acheter (bloquant dans 03 et 05, flou confirmé par 07).
7. **C4** et **C5** : ce qui décide (limites, coût total, résiliation) arrive après l'engagement ou jamais (sept et cinq rapports, bloquant dans 01, 02, 04 et 06).
8. **C9** : aucune maquette en texte agrandi ni hors iPhone (sept rapports, bloquant dans 06).

## 4. Problèmes bloquants, par rapport

- **01** : promesse « 5 comptes » conditionnelle (n° 1) ; « Trois choix de même valeur » et contribution non expliquée (n° 2) ; MQ-203 → MQ-220 sans récapitulatif (n° 3) ; aucun écran de confirmation d'achat (n° 4).
- **02** : un versement « programmé » est un rappel, dit après l'achat seulement (B1) ; modèle de coût de l'IA invisible avant l'achat (B2) ; boucle MQ-219 → MQ-025 → MQ-212 (B3) ; parcours absent sur ordinateur (B4).
- **03** : option Famille non achetable (n° 1) ; aucun écran sur ce que voit chacun (n° 2) ; MQ-177 vide (n° 3) ; aucun parcours d'invitation (n° 4).
- **04** (remplacé) : MQ-203 → MQ-220 sans confirmation (n° 1) ; résiliation expliquée nulle part (n° 2) ; aucune confirmation après l'achat (n° 3) ; parcours web non conçu (n° 4).
- **05** (remplacé) : option Société non achetable (n° 1) ; aucun écran d'achat d'option (n° 2) ; aucun écran de ce que fait l'option (n° 3) ; cinq écrans web vides (n° 4).
- **06** : formulaires manuels « Assurance vie » et « Bien immobilier » manquants, tuiles de MQ-031 sans lien (B1) ; offre gratuite contradictoire, 5 ou 2 comptes (B2) ; option à 100 € dans un écran titré « Essentiel gratuit », sans état sélectionné (B3) ; aucune maquette en texte agrandi (B4).
- **07** : web non conçu (n° 1) ; aucun moyen de désigner un compte ou une opération comme professionnels (n° 2) ; budget qui mélange tous les comptes (n° 3) ; « Valider ce budget » sans lien (n° 4) ; aucun écran pour ajuster ou créer une enveloppe (n° 5).

## 5. Contradictions entre rapports

K1 à K13 viennent de l'audit de 07 h 29, mis à jour avec 06 et 07. K14 à K20 sont nouveaux.

| N° | Sujet | D'un côté | De l'autre | À trancher |
|---|---|---|---|---|
| K1 | Écran des offres sans action mise en avant (MQ-201) | Point fort, preuve de neutralité : 01 §4, 04 §4. « Clair » : 07 étape 3 | Défaut de hiérarchie : 02 I3 et Top 5 n° 5, 03 §8. Rien ne distingue le choix sans paiement : 06 I3 et étape 6 | Choix de produit. Le même persona change d'avis selon l'objectif (04 §4, 06 I3). Piste commune : des boutons plus visibles, « aucun paiement » écrit sous Essentiel (04 Top 5 n° 5, 05 §9, 06 I3) |
| K2 | Feuille de confirmation MQ-218 | Bon modèle à réutiliser pour les options : 03 §4, 05 §5 et §10 | À refaire : pas de bouton « Annuler », renouvellement non dit automatique, double confirmation floue : 01 n° 8, 04 n° 5 à 7 et Top 5 n° 3, 06 I5 | Corriger MQ-218 avant de la décliner, sinon ses défauts se propagent |
| K3 | Équivalent mensuel « soit 3,33 € par mois » | Clair : 01 §4, 03 §4, 05 §5 | Ambigu, fait croire à un prélèvement mensuel : 04 n° 8. Affiché alors que seul l'annuel existe : 02 I2 | Garder l'équivalent, écrire que le paiement est annuel |
| K4 | Mention « Résiliation en trois clics, rétractation de 14 jours » | Rassurante : 01 §4, 02 §5, 03 §4, 06 §4 | Promesse non tenue, bloquante : 04 n° 2. Non maquettée : 01 n° 10. Mot « clics » maladroit sur iPhone : 05 n° 16 | La mention plaît, la démarche manque |
| K5 | « Gérer l'abonnement » ouvre l'App Store (MQ-016) | « Correct » : 02 étape 14 | Sortie non annoncée : 03 n° 7. « Échec » : 04 étape 15 | Dépend du persona. À annoncer dans tous les cas |
| K6 | Gravité de « Trois choix de même valeur » (MQ-005) | Bloquant, point d'abandon : 01 n° 2, 06 B3 | Important : 07 n° 7. Mineur : 04 n° 18, 05 n° 17 | Bloquant dès que l'objectif est de rester en gratuit (01, 06). Mineur quand le persona vient acheter (04, 05) |
| K7 | Alternative gratuite sous le bouton payant (MQ-203) | Point fort : 01 §4, 04 §4. « Honnête », « Pas de piège » : 07 étape 7 et §4 | 8 points d'écart, achat déclenché par erreur : 04 §9. « Point d'abandon », aucune sortie libellée : 06 I1 et étape 11 | Garder l'alternative, écarter les boutons, ajouter « Rester en gratuit » et la confirmation (C19, C40) |
| K8 | Zones sous le voile de MQ-218 | Sans effet : 01 n° 21 | Un toucher mal placé saute le paiement : 03 n° 20. À vérifier : 05 §8 | À vérifier en jouant le prototype |
| K9 | Liens de prototype de la page Web | 2 liens : 03 §2, 04 n° 4, 07 §10 | Aucun : 05 §1 et n° 4 | À recompter dans le fichier |
| K10 | Mesures du pied de MQ-201 | « Restaurer mes achats » à y = 860 : 01 n° 13 et §9, 03 n° 18, 05 n° 15, 06 M1, 07 n° 19 | Liens jusqu'à y = 890, « Restaurer mes achats » de y 846 à 890 : 02 M1, 04 §9. Feuille rangée à partir de y 852 (02 M2) ou de y 884 (04 n° 17) | Écart de mesure. Le constat C11 reste commun aux sept rapports |
| K11 | Dates de renouvellement (16 nov. 2027, 2 oct. 2027) | Incohérentes avec la démonstration : 02 §8 | Deux contextes, acceptable : 05 §8 | Mineur |
| K12 | Cibles tactiles | 44 points partout où un lien existe : 01 §4, 02 §5, 05 §5, 06 §9, 07 §4 (35 cadres, MQ-079 et MQ-250 parmi les écrans testés) | Trop juste sur le champ de recherche de MQ-250 et les lignes de MQ-079 (pas d'environ 42 px) : 03 §9 | À mesurer sur MQ-079 et MQ-250 |
| K13 | Onglet LiVi IA sans Signature (MQ-212) | Perçu comme de la vente : 01 n° 11. « Achat intégré qui attend d'être touché par erreur » : 06 I9 | « Bonne page d'explication », mais formule trompeuse : 02 étape 4 | Défaut pour les deux personas gratuits (C36). Utile au persona qui vient acheter |
| K14 | Choix de la méthode (MQ-202) et rappels de prix | Mention « offre Plus » visible avant le toucher : 01 étape 11, 04 étape 9, 07 étape 6 et §4. MQ-025 « clair » : 07 étape 5 | « Piège » : méthode payante en premier, mention en 14 points gris en fin de sous-titre, « Saisir à la main » en dernier : 06 I2 et étape 10. Trois rappels de prix en dix écrans : 06 §6 point 5 | Le même persona juge l'écran « Bon » en 04 et « Piège » en 06. À trancher par l'ordre des méthodes pour un compte gratuit |
| K15 | Croix de l'écran des offres (MQ-201) | Point fort : « Fermer ne coûte rien » : 06 §4 | Fermer revient à choisir Essentiel sans le dire : 01 n° 14. Détour ou nouvelle offre à 100 € : 02 §7 point 1, 04 étape 6 | La croix ne coûte rien, mais elle ouvre MQ-005. Le défaut est dans MQ-005 (C13, C14) |
| K16 | Contraste des textes secondaires | Point fort : « aucun texte sous le seuil AA », minimum de 4,5 à 4,6 : 07 §4 et §8 | Même mesure, jugée insuffisante en pratique : 04 §8, 06 §8. À la limite : 01 §8, 03 §8 | Les chiffres concordent. Le seuil minimal ne suffit pas pour un texte d'engagement (C7) |
| K17 | Taille des mentions d'engagement | 12,5 px : 01 §8, 03 §8, 04 n° 9, 05 §9. 12 à 12,5 : 07 §8 | 13 : 02 §9. 13 ou 14 points : 06 §8 | Écart de mesure, à relever dans le fichier |
| K18 | Taille du prototype iPhone | 660 liens ou nœuds interactifs, 14 parcours : 03 §2, 05 §3 | 418 interactions, 14 flux : 07 §2 | Unités de compte différentes, probablement. À recompter |
| K19 | Pastilles de filtre de l'annuaire (MQ-036) | La coupe de « Courtie… » suggère bien le défilement : 01 §9 | Défilement peu découvrable, « Assurance vie » cinquième et hors écran : 06 M5 et §9 | À vérifier en jouant le prototype. Sans lien dans tous les cas (C26) |
| K20 | Import de fichier en cinq étapes | Frein : « Je ne le ferai pas chaque mois » : 01 §6 (MQ-034 lu, import non joué) | « Le meilleur moment du parcours » : 07 §1 et §4 (cinq étapes jouées) | Dépend du persona. 07 est la seule source qui a suivi l'import en entier |

## 6. Problèmes propres à un persona

Les points devenus communs après relance ont quitté cette section : voir C33 et C36 à C39 pour 01, C9 et C40 pour 04, C1 pour 05.

### 01 · Léa, jeune active

- Les arguments de Plus ne parlent pas à une débutante. « Analyses et statistiques avancées » est vide de sens (01 n° 5).
- Objectifs d'épargne introuvables : MQ-047 rangé dans les analyses, « Créer un objectif » sans lien, écran de création absent (01 n° 12).
- « Enveloppe » désigne une catégorie de budget (MQ-211) et un type de compte (MQ-031, MQ-216) (01 §7).
- Le détail rassurant de la contribution est dans MQ-015, sans lien depuis MQ-005 (01 n° 2).
- Sans Plus, l'import compte 5 étapes, et personne ne le dit (01 §6). Voir K20.

### 02 · Karim, investisseur actif

- « Programmé » et « n'exécute rien sans votre validation » font croire à une exécution. L'exécution est un rappel (02 B1).
- 400 crédits par mois, plafond de 40 par jour, dépassement non expliqué (02 B2, M5).
- 110 € d'écart avec Plus sans justification à l'écran (02 I1).
- MQ-119 : bouton principal « Valider avec Face ID » sur une fonction indisponible, soumise à l'avis juridique (02 I4). Ce point touche la règle du projet sur les ordres (`CLAUDE.md`, §2).
- Une fonction indisponible est facturée 1 crédit et listée parmi les consignes (02 I5). Un refus de conseil est facturé 2 crédits (02 M4).
- Frais d'ordre absents de MQ-117 (02 I6). « Gain net des frais d'IA » sans les 150 € d'abonnement (02 I7).
- Depuis MQ-212, l'achat renvoie à l'écran d'inscription MQ-201 (02 §7 point 2).
- Versements en double : MQ-097 et MQ-124, sans lien entre eux (02 §7 point 4).
- Journal en crédits pour un coût promis en euros, export annoncé sans commande, filtre « Ordres » (02 M3, M6, M11).

### 03 · Sophie, famille

- Aucun écran ne dit qui voit quoi : comptes, soldes, droits, identifiants bancaires (03 n° 2).
- Aucune invitation, aucune gestion des membres, nombre de personnes non précisé (03 n° 4, n° 11).
- La maquette pousse à prêter son identifiant : seuls « Appareils et sessions » et la synchronisation approchent le partage (03 §6).
- Aucune notion de personne dans le budget (03 étape 8).
- MQ-079 : alerte de « Restaurants et sorties » portée par la seule couleur (03 n° 19). Contraire à la règle du projet sur la couleur seule (`CLAUDE.md`, §5).
- MQ-010 : bouton à curseurs sans lien, en doublon de « Préférences » (03 n° 15).
- MQ-250 : champ de recherche d'environ 18 px de haut, « En ligne » ambigu (03 n° 16, n° 17).
- « Dépenses du foyer » sur MQ-076 sans fonction de foyer (03 §7).

### 04 et 06 · Michel, retraité

Parcours d'achat (04) :

- Couverture de l'assurance vie par Plus incertaine : « Connexion · PDF » pour Horizon Vie, ligne sans lien (04 n° 12).
- « 40 €/an, soit 3,33 € par mois » lu comme un prélèvement mensuel (04 n° 8).
- Modalités de la rétractation absentes (04 n° 14). Écran de la banque manquant (04 étape 13).
- Montants de MQ-204 en 13 px, petits pour lui (04 étape 14).

Parcours gratuit (06) :

- Saisie à la main d'une assurance vie et d'un bien immobilier impossible : aucune tuile de MQ-031 n'a de lien, « Continuer » mène toujours au compte courant (06 B1).
- Rien ne dit si un appartement compte pour un « compte » dans la limite gratuite (06 B2).
- Texte agrandi : débordements prévisibles relevés à la taille par défaut. Montant de 52 points déjà sur toute la largeur, nom et montant sur une même ligne, onglet « Patrimoine » plein, tuiles à hauteur fixe (06 §9). Le texte agrandi est sur la fiche du persona depuis 04 (04 n° 15).
- Depuis « Ajouter un bien ou un crédit », MQ-031 s'ouvre avec « Compte courant » coché et le titre « Saisir à la main » (06 M4, étape 17).
- Après l'enregistrement, aucun retour vers l'accueil depuis MQ-236 (06 I6).
- Un bien n'est pas un « établissement » : il n'apparaît pas dans la liste de l'accueil, le total ne se recompose pas (06 I8).
- MQ-202 : la méthode payante est en premier, « Saisir à la main » en dernier (06 I2). Voir K14.
- MQ-024 : toucher le montant le masque (mode discret) ; courbe sans échelle ; « À renouveler · 20 nov. » et « Clé · hier 18:00 » incompris (06 M8 à M10).
- « 1 valeur ancienne » sur MQ-024 contre « 3 valeurs anciennes » sur MQ-040 et MQ-210 (06 §7).
- MQ-032 : « Date d'ouverture » sans mention « facultatif » (06 M7).
- MQ-208 : état par défaut de l'interrupteur « Proposer cet établissement à LiVi » illisible ; type « Banque » par défaut pour un assureur (06 M14, §10 n° 11).
- Aide : pas de téléphone, « Réponse sous 2 jours ouvrés » (06 M11).

### 05 et 07 · Nadia, indépendante

Parcours d'achat (05) :

- Aucun écran ne montre ce que livre l'option Société (05 n° 3).
- MQ-149 : aucune entrée vers les offres, le compte ou la société. Avatar sans lien (05 n° 8).
- Aucun mode de paiement hors App Store sur le web (05 §8).
- Gabarits web MQ-224, MQ-232 et MQ-180 avec la même ligne de codes « STA-05 · SEC-03 · PAT-09 » (05 §8).

Parcours gratuit (07) :

- Aucun moyen de désigner un compte ou une opération comme professionnels. Les mots « professionnel », « pro », « activité », « cotisation », « URSSAF », « charges » sont absents des cadres iPhone (07 §1, n° 2). Déjà relevé sur MQ-031 par 05 n° 9.
- Le budget mélange tous les comptes : aucun filtre par compte, aucune exclusion (07 n° 3). Seul levier : le filtre « Tous les comptes » de MQ-089, limité à la liste (07 étape 14).
- Le budget ignore les revenus et le calendrier d'un indépendant : pas de revenu attendu, pas de charge trimestrielle ou annuelle, pas de provision (07 n° 12).
- Import : compte de destination prérempli, lien « Changer » inerte, impossible de nommer le compte, sélecteur de fichier absent (07 n° 11).
- « Réglages du budget » cités par MQ-079, introuvables (07 n° 13).
- Les opérations « À catégoriser » de MQ-089 mènent à MQ-122, section LiVi IA. MQ-122 n'a pas été ouvert : chemin manuel gratuit à vérifier (07 n° 15).
- Budget du mois montré à 8 enveloppes : la version à 5 enveloppes n'est pas dessinée (07 §7).
- « Annuler l'import » reste proposé après « Import terminé », sans confirmation (07 n° 20).
- Doute sur l'option Société : « Je suis micro-entrepreneuse, pas une société » (07 §6).
- Doublon « déjà présent par la connexion » dans un parcours gratuit sans connexion (07 §7).
- MQ-211 : montant moins visible que le libellé, sous-titres de format variable (07 n° 17 et 18). Écart d'une ligne entre MQ-251 et MQ-034 (07 n° 23).
- MQ-149 : moitié basse vide, courbe sans axe, « Importer » et « Import » en double, « Tout voir · 6 » pour trois lignes (07 §7 et §8). Proche de 05 §9 : « écran iPhone étiré ».
- Jeu de données sans cas d'indépendante : « Salaire Atelier Nord », PEA, dividendes (07 §6, 05 §7).

## 7. Parcours trop similaires

### Après relance : pas de redite à corriger

- **06 face à 01 et 04.** Tronc d'inscription commun : les 11 premières étapes de 06 (MQ-001, 002, 003, 004, 007, 201, 005, 025, 036, 202, 203) suivent l'ordre de 01, qui intercale seulement MQ-217 et MQ-212. Les constats de ce tronc se répètent (C8, C11 à C14, C26, C39) et une formule revient : « Point d'abandon probable » sur MQ-005 (01 étape 6, 06 étape 7). À partir de l'étape 12, 06 est seul : MQ-031, MQ-032, MQ-236, MQ-039, MQ-024, MQ-248, MQ-040, MQ-210, MQ-045, MQ-046. L'objectif est différent. Un bloquant est entièrement nouveau (B1). B4 était « Important » dans 04 n° 15. B2 et B3 reprennent 01 n° 1 et n° 2. Le rapport déclare une toile vierge (06, en-tête). Redite limitée au tronc, acceptable.
- **07 face à 05.** Même entrée par le web vide (MQ-148, MQ-224) et même passage par MQ-016 puis MQ-250. Même chiffre de 42 cadres sur 45. Le cœur de 07 (MQ-034, 205, 206, 035, 207, 211, 079, 089) est absent de 05. Score différent (4 contre 2). Pas de redite.
- **07 face à 01.** 01 avait lu MQ-217, MQ-211, MQ-079 et MQ-086 par leurs textes. 07 les joue. Les constats se recoupent (C37) sans se recopier.
- **06 face à 07.** Tronc commun MQ-201, 005, 025, 036, 202, 203, dans le même ordre. Ensuite les parcours se séparent : saisie à la main pour 06, import pour 07. Les verdicts opposés sur MQ-202 et MQ-203 (K7, K14) montrent deux lectures indépendantes.
- **02.** Toujours distinct : MQ-219 et MQ-115 à MQ-124 ne sont couverts par aucun autre rapport.

Le tronc MQ-001 à MQ-203 est maintenant décrit par quatre rapports (01, 04, 06 en entier, 07 depuis MQ-201). Un prochain test gagnerait à partir de l'accueil (MQ-025 ou MQ-024) pour ne pas le rejouer.

### Rappel de l'audit de 07 h 29

- **01 et 04 : redite forte.** Même offre visée, 15 écrans de 04 présents dans 01 dans le même ordre, quatre bloquants de 04 déjà dans 01, formulations proches (« Le meilleur écran du parcours » pour MQ-037, « ligne verte de 12,5 »). Corrigée : 04 remplacé par 06.
- **03 et 05 : redite partielle.** Même mur (option citée dans une note de MQ-016), même score, même cœur iPhone MQ-024 → MQ-010 → MQ-016 → MQ-250, Top 5 n° 1 presque identique. Corrigée : 05 remplacé par 07.

## 8. Points à vérifier hors rapports

- `docs/design/figma.md` (lot « Restes des audits du 20 novembre ») cite les liens « Conditions d'utilisation », « Confidentialité » et « Restaurer mes achats » de MQ-201 parmi les corrections à valider depuis le 26 novembre 2026. Les sept rapports du même jour signalent encore ce défaut (C11). À vérifier : correction non visible, ou tests faits sur une version antérieure.
- `docs/design/figma.md` décrit une variante « Texte agrandi » du composant « Montant héros ». Le rapport 06 ne trouve aucun cadre en texte agrandi et prévoit un débordement du montant (06 B4, §9). À vérifier : variante non posée dans un écran, ou non vue par le testeur. Le sujet touche la règle du projet sur les tailles dynamiques (`CLAUDE.md`, §5).
- MQ-039 affiche un coût « LiVi IA » dans un parcours d'ajout ordinaire (C32). La règle du projet réserve LiVi IA à l'offre Signature (`CLAUDE.md`, en-tête). À trancher par le porteur : lecture de PDF incluse en gratuit, ou écran réservé à Signature.
- Selon 07 n° 8, la note de MQ-005 laisse entendre que les données importées sont celles qui sont comptées. Selon 01 n° 2, MQ-015 exclut les montants et les données de la banque. La règle du projet exclut les données de synchronisation bancaire des statistiques anonymes (`CLAUDE.md`, §2). Texte de MQ-005 à faire relire par l'agent `conformite`.
- `docs/suivi/etat-du-projet.md` donne 644 liens et 14 points de départ au 20 novembre. Les rapports donnent 660 (03, 05) et 418 (07). Voir K18.
- Les contradictions K8, K9, K10, K12, K17, K18 et K19 demandent une mesure dans le fichier ou un prototype joué.
- `docs/suivi/etat-du-projet.md` parle encore de « cinq personas » et de la relance de 04 et 05 à faire. À mettre à jour par l'agent `documentaliste` ; l'auditeur ne modifie que `_index.md` et `_synthese.md`.

## Historique des audits

| Audit | Rapports lus | Résultat |
|---|---|---|
| 26 novembre 2026, 07 h 29 | 01 à 05 | 30 problèmes communs (C1 à C30), 13 contradictions (K1 à K13). Deux relances demandées : 04 (trop proche de 01) et 05 (partie iPhone proche de 03) |
| 26 novembre 2026, 08 h 10 | 01 à 07 | 06 et 07 intégrés, 04 et 05 passés au statut « Remplacé ». 10 problèmes communs nouveaux (C31 à C40), 7 contradictions nouvelles (K14 à K20), 16 problèmes existants renforcés. Aucune relance |

## Rapports à relancer

Aucun.

Les deux relances demandées à 07 h 29 ont été jouées avec les objectifs proposés (04 → 06, 05 → 07). Elles ne font pas doublon (section 7).

À rejouer plus tard, une fois les écrans conçus. Les tester avant donnerait le même résultat :

- La résiliation d'une offre (C5) et l'achat d'une option (C20).
- Le total de Michel, quand les formulaires d'assurance vie et de bien existeront, avec des écrans en texte agrandi (06 B1, B4).
- Le budget de Nadia, quand une enveloppe pourra être modifiée et le budget validé, et quand le web sera dessiné (07 n° 1, 4 et 5).

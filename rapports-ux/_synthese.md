# Tests UX par personas — synthèse

Audit du 26 novembre 2026 à 07 h 29 (Europe/Paris), par l'agent « UX Report Auditor ».

Dossier audité : `rapports-ux/`. Cinq rapports lus en entier, tous datés du 26 novembre 2026, plus les cinq fiches de `_personas/`. L'auditeur n'a pas ouvert la maquette : tout ce qui suit vient des rapports, cités par leur numéro (01 à 05) et leur section.

Limites communes à garder en tête :

- Aucun rapport n'a joué le prototype. Les liens ont été lus dans le fichier. Les remarques sur le geste, le pouce et le défilement sont des estimations (01 §9, 02 §1, 03 §2, 04 §9, 05 §3).
- Le rapport 02 n'a vu que deux écrans en image (MQ-201, MQ-115). Ses remarques visuelles sur les autres écrans sont des déductions (02 §1).
- Le rapport 03 n'a vu que le thème sombre (03, en-tête et §10). Aucun rapport ne dit avoir vu les thèmes clair ou pastel.

## 1. Vue d'ensemble

| Rapport | Persona | Objectif | Score | Issue |
|---|---|---|---|---|
| 01 | Léa Fontaine | Offre Plus, après découverte du gratuit | 5,5 / 10 | Ne souscrit pas |
| 02 | Karim Benali | Offre Signature, LiVi IA | 4,5 / 10 | Ne souscrit pas |
| 03 | Sophie Moreau | Option Famille | 2 / 10 | Abandon, achat impossible |
| 04 | Michel Garnier | Offre Plus, prix et résiliation | 4,5 / 10 | Ne souscrit pas |
| 05 | Nadia Rousseau | Option Société | 2 / 10 | Abandon, achat impossible |

Aucun des cinq personas n'achète. Deux achats sont impossibles dans la maquette (03, 05). Les trois autres renoncent faute d'information avant l'achat et de confirmation après (01 §1, 02 §1, 04 §1).

## 2. Problèmes communs, par fréquence puis gravité

La gravité indiquée est la plus haute donnée par les rapports eux-mêmes (Bloquant, Important, Mineur). « Manquant » signifie que le rapport le cite sans le classer.

### Cités par les cinq rapports

| N° | Problème | Écrans | Sources et gravité |
|---|---|---|---|
| C1 | Le parcours d'offre n'existe pas sur le web : cadres « À concevoir » | MQ-224, MQ-232 (les cinq), MQ-177 (03, 05), MQ-230, MQ-179 (02), MQ-228 (04), MQ-148, MQ-180 (05) | Bloquant : 02 B4, 03 n° 3, 04 n° 4, 05 n° 4. Manquant : 01 §10 |
| C2 | Rien ne confirme l'achat : pas d'écran de réussite, de reçu, d'état « offre active », d'échec ni d'annulation. La feuille de l'App Store n'est pas représentée. Après « Confirmer avec Face ID », retour sur l'accueil vide | MQ-218, MQ-219, MQ-025, MQ-220, MQ-016 | Bloquant : 01 n° 4, 02 B3, 04 n° 3, 05 n° 2. Manquant : 03 §10 |
| C3 | « Offres et abonnement » n'existe que pour un compte Signature (Camille Martin). Aucun état Essentiel, Plus ou option active | MQ-016, MQ-010 | Important : 01 n° 10, 02 I8, 03 n° 10, 04 n° 13, 05 n° 6 |
| C4 | Information décisive absente avant l'achat : limites, coût total, conditions. Regroupement fait par l'auditeur, le sujet varie selon l'offre | MQ-201, MQ-203, MQ-212, MQ-219, MQ-016 | Bloquant : 01 n° 1 (5 comptes sous condition), 02 B2 (crédits de l'IA). Important : 03 n° 5 et 11, 04 n° 11 et 12, 05 n° 5 |
| C5 | Résiliation « en trois clics » et rétractation promises, jamais montrées. « Gérer l'abonnement » sort vers l'App Store sans prévenir | MQ-201, MQ-218, MQ-203, MQ-016 | Bloquant : 04 n° 2. Important : 01 n° 10, 03 n° 7, 04 n° 14. Friction : 02 §7 point 6. Constat : 05 étape 12 |
| C6 | Aide muette : « Offres, paiement et résiliation » sans lien, articles non maquettés, rien sur l'IA ni sur les options | MQ-250 | Important : 02 I9, 03 n° 8, 05 n° 10. Manquant : 01 étape 18, 04 étape 16 |
| C7 | Les mentions d'engagement (résiliation, rétractation, équivalent mensuel, coût) sont dans le style le plus petit et le plus terne : 12,5 px, gris `#83838c`, contraste estimé proche du seuil sur les cartes | MQ-201, MQ-016, MQ-115 | Important : 04 n° 9. Design : 01 §8, 02 §9, 03 §8, 05 §9 |
| C8 | Boutons d'offre peu visibles : pastilles gris foncé sur carte gris foncé, libellé de 13, environ 32 de haut à l'œil pour une zone de 44 | MQ-201, MQ-016 | Important : 02 I3. Mineur : 03 n° 13. Design : 01 §8, 04 §8 et §9, 05 §9 |
| C9 | Aucun écran d'offre hors iPhone 393 × 852 : ni petit écran, ni Android, ni pliable, ni tablette, ni texte agrandi | Page « 10 · Autres formats » | Important : 04 n° 15 (texte agrandi). Constat : 01 §9, 02 §10, 03 §9, 05 §10 |
| C10 | « Prix réglables, affichés avant tout achat » : formule interne, lue comme « le prix peut changer » | MQ-016 | Important : 03 n° 6. Mineur : 01 n° 17, 02 M9, 04 n° 19, 05 n° 12 |
| C11 | Pied de l'écran des offres : liens légaux sous l'indicateur d'accueil, « Restaurer mes achats » hors cadre, sans lien de prototype | MQ-201 | Mineur : 01 n° 13, 02 M1, 03 n° 18, 04 n° 16, 05 n° 15 |

### Cités par trois rapports

| N° | Problème | Écrans | Sources et gravité |
|---|---|---|---|
| C12 | « Jusqu'à 5 comptes » en gratuit, puis 2 comptes sans contribution anonyme | MQ-201, MQ-005 | Bloquant : 01 n° 1. Incohérence : 02 §8, 03 §7 |
| C13 | « Trois choix de même valeur » alors que l'un coûte 100 € | MQ-005 | Bloquant : 01 n° 2. Mineur : 04 n° 18, 05 n° 17 |
| C14 | L'option à 100 € n'a ni état sélectionné, ni paiement, ni confirmation. « Continuer » a un aspect désactivé | MQ-005 | Important : 05 n° 11. Mineur : 01 n° 20, 04 n° 18 |
| C15 | Les options Famille et Société sont absentes de l'écran des offres | MQ-201 | Important : 03 n° 9, 05 n° 7. Incohérence : 01 §7 |
| C16 | Ni offre mensuelle ni période d'essai | MQ-201, MQ-016 | Important : 01 n° 7, 02 I2. Manquant : 04 §10 |
| C17 | La croix de l'écran des offres mène au choix Essentiel, donc à une nouvelle décision | MQ-201, MQ-005 | Mineur : 01 n° 14. Friction : 02 §7 point 1, 04 §6 |
| C18 | Sous le voile de la feuille, « Choisir Plus » et « Choisir Signature » restent reliés à l'accueil vide | MQ-218 | Mineur : 01 n° 21, 03 n° 20. Incohérence : 05 §8 |

### Cités par deux rapports

| N° | Problème | Écrans | Sources et gravité |
|---|---|---|---|
| C19 | Abonnement Plus activé sans récapitulatif ni confirmation : un toucher engage 40 € | MQ-203 → MQ-220 | Bloquant : 01 n° 3, 04 n° 1. Les deux seuls rapports passés par ce chemin |
| C20 | Options Famille et Société non achetables : une demi-ligne de note, aucun bouton, aucun écran de contenu | MQ-016, MQ-177 | Bloquant : 03 n° 1 à 4, 05 n° 1 à 3. Les deux seuls rapports sur les options |
| C21 | Double authentification imposée après le paiement, en jargon, sans « Plus tard ». Icône du bouton d'aspect cassé. Écran de création de la clé absent | MQ-220 | Important : 01 n° 9, 04 n° 10. Mineur : 04 n° 21 |
| C22 | « Comptes illimités » contre « Jusqu'à 10 connexions bancaires » | MQ-201, MQ-203 | Important : 01 n° 6, 04 n° 11 |
| C23 | Le renouvellement n'est pas dit automatique, sans montant ni rappel | MQ-218 | Important : 01 n° 8, 04 n° 7 |
| C24 | Pas de bouton « Annuler » sur la feuille de confirmation | MQ-218 | Important : 01 n° 8, 04 n° 5 |
| C25 | Une ou deux confirmations ? « Confirmer avec Face ID » puis « feuille de l'App Store, avec Face ID » | MQ-218, MQ-219 | Important : 02 I10, 04 n° 6 |
| C26 | Annuaire : mentions « Connexion · fichier », « Clé · fichier », « Connexion · PDF » sans légende. Lignes et pastilles sans lien | MQ-036 | Important : 04 n° 12 (assurance vie). Mineur : 01 n° 18, 04 n° 23 |
| C27 | « Étape 2 sur 3 » sans étape 1. Agrégateur non nommé | MQ-037 | Mineur : 01 n° 19, 04 n° 20 |
| C28 | Mentions légales de l'inscription non reliées | MQ-001, MQ-002 | Mineur : 01 n° 15, 04 n° 22 |
| C29 | Feuille de confirmation rangée sous l'écran des offres, visible au défilement | MQ-201 | Mineur : 02 M2, 04 n° 17 |
| C30 | Détails de MQ-016 : décalage de 2 px de la carte active (01 n° 17, 03 n° 14), prix coupé « 30 €/ » puis « an » (03 n° 12, 05 n° 13), « Signature renouvelée » pour une date future (04 n° 19, 05 n° 14) | MQ-016 | Mineur |

### Les plus graves

Croisement de la fréquence et de la gravité :

1. **C2** : aucun achat ne se termine par une confirmation (cinq rapports, bloquant dans quatre).
2. **C1** : aucun parcours d'offre sur le web (cinq rapports, bloquant dans quatre).
3. **C19** : abonnement Plus activé en un toucher (bloquant dans les deux rapports qui ont pris ce chemin).
4. **C20** : options Famille et Société impossibles à acheter (bloquant dans les deux rapports concernés).
5. **C4** et **C5** : ce qui décide l'achat (limites, coût total, résiliation) arrive après le paiement ou jamais (cinq rapports, bloquant dans 01, 02 et 04).

## 3. Problèmes bloquants, par rapport

- **01** : promesse « 5 comptes » conditionnelle (n° 1) ; « Trois choix de même valeur » et contribution non expliquée (n° 2) ; MQ-203 → MQ-220 sans récapitulatif (n° 3) ; aucun écran de confirmation d'achat (n° 4).
- **02** : un versement « programmé » est un rappel, dit après l'achat seulement (B1) ; modèle de coût de l'IA invisible avant l'achat (B2) ; boucle MQ-219 → MQ-025 → MQ-212 (B3) ; parcours absent sur ordinateur (B4).
- **03** : option Famille non achetable (n° 1) ; aucun écran sur ce que voit chacun (n° 2) ; MQ-177 vide (n° 3) ; aucun parcours d'invitation (n° 4).
- **04** : MQ-203 → MQ-220 sans confirmation (n° 1) ; résiliation expliquée nulle part (n° 2) ; aucune confirmation après l'achat (n° 3) ; parcours web non conçu (n° 4).
- **05** : option Société non achetable (n° 1) ; aucun écran d'achat d'option (n° 2) ; aucun écran de ce que fait l'option (n° 3) ; cinq écrans web vides (n° 4).

## 4. Contradictions entre rapports

| N° | Sujet | D'un côté | De l'autre | À trancher |
|---|---|---|---|---|
| K1 | Écran des offres sans action mise en avant (MQ-201) | Point fort, preuve de neutralité : 01 §4, 04 §4 | Défaut de hiérarchie, demande d'un bouton principal : 02 I3 et Top 5 n° 5, 03 §8 | Choix de produit. Piste commune : des boutons plus visibles, sans en privilégier un (04 Top 5 n° 5, 05 §9) |
| K2 | Feuille de confirmation MQ-218 | Bon modèle à réutiliser pour les options : 03 §4, 05 §5 et §10 | À refaire : pas de bouton « Annuler », renouvellement non dit automatique, double confirmation floue : 01 n° 8, 04 n° 5 à 7 et Top 5 n° 3 | Corriger MQ-218 avant de la décliner, sinon ses défauts se propagent |
| K3 | Équivalent mensuel « soit 3,33 € par mois » | Clair : 01 §4, 03 §4, 05 §5 | Ambigu, fait croire à un prélèvement mensuel : 04 n° 8. Affiché alors que seul l'annuel existe : 02 I2 | Garder l'équivalent, écrire que le paiement est annuel |
| K4 | Mention « Résiliation en trois clics, rétractation de 14 jours » | Rassurante : 01 §4, 02 §5, 03 §4 | Promesse non tenue, bloquante : 04 n° 2. Non maquettée : 01 n° 10. Mot « clics » maladroit sur iPhone : 05 n° 16 | La mention plaît, la démarche manque |
| K5 | « Gérer l'abonnement » ouvre l'App Store (MQ-016) | « Correct » : 02 étape 14 | Sortie non annoncée : 03 n° 7. « Échec » : 04 étape 15 | Dépend du persona. À annoncer dans tous les cas |
| K6 | Gravité de « Trois choix de même valeur » (MQ-005) | Bloquant, point d'abandon : 01 n° 2 | Mineur : 04 n° 18, 05 n° 17 | Bloquant pour le persona qui tient dans la limite gratuite |
| K7 | Bouton gratuit sous le bouton payant (MQ-203) | Point fort : 01 §4, 04 §4 | 8 px d'écart, achat déclenché par erreur : 04 §9 | Garder l'alternative, écarter les boutons, ajouter la confirmation (C19) |
| K8 | Zones sous le voile de MQ-218 | Sans effet : 01 n° 21 | Un toucher mal placé saute le paiement : 03 n° 20. À vérifier : 05 §8 | À vérifier en jouant le prototype |
| K9 | Liens de prototype de la page Web | 2 liens : 03 §2, 04 n° 4 | Aucun : 05 §1 et n° 4 | À recompter dans le fichier |
| K10 | Mesures du pied de MQ-201 | Contenu jusqu'à y = 914, « Restaurer mes achats » à y = 860 : 01 n° 13 et §9, 03 n° 18, 05 n° 15 | Liens jusqu'à y = 890, « Restaurer mes achats » de y 846 à 890 : 02 M1, 04 §9. Feuille rangée à partir de y 852 (02 M2) ou de y 884 (04 n° 17) | Écart de mesure. Le constat C11 reste commun |
| K11 | Dates de renouvellement (16 nov. 2027, 2 oct. 2027) | Incohérentes avec la démonstration : 02 §8 | Deux contextes, acceptable : 05 §8 | Mineur |
| K12 | Cibles tactiles | 44 points partout où un lien existe : 01 §4, 02 §5, 05 §5 | Trop juste sur le champ de recherche de MQ-250 et les lignes de MQ-079 (pas d'environ 42 px) : 03 §9 | Écrans différents. À mesurer sur MQ-079 et MQ-250 |
| K13 | Onglet LiVi IA sans Signature (MQ-212) | Perçu comme de la vente : 01 n° 11 | « Bonne page d'explication », mais formule trompeuse : 02 étape 4 | Dépend du persona |

## 5. Problèmes propres à un persona

### 01 · Léa, jeune active

- Les arguments de Plus ne parlent pas à une débutante. « Analyses et statistiques avancées » est vide de sens (01 n° 5).
- Limite de 5 enveloppes de budget en Essentiel, découverte en route (01 n° 6).
- Le choix de l'offre arrive avant d'avoir vu un seul écran utile (01 n° 7).
- La contribution anonyme n'est pas expliquée sur MQ-005. Le détail rassurant est dans MQ-015, sans lien (01 n° 2).
- Objectifs d'épargne introuvables : MQ-047 rangé dans les analyses, « Créer un objectif » sans lien, écran de création absent (01 n° 12).
- « Enveloppe » désigne une catégorie de budget (MQ-211) et un type de compte (MQ-031, MQ-216) (01 §7).
- « Créer une enveloppe à la main » mène au budget proposé (MQ-217 → MQ-211) (01 étape 8).
- Sans Plus, l'import compte 5 étapes, et personne ne le dit (01 §6).
- Icône « Assurance vie » décalée sur MQ-025 (01 n° 16).

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

### 04 · Michel, retraité

- Texte agrandi non maquetté sur les écrans d'offre (04 n° 15).
- 8 px entre le bouton payant et le bouton gratuit de MQ-203 (04 §9).
- Couverture de l'assurance vie par Plus incertaine : « Connexion · PDF » pour Horizon Vie, ligne sans lien (04 n° 12).
- « 40 €/an, soit 3,33 € par mois » lu comme un prélèvement mensuel (04 n° 8).
- Modalités de la rétractation absentes (04 n° 14). Écran de la banque manquant (04 étape 13).
- Montants de MQ-204 en 13 px, petits pour lui (04 étape 14).

### 05 · Nadia, indépendante

- Web : 42 cadres sur 45 sont des gabarits vides, aucun mode de paiement hors App Store (05 §1, §8).
- MQ-149 : aucune entrée vers les offres, le compte ou la société. Avatar sans lien (05 n° 8).
- MQ-031 : aucun moyen de marquer un compte comme professionnel. Les mots professionnel, micro, indépendant sont absents du fichier (05 n° 9).
- Aucun écran ne montre ce que livre l'option Société (05 n° 3).
- Gabarits web MQ-224, MQ-232 et MQ-180 avec la même ligne de codes « STA-05 · SEC-03 · PAT-09 » (05 §8).
- MQ-149 : deux tiers de l'écran vides, écran bureau proche d'un écran iPhone étiré (05 §9).
- Jeu de données sans cas d'indépendante (05 §7).

## 6. Parcours trop similaires

### 01 et 04 : redite forte

- Même offre visée (Plus). Les objectifs par défaut des fiches 01 et 04 ciblent tous deux Plus.
- Les 15 écrans du parcours 04 figurent tous dans le parcours 01, dans le même ordre : MQ-001, 002, 201, 005, 025, 036, 202, 203, 220, 037, 204, 010, 016, 250. Seule MQ-218 change de place (variante en fin de parcours dans 01).
- Constats identiques : C19, C21 à C24, C26 à C28. Les quatre bloquants de 04 figurent dans 01, dont deux au même niveau (01 n° 3 et n° 4).
- Formulations proches : « Le meilleur écran du parcours » pour MQ-037 (01 étape 14, 04 étape 12) ; « ligne verte de 12,5 » (01 étape 13, 04 étape 11) ; « Je subis » et « Subit » sur MQ-220.
- Le rapport 04 déclare n'avoir consulté aucun autre rapport (04, en-tête). Rien n'indique une copie : la redite vient de l'objectif.
- Apports propres à 04 : résiliation, texte agrandi, proximité des boutons, assurance vie. Apports propres à 01 : budget, enveloppes, épargne, onglet LiVi IA.

### 03 et 05 : redite partielle

- Même mur : l'option n'existe que dans la note de MQ-016. Même score (2 / 10), même formule « demi-ligne de note grise » (03 §1, 05 §1).
- Même cœur iPhone, dans le même ordre : MQ-024 → MQ-010 → MQ-016 → MQ-250, puis MQ-177.
- Top 5 n° 1 presque identique : un bloc « Options » avec une carte par option et une feuille calquée sur MQ-218.
- Apports propres à 05 : entrée par le web, contournements (MQ-029, MQ-031, MQ-093). Apports propres à 03 : partage entre conjoints, sécurité et sessions.

### 02 : parcours distinct

Le cœur du rapport (MQ-219, MQ-115 à MQ-124) n'est couvert par aucun autre. Pas de redite.

## 7. Points à vérifier hors rapports

- `docs/design/figma.md` (lot « Restes des audits du 20 novembre ») cite les liens « Conditions d'utilisation », « Confidentialité » et « Restaurer mes achats » de MQ-201 parmi les corrections à valider depuis le 26 novembre 2026. Les cinq rapports du même jour signalent encore ce défaut (C11). À vérifier : correction non visible, ou tests faits sur une version antérieure.
- Les contradictions K8, K9, K10 et K12 demandent une mesure dans le fichier ou un prototype joué.

## Rapports à relancer

Les objectifs déjà testés ne sont pas réutilisés tels quels. Les rapports 01 et 03 restent les références de leur parcours.

| Priorité | Rapport à relancer | Trop proche de | Objectif différent proposé |
|---|---|---|---|
| 1 | 04 · Michel Garnier | 01 · Léa Fontaine | Sans souscrire, obtenir son total en Essentiel : ajouter son compte courant, son assurance vie ancienne (fichier PDF ou saisie) et son appartement loué, avec le texte agrandi de l'iPhone. Source : fiche 04 (« combien il possède en tout », « texte agrandi »). Couvre l'ajout sans connexion automatique et les biens, absents des cinq rapports (02 §11, 04 n° 12) |
| 2 | 05 · Nadia Rousseau | 03 · Sophie Moreau (partie iPhone) | Sur iPhone et en Essentiel, sans option : ajouter un compte professionnel et un compte personnel de deux banques par import de fichier, puis prévoir ses charges dans le budget avec des revenus irréguliers. Source : fiche 05 (« séparer le pro du perso, prévoir ses charges et lisser ses revenus »). Couvre l'import en 5 étapes (MQ-034) et le budget, que personne n'a joués en entier (01 §6) |

À rejouer plus tard, une fois les écrans conçus : la résiliation d'une offre (C5) et l'achat d'une option (C20). Les tester avant donnerait le même résultat.

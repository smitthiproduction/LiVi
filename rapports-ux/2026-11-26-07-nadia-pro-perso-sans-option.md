# Test UX persona — Nadia Rousseau : séparer le pro du perso et prévoir ses charges, sans option payante

- Date : 26 novembre 2026
- Persona : Nadia Rousseau, 34 ans, graphiste indépendante (micro-entrepreneuse), Marseille
- Maquette : fichier Figma « LiVi — Maquettes » (clé `cR7EtAZKpKCkgOoEqcJ8Wq`), pages « Parcours iPhone », « 10 · Autres formats », « 11 · Web »
- Testeur : agent « UX Persona Tester », toile vierge (aucun autre rapport ni document du projet lu)

## 1. Résumé et score

**Score : 4 / 10.**

Objectif atteint à moitié sur iPhone, pas du tout sur ordinateur.

- **Sur le web, mon outil de travail, il n'y a rien à tester.** 42 cadres sur 45 de la page « 11 · Web » ne contiennent que la coque de navigation et la mention « À concevoir ». Seuls MQ-149 (Tableau de bord), MQ-261 et MQ-263 sont dessinés. L'import (MQ-154, MQ-155, MQ-156, MQ-229), le budget (MQ-158), les règles (MQ-159), les offres (MQ-224, MQ-232) et l'ajout d'établissement (MQ-225 à MQ-227) sont vides. Aucun prototype web.
- **Sur iPhone, l'import d'un relevé est le meilleur moment du parcours** : cinq étapes numérotées, gratuit, sans limite de date, fichier lu sur le téléphone, doublons jamais écartés sans mon accord, chemin complet pour une banque non listée.
- **« Séparer le pro du perso » n'existe pas dans le produit.** Aucun des cadres iPhone ne contient les mots « professionnel », « pro », « activité », « indépendant », « cotisation », « URSSAF » ou « charges » (recherche sur tous les textes de la page). La seule piste est une option payante « Société, 60 €/an », citée sur une ligne en bas de MQ-016, sans explication.
- **« Prévoir mes charges » s'arrête à une proposition d'enveloppes** (MQ-211) calculée sur trois mois de dépenses, limitée à 5 enveloppes en Essentiel, sans revenu, sans charge trimestrielle ou annuelle, et dont le bouton « Valider ce budget » ne mène nulle part dans le prototype.
- **Les limites de l'offre gratuite se découvrent au fil de l'eau** : 5 comptes annoncés (MQ-201), puis 2 si je refuse de contribuer (MQ-005), puis 5 enveloppes de budget (MQ-211), puis une lecture de PDF comptée en crédits IA (MQ-039).

Verdict dans le personnage : j'importe mon relevé pro sur l'iPhone, je regarde le budget proposé, je constate qu'il mélange mes deux comptes et qu'il ne sait rien de mes cotisations, j'ouvre l'ordinateur pour faire ça sérieusement, et je m'arrête là.

## 2. Contexte persona et méthode

**Qui je suis.** Deux comptes dans deux banques (un pro, un perso), un PER ouvert l'an dernier, des revenus irréguliers. Je veux voir mon activité à part, provisionner mes charges et lisser mes mois creux. Je travaille sur ordinateur, j'ai un iPhone, je regarde le design de près. Je me méfie des outils pensés pour les salariés et des options payantes floues.

**Objectif du test.** Sans rien acheter : séparer mon activité professionnelle de mes comptes personnels (en important le relevé du compte pro), puis prévoir mes charges dans le budget.

**Ce que j'ai réellement examiné** (15 appels Figma, quota partagé, lecture seule) :

| Matière | Portée |
|---|---|
| Inventaire des pages et cadres | Les trois pages de parcours : 162 cadres iPhone en 9 sections, 29 cadres « Autres formats », 45 cadres Web |
| Textes, tailles de police, liens de prototype | 35 cadres iPhone du parcours et 15 cadres Web |
| Recherche de mots-clés | Tous les textes de la page « Parcours iPhone » |
| Contraste texte/fond (estimation) | 18 cadres iPhone et MQ-149 |
| Captures vues à l'image | MQ-005, MQ-211, MQ-149 |

**Limites à connaître avant de lire la suite.**

- Trois écrans seulement ont été vus à l'image. Pour les autres, je juge le contenu, la hiérarchie de l'information, les tailles et les liens, pas les alignements ni les espacements. Les captures larges des sections 01, 02 et 06 ont été générées mais n'ont pas pu être téléchargées (hôte `www.figma.com` refusé par le proxy de la session, code 403).
- Le prototype iPhone existe (14 flux, 418 interactions). Je ne l'ai pas joué dans un lecteur : j'ai lu ses liens dans le fichier. Tout ce qui concerne le geste, le défilement et l'usage à une main est une estimation sur maquette statique.
- Le contraste n'a pu être mesuré que sur les textes dont le fond est identifiable dans la structure (3 à 21 textes par cadre) : c'est un sondage, pas un audit.
- Non ouverts : MQ-218, MQ-219, MQ-220 (paiement, hors objectif puisque je n'achète rien), MQ-010 (profil), MQ-122 (catégorisation assistée), MQ-077 (échéancier consolidé), MQ-069 (calendrier des revenus).

**Options testées.** Offres (MQ-201, MQ-005, MQ-016), menu Ajouter (MQ-029, MQ-244), annuaire et choix de méthode (MQ-036, MQ-202), feuille d'incitation à Plus (MQ-203), import avec et sans préréglage (MQ-034, MQ-205, MQ-206, MQ-035, MQ-207, MQ-208, MQ-251 à MQ-253, MQ-257 à MQ-259), saisie à la main (MQ-031), budget (MQ-217, MQ-211, MQ-079, MQ-080, MQ-089, MQ-085, MQ-086, MQ-095, MQ-081), étiquettes (MQ-093), aide (MQ-250), web (15 cadres). Filtres de l'annuaire : présents mais non reliés. Panier : sans objet. Paiement : non testé volontairement.

## 3. Tableau du parcours

| # | Écran | Ce que je fais | Ce que je trouve | Verdict |
|---|---|---|---|---|
| 1 | MQ-148 Web · Se connecter | J'ouvre LiVi sur l'ordinateur | Cadre vide, « À concevoir » | Bloquant |
| 2 | MQ-224, MQ-225, MQ-154 à MQ-156, MQ-229, MQ-158 Web | Je cherche offres, import et budget | Tous « À concevoir » | Bloquant, je passe sur iPhone |
| 3 | MQ-201 Présentation des offres | Je lis les trois offres | Essentiel gratuit : 5 comptes, import sans limite de date, budget automatique. Bouton « Continuer avec Essentiel » en premier | Clair |
| 4 | MQ-005 Essentiel gratuit | Je dois choisir entre contribuer, ne pas contribuer, ou payer 100 € | Sans contribution : 2 comptes. J'en ai 3. Aucun choix présélectionné, bouton « Continuer » d'aspect inactif | Doute sérieux |
| 5 | MQ-025 Accueil vide | « Ajouter un établissement » | Les trois méthodes sont annoncées, la payante est nommée | Clair |
| 6 | MQ-036 puis MQ-202 Annuaire et méthode | Je choisis ma banque, puis « Importer un fichier » | « Connecter automatiquement » est étiqueté « offre Plus » avant le clic | Clair |
| 7 | MQ-203 Connexion incluse dans Plus | Je touche la connexion par curiosité | Prix affiché, sortie gratuite « Importer un fichier à la place » | Honnête |
| 8 | MQ-034 Import, étape 1 | Je dépose le relevé du compte pro | Fichier déjà choisi, compte de destination « Compte courant » déjà rempli, liens « Changer » inertes | Friction : où dis-je que c'est mon compte pro ? |
| 9 | MQ-205, MQ-206 Réglages et correspondance | Je vérifie | Lisible, exemples tirés de mon fichier | Bon |
| 10 | MQ-035 Aperçu et doublons | J'écarte 2 doublons | Rien n'est écarté sans mon choix | Bon |
| 11 | MQ-207 Import terminé | « Voir le budget proposé » | 8 410 opérations, 37 à catégoriser, pas de lien direct pour les traiter | Correct |
| 12 | MQ-211 Budget proposé | Je cherche mes charges pro | 5 enveloppes de dépenses courantes, tous comptes mélangés, montants non modifiables à l'écran, « Valider ce budget » sans lien | Objectif non atteint |
| 13 | MQ-079 Budget du mois | Je regarde à quoi ça ressemblera | 8 enveloppes (donc un budget Plus ou Signature), aucun filtre par compte, aucun revenu, aucune charge à venir | Pas pour moi |
| 14 | MQ-089 Budget : opérations | Je cherche un tri pro/perso | Filtre « Tous les comptes » : seul levier de séparation, limité à la liste | Partiel |
| 15 | MQ-016 Offres et abonnement | Je cherche si « pro » est une option | « Société, 60 €/an » sur une ligne, sans description ; écran dessiné pour un abonné Signature | Flou |
| 16 | MQ-250 Aide | Je cherche « professionnel » ou « budget » | Quatre questions génériques, rien sur le sujet, articles non reliés | Abandon |

## 4. Points forts

- **Import gratuit, vraiment (MQ-034, MQ-201, MQ-025).** « Import de fichiers sans limite de date » est écrit dans l'offre gratuite, répété sur l'accueil vide et à l'étape 1. C'est l'argument qui me ferait rester.
- **Confidentialité dite simplement (MQ-034, MQ-251).** « Le fichier est lu sur votre iPhone et n'est envoyé nulle part. »
- **Étapes numérotées et nommées (MQ-034 à MQ-207).** « ÉTAPE 2 SUR 5 · RÉGLAGES DE LECTURE » : je sais où j'en suis.
- **Doublons sous mon contrôle (MQ-035, MQ-257).** Motif de chaque doublon expliqué, choix de portée, bouton qui annonce exactement ce qu'il va faire (« Écarter 2 doublons et importer »).
- **Banque non listée traitée de bout en bout (MQ-208, MQ-251 à MQ-253, MQ-257 à MQ-259).** Utile pour un compte pro dans une petite banque ou une néobanque.
- **L'option payante est étiquetée avant le clic (MQ-202) et la sortie gratuite est proposée dans la feuille d'incitation (MQ-203).** Pas de piège.
- **PER présent dans les types de compte (MQ-031).**
- **Transferts internes neutralisés (MQ-095).** « Ni une dépense, ni un revenu » : c'est la bonne logique pour mes virements du compte pro vers le perso, même si l'exemple montré est un versement sur PEA.
- **Cibles tactiles tenues.** Toutes les zones interactives relevées sur les 35 cadres font 44 points ou plus (44 à 90).
- **Contraste.** Aucun texte sous le seuil AA dans le sondage (ratios minimaux de 4,5 à 7,6 selon l'écran).
- **Tenue visuelle (MQ-005, MQ-211, MQ-149).** Thème sombre sobre, cartes arrondies cohérentes, un seul bouton principal par écran, typographie nette.

## 5. À ajuster

### Bloquant

1. **Web non conçu (MQ-148, MQ-153 à MQ-159, MQ-177, MQ-224 à MQ-229, MQ-232 et 26 autres).** 42 cadres sur 45 sont des gabarits vides. Pour une personne qui gère ses comptes sur ordinateur, le produit n'existe pas encore.
2. **Aucun moyen de désigner un compte ou une opération comme professionnels.** Pas de type « Compte professionnel » dans MQ-031, pas d'usage pro/perso à l'import (MQ-034), pas de vue séparée. Le mot n'apparaît nulle part sur iPhone.
3. **Le budget mélange tous les comptes (MQ-211, MQ-079).** Aucun filtre par compte, aucune exclusion d'un compte, aucun budget par espace. Mes logiciels et mon matériel se retrouvent dans « Autres dépenses » avec mes restaurants.
4. **« Valider ce budget » (MQ-211) n'a aucun lien de prototype**, pas plus que le segment « Opérations » du même écran. Le parcours d'un nouvel utilisateur gratuit s'arrête là.
5. **Aucun écran pour ajuster ou créer une enveloppe.** MQ-217 promet « Vous les ajustez ensuite » ; MQ-211 n'offre ni chevron, ni champ, ni bouton d'ajout. « Créer une enveloppe à la main » (MQ-217) renvoie vers MQ-211, c'est-à-dire vers la proposition automatique.

### Important

6. **Limites d'Essentiel révélées par morceaux.** MQ-201 annonce « Jusqu'à 5 comptes » et « Budget et catégories automatiques ». MQ-005 ramène à 2 comptes sans contribution. MQ-211 révèle « Essentiel : 5 enveloppes, le reste regroupé », noyé au milieu d'un texte d'aide. Ces trois limites doivent figurer dans MQ-201.
7. **« Trois choix de même valeur » (MQ-005) est inexact.** L'un des trois divise par 2,5 le nombre de comptes. Avec un compte pro, un perso et un PER, « Ne pas contribuer » m'est fermé : mon vrai choix est entre partager des compteurs et payer 100 €.
8. **« Compteurs anonymes » non expliqués (MQ-005).** Aucun exemple, aucun lien « En savoir plus ». La note de bas d'écran m'apprend que mes données importées sont justement celles qui sont comptées, sans me dire lesquelles.
9. **État de MQ-005 ambigu.** Aucune option cochée, bouton « Continuer » gris, et pourtant le prototype laisse continuer. Il manque l'état sélectionné.
10. **PDF annoncé gratuit, facturé en crédits IA.** Le menu Ajouter (MQ-029, MQ-244) dit « CSV, Excel ou PDF, sans limite de date ». MQ-039 affiche « lu par LiVi IA · 4 crédits, 0,04 € ». MQ-202 ne cite que « CSV ou Excel ». Beaucoup de banques pro ne donnent que des PDF : il faut dire clairement si la lecture PDF est incluse dans Essentiel.
11. **Compte de destination non maîtrisable (MQ-034, MQ-251).** Il est prérempli (« Compte courant »), le lien « Changer » est inerte, et rien ne permet de nommer le compte (« Pro », « Perso »). Le sélecteur de fichier manque aussi : l'étape 1 commence fichier déjà choisi.
12. **Le budget ignore les revenus et le calendrier d'un indépendant (MQ-211, MQ-079).** Base de calcul : trois mois de dépenses. Pas de revenu attendu, pas de charge trimestrielle ou annuelle, pas de provision, pas de lissage. Le seul élément tourné vers l'avenir est la liste des abonnements mensuels (MQ-086).
13. **Réglages du budget introuvables.** MQ-079 renvoie à des « réglages du budget » pour le report du solde ; aucun cadre ne porte ce nom.
14. **État d'après import incohérent.** Depuis MQ-211, l'onglet « Accueil » ramène à MQ-025 (accueil vide, 0,00 €) et l'onglet « Budget » à MQ-217 (budget vide), alors que 8 410 opérations viennent d'être importées. L'accueil d'un utilisateur gratuit avec un seul compte importé n'est pas dessiné.
15. **Opérations à catégoriser : la sortie passe par l'IA.** Dans MQ-089, les trois opérations « À catégoriser » mènent à MQ-122, cadre de la section « LiVi IA » (offre Signature). Je n'ai pas ouvert MQ-122 ; si c'est bien une fonction payante, le chemin manuel gratuit manque à cet endroit.
16. **MQ-016 n'existe que pour un abonné Signature.** Pas de variante « Votre offre : Essentiel ». Les options y tiennent en une ligne, avec la mention « Prix réglables », qui est du vocabulaire interne.

### Mineur

17. **MQ-211 : le montant de l'enveloppe est moins visible que son libellé** (gris, à droite, graisse normale) alors que c'est la donnée à valider.
18. **MQ-211 : sous-titres de format variable** (« Moyenne : 446,10 € » puis « Électricité, gaz, eau · 194,70 € » puis une simple liste pour « Autres dépenses »).
19. **MQ-201 : « Restaurer mes achats » et les liens légaux tombent sous le bord du cadre** (ordonnée 860 pour un cadre de 852, contenu rogné). À vérifier en défilement.
20. **MQ-207 et MQ-258 : « Annuler l'import » reste proposé après « Import terminé »**, sans écran de confirmation. Le libellé devrait dire qu'il supprime les opérations importées.
21. **MQ-005 : barre de titre « Essentiel gratuit » et titre « Votre choix pour Essentiel » se répètent** ; grand vide entre la note et le bouton.
22. **MQ-203 : « Jusqu'à 10 connexions bancaires » à côté de « Comptes illimités »** demande une phrase d'explication.
23. **Nombre de lignes** : MQ-251 annonce 1 236 lignes pour 1 235 opérations (en-tête déduit), MQ-034 annonce 8 412 lignes pour 8 412 opérations.
24. **Texte secondaire à 12 points** sur la plupart des écrans : acceptable, mais trop discret pour des limites d'offre (MQ-211, MQ-005, MQ-016).

## 6. Frictions vécues dans le personnage

- **« C'est pour moi, cet outil ? »** Les données d'exemple parlent d'un salarié investisseur : « Salaire Atelier Nord +2 840,00 € » (MQ-035), PEA, assurance vie, dividendes. Pas une facture client, pas une cotisation. Mon frein numéro un est confirmé dès l'aperçu d'import.
- **Le moment où je me sens coincée : MQ-005.** On m'a dit « 5 comptes, gratuit » un écran plus tôt. Maintenant c'est « 5 comptes si vous contribuez, sinon 2, ou 100 € ». Je ne paie pas, donc je contribue, sans savoir à quoi.
- **Le moment où je décroche : MQ-211.** Je venais prévoir mes cotisations et ma CFE. On me propose « Courses 450 € ». Je ne peux ni ajouter « Charges pro », ni changer un montant, ni valider.
- **Le moment où j'abandonne : l'ordinateur.** Tableau de bord seul, le reste vide.
- **Doute sur « Société, 60 €/an » (MQ-016).** Est-ce l'option qu'il me faut pour séparer mon activité ? Je suis micro-entrepreneuse, pas une société. Rien ne le dit, et la consigne est de ne rien acheter.
- **Aide muette (MQ-250).** Quatre questions fréquentes, toutes « En ligne », aucune sur le budget ni sur un usage professionnel.

## 7. Incohérences

| Écrans | Incohérence |
|---|---|
| MQ-201 / MQ-005 | « Jusqu'à 5 comptes » puis « limité à 2 comptes » selon le choix de contribution |
| MQ-201 / MQ-211 | « Budget et catégories automatiques » sans réserve, puis « 5 enveloppes, le reste regroupé » |
| MQ-211 / MQ-079 | Budget proposé à 5 enveloppes, budget du mois montré à 8 : la version Essentiel du budget du mois n'est pas dessinée |
| MQ-029, MQ-244 / MQ-202 / MQ-039 | « CSV, Excel ou PDF » / « CSV ou Excel » / PDF lu par l'IA contre des crédits |
| MQ-217 | « Créer une enveloppe à la main » mène au budget proposé automatiquement |
| MQ-207 → MQ-211 → onglets | Après un import réussi, les onglets ramènent aux états vides MQ-025 et MQ-217 |
| MQ-035 | Doublon « déjà présent par la connexion » dans un parcours gratuit sans connexion, démarré depuis un accueil vide |
| MQ-005 | Bouton d'aspect inactif mais lien actif ; aucune option sélectionnée |
| MQ-149 | « Importer » dans la barre du haut et « Import » dans le menu latéral : deux entrées pour la même action |
| MQ-149 | « Tout voir · 6 » au-dessus de trois établissements, sans indication que la liste est tronquée |

## 8. Design

Jugement limité aux trois écrans vus à l'image.

**MQ-005 (iPhone).** Mise en page propre : trois cartes de même taille, prix alignés à droite et de même graisse (« Gratuit », « 100 € une fois »), ce qui tient la promesse d'égalité de traitement visuel. La hiérarchie est bonne. Le bouton gris sans état actif laisse croire à un blocage. Le tiers inférieur de l'écran est vide : la place existe pour expliquer les compteurs.

**MQ-211 (iPhone).** Segment « Budget / Opérations / Abonnements » lisible, encart d'information distinct par sa teinte, liste aérée, bouton principal blanc bien détaché, barre d'onglets flottante soignée. Défauts : la limite d'offre est enfouie dans l'encart, les montants sont visuellement secondaires, rien n'indique qu'une ligne est modifiable, aucun total ni revenu en regard des 1 800 €.

**MQ-149 (web).** C'est l'accueil iPhone étiré, pas un poste de travail. La moitié basse de l'écran est vide (rien sous l'ordonnée 640 sur 1 024). La courbe n'a ni axe, ni valeur, ni date, et son point final est rogné au bord droit. Aucun bloc budget, aucune opération récente, aucun rappel « à catégoriser », aucune indication de l'offre en cours. Le menu latéral est clair et bien espacé ; l'entrée « Import » porte une icône « plus » qui évoque plutôt « Ajouter ». Pour quelqu'un de sensible au design, la base graphique est bonne et l'écran est inachevé.

**Mesures sur les 35 cadres iPhone.** Police minimale de 12 à 12,5 points (16 sur MQ-031), aucun texte sous 11 points. Contraste minimal sondé : 4,5 à 4,6 sur MQ-036, MQ-202, MQ-203, MQ-201, MQ-035 et MQ-016, soit la limite AA pour du petit texte ; 5,0 à 7,6 ailleurs.

## 9. Mobile

Estimation sur maquette statique : le prototype existe mais ses liens ont été lus dans le fichier, pas joués au doigt.

- **Une main.** Les boutons principaux de l'import sont en bas d'écran (54 à 56 points de haut) : bon. « Valider ce budget » (MQ-211) est dans la zone du pouce. Le bouton retour (44 points, en haut à gauche) et le segment du budget (en haut) demandent un changement de prise sur un iPhone de 6,1 pouces.
- **Cibles tactiles.** 44 points ou plus partout dans l'échantillon ; onglets de 47 points ; lignes de liste de 68 points.
- **Défilement.** MQ-201 dépasse la hauteur de l'écran (liens légaux et « Restaurer mes achats » sous le pli) ; les trois offres avec leurs boutons tiennent au-dessus. MQ-207 empile trois boutons en bas d'écran, dont un destructif (« Annuler l'import ») à 54 points des deux autres : risque de fausse manœuvre.
- **Saisie.** La correspondance des colonnes (MQ-206, MQ-253) sur 393 points de large tient en liste, ce qui est le bon choix. Les listes de valeurs à choisir (champ LiVi d'une colonne, séparateur, format de date) ne sont pas dessinées.
- **Autres formats.** 17 des 29 cadres de la page « 10 · Autres formats » sont « À concevoir », dont le budget sur tablette (MQ-140) et le budget sur Android compact (MQ-131). Aucun lien de prototype sur cette page.

## 10. Éléments manquants

Signalés comme manquants, sans supposer leur contenu.

**Web**
- Contenu de 42 cadres sur 45, dont MQ-148, MQ-153 à MQ-159, MQ-177, MQ-224 à MQ-229, MQ-232.
- Tout prototype web (deux interactions « retour » seulement).

**Séparation pro/perso**
- Un type ou un attribut « professionnel » pour un compte.
- Un filtre par compte ou par espace dans le budget.
- Une description de l'option « Société » et de ce qu'elle apporte par rapport à l'offre gratuite.

**Budget**
- Écran de modification d'une enveloppe (montant, nom, catégories regroupées).
- Écran de création d'une enveloppe à la main.
- « Réglages du budget » cités par MQ-079.
- Budget du mois en version Essentiel (5 enveloppes).
- Revenus attendus, charges non mensuelles, provision ou lissage.
- Destination de « Valider ce budget » et du segment « Opérations » sur MQ-211.

**Import**
- Sélecteur de fichier.
- Choix, création et nommage du compte de destination (liens « Changer » de MQ-034 et MQ-251).
- Confirmation d'annulation d'un import terminé.
- États d'erreur : fichier illisible, colonnes non reconnues, fichier vide.
- Lien « Modifier » des réglages retenus (MQ-207, MQ-258).

**Offres et compte**
- État sélectionné de MQ-005 et explication des compteurs anonymes.
- MQ-016 pour un utilisateur Essentiel.
- Message affiché quand la limite de comptes ou d'enveloppes est atteinte.

**Liens de prototype absents sur des écrans du parcours**
- MQ-036 : pastilles de filtre, la plupart des établissements.
- MQ-085 : « Créer une règle ».
- MQ-095 : « Valider le rapprochement », « Ce ne sont pas les mêmes ».
- MQ-081 : « Ajouter une note ou une étiquette ».
- MQ-250 : toutes les questions fréquentes.

## 11. Top 5 des corrections

1. **Dessiner le parcours web de bout en bout** : connexion, offres, ajout d'établissement, import en cinq étapes, budget, règles (MQ-148, MQ-224 à MQ-229, MQ-154 à MQ-156, MQ-158, MQ-159, MQ-232), puis enrichir MQ-149 pour en faire un vrai tableau de bord d'ordinateur.
2. **Donner une réponse gratuite et explicite à « pro ou perso »** : attribut sur le compte dès MQ-031 et MQ-034, filtre par compte dans MQ-211 et MQ-079, et une phrase dans MQ-016 qui dit ce que l'option « Société » ajoute.
3. **Terminer le budget** : relier « Valider ce budget », dessiner la modification et la création d'enveloppe, les réglages du budget, la version Essentiel de MQ-079, et prévoir revenus irréguliers et charges trimestrielles ou annuelles.
4. **Dire toutes les limites d'Essentiel dans MQ-201** (2 ou 5 comptes selon la contribution, 5 enveloppes, statut de la lecture PDF), corriger « de même valeur » et expliquer les compteurs dans MQ-005, ajouter son état sélectionné.
5. **Fiabiliser l'import autour du compte** : sélecteur de fichier, choix et nommage du compte de destination, accueil et budget cohérents après import (plus de retour à MQ-025 et MQ-217), chemin manuel gratuit pour les opérations « À catégoriser ».

# Rapport de test UX — Karim Benali, investisseur actif

- Date : 26 novembre 2026
- Persona : Karim Benali, 38 ans, ingénieur, investisseur actif (PEA, compte-titres, crypto, assurance vie)
- Objectif : souscrire à l'offre Signature pour programmer ses versements mensuels avec LiVi IA, après avoir vérifié ce que l'IA fait réellement et ce qu'elle coûte
- Maquette : fichier Figma `cR7EtAZKpKCkgOoEqcJ8Wq`, pages « Parcours iPhone », « 10 · Autres formats », « 11 · Web »

## 1. Résumé et score

**Score : 4,5 / 10. Je ne souscris pas.**

Les écrans LiVi IA sont honnêtes une fois qu'on est dedans : coût affiché à chaque action, validation une par une, refus de conseil propre, chiffres justes. Mais mon objectif échoue sur trois points.

1. **Ce que j'achète n'est pas ce que je crois acheter.** Je viens « programmer mes versements ». Je découvre après paiement, sur MQ-117, que l'exécution est un « Rappel le jour venu » : LiVi ne transmet aucun ordre. Aucun écran avant l'achat (MQ-201, MQ-212, MQ-219) ne le dit.
2. **Je ne peux pas vérifier le coût avant de payer.** Les 400 crédits mensuels inclus, le plafond de 40 crédits par jour et la règle en cas de dépassement n'apparaissent qu'après l'achat (MQ-115), et le dépassement n'est expliqué nulle part.
3. **Le parcours d'achat ne se termine pas.** Après « Confirmer avec Face ID » (MQ-219), j'arrive sur l'accueil vide (MQ-025), dont l'onglet LiVi IA me renvoie sur « LiVi IA sans Signature » (MQ-212) avec le bouton « Découvrir Signature · 150 €/an ». Sur ordinateur, les quatre écrans de mon parcours sont à l'état « À concevoir ».

### Limites de ce test

- 15 appels Figma utilisés sur 15, tous en lecture seule. Aucune modification du fichier.
- Deux écrans vus en rendu : MQ-201 et MQ-115. Le téléchargement des autres captures a été refusé par le réseau de l'environnement. Les autres écrans sont évalués à partir des données de calques : textes, positions, tailles de police, couleurs, tailles des zones tactiles et liens de prototype. Sur ces écrans, je n'ai pas vu les alignements, espacements et icônes : mes remarques visuelles y sont des déductions, signalées comme telles.
- Le prototype n'a pas été joué : j'ai lu ses liens dans le fichier. Les remarques mobiles sont des estimations sur maquette statique.
- Aucun autre fichier du dépôt n'a été lu, y compris les documents du projet, pour garder la toile vierge demandée.

## 2. Contexte persona

Je suis mes placements chaque semaine et j'investis tous les mois. J'utilise un autre outil de suivi depuis deux ans. Je veux des performances exactes (TWR, TRI), des frais visibles, et je me méfie de trois choses : les promesses floues sur l'IA, la perte de contrôle sur mes ordres, et un prix supérieur à ce que je paie déjà. J'utilise un iPhone et un ordinateur, et je préfère l'ordinateur pour tout ce qui ressemble à un tableau ou à un réglage avancé.

Ma grille de lecture pour cet achat : « que fait l'IA, concrètement, le 12 du mois ? » et « combien cela me coûte, tout compris, sur un an ? ».

## 3. Parcours joué

| # | Écran | Ce que je fais | Ce que je constate | Verdict |
|---|---|---|---|---|
| 1 | MQ-007 → MQ-201 | Fin d'inscription, j'arrive sur « Choisissez votre offre » | Trois cartes, trois boutons gris identiques. Signature : 150 €/an, « LiVi IA : vos consignes, validées une par une », « Coût de l'IA affiché en euros ». Aucun lien « En savoir plus » | Doute |
| 2 | MQ-201 | Je cherche ce que fait l'IA et si son coût s'ajoute aux 150 € | Rien. « Coût affiché en euros » laisse entendre un coût en plus | Doute fort |
| 3 | MQ-201 → MQ-005 → MQ-025 | Je ferme pour aller voir l'IA avant de payer | La croix m'envoie sur « Votre choix pour Essentiel » : je dois choisir une formule gratuite pour pouvoir me renseigner sur la payante | Friction |
| 4 | MQ-025 → MQ-212 | Onglet LiVi IA | Bonne page d'explication : quatre fonctions, phrase de garde-fou. Mais « n'exécute rien sans votre validation » me fait comprendre qu'avec ma validation, elle exécute | Trompeur |
| 5 | MQ-010 → MQ-250 | Avatar, puis Aide, pour chercher le détail du prix | « Offres, paiement et résiliation · En ligne » : article non maquetté. Aucune entrée sur LiVi IA ni sur les crédits | Manquant |
| 6 | MQ-212 → MQ-201 → MQ-219 | « Découvrir Signature », puis « Choisir Signature » | Je retombe sur l'écran d'inscription, avec « Continuer avec Essentiel ». Feuille de confirmation : prix, « LiVi IA : Incluse », renouvellement, résiliation | Passable |
| 7 | MQ-219 → MQ-025 → MQ-212 | « Confirmer avec Face ID » | Pas d'écran de réussite. Accueil vide. L'onglet LiVi IA affiche encore « sans Signature » et me repropose l'achat | Bloquant |
| 8 | MQ-115 (parcours 7 du prototype) | Je change de point de départ pour voir l'IA active | Coût du mois en très grand (1,12 €), « 112 crédits sur 400 inclus », quatre consignes | Bon |
| 9 | MQ-116 | « Écrire une consigne » : « Le 12 de chaque mois, investir 300 € dans l'ETF Monde au marché sur mon PEA Atlas » | Coût annoncé avant l'action (3 crédits, 0,03 €), modèles de phrase, garde-fou clair | Bon |
| 10 | MQ-117 | Vérification de la consigne structurée | Ligne « Exécution : Rappel le jour venu ». C'est ici que je comprends que rien n'est programmé chez mon courtier | Déception |
| 11 | MQ-124, MQ-118 | Je regarde « Programmés » et un rappel déclenché | « Rappel · versement fait par vous », « LiVi ne transmet rien ». Honnête, mais trop tard | Abandon probable |
| 12 | MQ-119 | Je teste la consigne de vente d'ether | Bandeau « non disponible, soumis à l'avis juridique », « prévue en 2028 », et pourtant un bouton principal « Valider avec Face ID » | Inquiétant |
| 13 | MQ-120, MQ-123 | Journal, puis demande de conseil | Journal daté et chiffré en crédits. Refus de conseil net, avec les faits et le renvoi vers un conseiller ORIAS. Le refus est facturé 2 crédits | Bon, avec réserve |
| 14 | MQ-016 | Profil, « Offres et abonnement », pour préparer ma rétractation | « Gérer l'abonnement » ouvre les abonnements de l'App Store. Résiliation et rétractation rappelées | Correct |
| 15 | MQ-224, MQ-230, MQ-232, MQ-179 | Je reprends le même parcours sur ordinateur | Quatre cadres « À concevoir » | Manquant |

Issue du parcours : je n'achète pas. Si j'avais acheté à l'étape 6, j'aurais demandé la rétractation après l'étape 10.

## 4. Options testées

- **Filtres** : pastilles du journal (MQ-120 : Tout, Consignes, Alertes, Ordres, Lectures). Présentes, sans lien de prototype, donc non testables. Les filtres de recherche et de marchés sont hors de mon parcours.
- **Panier** : sans objet, l'achat est un abonnement unique. Il n'y a ni récapitulatif d'options ni panier.
- **Paiement** : feuille de confirmation MQ-219 testée. La feuille de l'App Store, la réussite, l'échec et l'annulation ne sont pas maquettés.
- **Compte** : profil MQ-010 et « Offres et abonnement » MQ-016 testés.
- **Aide** : MQ-250 testée. Les articles s'ouvrent « En ligne » et ne sont pas maquettés.

## 5. Points forts

- **Coût par action visible avant et après** : « environ 3 crédits, soit 0,03 € » avant la traduction (MQ-116), coût sous chaque réponse (MQ-121, MQ-123), coût du mois en titre de l'onglet (MQ-115). C'est exactement ce que j'attends d'une IA payante.
- **Contrôle** : consigne restituée champ par champ avant validation (MQ-117), validation par Face ID, « Modifier la phrase » en second bouton, journal « non modifiable ».
- **Refus de conseil exemplaire** (MQ-123) : la réponse dit non, donne les faits tirés de mes données, puis indique ce que l'outil peut faire.
- **Chiffres justes.** J'ai recalculé : 150 €/an = 12,50 €/mois et 40 €/an = 3,33 €/mois (MQ-201) ; 0,31 ETH × 2 580 € = 799,80 € et 0,5 % de frais = 4,00 € (MQ-119) ; 35 × (177,44 − 165,20) = 428,40 €, soit +7,4 % (MQ-123) ; 11 crédits du jour sur MQ-115 = somme des lignes du journal MQ-120 ; 7 812,40 € − 13,40 € = 7 799,00 € (MQ-067 et MQ-115) ; le 12 décembre 2026 est bien un samedi, reporté au lundi 14 (MQ-117, MQ-124) ; la phrase de MQ-116 fait bien 81 caractères.
- **Précision utile** sur MQ-117 : « 300 € permettent 1 part entière. Le reste reste en liquidités sur le PEA ».
- **TWR et TRI côte à côte**, avec frais et impôts prélevés détaillés (MQ-067). C'est mon critère principal pour un outil de suivi.
- **Conditions d'abonnement lisibles** : prix TTC, équivalent mensuel, résiliation en trois clics, rétractation de 14 jours (MQ-201, MQ-016).
- **Zones tactiles** : toutes celles mesurées font au moins 44 points (boutons d'offre 329 × 44, boutons principaux 361 × 54 à 56, onglets 69 × 47, retour 44 × 44).

## 6. À ajuster

### Bloquant

- **B1 — Promesse et réalité divergent (MQ-201, MQ-212, MQ-219, MQ-124).** Avant l'achat, rien ne dit qu'un versement « programmé » est un rappel et que LiVi ne transmet aucun ordre. Le mot « Programmé » (MQ-115, titre de MQ-124) et la formule « n'exécute rien sans votre validation » (MQ-212) font croire à une exécution. L'information exacte n'arrive qu'en MQ-117 (« Exécution : Rappel le jour venu »), MQ-118 et MQ-097 (« LiVi n'exécute rien »). Je paie 150 € pour un rappel et un journal.
- **B2 — Modèle de coût invisible avant l'achat (MQ-201, MQ-212, MQ-219).** « Coût de l'IA affiché en euros » et « chaque tâche affiche son coût » se lisent comme un coût à la tâche en plus de l'abonnement. La feuille MQ-219 dit « LiVi IA : Incluse ». Les 400 crédits mensuels et l'équivalence 1 crédit = 0,01 € n'apparaissent que sur MQ-115. Le dépassement des 400 crédits n'est expliqué sur aucun écran : blocage, facturation, achat de crédits.
- **B3 — Boucle après l'achat (MQ-219 → MQ-025 → MQ-212).** « Confirmer avec Face ID » mène à l'accueil vide, sans confirmation. L'onglet LiVi IA de MQ-025 mène à « LiVi IA sans Signature ». Dans le prototype, l'achat ne débloque jamais l'IA. Il manque l'état « Signature active, aucune consigne ».
- **B4 — Parcours absent sur ordinateur.** MQ-224 (offres), MQ-230 (LiVi IA sans Signature), MQ-232 (offres et abonnement) et MQ-179 (consignes et journal) sont « À concevoir », comme 42 des 45 cadres de la page Web. Sur tablette, MQ-144 (LiVi IA) l'est aussi.

### Important

- **I1 — Le prix ne se justifie pas à l'écran (MQ-201, MQ-115).** Signature coûte 110 € de plus que Plus. Les crédits inclus valent au plus 4 € par mois au tarif affiché, soit 48 € par an. La démonstration elle-même montre 1,12 € consommé en novembre et 13,40 € sur un an. Aucun élément ne me dit ce que valent les 110 €.
- **I2 — Ni mensuel ni essai (MQ-201, MQ-016).** « soit 12,50 € par mois » s'affiche alors que seul l'annuel existe. Pour un produit dont je doute, je veux un mois d'essai, pas une rétractation à demander.
- **I3 — Aucune hiérarchie sur l'écran d'achat (MQ-201).** Les trois boutons sont des pastilles grises identiques, libellé en 13. Le style de bouton principal blanc existe (MQ-115) et n'est pas utilisé ici. Rien ne distingue la carte Signature.
- **I4 — MQ-119 : action principale sur une fonction indisponible.** Le bandeau dit « non disponible, soumis à l'avis juridique » et « prévue en 2028 », et le bouton principal reste « Valider avec Face ID », qui mène au journal. Le second bouton dit « Ne pas transmettre », ce qui suppose qu'une transmission est possible. C'est exactement ma crainte de perte de contrôle. Annoncer une année ferme pour une fonction soumise à un avis juridique est une promesse fragile.
- **I5 — Une fonction indisponible est facturée et listée.** Le journal MQ-120 compte « Ordre préparé · 1 crédit ». La consigne « Ether : vente sous 2 600 € » figure parmi « Mes consignes » (MQ-115). Le modèle « Vendre … si le cours passe sous … € » est proposé (MQ-116) sans dire ce qu'il produit aujourd'hui.
- **I6 — Frais d'ordre absents de la vérification (MQ-117).** MQ-119 affiche « Frais estimés », MQ-117 non, alors que c'est l'écran de mon versement mensuel. Le « Type d'ordre : Au marché » y est demandé alors que je passe l'ordre moi-même : à quoi sert ce champ ?
- **I7 — « Gain net des frais d'IA » flatteur (MQ-115).** Le gain retire 13,40 € de frais d'IA, pas les 150 € d'abonnement. Il est en euros seulement, sans TWR ni TRI, sans période datée, sans source.
- **I8 — Passage d'une offre à l'autre non maquetté (MQ-016).** Seul l'état « abonné Signature » existe. Il manque l'état Essentiel ou Plus qui passe à Signature, avec la règle de prorata. Depuis MQ-212, l'achat renvoie à l'écran d'inscription MQ-201.
- **I9 — Aide muette sur mon sujet (MQ-250).** Aucune entrée sur LiVi IA, les crédits ou les ordres. Les articles sont en ligne et non maquettés.
- **I10 — Double confirmation floue (MQ-219).** Le bouton dit « Confirmer avec Face ID », le texte dit que je confirme « dans la feuille de l'App Store, avec Face ID ». Une ou deux validations ? Aucun lien vers les conditions dans la feuille.

### Mineur

- **M1 — MQ-201, bas d'écran.** Les liens « Conditions d'utilisation » et « Confidentialité » (y 802 à 846) passent sous l'indicateur d'accueil (y 818 à 852), visible sur le rendu. « Restaurer mes achats » (y 846 à 890) est hors écran. Aucun des trois n'a de lien de prototype.
- **M2 — MQ-201, défilement.** Le cadre défile verticalement et la feuille de confirmation est rangée juste sous l'écran (y 852 à 1283). À vérifier dans le prototype : un défilement risque de faire apparaître la feuille « Abonnement Plus » sous les liens légaux.
- **M3 — Journal en crédits (MQ-120).** La promesse est un coût « en euros », le journal n'affiche que des crédits.
- **M4 — Refus facturé (MQ-123).** 2 crédits pour une réponse « Je ne peux pas vous le dire ». À assumer par une phrase, ou à ne pas compter.
- **M5 — Plafond du jour (MQ-115).** « 11 crédits sur 40 » sans explication. 40 par jour sur 30 jours dépasse 400 : laquelle des deux limites s'applique ?
- **M6 — Export annoncé, bouton absent (MQ-120).** « exportable en CSV ou PDF » sans aucune commande d'export.
- **M7 — Statuts sans légende.** « Active », « Programmé », « Aperçu », « Déclenchée » (MQ-115) et « Suivie » (MQ-097).
- **M8 — Lignes de consigne sans chevron (MQ-115).** Elles sont cliquables, comme « Assistant de lecture » et « Journal des actions », qui eux ont un chevron.
- **M9 — « Prix réglables » (MQ-016).** Formule de réglage interne. Lue par un client, elle signifie que le prix peut bouger.
- **M10 — MQ-118.** « Ouvrir l'espace Horizon Vie » n'a pas de lien de prototype.
- **M11 — Filtre « Ordres » (MQ-120)** dans un produit qui ne transmet pas d'ordres.

## 7. Frictions

1. Pour me renseigner sur l'IA depuis l'écran des offres, je dois fermer, choisir une variante d'Essentiel (MQ-005), arriver sur l'accueil vide puis ouvrir l'onglet LiVi IA : quatre écrans pour une question que la carte Signature devrait traiter.
2. Le bouton d'achat de MQ-212 me ramène à l'écran d'inscription avec « Continuer avec Essentiel », alors que j'ai déjà un compte.
3. Après paiement : pas de reçu, pas d'écran de réussite, retour sur un accueil vide.
4. Mes versements existent à deux endroits : « Investissements programmés » dans le budget (MQ-097, statut « Suivie ») et « Programmés » dans l'IA (MQ-124, statut « Active »). Aucun lien entre les deux.
5. Le jour du versement, LiVi me rappelle et je fais tout moi-même chez le courtier. Pour mon PEA, aucun lien direct vers le courtier n'est prévu sur les écrans vus.
6. La seule sortie en cas de regret est la gestion des abonnements de l'App Store (MQ-016). La rétractation de 14 jours est citée, sa démarche n'est décrite nulle part.

## 8. Incohérences

- **Vocabulaire d'exécution** : « n'exécute rien sans votre validation » (MQ-212) contre « LiVi n'exécute rien » (MQ-097) et « LiVi ne transmet rien » (MQ-118).
- **Coût de l'IA** : « Incluse » (MQ-219) contre « chaque tâche affiche son coût » (MQ-212) et un coût mensuel en titre (MQ-115).
- **Dates d'abonnement** : renouvellement « Le 16 nov. 2027 » (MQ-219) alors que la démonstration est datée du dimanche 15 novembre (MQ-120) ; « Signature renouvelée le 2 oct. 2027 » (MQ-016), donc abonnement du 2 octobre 2026, mais 13,40 € de frais d'IA « sur 1 an » (MQ-115).
- **Essentiel** : « Jusqu'à 5 comptes » (MQ-201) contre 2 comptes sans contribution anonyme (MQ-005).
- **« ETF Monde »** : ligne du PEA Atlas (MQ-115, MQ-117) et source du prélèvement de l'arbitrage d'assurance vie Horizon Vie (MQ-124). Même nom pour deux supports dans deux enveloppes.
- **Bouton « Écrire une consigne »** : principal sur MQ-115 (texte noir sur blanc), secondaire sur MQ-124 (texte blanc).
- **Profil** : MQ-010 affiche « Offre Signature » même quand on y arrive depuis l'accueil vide d'un compte qui n'a rien acheté.

## 9. Design

Constats sur rendu (MQ-201, MQ-115) :

- **MQ-201** : composition propre, cartes régulières, prix alignés à droite, équivalent mensuel en gris. Défaut majeur : aucune action principale. Les coches vertes sont identiques sur les trois offres, donc n'aident pas à comparer. Bas d'écran encombré par l'indicateur d'accueil.
- **MQ-115** : bonne hiérarchie, le coût du mois est l'élément le plus visible. Le halo bleu en haut à droite passe derrière la ligne grise en 13 « Aujourd'hui : 11 crédits sur 40 · 1 crédit = 0,01 € », qui devient difficile à lire alors qu'elle porte l'information de prix. Le statut « Aperçu » est dans le gris le plus faible. La note « Gain sur 1 an… » est coincée entre la carte et la barre d'onglets. Dans la barre d'onglets, l'icône Budget paraît aussi claire que l'onglet actif : à vérifier.

Constats sur données de calques (autres écrans) :

- **Contraste** : le gris `#83838C` en 13 sert aux mentions qui comptent le plus pour moi (équivalent mensuel, coût en crédits, conditions de résiliation). Estimé à environ 5,6 pour 1 sur fond noir, et proche du seuil de 4,5 pour 1 sur le fond des cartes. Sur le halo bleu de MQ-115, il est probablement en dessous.
- **Tailles** : corps en 16 et 14, mentions en 13, intertitres en 12. Les libellés des boutons d'offre sont en 13 quand ceux des boutons principaux sont en 16.
- **Cohérence** : structure stable d'un écran à l'autre (titre en 17, retour 44 × 44, bouton principal en bas entre y 686 et y 810). Intertitres tantôt en capitales (« CE QUE FAIT LIVI IA », MQ-212), tantôt en minuscules (« Mes consignes », MQ-115).
- **Gains et pertes** : signe et flèche présents (MQ-067, MQ-123).

## 10. Mobile

Estimations sur maquette statique. Le prototype n'a pas été joué.

- **Usage à une main** : boutons principaux en bas, bien placés. Retour en haut à gauche et croix en haut à droite de MQ-201, hors de portée du pouce.
- **Cibles tactiles** : conformes à 44 points sur toutes les zones mesurées. Le bouton visible des cartes d'offre ne fait que 32 de haut, la zone active 44.
- **Défilement** : MQ-201 dépasse la hauteur de l'écran, « Restaurer mes achats » demande un défilement. Les pastilles du journal MQ-120 débordent à droite (la cinquième commence à x 386 sur 393) sans indice visuel connu.
- **Petits écrans** : aucune variante 375 × 667 des offres. Sur cette hauteur, la carte Signature (y 558 à 754) serait entièrement sous la ligne de flottaison, derrière deux offres moins chères.
- **Autres formats** : le parcours n'existe qu'en 393 × 852.

## 11. Éléments manquants

- État « LiVi IA avec Signature, aucune consigne » après l'achat.
- Feuille de paiement de l'App Store, écran de réussite, reçu, échec de paiement, annulation.
- Règle de dépassement des 400 crédits et sens du plafond de 40 crédits par jour.
- Mention avant achat : versements programmés = rappels, aucun ordre transmis.
- Lien « En savoir plus sur LiVi IA » depuis la carte Signature (MQ-201) et depuis la feuille (MQ-219).
- Offre mensuelle ou période d'essai.
- État « Offres et abonnement » pour un client Essentiel ou Plus, avec le prorata du passage à Signature.
- Démarche de rétractation.
- Articles d'aide sur les offres, LiVi IA et les crédits (MQ-250).
- Commande d'export du journal (MQ-120). Suspension ou suppression d'une consigne : annoncée sur MQ-117, non vue sur les écrans examinés.
- Frais d'ordre estimés sur MQ-117.
- Web : MQ-224, MQ-230, MQ-232, MQ-179. Tablette : MQ-144.
- Liens de prototype : liens légaux et « Restaurer mes achats » (MQ-201), pastilles du journal (MQ-120), « Ouvrir l'espace Horizon Vie » (MQ-118).

Non examinés faute de quota : les écrans d'inscription MQ-001 à MQ-007, l'ajout de mes courtiers et de ma plateforme crypto (section 02), MQ-122.

## 12. Top 5 des corrections

1. **Dire avant l'achat ce que fait un versement programmé** (MQ-201, MQ-212, MQ-219) : un rappel le jour venu, aucun ordre transmis. Remplacer « Programmé » et « n'exécute rien sans votre validation » par des termes qui ne supposent pas d'exécution.
2. **Afficher le modèle de coût complet avant l'achat** : 400 crédits par mois inclus, soit 4 €, plafond du jour, règle de dépassement. Justifier les 110 € d'écart avec Plus, et proposer un mensuel ou un essai.
3. **Finir le parcours d'achat** : écran de réussite, arrivée sur LiVi IA en état « Signature active », suppression de la boucle MQ-219 → MQ-025 → MQ-212, achat contextuel depuis MQ-212 et MQ-016 au lieu de l'écran d'inscription.
4. **Concevoir le parcours sur ordinateur** : MQ-224, MQ-230, MQ-232, MQ-179, puis MQ-144 sur tablette.
5. **Neutraliser MQ-119 et hiérarchiser MQ-201** : pas de bouton « Valider avec Face ID » ni de crédit facturé sur une fonction indisponible ; un bouton principal sur l'écran des offres, liens légaux et « Restaurer mes achats » dégagés de l'indicateur d'accueil.

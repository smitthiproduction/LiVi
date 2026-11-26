# Test UX persona 06 — Michel Garnier, 68 ans, retraité prudent

- Date : 26 novembre 2026
- Maquette : fichier Figma `cR7EtAZKpKCkgOoEqcJ8Wq`, page « Parcours iPhone » (cadres 393 × 852)
- Objectif joué : obtenir le total de mon patrimoine avec l'offre gratuite, sans rien souscrire (compte courant, assurance vie, appartement loué), en lisant avec le texte agrandi
- Testeur : agent « UX Persona Tester », toile vierge (aucun rapport ni document du projet lu)

## 1. Résumé et score

**Score : 4,5 / 10 pour ce persona et cet objectif.**

L'écran d'arrivée est bon : un seul grand chiffre, « Patrimoine net », bien placé (MQ-024). Le ton est honnête et rassurant (« LiVi ne vend aucun produit financier »). Mais Michel n'arrive pas au bout dans la maquette :

1. Sur trois éléments à saisir, un seul a un formulaire (le compte courant, MQ-032). La saisie manuelle d'une assurance vie et celle d'un bien immobilier sont **manquantes**, et les tuiles de MQ-031 n'ont aucun lien de prototype.
2. L'offre gratuite se contredit : « Jusqu'à 5 comptes » sur MQ-201, puis « limité à 2 comptes » sur MQ-005 si l'on refuse de contribuer, avec une option à 100 € posée dans un écran titré « Essentiel gratuit ». Avec trois éléments à suivre, Michel ne sait pas s'il passe.
3. Aucune maquette en texte agrandi n'existe. Le fichier affirme seulement que la taille « suit le réglage de l'iPhone » (MQ-006). Plusieurs écrans débordent déjà à la taille par défaut.

À cela s'ajoutent quatre points où un homme qui a peur de payer sans le vouloir s'arrête : MQ-201, MQ-005, MQ-203 et MQ-039.

### Ce qui a été réellement examiné

| Niveau d'examen | Écrans |
|---|---|
| Capture regardée | MQ-201, MQ-005, MQ-025, MQ-031, MQ-203, MQ-024, MQ-036 |
| Textes, tailles, couleurs et liens de prototype lus dans les calques (pas de capture) | MQ-001, MQ-002, MQ-003, MQ-004, MQ-007, MQ-221, MQ-244, MQ-029, MQ-202, MQ-208, MQ-032, MQ-236, MQ-033, MQ-248, MQ-039, MQ-040, MQ-210, MQ-216, MQ-045, MQ-046, MQ-006, MQ-250, MQ-010, MQ-016, MQ-218 |
| Inventoriés par leur nom seulement | Tout le reste : 9 sections iPhone, page « 10 · Autres formats » (29 cadres), page « 11 · Web » (45 cadres 1440 × 1024) |

Limites : quota de 15 appels Figma, entièrement utilisé. Trois captures de sections entières n'ont pas pu être téléchargées (hôte figma.com refusé par le proxy de la session), d'où sept captures unitaires seulement. Les jugements d'alignement et de contraste ne valent que pour les sept écrans vus ; pour les autres, je m'appuie sur les tailles, couleurs et positions lues dans les calques. Les écrans web n'ont pas été évalués visuellement : Michel n'utilise que son iPhone.

Options testées : inscription par e-mail (compte), écran des offres et feuilles de paiement (MQ-201, MQ-203, MQ-218), filtres de l'annuaire (MQ-036, pastilles sans lien), menu Ajouter, onglets, profil et aide (MQ-010, MQ-250), réglage d'accessibilité (MQ-006). Il n'y a pas de panier dans ce produit.

## 2. Contexte persona

Michel, ancien comptable à Bordeaux, veuf. Il sait lire un bilan, pas une application. iPhone réglé en texte agrandi, lecture lente, appelle sa fille dès qu'un écran parle d'argent à payer. Il veut deux réponses : « combien je possède en tout » et « combien vaut mon assurance vie ». Il n'a ni crédit, ni bourse, ni crypto. Il abandonne dès qu'il craint d'avoir souscrit quelque chose.

## 3. Parcours joué

| # | Écran | Ce que fait Michel | Ce qu'il pense | Verdict |
|---|---|---|---|---|
| 1 | MQ-001 Bienvenue | Lit, touche « Créer un compte » | « Ne vend rien, ne me dit pas quoi faire : bien. Mais est-ce gratuit ? Ce n'est écrit nulle part. » | Correct, prix absent |
| 2 | MQ-002 Créer votre compte | Choisit « Continuer avec un e-mail » | « Clé d'accès ? Je ne sais pas ce que c'est. » | Correct, jargon |
| 3 | MQ-003 Adresse e-mail | Saisit, « Recevoir le code » | Rien à signaler | Bon |
| 4 | MQ-004 Code | Va chercher le code dans Mail, revient | « 15 minutes, ça va. » Le compte à rebours « 0:42 » le presse un peu | Bon |
| 5 | MQ-007 Face ID | « Plus tard » | Sortie claire | Bon |
| 6 | MQ-201 Choisissez votre offre | S'arrête. Trois boutons gris identiques, deux prix | « On me demande déjà de l'argent. Lequel est le bon bouton ? » Premier appel à sa fille | Friction forte |
| 7 | MQ-005 Votre choix pour Essentiel | S'arrête de nouveau. Aucun choix coché, bouton « Continuer » gris | « J'avais choisi gratuit et on me reparle de 100 €. Et 2 comptes ou 5 ? J'en ai trois. » | **Point d'abandon probable** |
| 8 | MQ-025 Accueil vide | Touche « Ajouter un établissement » | « 0,00 €, normal. Deux boutons clairs. » | Bon |
| 9 | MQ-036 Annuaire | Cherche sa banque, touche une ligne | « Connexion · fichier, Clé · fichier : aucune idée. » | Moyen |
| 10 | MQ-202 Comment l'ajouter | Première ligne : « Connecter automatiquement » | Touche la première ligne, comme tout le monde | Piège |
| 11 | MQ-203 Incluse dans Plus | Gros bouton blanc « Passer à Plus · 40 €/an » | « Je ne veux pas payer. Où est Non ? » Aucune sortie libellée, pas de « Saisir à la main » | **Point d'abandon** |
| 12 | MQ-031 Que voulez-vous ajouter | « Compte courant » déjà coché, « Continuer » | « Enveloppe, onglets de la fiche : ce n'est pas pour moi. » | Moyen |
| 13 | MQ-032 Votre compte courant | Saisit le solde, bute sur « Date d'ouverture » | « Je ne sais plus. Est-ce obligatoire ? » | Moyen |
| 14 | MQ-236 Fiche Banque Rivière | Voit 4 812,40 € | « Bien. Et maintenant, comment je reviens au total ? » Seul lien : retour vers le formulaire | Impasse de prototype |
| 15 | MQ-031 (assurance vie) | Touche « Assurance vie » | Rien ne se passe. « Continuer » ramène au formulaire du compte courant | **Bloqué : écran manquant** |
| 16 | MQ-036 → Horizon Vie | Tente par l'annuaire | Ligne sans lien. Le seul chemin maquetté passe par un relevé PDF « lu par LiVi IA · 4 crédits, 0,04 € » (MQ-039) | **Bloqué + peur de payer** |
| 17 | MQ-025 « Ajouter un bien ou un crédit » | Arrive sur MQ-031, « Compte courant » coché | « J'ai demandé un bien. » Tuile « Bien immobilier » sans lien | **Bloqué : écran manquant** |
| 18 | MQ-024 Accueil complet | Regarde l'écran d'exemple | « 184 320,57 €, c'est exactement ce que je veux voir. Mais c'est le patrimoine de quelqu'un d'autre, avec un crédit et de la bourse. » | Cible bonne, état non maquetté pour son cas |

Résultat : objectif non atteint dans la maquette. Un élément sur trois saisi, total jamais affiché avec ses propres chiffres.

## 4. Points forts

- **MQ-024 Accueil** : hiérarchie exemplaire. « Patrimoine net » puis le montant en 52 points, variation avec flèche et signe (« ▲ +2,41 % »), pas seulement une couleur. C'est la réponse à la question de Michel, en haut de l'écran.
- **Chiffres cohérents** : en ancien comptable, j'ai refait les additions de MQ-210 et MQ-040. Actifs 384 108,13 € moins dettes 199 787,56 € égalent bien 184 320,57 €. Valeur nette de l'appartement (MQ-045) juste. Cela donne confiance.
- **MQ-248 Horizon Vie** : « Valeur au 30 septembre. Horizon Vie envoie un relevé par trimestre. » Explication simple de la date d'une valeur. C'est la bonne réponse à « que vaut mon assurance vie ».
- **MQ-045 Bien immobilier** : « Ce n'est pas une expertise : vous gardez la main sur la valeur retenue. » Source et date indiquées (DVF, octobre 2026). Honnête.
- **Ton** : vouvoiement, phrases courtes, « Résiliation en trois clics, rétractation de 14 jours » visible avant tout achat (MQ-201, MQ-203).
- **Boutons principaux** : 361 × 54 points, en bas d'écran, un seul bouton blanc par écran sur MQ-001, MQ-003, MQ-025, MQ-032.
- **MQ-007** : « Plus tard » existe et pèse autant que « Activer Face ID » en surface tactile.
- **MQ-036** : lignes de 68 points de haut, « Mon établissement n'est pas listé » bien visible en fin de liste.
- **MQ-201** : la croix de fermeture mène au même endroit que « Continuer avec Essentiel ». Fermer ne coûte rien.

## 5. À ajuster

### Bloquant

- **B1 — MQ-031 : formulaires manuels « Assurance vie » et « Bien immobilier » manquants.** Aucune tuile n'a de lien ; « Continuer » mène toujours à MQ-032 « Votre compte courant ». Deux des trois éléments de Michel ne peuvent pas être saisis. MQ-045 montre un appartement déjà créé, pas sa création.
- **B2 — MQ-201 / MQ-005 : l'offre gratuite se contredit.** MQ-201 promet « Jusqu'à 5 comptes ». MQ-005 révèle que c'est 5 si l'on contribue, 2 sinon. Nulle part il n'est dit si un appartement compte pour un « compte ». Michel en a trois : s'il refuse la contribution par méfiance, il ne sait pas s'il atteint son total. Aucun écran « limite atteinte » n'existe.
- **B3 — MQ-005 : une option payante dans un écran titré « Essentiel gratuit ».** « Confidentialité à vie · 100 € une fois » a le même gabarit et le même bouton radio que les deux choix gratuits, sous la phrase « Trois choix de même valeur ». Aucun choix n'est présélectionné, le bouton « Continuer » a l'air désactivé (gris, texte noir) sans explication. L'état « un choix coché » et la confirmation d'achat des 100 € sont manquants.
- **B4 — Aucune maquette en texte agrandi.** MQ-006 indique « Taille du texte : suit le réglage de l'iPhone », mais aucun cadre du fichier ne montre un écran aux tailles d'accessibilité. Impossible de valider l'objectif « lire avec le texte agrandi ». Voir la section 9 pour les débordements prévisibles.

### Important

- **I1 — MQ-203 : pas de sortie libellée, pas de saisie manuelle.** Bouton blanc « Passer à Plus · 40 €/an » (y 672 à 726) collé au bouton « Importer un fichier à la place » (y 734 à 790), environ 8 points d'écart. Pour refuser, il faut deviner la poignée ou toucher le voile. Ajouter « Saisir à la main » et « Rester en gratuit ».
- **I2 — MQ-202 : la méthode payante est en premier.** « Connecter automatiquement » ouvre la liste ; la mention « offre Plus » est en 14 points gris, à la fin du sous-titre. La seule méthode sans fichier ni paiement, « Saisir à la main », est en dernier.
- **I3 — MQ-201 : trois boutons identiques.** « Continuer avec Essentiel », « Choisir Plus », « Choisir Signature » : même pastille grise d'environ 32 points de haut visible, libellé en 13 points. Rien ne distingue le choix sans paiement des deux autres. Aucune mention « aucun paiement, aucune carte demandée » sous Essentiel.
- **I4 — MQ-039 : un coût en euros dans le parcours gratuit.** « lu par LiVi IA · 4 crédits, 0,04 € ». MQ-201 présente LiVi IA comme réservée à Signature. Michel ne sait pas si lire son relevé d'assurance vie est inclus, facturé, ou débité de quelque chose. C'est pourtant le seul chemin maquetté pour son assurance vie.
- **I5 — MQ-218 : pas de bouton « Annuler » libellé** dans la feuille de confirmation d'abonnement (lu dans les calques : un seul bouton « Confirmer avec Face ID », fermeture par voile ou poignée).
- **I6 — MQ-236 : aucun retour vers l'accueil après l'enregistrement.** Le seul lien « retour » renvoie au formulaire. Pas de bouton « Terminé », pas de message « Votre total est à jour ».
- **I7 — États intermédiaires de l'accueil manquants.** L'accueil existe vide (MQ-025) ou plein avec six établissements, un crédit et de la bourse (MQ-024). L'accueil à un, deux ou trois éléments saisis à la main, sans dette, n'est pas maquetté. C'est l'état que verra tout nouvel utilisateur gratuit.
- **I8 — Où est l'appartement sur l'accueil ?** MQ-024 liste « Mes établissements ». Un bien n'est pas un établissement : il n'apparaît que dans l'onglet Patrimoine (MQ-040 « Immobilier », MQ-210 « Biens saisis à la main »). Michel verra un total qu'il ne peut pas recomposer avec la liste sous ses yeux.
- **I9 — Onglet « LiVi IA » permanent pour un utilisateur gratuit.** Depuis MQ-025, il mène à MQ-212 « LiVi IA sans Signature ». Un cinquième de la barre d'onglets conduit à une offre à 150 €/an. Pour ce persona, c'est un achat intégré qui attend d'être touché par erreur.
- **I10 — Aide absente de l'inscription et des offres.** L'aide n'est atteignable que par l'avatar « CM » (initiales, 44 × 44, aucun libellé) puis Profil puis Aide (MQ-250). Sur MQ-201 et MQ-005, là où Michel bloque, il n'y a ni « ? » ni lien d'explication.

### Mineur

- **M1 — MQ-201** : les liens « Conditions d'utilisation » et « Confidentialité » (y 816) touchent l'indicateur d'accueil ; « Restaurer mes achats » (y 860) est sous le bas du cadre de 852.
- **M2 — MQ-025** : « Assurance vie » passe sur deux lignes et remonte son icône de 8 points par rapport aux trois autres. Rangée désalignée.
- **M3 — MQ-031** : l'icône PEA est bleue, les autres blanches ; elle semble sélectionnée alors que c'est « Compte courant » qui l'est. « Compte-titres » est coupé au trait d'union, « Compte courant », « Assurance vie » et « Bien immobilier » sur deux lignes à la taille par défaut.
- **M4 — MQ-031** : sous-titre « Le type détermine les champs, les filtres et les onglets de la fiche » : langage de concepteur. Titre de barre « Saisir à la main » même quand on arrive par « Ajouter un bien ou un crédit », et « Compte courant » présélectionné dans ce cas.
- **M5 — MQ-036** : pastilles de filtre coupées à droite (« Courtie… ») ; « Assurance vie » est la cinquième, hors écran. Pastilles sans lien de prototype, champ de recherche sans état de saisie ni « aucun résultat ».
- **M6 — MQ-036** : « Connexion · fichier », « Clé · fichier », « Connexion · PDF » en 13 points gris, sans légende.
- **M7 — MQ-032** : « Date d'ouverture » sans mention « facultatif ». Un compte ouvert il y a quarante ans n'a pas de date connue.
- **M8 — MQ-024** : courbe sans échelle ni valeur. Pour un comptable, un trait sans chiffres n'apprend rien. Sélecteur de période en 13 points.
- **M9 — MQ-024** : toucher le montant (zone de 361 × 140) bascule en mode discret (MQ-027). Michel touchera le chiffre pour « voir le détail » et le verra disparaître.
- **M10 — MQ-024** : « À renouveler · 20 nov. » en orange : renouveler quoi ? « Clé · hier 18:00 » : incompréhensible.
- **M11 — MQ-250** : chaque question renvoie « En ligne », dans un navigateur intégré. Pas de téléphone, pas de réponse immédiate ; « Réponse sous 2 jours ouvrés ».
- **M12 — MQ-016** : « Prix réglables, affichés avant tout achat ». « Prix réglables » est une note interne exposée à l'utilisateur ; elle inquiète.
- **M13 — MQ-002** : « clé d'accès » non expliquée. MQ-005 : « compteurs anonymes », « annuaire des enseignes » non expliqués.
- **M14 — MQ-208** : « Proposer cet établissement à LiVi » envoie le nom et le type ; l'état par défaut de l'interrupteur n'est pas lisible dans les calques. Il doit être désactivé par défaut.

## 6. Frictions (dans l'ordre où Michel les rencontre)

1. **MQ-001** : le mot « gratuit » n'apparaît pas. Il crée un compte sans savoir ce que cela coûte.
2. **MQ-201** : premier écran après l'inscription, deux prix sur trois cartes. Méfiance immédiate.
3. **MQ-005** : il pensait avoir choisi « gratuit » ; on lui redemande de choisir, avec un prix. Sensation d'avoir été ramené vers la caisse.
4. **MQ-005** : la gratuité complète est conditionnée à l'envoi de « compteurs ». Refuser coûte trois comptes sur cinq, sinon 100 €. Pour quelqu'un qui craint les arnaques, c'est le schéma qu'il redoute, même si l'intention est honnête.
5. **MQ-202 puis MQ-203** : la première ligne mène à un écran de vente. Deuxième rappel de prix en moins de dix écrans (troisième si l'on compte MQ-025 : « Connexion automatique avec Plus »).
6. **MQ-031** : dix tuiles, dont PEA, PER, compte-titres, crypto-actifs. Il n'en comprend que quatre.
7. **MQ-236** : après l'enregistrement, pas de chemin évident vers le total.
8. **MQ-039** : « 0,04 € » affiché pour lire un relevé.

## 7. Incohérences

| Sujet | Écran A | Écran B |
|---|---|---|
| Nombre de comptes en Essentiel | MQ-201 : « Jusqu'à 5 comptes » | MQ-005 : « limité à 2 comptes » si l'on ne contribue pas |
| Gratuité | MQ-005, titre : « Essentiel gratuit » | MQ-005, troisième choix : « 100 € une fois » |
| « Même valeur » | MQ-005 : « Trois choix de même valeur » | Deux choix gratuits (5 et 2 comptes), un à 100 € |
| LiVi IA | MQ-201 : réservée à Signature | MQ-039 : relevé « lu par LiVi IA · 4 crédits, 0,04 € » dans un parcours d'ajout ordinaire |
| Valeurs anciennes | MQ-024 : « 1 valeur ancienne » | MQ-040 et MQ-210 : « 3 valeurs anciennes : montre, Horizon Vie, Toits Partagés » |
| Fond de la feuille Ajouter | MQ-029 : accueil sans courbe, « Mis à jour à 09:41 · 12 comptes » | MQ-024 : accueil avec courbe, « 1 valeur ancienne » |
| Libellé et calque | MQ-236 : texte « Connecter automatiquement » | Calque nommé « Gérer la connexion », lien vers l'écran de vente MQ-203 |
| Vocabulaire | « comptes » (MQ-201), « établissements » (MQ-024, MQ-025), « biens » (menu Ajouter) | Aucune définition ; la limite de l'offre porte sur « comptes » |
| Présélection | MQ-025 « Ajouter un bien ou un crédit » | MQ-031 s'ouvre avec « Compte courant » coché |
| Profil d'exemple | MQ-010 : « Offre Signature » | Parcours d'inscription gratuit : aucun profil ni écran d'offres (MQ-016) en état Essentiel |

## 8. Design

- **Typographie** (lu dans les calques) : montant 52, titres 28 et 22, corps 16 et 17, secondaire 14, tertiaire 13, intertitres 12 en capitales. L'échelle est cohérente d'un écran à l'autre. Mais les informations qui comptent pour un méfiant sont dans les plus petites tailles : « soit 3,33 € par mois », « Paiement par l'App Store », « Résiliation en trois clics », « offre Plus » sont en 13 ou 14 points gris.
- **Contraste** (estimé à partir des couleurs des calques, fond noir ou carte gris très sombre) : texte blanc excellent. Gris secondaire `9B9BA3` environ 7,6:1 sur noir, correct. Gris tertiaire `83838C` environ 5,6:1 sur noir et proche de 4,5:1 sur les cartes : à la limite pour du 13 points, insuffisant pour un lecteur de 68 ans. Orange `FFB340` et bleu `5CC8FF` : corrects.
- **Hiérarchie** : très bonne sur MQ-024, MQ-025, MQ-032. Plate sur MQ-201 (trois cartes de même poids) et MQ-005 (trois cartes, aucune recommandation de lecture, bouton d'apparence désactivée).
- **Alignements et espacements** (sur les sept captures) : marges de 16 points tenues partout, cartes régulières. Défauts : rangée d'icônes de MQ-025 désalignée, icône PEA d'une autre couleur sur MQ-031, pastilles coupées sur MQ-036, bas de MQ-201 trop serré contre l'indicateur d'accueil, grand vide sous la liste de MQ-036 et sous les cartes de MQ-005.
- **Boutons et liens** : un bouton blanc plein par écran, liens en bleu. Règle bien tenue, sauf MQ-201 où aucun bouton n'est principal, et MQ-203 où le seul bouton blanc est l'achat.
- **Thème** : tous les écrans du parcours sont en thème sombre. Aucun écran du parcours n'a été vu en clair. Un lecteur âgé en plein jour choisira probablement le clair : à maquetter au moins pour MQ-024 et MQ-201.

## 9. Mobile

Estimation sur maquette statique, à la taille de texte par défaut. Le prototype relie les écrans mais ne simule ni défilement, ni saisie, ni agrandissement du texte.

- **Usage à une main** : boutons principaux en bas (y 706 à 772), bien placés. Le retour (44 × 44, en haut à gauche) et la croix de MQ-201 (en haut à droite) sont hors de portée du pouce sur un écran de 6,1 pouces. Le « + » et la cloche de MQ-024, 44 × 44 chacun, sont voisins de 8 points environ.
- **Cibles tactiles** : toutes les zones liées font au moins 44 points de haut (lignes 68 à 88, onglets 69 × 47, zones 329 × 44 sur MQ-201). Conforme sur le papier. Attention au décalage entre zone et dessin : les trois boutons de MQ-201 paraissent hauts d'environ 32 points, ce qui les fait percevoir comme petits.
- **Boutons proches** : MQ-203, achat et alternative séparés d'environ 8 points. MQ-005, trois cartes séparées d'environ 12 points, dont une à 100 €. C'est exactement la crainte de ce persona.
- **Défilement** : MQ-201 dépasse le cadre (« Restaurer mes achats » à y 860). Défilement horizontal des pastilles sur MQ-036, peu découvrable.
- **Texte agrandi** (non maquetté, risques relevés sur les tailles par défaut) :
  - MQ-024 : « 184 320,57 € » en 52 points occupe déjà la quasi-totalité des 361 points utiles. Un montant à six chiffres ne tient plus dès le premier cran d'agrandissement.
  - MQ-024, lignes d'établissement : nom à gauche, montant à droite (« −183 608,07 € ») sur une même ligne. Collision certaine en grand texte.
  - Barre d'onglets : « Patrimoine » remplit déjà son onglet de 69 points en 13 points.
  - MQ-031 : quatre tuiles sur dix sont déjà sur deux lignes ; hauteur de tuile apparemment fixe.
  - MQ-201 : libellés de bouton en 13 points dans une pastille de hauteur fixe ; prix et nom d'offre sur la même ligne.
  - MQ-005 : titre, « Gratuit » ou « 100 € une fois » et bouton radio sur une seule ligne.
  - MQ-036 : nom de l'établissement et méthode (« Connexion · fichier ») sur la même ligne.
  - MQ-040 et MQ-210 : classe, montant et pourcentage sur une ligne en 13 et 14 points.

## 10. Éléments manquants

Écrans et états absents du fichier (d'après l'inventaire des cadres et leurs liens) :

1. Formulaire de saisie manuelle d'une **assurance vie** (valeur du contrat, date de la valeur).
2. Formulaire de création d'un **bien immobilier** (adresse ou ville, valeur retenue, bien loué ou non).
3. **Accueil et Patrimoine à un, deux, trois éléments** saisis à la main, sans dette.
4. **Toute maquette en texte agrandi** (tailles d'accessibilité iOS).
5. MQ-005 : état avec un choix coché ; confirmation d'achat de l'option à 100 €.
6. Écran ou message **« limite de comptes atteinte »** en Essentiel, et définition de ce qui compte pour un « compte ».
7. Confirmation après enregistrement (MQ-032 vers l'accueil) : bouton « Terminé » ou retour au total.
8. MQ-036 : recherche en cours de saisie, aucun résultat, filtre « Assurance vie » actif.
9. MQ-016 et MQ-010 en état **Essentiel** (l'exemple est un compte Signature).
10. Aide contextuelle sur MQ-201 et MQ-005 ; état d'erreur de MQ-004 (code faux ou expiré).
11. MQ-208 : sélecteur de type (un assureur n'est pas une « Banque », valeur par défaut affichée).
12. Parcours en thème clair.

Liens de prototype absents :

- MQ-031 : les dix tuiles.
- MQ-036 : lignes « Horizon Vie », « Néo Banque Orbe », « Toits Partagés », pastilles de filtre, champ de recherche.
- MQ-005 : les trois cartes de choix.
- MQ-045 : onglets « Aperçu », « Crédit », « Documents » et bouton « Modifier la valeur retenue ».
- MQ-046 : « Mettre à jour la valeur ».
- MQ-250 : toutes les questions fréquentes (seul « Signaler un problème » est lié).
- MQ-236 : retour vers l'accueil.

Non vérifié faute de quota : MQ-220, MQ-027, MQ-212, MQ-030, MQ-209, MQ-215, MQ-217, tous les écrans web et « Autres formats ».

## 11. Top 5 des corrections

1. **Rendre le parcours gratuit jouable de bout en bout.** Maquetter les formulaires manuels « Assurance vie » et « Bien immobilier », lier les tuiles de MQ-031, ajouter un retour vers l'accueil après MQ-032, et maquetter l'accueil à un, deux et trois éléments sans dette.
2. **Dire la vérité sur le gratuit en une fois.** Aligner MQ-201 et MQ-005 (5 ou 2 comptes), définir « compte », sortir l'option à 100 € de l'écran « Essentiel gratuit » ou la séparer visiblement des choix gratuits, présélectionner un choix gratuit, écrire « aucun paiement, aucune carte demandée » sous Essentiel.
3. **Maquetter le texte agrandi** sur MQ-201, MQ-005, MQ-025, MQ-031, MQ-036, MQ-024 et MQ-040, avec les règles de passage à la ligne (montant sous le libellé, onglets, tuiles à hauteur libre).
4. **Désamorcer les écrans de vente.** MQ-203 : ajouter « Saisir à la main » et « Rester en gratuit », écarter les deux boutons. MQ-202 : méthodes gratuites en premier, étiquette « Plus » visible. MQ-218 : bouton « Annuler » libellé. MQ-039 : dire si la lecture du relevé est incluse en Essentiel. Revoir l'onglet « LiVi IA » pour un compte gratuit.
5. **Parler la langue de Michel et corriger les chiffres qui se contredisent.** Aide accessible depuis MQ-201 et MQ-005 ; remplacer « compteurs », « enseignes », « clé d'accès », « Connexion · PDF », « À renouveler » par des mots courants ; aligner « 1 valeur ancienne » (MQ-024) et « 3 valeurs anciennes » (MQ-040) ; « Date d'ouverture » facultative (MQ-032).

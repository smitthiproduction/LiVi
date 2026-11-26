# Test UX persona 04 — Michel Garnier, 68 ans, retraité prudent

- Date : 26 novembre 2026
- Maquette : fichier Figma `cR7EtAZKpKCkgOoEqcJ8Wq`, page « Parcours iPhone » (prototype) et page « 11 · Web »
- Objectif joué : souscrire à l'offre Plus pour connecter sa banque automatiquement, seulement après avoir compris exactement ce qu'il paie et comment résilier
- Méthode : lecture seule, 14 appels Figma sur 15. Aucune donnée envoyée à l'extérieur, aucun autre rapport consulté.

## 1. Résumé et score

**Score : 4,5 / 10 pour cet objectif.**

Michel ne souscrit pas. Le prix se comprend (40 €/an), le ton est honnête et l'écran de consentement bancaire est rassurant. Mais sa condition d'achat n'est jamais remplie : la résiliation est promise « en trois clics » sur cinq écrans et expliquée sur aucun. Pire, le second chemin vers Plus (depuis l'ajout d'une banque) passe de « Passer à Plus · 40 €/an » à « Abonnement Plus activé » sans récapitulatif ni confirmation, ce qui réalise exactement sa peur : payer sans l'avoir voulu. Après l'achat, rien ne confirme ce qui a été payé. Sur le web, les écrans d'offres ne sont pas conçus.

Verdict du personnage : « Je ferme et j'appelle ma fille. »

### Ce qui a été examiné, et comment

| Niveau d'examen | Écrans |
|---|---|
| Rendu visuel + textes, tailles, liens de prototype | MQ-201, MQ-218, MQ-203, MQ-220, MQ-037, MQ-204, MQ-016, MQ-005 |
| Textes, tailles, positions et liens de prototype, sans rendu visuel | MQ-001, MQ-002, MQ-025, MQ-244, MQ-036, MQ-202, MQ-010, MQ-250, MQ-006 ; web MQ-224, MQ-232, MQ-228 |
| Non ouverts (quota) | MQ-007, MQ-003, MQ-004, MQ-219, MQ-221, MQ-209, MQ-009, MQ-013, MQ-018 et le reste du fichier |

Les jugements d'alignement, d'espacement et de contraste ne valent que pour la première ligne. Les contrastes sont calculés à partir des couleurs relevées ; les fonds des feuilles n'ont pas été mesurés.

## 2. Contexte persona

Ancien comptable à Bordeaux, veuf. Un compte courant, une assurance vie ancienne, un appartement loué. Il sait lire un prix, un échéancier et une clause de reconduction ; il ne sait pas ce qu'est une clé d'accès, un agrégateur ou une « feuille de l'App Store ». iPhone avec texte agrandi, lecture lente, méfiance envers les achats intégrés et les arnaques. Il veut deux choses : son total, et la valeur de son assurance vie.

Sa règle : il ne paie que s'il peut répondre par écrit à quatre questions. Combien ? Quand suis-je prélevé à nouveau ? Comment j'arrête ? À qui je m'adresse ?

## 3. Parcours joué

Trois chemins ont été suivis dans le prototype iPhone (flux « 1 · Inscription et offres », « 2 · Ajouter un établissement », « 8 · Profil et réglages »).

| # | Écran | Ce que fait Michel | Ce qu'il comprend ou ressent | Verdict |
|---|---|---|---|---|
| 1 | MQ-001 Bienvenue | Lit tout, lentement | « Ne vend aucun produit financier », « jamais revendues » : rassuré. Veut lire les conditions avant de continuer : la mention du bas (12,5 px) n'est pas un lien | Correct, conditions inaccessibles |
| 2 | MQ-002 Créer votre compte | Choisit Apple | « Aucun mot de passe à retenir » lui plaît. « Clé d'accès » ne lui dit rien | Correct |
| 3 | MQ-007 Activer Face ID | (non ouvert) | — | Non évalué |
| 4 | MQ-201 Présentation des offres | Compare les trois cartes | Prix lisible. Hésite sur « 40 €/an, soit 3,33 € par mois » : annuel ou mensuel ? La seule ligne sur la résiliation est la plus petite et la plus grise de l'écran | Doute |
| 5 | MQ-218 Confirmation Plus (feuille) | Touche « Choisir Plus », lit le récapitulatif | Bon réflexe de l'application : prix, renouvellement, résiliation. Mais « En trois clics » ne dit ni où ni comment. Pas de bouton « Annuler ». « Confirmer avec Face ID » puis « feuille de l'App Store, avec Face ID » : deux fois ? | **Abandon** : il referme |
| 6 | MQ-005 Votre choix pour Essentiel | Arrive ici en fermant | On lui propose aussitôt un autre achat (100 € une fois) parmi « trois choix de même valeur » | Méfiance |
| 7 | MQ-025 Accueil vide | Touche « Ajouter un établissement » | « 0,00 € », message clair | Correct |
| 8 | MQ-036 Annuaire | Cherche sa banque, puis son assurance vie | Les mentions « Connexion · fichier », « Clé · fichier », « Connexion · PDF » ne sont pas expliquées. La ligne Horizon Vie (assurance vie) ne mène nulle part dans le prototype | Friction |
| 9 | MQ-202 Comment ajouter (feuille) | Choisit « Connecter automatiquement » | Trois méthodes claires, « offre Plus » annoncée sous la ligne | Bon |
| 10 | MQ-203 Connexion automatique incluse dans Plus | Lit, touche « Passer à Plus · 40 €/an » | Découvre « jusqu'à 10 connexions bancaires », jamais dit avant. Le bouton payant est à 8 px du bouton gratuit | Risque |
| 11 | MQ-220 Double authentification requise | Subit | Une ligne verte de 12,5 px lui apprend que « Abonnement Plus activé ». Aucun récapitulatif, aucune confirmation entre les deux écrans. Puis une obligation jamais annoncée, en jargon, sans issue | **Rupture de confiance** |
| 12 | MQ-037 Autoriser la lecture | Lit | Meilleur écran du parcours : ce que LiVi pourra et ne pourra pas faire. « Notre agrégateur agréé » n'a pas de nom | Bon |
| 13 | Écran de la banque | — | Manquant (hors application) | Manquant |
| 14 | MQ-204 Comptes trouvés | Coche ses comptes | Clair. Montants en 13 px, petits pour lui | Bon |
| 15 | MQ-010 → MQ-016 Offres et abonnement | Veut vérifier ce qu'il a payé et comment arrêter | L'écran montre l'offre Signature d'une autre personne (Camille Martin). Aucun état « Plus ». « Gérer l'abonnement » sort de l'application | Échec |
| 16 | MQ-250 Aide | Touche « Offres, paiement et résiliation » | Aucun lien dans le prototype, article absent | Manquant |

### Options testées

- **Offres** : les trois boutons de MQ-201, la croix de fermeture, les liens légaux.
- **Paiement** : feuille MQ-218 (bouton principal, voile, poignée) ; bouton « Passer à Plus » de MQ-203.
- **Compte** : Profil MQ-010, Offres et abonnement MQ-016 (« Gérer l'abonnement », « Changer pour Plus »), Apparence MQ-006 (taille du texte).
- **Aide** : MQ-250, ligne « Offres, paiement et résiliation » et « Signaler un problème ».
- **Filtres** : pastilles de l'annuaire MQ-036, lues mais non jouées (pas d'état filtré examiné).
- **Panier** : sans objet, il n'y en a pas.
- **Web** : MQ-224, MQ-232, MQ-228.

## 4. Points forts

- **MQ-037** : la séparation « LiVi pourra / LiVi ne pourra pas », avec « Faire un virement ou un paiement » du côté interdit, répond exactement à la peur de l'arnaque. Durée d'accès (180 jours) et révocation écrites.
- **MQ-201** : les trois offres ont le même poids visuel, aucun bouton n'est mis en avant, aucun compte à rebours, aucune fausse promotion. Prix TTC annoncé.
- **MQ-218** : l'idée d'un récapitulatif avant paiement est la bonne, avec la date de renouvellement en clair (« Le 16 nov. 2027 »).
- **MQ-203** : l'alternative gratuite (« Importer un fichier à la place ») est proposée sur le même écran que l'offre payante. « LiVi ne voit jamais vos identifiants bancaires » est dit au bon moment.
- **MQ-204** : la carte à débit différé décochée avec « Déjà incluse dans le compte courant » évite un double compte. Un comptable apprécie.
- **MQ-001** : promesse nette (« ne vous dit jamais quoi faire »).
- Boutons principaux hauts de 54 à 56 px, placés en bas d'écran. Nombres au format français, vrai signe moins.

## 5. À ajuster

### Bloquant

1. **MQ-203 → MQ-220 : abonnement activé sans confirmation.** Le bouton « Passer à Plus · 40 €/an » mène directement à la feuille « Abonnement Plus activé · dernière étape avant la connexion ». Ni le récapitulatif de MQ-218, ni la feuille de paiement du système ne figurent sur ce chemin. Tel que maquetté, un seul toucher engage 40 €.
2. **La résiliation n'est expliquée nulle part.** « Résiliation en trois clics » figure sur MQ-201, MQ-218, MQ-203 et MQ-016, sans jamais dire lesquels, ni où, ni auprès de qui (LiVi ou Apple, puisque le paiement passe par l'App Store). « Gérer l'abonnement » (MQ-016) ouvre une adresse externe non maquettée. Aucun écran de résiliation n'existe dans le fichier examiné.
3. **Aucune confirmation après l'achat.** « Confirmer avec Face ID » (MQ-218) renvoie à l'accueil vide MQ-025 : pas de « Votre abonnement Plus est actif », pas de montant débité, pas de mention d'un reçu. Sur l'autre chemin, la seule trace est une ligne verte de 12,5 px (MQ-220).
4. **Web : parcours d'achat non conçu.** MQ-224 « Offres après l'inscription », MQ-232 « Offres et abonnement » et MQ-228 « Connexion automatique » sont des cadres vides marqués « À concevoir ». La page Web ne compte que 2 liens de prototype et aucun flux. Rien n'est testable sur ordinateur, là où la fille de Michel l'aiderait.

### Important

5. **MQ-218 : pas de bouton « Annuler ».** La feuille ne se ferme que par la poignée ou en touchant le fond assombri. Michel ne connaît pas ces gestes ; il se sent enfermé devant un bouton de paiement.
6. **MQ-218 : ambiguïté sur le moment où l'on paie.** Le bouton dit « Confirmer avec Face ID », le texte dit « Vous confirmez le paiement dans la feuille de l'App Store, avec Face ID ». Une ou deux confirmations ? La feuille du système n'est pas maquettée.
7. **MQ-201, MQ-218 : la reconduction automatique n'est pas dite.** « Renouvellement · Le 16 nov. 2027 » ne précise ni « automatique », ni le montant prélevé à cette date, ni un rappel avant échéance.
8. **MQ-201, MQ-016 : « 40 €/an » puis « soit 3,33 € par mois ».** Lu vite, on croit à un prélèvement mensuel. Écrire que le paiement est annuel, en une fois.
9. **MQ-201 : l'information décisive est la moins lisible.** « Résiliation en trois clics, rétractation de 14 jours. Paiement par l'App Store, prix TTC. » est en 12,5 px, gris #83838c, sous les trois cartes.
10. **MQ-220 : obligation révélée après le paiement.** La double authentification obligatoire n'est annoncée ni sur MQ-201, ni sur MQ-218, ni sur MQ-203. Les deux choix (« Créer une clé d'accès », « Utiliser une application d'authentification ») sont du jargon, sans explication, sans « Plus tard », sans aide.
11. **MQ-203 : limite cachée.** « Jusqu'à 10 connexions bancaires » n'apparaît que là. MQ-201, MQ-218 et MQ-016 disent « Connexion automatique des banques et courtiers » et « Comptes illimités ».
12. **Assurance vie : couverture incertaine.** L'offre Plus promet « banques et courtiers ». L'annuaire affiche « Connexion · PDF » pour Horizon Vie, et cette ligne n'a pas de lien de prototype. Michel ne peut pas savoir si ses 40 € couvrent son besoin principal.
13. **MQ-016 : aucun état pour l'abonné Plus ni pour l'utilisateur gratuit.** Seul le cas Signature est montré.
14. **Rétractation de 14 jours : aucune modalité.** Comment, auprès de qui, remboursement intégral ou non.
15. **Texte agrandi non maquetté.** MQ-006 annonce « Taille du texte · Suit le réglage de l'iPhone », mais aucun écran d'offre n'existe en grande taille. Les boutons de 32 px, les lignes de 46 px et un MQ-201 déjà plein à la taille standard laissent prévoir des débordements.

### Mineur

16. **MQ-201** : la barre d'accueil du téléphone passe sur les liens « Conditions d'utilisation » et « Confidentialité » ; « Restaurer mes achats » est sous la ligne de flottaison.
17. **MQ-201** : en faisant défiler, la feuille « Abonnement Plus » rangée hors écran (à partir de y 884) chevauche les liens légaux (jusqu'à y 890) et montre un bouton « Confirmer avec Face ID » sans lien. Probable artefact de prototype, à masquer.
18. **MQ-005** : « Trois choix de même valeur » alors que l'un coûte 100 €. Et « Continuer » mène à l'accueil sans écran de confirmation pour cet achat.
19. **MQ-016** : « Prix réglables, affichés avant tout achat » inquiète (les prix peuvent changer ?). « Signature renouvelée le 2 oct. 2027 » se lit au passé pour une date future.
20. **MQ-037** : « Étape 2 sur 3 » sans que l'étape 1 soit identifiable ; « notre agrégateur agréé » sans nom ni autorité d'agrément.
21. **MQ-220, MQ-037** : le pictogramme des boutons « Créer une clé d'accès » et « Continuer vers Banque Rivière » se lit comme un fragment d'indicateur de chargement.
22. **MQ-001, MQ-002** : « conditions d'utilisation » et « politique de confidentialité » sont du texte simple, sans lien.
23. **MQ-036** : légende absente pour « Connexion », « Clé », « fichier », « PDF ».

## 6. Frictions (vécu du personnage)

- « Trois clics, où ça ? » Je cherche la marche à suivre avant de payer. Je ne la trouve ni sur l'offre, ni dans le profil, ni dans l'aide.
- « J'ai appuyé pour voir, et c'est activé. » Sur MQ-203, je pensais obtenir le détail. L'écran suivant m'annonce que c'est fait.
- « Face ID, c'est ma signature. » On me la demande sur un bouton, puis on m'annonce qu'on me la redemandera. Je ne signe pas deux fois sans savoir pourquoi.
- « Je ne vois pas comment reculer. » Pas de bouton « Annuler » sur la feuille de paiement.
- « On me vend autre chose dès que je refuse. » Je ferme l'offre, on me propose 100 €.
- « Et mon assurance vie ? » Rien ne me dit que Plus la prend en charge.
- « Clé d'accès, application d'authentification » : je pose le téléphone et j'attends ma fille.

## 7. Incohérences

| Sujet | Écran A | Écran B |
|---|---|---|
| Chemin vers Plus | MQ-201 → MQ-218 : récapitulatif puis confirmation | MQ-203 → MQ-220 : activation directe |
| Contenu de Plus | MQ-201, MQ-016 : pas de plafond de connexions | MQ-203 : « Jusqu'à 10 connexions bancaires » |
| Suite de l'achat | MQ-218 → accueil vide MQ-025, sans double authentification | MQ-203 → MQ-220 : double authentification obligatoire avant toute connexion |
| Libellé d'achat | MQ-201 : « Choisir Plus » | MQ-203 : « Passer à Plus · 40 €/an » ; MQ-016 : « Changer pour Plus » |
| Mention légale | MQ-201 : résiliation, rétractation, App Store, TTC | MQ-203 : résiliation et rétractation seulement |
| Boutons d'offre | MQ-201, MQ-016 : 32 px de haut, libellé 13 px | MQ-203, MQ-218 : 54 à 56 px, libellé 16 px |
| Personne affichée | Parcours d'un nouvel inscrit sans offre | MQ-010, MQ-016 : Camille Martin, déjà en Signature |
| « Même valeur » | MQ-005 : « Trois choix de même valeur » | MQ-005 : deux gratuits, un à 100 € |

## 8. Design

- **Clarté et hiérarchie** : titres en 28 px et 22 px francs, cartes bien séparées. La hiérarchie s'inverse sur l'essentiel : les avantages sont en 14 px blanc, les conditions d'engagement en 12,5 px gris.
- **Alignements et espacements** : grille régulière (marges de 16 px, cartes de 361 px), prix alignés à droite, rien de bancal sur les huit écrans rendus. Deux défauts : 8 px seulement entre le bouton payant et le bouton gratuit de MQ-203 ; liens légaux de MQ-201 sous la barre d'accueil.
- **Lisibilité** : trop de texte entre 12 et 13 px pour ce lecteur : libellés des boutons d'offre (13 px), « soit 3,33 € par mois » (12,5 px), mentions légales (12,5 px), montants des comptes sur MQ-204 (13 px), intertitres en capitales (12 px).
- **Contraste** (calculé) : gris #9b9ba3 sur noir, environ 7,6:1, bon. Gris #83838c sur noir, environ 5,6:1 ; sur les cartes #1a1a1d, environ 4,6:1, soit le minimum admis, appliqué au texte le plus petit. Insuffisant en pratique pour un œil de 68 ans.
- **Boutons et liens** : deux familles de boutons pour la même action d'achat. Sur MQ-201 les trois boutons gris se confondent avec le fond des cartes ; neutre, mais peu visible. Sur MQ-005, « Continuer » apparaît grisé sans dire qu'il faut d'abord choisir.
- **Cohérence** : composants et thème sombre tenus d'un écran à l'autre. Les feuilles n'ont ni titre de barre ni bouton de fermeture explicite.

## 9. Mobile

Estimation sur maquette statique et liens de prototype ; aucun appareil réel, aucun réglage de texte agrandi n'a pu être simulé.

- **Une main** : les actions principales sont en bas (y 672 à 818), bien placées pour le pouce. La croix de fermeture de MQ-201 (haut droit, y 54) et le retour (haut gauche) obligent à changer de prise.
- **Cibles tactiles** : les boutons d'offre font 32 px de haut, portés à 44 pt par un calque transparent. La zone est conforme, la cible visible ne l'est pas : Michel vise ce qu'il voit. Cases radio et cases à cocher de 24 px dans des lignes de 66 px, correct si toute la ligne réagit (aucun lien de prototype sur les cartes de MQ-005 pour le vérifier). Liens « Conditions d'utilisation » et « Confidentialité » accolés sans espace, dans la zone de la barre d'accueil.
- **Proximité dangereuse** : MQ-203, 8 px entre « Passer à Plus · 40 €/an » et « Importer un fichier à la place ». Un pouce hésitant déclenche l'achat, et cet achat n'a pas de confirmation.
- **Défilement** : MQ-201 dépasse l'écran (liens légaux jusqu'à y 890 pour 852 de haut). « Restaurer mes achats » n'est visible qu'en défilant, sans indice.
- **Texte agrandi** : non maquetté. À une taille d'accessibilité, MQ-201 passerait probablement à trois écrans de haut, la ligne sur la résiliation très loin sous les boutons.

## 10. Éléments manquants

- Écran ou article « Comment résilier » : les trois clics, pas à pas.
- Destination de « Gérer l'abonnement » et de « Changer pour Plus » (MQ-016).
- Feuille de paiement du système, ou au moins sa représentation.
- Récapitulatif et confirmation sur le chemin MQ-203.
- Écran de succès après achat (offre active, montant, date de renouvellement, reçu).
- États d'échec : paiement refusé, annulé, hors ligne pendant l'achat.
- MQ-016 pour un abonné Plus et pour un utilisateur Essentiel.
- Confirmation d'achat pour « Confidentialité à vie, 100 € » (MQ-005).
- Article d'aide « Offres, paiement et résiliation » (MQ-250, aucun lien) et destinations des liens légaux.
- Modalités de la rétractation de 14 jours.
- Variantes en texte agrandi des écrans MQ-201, MQ-218, MQ-203.
- Lien de prototype sur la ligne Horizon Vie (MQ-036) et sur Néo Banque Orbe, Toits Partagés.
- Écran de création de la clé d'accès entre MQ-220 et MQ-037 dans ce flux.
- Écran de la banque (authentification forte), même schématique.
- Web : MQ-224, MQ-232, MQ-228 entièrement à concevoir ; aucun parcours d'achat sur ordinateur.
- Offre mensuelle ou période d'essai : absentes, sans que ce soit dit.

## 11. Top 5 des corrections

1. **Faire passer tout achat de Plus par le même récapitulatif.** MQ-203 doit ouvrir MQ-218, jamais MQ-220 directement. Aucun chemin où un seul toucher active un abonnement.
2. **Montrer la résiliation avant le paiement.** Remplacer « En trois clics » par le chemin exact, préciser à qui s'adresser, et maquetter l'écran correspondant depuis MQ-016. Ajouter la marche à suivre pour la rétractation.
3. **Refaire la feuille MQ-218 pour un lecteur prudent.** Bouton « Annuler » visible, mention « Paiement annuel de 40 € en une fois », « Renouvellement automatique le 16 nov. 2027, 40 € », un seul moment de confirmation clairement nommé, et l'annonce de la double authentification obligatoire.
4. **Confirmer après l'achat.** Écran de succès avec montant, date, moyen de résilier, puis un MQ-016 à l'état « Plus ».
5. **Remonter la lisibilité des informations d'engagement.** Mentions de prix, de résiliation et de limites en 16 px minimum et en couleur principale ; boutons d'offre de 44 px visibles avec libellé de 16 px ; plafond de 10 connexions et couverture de l'assurance vie écrits dès MQ-201 ; écrans vérifiés en texte agrandi. Concevoir ensuite les écrans web MQ-224 et MQ-232.

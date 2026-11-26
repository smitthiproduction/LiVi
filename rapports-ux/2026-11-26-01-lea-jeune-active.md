# Test UX persona 01 — Léa Fontaine, jeune active qui débute

- Date : 26 novembre 2026
- Maquette : fichier Figma `cR7EtAZKpKCkgOoEqcJ8Wq`, page « Parcours iPhone » (cadres 393 × 852), pages « 11 · Web » et « 10 · Autres formats » pour le contrôle des autres formats
- Objectif joué : découvrir ce que permet l'offre gratuite, décider si Plus (40 € par an) vaut le coup, y souscrire si oui
- Méthode : lecture seule. Inventaire des pages et cadres, lecture des textes et des liens de prototype de 33 cadres, captures de 9 écrans. 14 appels Figma sur 15.

## 1. Résumé et score

**Score : 5,5 / 10**

L'inscription est rapide et le discours d'entrée est exactement celui que j'attends (« LiVi ne vend aucun produit financier et ne vous dit jamais quoi faire »). Trois écrans plus tard, la confiance retombe : l'écran des offres promet « Jusqu'à 5 comptes » en gratuit, puis l'écran suivant m'apprend que c'est 2 comptes si je refuse d'envoyer des « compteurs anonymes », ou 100 € pour garder mes 5 comptes sans contribuer. J'ai trois comptes. Pour quelqu'un qui se méfie des conditions cachées, c'est le moment où je ferme l'application.

**Décision dans le personnage : je ne souscris pas à Plus au premier passage.** Les trois arguments affichés (connexion automatique, comptes illimités, analyses avancées) ne répondent pas à mon besoin (« savoir où passe mon salaire ») et le premier touche ma principale peur (connecter ma banque). Les vraies raisons qui me feraient payer (budget mis à jour sans import de fichier, plus de 5 enveloppes de budget) existent dans la maquette mais ne figurent pas sur l'écran des offres. J'ai quand même joué les deux chemins de souscription pour les évaluer : aucun ne se termine par une confirmation d'achat.

## 2. Contexte du persona

Léa, 27 ans, chargée de communication à Lyon, CDI, locataire. Un compte courant et un livret A dans une banque en ligne, un PEL ouvert par ses parents : trois comptes, aucun placement en bourse. iPhone, tout sur mobile. Abandonne si l'inscription est longue. Freins : jargon financier, abonnements cachés, peur de connecter sa banque, méfiance envers les applications qui poussent des produits.

## 3. Parcours joué

| # | Écran | Ce que je fais | Ce que je ressens | Verdict |
|---|---|---|---|---|
| 1 | MQ-001 Bienvenue | Je lis, je touche « Créer un compte » | Rassurée par « aucun conseil, aucune vente ». Mais « patrimoine », « courtiers, crypto, immobilier » : je me demande si c'est pour moi. Aucun mot sur le prix ni sur « gratuit ». | Correct |
| 2 | MQ-002 Créer votre compte | « Continuer avec Apple » | Un seul toucher, pas de mot de passe. Très bien. « Clé d'accès » : je ne sais pas ce que c'est. | Bon |
| 3 | MQ-003, MQ-004 (variante e-mail) | Adresse puis code | Deux écrans de plus, acceptable. | Bon |
| 4 | MQ-007 Activer Face ID | « Activer Face ID » | Clair, « Plus tard » disponible. | Bon |
| 5 | MQ-201 Présentation des offres | Je compare, je touche « Continuer avec Essentiel » | On me demande de choisir avant d'avoir vu l'application. Les trois cartes ont le même poids, rien ne me pousse : j'apprécie. « Analyses et statistiques avancées » ne me dit rien. | Moyen |
| 6 | MQ-005 Votre choix pour Essentiel | Je bloque | « Trois choix de même valeur » : faux, l'un coûte 100 €, l'autre me limite à 2 comptes. Je découvre que « 5 comptes » était conditionnel. **Point d'abandon probable.** | Mauvais |
| 7 | MQ-025 Accueil vide | Je regarde les onglets | Écran propre. Le budget, ma raison d'être là, est le troisième onglet. | Correct |
| 8 | MQ-217 Budget vide | « Ajouter un établissement » | Message clair. « Créer une enveloppe à la main » mène au budget proposé (MQ-211), pas à une création. | Moyen |
| 9 | MQ-212 LiVi IA sans Signature | Je touche l'onglet par curiosité | Un onglet entier de la barre principale sert à me proposer une offre à 150 €/an. Je le lis comme de la vente. | Mauvais pour moi |
| 10 | MQ-036 Annuaire | Je cherche ma banque en ligne | « Connexion · fichier », « Clé · fichier » : incompréhensible. Seule Banque Rivière est reliée. | Moyen |
| 11 | MQ-202 Comment l'ajouter | « Connecter automatiquement » | Trois méthodes bien expliquées, mention « offre Plus » visible avant de toucher. | Bon |
| 12 | MQ-203 Connexion incluse dans Plus | J'hésite, je touche « Passer à Plus · 40 €/an » | Feuille honnête, alternative gratuite juste en dessous. Mais « Jusqu'à 10 connexions bancaires » à côté de « Comptes illimités » : lequel est vrai ? | Correct |
| 13 | MQ-220 Double authentification requise | Je subis | « Abonnement Plus activé » en une ligne verte de 12,5 pt : j'ai payé ? Sans récapitulatif ? Et on m'impose tout de suite un « second facteur ». | Mauvais |
| 14 | MQ-037 Autoriser la lecture | Je lis | Le meilleur écran du parcours : « LiVi pourra / LiVi ne pourra pas ». « Étape 2 sur 3 » alors que je n'ai jamais vu d'étape 1. | Bon |
| 15 | MQ-204 Comptes trouvés | « Ajouter 3 comptes » | Clair. | Bon |
| 16 | Variante : MQ-201 → MQ-218 Confirmation Plus | « Choisir Plus », puis « Confirmer avec Face ID » | Récapitulatif net. Après confirmation, retour sur l'accueil vide (MQ-025) sans aucun signe que je suis abonnée. | Moyen |
| 17 | MQ-010 Profil → MQ-016 Offres et abonnement | Je cherche comment résilier | L'écran n'existe que pour un compte Signature. Mon état (Essentiel ou Plus) n'est pas maquetté. | Manquant |
| 18 | MQ-250 Aide | Je cherche « paiement et résiliation » | La ligne existe, sans lien. Tout s'ouvre « en ligne ». | Manquant |

### Options testées

- **Offres et paiement** : MQ-201, MQ-218, MQ-203, MQ-220 (deux chemins de souscription). La feuille de paiement de l'App Store n'est pas représentée.
- **Compte** : MQ-010 Profil, MQ-016 Offres et abonnement, MQ-015 Confidentialité (textes et liens).
- **Aide** : MQ-250.
- **Filtres** : pastilles de l'annuaire MQ-036 (Tous, Banques, Néobanques…) : aucune n'a de lien de prototype, pas plus que le champ de recherche.
- **Panier** : sans objet, il s'agit d'un abonnement.
- **Budget et épargne** : MQ-217, MQ-211, MQ-079, MQ-086, MQ-047 (textes et liens ; capture de MQ-211 seulement).
- **Web** : MQ-224 et MQ-232, lus par leurs textes.

Écrans évalués par capture : MQ-001, MQ-201, MQ-218, MQ-005, MQ-203, MQ-220, MQ-025, MQ-016, MQ-211. Les autres l'ont été par leurs textes, tailles, couleurs et liens de prototype : je ne me prononce pas sur leur rendu visuel.

## 4. Points forts

- **MQ-001** : la promesse de neutralité est en deuxième ligne de l'écran d'accueil, répétée dans la troisième puce. C'est l'argument qui me fait créer un compte.
- **MQ-002 à MQ-007** : inscription en 3 touchers avec Apple, 5 avec un e-mail. Aucun formulaire, aucun mot de passe, aucune question personnelle.
- **MQ-201** : trois offres au même niveau visuel, prix annuel et équivalent mensuel, « Résiliation en trois clics, rétractation de 14 jours » sur l'écran. Aucune offre « recommandée », aucun compte à rebours.
- **MQ-203** : le bouton « Importer un fichier à la place » est juste sous le bouton payant. On ne me force pas la main.
- **MQ-037** : la liste « pourra / ne pourra pas » répond directement à ma peur de connecter ma banque.
- **MQ-218** : prix, date de renouvellement et résiliation sur une seule feuille, avant Face ID.
- **MQ-086 Abonnements détectés** : la hausse d'un abonnement signalée (« 13,49 € puis 15,99 € ») est exactement ce que je viens chercher. Cet écran devrait servir d'argument, il est invisible avant l'inscription.
- Prix cohérents partout où je les ai croisés : 40 €/an (MQ-201, MQ-203, MQ-218, MQ-016), 150 €/an (MQ-201, MQ-212, MQ-016).
- Zones de toucher : tous les éléments reliés mesurent au moins 44 pt (calques `ui/zone-44`).

## 5. À ajuster

### Bloquant

1. **MQ-201 puis MQ-005 — la promesse « Jusqu'à 5 comptes » est conditionnelle et on ne le dit qu'après.** L'offre gratuite vaut 5 comptes si j'accepte la contribution anonyme, 2 comptes si je refuse, ou 100 € « une fois » pour 5 comptes sans contribution. Avec trois comptes, je dois soit partager des données, soit payer. La condition doit figurer sur MQ-201, dans la carte Essentiel.
2. **MQ-005 — « Trois choix de même valeur » est inexact** et la contribution n'est pas expliquée. « Des compteurs anonymes améliorent l'annuaire des enseignes » : je ne sais ni ce qui part, ni vers qui. Le détail rassurant existe (MQ-015 : enseigne, catégorie, mois, département, tranche d'âge ; jamais les montants ni les données de la banque) mais il est dans le profil, sans lien depuis MQ-005. Payer 100 € pour ne pas contribuer se lit comme « payer pour sa vie privée ».
3. **MQ-203 → MQ-220 — souscription sans récapitulatif ni confirmation.** Depuis « Passer à Plus · 40 €/an », le prototype arrive sur une feuille qui affiche déjà « Abonnement Plus activé ». La feuille de confirmation MQ-218 (prix, renouvellement, Face ID) n'est pas sur ce chemin. C'est le chemin par lequel j'ai le plus de chances de m'abonner.
4. **Aucun écran de confirmation d'achat.** Après MQ-218, retour sur MQ-025 dont le texte dit encore « Connexion automatique avec Plus », comme si rien ne s'était passé. Après MQ-203, une ligne verte de 12,5 pt. Pas de reçu, pas de rappel de la date de renouvellement, pas de « ce que vous pouvez faire maintenant ». Les états d'échec et d'annulation du paiement manquent aussi.

### Important

5. **MQ-201 — les arguments de Plus ne parlent pas à une débutante.** « Analyses et statistiques avancées » est vide de sens ; MQ-223 Analyses ne marque aucune tuile comme réservée à Plus. Les bénéfices concrets pour moi (opérations à jour chaque jour sans import, enveloppes de budget sans limite) ne sont pas cités.
6. **Limites découvertes en route, absentes de MQ-201** : « Essentiel : 5 enveloppes, le reste regroupé » (MQ-211), « Jusqu'à 10 connexions bancaires » en Plus (MQ-203), lecture limitée aux 24 derniers mois par connexion (MQ-037). Avec 5 enveloppes, restaurants, loisirs, abonnements et santé finissent dans « Autres dépenses 570 € » : précisément ce que je voulais voir.
7. **MQ-201 — le choix arrive avant toute valeur.** Juste après Face ID, sans avoir vu un seul écran utile. Aucune période d'essai n'est évoquée. Pour décider si 40 € valent le coup, je n'ai que neuf lignes de texte.
8. **MQ-218 — le renouvellement n'est pas dit « automatique ».** « Renouvellement · Le 16 nov. 2027 » ne précise ni qu'il est automatique, ni le montant, ni s'il y aura un rappel. La feuille ne rappelle qu'un seul des trois avantages de Plus et n'a pas de bouton « Annuler » visible (fermeture par le voile ou la poignée seulement).
9. **MQ-220 — double authentification imposée juste après le paiement, en jargon.** « Clé d'accès », « second facteur », « application d'authentification » : trois notions inconnues, aucune explication, aucun « Plus tard ». L'icône du bouton « Créer une clé d'accès » s'affiche comme un petit cercle, elle semble cassée. L'écran de création de la clé n'existe pas : le prototype saute à MQ-037.
10. **MQ-016 — seul l'état Signature existe.** Pas d'écran « Offres et abonnement » pour un compte Essentiel ou Plus. « Gérer l'abonnement » et « Changer pour Plus » renvoient vers une adresse externe ; la « résiliation en trois clics » promise n'est maquettée nulle part.
11. **MQ-212 — un onglet principal consacré à une offre à 150 €/an.** Pour un compte Essentiel, « LiVi IA » occupe un cinquième de la barre d'onglets et n'offre qu'un bouton « Découvrir Signature ». Contradictoire avec « LiVi ne vend rien » dans la perception d'une utilisatrice méfiante.
12. **Épargner chaque mois : parcours introuvable.** MQ-047 Objectifs d'épargne est rangé dans MQ-223 Analyses, au milieu de « Plus-values », « Concentration » et « Risque ». Aucun des écrans vides parcourus (MQ-025, MQ-216, MQ-217) n'y mène. « Créer un objectif » n'a pas de lien et l'écran de création n'existe pas.

### Mineur

13. **MQ-201** : les liens « Conditions d'utilisation » et « Confidentialité » (y = 816) sont recouverts par l'indicateur d'accueil ; « Restaurer mes achats » (y = 860) est hors du cadre de 852 pt.
14. **MQ-201** : la croix de fermeture mène à MQ-005, donc fermer revient à choisir Essentiel sans le dire.
15. **MQ-001, MQ-002** : « conditions d'utilisation » et « politique de confidentialité » ne sont ni soulignées ni colorées, et ne sont pas reliées.
16. **MQ-025** : l'icône « Assurance vie » est décalée vers le haut par rapport aux trois autres, son libellé passe sur deux lignes.
17. **MQ-016** : la carte « Votre offre » décale son contenu de 2 pt (textes à x = 34 et 60 contre 32 et 58 dans les autres cartes). « Prix réglables, affichés avant tout achat » est une formule interne.
18. **MQ-036** : « Connexion · fichier », « Clé · fichier », « Connexion · PDF » sans légende.
19. **MQ-037** : « Étape 2 sur 3 » sans étape 1 identifiée ; l'« agrégateur agréé » n'est pas nommé.
20. **MQ-005** : aucune option n'est reliée ni montrée sélectionnée ; « Continuer », d'aspect désactivé, fonctionne quand même dans le prototype.
21. **MQ-218** : les zones « Choisir Plus » et « Choisir Signature » restées sous le voile pointent vers MQ-025. Sans effet tant que le voile les couvre, à nettoyer.

## 6. Frictions

- **Vocabulaire** : « patrimoine net », « établissement », « enveloppe » (employé pour le budget dans MQ-211 et pour le type de compte dans MQ-031 et MQ-216), « agrégateur agréé », « clé d'accès », « second facteur », « préréglage », « compteurs anonymes », « authentification forte ». Aucun n'est expliqué là où il apparaît.
- **Positionnement** : MQ-001 parle de courtiers, de crypto et d'immobilier. Le budget n'arrive qu'en quatrième mot du sous-titre. Je ne me reconnais pas tout de suite.
- **Sans Plus, tout passe par un fichier** : l'import compte 5 étapes (MQ-034, « Étape 1 sur 5 ») et suppose de télécharger un CSV depuis ma banque sur iPhone. Je ne le ferai pas chaque mois. C'est l'argument honnête pour Plus, et personne ne me le dit.
- **Deux décisions d'affilée avant d'entrer** : offre (MQ-201), puis contribution (MQ-005). La seconde est la plus lourde et la moins expliquée.
- **Réassurance éparpillée** : ce qui me rassurerait sur la connexion bancaire (MQ-037) et sur la contribution (MQ-015) arrive après le moment où je dois décider.

## 7. Incohérences

| Sujet | Écran A | Écran B |
|---|---|---|
| Nombre de comptes en gratuit | MQ-201 : « Jusqu'à 5 comptes » | MQ-005 : 2 comptes sans contribution |
| Valeur des choix Essentiel | MQ-005 : « Trois choix de même valeur » | MQ-005 : Gratuit, Gratuit limité, 100 € |
| Limites de Plus | MQ-201 : « Comptes illimités » | MQ-203 : « Jusqu'à 10 connexions bancaires » |
| Confirmation de paiement | MQ-201 → MQ-218 : récapitulatif puis Face ID | MQ-203 → MQ-220 : « Abonnement Plus activé » directement |
| Après l'achat | MQ-218 : abonnement confirmé | MQ-025 : « Connexion automatique avec Plus », aucun statut |
| Options payantes | MQ-201 : trois offres | MQ-016 : Famille 30 €/an et Société 60 €/an en note de bas d'écran ; MQ-005 : Confidentialité à vie 100 € |
| Libellé et destination | MQ-217 : « Créer une enveloppe à la main » | MQ-211 : budget proposé à partir de dépenses |
| Étapes de connexion | MQ-037 : « Étape 2 sur 3 » | MQ-202, MQ-203, MQ-220 : aucune numérotation |
| Sens de « enveloppe » | MQ-211 : catégorie de budget | MQ-031, MQ-216 : type de compte |
| Personne affichée | MQ-010 : Camille Martin, offre Signature | Parcours d'un nouveau compte Essentiel |

## 8. Design

- **Clarté et hiérarchie** : titres de 28 pt nets, un bouton principal blanc par écran sur MQ-001, MQ-025, MQ-203, MQ-218, MQ-211. Sur MQ-201, en revanche, aucun bouton principal : les trois actions sont des pastilles gris foncé au texte de 13 pt, d'une trentaine de points de haut à l'œil. C'est neutre, mais l'écran le plus important du parcours est aussi celui dont les boutons sont les plus discrets.
- **Alignements et espacements** : cartes régulières, marges de 16 pt constantes. Défauts relevés : icône « Assurance vie » de MQ-025, décalage de 2 pt de la carte active de MQ-016, pied de MQ-201 sous l'indicateur d'accueil, bas de MQ-016 très proche de ce même indicateur.
- **Lisibilité et contraste** : texte secondaire `#9b9ba3` sur noir, confortable. Les mentions les plus importantes pour moi (résiliation, rétractation, paiement, ce qui est compté dans la contribution) sont dans le style le plus petit et le plus terne : 12,5 pt en `#83838c`, soit un contraste que j'estime à 5,6 pour 1 sur noir et proche de 4,6 pour 1 sur le fond des cartes. À la limite pour un texte de cette taille, mal placé pour un texte de cette importance.
- **Boutons et liens** : liens bleus `#5cc8ff` bien identifiables (« J'ai déjà un compte », « Ajouter un bien ou un crédit »). Les mentions légales de MQ-001 et MQ-002 n'ont pas ce traitement. Le bouton « Continuer » de MQ-005 a un aspect désactivé alors qu'il est le seul moyen d'avancer.
- **Cohérence** : mêmes cartes d'offre sur MQ-201 et MQ-016, mêmes feuilles sur MQ-203, MQ-218, MQ-220. Le système tient. Les coches vertes servent à la fois pour « inclus dans l'offre » (MQ-201) et pour l'état « activé » (MQ-220), sans gêne.
- **Ton** : sobre, sans point d'exclamation, sans pression. Conforme à la promesse.

## 9. Mobile

Estimation sur maquette statique : j'ai lu les destinations des liens de prototype, je n'ai pas joué le prototype sur un appareil.

- **Usage à une main** : les boutons principaux sont en bas (y de 646 à 772), dans la zone du pouce. Les actions du haut (croix de MQ-201, retour à y = 60, avatar, « + » et cloche de MQ-025) demandent d'étirer le pouce ou de changer de prise. Les feuilles se ferment par la poignée ou le voile, ce qui reste accessible.
- **Cibles tactiles** : 44 pt minimum partout où un lien existe. Les boutons d'offre de MQ-201 ont une zone de 329 × 44 pt mais un dessin plus petit : la zone réelle dépasse ce que l'œil perçoit.
- **Scroll** : MQ-201 dépasse le cadre (contenu jusqu'à y = 914 pour 852 pt) ; « Restaurer mes achats » n'est atteignable qu'en faisant défiler, rien ne l'indique. Les pastilles de MQ-036 défilent horizontalement jusqu'à x = 893, la coupe de « Courtie… » le suggère correctement.
- **Barre d'onglets** : 5 onglets de 69 × 47 pt, libellés de 12,5 pt, lisibles. Pour moi, deux onglets sur cinq (Marchés, LiVi IA) ne servent à rien.
- **Autres tailles** : la page « 10 · Autres formats » ne contient aucun écran d'offre ni d'inscription hormis MQ-129 « Se connecter avec Google » (360 × 780). Le comportement de MQ-201 sur iPhone SE (375 × 667), où le dépassement sera bien plus fort, n'est pas maquetté.

## 10. Éléments manquants

- **Web, MQ-224 « Offres après l'inscription » et MQ-232 « Offres et abonnement »** : cadres vides portant la mention « À concevoir ». Le parcours d'offre n'existe pas sur le web.
- Écran de confirmation après souscription (reçu, statut, date de renouvellement).
- États d'échec et d'annulation du paiement ; feuille de l'App Store ou son équivalent annoté.
- « Offres et abonnement » pour un compte Essentiel et pour un compte Plus (MQ-016 ne montre que Signature).
- Parcours de résiliation « en trois clics ».
- États de limite atteinte : troisième compte sans contribution, sixième compte, sixième enveloppe de budget, onzième connexion.
- État « option sélectionnée » de MQ-005 et lien « En savoir plus » vers le détail de la contribution.
- Écran de création d'une clé d'accès après MQ-220 ; écran de création d'un objectif d'épargne après MQ-047.
- Liens de prototype absents : pastilles de filtre et recherche de MQ-036 ; lignes Néo Banque Orbe, Horizon Vie et Toits Partagés de MQ-036 ; « Valider ce budget » (MQ-211) ; « Offres, paiement et résiliation » et les autres articles de MQ-250 ; mentions légales de MQ-001, MQ-002 et MQ-201 ; « Restaurer mes achats » (MQ-201).
- Aperçu des offres ou mention du prix avant la création du compte (MQ-001).
- Écrans d'offre et d'inscription aux formats iPhone SE, Android et pliables.

## 11. Top 5 des corrections

1. **Dire toute la vérité sur Essentiel dès MQ-201** : « 5 comptes avec contribution anonyme, 2 sans », plus la limite de 5 enveloppes. Supprimer « Trois choix de même valeur » sur MQ-005 et y expliquer en clair ce qui est compté et ce qui ne l'est jamais, en reprenant le contenu de MQ-015.
2. **Un seul chemin de souscription, complet** : faire passer « Passer à Plus » (MQ-203) par la feuille MQ-218, écrire « renouvellement automatique » avec le montant, ajouter un écran de confirmation et afficher l'offre en cours sur l'accueil et dans le profil.
3. **Réécrire les arguments de Plus en bénéfices concrets** sur MQ-201 et MQ-203 : opérations à jour chaque jour sans fichier, enveloppes de budget sans limite, et la liste réelle des analyses concernées. Aligner « Comptes illimités » et « 10 connexions bancaires ».
4. **Maquetter « Offres et abonnement » pour Essentiel et Plus, la résiliation en trois clics, et les écrans web MQ-224 et MQ-232.**
5. **Sortir la double authentification du tunnel d'achat et la traduire** : expliquer « clé d'accès » en une phrase, corriger l'icône du bouton, numéroter les étapes de bout en bout (MQ-202 à MQ-204), puis donner aux objectifs d'épargne une entrée directe depuis l'accueil ou le budget.

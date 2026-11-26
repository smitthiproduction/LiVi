# Test UX persona 05 — Nadia Rousseau, graphiste indépendante

- Date : 26 novembre 2026
- Maquette : fichier Figma « LiVi — Maquettes » (clé `cR7EtAZKpKCkgOoEqcJ8Wq`), consulté en lecture seule
- Objectif d'achat : option Société à 60 € par an, pour suivre le compte de la micro-entreprise à part des comptes personnels
- Surfaces jouées : web bureau (surface préférée du persona), puis iPhone

## 1. Résumé et score

**Score : 2 / 10. Objectif non atteint, sur le web comme sur iPhone.**

L'option Société ne peut pas être achetée dans la maquette. Dans tout le fichier (pages Parcours iPhone, Autres formats, Web), elle n'apparaît qu'une seule fois : une demi-ligne de note grise en 12,5 px tout en bas de MQ-016, sans bouton, sans lien, sans description. Il n'existe ni fiche de l'option, ni feuille de confirmation, ni état « option active », ni écran qui montre ce qu'on obtient une fois l'option payée.

Sur le web, là où je travaille, c'est pire : 42 cadres sur 45 sont des gabarits vides marqués « À concevoir », dont les trois qui me concernent (MQ-224 Offres après l'inscription, MQ-232 Offres et abonnement, MQ-177 Famille et société). Aucun lien de prototype sur la page Web.

Les deux points du score récompensent ce qui existe : des écrans d'offres iPhone lisibles, des prix annuels et mensuels clairs, une feuille de confirmation Plus (MQ-218) honnête sur le renouvellement et la rétractation. Rien de cela ne sert mon achat.

## 2. Contexte persona

Nadia, 34 ans, micro-entrepreneuse à Marseille, revenus irréguliers. Un compte professionnel et un compte personnel dans deux banques, un PER. Elle veut séparer le pro du perso, prévoir ses charges, lisser ses revenus. Elle travaille sur ordinateur, a un iPhone, juge un outil à son design. Ses freins connus : outils pensés pour les salariés, options payantes floues, absence de vue sur ordinateur. Les trois freins se déclenchent pendant ce test.

## 3. Méthode et périmètre

- 13 appels Figma sur les 15 autorisés. Inventaire des pages et des 236 cadres `MQ-…` des pages Parcours iPhone (162), Autres formats (29) et Web (45).
- Recherche plein texte des mots société, 60 €, micro, professionnel, indépendant, entreprise, option dans ces trois pages.
- **Vus en image** : MQ-016, MQ-201, MQ-218, MQ-005, MQ-010 (iPhone), MQ-149, MQ-232 (web). Les remarques de design ne portent que sur ces sept écrans.
- **Lus en texte et liens de prototype seulement** (pas d'image) : MQ-224, MQ-177, MQ-180, MQ-250, MQ-024, MQ-029, MQ-031, MQ-093, MQ-011.
- Statut « gabarit vide » des autres cadres web et autres formats établi par script (présence du code MQ en titre et de la pastille « À concevoir »), sans image.
- Non consultées : Couverture, Fondations, Composants, Formats, Back-office, Archive.
- Le prototype iPhone existe (14 flux, 660 nœuds interactifs). J'ai lu ses liens, je ne l'ai pas joué : tout ce qui touche au geste, au défilement et au pouce est une **estimation sur maquette statique**.
- Options testées : offres, paiement, compte/profil, aide, réglages, ajout de compte, étiquettes. Pas de filtres pertinents pour cet objectif. Pas de panier : l'achat passe par une feuille de confirmation, ce qui est normal pour un abonnement dans une app.

## 4. Parcours joué

| # | Écran | Ce que je cherche | Ce que je trouve | Verdict |
|---|---|---|---|---|
| 1 | Web · MQ-148 Se connecter | Me connecter sur mon ordinateur | Gabarit vide « À concevoir » | Manquant |
| 2 | Web · MQ-224 Offres après l'inscription | Voir les offres et les options | Gabarit vide « À concevoir » | Manquant |
| 3 | Web · MQ-149 Tableau de bord | Une entrée « Offres » ou « Société » | Écran dessiné. Menu latéral sans entrée Offres ni Société. Avatar « CM » sans lien de prototype | Impasse |
| 4 | Web · MQ-180 Réglages | Un accès à l'abonnement | Gabarit vide « À concevoir » | Manquant |
| 5 | Web · MQ-232 Offres et abonnement | Acheter l'option | Gabarit vide « À concevoir » | Manquant |
| 6 | Web · MQ-177 Famille et société | Comprendre ce que l'option m'apporte | Gabarit vide « À concevoir ». Seule mention du mot « société » sur le web | Manquant |
| — | **Abandon du web.** Je prends l'iPhone à contrecœur | | | |
| 7 | iPhone · MQ-201 Présentation des offres | L'option Société parmi les offres | Essentiel, Plus, Signature. Aucune mention des options | Friction forte |
| 8 | iPhone · MQ-218 Confirmation Plus (feuille) | Savoir si je dois prendre Plus d'abord | Feuille claire pour Plus à 40 €/an. Rien sur les options. Je ferme | Doute |
| 9 | iPhone · MQ-005 Essentiel gratuit | Les options payantes | Une seule option vendue ici : Confidentialité à vie, 100 €. Pas de Société | Impasse |
| 10 | iPhone · MQ-024 Accueil, puis avatar | Le chemin vers mon compte | Avatar relié à MQ-010 | Correct |
| 11 | iPhone · MQ-010 Profil | « Offres et abonnement » | Ligne présente, reliée à MQ-016. Pas d'entrée « Options » | Correct |
| 12 | iPhone · MQ-016 Offres et abonnement | Acheter Société | « Société, 60 €/an » dans une note de bas de page en 12,5 px. Aucun bouton, aucun lien. Les deux seuls boutons ouvrent la gestion des abonnements de l'App Store | **Bloquant** |
| 13 | iPhone · MQ-250 Aide | Une explication sur les options | Ligne « Offres, paiement et résiliation · En ligne », sans lien de prototype ni article dessiné | Manquant |
| 14 | iPhone · MQ-029 puis MQ-031 Nouveau compte | Contourner : créer un compte « professionnel » | Dix types (compte courant, livret, PEA, PER…). Aucun type ni marqueur professionnel | Impasse |
| 15 | iPhone · MQ-093 Étiquettes et groupes | Contourner : étiqueter « Pro » | Les étiquettes portent sur des positions de placement, pas sur des comptes | Impasse |
| — | **Abandon définitif.** | | | |

## 5. Points forts

- **MQ-201, MQ-016** : trois offres lisibles, prix annuel en gras et équivalent mensuel dessous. Je comprends la grille en cinq secondes.
- **MQ-218** : la feuille de confirmation dit le prix, la date de renouvellement, la résiliation et la rétractation de 14 jours avant le paiement. C'est exactement ce que j'attends d'une option payante. À réutiliser pour Société.
- **MQ-016** : le prix de l'option est affiché (60 €/an) et la note promet un prix « affiché avant tout achat ». L'intention de transparence est là.
- **MQ-010** : profil net, lignes de 56 points, valeur courante rappelée à droite (« Signature », « Face ID »).
- **MQ-031** : le PER figure dans les types de compte. Bon point pour mon PER.
- **MQ-149** : le tableau de bord web a de l'allure, typographie et montant héros réussis. Il donne envie que le reste du web existe.
- Cibles tactiles : toutes les zones interactives relevées font au moins 44 points de haut (boutons 329 × 44, lignes 361 × 56, retour 44 × 44).

## 6. À ajuster

### Bloquant

1. **MQ-016 — l'option Société n'est pas achetable.** Une mention en note, pas de carte, pas de bouton, pas de lien de prototype. L'objectif s'arrête ici.
2. **Aucun écran d'achat d'option.** Ni fiche de l'option, ni feuille de confirmation, ni succès, ni échec de paiement, ni état « option active » avec date de renouvellement et résiliation.
3. **Aucun écran de ce que l'option fait.** MQ-177 « Famille et société » est vide sur le web et n'a pas d'équivalent iPhone. Je ne sais pas ce que j'achète : un espace séparé, une bascule perso/pro, un budget distinct, des catégories de charges professionnelles. Je ne paie pas 60 € pour un mot.
4. **Web — MQ-224, MQ-232, MQ-177, MQ-180, MQ-148 vides.** Le parcours d'achat n'existe pas sur la surface que j'utilise. Zéro lien de prototype sur la page Web.

### Important

5. **MQ-016 — conditions de l'option absentes.** L'option s'ajoute-t-elle à Essentiel, ou faut-il Plus ? Mon compte pro compte-t-il dans les 5 comptes d'Essentiel ? La connexion automatique de ma banque pro exige-t-elle Plus à 40 € ? Mon vrai prix est-il 60 € ou 100 € par an ? Rien ne le dit.
6. **MQ-016 — un seul état dessiné, celui d'une abonnée Signature.** Pas d'état Essentiel ni Plus. Je ne vois jamais l'écran tel que je l'aurais.
7. **MQ-201 — les options sont invisibles à l'inscription.** Le moment où je choisis mon offre est celui où je dois apprendre qu'une option Société existe.
8. **MQ-149 (web) — aucune entrée vers les offres, le compte ou la société.** Huit entrées de menu, aucune ne s'en approche. L'avatar n'ouvre rien.
9. **MQ-031 — aucun moyen de qualifier un compte de professionnel**, même en attendant l'option. Confirme l'impression d'outil pour salariés. Aucun des mots professionnel, micro, indépendant n'apparaît dans les trois pages.
10. **MQ-250 — aide sur les offres renvoyée « En ligne »**, sans article maquetté ni lien. Aucune réponse à mes questions sur l'option.
11. **MQ-005 — l'option Confidentialité à vie (100 €) se choisit par bouton radio puis « Continuer » mène directement à l'accueil vide MQ-025.** Aucune feuille de paiement dessinée. La seule option réellement sélectionnable du fichier n'a donc pas non plus de confirmation.

### Mineur

12. **MQ-016 — « Prix réglables »** : vocabulaire interne. Réglables par qui ? On lit que le prix peut changer après l'achat.
13. **MQ-016 — retour à la ligne au milieu d'un prix** : « Famille, 30 €/ » puis « an ». À rendre insécable.
14. **MQ-016 — « Signature renouvelée le 2 oct. 2027 »** : participe passé pour une date future. Écrire « Renouvellement le 2 oct. 2027 ».
15. **MQ-201 — pied d'écran** : les liens « Conditions d'utilisation » et « Confidentialité » passent sous l'indicateur d'accueil ; « Restaurer mes achats » est placé à y = 860 dans un cadre de 852 de haut, donc hors écran. Aucun de ces trois liens n'a de lien de prototype.
16. **MQ-201, MQ-016 — « Résiliation en trois clics »** sur un écran tactile. Cohérent sur le web, maladroit sur iPhone.
17. **MQ-005 — « Trois choix de même valeur »** alors que l'un coûte 100 €. Formule à revoir.

## 7. Frictions vécues

- Je commence sur mon ordinateur et je tombe six fois de suite sur du vide. Pour une graphiste, un outil sans version bureau utilisable est un motif de départ, pas un détail.
- Sur iPhone, je dois deviner que l'option se cache dans Profil, puis Offres et abonnement, puis tout en bas, dans le texte légal. Trois niveaux de profondeur pour une ligne de note.
- Arrivée là, je tape sur « Société » : rien. Les seuls boutons m'envoient vers l'App Store, où l'option n'a aucune raison d'être présentée.
- Le doute sur le prix total me fait hésiter avant même de chercher le bouton. Avec des revenus irréguliers, je ne m'engage pas sur un montant annuel que je ne peux pas calculer.
- Aucun exemple, aucun jeu de données d'indépendante. La maquette me montre Camille Martin, son PEA et son assurance vie. Je ne m'y reconnais pas.

## 8. Incohérences

- **Options traitées différemment** : Confidentialité à vie a une carte et un bouton radio (MQ-005). Famille et Société n'ont qu'une note (MQ-016). Trois options, deux niveaux de traitement.
- **Web contre iPhone** : 162 cadres iPhone dessinés sur 162, 3 cadres web sur 45. La promesse « web » de l'inventaire n'est pas tenue pour ce parcours.
- **Mode de paiement** : MQ-016 et MQ-201 parlent de l'App Store. Rien n'indique comment on paie sur le web.
- **Gabarits web** : MQ-224, MQ-232 et MQ-180 portent la même ligne de codes « STA-05 · SEC-03 · PAT-09 », alors que ce sont trois sujets différents (offres, abonnement, réglages). À vérifier : cela ressemble à une valeur par défaut. Tous les gabarits affichent aussi « Tableau de bord » comme entrée active du menu.
- **MQ-218** : sous le voile de la feuille, les zones « Choisir Plus » et « Choisir Signature » sont reliées directement à MQ-025, sans passer par la confirmation. À vérifier dans le prototype selon l'ordre des calques.
- **Dates de renouvellement** : 16 nov. 2027 (MQ-218) et 2 oct. 2027 (MQ-016). Deux contextes différents, donc acceptable, mais aucun des deux ne dit comment l'échéance d'une option s'aligne sur celle de l'offre.

## 9. Design

Écrans vus en image uniquement.

- **Hiérarchie (MQ-016)** : la carte de l'offre en cours est cernée de bleu, bien. Mais l'information que je cherche est l'élément le plus faible de la page : 12,5 px, gris sur noir, collée au texte légal. La hiérarchie visuelle dit « ceci est une mention obligatoire », pas « ceci est à vendre ».
- **Boutons (MQ-201, MQ-016)** : les trois boutons d'offre sont des pilules gris foncé sur carte gris foncé, libellé en 13 px, hauteur visible d'environ 32 points. Ils se confondent avec le fond. Aucun bouton principal sur l'écran d'offres. Si c'est voulu pour ne pousser aucune offre, il faut au moins un contour ou un contraste plus franc.
- **Bouton désactivé (MQ-005)** : « Continuer » gris moyen à texte noir. On ne sait pas s'il est inactif ou secondaire. Aucun des trois choix n'est présélectionné, et rien ne dit qu'il faut en cocher un.
- **Alignements et espacements** : grille régulière, marges de 16, cartes à rayon constant. Propre. Seul accroc : le bas de MQ-201 qui déborde.
- **Lisibilité** : textes secondaires à 12,5 px en gris sur noir, à la limite du confort pour des conditions de vente. Corps à 14 et 16 px corrects.
- **Couleur** : coches vertes et bleu d'accent utilisés avec retenue. Sur MQ-149, les statuts orange (« Relevé · 30 sept. », « À renouveler · 20 nov. ») ressortent bien.
- **MQ-149 (web)** : composition élégante en haut, mais les deux tiers inférieurs droits de l'écran sont vides et l'icône Budget paraît plus claire que ses voisines inactives. Une seule courbe pour 1440 points de large : l'écran bureau ressemble à l'écran iPhone étiré.
- **Cohérence** : MQ-201 et MQ-016 partagent les mêmes cartes, l'ordre est inversé (Essentiel en premier à l'inscription, offre en cours en premier dans le profil). C'est défendable.

## 10. Mobile

Estimation sur maquette statique ; le prototype existe mais n'a pas été joué.

- **Cibles tactiles** : zones de 44 points et plus partout où un lien existe. La partie visible des boutons d'offre est plus basse que la zone active : à l'œil, la cible paraît petite.
- **Une main** : la note des options est en bas de MQ-016, dans la zone du pouce, ce qui serait idéal si elle était interactive. Le bouton retour en haut à gauche et la fermeture en haut à droite de MQ-201 sont hors de portée du pouce ; le geste de retour d'iOS compense pour le premier, pas pour le second.
- **Défilement** : MQ-201 dépasse la hauteur d'écran (« Restaurer mes achats » hors cadre) sans indice de défilement. MQ-016 tient juste dans l'écran pour une abonnée Signature ; avec un bloc Options digne de ce nom, il faudra défiler, donc prévoir l'ordre : offre en cours, options, autres offres.
- **Feuille (MQ-218)** : bouton principal de 56 points en bas, poignée visible, voile cliquable pour fermer. Bon modèle.
- **Autres formats** : aucun écran d'offres ou d'options n'existe pour Android, pliables ou tablettes (page 10 · Autres formats, 17 gabarits vides sur 29 et aucun cadre Offres).

## 11. Éléments manquants

- Carte ou fiche « Option Société » : contenu, prix, conditions, offre requise.
- Feuille de confirmation d'achat de l'option (prix, renouvellement, résiliation, rétractation).
- États après achat : succès, échec de paiement, option active, résiliation de l'option.
- Écran iPhone « Famille et société » et contenu de MQ-177 sur le web.
- Création de l'espace société : rattacher un compte, bascule perso/pro sur l'accueil, le patrimoine et le budget.
- Marqueur « professionnel » sur un compte (MQ-031) ou tout autre moyen de séparer pro et perso.
- Web : MQ-148, MQ-224, MQ-232, MQ-180 dessinés, plus une entrée de navigation vers le compte et les offres.
- Mode de paiement sur le web.
- État de MQ-016 pour un compte Essentiel et pour un compte Plus.
- Article d'aide « Offres, paiement et résiliation » et section sur les options (MQ-250).
- Feuille de paiement de l'option Confidentialité à vie (MQ-005).
- Liens de prototype sur les mentions légales et « Restaurer mes achats » (MQ-201).
- Écrans d'offres pour Android, pliables et tablettes.

## 12. Top 5 des corrections

1. **MQ-016 et MQ-232 — créer un bloc « Options » achetable.** Une carte par option (Société, Famille, Confidentialité à vie) avec prix, deux ou trois lignes de contenu, offre requise et bouton « Ajouter l'option ». Brancher une feuille de confirmation calquée sur MQ-218, puis un état « option active ».
2. **Dessiner ce que l'option livre.** MQ-177 sur le web, son équivalent iPhone, et la bascule perso/pro sur l'accueil et le budget. Sans cela, personne ne sait ce que valent les 60 €.
3. **Livrer le parcours web.** MQ-148, MQ-224, MQ-232, MQ-180 dessinés et reliés, une entrée « Compte et offres » depuis l'avatar de MQ-149, et le mode de paiement hors App Store.
4. **Écrire les règles de l'option là où on l'achète.** Compatibilité avec Essentiel, Plus et Signature, effet sur la limite de 5 comptes, besoin ou non de Plus pour la connexion automatique d'une banque professionnelle, coût annuel total.
5. **Rendre l'option visible dès l'inscription et dans l'aide.** Une ligne « Options : Famille, Société » sous les offres de MQ-201, un article dans MQ-250, et au passage corriger le pied de MQ-201 (liens sous l'indicateur d'accueil, « Restaurer mes achats » hors écran) et la formule « Prix réglables ».

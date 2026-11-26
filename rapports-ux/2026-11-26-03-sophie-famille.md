# Test UX persona 03 — Sophie Moreau, option Famille

Date : 26 novembre 2026 · Maquette : fichier Figma « LiVi — Maquettes » (clé `cR7EtAZKpKCkgOoEqcJ8Wq`) · Thème vu : sombre uniquement.

## 1. Résumé et score

**Score : 2 / 10 pour cet objectif.**

Je n'ai pas pu ajouter l'option Famille. Elle n'existe dans la maquette iPhone que sous la forme d'une demi-ligne de note grise, tout en bas de l'écran MQ-016 : « Famille, 30 €/an ». Pas de bouton, pas de lien, pas d'écran de détail, pas de paiement, pas d'invitation du conjoint, et surtout aucune explication de ce que voit chacun. Le seul écran consacré au sujet (MQ-177, web) est un cadre vide marqué « À concevoir ».

Les deux points donnés récompensent ce qui entoure le trou : le chemin Accueil → Profil → Offres et abonnement est court et lisible, les prix des offres sont clairs, et la feuille de confirmation d'abonnement (MQ-218) est un bon modèle à réutiliser. Mais l'objectif lui-même est irréalisable, et ma première crainte (le partage entre conjoints) ne reçoit aucune réponse.

Verdict dans le personnage : j'abandonne et je garde mon tableur.

## 2. Contexte du persona

Sophie Moreau, 45 ans, infirmière à Nantes, deux enfants (10 et 14 ans), propriétaire avec un crédit immobilier. Comptes dans deux banques, une assurance vie, le livret des enfants. Tient le budget du foyer sur un tableur et veut le partager avec son conjoint **sans lui donner ses codes bancaires**. iPhone, peu de temps, écrans simples. Freins : partage des données entre conjoints, complexité, coût qui s'additionne.

Objectif unique : ajouter l'option Famille (30 € par an) pour suivre le budget à deux, en comprenant ce que voit chacun.

### Méthode et limites

- 14 appels Figma sur les 15 autorisés, tous en lecture. Aucune modification du fichier, aucune donnée envoyée à l'extérieur.
- Inventaire : 11 pages. « Parcours iPhone » : 162 cadres (393 × 852, un seul en paysage). « 10 · Autres formats » : 29 cadres. « 11 · Web » : 45 cadres (1440 × 1024).
- Prototype : 660 liens et 14 parcours nommés sur la page iPhone, aucun consacré à la famille ou au partage. Page Web : 2 liens en tout, aucun parcours.
- Écrans regardés en image : MQ-024, MQ-010, MQ-016, MQ-201, MQ-218, MQ-005, MQ-079, MQ-250, MQ-177.
- Écrans lus par leurs calques de texte seulement, sans rendu : MQ-015, MQ-011, MQ-014, MQ-012, MQ-222, MQ-019, MQ-211, MQ-232, MQ-224. Je ne juge pas leur aspect visuel.
- Recherche des mots « famille », « conjoint », « partage », « membre », « invitation », « foyer » dans tous les textes de toutes les pages.
- Les liens de prototype ont été lus dans les données du fichier, pas joués dans le lecteur de prototype. Tout ce qui concerne le mobile (une main, cibles, défilement) est une **estimation sur maquette statique**.
- Les ratios de contraste sont calculés à partir des couleurs de texte relevées ; le fond des cartes n'a pas été mesuré, les valeurs sur carte sont donc approximatives.

## 3. Parcours joué

| Étape | Écran | Ce que je fais | Ce que je trouve | Résultat |
|---|---|---|---|---|
| 1 | MQ-024 · Accueil | Je cherche « Famille » ou « Partager » sur l'accueil | Rien. J'essaie l'avatar « CM » en haut à gauche | Lien vers le profil, fonctionne |
| 2 | MQ-010 · Profil | Je lis les lignes : Préférences, Sécurité, Offres et abonnement, Confidentialité, Notifications, Aide | Aucune ligne « Famille », « Foyer » ou « Membres ». Je tente « Offres et abonnement » | Lien fonctionne |
| 3 | MQ-016 · Offres et abonnement | Je parcours les trois cartes d'offres | « Famille, 30 €/an » apparaît dans la dernière note de bas d'écran, en gris, 12,5 px | Texte non cliquable. Aucun bouton d'achat |
| 4 | MQ-016 | Faute de mieux, je touche « Gérer l'abonnement » | Lien externe vers la page des abonnements de l'App Store | Je sors de l'application. Rien n'indique que Famille s'y achète |
| 5 | MQ-250 · Aide | Je cherche une explication sur le partage | Quatre questions fréquentes, aucune sur la famille. « Offres, paiement et résiliation » n'a pas de lien dans le prototype | Impasse |
| 6 | MQ-015 · Confidentialité | Je cherche ce que verrait mon conjoint | L'écran ne parle que de la contribution anonyme et du mode discret | Aucune réponse |
| 7 | MQ-222 Sécurité, MQ-012 Appareils et sessions, MQ-014 Sauvegarde | Je cherche un moyen d'ajouter une deuxième personne | Uniquement les sessions et appareils d'un même compte | Seule voie visible : prêter mon identifiant. C'est ce que je refuse |
| 8 | MQ-079 · Budget du mois | Je regarde à quoi ressemblerait le budget à deux | Aucune notion de personne : pas de filtre, pas d'auteur de dépense, pas d'entrée « Partager » | Rien |
| 9 | MQ-177 · Famille et société (web) | Dernière tentative, sur ordinateur | Cadre vide : « MQ-177 · Famille et société · À concevoir ». Aucun lien, et le menu web n'a pas d'entrée Famille | Écran manquant |
| 10 | — | — | — | **Abandon** |

Options testées : compte (profil, offres, confidentialité, sécurité, sessions, sauvegarde), aide, paiement (feuille MQ-218 de l'abonnement Plus, comme référence, puisqu'il n'en existe pas pour Famille). Filtres : les onglets Budget / Opérations / Abonnements de MQ-079 ont été vus, pas ouverts, car sans rapport avec le partage. Panier : la maquette n'en a pas, ce qui est normal pour un abonnement.

## 4. Points forts

- **Chemin court jusqu'aux offres** : Accueil → avatar → Profil → Offres et abonnement, trois touchers, tous reliés dans le prototype.
- **MQ-010 · Profil** : liste simple, lignes de 56 px, l'offre en cours (« Signature ») rappelée à droite de la ligne. Je sais où je suis.
- **MQ-016** : l'offre en cours est repérée par un contour et par le texte « Votre offre », pas par la seule couleur. Prix annuel et équivalent mensuel sur chaque offre payante. Tout tient sans défilement.
- **MQ-218 · Confirmation d'abonnement Plus** : feuille claire (prix, renouvellement, résiliation, rétractation), un seul bouton principal bien contrasté de 361 × 56. C'est exactement ce que j'attendais pour Famille.
- **Mentions rassurantes** : « Résiliation en trois clics, rétractation de 14 jours », « prix TTC ».
- **MQ-079 · Budget du mois** : très lisible, dépassement signalé par icône, texte et couleur. Proche de mon tableur, en plus simple.

## 5. À ajuster

### Bloquant

1. **MQ-016 — l'option Famille ne peut pas être achetée.** Elle n'est qu'un fragment de phrase dans une note de bas d'écran. Aucun bouton, aucune zone cliquable, aucun écran suivant.
2. **Aucun écran n'explique ce que voit chacun.** Rien sur : qui voit quels comptes, si mon conjoint a son propre identifiant, s'il voit mes soldes, mon assurance vie, le livret des enfants, s'il peut modifier le budget, si mes codes bancaires restent chez moi. C'est mon frein numéro un et la moitié de mon objectif.
3. **MQ-177 (web) est un cadre vide** marqué « À concevoir », sans lien de prototype et sans entrée dans le menu latéral. Il n'a aucun équivalent iPhone, alors que l'iPhone est mon seul appareil.
4. **Aucun parcours d'invitation** : inviter mon conjoint, état en attente, acceptation de son côté, retrait d'un membre. Rien de tout cela n'existe.

### Important

5. **MQ-016 — coût total introuvable.** Je ne sais pas si Famille s'ajoute à Essentiel (gratuit) ou exige Plus, donc si je paie 30 € ou 70 € par an. Pas d'équivalent mensuel pour les options alors que les offres en ont un. Pas de total « offre + options ». C'est mon frein « coût qui s'additionne ».
6. **MQ-016 — « Prix réglables, affichés avant tout achat ».** Formule inquiétante : réglables par qui, à la hausse ? Et aucun écran d'achat ne vient tenir la promesse d'affichage.
7. **MQ-016 — « Gérer l'abonnement » et « Changer pour Plus » ouvrent tous deux la même page externe de l'App Store.** Je quitte l'application sans avoir été prévenue, et « Changer pour Plus » ne dit pas qu'il s'agit d'une offre inférieure à Signature.
8. **MQ-250 · Aide — aucune question sur la famille ou le partage**, et les lignes des questions fréquentes n'ont pas de lien de prototype (seuls « retour » et « Signaler un problème » sont reliés).
9. **MQ-201 · Présentation des offres — les options sont absentes.** Au moment où je choisis mon offre, rien ne dit qu'un suivi à deux existe. Je le découvrirais par hasard.
10. **Aucun état pour mon cas réel.** MQ-016 n'existe que pour un compte Signature (« Camille Martin »). Pas de variante Essentiel ou Plus, pas d'état « option Famille active », pas d'état « invitation en attente ».
11. **Nombre de personnes non précisé.** « Famille » couvre-t-il un conjoint, les enfants, combien de membres ? Les comptes de mon conjoint comptent-ils dans la limite de 5 comptes d'Essentiel ?

### Mineur

12. **MQ-016 — le prix est coupé en fin de ligne** : « Famille, 30 €/ » puis « an » à la ligne suivante.
13. **MQ-016 — boutons peu visibles** : pastilles gris foncé sur carte gris foncé, libellé de 13 px, hauteur visuelle d'environ 30 px. La zone tactile fait bien 44 px, mais l'œil ne voit pas un bouton.
14. **MQ-016 — décalage de 2 px** entre la carte Signature (textes à x = 34 et 60, prix calé à 359) et les cartes Plus et Essentiel (32 et 58, prix à 361), dû au contour de la carte sélectionnée.
15. **MQ-010 — le bouton à curseurs en haut à droite n'a pas de lien** et fait doublon avec la ligne « Préférences » (même icône).
16. **MQ-250 — champ « Rechercher dans l'aide » très fin** (environ 18 px de haut à l'image), sans lien, alors que la recherche de l'accueil fait 44 px.
17. **MQ-250 — « En ligne »** à droite de chaque ligne est ambigu (état du service ou ouverture dans le navigateur ?), et ces lignes n'ont pas de chevron alors que « Signaler un problème » en a un.
18. **MQ-201 — les liens « Conditions d'utilisation » et « Confidentialité » passent sous l'indicateur d'accueil**, et « Restaurer mes achats » est placé à y = 860 dans un cadre de 852 : hors champ sans défilement.
19. **MQ-079 — barre orange de « Restaurants et sorties »** (186,30 € sur 200 €) : alerte portée par la seule couleur, sans texte.
20. **MQ-218 — sous le voile**, les zones « Choisir Plus » et « Choisir Signature » restent reliées à l'accueil vide (MQ-025) : un toucher mal placé saute le paiement dans le prototype.

## 6. Frictions vécues

- Sur MQ-010, j'ai relu la liste deux fois pour trouver « Famille ». J'ai fini par deviner que cela se cachait dans « Offres et abonnement ». Rien ne le dit.
- Sur MQ-016, j'ai lu les trois cartes en entier avant de tomber sur la note grise. J'ai touché le mot « Famille » : rien.
- « Gérer l'abonnement » m'a envoyée hors de l'application. Avec dix minutes devant moi entre deux gardes, je ne vais pas explorer les réglages d'Apple à l'aveugle.
- Dans l'aide, pas un mot. Je ne vais pas « Signaler un problème » et attendre deux jours ouvrés pour savoir si mon mari verra mon assurance vie.
- En cherchant un moyen de partager, les seuls écrans qui s'en approchent sont « Appareils et sessions » et « Synchroniser mes appareils ». Conclusion logique pour une cliente pressée : donner son identifiant LiVi à son conjoint. C'est le contraire de ce que je veux, et c'est la maquette qui m'y pousse.
- Je ne sais toujours pas combien je paierais au total.

## 7. Incohérences

- **Trois options, un seul point d'entrée.** « Confidentialité à vie, 100 € une fois » a un vrai choix à l'écran MQ-005. « Famille » et « Société », citées dans la même phrase de MQ-016, n'ont rien.
- **Famille sur le web, pas sur iPhone.** Le seul cadre prévu (MQ-177) est sur le web, regroupé avec « Société ». Pour un foyer, ce voisinage n'a aucun sens.
- **Offres : équivalent mensuel affiché. Options : non.**
- **Le texte promet, l'interface ne suit pas** : « affichés avant tout achat » sans aucun écran d'achat.
- **« Dépenses du foyer »** apparaît dans MQ-076 (Revenus passifs consolidés) : le mot suggère un foyer, alors qu'aucune fonction de foyer n'existe.
- **MQ-005 parle de « 2 comptes »** pour un des choix d'Essentiel, MQ-016 et MQ-201 de « Jusqu'à 5 comptes » sans nuance. Avec deux banques, une assurance vie, un livret et un crédit, je ne sais pas si je tiens dans la limite.
- **Même libellé de destination pour deux boutons différents** sur MQ-016 (App Store).
- **Affordances de liste variables** entre MQ-010 (chevrons partout) et MQ-250 (chevron sur une seule ligne).

## 8. Design

- **Clarté et hiérarchie** : bonnes sur MQ-010, MQ-079, MQ-218. Sur MQ-016, la hiérarchie est inversée pour mon besoin : l'information que je cherche est l'élément le plus petit et le plus pâle de l'écran.
- **Lisibilité et contraste** : notes en 12,5 px, couleur `#83838c`. Environ 5,6:1 sur fond noir, mais proche de 4,5:1 sur les cartes (« soit 12,50 € par mois »). Juste suffisant, et trop petit pour une information de prix. Texte principal blanc en 14 à 17 px : confortable.
- **Alignements et espacements** : grille régulière (marges de 16, cartes de 361 de large). Seul écart relevé : les 2 px de la carte sélectionnée sur MQ-016.
- **Boutons et liens** : le bouton principal blanc de MQ-218 est net. Les boutons secondaires gris de MQ-016 et MQ-201 sont trop discrets, et les trois offres de MQ-201 ont un bouton identique, sans action mise en avant.
- **Cohérence** : composants de liste, cartes et barre d'onglets homogènes d'un écran à l'autre. Les libellés respectent le vouvoiement et les nombres à la française.

## 9. Mobile (estimation sur maquette statique)

- **Usage à une main** : l'avatar (MQ-024) et le bouton retour (MQ-010, MQ-016, MQ-250) sont en haut à gauche, 44 × 44, hors de portée confortable du pouce droit sur un écran de 6,1 pouces. Le retour par balayage n'est pas vérifiable sur maquette.
- **Cibles tactiles** : zones de 44 px présentes sur les boutons de MQ-016 et MQ-201, lignes de 56 px sur MQ-010. Trop juste : le champ de recherche de MQ-250 et les lignes de catégories de MQ-079 (pas d'environ 42 px, une seule ligne reliée dans le prototype).
- **Défilement** : MQ-016 tient dans 852 px. MQ-201 dépasse (lien « Restaurer mes achats » hors champ) sans indice de défilement.
- **Zone du pouce** : sur MQ-016, la mention Famille est en bas, à portée, mais elle n'est pas interactive. L'endroit serait bon pour une vraie carte d'option.
- **Autres formats** : aucun des 29 cadres de la page « 10 · Autres formats » ne concerne les offres ou la famille. Rien à vérifier sur petit écran, pliable ou tablette.

## 10. Éléments manquants

Signalés comme manquants, aucun n'a été inventé :

- Écran iPhone de l'option Famille : contenu, prix, conditions, bouton d'ajout.
- Feuille de confirmation et de paiement de l'option (équivalent de MQ-218).
- État de réussite après achat et état « option active » dans MQ-016.
- Écran « Qui voit quoi » : comptes partagés et comptes privés, droits de lecture ou de modification, sort des identifiants bancaires.
- Invitation du conjoint : envoi, attente, relance, expiration.
- Parcours du conjoint invité : réception, création de son accès, première vue.
- Gestion des membres : liste, rôle, retrait, place des enfants.
- Budget à deux : auteur d'une dépense, filtre par personne, enveloppes communes ou personnelles.
- Résiliation de l'option et conséquences pour le conjoint.
- Récapitulatif du coût total (offre et options), par an et par mois.
- Variantes de MQ-016 pour un compte Essentiel et un compte Plus.
- Article d'aide sur le partage, et liens des questions fréquentes de MQ-250.
- Mention des options dans MQ-201.
- Web : MQ-177, MQ-232 et MQ-224 sont tous trois « À concevoir ».
- Lien de prototype vers un parcours Famille, sur iPhone comme sur le web.
- Thèmes clair et pastel de ces écrans : non vus dans les cadres consultés.

## 11. Top 5 des corrections

1. **Concevoir le parcours Famille sur iPhone, à partir de MQ-016.** Remplacer la note grise par une section « Options » avec une carte par option (nom, prix, ce que cela apporte, bouton « Ajouter l'option Famille »), puis une feuille de confirmation calquée sur MQ-218 et un état de réussite.
2. **Ajouter un écran « Ce que voit chacun » avant le paiement.** Tableau simple compte par compte (partagé ou privé), phrase explicite sur les identifiants bancaires qui ne sont jamais partagés, accès séparé pour le conjoint, réglage modifiable ensuite.
3. **Afficher le coût total avant l'achat.** Dire si Famille exige une offre payante, combien de personnes sont incluses, et donner le total offre et options par an et par mois. Supprimer ou réécrire « Prix réglables ».
4. **Dessiner l'invitation et la gestion des membres**, des deux côtés : envoi, attente, acceptation par le conjoint, liste des membres, retrait, effet d'une résiliation.
5. **Rendre l'option trouvable et documentée.** Ligne « Famille » dans MQ-010, mention dans MQ-201, article d'aide dans MQ-250 avec liens actifs, MQ-177 conçu ou retiré du périmètre annoncé. Au passage, corriger la coupure « 30 €/an », le bouton sans lien de MQ-010 et la sortie non annoncée vers l'App Store.

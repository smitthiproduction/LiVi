# Simulation UX à cinq personas : maquettes iPhone de LiVi

| | |
|---|---|
| Date | Vendredi 20 novembre 2026 |
| Auditeur | Agent « Chrysae UX Simulation Auditor » (agent_015q42hS3VeUHQ46vttVWQxf, version 1), adapté à LiVi |
| Fichier Figma | « LiVi — Maquettes », clé `cR7EtAZKpKCkgOoEqcJ8Wq` ; page « Parcours iPhone » (`109:130`, 157 écrans, 644 liens, 14 points de départ) ; pages « 10 · Autres formats » (`3:39`) et « 11 · Web » (`3:40`) au niveau de l'inventaire |
| Dépôt | `/home/claude/livi`, branche `docs/restes-figma` (état du 20 novembre, modifications en cours non commitées, dont MQ-248 à MQ-253) |
| Sources lues | `CLAUDE.md` ; `docs/suivi/etat-du-projet.md` ; `docs/produit/navigation.md`, `catalogue.json` (177 fonctionnalités), `README.md` (offres) ; `docs/design/maquettes.json` (253 maquettes), `parcours-utilisateur.md`, `figma.md` ; décisions 0004 à 0007 ; `docs/business/README.md` ; rapports précédents : [revue du 15 novembre](2026-11-15-revue-maquettes.md) (section « Suivi des corrections ») et [audit de l'accueil du 19 novembre](../../audit-figma/2026-11-19-accueil.md) |
| Appels Figma | **15** : 1 lecture de la consigne `figma-use`, 8 scripts de lecture `use_figma` (structure, textes et liens des 9 sections en 4 scripts, états des commandes, pages 10 et 11), 6 captures (MQ-201, MQ-024, MQ-202, MQ-079, MQ-212, MQ-125) |
| Écriture dans Figma | Aucune. Tous les scripts étaient en lecture seule et n'ont créé, modifié ni supprimé aucun calque. |
| Annotations | **65** : 2 bloquantes, 37 majeures, 26 mineures |

## Hypothèses de travail

Les constats du tableau sont marqués **Observé** (lu dans Figma ou dans le dépôt) ou **Hypothèse** (déduit, à confirmer).

1. **Réactions simulées.** Les cinq personas sont des simulations fondées sur des heuristiques d'ergonomie, d'accessibilité et de psychologie de la consommation. Aucun test avec de vrais utilisateurs n'a été mené. Les phrases attribuées aux personas sont des reconstitutions.
2. **Livraison.** Les écrans sont jugés comme s'ils partaient tels quels dans la version qui porte leurs fonctionnalités. Pour l'offre et la barre d'onglets, on suppose que le MVP de juillet 2027 reprend les maquettes (S-001, D-015).
3. **Calques hors cadre.** Les calques placés hors du cadre pour l'animation intelligente (feuilles d'achat ou de méthode) sont supposés invisibles en lecture. Ils ont été écartés de l'analyse.
4. **Textes.** Les textes lus par script sont complets pour les sections 01, 02, 03, 06, 08 et 09. Ils sont tronqués au-delà de 450 à 650 caractères par écran pour les fiches (04), les analyses (05) et Marchés (07).
5. **Marché visé.** Ménages français qui veulent tout voir au même endroit, du néophyte à l'investisseur aguerri. Le business plan et la présentation sont publiés sur claude.ai, hors dépôt : ils n'ont pas été relus ici.
6. **Règles externes.** Les exigences de l'App Store et du Code de la consommation citées ici sont à confirmer par l'agent `conformite` dans leur version en vigueur. Ce rapport n'est pas un avis juridique.

## 1. Synthèse exécutive

Les maquettes sont mûres sur ce qui fait l'identité de LiVi. Elles sont neutres : aucun bouton « Acheter » ou « Vendre », une réponse neutre à la demande de conseil avec renvoi vers un conseiller enregistré à l'ORIAS. Elles sont transparentes : sources et dates sous les chiffres, coût de l'IA en euros. Les trois offres ont le même poids, aucune n'est présélectionnée, la résiliation en trois clics est affichée. Le cinquième choix de confidentialité (« Proposer cet établissement à LiVi ») est désactivé par défaut. Rien de cela n'est à défaire.

Les frictions se concentrent sur cinq points.

1. **L'offre ne suit pas le calendrier de livraison ni la transparence des prix.** La présentation des offres (MQ-201) vend la connexion automatique (CPT-06 et CPT-07, prévues en octobre 2027) et LiVi IA (IA-01 à IA-10, octobre 2027 et 2028), qui n'existeront pas au MVP de juillet 2027. Elle ne dit ni le quota de crédits inclus, ni l'existence de packs payants, ni la condition des 5 comptes gratuits. Les liens vers les conditions, la confidentialité et la restauration des achats manquent (S-001, D-001, S-002, N-001).
2. **Le prototype ne suit pas l'état de l'utilisateur.** Après un achat, on revient à l'accueil vide qui propose encore de payer. Après un import de 8 410 opérations, les onglets ramènent à « Aucun établissement pour l'instant ». Fermer les offres depuis LiVi IA rejoue l'inscription. La reconnexion par e-mail repasse par les offres (D-003 à D-006, D-008, N-009).
3. **Le parcours gratuit est lourd pour un néophyte.** Aucun guide n'explique comment obtenir son fichier. Les réglages techniques (séparateur, encodage) sont imposés même quand le préréglage est reconnu. Le tri des opérations à catégoriser passe par LiVi IA. Aucun écran n'existe pour la limite de comptes (N-002, N-006, N-007, N-010).
4. **La lisibilité reste fragile pour une personne âgée.** 149 écrans sur 157 portent des textes de 12 ou 12,5 pt, y compris la fraîcheur et les alertes. Aucune maquette en grande taille de texte n'existe hors du montant principal. Les feuilles n'ont pas de bouton Fermer. Annuler un import ne demande aucune confirmation (A-001 à A-004).
5. **Quelques incitations involontaires subsistent.** Les données tierces (opinions d'analystes, prix cible) sont affichées par défaut. La pastille rouge compte les annonces. « Plus fortes hausses » ouvre Découvrir. Un onglet sur cinq est consacré à une offre payante (P-003, P-005, P-009, P-012).

### Niveau de friction simulé par parcours et par persona

| Parcours | N néophyte | S spécialiste | D designer | A personne âgée | P psychologue |
|---|---|---|---|---|---|
| 1. Premier lancement et choix d'offre | Moyen | Moyen | Moyen | Moyen | Moyen |
| 2. Premier établissement et import | **Fort** | Moyen | **Fort** | **Fort** | Faible |
| 3. Accueil au quotidien et fiche | Moyen | Moyen | Faible | Moyen | Moyen |
| 4. Budget et opérations | **Fort** | Moyen | **Fort** | Moyen | Faible |
| 5. Passage à Signature et LiVi IA | Moyen | **Fort** | **Fort** | Moyen | Moyen |
| 6. Retour d'un utilisateur et autres formats | Faible | Moyen | Moyen | **Fort** | Faible |

### Cinq actions qui rapportent le plus

1. Rendre la présentation des offres fidèle à ce qui est livré, version par version, et complète (crédits, packs, condition des 5 comptes, liens légaux, restauration).
2. Ajouter au prototype une branche « payant » et une branche « après le premier import », avec un accueil qui montre le premier établissement.
3. Alléger l'import quand le préréglage est reconnu et ajouter « Comment obtenir ce fichier » par établissement.
4. Créer le tri manuel des opérations à catégoriser et l'écran neutre de limite de comptes.
5. Poser un plancher de 13 pt pour les informations critiques, dessiner les écrans clés en grande taille de texte, ajouter une croix à chaque feuille et confirmer chaque action destructrice.

## 2. Méthode et personas

**Méthode.**

1. Lecture par script de chaque cadre de la page « Parcours iPhone » : textes visibles dans l'ordre de lecture, taille minimale de police, liens de prototype avec leur destination et la taille de la zone touchée.
2. Lecture des états des commandes sur 16 écrans clés : cases radio, interrupteurs, style et taille des boutons, variables de couleur des montants.
3. Reconstitution des parcours à partir des 14 points de départ et des 644 liens.
4. Six captures en thème Sombre.
5. Croisement avec le catalogue (offre et priorité de chaque fonction), les décisions et les rapports précédents. Les points déjà corrigés ne sont pas recomptés. Les points encore ouverts sont rappelés en section 10.

| Code | Persona | Ce qu'il cherche | Ce qui le fait partir |
|---|---|---|---|
| **N** | Néophyte, n'a jamais suivi son patrimoine | Voir vite un total juste, sans vocabulaire technique | Un écran qu'il ne comprend pas, un effort sans résultat visible |
| **S** | Spécialiste : investisseur aguerri ou conseiller en gestion de patrimoine, utilisateur actuel de Finary ou d'un tableur | Exactitude, cohérence des chiffres, reprise de son historique, prix clairs | Un chiffre contradictoire, une fonction vendue mais absente |
| **D** | Designer UI/UX | Un prototype jouable et cohérent, une hiérarchie claire, des états complets | Des impasses, des écrans réutilisés hors contexte |
| **A** | Personne âgée | Lisibilité, gestes simples et visibles, possibilité d'annuler, aide humaine | Petits textes, gestes cachés, action irréversible au mauvais toucher |
| **P** | Sociologue ou psychologue de la consommation | Absence de manipulation, rapport apaisé à l'argent | Urgence artificielle, ancrage, culpabilisation, pression commerciale |

**Gravité.**

- **Bloquant** : empêche le parcours, enfreint une règle absolue de LiVi, ou expose à un risque légal ou de refus de publication.
- **Majeur** : friction forte, abandon probable, incohérence visible, ou perte de conversion ou de rétention évitable.
- **Mineur** : finition.

**Cadre éthique de la conversion.**

- Les offres Plus (40 €/an) et Signature (150 €/an) gardent le même poids visuel (décision 0005). Aucune offre n'est présélectionnée (USR-11).
- Interdits : compte à rebours, offre limitée dans le temps, culpabilisation dans les refus, badge « le plus choisi ».
- Aucun mot de conseil dans l'interface (CLAUDE.md §2).
- Aucune donnée financière dans les mesures d'audience.

## 3. Parcours simulés

Les flèches suivent les liens réels du prototype. Les touchers sont comptés hors saisie et hors écrans du système (sélecteur de fichier, application bancaire).

### Parcours 1 · Premier lancement et choix d'offre (point de départ 1)

| Étape | Écran | Action jouée | Ce que vivent les personas | Codes |
|---|---|---|---|---|
| 1 | MQ-001 Bienvenue | « Créer un compte » | Promesse claire et rassurante (« ne vous dit jamais quoi faire », « jamais revendues »). Tous apprécient. | — |
| 2 | MQ-002 | « Continuer avec Apple » | Rapide. Le lien « Déjà inscrit ? » rassure. | — |
| 3 | MQ-007 Face ID | « Activer Face ID » ou « Plus tard » | Les deux mènent aux offres. Bien. | — |
| 4 | MQ-201 Offres | Croix, ou « Continuer avec Essentiel », « Choisir Plus », « Choisir Signature » | N retient « Jusqu'à 5 comptes ». S cherche le détail des « analyses avancées » et ce que coûte vraiment l'IA. A voit trois boutons gris de 32 pt sur fond gris. P constate une égalité réelle, sans prix barré ni urgence. Aucun lien vers les conditions. | N-001, S-001, S-002, S-003, S-008, D-001, D-002 |
| 5 | MQ-005 Choix Essentiel | Une case radio sur trois, puis « Continuer » | Aucune case présélectionnée (observé). N découvre que les 5 comptes exigent la contribution. P y voit un échange « données contre service ». | N-001, N-003, P-001 |
| 6 | MQ-025 Accueil vide | — | Invitation claire. Mais tout est à 0,00 € : rien à voir avant l'effort. | N-004 |
| 4 bis | MQ-218 ou MQ-219 | « Confirmer avec Face ID » | Le payant revient au même accueil vide que le gratuit (voir parcours 5). | D-004 |

Bilan : 6 touchers avec Apple, 8 avec l'e-mail. Le parcours est court. La transparence se joue sur MQ-201.

### Parcours 2 · Ajout d'un premier établissement et import (point de départ 2)

| Étape | Écran | Action jouée | Ce que vivent les personas | Codes |
|---|---|---|---|---|
| 1 | MQ-025 | « Ajouter un établissement », ou une pastille de type | Les quatre pastilles ouvrent le même annuaire non filtré. | N-014 |
| 2 | MQ-036 Annuaire | Banque Rivière | Seules 3 lignes sur 6 répondent. Atlas Bourse et Valcrypto ouvrent directement la saisie d'une clé, sans choix de méthode ni vérification de l'offre. | N-016, D-007 |
| 3 | MQ-202 Méthode (feuille) | « Importer un fichier » | La connexion payante vient en premier. Rien ne dit que l'import et la saisie sont inclus. Pas de croix pour fermer. | N-005, A-004 |
| 4 | MQ-034 Étape 1 | « Continuer » | N : « Où est-ce que je trouve ce fichier ? » Aucune aide. | N-006 |
| 5 | MQ-205 Étape 2 | « Continuer » | Séparateur, encodage, ligne des en-têtes, alors que le préréglage est reconnu. N et A ne comprennent pas. S trouve ça rassurant mais long. | N-007 |
| 6 | MQ-206 Étape 3 | « Afficher l'aperçu » | Correspondance claire pour S, opaque pour N. | N-007 |
| 7 | MQ-035 Étape 4 | « Écarter 2 doublons et importer » | Deux doublons précochés alors que le texte dit « Rien n'est écarté sans votre choix ». « Annuler l'import » quitte sans confirmation. | P-011, A-003 |
| 8 | MQ-207 Terminé | « Voir Banque Rivière » ou « Voir le budget proposé » | La fiche ouverte (MQ-209) montre une connexion automatique et un crédit jamais importés. Rien ne dit que ce compte restera daté du 31 octobre. | D-008, P-010, A-003 |
| 9 | MQ-211 Budget proposé | « Valider ce budget » | Le bouton n'a pas de lien. Les onglets ramènent à l'accueil, au patrimoine et au budget vides. | N-009 |

Variante « connexion automatique » : MQ-202 › MQ-203 « Passer à Plus · 40 €/an » › MQ-220 « Abonnement Plus activé », sans feuille d'achat (D-003) › MQ-037 › MQ-204 › MQ-209. Le chemin est clair, avec une bonne explication de l'agrégateur et des 180 jours.

Variante « non listé » : MQ-208 › MQ-251 › MQ-252 › MQ-253, cohérente depuis la correction de R-15, mais elle rejoint MQ-035, l'aperçu de Banque Rivière.

Variante « courtier » : MQ-038, une clé API sans autre solution (N-008).

Bilan : 8 touchers pour un import avec préréglage, sans compter le sélecteur de fichier. C'est le parcours où N et A abandonnent le plus probablement.

### Parcours 3 · Consultation quotidienne de l'accueil et d'une fiche (point de départ 3)

| Étape | Écran | Action jouée | Ce que vivent les personas | Codes |
|---|---|---|---|---|
| 1 | MQ-024 Accueil | Lecture | Montant lisible, variation avec signe et flèche. N lit « +4 337,12 € sur 1 mois » comme un gain de marché. Banque Rivière à −183 608,07 € inquiète N et P. La pastille rouge « 3 » attire l'œil. S voit « 1 valeur ancienne » ici et « 3 valeurs anciennes » sur Patrimoine. | N-012, P-002, P-003, P-004, S-004, S-007 |
| 2 | MQ-024 › MQ-027 | Toucher le montant (double toucher simulé) | Le mode discret est utile mais invisible. A ne le trouve pas. | A-005 |
| 3 | MQ-024 › MQ-249 › MQ-033 › MQ-048 | Atlas Bourse › PEA › Lumière Industries | 3 touchers jusqu'à la fiche. Fiche riche, sourcée, sans « Acheter ». A doit faire défiler 7 onglets horizontaux. | A-008 |
| 4 | MQ-049 › MQ-055 | « Données tierces » | Opinions d'analystes et prix cible publiés, sourcés et datés, mais affichés par défaut. | P-005 |
| 5 | MQ-024 › MQ-209 › Compte courant | Banque Rivière › compte courant | On arrive sur toutes les opérations de tous les comptes (renvoi R-14). | — |
| 6 | MQ-030 › Valcrypto, Toits Partagés, Crédit du Littoral | Lignes d'établissement | Trois lignes n'ouvrent pas la fiche de leur établissement. | D-011 |

### Parcours 4 · Budget et opérations (point de départ 5)

| Étape | Écran | Action jouée | Ce que vivent les personas | Codes |
|---|---|---|---|---|
| 1 | MQ-079 Budget du mois | Lecture | « Reste à dépenser 560,00 € » se comprend tout de suite. Rien pour modifier une enveloppe ni changer de mois. Dépassement en rouge avec icône d'alerte. | N-011, S-009, P-006 |
| 2 | MQ-089 Opérations | Ligne « CB LA FOURNEE » (à catégoriser) | Elle ouvre la catégorisation par LiVi IA (Signature, prévue en octobre 2027). Aucun tri manuel. | N-010 |
| 3 | MQ-089 › MQ-081 | Marché Plein Ciel | Détail clair, origine « Annuaire des enseignes ». | — |
| 4 | MQ-081 › MQ-082 | « Changer la catégorie » | La feuille parle d'une autre opération (Brico Rivage, 21 oct.) et de la catégorie « Maison », retirée. | D-009 |
| 5 | MQ-083 › MQ-080 | « Appliquer à 7 opérations » | On atterrit sur la catégorie Courses, sans rapport avec l'action. | D-009 |
| 6 | MQ-217 › MQ-211 | « Créer une enveloppe à la main » (budget vide) | Ouvre un budget « proposé à partir de vos dépenses », alors qu'il n'y a pas de dépenses. | D-010 |

### Parcours 5 · Passage à Signature et LiVi IA (points de départ 1 et 7)

| Étape | Écran | Action jouée | Ce que vivent les personas | Codes |
|---|---|---|---|---|
| 1 | MQ-025 › MQ-212 | Onglet LiVi IA (Essentiel) | Page honnête, rassurante, mais abstraite : aucun exemple, aucun quota, aucune démonstration. | N-015, S-002, P-009 |
| 2 | MQ-212 › MQ-201 | « Découvrir Signature · 150 €/an » | On retombe sur l'écran des offres de l'inscription. | D-004 |
| 3a | MQ-201 › croix › MQ-005 | Fermer | La croix ramène au choix de contribution de l'inscription, puis à l'accueil vide. | D-004 |
| 3b | MQ-201 › MQ-219 › MQ-025 | Choisir Signature, confirmer | Après l'achat, retour à l'accueil vide, dont l'onglet LiVi IA propose encore Signature. | D-004 |
| 4 | MQ-115 › MQ-116 › MQ-117 › MQ-115 | Écrire, traduire, valider une consigne (Camille) | Excellent : phrase de l'utilisateur, structure vérifiable, coût affiché, validation par Face ID. P : « coût de novembre 1,12 € » alors que les crédits sont inclus. | P-008 |
| 5 | MQ-115 › MQ-119 | Consigne Ether | Mention « non disponible, soumis à l'avis juridique », mais le bouton principal « Valider avec Face ID » reste actif et mène au journal. | S-006 |
| 6 | MQ-121 › MQ-123 | Demande de conseil | Refus net et factuel, renvoi ORIAS. Les deux raccourcis proposés orientent vers la revente. | P-007 |
| 7 | MQ-010 › MQ-016 | Offres depuis le profil | Seule la version Signature existe : un utilisateur Essentiel ne peut pas changer d'offre depuis son profil. Aucun « Restaurer les achats ». | D-005, D-001 |

### Parcours 6 · Retour d'un utilisateur et autres formats (points de départ 9 et page 10)

| Étape | Écran | Action jouée | Ce que vivent les personas | Codes |
|---|---|---|---|---|
| 1 | MQ-001 › MQ-221 › MQ-008 › MQ-026 › MQ-028 | « J'ai déjà un compte » avec Apple | Retour direct à l'accueil, avec l'alerte d'accès à renouveler. Bien. | — |
| 2 | MQ-221 › MQ-003 › MQ-004 › MQ-007 › MQ-201 | Même retour par e-mail | Le code validé renvoie vers Face ID puis les offres et la contribution, comme une inscription. | D-006 |
| 3 | MQ-125 (iPhone SE) | Lecture de l'accueil | Montant et graphique occupent l'écran. Un seul établissement visible au-dessus de la barre. | A-007 |
| 4 | Page 10 | Tablette, pliable | Seul l'accueil existe (10 cadres sur 27). Fiches, budget, patrimoine et ajout sont à concevoir. | A-011 |
| 5 | Page 11 | Web | 1 cadre conçu sur 43 (tableau de bord, avec un avatar « JR »). | S-010, D-014 |

## 4. Frictions par persona

### N · Néophyte

> « Je m'inscris en une minute. Ensuite, on me demande un fichier que je ne sais pas trouver, avec un séparateur et un encodage. Quand j'y arrive, l'application me dit que je n'ai rien. »

- **Points d'abandon** : obtenir le fichier (N-006), réglages techniques (N-007), retour à un écran vide après l'import (N-009), 37 opérations à catégoriser sans outil gratuit (N-010).
- **Malentendus** : la condition des 5 comptes (N-001), ce qui compte dans la limite (N-002), « +4 337,12 € » pris pour un gain (N-012), « Clé », « Relevé », « Préréglage » (N-013).
- **Leviers éthiques** : un exemple explorable avant l'effort (N-004), des exemples concrets de LiVi IA (N-015), les méthodes gratuites signalées comme telles (N-005).
- 16 annotations : 10 majeures, 6 mineures.

### S · Spécialiste

> « Les calculs sont propres et sourcés. Mais je paie 150 € pour une IA qui n'existe pas encore, sans savoir combien de crédits j'ai. Et je ne peux pas reprendre mes 30 lignes de mon tableur. »

- **Confiance** : fonctions vendues avant leur livraison (S-001), crédits et packs non annoncés (S-002), « 1 » contre « 3 valeurs anciennes » (S-004), bouton actif sur une fonction indisponible (S-006).
- **Acquisition** : pas d'import de positions ni de reprise depuis un tableur ou un autre outil (S-005), pas de comparatif détaillé ni d'essai (S-003), web presque pas dessiné (S-010).
- **Finition** : variation du patrimoine présentée comme une performance (S-007), limite de 10 connexions absente de MQ-201 (S-008), pas de mois précédents dans le budget (S-009).
- 10 annotations : 1 bloquante, 6 majeures, 3 mineures.

### D · Designer UI/UX

> « Le système est solide : jetons, 44 pt, transitions. Mais le prototype oublie qui je suis. Gratuit ou payant, avant ou après l'import, je retombe toujours sur les mêmes écrans. »

- **États manquants** : branche payante (D-004), achat depuis MQ-203 (D-003), version Essentiel de MQ-016 (D-005), reconnexion par e-mail (D-006).
- **Écrans hors contexte** : fiche connectée après un import (D-008), changement de catégorie sur une autre opération (D-009), enveloppe manuelle qui ouvre le budget proposé (D-010), lignes d'établissement hétérogènes (D-011).
- **Offres** : liens légaux et restauration absents (D-001), boutons trop discrets (D-002), onglets sans fonction au MVP (D-015).
- 16 annotations : 1 bloquante, 10 majeures, 5 mineures.

### A · Personne âgée

> « Le gros chiffre, je le lis. Les petites lignes en gris, non. Je ne sais pas fermer ce panneau qui monte du bas. J'ai touché "Annuler l'import" et tout a disparu. »

- **Lisibilité** : informations critiques en 12 à 12,5 pt (A-001), aucune maquette en grande taille de texte hors montant principal (A-002), graphique sans repères (A-010).
- **Sécurité du geste** : annulation d'import sans confirmation (A-003), feuilles sans croix (A-004), déconnexion sans confirmation (A-006), mode discret invisible (A-005).
- **Formats et aide** : tablette et pliable presque pas dessinés (A-011), iPhone SE (A-007), onglets de fiche horizontaux (A-008), pas de contact humain (A-009).
- 11 annotations : 6 majeures, 5 mineures.

### P · Psychologue de la consommation

> « LiVi évite les pièges classiques : pas d'urgence, pas d'offre mise en avant, pas de case cochée pour moi. Restent des signaux qui poussent à regarder, à comparer et à s'inquiéter. »

- **Consentement** : 5 comptes contre contribution, 2 sans (P-001). L'avis RGPD est déjà inscrit comme bloquant avant le lancement.
- **Anxiété** : banque affichée à −183 608,07 € (P-002), pastille rouge qui compte les annonces (P-003), période courte par défaut (P-004), dépassement en rouge (P-006).
- **Biais** : données tierces par défaut, avec ancrage sur le prix cible et preuve sociale (P-005), « Plus fortes hausses » en tête de Découvrir (P-012), doublons précochés (P-011), raccourcis vers la revente après une demande de conseil (P-007).
- **Pression commerciale** : onglet permanent consacré à Signature (P-009), crédits inclus présentés comme un coût (P-008). À l'inverse, des moments de valeur ne sont pas exploités (P-010).
- 12 annotations : 5 majeures, 7 mineures.

## 5. Tableau des annotations

### N · Néophyte

| Code | Écran | Élément | Gravité | Constat | Recommandation |
|---|---|---|---|---|---|
| N-001 | MQ-201, MQ-005 | Ligne « Jusqu'à 5 comptes » d'Essentiel | Majeur | **Observé.** MQ-201 annonce 5 comptes gratuits. L'écran suivant révèle « Ne pas contribuer : Essentiel limité à 2 comptes ». La condition arrive après le choix. | Écrire sur MQ-201 « 2 à 5 comptes selon votre choix de confidentialité » avec un lien « Comprendre », ou « Jusqu'à 5 comptes avec la contribution anonyme ». |
| N-002 | MQ-201, MQ-030, MQ-204 | Ce que compte la limite | Majeur | **Observé.** L'offre compte des « comptes », le parcours parle d'« établissements » : Banque Rivière seule fait « 2 comptes et 1 crédit ». Aucun compteur, et aucun écran de limite atteinte parmi les 253 de l'inventaire. **Hypothèse** : un néophyte avec une banque et un livret ailleurs dépasse 2 comptes dès le premier jour. | Définir ce qui compte (comptes et crédits, biens exclus ou non) et l'écrire. Afficher « 3 comptes sur 5 » dans Mes établissements. Dessiner une feuille neutre « Limite de comptes atteinte » avec trois choix de même poids : retirer un compte, changer de choix de confidentialité, passer à Plus. |
| N-003 | MQ-005 | Sous-titre « Trois choix de même valeur » | Mineur | **Observé.** Les choix diffèrent (5 ou 2 comptes, gratuit ou 100 €). Le mot « valeur » prête à confusion. | « Trois façons d'utiliser Essentiel, modifiables à tout moment », avec un petit tableau : comptes, contribution, prix. |
| N-004 | MQ-025, MQ-244 | Accueil vide à 0,00 € | Majeur | **Observé.** Avant tout ajout, aucun moyen de voir à quoi ressemble LiVi avec des données. Il faut fournir l'effort avant de voir la valeur. | Lien « Explorer avec un exemple » : données fictives (Camille), bandeau permanent « Exemple », sortie en un geste, jamais mélangées aux vraies données. Réutiliser les jeux de BO-22. |
| N-005 | MQ-202 | Méthodes d'ajout | Mineur | **Observé (capture).** Seule la connexion porte une mention d'offre (« offre Plus »). Rien ne dit que l'import et la saisie sont inclus. | Étiquette « Inclus » sur l'import et la saisie, « Plus » sur la connexion, même taille et même style. |
| N-006 | MQ-034, MQ-251 | Obtenir le fichier | Majeur | **Observé.** L'import commence avec un fichier déjà choisi. Aucun écran n'explique où télécharger un relevé CSV chez sa banque, ni jusqu'où remonte l'historique. | Bloc « Comment obtenir ce fichier chez Banque Rivière » (3 étapes, durée d'historique de la banque), tenu dans le back-office avec le préréglage (BO-28, CPT-12). Lien vers l'Aide. « Je n'ai pas de fichier : saisir à la main ». |
| N-007 | MQ-205, MQ-206 | Étapes 2 et 3 imposées malgré le préréglage | Majeur | **Observé.** Avec « Préréglage Banque Rivière · CSV reconnu », il faut encore passer « Séparateur, Encodage UTF-8, Ligne des en-têtes, Lignes à ignorer », puis la correspondance des colonnes. | Si le préréglage est reconnu et que les soldes concordent : aller de l'étape 1 à l'aperçu, avec « Réglages vérifiés · Voir le détail ». Garder les 5 étapes pour un fichier sans préréglage (MQ-251 à MQ-253). La validation reste à l'aperçu (CPT-03 : aucune ligne n'entre sans validation). Changement de spécification à passer par `livi-fonctionnalite`. |
| N-008 | MQ-038 | Clé API d'Atlas Bourse | Majeur | **Observé.** Quatre gestes techniques (Réglages › API, clé « Lecture seule », clé et secret). « Vérifier la clé » renvoie à Mes établissements sans confirmation. Aucune autre méthode n'est proposée ici, alors que l'annuaire affiche « Clé · fichier ». | « Importer un fichier à la place » sous le bouton. Guide visuel par plateforme, tenu dans le back-office. État de réussite : « Clé vérifiée · lecture seule confirmée · 4 positions trouvées ». |
| N-009 | MQ-211 et onglets | Après l'import | Majeur | **Observé.** « Valider ce budget » n'a aucun lien. Les onglets mènent à MQ-025 (« Aucun établissement pour l'instant »), MQ-216 et MQ-217, juste après l'import de 8 410 opérations. | Relier « Valider ce budget » à MQ-079 en version Essentiel (5 enveloppes). Dessiner un accueil « premier établissement » (Banque Rivière seule) et y relier les onglets de MQ-207 et MQ-211. |
| N-010 | MQ-089 › MQ-122 | Lignes « À catégoriser » | Majeur | **Observé.** Les trois lignes à catégoriser ouvrent la catégorisation par LiVi IA (IA-10, Signature, octobre 2027). Pour Essentiel, au MVP, aucun tri manuel n'est dessiné. MQ-207 annonce pourtant « 37 à catégoriser ». | File « À catégoriser » sans IA : regroupement par libellé (« CB LA FOURNEE · 6 opérations »), pastilles des catégories les plus fréquentes de l'annuaire, règle proposée après le choix. LiVi IA en option visible pour Signature. |
| N-011 | MQ-079 | Modifier une enveloppe | Majeur | **Observé (capture).** Aucun bouton « Modifier ». La mention « Modifiable dans les réglages du budget » n'est pas reliée. Seule l'enveloppe Courses est touchable. | « Modifier le budget » en en-tête. Toucher une enveloppe ouvre une feuille de montant. Lien vers les réglages du budget (report du solde). |
| N-012 | MQ-024 | « +4 337,12 € sur 1 mois » | Mineur | **Observé.** Rien n'indique que la variation inclut l'épargne et les remboursements. **Hypothèse** : lu comme un gain de marché. | Libellé lecteur d'écran et bulle « Variation du patrimoine net, versements et remboursements compris ». Lien vers Performance pour les placements. |
| N-013 | MQ-024, MQ-030, MQ-248, MQ-249 | Sources « Clé », « Relevé », « Saisie » | Mineur | **Observé.** « Clé · hier 18:00 » ne dit rien à un néophyte. | « Lecture seule · hier 18:00 », « Relevé PDF · 30 sept. », « Saisi par vous · 1er nov. », ou icône avec libellé. Glossaire dans l'Aide. |
| N-014 | MQ-025 | Pastilles Banques, Courtiers, Assurance vie, Crypto | Mineur | **Observé.** Les quatre ouvrent MQ-036 sur « Tous ». | Ouvrir l'annuaire filtré sur le type touché (variantes de MQ-036). |
| N-015 | MQ-212 | Présentation de LiVi IA | Majeur | **Observé (capture).** Quatre fonctions décrites en termes abstraits, sans exemple de phrase, sans aperçu de la validation, sans quota. | Deux exemples (« Me rappeler de verser 150 € sur Horizon Vie le 15 », « Combien ai-je dépensé en courses en 2025 ? »). Aperçu de l'écran de vérification. « Voir un exemple » sur données fictives, sans achat. |
| N-016 | MQ-036 | Lignes de l'annuaire | Mineur | **Observé.** Néo Banque Orbe, Horizon Vie et Toits Partagés ne sont pas reliés. En test, le néophyte touche Horizon Vie et rien ne se passe. | Relier chaque ligne à la feuille de méthode (MQ-202) en variante : Horizon Vie (relevé PDF, saisie), Toits Partagés (fichier, saisie). |

### S · Spécialiste

| Code | Écran | Élément | Gravité | Constat | Recommandation |
|---|---|---|---|---|---|
| S-001 | MQ-201, MQ-212, MQ-203 | Fonctions vendues avant leur livraison | Bloquant (si l'écran part ainsi au MVP) | **Observé** dans le catalogue : la connexion automatique (CPT-06, CPT-07) est prévue en octobre 2027. Toutes les fonctions de LiVi IA (IA-01 à IA-10, sauf IA-07) arrivent en octobre 2027 ou en 2028. MQ-201 les présente comme le cœur de Plus et de Signature. **Hypothèse** : au MVP de juillet 2027, l'acheteur paierait des fonctions absentes, avec un risque de pratique commerciale trompeuse (à confirmer par `conformite`) et de remboursements. | Présentation des offres pilotée par le back-office (BO-01) selon les fonctions actives. Au MVP, Plus = multi-devises, performance réelle, statistiques avancées, sauvegarde et synchronisation chiffrées, simulateur de seuil. Signature non vendue avant ses fonctions, éventuellement une liste d'attente gratuite. À trancher avec l'arbitrage du périmètre MVP déjà ouvert. |
| S-002 | MQ-201, MQ-212, MQ-219 | Crédits IA | Majeur | **Observé.** MQ-115 montre « 112 crédits sur 400 inclus dans Signature · Aujourd'hui : 11 crédits sur 40 · 1 crédit = 0,01 € ». IA-08 prévoit des packs au-delà. Avant l'achat, seule la mention « Coût de l'IA affiché en euros » apparaît. | Sur MQ-201, MQ-212 et MQ-219 : « 400 crédits par mois inclus, 40 par jour au plus ; au-delà, packs à partir de … €, achetés seulement à votre demande », avec deux exemples de coût (traduction d'une consigne : environ 3 crédits). |
| S-003 | MQ-201 | Détail des offres | Majeur | **Observé.** Trois lignes par offre (« Analyses et statistiques avancées » sans détail), pas de comparatif, pas d'essai. | Lien « Comparer toutes les fonctions », tableau généré depuis `catalogue.json`. Si un essai est proposé : durée, date de fin, prix ensuite et rappel 48 h avant la fin, affichés avant la souscription. Aucune reconduction cachée, aucun compte à rebours. |
| S-004 | MQ-024, MQ-040, MQ-210, MQ-215 | Valeurs anciennes | Majeur | **Observé.** Même total de 184 320,57 €, même heure : l'accueil dit « 1 valeur ancienne », Patrimoine dit « Total avec 3 valeurs anciennes : montre, Horizon Vie, Toits Partagés ». | Une seule règle d'ancienneté (seuil par source : relevé, saisie, bien) et le même compte partout. « 3 valeurs anciennes » sur l'accueil, avec le détail au toucher. |
| S-005 | MQ-034 à MQ-206 | Reprise d'un historique de placements | Majeur | **Observé.** Le modèle d'import ne relie que des opérations bancaires (date, libellé, débit, crédit, solde). Aucun modèle de positions (actif, ISIN, quantité, prix de revient, enveloppe), seulement la saisie une à une (MQ-065). **Hypothèse** : les spécialistes arrivent avec un tableur ou l'export d'un autre outil (format et conditions d'utilisation à vérifier). | Modèle « Positions » (fichier type LiVi à remplir), préréglages pour les exports courants une fois leur format et leurs conditions vérifiés. Écran « Reprendre mon portefeuille » dans la feuille Ajouter. |
| S-006 | MQ-119 | « Valider avec Face ID » | Majeur | **Observé.** L'écran dit « Aperçu · non disponible, soumis à l'avis juridique », mais le bouton principal est actif et mène au journal (MQ-120). Il suggère qu'un ordre part. Règle : les ordres par API restent désactivés (CLAUDE.md §2). | Bouton désactivé « Non disponible aujourd'hui », lien secondaire « Me rappeler à la place » (rappel d'exécution, IA-05). La décision 0004 (aperçu gardé) est respectée. |
| S-007 | MQ-024 | Pastille « ▲ +2,41 % » | Mineur | **Observé.** Variation du patrimoine net, flux compris, présentée en pastille verte comme une performance. | Libellé « Variation du patrimoine net ». Pour Plus, lien « Performance des placements » (rendement pondéré par le temps, méthode affichée, INV-01). |
| S-008 | MQ-201, MQ-203 | « Comptes illimités » | Mineur | **Observé.** La limite « Jusqu'à 10 connexions bancaires » n'apparaît que sur MQ-203. | « Comptes illimités, dont 10 connexions bancaires automatiques » dès MQ-201. |
| S-009 | MQ-079 | Navigation entre les mois | Mineur | **Observé.** Seul novembre est visible. Aucun sélecteur de mois ni comparaison. | Sélecteur « ‹ octobre · novembre › » et écart au mois précédent. |
| S-010 | Page 11 (web) | Couverture web | Majeur | **Observé.** 1 cadre conçu sur 43 (MQ-149). L'import (MQ-154 à MQ-156, MQ-229), les offres (MQ-224, MQ-232), le budget (MQ-158) et LiVi IA (MQ-230) sont à concevoir. Le web adaptatif (FMT-04) et l'import (CPT-03, surfaces « iPhone, web ») sont au MVP. | Prioriser l'import et la catégorisation sur le web, où le spécialiste reprend son historique, puis les offres web. |

### D · Designer UI/UX

| Code | Écran | Élément | Gravité | Constat | Recommandation |
|---|---|---|---|---|---|
| D-001 | MQ-201, MQ-218, MQ-219, MQ-016 | Liens légaux et restauration des achats | Bloquant (risque de refus à la revue App Store) | **Observé.** Le pied de MQ-201 dit seulement « Résiliation en trois clics, rétractation de 14 jours. Paiement par l'App Store, prix TTC. » Aucun lien « Conditions d'utilisation », « Politique de confidentialité » ni « Restaurer les achats » sur ces quatre écrans. **Hypothèse** : la règle 3.1.2 de l'App Store demande ces liens dans le parcours d'abonnement (voir sources externes). | Ajouter sous les offres trois liens de 44 pt : « Conditions d'utilisation », « Confidentialité », « Restaurer mes achats » (aussi dans MQ-016). Faire valider par `conformite`. |
| D-002 | MQ-201 | Boutons des offres | Majeur | **Observé (composants et capture).** Les trois boutons sont « Secondaire · Compact », 329 × 32, gris sur carte grise. L'égalité est respectée (décision 0005), mais aucun n'a l'apparence d'une action et la hauteur visible est de 32 pt. | Garder l'égalité : trois boutons du même style, en taille Normal (au moins 48 pt visibles), plus contrastés que la carte. Carte entière touchable. Aucun badge ni mise en avant. |
| D-003 | MQ-203 › MQ-220 | Achat de Plus pendant l'ajout | Majeur | **Observé.** « Passer à Plus · 40 €/an » mène directement à MQ-220 « Abonnement Plus activé ». La feuille de confirmation (prix, renouvellement, Face ID) n'existe que dans l'inscription (MQ-218). | Insérer une variante de MQ-218 posée sur l'annuaire entre MQ-203 et MQ-220. |
| D-004 | MQ-212 › MQ-201 › MQ-005 ; MQ-218, MQ-219 › MQ-025 | Branche payante et offres en cours d'usage | Majeur | **Observé.** Fermer les offres ouvertes depuis LiVi IA ramène au choix de contribution de l'inscription. Après l'achat de Signature, retour à l'accueil vide, dont l'onglet LiVi IA ouvre MQ-212 (« Découvrir Signature ») et dont la connexion automatique ouvre MQ-203 (« Passer à Plus »). | Variante de MQ-201 « depuis l'application » (la croix revient à l'écran d'origine). Après l'achat de Signature, état d'arrivée de LiVi IA (« Écrire votre première consigne »). Accueil vide « payant » relié à MQ-115 et MQ-220. Points de départ « Essentiel », « Plus », « Signature ». |
| D-005 | MQ-016 | Offres et abonnement pour Essentiel ou Plus | Majeur | **Observé.** Seule la version Signature existe (« Votre offre », « Gérer l'abonnement », « Changer pour Plus » vers l'App Store). Aucune variante pour changer d'offre depuis le profil (demandée par R-11, absente de l'inventaire). | Variante Essentiel : les trois cartes de MQ-201, même poids, « Choisir » vers la feuille d'achat. Variante Plus : « Passer à Signature », « Revenir à Essentiel » (gestion App Store). |
| D-006 | MQ-221 › MQ-003 › MQ-004 › MQ-007 › MQ-201 | Reconnexion par e-mail | Majeur | **Observé.** Apple et Google mènent à MQ-008, mais l'e-mail réutilise MQ-004, dont « Valider » ouvre Face ID puis les offres et la contribution, comme une inscription. | Variante de MQ-004 « connexion » reliée à MQ-008 ou MQ-026. |
| D-007 | MQ-036 › MQ-038 | Atlas Bourse et Valcrypto | Majeur | **Observé.** Ces deux lignes ouvrent directement la clé API, sans feuille de méthode ni vérification de l'offre, alors que la connexion des courtiers et des plateformes crypto (CPT-07) est réservée à Plus et que Banque Rivière passe par MQ-202 et MQ-203. | Ouvrir la feuille de méthode en variante : « Clé en lecture seule · Plus », « Importer un fichier », « Saisir à la main ». |
| D-008 | MQ-207 › MQ-209 | Fiche après un import | Majeur | **Observé.** Après l'import du seul compte courant, « Voir Banque Rivière » ouvre la fiche connectée : « Connexion automatique · à jour à 09:41 », livret A et crédit immobilier. | Variante de MQ-209 « import de fichier » : compte courant seul, « Import du 15 nov. · 8 410 opérations », « Importer un nouveau relevé », « Connecter automatiquement · Plus » en lien secondaire. |
| D-009 | MQ-081 › MQ-082 › MQ-083 › MQ-080 | Changer la catégorie | Majeur | **Observé.** Depuis Marché Plein Ciel (−58,32 €, 14 nov.), la feuille porte sur Brico Rivage (−142,90 €, 21 oct.), « Catégorie : Maison » (retirée, R-35). Elle applique « Travaux de cuisine » (aussi le nom d'un objectif d'épargne, MQ-047) à 7 opérations, puis ouvre la catégorie Courses. | Une seule histoire (partir d'une opération Brico Rivage). « Maison et équipement ». Après l'application, retour à l'opération avec le message « 7 opérations reclassées · Annuler ». Une catégorie qui ne porte pas le nom d'un objectif. |
| D-010 | MQ-217 › MQ-211 | « Créer une enveloppe à la main » | Majeur | **Observé.** Sur le budget vide, ce bouton ouvre le « Budget proposé à partir de vos dépenses (moyenne d'août à octobre) ». | Feuille « Nouvelle enveloppe » : catégorie, montant mensuel, report. |
| D-011 | MQ-030 | Lignes d'établissement | Mineur | **Observé.** Banque Rivière, Horizon Vie et Atlas Bourse ouvrent leur fiche. Valcrypto ouvre la fiche Ether (MQ-060), Toits Partagés les autres actifs (MQ-046), Crédit du Littoral les dettes (MQ-043). Règle posée par R-14 : un établissement ouvre toujours sa fiche. | Fiches d'établissement pour Valcrypto, Toits Partagés et Crédit du Littoral, sur le gabarit de MQ-209, MQ-248 et MQ-249. |
| D-012 | MQ-209 | « Mettre à jour » | Mineur | **Observé** : une zone de 44 pt de MQ-209 mène à l'erreur MQ-022. **Hypothèse** : c'est celle de « Mettre à jour ». Aucun chemin de réussite. | État de réussite (« À jour à 09:42 », message bref). L'erreur passe par le point de départ « Retour et cas limites ». |
| D-013 | Au moins 17 cadres | Boutons principaux sans lien | Mineur | **Observé.** Seul le retour est relié sur MQ-045 (« Modifier la valeur retenue »), MQ-046, MQ-047, MQ-066, MQ-070, MQ-085, MQ-087, MQ-088, MQ-091, MQ-094, MQ-095, MQ-012, MQ-013, MQ-014, MQ-017 (« Supprimer définitivement »), MQ-018 et MQ-021. En test, le bouton principal ne répond pas. | Relier chaque bouton principal à un état de confirmation commun (« Enregistré ») ou au retour, avec une annotation. |
| D-014 | MQ-029, MQ-149 | Restes de données | Mineur | **Observé.** MQ-029 affiche « Mis à jour à 09:41 · 12 comptes » sous le montant (MQ-024 dit « 1 valeur ancienne »). Le tableau de bord web montre l'avatar « JR » au lieu de « CM ». | Aligner sur MQ-024 et sur Camille Martin. |
| D-015 | Barre d'onglets, MQ-104, MQ-212 | Onglets Marchés et LiVi IA au MVP | Majeur | **Observé** dans le catalogue : Marchés repose sur des fonctions de 2028 (globe, carte, catalogue). Les listes arrivent en octobre 2027, seule la recherche est au MVP. LiVi IA arrive en octobre 2027. **Hypothèse** : la barre du MVP reprend les maquettes, donc 2 onglets sur 5 sans fonction livrée. | Barre du MVP : Accueil, Patrimoine, Budget, avec la recherche dans l'en-tête. Marchés et LiVi IA entrent avec leurs fonctions. Décision à inscrire dans `docs/suivi/decisions/`. |
| D-016 | MQ-117, MQ-097 | Rédaction | Mineur | **Observé.** « Le reste reste en liquidités sur le PEA » (MQ-117), « Le reste de chaque versement reste en liquidités » (MQ-097). | « Le solde demeure en liquidités sur le PEA », « Le solde de chaque versement demeure en liquidités ». |

### A · Personne âgée

| Code | Écran | Élément | Gravité | Constat | Recommandation |
|---|---|---|---|---|---|
| A-001 | 149 cadres sur 157 | Taille des informations critiques | Majeur | **Observé.** Au moins un texte de 12 ou 12,5 pt sur 149 écrans. Sur MQ-024 : « Mis à jour à 09:41 · 1 valeur ancienne » en 12,5 pt `ink-tertiary`, « À renouveler · 20 nov. » en 12,5 pt. Jusqu'à 23 textes sous 13 pt sur MQ-108, 18 sur MQ-084 et MQ-089. Les mentions légales de MQ-201 sont en petit gris. | Plancher de 13 pt pour les sources, la fraîcheur, les alertes et les mentions légales. « À renouveler » et « Valeur ancienne » au niveau du sous-titre de ligne (15 pt). |
| A-002 | MQ-024, MQ-079, MQ-089, MQ-201 | Grande taille de texte | Majeur | **Observé.** La variante « Texte agrandi » n'existe que pour le montant principal. Aucune liste, aucune offre, aucun budget n'est dessiné à 200 %. | Dessiner ces quatre écrans en taille d'accessibilité : montant sous le libellé, lignes sur deux niveaux, onglets toujours lisibles. Règle de repli à écrire dans `responsive-et-formats.md`. |
| A-003 | MQ-035, MQ-207 | « Annuler l'import » | Majeur | **Observé.** Le bouton (style Texte) mène directement à l'accueil vide, sans feuille de confirmation. Sur MQ-207, il retire 8 410 opérations d'un seul toucher. R-23 demandait cette confirmation. | Feuille « Retirer les 8 410 opérations importées ? » avec « Retirer » en rouge et « Garder ». Annulation encore possible depuis la fiche pendant 30 jours, comme pour la modification en masse (MQ-096). |
| A-004 | MQ-029, MQ-202, MQ-203, MQ-220, MQ-244, MQ-062, MQ-082, MQ-096 | Fermer une feuille | Majeur | **Observé.** Ces feuilles se ferment seulement par le voile ou la poignée. Aucun « Fermer » ni croix, alors que MQ-238 et MQ-245 en ont. | Croix de 44 pt en haut à droite de chaque feuille, libellée « Fermer » pour le lecteur d'écran. |
| A-005 | MQ-024, MQ-027 | Mode discret | Mineur | **Observé.** Le double toucher (décision 0006) est sans indice visuel. Le texte d'aide n'apparaît qu'une fois les montants masqués. | Ajouter un bouton œil de 44 pt à côté de « Patrimoine net », en plus du geste. |
| A-006 | MQ-010 | « Se déconnecter » | Mineur | **Observé.** Mène directement à MQ-001. | Feuille de confirmation qui rappelle la méthode de reconnexion. |
| A-007 | MQ-125 (iPhone SE) | Accueil sur petit écran | Mineur | **Observé (capture).** Montant et graphique occupent l'écran. Un seul établissement est visible au-dessus de la barre d'onglets. | En classe compacte courte, graphique réduit à environ 120 pt ou repliable, pour voir au moins trois établissements. |
| A-008 | MQ-048 et fiches | Onglets de fiche | Mineur | **Observé.** Sept onglets ou plus en défilement horizontal (Aperçu, À propos, Statistiques clés, Données financières, Dividendes, Événements, Actualités, puis Mes opérations, Consignes, Notes). Ceux de droite sont invisibles. | Quatre onglets visibles et « Plus » qui ouvre la liste verticale des sections. |
| A-009 | MQ-250 | Aide | Majeur | **Observé.** Le seul contact est « Signaler un problème · Réponse sous 2 jours ouvrés dans vos notifications ». Pas d'adresse e-mail ni de contact humain visible. | « Écrire au support » par e-mail, délai annoncé, plus court pour Signature. Guides vidéo sous-titrés. Rencontre en ligne mensuelle (modèle de l'annonce MQ-237). |
| A-010 | MQ-024 | Graphique | Mineur | **Observé (capture).** Courbe sans axe ni valeur. L'annotation pour le lecteur d'écran existe, mais rien n'est lisible à l'œil. | Valeurs de début et de fin sous la courbe (« 179 983,45 € le 15 oct. »). |
| A-011 | Page 10 | Tablette et pliable | Majeur (avant la version d'octobre 2027) | **Observé.** 10 cadres conçus sur 27, tous des accueils. Patrimoine, budget, Mes établissements et la feuille Ajouter en classe moyenne (MQ-139, MQ-140, MQ-233, MQ-234) sont à concevoir. | Dessiner d'abord l'iPad portrait de ces quatre écrans, avec le rail de 72 pt. |

### P · Sociologue ou psychologue de la consommation

| Code | Écran | Élément | Gravité | Constat | Recommandation |
|---|---|---|---|---|---|
| P-001 | MQ-201, MQ-005 | Contribution contre comptes | Majeur (conformité à confirmer) | **Observé.** Aucune case présélectionnée (bien). Mais passer de 5 à 2 comptes sans contribution présente le refus comme une perte, ce qui pousse au consentement. **Hypothèse** : les compteurs sont des données personnelles avant agrégation (département, tranche d'âge). L'avis RGPD sur ce consentement est déjà un bloquant avant le lancement (`etat-du-projet.md`). | Garder l'absence de présélection. Annoncer la contrepartie dès MQ-201 (N-001). À arbitrer avec l'avis RGPD : 5 comptes pour tous, la contribution devenant un geste volontaire, ce qui est plus cohérent avec une marque éthique haut de gamme. |
| P-002 | MQ-024, MQ-030 | Banque Rivière à −183 608,07 € | Majeur | **Observé.** Gros chiffre négatif, en blanc gras, à côté de la banque du compte courant. **Hypothèse** : aversion à la perte et inquiétude (« mon compte est à découvert ? »). | Garder le total crédit compris (décision 0004). Ajouter sur la ligne la ventilation déjà présente sur MQ-209 : « Comptes 9 132,52 € · crédit −192 740,59 € ». Icône de crédit. Lecteur d'écran : « dont crédit immobilier ». |
| P-003 | MQ-024, MQ-237 | Pastille rouge de la cloche | Mineur | **Observé.** Pastille rouge « 3 » sur MQ-024, « 4 » sur MQ-237 : l'annonce de LiVi incrémente le compteur. Annonce commerciale et alertes de compte se mêlent dans un signal d'urgence. | Ne pas compter les annonces dans la pastille (alertes de compte et sécurité seulement). Couleur d'accent plutôt que rouge, le rouge restant réservé aux alertes de sécurité. Réglage par type. |
| P-004 | MQ-024 | Période par défaut | Mineur | **Observé.** « 1M » sélectionné, variation verte en évidence. Un horizon court amplifie les variations et invite à revenir souvent. | Période par défaut réglable dans Préférences, « 1A » pour les nouveaux comptes. En baisse, contexte factuel (part des cours, part de l'épargne). |
| P-005 | MQ-055 | Données tierces | Majeur | **Observé.** L'interrupteur « Afficher les données tierces » est activé par défaut. On y voit « Opinions favorables 8 · 57 % » et un « Prix cible moyen publié 195,00 € » face à un cours de 177,44 €, soit un ancrage et une preuve sociale perçus comme une incitation malgré la mention. La règle (sourcées, datées, désactivables) est respectée. | Désactivées par défaut, activation explicite après un écran d'explication. Jamais sur l'aperçu de la fiche. Pas de couleur de gain sur « favorables ». |
| P-006 | MQ-079 | Dépassement d'enveloppe | Mineur | **Observé (capture).** Barre, montant et texte rouges avec icône d'alerte (« Dépassé de 112,00 € »). Effet de culpabilisation, cause fréquente d'abandon des budgets. | Teinte d'avertissement (orange), formulation « 112,00 € au-delà de l'enveloppe » avec l'action « Ajuster l'enveloppe ». Signe et texte conservés. |
| P-007 | MQ-123 | Raccourcis après « Dois-je vendre ? » | Mineur | **Observé.** Après le refus de conseil, les raccourcis proposés sont « Seuil de revente » et « Écrire une consigne ». **Hypothèse** : lus comme une orientation vers la vente. | Raccourcis neutres : « Voir ma ligne Lumière Industries », « Voir l'opération sur titres du 1er déc. ». La consigne en lien secondaire. |
| P-008 | MQ-115 | « LiVi IA · coût de novembre 1,12 € » | Mineur | **Observé.** Des crédits inclus dans l'offre sont présentés comme un coût. Sentiment de payer deux fois. | « 1,12 € utilisés sur 4,00 € inclus ce mois-ci », avec une jauge. Le mot « coût » seulement au-delà du quota. |
| P-009 | MQ-212 (onglet LiVi IA) | Onglet consacré à une offre | Majeur | **Observé.** Pour Essentiel et Plus, un onglet sur cinq est une présentation commerciale permanente. **Hypothèse** : vécu comme de la publicité dans un produit haut de gamme. | Après l'arrivée des fonctions : un onglet utile sans Signature (exemples, journal vide, simulateur de seuil de Plus), la présentation de Signature en bas et non en titre. Au MVP : voir D-015. |
| P-010 | MQ-207 | Après l'import | Majeur | **Observé.** Rien ne dit que ce compte restera daté du 31 octobre. L'utilisateur découvrira plus tard la fraîcheur orange sans explication. Le moment où la valeur de la connexion automatique est la plus claire n'est pas exploité. | Bloc factuel sur MQ-207 : « Ce compte reste à la date du 31 oct. Pour le tenir à jour : rappel mensuel d'import (inclus) ou connexion automatique (Plus). » Deux boutons de même poids. |
| P-011 | MQ-035 | Doublons précochés | Mineur | **Observé.** Deux cases sur trois cochées, alors que le texte dit « Rien n'est écarté sans votre choix ». Effet de choix par défaut. | Soit aucune case cochée, avec « Écarter les 2 doublons sûrs » en un geste, soit le texte « 2 doublons sûrs présélectionnés : vérifiez avant d'importer ». |
| P-012 | MQ-104 | « Plus fortes hausses · vendredi 13 nov. » | Mineur | **Observé.** Première rubrique de Découvrir : seulement des hausses (+6,12 %, +5,40 %). Peur de manquer et biais de sélection, sans conseil explicite. | « Variations de la séance », avec hausses et baisses côte à côte, sous les listes de l'utilisateur. |

### Compteurs

| Persona | Bloquant | Majeur | Mineur | Total |
|---|---|---|---|---|
| N | 0 | 10 | 6 | 16 |
| S | 1 | 6 | 3 | 10 |
| D | 1 | 10 | 5 | 16 |
| A | 0 | 6 | 5 | 11 |
| P | 0 | 5 | 7 | 12 |
| **Total** | **2** | **37** | **26** | **65** |

## 6. Analyse transverse

### 6.1 Le prototype raconte un seul utilisateur, Camille en Signature

La page « Parcours iPhone » a deux états de référence : un accueil vide et Camille, Signature, 12 comptes. Tout ce qui se trouve entre les deux revient à l'un ou à l'autre : gratuit qui vient d'importer, payant qui vient d'acheter, utilisateur qui revient. C'est la cause commune de D-004, D-005, D-006, D-008, N-009 et D-007. **Piste** : trois personnages de démonstration avec leurs points de départ (Essentiel neuf, Essentiel avec un établissement importé, Signature complet), et une règle de prototype : un écran ne mène qu'à un écran du même personnage.

### 6.2 Ce qui est vendu doit être ce qui est livré

Le catalogue place au MVP 72 fonctions, dont aucune de LiVi IA (sauf le simulateur de seuil) et aucune connexion automatique. Les écrans d'offre, l'onglet LiVi IA et l'onglet Marchés présentent pourtant ces fonctions comme acquises (S-001, D-015, P-009). C'est le principal risque pour la confiance et pour la conformité. **Piste** : la présentation des offres et la barre d'onglets lisent les drapeaux de fonctions (BO-01, BO-20). Chaque version montre ce qui marche, sans promesse datée.

### 6.3 Transparence des prix : presque complète

Points forts observés : prix TTC annuels en premier, équivalent mensuel en second, résiliation en trois clics, rétractation de 14 jours, aucune présélection, poids égal. Manquent : la contrepartie des 5 comptes (N-001), les crédits inclus et les packs (S-002), la limite de connexions (S-008), les liens légaux et la restauration (D-001). **À vérifier par `conformite`** : l'obligation de rappel avant reconduction d'un contrat à tacite reconduction (article L215-1 du Code de la consommation) pour un abonnement payé par l'App Store. Si elle s'applique à LiVi, ce rappel sert aussi la rétention, car un abonné prévenu résilie moins par surprise.

### 6.4 Le chemin gratuit est le plus exigeant

La promesse « import de fichiers sans limite de date » est forte, mais c'est le chemin qui demande le plus de compétences : trouver le fichier, comprendre l'encodage, relier des colonnes, catégoriser 37 lignes. Pour un néophyte ou une personne âgée, l'offre gratuite est donc la plus difficile. **Piste** : guide par établissement (N-006), import court quand le préréglage est reconnu (N-007), tri manuel rapide (N-010), exemple explorable (N-004).

### 6.5 Accessibilité : solide pour le geste, faible pour la lecture

Les zones de 44 pt, les durées, « Réduire les animations », la palette daltonisme et « Réduire la transparence » sont en place. La lecture, elle, repose sur beaucoup de 12 à 12,5 pt, aucune mise en page à 200 % hors montant principal, des feuilles sans croix et des gestes cachés (A-001, A-002, A-004, A-005).

### 6.6 Neutralité : respectée dans les mots, à surveiller dans les signaux

Aucun mot interdit dans les textes lus, aucun point d'exclamation ni emoji, aucun bouton « Acheter » ou « Vendre ». Les incitations restantes sont des signaux, non des mots : données tierces par défaut (P-005), « Plus fortes hausses » (P-012), raccourcis vers la revente (P-007), pastille rouge (P-003), un bouton actif sur une fonction interdite (S-006).

### 6.7 Rétention : les bons éléments existent, sans boucle

Abonnements détectés avec hausse de prix (MQ-086), objectifs (MQ-047), alertes de patrimoine (MQ-092) et résumé de la semaine (MQ-019) ont une vraie valeur. Il manque ce qui fait revenir sans pression : rappel mensuel d'import pour Essentiel (P-010), relevé mensuel factuel, support humain (A-009), continuité entre l'iPhone et le web (S-010).

## 7. Points forts à préserver

- Neutralité tenue partout : « LiVi n'exécute aucun ordre » (MQ-065), « Ce n'est pas une recommandation de vendre » (MQ-066), « Calculs descriptifs : aucun signal d'achat ou de vente » (MQ-063), réponse neutre avec renvoi ORIAS (MQ-123).
- Sources et dates sous les chiffres, valeurs anciennes signalées, hors ligne sans zéro (MQ-239).
- Offres : même poids, aucune présélection, croix toujours visible, mentions de résiliation et de rétractation.
- Confidentialité : choix Essentiel sans présélection (cases radio vides, « Continuer » désactivé), « Proposer cet établissement à LiVi » désactivé par défaut, contribution « Non concernée » en Signature, fichier « lu sur votre iPhone et envoyé nulle part ».
- Connexion automatique expliquée honnêtement (24 mois, 180 jours, « ne pourra pas faire un virement »).
- LiVi IA : la phrase de l'utilisateur, la structure vérifiable, le coût par tâche et la validation par Face ID forment un parcours exemplaire.
- Prix ronds, sans « ,99 » ni prix barré, cohérents avec une marque haut de gamme.

## 8. Recommandations priorisées

Impact : effet attendu sur la confiance, l'activation, la conversion ou la rétention. Effort : S (moins d'une journée de maquette), M (quelques jours), L (spécification et plusieurs écrans).

| Priorité | Recommandation | Annotations | Impact | Effort |
|---|---|---|---|---|
| 1 | Aligner les offres et la barre d'onglets sur les fonctions livrées, version par version, pilotées par le back-office | S-001, D-015, P-009 | Confiance, conformité | M |
| 1 | Compléter la présentation des offres : condition des 5 comptes, crédits inclus et packs, limite de connexions, liens légaux, restauration | N-001, S-002, S-008, D-001 | Conformité, conversion | S |
| 1 | Construire la branche payante du prototype : offres en cours d'usage, achat depuis MQ-203, MQ-016 pour Essentiel et Plus, LiVi IA après achat, reconnexion par e-mail | D-003, D-004, D-005, D-006 | Conversion, crédibilité du prototype | M |
| 1 | Continuité après l'import : accueil « premier établissement », fiche « importée », « Valider ce budget » relié, bloc « tenir ce compte à jour » | N-009, D-008, P-010 | Activation, conversion | M |
| 1 | Confirmer toute action destructrice et ajouter une croix à chaque feuille | A-003, A-004, A-006 | Sécurité, accessibilité | S |
| 2 | Import allégé avec préréglage et guide « Comment obtenir ce fichier » par établissement | N-006, N-007, N-008 | Activation | L |
| 2 | Tri manuel des opérations à catégoriser, modification des enveloppes, enveloppe créée à la main | N-010, N-011, D-010 | Activation, rétention | M |
| 2 | Limite de comptes Essentiel : définition, compteur, feuille neutre de limite | N-002, P-001 | Conversion éthique | M |
| 2 | Lisibilité : plancher de 13 pt, écrans clés à 200 %, ligne de la banque ventilée | A-001, A-002, P-002 | Accessibilité, apaisement | M |
| 2 | Neutralité des signaux : données tierces désactivées par défaut, pastille sans annonces, « Variations de la séance », bouton de MQ-119 désactivé | P-005, P-003, P-012, S-006 | Neutralité, conformité | S |
| 2 | Cohérence des données : une règle de valeurs anciennes, changement de catégorie, restes « 12 comptes » et « JR » | S-004, D-009, D-014 | Confiance | S |
| 3 | Exemple explorable sur données fictives et présentation concrète de LiVi IA | N-004, N-015 | Activation, conversion | M |
| 3 | Reprise d'un portefeuille (modèle « Positions ») et import web | S-005, S-010 | Acquisition des spécialistes | L |
| 3 | Support humain et guides vidéo | A-009 | Rétention, image haut de gamme | S |
| 3 | Tablette et pliable : patrimoine, budget, établissements, feuille Ajouter | A-011 | Accessibilité | L |
| 3 | Finitions : mode discret visible, période par défaut, dépassement en orange, raccourcis neutres, crédits inclus, doublons, pastilles filtrées, annuaire jouable, rédaction | A-005, P-004, P-006, P-007, P-008, P-011, N-014, N-016, D-016 et autres mineurs | Confort | S |

## 9. Plan d'optimisation

Chaque lot suit le workflow du dépôt (CLAUDE.md §3) : archiver l'ordre (`livi-ordre`), spécifier (`livi-fonctionnalite`), dessiner dans les cadres `MQ-…` (`livi-maquette-figma`), faire passer `revue-maquettes`, mettre à jour la documentation (`livi-mise-a-jour-docs`).

| Lot | Contenu | Annotations | Agents et skills | Condition de fin |
|---|---|---|---|---|
| A · Prototype cohérent (avant la validation des 105 écrans « à valider ») | Branche payante et personnages de démonstration ; continuité après l'import ; liens manquants ; corrections de données ; croix et confirmations | D-003 à D-014, N-009, N-014, N-016, S-004, A-003, A-004, A-006 | `design-system`, `livi-maquette-figma`, puis `revue-maquettes` | Chaque point de départ se joue sans retour à un état incohérent. Aucun bouton principal sans destination. |
| B · Offres conformes (avant le développement du MVP) | Offres pilotées par les drapeaux, mentions complètes, liens légaux et restauration, limite de comptes, avis RGPD sur la contribution, rappel de reconduction | S-001, S-002, S-003, S-008, D-001, D-002, D-015, N-001, N-002, P-001, P-009 | `chef-de-projet` (arbitrage MVP), `conformite` (`livi-conformite`), `livi-fonctionnalite` pour USR-11, BO-01, SEC-05 et SEC-06, décision à inscrire | L'avis juridique est versé. La présentation des offres ne montre que des fonctions actives. |
| C · Chemin gratuit allégé | Import court avec préréglage, guides par établissement (BO-28), tri manuel, modification du budget, exemple explorable | N-004 à N-011, D-010 | `livi-fonctionnalite` (CPT-03, CPT-11, CPT-12, BUD-01, BUD-04), `back-office` pour les guides, `livi-test-fonctionnalite` | Un néophyte simulé va de l'inscription à un patrimoine net juste en moins de 10 touchers hors saisie. |
| D · Lecture et formats | Plancher de 13 pt, mises en page à 200 %, iPad portrait, iPhone SE | A-001, A-002, A-007, A-008, A-010, A-011 | `design-system` (`livi-design-system`), `qa-tests` (matrice d'appareils) | Écrans clés vérifiés en taille d'accessibilité, en classes compacte, moyenne et étendue. |
| E · Conversion éthique et rétention (octobre 2027) | Moments de valeur (MQ-207, budget), relevé mensuel factuel, rappel mensuel d'import, support humain, présentation concrète de LiVi IA, reprise de portefeuille, web | P-010, N-015, S-005, S-010, A-009, P-003, P-005, P-008, P-012 | `chef-de-projet`, `frontend-web`, `backend-api` | Les indicateurs ci-dessous progressent sans aucun garde-fou franchi. |

### Indicateurs proposés

Tous sont mesurés par événements pseudonymisés, sans montant, sans libellé bancaire et sans donnée de synchronisation (CLAUDE.md §2).

- **Activation** : part des inscrits avec un établissement ajouté le premier jour ; part des imports commencés qui aboutissent ; temps jusqu'au premier patrimoine net non nul.
- **Compréhension** : part des opérations « à catégoriser » traitées sous 7 jours ; recours à « Comment obtenir ce fichier ».
- **Conversion** : passage d'Essentiel à Plus à 30 et 90 jours, par moment d'entrée (offres de l'inscription, MQ-203, MQ-207, profil) ; part des achats suivis d'une demande de remboursement.
- **Rétention** : retour à 30 et 90 jours ; part des comptes à jour ; résiliations à l'échéance après rappel.

### Garde-fous de toute expérimentation

- Jamais de poids inégal entre les offres (décision 0005) ni d'offre présélectionnée (USR-11).
- Jamais de compte à rebours, de prix barré fictif ou de formulation culpabilisante dans un refus.
- Jamais de test qui retarde la croix ou la sortie d'une feuille.
- Résiliation aussi courte que la souscription.
- Aucun mot de conseil, aucune mise en avant d'un actif.

## 10. Renvois aux rapports précédents (non recomptés)

- **R-14** (revue du 15 novembre), partie restante : le compte courant de MQ-209 et de MQ-236 ouvre toutes les opérations de tous les comptes (MQ-089) au lieu du compte. Le livret A de MQ-209 n'est pas relié. Les fiches d'Horizon Vie et d'Atlas Bourse (MQ-248, MQ-249) corrigent la partie principale.
- **R-13, R-15, R-46, R-52** : corrigés dans la branche en cours (MQ-250 Aide, MQ-251 à MQ-253, « Étape 3 sur 3 » sur MQ-204, opérations du 12 et du 13 novembre sur MQ-089), constatés dans Figma le 20 novembre.
- **R-23** : la confirmation d'« Annuler l'import » reste absente du prototype. Elle est recomptée ici en A-003, car sa gravité tient au persona A.
- **Décision 0004** (modèle de consigne « Vendre … si le cours passe sous … € », aperçu de l'ordre préparé) : respectée. Seul le bouton actif de MQ-119 est relevé (S-006).

## 11. Sources externes

- Forums développeurs Apple, rejets au titre de la règle 3.1.2 (liens vers les conditions d'utilisation et la politique de confidentialité dans le parcours d'abonnement) : [App Store rejection 3.1.2: Subscription policy links](https://developer.apple.com/forums/thread/813493), [Repeated rejection for Guideline 3.1.2 – Privacy Policy & EULA links present, but review still says missing](https://developer.apple.com/forums/thread/809635), [Guideline 3.1.2 - Business - Payments - Subscriptions](https://developer.apple.com/forums/thread/807082). Texte de référence à relire dans sa version en vigueur : [App Review Guidelines](https://developer.apple.com/support/downloads/terms/app-review-guidelines/App-Review-Guidelines-English-UK.pdf).
- Code de la consommation : article L215-1 (information avant reconduction tacite) et article L215-1-1 (résiliation par voie électronique en trois clics). Cités de mémoire, à vérifier sur Légifrance par l'agent `conformite`.

## Annexe · Couverture de la lecture

| Élément | Couverture |
|---|---|
| Cadres lus (textes, liens, police minimale) | 157 sur 157 (page « Parcours iPhone ») |
| Liens de prototype | 644, destinations résolues par identifiant Figma et `maquettes.json` |
| Points de départ | 14 : Inscription et offres, Ajouter un établissement, Utilisation quotidienne, Patrimoine et analyses, Budget, Marchés, LiVi IA, Profil et réglages, Retour et cas limites, Maintenance, Compte de test, Widgets iOS, Annonce sur l'accueil, Hors ligne |
| États des commandes lus | 16 écrans (MQ-005, MQ-006, MQ-011, MQ-015, MQ-024, MQ-035, MQ-055, MQ-079, MQ-119, MQ-201, MQ-202, MQ-203, MQ-207, MQ-208, MQ-212, MQ-218) |
| Captures | 6, thème Sombre : MQ-201, MQ-024, MQ-202, MQ-079, MQ-212, MQ-125 |
| Autres formats | Page 10 : 27 cadres, 10 conçus, 0 lien. Page 11 : 43 cadres, 1 conçu. Page 12 (back-office) non lue : hors du périmètre des cinq personas. |
| Non vérifié | Thèmes Clair et Pastel (contraste recalculé le 19 novembre, décision 0005) ; durées des transitions ; appareils réels ; back-office |

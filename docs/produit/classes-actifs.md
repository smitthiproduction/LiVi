<!-- Fichier généré par scripts/generer-docs.ts : modifier la source, puis relancer `pnpm docs:generate`. -->

# Classes et sous-classes d’actifs

Source de vérité : `packages/asset-classes/src/taxonomy.ts`. 14 classes, 85 sous-classes. Chaque classe définit ses champs, ses filtres de recherche et les onglets de sa fiche ; une sous-classe peut ajouter des champs, des filtres et des onglets.

## Filtres communs à toutes les positions

| Filtre | Type |
|---|---|
| Enveloppe | multi |
| Établissement | multi |
| Devise | multi |
| Membre du foyer ou entité | multi |
| Poids dans le patrimoine | plage |
| Plus ou moins-value latente | plage |
| Source (synchro, CSV, saisie) | multi |
| Dernière mise à jour | periode |
| Étiquette personnelle | multi |

## Périmètres de la recherche globale

Tout · Mes positions · Listes de surveillance · Actions · Fonds et ETP · Obligations · Crypto · Matières premières · Dérivés · Indices · Devises · Enseignes · Transactions · Aide et réglages

## Liquidités et épargne

Comptes courants, livrets, comptes à terme, épargne logement et comptes en devises.

- **Source de valorisation** : taux
- **Enveloppes possibles** : Hors enveloppe
- **Onglets de la fiche** : Aperçu › Mouvements › Intérêts › Plafonds › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| Compte courant | Compte de dépôt et carte ; source des dépenses catégorisées. | — | — | Dépenses et enseignes |
| Livret réglementé | Taux et plafond fixés par l’État. | Livret A, LDDS, LEP, Livret jeune | — | — |
| Livret bancaire | Livret fiscalisé, souvent avec taux promotionnel. | — | Fin du taux promotionnel | — |
| Compte à terme | Somme bloquée jusqu’à une échéance. | — | Échéance | — |
| Épargne logement | Plan et compte épargne logement. | PEL, CEL | Génération du plan | — |
| Compte en devises | Liquidités en devise étrangère, rémunérées ou non. | USD, CHF, GBP | Effet de change | — |
| Trésorerie rémunérée | Poches de trésorerie investies en fonds monétaires chez un courtier ou une néobanque. | — | — | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| Taux annuel | pourcentage | saisie |
| Plafond de versement | montant | saisie ou import |
| Intérêts courus estimés | montant | calcul |
| Date d’ouverture | date | saisie ou import |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Taux | plage | — |
| Plafond restant | plage | — |
| Disponibilité | choix | — |

## Actions

Actions cotées, certificats de dépôt, actionnariat salarié et droits attachés.

- **Source de valorisation** : marche
- **Enveloppes possibles** : PEA, PEA-PME, CTO, PEE, Assurance-vie
- **Onglets de la fiche** : Aperçu › À propos › Statistiques clés (Cours et volume, Données par action, Ratios) › Données financières (Compte de résultat, Bilan, Trésorerie) › Dividendes › Événements › Actualités › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| Action cotée | Titre coté sur un marché réglementé ou organisé. | Euronext Paris, NYSE, Xetra | — | — |
| Certificat de dépôt (ADR, GDR) | Titre représentant des actions étrangères. | — | Ratio de conversion, Action sous-jacente | — |
| Actionnariat salarié | Actions et droits attribués par l’employeur. | Actions gratuites (RSU), Stock-options, Actions de l’employeur en PEE | Date d’acquisition définitive, Prix d’exercice, Fin d’indisponibilité | Calendrier d’acquisition |
| Droits et bons de souscription | Droits préférentiels et bons attachés à une opération. | — | Date limite d’exercice | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| ISIN (obligatoire) | isin | fournisseur |
| Code mnémonique | ticker | fournisseur |
| Place de cotation | texte | fournisseur |
| Pays | texte | fournisseur |
| Secteur | texte | fournisseur |
| Industrie | texte | fournisseur |
| Capitalisation boursière | montant | fournisseur |
| Éligible au PEA | booleen | fournisseur |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Variation 1 jour | plage | — |
| Variation 1 mois | plage | — |
| Variation 1 an | plage | — |
| Volatilité 1 an | plage | — |
| Écart au plus haut sur 52 semaines | plage | — |
| Volume moyen | plage | — |
| Place de cotation | multi | — |
| Pays | multi | — |
| Secteur | multi | — |
| Industrie | multi | — |
| Taille de capitalisation | multi | — |
| Ratio cours / bénéfice | plage | — |
| Prix / ventes | plage | — |
| Rendement du dividende | plage | — |
| Marge nette | plage | — |
| Croissance du chiffre d’affaires | plage | — |
| Bêta (5 ans) | plage | — |
| Éligible au PEA | booleen | — |
| Écart au prix cible du consensus | plage | Donnée tierce : source et date affichées |

**Vigilance**

- Les notations et prix cibles d’analystes sont des données tierces : affichées sourcées et datées, jamais présentées comme une recommandation de LiVi, et désactivables.
- Aucun bouton « Acheter » ou « Vendre » : « Ajouter une opération » et « Créer une consigne ».

## Fonds et ETP

ETF, ETC et ETN, OPCVM, fonds monétaires et fonds de capital-investissement grand public.

- **Source de valorisation** : vl
- **Enveloppes possibles** : PEA, CTO, Assurance-vie, PER, PEE
- **Onglets de la fiche** : Aperçu › Composition (Lignes, Pays, Secteurs, Devises) › Frais › Performance et indice › Distributions › Recouvrement avec mes fonds › Documents (DIC) › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| ETF actions | Réplique un indice d’actions. | Monde, S&P 500, Europe, Émergents | — | — |
| ETF obligataire | Réplique un indice d’obligations. | — | Duration moyenne, Notation moyenne | — |
| ETF sectoriel ou thématique | Secteur, thème ou facteur. | Semi-conducteurs, Santé, Dividendes | — | — |
| ETF à effet de levier ou inverse | Produit à réinitialisation quotidienne, complexe. | — | Levier | Risque du levier |
| ETC et ETN | Titres de créance indexés sur une matière première ou un indice. | — | Garantie | — |
| Fonds actions | OPCVM, FCP ou SICAV à dominante actions. | — | — | — |
| Fonds obligataire | OPCVM à dominante obligations. | — | — | — |
| Fonds diversifié | Allocation mixte ou flexible. | — | — | — |
| Fonds monétaire | Placement de trésorerie à faible risque. | — | — | — |
| FCPI, FIP et FCPR | Fonds de capital-investissement grand public, souvent à avantage fiscal et durée de blocage. | — | Fin de blocage, Réduction d’impôt obtenue | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| ISIN (obligatoire) | isin | fournisseur |
| Société de gestion ou émetteur | texte | fournisseur |
| Indice suivi | texte | fournisseur |
| Frais courants | pourcentage | fournisseur |
| Réplication | enum | fournisseur |
| Distribution | enum | fournisseur |
| Encours | montant | fournisseur |
| Indicateur de risque (1 à 7) | nombre | fournisseur |
| Classification SFDR | enum | fournisseur |
| Domicile | texte | fournisseur |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Variation 1 jour | plage | — |
| Variation 1 mois | plage | — |
| Variation 1 an | plage | — |
| Volatilité 1 an | plage | — |
| Écart au plus haut sur 52 semaines | plage | — |
| Volume moyen | plage | — |
| Émetteur | multi | — |
| Indice suivi | recherche | — |
| Zone d’investissement | multi | — |
| Secteur ou thème | multi | — |
| Frais courants | plage | — |
| Réplication | multi | — |
| Capitalisant ou distribuant | choix | — |
| Encours | plage | — |
| Ancienneté du fonds | plage | — |
| Indicateur de risque | plage | — |
| Classification SFDR | multi | — |
| Éligibilité | multi | — |
| Couvert contre le change | booleen | — |
| Écart de suivi | plage | — |
| Performance 3 ans | plage | — |

## Obligations

Titres de dette d’États, d’organismes supranationaux, de collectivités et d’entreprises.

- **Source de valorisation** : marche
- **Enveloppes possibles** : CTO, Assurance-vie, PER
- **Onglets de la fiche** : Aperçu › Caractéristiques › Échéancier des coupons › Rendement et risque (Rendement à maturité, Duration et sensibilité, Écart de taux) › Émetteur › Prospectus et documents › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| Obligation d’État | Dette souveraine. | OAT (France), Bund (Allemagne), Treasuries (États-Unis), BTP (Italie) | — | — |
| Supranationale ou agence | Organismes internationaux ou agences publiques. | Union européenne, BEI, CADES | — | — |
| Collectivité locale | Régions, départements, villes. | — | — | — |
| Entreprise, catégorie investissement | Notation BBB- ou mieux. | — | — | — |
| Entreprise, haut rendement | Notation inférieure à BBB-, risque de crédit plus élevé. | — | — | — |
| Obligation convertible | Convertible en actions de l’émetteur. | — | Ratio de conversion, Action sous-jacente, Prime de conversion | Conversion |
| Indexée sur l’inflation | Nominal ou coupon indexé sur un indice des prix. | OATi, OAT€i, TIPS | Indice d’inflation, Coefficient d’indexation | — |
| Verte ou durable | Fonds levés affectés à des projets environnementaux ou sociaux. | — | Cadre d’émission | — |
| Zéro coupon | Pas de coupon, émise sous le pair. | — | — | — |
| Perpétuelle ou subordonnée | Sans échéance fixe ou remboursée après la dette senior. | — | Prochaine date de remboursement anticipé | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| ISIN (obligatoire) | isin | saisie ou import |
| Émetteur | texte | saisie ou import |
| Catégorie d’émetteur | enum | saisie ou import |
| Pays de l’émetteur | texte | saisie ou import |
| Coupon | pourcentage | saisie ou import |
| Fréquence du coupon | enum | saisie ou import |
| Type de taux | enum | saisie ou import |
| Date d’émission | date | saisie ou import |
| Échéance (obligatoire) | date | saisie ou import |
| Prix (% du nominal) | pourcentage | fournisseur |
| Valeur nominale | montant | saisie ou import |
| Rendement à maturité | pourcentage | calcul |
| Rendement courant | pourcentage | calcul |
| Duration modifiée | nombre | calcul |
| Notation | notation | fournisseur |
| Rang | enum | saisie ou import |
| Remboursable par anticipation | booleen | saisie ou import |
| Montant minimum de négociation | montant | saisie ou import |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Catégorie d’émetteur | multi | — |
| Pays | multi | — |
| Devise d’émission | multi | — |
| Notation | multi | Donnée tierce : source et date affichées |
| Qualité de crédit | choix | — |
| Échéance | periode | — |
| Années restantes | plage | — |
| Coupon | plage | — |
| Rendement à maturité | plage | — |
| Duration | plage | — |
| Type de taux | multi | — |
| Rang | multi | — |
| Remboursable par anticipation | booleen | — |
| Obligation verte ou durable | booleen | — |
| Montant minimum | plage | — |

**Vigilance**

- Les notations viennent d’agences tierces sous licence : afficher l’agence et la date.
- Le rendement à maturité est un calcul à date, pas une promesse.

## Immobilier

Biens détenus en direct, pierre-papier, foncières cotées et financement participatif immobilier.

- **Source de valorisation** : estimation
- **Enveloppes possibles** : Hors enveloppe, Assurance-vie, PER
- **Onglets de la fiche** : Aperçu › Valeur et estimation › Loyers et charges › Crédit associé › Fiscalité › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| Résidence principale | Logement occupé par le foyer. | — | — | — |
| Résidence secondaire | Logement de loisirs. | — | — | — |
| Locatif nu | Location non meublée. | — | Loyer mensuel, Charges annuelles, Taxe foncière | — |
| Locatif meublé (LMNP, LMP) | Location meublée, régime BIC. | — | Loyer mensuel, Amortissements | — |
| SCPI | Société civile de placement immobilier. | — | Prix de la part, Taux de distribution, Taux d’occupation financier, Délai de jouissance, Frais de souscription | — |
| OPCI et SCI en unités de compte | Pierre-papier logée souvent en assurance-vie. | — | — | — |
| Foncière cotée (SIIC, REIT) | Société immobilière cotée en bourse. | — | — | — |
| Financement participatif immobilier | Prêt à un promoteur via une plateforme. | — | Taux annoncé, Statut | — |
| Viager et démembrement | Nue-propriété, usufruit temporaire, viager. | — | — | — |
| Terrain, parking, local | Autres biens immobiliers. | — | — | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| Commune | adresse | saisie ou import |
| Surface | nombre (m²) | saisie ou import |
| Prix d’acquisition | montant | saisie ou import |
| Frais d’acquisition | montant | saisie ou import |
| Date d’acquisition | date | saisie ou import |
| Valeur estimée | montant | calcul |
| Mode de détention | enum | saisie ou import |
| Quote-part détenue | pourcentage | saisie ou import |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Type de bien | multi | — |
| Localisation | recherche | — |
| Rendement locatif brut | plage | — |
| Rendement locatif net | plage | — |
| Mode de détention | multi | — |
| Avec crédit en cours | booleen | — |
| Régime fiscal | multi | — |
| Taux d’occupation (SCPI) | plage | — |
| Taux de distribution (SCPI) | plage | — |

**Vigilance**

- L’estimation par ventes comparables (DVF) est indicative ; l’utilisateur choisit la valeur retenue.

## Crypto-actifs

Cryptomonnaies, stablecoins, positions de staking et de finance décentralisée.

- **Source de valorisation** : marche
- **Enveloppes possibles** : Hors enveloppe
- **Onglets de la fiche** : Aperçu › Réseau › Portefeuilles et adresses › Staking et rendement › Fiscalité › Actualités › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| Cryptomonnaie | Actif natif d’un réseau. | BTC, ETH, SOL | — | — |
| Stablecoin | Jeton adossé à une monnaie. | EURC, USDC | Émetteur, Monnaie d’adossement | — |
| Staking et épargne crypto | Actifs immobilisés contre une rémunération. | — | Rendement annoncé, Période de blocage | — |
| Finance décentralisée | Positions de prêt, liquidité ou dérivés sur protocoles. | — | Protocole | — |
| NFT | Jetons non fongibles, valorisés au dernier prix plancher ou manuellement. | — | — | — |
| Jeton utilitaire | Jeton donnant accès à un service. | — | — | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| Symbole (obligatoire) | ticker | saisie ou import |
| Réseau | texte | saisie ou import |
| Plateforme ou portefeuille | texte | saisie ou import |
| Plateforme autorisée MiCA | booleen | fournisseur |
| Adresse publique | texte | saisie ou import |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Variation 1 jour | plage | — |
| Variation 1 mois | plage | — |
| Variation 1 an | plage | — |
| Volatilité 1 an | plage | — |
| Écart au plus haut sur 52 semaines | plage | — |
| Volume moyen | plage | — |
| Capitalisation | plage | — |
| Catégorie | multi | — |
| Réseau | multi | — |
| Rendement de staking | plage | — |
| Plateforme autorisée MiCA | booleen | — |
| Adossement (stablecoin) | multi | — |

**Vigilance**

- Affiliation et ordres limités aux prestataires autorisés MiCA ; le suivi en lecture reste possible pour toute plateforme.

## Matières premières

Métaux précieux physiques et expositions aux matières premières.

- **Source de valorisation** : marche
- **Enveloppes possibles** : Hors enveloppe, CTO
- **Onglets de la fiche** : Aperçu › Cours au comptant › Stockage et certificats › Fiscalité › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| Or physique | Pièces et lingots. | Napoléon 20 F, Krugerrand, Lingot 1 kg | — | — |
| Argent physique | Pièces et lingots d’argent. | — | — | — |
| Platine et palladium | Métaux du groupe du platine. | — | — | — |
| ETC matières premières | Exposition cotée à une matière première. | — | — | — |
| Énergie | Pétrole, gaz, via ETC ou contrats. | — | — | — |
| Agricole | Blé, café, sucre, via ETC ou contrats. | — | — | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| Métal ou matière | enum | saisie ou import |
| Forme | enum | saisie ou import |
| Poids fin | nombre (g) | saisie ou import |
| Pureté | nombre | saisie ou import |
| Prime sur le cours | pourcentage | calcul |
| Lieu de stockage | texte | saisie ou import |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Métal ou matière | multi | — |
| Forme | multi | — |
| Prime | plage | — |
| Stockage | multi | — |

## Produits dérivés

Options, contrats à terme, CFD, warrants, turbos et produits structurés détenus chez un intermédiaire.

- **Source de valorisation** : marche
- **Enveloppes possibles** : CTO
- **Onglets de la fiche** : Aperçu › Sous-jacent › Risque (Levier, Barrière, Sensibilités) › Échéance › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| Options | Droit d’acheter ou de vendre à un prix fixé. | — | Delta, Volatilité implicite | — |
| Contrats à terme | Engagement d’acheter ou de vendre à terme. | — | — | — |
| CFD | Contrat sur différence, avec marge et frais de financement. | — | Frais de financement journaliers | — |
| Warrants et turbos | Produits à effet de levier émis par une banque. | — | — | — |
| Produits structurés | Formule de remboursement liée à un sous-jacent (autocall, capital garanti). | — | Prochaine date de constatation, Coupon conditionnel | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| Sous-jacent (obligatoire) | texte | saisie ou import |
| Sens | enum | saisie ou import |
| Prix d’exercice | montant | saisie ou import |
| Échéance | date | saisie ou import |
| Levier | nombre | saisie ou import |
| Barrière ou seuil de désactivation | montant | saisie ou import |
| Quotité ou multiplicateur | nombre | saisie ou import |
| Marge mobilisée | montant | saisie ou import |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Sous-jacent | recherche | — |
| Sens | choix | — |
| Échéance | periode | — |
| Levier | plage | — |
| Distance à la barrière | plage | — |
| Émetteur | multi | — |

**Vigilance**

- Produits complexes : LiVi les suit en lecture, n’en propose aucun et affiche le risque de perte supérieure à la mise quand il existe.

## Assurance-vie et capitalisation

Contrats d’assurance-vie et de capitalisation, fonds en euros et unités de compte.

- **Source de valorisation** : plateforme
- **Enveloppes possibles** : Assurance-vie
- **Onglets de la fiche** : Aperçu › Supports (Fonds en euros, Unités de compte) › Versements et rachats › Fiscalité › Bénéficiaires › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| Contrat d’assurance-vie | Contrat français, fonds en euros et unités de compte. | — | — | — |
| Contrat de capitalisation | Sans clause bénéficiaire, transmissible. | — | — | — |
| Contrat luxembourgeois | Contrat de droit luxembourgeois, multidevise. | — | — | — |
| Fonds en euros | Support à capital garanti par l’assureur. | — | Taux servi par année | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| Assureur (obligatoire) | texte | saisie ou import |
| Nom du contrat | texte | saisie ou import |
| Date d’ouverture (antériorité fiscale) (obligatoire) | date | saisie ou import |
| Frais de gestion annuels | pourcentage | saisie ou import |
| Frais sur versement | pourcentage | saisie ou import |
| Mode de gestion | enum | saisie ou import |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Assureur | multi | — |
| Plus de 8 ans | booleen | — |
| Frais de gestion | plage | — |
| Part en fonds en euros | plage | — |

## Épargne retraite et salariale

PER individuel et d’entreprise, épargne salariale et anciens contrats retraite.

- **Source de valorisation** : plateforme
- **Enveloppes possibles** : PER, PEE
- **Onglets de la fiche** : Aperçu › Supports › Versements et abondement › Plafonds et déduction › Cas de déblocage › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| PER individuel | Plan d’épargne retraite ouvert à titre personnel. | — | — | — |
| PER d’entreprise | PER collectif ou obligatoire. | — | — | — |
| Plan d’épargne entreprise | Épargne salariale disponible après 5 ans. | — | Date de disponibilité | — |
| Anciens contrats retraite | PERCO, Madelin, article 83, PERP. | — | — | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| Gestionnaire | texte | saisie ou import |
| Mode de gestion | enum | saisie ou import |
| Horizon de départ | date | saisie ou import |
| Abondement de l’employeur | montant | saisie ou import |
| Plafond de déduction disponible | montant | saisie |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Type de dispositif | multi | — |
| Mode de gestion | choix | — |
| Somme disponible | plage | — |

## Non coté et capital-investissement

Participations dans des sociétés non cotées, financement participatif en capital et club deals.

- **Source de valorisation** : manuel
- **Enveloppes possibles** : Hors enveloppe, PEA-PME, CTO
- **Onglets de la fiche** : Aperçu › Valorisation › Tours et dilution › Fiscalité › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| Participation directe | Actions d’une société non cotée. | — | — | — |
| Financement participatif en capital | Via une plateforme agréée. | — | — | — |
| Club deal | Investissement groupé entre particuliers. | — | — | — |
| BSPCE | Bons de souscription de parts de créateur d’entreprise. | — | Prix d’exercice, Calendrier d’exercice | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| Société (obligatoire) | texte | saisie ou import |
| Valorisation retenue | montant | saisie ou import |
| Part du capital détenue | pourcentage | saisie ou import |
| Date d’entrée | date | saisie ou import |
| Dispositif fiscal | texte | saisie ou import |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Stade | multi | — |
| Secteur | multi | — |
| Encore bloqué | booleen | — |

## Prêts et financement participatif

Prêts accordés à des entreprises ou à des particuliers, en direct ou via une plateforme.

- **Source de valorisation** : plateforme
- **Enveloppes possibles** : Hors enveloppe
- **Onglets de la fiche** : Aperçu › Échéancier › Statut et incidents › Fiscalité › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| Prêt à une entreprise | Via une plateforme de financement participatif. | — | — | — |
| Prêt à un particulier | Prêt familial ou entre proches, avec reconnaissance de dette. | — | — | — |
| Compte courant d’associé | Avance consentie à une société dont on est associé. | — | — | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| Plateforme | texte | saisie ou import |
| Taux (obligatoire) | pourcentage | saisie ou import |
| Durée | nombre (mois) | saisie ou import |
| Statut | enum | saisie ou import |
| Garantie | texte | saisie ou import |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Plateforme | multi | — |
| Taux | plage | — |
| Statut | multi | — |
| Durée restante | plage | — |

## Biens et collections

Véhicules, montres, art, vin et objets de valeur.

- **Source de valorisation** : manuel
- **Onglets de la fiche** : Aperçu › Historique de valeur › Mes opérations › Consignes › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| Véhicule | Voiture, moto, bateau ; décote estimée par l’utilisateur. | — | — | — |
| Montre et bijou | Objets précieux. | — | — | — |
| Œuvre d’art | Tableaux, sculptures, photographies. | — | — | — |
| Vin et spiritueux | Cave et caisses en primeur. | — | — | — |
| Objet de collection | Cartes, timbres, numismatique. | — | — | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| Valeur d’achat | montant | saisie ou import |
| Valeur estimée | montant | saisie ou import |
| Dernière réévaluation | date | saisie ou import |
| Assuré | booleen | saisie ou import |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Type | multi | — |
| Réévalué depuis | periode | — |

## Dettes

Crédits et dettes, déduits du patrimoine net.

- **Source de valorisation** : taux
- **Onglets de la fiche** : Aperçu › Tableau d’amortissement › Assurance › Remboursement anticipé › Notes et documents

**Sous-classes**

| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |
|---|---|---|---|---|
| Crédit immobilier | Prêt amortissable ou in fine, rattachable à un bien. | — | — | — |
| Crédit à la consommation | Prêt personnel, crédit renouvelable. | — | — | — |
| Location avec option d’achat ou longue durée | Loyers à échoir. | — | — | — |
| Prêt étudiant | Avec différé éventuel. | — | — | — |
| Prêt familial | Somme due à un proche. | — | — | — |
| Découvert et carte à débit différé | Encours à court terme. | — | — | — |
| Dette fiscale ou sociale | Impôts ou cotisations à payer. | — | — | — |

**Champs de la classe**

| Champ | Type | Source |
|---|---|---|
| Capital emprunté (obligatoire) | montant | saisie ou import |
| Taux nominal (obligatoire) | pourcentage | saisie ou import |
| TAEG | pourcentage | saisie ou import |
| Durée | nombre (mois) | saisie ou import |
| Mensualité | montant | calcul |
| Assurance emprunteur | montant | saisie ou import |
| Capital restant dû | montant | calcul |

**Filtres propres à la classe**

| Filtre | Type | Remarque |
|---|---|---|
| Type de dette | multi | — |
| Taux | plage | — |
| Durée restante | plage | — |

## Collections prêtes à l’emploi

Jeux de filtres nommés de façon descriptive ; un test refuse tout nom qui ressemble à une recommandation.

| Collection | Classe | Description |
|---|---|---|
| Grandes capitalisations | actions | Capitalisation de plus de 10 milliards. |
| Rendement du dividende élevé | actions | Rendement du dividende supérieur à 4 %. |
| En hausse sur un an | actions | Variation sur un an supérieure à 0 %. |
| Forte croissance du chiffre d’affaires | actions | Croissance annuelle supérieure à 20 %. |
| Ratio cours / bénéfice faible | actions | Ratio inférieur à 12. |
| Marge nette élevée | actions | Marge nette supérieure à 20 %. |
| Sous le prix cible du consensus | actions | Cours inférieur au prix cible moyen des analystes (donnée tierce). (donnée tierce) |
| Éligibles au PEA | actions | Titres éligibles au plan d’épargne en actions. |
| ETF à frais courants bas | fonds-etp | Frais courants inférieurs à 0,20 %. |
| ETF éligibles PEA capitalisants | fonds-etp | ETF éligibles au PEA, sans distribution. |
| Fonds article 9 | fonds-etp | Classification SFDR article 9. |
| Obligations d’État à moins de 3 ans | obligations | Dette souveraine, échéance proche. |
| Entreprises catégorie investissement, 3 à 5 ans | obligations | Notation BBB- ou mieux, 3 à 5 ans. (donnée tierce) |
| Obligations vertes | obligations | Émissions vertes ou durables. |
| Stablecoins en euros sur plateformes MiCA | crypto | Jetons adossés à l’euro, plateformes autorisées. |
| SCPI à taux d’occupation élevé | immobilier | Taux d’occupation financier supérieur à 95 %. |

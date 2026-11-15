import type { AssetClass, DetailTab, FieldDef, FilterDef } from './types.ts';

/* ------------------------------------------------------------------ */
/* Éléments communs                                                    */
/* ------------------------------------------------------------------ */

const ENVELOPPES = ['PEA', 'PEA-PME', 'CTO', 'Assurance-vie', 'PER', 'PEE', 'Hors enveloppe'] as const;

/** Filtres disponibles pour toutes les positions détenues. */
export const FILTRES_COMMUNS: readonly FilterDef[] = [
  { id: 'enveloppe', label: 'Enveloppe', kind: 'multi', champ: 'enveloppe', options: ENVELOPPES },
  { id: 'etablissement', label: 'Établissement', kind: 'multi', champ: 'etablissement' },
  { id: 'devise', label: 'Devise', kind: 'multi', champ: 'devise' },
  { id: 'membre', label: 'Membre du foyer ou entité', kind: 'multi', champ: 'detenteur' },
  { id: 'poids', label: 'Poids dans le patrimoine', kind: 'plage', champ: 'poids' },
  { id: 'plus-value', label: 'Plus ou moins-value latente', kind: 'plage', champ: 'plusValueLatente' },
  { id: 'source-donnee', label: 'Source (synchro, CSV, saisie)', kind: 'multi', champ: 'source', options: ['Synchro', 'CSV', 'Saisie'] },
  { id: 'fraicheur', label: 'Dernière mise à jour', kind: 'periode', champ: 'majLe' },
  { id: 'etiquette', label: 'Étiquette personnelle', kind: 'multi', champ: 'etiquettes' },
];

/** Filtres de marché communs aux actifs cotés. */
const FILTRES_MARCHE: readonly FilterDef[] = [
  { id: 'var-1j', label: 'Variation 1 jour', kind: 'plage', champ: 'variation1j' },
  { id: 'var-1m', label: 'Variation 1 mois', kind: 'plage', champ: 'variation1m' },
  { id: 'var-1a', label: 'Variation 1 an', kind: 'plage', champ: 'variation1a' },
  { id: 'volatilite', label: 'Volatilité 1 an', kind: 'plage', champ: 'volatilite1a' },
  { id: 'distance-plus-haut', label: 'Écart au plus haut sur 52 semaines', kind: 'plage', champ: 'ecartPlusHaut52s' },
  { id: 'volume', label: 'Volume moyen', kind: 'plage', champ: 'volumeMoyen' },
];

/** Onglets présents sur toutes les fiches de position. */
const ONGLETS_FIN: readonly DetailTab[] = [
  { id: 'mes-operations', label: 'Mes opérations' },
  { id: 'consignes', label: 'Consignes' },
  { id: 'notes', label: 'Notes et documents' },
];

const champ = (id: string, label: string, type: FieldDef['type'], extra: Partial<FieldDef> = {}): FieldDef => ({
  id,
  label,
  type,
  ...extra,
});

/* ------------------------------------------------------------------ */
/* Classes d'actifs                                                    */
/* ------------------------------------------------------------------ */

export const TAXONOMIE: readonly AssetClass[] = [
  {
    id: 'liquidites',
    label: 'Liquidités et épargne',
    icone: 'banknote',
    description: 'Comptes courants, livrets, comptes à terme, épargne logement et comptes en devises.',
    source: 'taux',
    enveloppes: ['Hors enveloppe'],
    champs: [
      champ('taux', 'Taux annuel', 'pourcentage', { source: 'saisie' }),
      champ('plafond', 'Plafond de versement', 'montant'),
      champ('interets-courus', 'Intérêts courus estimés', 'montant', { source: 'calcul' }),
      champ('date-ouverture', 'Date d’ouverture', 'date'),
    ],
    filtres: [
      { id: 'taux', label: 'Taux', kind: 'plage', champ: 'taux' },
      { id: 'plafond-restant', label: 'Plafond restant', kind: 'plage', champ: 'plafondRestant' },
      { id: 'disponibilite', label: 'Disponibilité', kind: 'choix', champ: 'disponibilite', options: ['Immédiate', 'Bloquée jusqu’à échéance'] },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'mouvements', label: 'Mouvements' },
      { id: 'interets', label: 'Intérêts' },
      { id: 'plafonds', label: 'Plafonds' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'compte-courant', label: 'Compte courant', description: 'Compte de dépôt et carte ; source des dépenses catégorisées.', onglets: [{ id: 'depenses', label: 'Dépenses et enseignes' }] },
      { id: 'livret-reglemente', label: 'Livret réglementé', description: 'Taux et plafond fixés par l’État.', exemples: ['Livret A', 'LDDS', 'LEP', 'Livret jeune'] },
      { id: 'livret-bancaire', label: 'Livret bancaire', description: 'Livret fiscalisé, souvent avec taux promotionnel.', champs: [champ('fin-promo', 'Fin du taux promotionnel', 'date')] },
      { id: 'compte-a-terme', label: 'Compte à terme', description: 'Somme bloquée jusqu’à une échéance.', champs: [champ('echeance', 'Échéance', 'date', { obligatoire: true })] },
      { id: 'epargne-logement', label: 'Épargne logement', description: 'Plan et compte épargne logement.', exemples: ['PEL', 'CEL'], champs: [champ('generation', 'Génération du plan', 'texte')] },
      { id: 'compte-devise', label: 'Compte en devises', description: 'Liquidités en devise étrangère, rémunérées ou non.', exemples: ['USD', 'CHF', 'GBP'], champs: [champ('effet-change', 'Effet de change', 'montant', { source: 'calcul' })] },
      { id: 'fonds-monetaire-compte', label: 'Trésorerie rémunérée', description: 'Poches de trésorerie investies en fonds monétaires chez un courtier ou une néobanque.', source: 'vl' },
    ],
  },

  {
    id: 'actions',
    label: 'Actions',
    icone: 'chart-line',
    description: 'Actions cotées, certificats de dépôt, actionnariat salarié et droits attachés.',
    source: 'marche',
    enveloppes: ['PEA', 'PEA-PME', 'CTO', 'PEE', 'Assurance-vie'],
    champs: [
      champ('isin', 'ISIN', 'isin', { obligatoire: true, source: 'fournisseur' }),
      champ('ticker', 'Code mnémonique', 'ticker', { source: 'fournisseur' }),
      champ('place', 'Place de cotation', 'texte', { source: 'fournisseur' }),
      champ('pays', 'Pays', 'texte', { source: 'fournisseur' }),
      champ('secteur', 'Secteur', 'texte', { source: 'fournisseur' }),
      champ('industrie', 'Industrie', 'texte', { source: 'fournisseur' }),
      champ('capitalisation', 'Capitalisation boursière', 'montant', { source: 'fournisseur' }),
      champ('eligible-pea', 'Éligible au PEA', 'booleen', { source: 'fournisseur' }),
    ],
    filtres: [
      ...FILTRES_MARCHE,
      { id: 'place', label: 'Place de cotation', kind: 'multi', champ: 'place' },
      { id: 'pays', label: 'Pays', kind: 'multi', champ: 'pays' },
      { id: 'secteur', label: 'Secteur', kind: 'multi', champ: 'secteur' },
      { id: 'industrie', label: 'Industrie', kind: 'multi', champ: 'industrie' },
      { id: 'taille', label: 'Taille de capitalisation', kind: 'multi', champ: 'tailleCap', options: ['Très grande', 'Grande', 'Moyenne', 'Petite', 'Micro'] },
      { id: 'per', label: 'Ratio cours / bénéfice', kind: 'plage', champ: 'per' },
      { id: 'prix-ventes', label: 'Prix / ventes', kind: 'plage', champ: 'prixVentes' },
      { id: 'rendement-dividende', label: 'Rendement du dividende', kind: 'plage', champ: 'rendementDividende' },
      { id: 'marge-nette', label: 'Marge nette', kind: 'plage', champ: 'margeNette' },
      { id: 'croissance-ca', label: 'Croissance du chiffre d’affaires', kind: 'plage', champ: 'croissanceCa' },
      { id: 'beta', label: 'Bêta (5 ans)', kind: 'plage', champ: 'beta' },
      { id: 'eligible-pea', label: 'Éligible au PEA', kind: 'booleen', champ: 'eligiblePea' },
      { id: 'consensus-ecart', label: 'Écart au prix cible du consensus', kind: 'plage', champ: 'ecartPrixCible', donneeTierce: true },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'a-propos', label: 'À propos' },
      { id: 'statistiques', label: 'Statistiques clés', sousOnglets: ['Cours et volume', 'Données par action', 'Ratios'] },
      { id: 'finances', label: 'Données financières', sousOnglets: ['Compte de résultat', 'Bilan', 'Trésorerie'] },
      { id: 'dividendes', label: 'Dividendes' },
      { id: 'evenements', label: 'Événements' },
      { id: 'actualites', label: 'Actualités' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'action-cotee', label: 'Action cotée', description: 'Titre coté sur un marché réglementé ou organisé.', exemples: ['Euronext Paris', 'NYSE', 'Xetra'] },
      { id: 'certificat-depot', label: 'Certificat de dépôt (ADR, GDR)', description: 'Titre représentant des actions étrangères.', champs: [champ('ratio', 'Ratio de conversion', 'nombre'), champ('sous-jacent', 'Action sous-jacente', 'isin')] },
      { id: 'actionnariat-salarie', label: 'Actionnariat salarié', description: 'Actions et droits attribués par l’employeur.', exemples: ['Actions gratuites (RSU)', 'Stock-options', 'Actions de l’employeur en PEE'], champs: [champ('date-acquisition-definitive', 'Date d’acquisition définitive', 'date'), champ('prix-exercice', 'Prix d’exercice', 'montant'), champ('indisponibilite', 'Fin d’indisponibilité', 'date')], onglets: [{ id: 'calendrier-vesting', label: 'Calendrier d’acquisition' }] },
      { id: 'droits-bons', label: 'Droits et bons de souscription', description: 'Droits préférentiels et bons attachés à une opération.', champs: [champ('date-limite', 'Date limite d’exercice', 'date')] },
    ],
    vigilance: [
      'Les notations et prix cibles d’analystes sont des données tierces : affichées sourcées et datées, jamais présentées comme une recommandation de LiVi, et désactivables.',
      'Aucun bouton « Acheter » ou « Vendre » : « Ajouter une opération » et « Créer une consigne ».',
    ],
  },

  {
    id: 'fonds-etp',
    label: 'Fonds et ETP',
    icone: 'layers',
    description: 'ETF, ETC et ETN, OPCVM, fonds monétaires et fonds de capital-investissement grand public.',
    source: 'vl',
    enveloppes: ['PEA', 'CTO', 'Assurance-vie', 'PER', 'PEE'],
    champs: [
      champ('isin', 'ISIN', 'isin', { obligatoire: true, source: 'fournisseur' }),
      champ('emetteur', 'Société de gestion ou émetteur', 'texte', { source: 'fournisseur' }),
      champ('indice', 'Indice suivi', 'texte', { source: 'fournisseur' }),
      champ('frais-courants', 'Frais courants', 'pourcentage', { source: 'fournisseur' }),
      champ('replication', 'Réplication', 'enum', { options: ['Physique complète', 'Physique échantillonnée', 'Synthétique'], source: 'fournisseur' }),
      champ('distribution', 'Distribution', 'enum', { options: ['Capitalisant', 'Distribuant'], source: 'fournisseur' }),
      champ('encours', 'Encours', 'montant', { source: 'fournisseur' }),
      champ('sri', 'Indicateur de risque (1 à 7)', 'nombre', { source: 'fournisseur' }),
      champ('sfdr', 'Classification SFDR', 'enum', { options: ['Article 6', 'Article 8', 'Article 9'], source: 'fournisseur' }),
      champ('domicile', 'Domicile', 'texte', { source: 'fournisseur' }),
    ],
    filtres: [
      ...FILTRES_MARCHE,
      { id: 'emetteur', label: 'Émetteur', kind: 'multi', champ: 'emetteur' },
      { id: 'indice', label: 'Indice suivi', kind: 'recherche', champ: 'indice' },
      { id: 'zone', label: 'Zone d’investissement', kind: 'multi', champ: 'zone' },
      { id: 'theme', label: 'Secteur ou thème', kind: 'multi', champ: 'theme' },
      { id: 'frais', label: 'Frais courants', kind: 'plage', champ: 'fraisCourants' },
      { id: 'replication', label: 'Réplication', kind: 'multi', champ: 'replication' },
      { id: 'distribution', label: 'Capitalisant ou distribuant', kind: 'choix', champ: 'distribution', options: ['Capitalisant', 'Distribuant'] },
      { id: 'encours', label: 'Encours', kind: 'plage', champ: 'encours' },
      { id: 'anciennete', label: 'Ancienneté du fonds', kind: 'plage', champ: 'ancienneteAns' },
      { id: 'sri', label: 'Indicateur de risque', kind: 'plage', champ: 'sri' },
      { id: 'sfdr', label: 'Classification SFDR', kind: 'multi', champ: 'sfdr' },
      { id: 'eligibilite', label: 'Éligibilité', kind: 'multi', champ: 'eligibilite', options: ['PEA', 'Assurance-vie', 'PER'] },
      { id: 'couverture-change', label: 'Couvert contre le change', kind: 'booleen', champ: 'couvertChange' },
      { id: 'ecart-suivi', label: 'Écart de suivi', kind: 'plage', champ: 'ecartSuivi' },
      { id: 'perf-3a', label: 'Performance 3 ans', kind: 'plage', champ: 'performance3a' },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'composition', label: 'Composition', sousOnglets: ['Lignes', 'Pays', 'Secteurs', 'Devises'] },
      { id: 'frais', label: 'Frais' },
      { id: 'performance', label: 'Performance et indice' },
      { id: 'distributions', label: 'Distributions' },
      { id: 'recouvrement', label: 'Recouvrement avec mes fonds' },
      { id: 'documents', label: 'Documents (DIC)' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'etf-actions', label: 'ETF actions', description: 'Réplique un indice d’actions.', exemples: ['Monde', 'S&P 500', 'Europe', 'Émergents'] },
      { id: 'etf-obligataire', label: 'ETF obligataire', description: 'Réplique un indice d’obligations.', champs: [champ('duration', 'Duration moyenne', 'nombre', { unite: 'ans' }), champ('notation-moyenne', 'Notation moyenne', 'notation')] },
      { id: 'etf-thematique', label: 'ETF sectoriel ou thématique', description: 'Secteur, thème ou facteur.', exemples: ['Semi-conducteurs', 'Santé', 'Dividendes'] },
      { id: 'etf-levier-inverse', label: 'ETF à effet de levier ou inverse', description: 'Produit à réinitialisation quotidienne, complexe.', champs: [champ('levier', 'Levier', 'nombre')], onglets: [{ id: 'risque-levier', label: 'Risque du levier' }] },
      { id: 'etc-etn', label: 'ETC et ETN', description: 'Titres de créance indexés sur une matière première ou un indice.', champs: [champ('collateral', 'Garantie', 'texte')] },
      { id: 'opcvm-actions', label: 'Fonds actions', description: 'OPCVM, FCP ou SICAV à dominante actions.' },
      { id: 'opcvm-obligataire', label: 'Fonds obligataire', description: 'OPCVM à dominante obligations.' },
      { id: 'opcvm-diversifie', label: 'Fonds diversifié', description: 'Allocation mixte ou flexible.' },
      { id: 'fonds-monetaire', label: 'Fonds monétaire', description: 'Placement de trésorerie à faible risque.' },
      { id: 'capital-investissement', label: 'FCPI, FIP et FCPR', description: 'Fonds de capital-investissement grand public, souvent à avantage fiscal et durée de blocage.', champs: [champ('fin-blocage', 'Fin de blocage', 'date'), champ('reduction-impot', 'Réduction d’impôt obtenue', 'montant')] },
    ],
  },

  {
    id: 'obligations',
    label: 'Obligations',
    icone: 'landmark',
    description: 'Titres de dette d’États, d’organismes supranationaux, de collectivités et d’entreprises.',
    source: 'marche',
    enveloppes: ['CTO', 'Assurance-vie', 'PER'],
    champs: [
      champ('isin', 'ISIN', 'isin', { obligatoire: true }),
      champ('emetteur', 'Émetteur', 'texte'),
      champ('categorie-emetteur', 'Catégorie d’émetteur', 'enum', { options: ['État', 'Supranational ou agence', 'Collectivité', 'Entreprise'] }),
      champ('pays', 'Pays de l’émetteur', 'texte'),
      champ('coupon', 'Coupon', 'pourcentage'),
      champ('frequence', 'Fréquence du coupon', 'enum', { options: ['Annuelle', 'Semestrielle', 'Trimestrielle', 'Aucune'] }),
      champ('type-taux', 'Type de taux', 'enum', { options: ['Fixe', 'Variable', 'Indexé sur l’inflation', 'Zéro coupon'] }),
      champ('date-emission', 'Date d’émission', 'date'),
      champ('echeance', 'Échéance', 'date', { obligatoire: true }),
      champ('prix-pct', 'Prix (% du nominal)', 'pourcentage', { source: 'fournisseur' }),
      champ('nominal', 'Valeur nominale', 'montant'),
      champ('rendement-maturite', 'Rendement à maturité', 'pourcentage', { source: 'calcul' }),
      champ('rendement-courant', 'Rendement courant', 'pourcentage', { source: 'calcul' }),
      champ('duration', 'Duration modifiée', 'nombre', { source: 'calcul' }),
      champ('notation', 'Notation', 'notation', { source: 'fournisseur' }),
      champ('rang', 'Rang', 'enum', { options: ['Senior sécurisé', 'Senior', 'Subordonné', 'Hybride'] }),
      champ('remboursement-anticipe', 'Remboursable par anticipation', 'booleen'),
      champ('montant-minimum', 'Montant minimum de négociation', 'montant'),
    ],
    filtres: [
      { id: 'categorie-emetteur', label: 'Catégorie d’émetteur', kind: 'multi', champ: 'categorieEmetteur', options: ['État', 'Supranational ou agence', 'Collectivité', 'Entreprise'] },
      { id: 'pays', label: 'Pays', kind: 'multi', champ: 'pays' },
      { id: 'devise-emission', label: 'Devise d’émission', kind: 'multi', champ: 'devise' },
      { id: 'notation', label: 'Notation', kind: 'multi', champ: 'notation', options: ['AAA', 'AA', 'A', 'BBB', 'BB', 'B', 'CCC et moins', 'Non notée'], donneeTierce: true },
      { id: 'qualite', label: 'Qualité de crédit', kind: 'choix', champ: 'qualite', options: ['Investissement', 'Haut rendement'] },
      { id: 'echeance', label: 'Échéance', kind: 'periode', champ: 'echeance' },
      { id: 'maturite-restante', label: 'Années restantes', kind: 'plage', champ: 'maturiteRestante' },
      { id: 'coupon', label: 'Coupon', kind: 'plage', champ: 'coupon' },
      { id: 'rendement-maturite', label: 'Rendement à maturité', kind: 'plage', champ: 'rendementMaturite' },
      { id: 'duration', label: 'Duration', kind: 'plage', champ: 'duration' },
      { id: 'type-taux', label: 'Type de taux', kind: 'multi', champ: 'typeTaux' },
      { id: 'rang', label: 'Rang', kind: 'multi', champ: 'rang' },
      { id: 'remboursement-anticipe', label: 'Remboursable par anticipation', kind: 'booleen', champ: 'remboursementAnticipe' },
      { id: 'verte', label: 'Obligation verte ou durable', kind: 'booleen', champ: 'verte' },
      { id: 'montant-minimum', label: 'Montant minimum', kind: 'plage', champ: 'montantMinimum' },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'caracteristiques', label: 'Caractéristiques' },
      { id: 'echeancier', label: 'Échéancier des coupons' },
      { id: 'rendement-risque', label: 'Rendement et risque', sousOnglets: ['Rendement à maturité', 'Duration et sensibilité', 'Écart de taux'] },
      { id: 'emetteur', label: 'Émetteur' },
      { id: 'documents', label: 'Prospectus et documents' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'etat', label: 'Obligation d’État', description: 'Dette souveraine.', exemples: ['OAT (France)', 'Bund (Allemagne)', 'Treasuries (États-Unis)', 'BTP (Italie)'] },
      { id: 'supranationale', label: 'Supranationale ou agence', description: 'Organismes internationaux ou agences publiques.', exemples: ['Union européenne', 'BEI', 'CADES'] },
      { id: 'collectivite', label: 'Collectivité locale', description: 'Régions, départements, villes.' },
      { id: 'entreprise-ig', label: 'Entreprise, catégorie investissement', description: 'Notation BBB- ou mieux.', filtres: ['notation', 'rang'] },
      { id: 'entreprise-hy', label: 'Entreprise, haut rendement', description: 'Notation inférieure à BBB-, risque de crédit plus élevé.', filtres: ['notation', 'rang'] },
      { id: 'convertible', label: 'Obligation convertible', description: 'Convertible en actions de l’émetteur.', champs: [champ('ratio-conversion', 'Ratio de conversion', 'nombre'), champ('action-sous-jacente', 'Action sous-jacente', 'isin'), champ('prime-conversion', 'Prime de conversion', 'pourcentage', { source: 'calcul' })], onglets: [{ id: 'conversion', label: 'Conversion' }] },
      { id: 'indexee-inflation', label: 'Indexée sur l’inflation', description: 'Nominal ou coupon indexé sur un indice des prix.', exemples: ['OATi', 'OAT€i', 'TIPS'], champs: [champ('indice-inflation', 'Indice d’inflation', 'texte'), champ('coefficient-indexation', 'Coefficient d’indexation', 'nombre')] },
      { id: 'verte-durable', label: 'Verte ou durable', description: 'Fonds levés affectés à des projets environnementaux ou sociaux.', champs: [champ('cadre', 'Cadre d’émission', 'texte')] },
      { id: 'zero-coupon', label: 'Zéro coupon', description: 'Pas de coupon, émise sous le pair.' },
      { id: 'perpetuelle-subordonnee', label: 'Perpétuelle ou subordonnée', description: 'Sans échéance fixe ou remboursée après la dette senior.', champs: [champ('date-call', 'Prochaine date de remboursement anticipé', 'date')] },
    ],
    vigilance: ['Les notations viennent d’agences tierces sous licence : afficher l’agence et la date.', 'Le rendement à maturité est un calcul à date, pas une promesse.'],
  },

  {
    id: 'immobilier',
    label: 'Immobilier',
    icone: 'building',
    description: 'Biens détenus en direct, pierre-papier, foncières cotées et financement participatif immobilier.',
    source: 'estimation',
    enveloppes: ['Hors enveloppe', 'Assurance-vie', 'PER'],
    champs: [
      champ('commune', 'Commune', 'adresse'),
      champ('surface', 'Surface', 'nombre', { unite: 'm²' }),
      champ('prix-acquisition', 'Prix d’acquisition', 'montant'),
      champ('frais-acquisition', 'Frais d’acquisition', 'montant'),
      champ('date-acquisition', 'Date d’acquisition', 'date'),
      champ('valeur-estimee', 'Valeur estimée', 'montant', { source: 'calcul' }),
      champ('detention', 'Mode de détention', 'enum', { options: ['Pleine propriété', 'Nue-propriété', 'Usufruit', 'Indivision', 'Via société'] }),
      champ('quote-part', 'Quote-part détenue', 'pourcentage'),
    ],
    filtres: [
      { id: 'type-bien', label: 'Type de bien', kind: 'multi', champ: 'sousClasse' },
      { id: 'localisation', label: 'Localisation', kind: 'recherche', champ: 'commune' },
      { id: 'rendement-brut', label: 'Rendement locatif brut', kind: 'plage', champ: 'rendementBrut' },
      { id: 'rendement-net', label: 'Rendement locatif net', kind: 'plage', champ: 'rendementNet' },
      { id: 'detention', label: 'Mode de détention', kind: 'multi', champ: 'detention' },
      { id: 'credit-associe', label: 'Avec crédit en cours', kind: 'booleen', champ: 'creditAssocie' },
      { id: 'regime-fiscal', label: 'Régime fiscal', kind: 'multi', champ: 'regimeFiscal', options: ['Micro-foncier', 'Réel', 'LMNP micro-BIC', 'LMNP réel', 'LMP'] },
      { id: 'taux-occupation', label: 'Taux d’occupation (SCPI)', kind: 'plage', champ: 'tauxOccupation' },
      { id: 'taux-distribution', label: 'Taux de distribution (SCPI)', kind: 'plage', champ: 'tauxDistribution' },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'valeur', label: 'Valeur et estimation' },
      { id: 'revenus-charges', label: 'Loyers et charges' },
      { id: 'credit', label: 'Crédit associé' },
      { id: 'fiscalite', label: 'Fiscalité' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'residence-principale', label: 'Résidence principale', description: 'Logement occupé par le foyer.' },
      { id: 'residence-secondaire', label: 'Résidence secondaire', description: 'Logement de loisirs.' },
      { id: 'locatif-nu', label: 'Locatif nu', description: 'Location non meublée.', champs: [champ('loyer', 'Loyer mensuel', 'montant'), champ('charges', 'Charges annuelles', 'montant'), champ('taxe-fonciere', 'Taxe foncière', 'montant')] },
      { id: 'locatif-meuble', label: 'Locatif meublé (LMNP, LMP)', description: 'Location meublée, régime BIC.', champs: [champ('loyer', 'Loyer mensuel', 'montant'), champ('amortissements', 'Amortissements', 'montant')] },
      { id: 'scpi', label: 'SCPI', description: 'Société civile de placement immobilier.', source: 'plateforme', champs: [champ('prix-part', 'Prix de la part', 'montant'), champ('taux-distribution', 'Taux de distribution', 'pourcentage'), champ('taux-occupation', 'Taux d’occupation financier', 'pourcentage'), champ('delai-jouissance', 'Délai de jouissance', 'nombre', { unite: 'mois' }), champ('frais-souscription', 'Frais de souscription', 'pourcentage')], filtres: ['taux-occupation', 'taux-distribution'] },
      { id: 'opci-sci', label: 'OPCI et SCI en unités de compte', description: 'Pierre-papier logée souvent en assurance-vie.', source: 'vl' },
      { id: 'fonciere-cotee', label: 'Foncière cotée (SIIC, REIT)', description: 'Société immobilière cotée en bourse.', source: 'marche' },
      { id: 'crowdfunding-immobilier', label: 'Financement participatif immobilier', description: 'Prêt à un promoteur via une plateforme.', source: 'plateforme', champs: [champ('taux', 'Taux annoncé', 'pourcentage'), champ('statut', 'Statut', 'enum', { options: ['En cours', 'Remboursé', 'En retard', 'En défaut'] })] },
      { id: 'viager-demembrement', label: 'Viager et démembrement', description: 'Nue-propriété, usufruit temporaire, viager.' },
      { id: 'terrain-parking', label: 'Terrain, parking, local', description: 'Autres biens immobiliers.' },
    ],
    vigilance: ['L’estimation par ventes comparables (DVF) est indicative ; l’utilisateur choisit la valeur retenue.'],
  },

  {
    id: 'crypto',
    label: 'Crypto-actifs',
    icone: 'bitcoin',
    description: 'Cryptomonnaies, stablecoins, positions de staking et de finance décentralisée.',
    source: 'marche',
    enveloppes: ['Hors enveloppe'],
    champs: [
      champ('symbole', 'Symbole', 'ticker', { obligatoire: true }),
      champ('reseau', 'Réseau', 'texte'),
      champ('plateforme', 'Plateforme ou portefeuille', 'texte'),
      champ('statut-mica', 'Plateforme autorisée MiCA', 'booleen', { source: 'fournisseur' }),
      champ('adresse', 'Adresse publique', 'texte'),
    ],
    filtres: [
      ...FILTRES_MARCHE,
      { id: 'capitalisation', label: 'Capitalisation', kind: 'plage', champ: 'capitalisation' },
      { id: 'categorie', label: 'Catégorie', kind: 'multi', champ: 'categorie', options: ['Couche 1', 'Couche 2', 'Finance décentralisée', 'Stablecoin', 'Jeton utilitaire'] },
      { id: 'reseau', label: 'Réseau', kind: 'multi', champ: 'reseau' },
      { id: 'rendement-staking', label: 'Rendement de staking', kind: 'plage', champ: 'rendementStaking' },
      { id: 'mica', label: 'Plateforme autorisée MiCA', kind: 'booleen', champ: 'statutMica' },
      { id: 'adossement', label: 'Adossement (stablecoin)', kind: 'multi', champ: 'adossement', options: ['EUR', 'USD', 'Autre'] },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'reseau', label: 'Réseau' },
      { id: 'portefeuilles', label: 'Portefeuilles et adresses' },
      { id: 'staking', label: 'Staking et rendement' },
      { id: 'fiscalite', label: 'Fiscalité' },
      { id: 'actualites', label: 'Actualités' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'cryptomonnaie', label: 'Cryptomonnaie', description: 'Actif natif d’un réseau.', exemples: ['BTC', 'ETH', 'SOL'] },
      { id: 'stablecoin', label: 'Stablecoin', description: 'Jeton adossé à une monnaie.', exemples: ['EURC', 'USDC'], champs: [champ('emetteur', 'Émetteur', 'texte'), champ('adossement', 'Monnaie d’adossement', 'enum', { options: ['EUR', 'USD', 'Autre'] })] },
      { id: 'staking', label: 'Staking et épargne crypto', description: 'Actifs immobilisés contre une rémunération.', champs: [champ('rendement', 'Rendement annoncé', 'pourcentage'), champ('blocage', 'Période de blocage', 'nombre', { unite: 'jours' })] },
      { id: 'defi', label: 'Finance décentralisée', description: 'Positions de prêt, liquidité ou dérivés sur protocoles.', champs: [champ('protocole', 'Protocole', 'texte')] },
      { id: 'nft', label: 'NFT', description: 'Jetons non fongibles, valorisés au dernier prix plancher ou manuellement.', source: 'manuel' },
      { id: 'jeton-utilitaire', label: 'Jeton utilitaire', description: 'Jeton donnant accès à un service.' },
    ],
    vigilance: ['Affiliation et ordres limités aux prestataires autorisés MiCA ; le suivi en lecture reste possible pour toute plateforme.'],
  },

  {
    id: 'matieres-premieres',
    label: 'Matières premières',
    icone: 'gem',
    description: 'Métaux précieux physiques et expositions aux matières premières.',
    source: 'marche',
    enveloppes: ['Hors enveloppe', 'CTO'],
    champs: [
      champ('metal', 'Métal ou matière', 'enum', { options: ['Or', 'Argent', 'Platine', 'Palladium', 'Énergie', 'Agricole', 'Métaux industriels'] }),
      champ('forme', 'Forme', 'enum', { options: ['Pièce', 'Lingot', 'ETC', 'Contrat à terme', 'Compte métal'] }),
      champ('poids', 'Poids fin', 'nombre', { unite: 'g' }),
      champ('purete', 'Pureté', 'nombre'),
      champ('prime', 'Prime sur le cours', 'pourcentage', { source: 'calcul' }),
      champ('stockage', 'Lieu de stockage', 'texte'),
    ],
    filtres: [
      { id: 'metal', label: 'Métal ou matière', kind: 'multi', champ: 'metal' },
      { id: 'forme', label: 'Forme', kind: 'multi', champ: 'forme' },
      { id: 'prime', label: 'Prime', kind: 'plage', champ: 'prime' },
      { id: 'stockage', label: 'Stockage', kind: 'multi', champ: 'stockage', options: ['Domicile', 'Coffre bancaire', 'Coffre en zone franche', 'Chez le vendeur'] },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'cours', label: 'Cours au comptant' },
      { id: 'stockage', label: 'Stockage et certificats' },
      { id: 'fiscalite', label: 'Fiscalité' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'or-physique', label: 'Or physique', description: 'Pièces et lingots.', exemples: ['Napoléon 20 F', 'Krugerrand', 'Lingot 1 kg'] },
      { id: 'argent-physique', label: 'Argent physique', description: 'Pièces et lingots d’argent.' },
      { id: 'platine-palladium', label: 'Platine et palladium', description: 'Métaux du groupe du platine.' },
      { id: 'etc-matieres', label: 'ETC matières premières', description: 'Exposition cotée à une matière première.', source: 'marche' },
      { id: 'energie', label: 'Énergie', description: 'Pétrole, gaz, via ETC ou contrats.' },
      { id: 'agricole', label: 'Agricole', description: 'Blé, café, sucre, via ETC ou contrats.' },
    ],
  },

  {
    id: 'derives',
    label: 'Produits dérivés',
    icone: 'git-branch',
    description: 'Options, contrats à terme, CFD, warrants, turbos et produits structurés détenus chez un intermédiaire.',
    source: 'marche',
    enveloppes: ['CTO'],
    champs: [
      champ('sous-jacent', 'Sous-jacent', 'texte', { obligatoire: true }),
      champ('sens', 'Sens', 'enum', { options: ['Achat (call, long)', 'Vente (put, short)'] }),
      champ('prix-exercice', 'Prix d’exercice', 'montant'),
      champ('echeance', 'Échéance', 'date'),
      champ('levier', 'Levier', 'nombre'),
      champ('barriere', 'Barrière ou seuil de désactivation', 'montant'),
      champ('quotite', 'Quotité ou multiplicateur', 'nombre'),
      champ('marge', 'Marge mobilisée', 'montant'),
    ],
    filtres: [
      { id: 'sous-jacent', label: 'Sous-jacent', kind: 'recherche', champ: 'sousJacent' },
      { id: 'sens', label: 'Sens', kind: 'choix', champ: 'sens' },
      { id: 'echeance', label: 'Échéance', kind: 'periode', champ: 'echeance' },
      { id: 'levier', label: 'Levier', kind: 'plage', champ: 'levier' },
      { id: 'distance-barriere', label: 'Distance à la barrière', kind: 'plage', champ: 'distanceBarriere' },
      { id: 'emetteur', label: 'Émetteur', kind: 'multi', champ: 'emetteur' },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'sous-jacent', label: 'Sous-jacent' },
      { id: 'risque', label: 'Risque', sousOnglets: ['Levier', 'Barrière', 'Sensibilités'] },
      { id: 'echeance', label: 'Échéance' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'options', label: 'Options', description: 'Droit d’acheter ou de vendre à un prix fixé.', champs: [champ('delta', 'Delta', 'nombre', { source: 'fournisseur' }), champ('volatilite-implicite', 'Volatilité implicite', 'pourcentage', { source: 'fournisseur' })] },
      { id: 'futures', label: 'Contrats à terme', description: 'Engagement d’acheter ou de vendre à terme.' },
      { id: 'cfd', label: 'CFD', description: 'Contrat sur différence, avec marge et frais de financement.', champs: [champ('frais-financement', 'Frais de financement journaliers', 'montant')] },
      { id: 'warrants-turbos', label: 'Warrants et turbos', description: 'Produits à effet de levier émis par une banque.' },
      { id: 'produits-structures', label: 'Produits structurés', description: 'Formule de remboursement liée à un sous-jacent (autocall, capital garanti).', champs: [champ('date-constatation', 'Prochaine date de constatation', 'date'), champ('coupon-conditionnel', 'Coupon conditionnel', 'pourcentage')] },
    ],
    vigilance: ['Produits complexes : LiVi les suit en lecture, n’en propose aucun et affiche le risque de perte supérieure à la mise quand il existe.'],
  },

  {
    id: 'assurance-vie',
    label: 'Assurance-vie et capitalisation',
    icone: 'shield',
    description: 'Contrats d’assurance-vie et de capitalisation, fonds en euros et unités de compte.',
    source: 'plateforme',
    enveloppes: ['Assurance-vie'],
    champs: [
      champ('assureur', 'Assureur', 'texte', { obligatoire: true }),
      champ('contrat', 'Nom du contrat', 'texte'),
      champ('date-ouverture', 'Date d’ouverture (antériorité fiscale)', 'date', { obligatoire: true }),
      champ('frais-gestion', 'Frais de gestion annuels', 'pourcentage'),
      champ('frais-versement', 'Frais sur versement', 'pourcentage'),
      champ('mode-gestion', 'Mode de gestion', 'enum', { options: ['Libre', 'Pilotée', 'Sous mandat'] }),
    ],
    filtres: [
      { id: 'assureur', label: 'Assureur', kind: 'multi', champ: 'assureur' },
      { id: 'anciennete', label: 'Plus de 8 ans', kind: 'booleen', champ: 'plusDe8Ans' },
      { id: 'frais', label: 'Frais de gestion', kind: 'plage', champ: 'fraisGestion' },
      { id: 'part-fonds-euros', label: 'Part en fonds en euros', kind: 'plage', champ: 'partFondsEuros' },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'supports', label: 'Supports', sousOnglets: ['Fonds en euros', 'Unités de compte'] },
      { id: 'versements', label: 'Versements et rachats' },
      { id: 'fiscalite', label: 'Fiscalité' },
      { id: 'beneficiaires', label: 'Bénéficiaires' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'contrat-assurance-vie', label: 'Contrat d’assurance-vie', description: 'Contrat français, fonds en euros et unités de compte.' },
      { id: 'contrat-capitalisation', label: 'Contrat de capitalisation', description: 'Sans clause bénéficiaire, transmissible.' },
      { id: 'contrat-luxembourgeois', label: 'Contrat luxembourgeois', description: 'Contrat de droit luxembourgeois, multidevise.' },
      { id: 'fonds-euros', label: 'Fonds en euros', description: 'Support à capital garanti par l’assureur.', source: 'taux', champs: [champ('taux-servi', 'Taux servi par année', 'pourcentage')] },
    ],
  },

  {
    id: 'retraite-salariale',
    label: 'Épargne retraite et salariale',
    icone: 'piggy-bank',
    description: 'PER individuel et d’entreprise, épargne salariale et anciens contrats retraite.',
    source: 'plateforme',
    enveloppes: ['PER', 'PEE'],
    champs: [
      champ('gestionnaire', 'Gestionnaire', 'texte'),
      champ('mode-gestion', 'Mode de gestion', 'enum', { options: ['Libre', 'Pilotée à horizon'] }),
      champ('horizon', 'Horizon de départ', 'date'),
      champ('abondement', 'Abondement de l’employeur', 'montant'),
      champ('plafond-deduction', 'Plafond de déduction disponible', 'montant', { source: 'saisie' }),
    ],
    filtres: [
      { id: 'type', label: 'Type de dispositif', kind: 'multi', champ: 'sousClasse' },
      { id: 'mode-gestion', label: 'Mode de gestion', kind: 'choix', champ: 'modeGestion' },
      { id: 'disponible', label: 'Somme disponible', kind: 'plage', champ: 'disponible' },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'supports', label: 'Supports' },
      { id: 'versements', label: 'Versements et abondement' },
      { id: 'plafonds', label: 'Plafonds et déduction' },
      { id: 'deblocage', label: 'Cas de déblocage' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'per-individuel', label: 'PER individuel', description: 'Plan d’épargne retraite ouvert à titre personnel.' },
      { id: 'per-entreprise', label: 'PER d’entreprise', description: 'PER collectif ou obligatoire.' },
      { id: 'pee', label: 'Plan d’épargne entreprise', description: 'Épargne salariale disponible après 5 ans.', champs: [champ('date-disponibilite', 'Date de disponibilité', 'date')] },
      { id: 'anciens-contrats', label: 'Anciens contrats retraite', description: 'PERCO, Madelin, article 83, PERP.' },
    ],
  },

  {
    id: 'non-cote',
    label: 'Non coté et capital-investissement',
    icone: 'rocket',
    description: 'Participations dans des sociétés non cotées, financement participatif en capital et club deals.',
    source: 'manuel',
    enveloppes: ['Hors enveloppe', 'PEA-PME', 'CTO'],
    champs: [
      champ('societe', 'Société', 'texte', { obligatoire: true }),
      champ('valorisation', 'Valorisation retenue', 'montant'),
      champ('pourcentage-detenu', 'Part du capital détenue', 'pourcentage'),
      champ('date-entree', 'Date d’entrée', 'date'),
      champ('dispositif-fiscal', 'Dispositif fiscal', 'texte'),
    ],
    filtres: [
      { id: 'stade', label: 'Stade', kind: 'multi', champ: 'stade', options: ['Amorçage', 'Série A', 'Série B et plus', 'Maturité'] },
      { id: 'secteur', label: 'Secteur', kind: 'multi', champ: 'secteur' },
      { id: 'blocage', label: 'Encore bloqué', kind: 'booleen', champ: 'bloque' },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'valorisation', label: 'Valorisation' },
      { id: 'evenements', label: 'Tours et dilution' },
      { id: 'fiscalite', label: 'Fiscalité' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'participation-directe', label: 'Participation directe', description: 'Actions d’une société non cotée.' },
      { id: 'crowdequity', label: 'Financement participatif en capital', description: 'Via une plateforme agréée.', source: 'plateforme' },
      { id: 'club-deal', label: 'Club deal', description: 'Investissement groupé entre particuliers.' },
      { id: 'bspce', label: 'BSPCE', description: 'Bons de souscription de parts de créateur d’entreprise.', champs: [champ('prix-exercice', 'Prix d’exercice', 'montant'), champ('calendrier', 'Calendrier d’exercice', 'texte')] },
    ],
  },

  {
    id: 'prets',
    label: 'Prêts et financement participatif',
    icone: 'handshake',
    description: 'Prêts accordés à des entreprises ou à des particuliers, en direct ou via une plateforme.',
    source: 'plateforme',
    enveloppes: ['Hors enveloppe'],
    champs: [
      champ('plateforme', 'Plateforme', 'texte'),
      champ('taux', 'Taux', 'pourcentage', { obligatoire: true }),
      champ('duree', 'Durée', 'nombre', { unite: 'mois' }),
      champ('statut', 'Statut', 'enum', { options: ['En cours', 'Remboursé', 'En retard', 'En défaut', 'En recouvrement'] }),
      champ('garantie', 'Garantie', 'texte'),
    ],
    filtres: [
      { id: 'plateforme', label: 'Plateforme', kind: 'multi', champ: 'plateforme' },
      { id: 'taux', label: 'Taux', kind: 'plage', champ: 'taux' },
      { id: 'statut', label: 'Statut', kind: 'multi', champ: 'statut' },
      { id: 'duree-restante', label: 'Durée restante', kind: 'plage', champ: 'dureeRestante' },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'echeancier', label: 'Échéancier' },
      { id: 'statut', label: 'Statut et incidents' },
      { id: 'fiscalite', label: 'Fiscalité' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'crowdlending', label: 'Prêt à une entreprise', description: 'Via une plateforme de financement participatif.' },
      { id: 'pret-particulier', label: 'Prêt à un particulier', description: 'Prêt familial ou entre proches, avec reconnaissance de dette.' },
      { id: 'compte-courant-associe', label: 'Compte courant d’associé', description: 'Avance consentie à une société dont on est associé.' },
    ],
  },

  {
    id: 'biens',
    label: 'Biens et collections',
    icone: 'watch',
    description: 'Véhicules, montres, art, vin et objets de valeur.',
    source: 'manuel',
    champs: [
      champ('valeur-achat', 'Valeur d’achat', 'montant'),
      champ('valeur-estimee', 'Valeur estimée', 'montant'),
      champ('date-reevaluation', 'Dernière réévaluation', 'date'),
      champ('assure', 'Assuré', 'booleen'),
    ],
    filtres: [
      { id: 'type', label: 'Type', kind: 'multi', champ: 'sousClasse' },
      { id: 'reevaluation', label: 'Réévalué depuis', kind: 'periode', champ: 'dateReevaluation' },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'valeur', label: 'Historique de valeur' },
      ...ONGLETS_FIN,
    ],
    sousClasses: [
      { id: 'vehicule', label: 'Véhicule', description: 'Voiture, moto, bateau ; décote estimée par l’utilisateur.' },
      { id: 'montre-bijou', label: 'Montre et bijou', description: 'Objets précieux.' },
      { id: 'art', label: 'Œuvre d’art', description: 'Tableaux, sculptures, photographies.' },
      { id: 'vin', label: 'Vin et spiritueux', description: 'Cave et caisses en primeur.' },
      { id: 'collection', label: 'Objet de collection', description: 'Cartes, timbres, numismatique.' },
    ],
  },

  {
    id: 'passifs',
    label: 'Dettes',
    icone: 'receipt',
    description: 'Crédits et dettes, déduits du patrimoine net.',
    source: 'taux',
    champs: [
      champ('capital-emprunte', 'Capital emprunté', 'montant', { obligatoire: true }),
      champ('taux-nominal', 'Taux nominal', 'pourcentage', { obligatoire: true }),
      champ('taeg', 'TAEG', 'pourcentage'),
      champ('duree', 'Durée', 'nombre', { unite: 'mois' }),
      champ('mensualite', 'Mensualité', 'montant', { source: 'calcul' }),
      champ('assurance', 'Assurance emprunteur', 'montant'),
      champ('capital-restant', 'Capital restant dû', 'montant', { source: 'calcul' }),
    ],
    filtres: [
      { id: 'type', label: 'Type de dette', kind: 'multi', champ: 'sousClasse' },
      { id: 'taux', label: 'Taux', kind: 'plage', champ: 'tauxNominal' },
      { id: 'duree-restante', label: 'Durée restante', kind: 'plage', champ: 'dureeRestante' },
    ],
    onglets: [
      { id: 'apercu', label: 'Aperçu' },
      { id: 'amortissement', label: 'Tableau d’amortissement' },
      { id: 'assurance', label: 'Assurance' },
      { id: 'remboursement-anticipe', label: 'Remboursement anticipé' },
      { id: 'notes', label: 'Notes et documents' },
    ],
    sousClasses: [
      { id: 'credit-immobilier', label: 'Crédit immobilier', description: 'Prêt amortissable ou in fine, rattachable à un bien.' },
      { id: 'credit-consommation', label: 'Crédit à la consommation', description: 'Prêt personnel, crédit renouvelable.' },
      { id: 'loa-lld', label: 'Location avec option d’achat ou longue durée', description: 'Loyers à échoir.' },
      { id: 'pret-etudiant', label: 'Prêt étudiant', description: 'Avec différé éventuel.' },
      { id: 'pret-familial', label: 'Prêt familial', description: 'Somme due à un proche.' },
      { id: 'decouvert', label: 'Découvert et carte à débit différé', description: 'Encours à court terme.' },
      { id: 'dette-fiscale', label: 'Dette fiscale ou sociale', description: 'Impôts ou cotisations à payer.' },
    ],
  },
];

/** Recherche une classe par identifiant. */
export function classeParId(id: string): AssetClass | undefined {
  return TAXONOMIE.find((c) => c.id === id);
}

/** Onglets de la fiche d’une position : ceux de la classe puis ceux de la sous-classe, sans doublon. */
export function ongletsFiche(classeId: string, sousClasseId?: string): DetailTab[] {
  const classe = classeParId(classeId);
  if (!classe) throw new Error(`Classe inconnue : ${classeId}`);
  const sous = sousClasseId ? classe.sousClasses.find((s) => s.id === sousClasseId) : undefined;
  if (sousClasseId && !sous) throw new Error(`Sous-classe inconnue : ${classeId}/${sousClasseId}`);
  const result: DetailTab[] = [];
  const vus = new Set<string>();
  // Les onglets propres à la sous-classe s'insèrent juste après l'aperçu.
  const ajout = sous?.onglets ?? [];
  for (const o of classe.onglets) {
    if (!vus.has(o.id)) {
      result.push(o);
      vus.add(o.id);
    }
    if (o.id === 'apercu') {
      for (const s of ajout) {
        if (!vus.has(s.id)) {
          result.push(s);
          vus.add(s.id);
        }
      }
    }
  }
  return result;
}

/** Filtres proposés pour une classe (communs + propres à la classe). */
export function filtresClasse(classeId: string): FilterDef[] {
  const classe = classeParId(classeId);
  if (!classe) throw new Error(`Classe inconnue : ${classeId}`);
  return [...FILTRES_COMMUNS, ...classe.filtres];
}

/** Champs d’une position : ceux de la classe puis ceux de la sous-classe. */
export function champsPosition(classeId: string, sousClasseId?: string): FieldDef[] {
  const classe = classeParId(classeId);
  if (!classe) throw new Error(`Classe inconnue : ${classeId}`);
  const sous = sousClasseId ? classe.sousClasses.find((s) => s.id === sousClasseId) : undefined;
  const ids = new Set(classe.champs.map((c) => c.id));
  return [...classe.champs, ...(sous?.champs ?? []).filter((c) => !ids.has(c.id))];
}

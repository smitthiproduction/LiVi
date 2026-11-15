<!-- Fichier généré par scripts/generer-docs.ts : modifier la source, puis relancer `pnpm docs:generate`. -->

# Inventaire des maquettes Figma

Source de vérité : `docs/design/maquettes.json`. Fichier Figma : https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq. 200 maquettes ; chaque fonctionnalité du catalogue figure dans au moins une maquette (contrôlé par `pnpm docs:check`). Méthode : skill `livi-maquette-figma` et [figma.md](figma.md).

| Statut | Nombre |
|---|---|
| À concevoir | 86 |
| En cours | 0 |
| À valider | 17 |
| Validée | 97 |

## Formats

| Format | Appareil | Taille (pt) | Plateforme | Format détecté | Classe | Maquettes |
|---|---|---|---|---|---|---|
| `iphone` | iPhone 16 | 393 × 852 | ios | telephone | compacte | 123 |
| `iphone-se` | iPhone SE | 375 × 667 | ios | telephone | compacte | 2 |
| `iphone-max` | iPhone Pro Max | 430 × 932 | ios | telephone-grand | compacte | 2 |
| `iphone-paysage` | iPhone 16 paysage | 852 × 393 | ios | telephone | etendue | 1 |
| `galaxy-s` | Samsung Galaxy S | 360 × 780 | android | telephone | compacte | 3 |
| `fold-externe` | Galaxy Z Fold plié (écran externe) | 344 × 882 | android | pliable-externe-etroit | compacte | 2 |
| `passeport` | Pliable format passeport (type Pixel Fold plié) | 412 × 800 | android | pliable-passeport | compacte | 2 |
| `flip` | Galaxy Z Flip (écran intérieur) | 390 × 944 | android | pliable-clapet | compacte | 2 |
| `fold-deplie` | Galaxy Z Fold déplié | 673 × 841 | android | pliable-deplie | moyenne | 3 |
| `ipad` | iPad 11 pouces portrait | 834 × 1194 | ios | tablette | moyenne | 2 |
| `ipad-paysage` | iPad 11 pouces paysage | 1194 × 834 | ios | tablette | etendue | 4 |
| `web` | Web bureau | 1440 × 1024 | web | bureau | large | 33 |
| `web-mobile` | Web mobile | 390 × 844 | web | telephone | compacte | 1 |
| `back-office` | Back-office bureau | 1440 × 1024 | web | bureau | large | 20 |

## 01 · Entrée et compte (23)

| ID | Écran | Format | État | Fonctionnalités | Priorité | Statut | Figma |
|---|---|---|---|---|---|---|---|
| MQ-001 | Bienvenue | iPhone 16 | nominal | USR-01, USR-02, USR-03 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-5) |
| MQ-002 | Connexion : Apple, Google ou e-mail | iPhone 16 | nominal | USR-01, USR-02, USR-03 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-31) |
| MQ-003 | Connexion par e-mail : adresse | iPhone 16 | nominal | USR-03 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-57) |
| MQ-004 | Connexion par e-mail : code à usage unique | iPhone 16 | nominal | USR-03 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-83) |
| MQ-005 | Contribution anonyme : trois choix à égalité | iPhone 16 | nominal | SEC-05, SEC-06 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-109) |
| MQ-006 | Apparence et accessibilité | iPhone 16 | nominal | USR-08, FMT-06 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-135) |
| MQ-007 | Activer Face ID | iPhone 16 | nominal | USR-07 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-161) |
| MQ-008 | App verrouillée | iPhone 16 | verrouille | USR-07 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-187) |
| MQ-009 | Double authentification | iPhone 16 | nominal | SEC-04 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-213) |
| MQ-010 | Profil (depuis l'avatar) | iPhone 16 | nominal | USR-08 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-239) |
| MQ-011 | Réglages et préférences | iPhone 16 | nominal | USR-08, PAT-08 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-265) |
| MQ-012 | Appareils et sessions | iPhone 16 | nominal | USR-05 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-291) |
| MQ-013 | Méthodes de connexion et clés d'accès | iPhone 16 | nominal | USR-04, USR-06 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-317) |
| MQ-014 | Sauvegarde et synchronisation chiffrées | iPhone 16 | nominal | SEC-01, SEC-02, SEC-03 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-343) |
| MQ-015 | Confidentialité et contribution anonyme | iPhone 16 | nominal | SEC-05, SEC-07 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-369) |
| MQ-016 | Offres : Essentiel, Plus, Signature | iPhone 16 | nominal | SEC-06, BO-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-395) |
| MQ-017 | Supprimer mon compte | iPhone 16 | nominal | SEC-08 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-421) |
| MQ-018 | Signaler un problème | iPhone 16 | nominal | USR-10 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-447) |
| MQ-019 | Centre de notifications | iPhone 16 | nominal | USR-09 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-473) |
| MQ-020 | Maintenance : fonction indisponible | iPhone 16 | maintenance | BO-21 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-499) |
| MQ-021 | Tester une fonctionnalité (compte de test) | iPhone 16 | nominal | BO-22 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-525) |
| MQ-022 | Erreur : message du catalogue | iPhone 16 | erreur | BO-18 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-551) |
| MQ-023 | Widgets de l'écran d'accueil iOS | iPhone 16 | nominal | SEC-09 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=8-577) |

## 02 · Accueil et comptes (16)

| ID | Écran | Format | État | Fonctionnalités | Priorité | Statut | Figma |
|---|---|---|---|---|---|---|---|
| MQ-024 | Accueil : patrimoine net | iPhone 16 | nominal | STA-01, PAT-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-5) |
| MQ-025 | Accueil : premier lancement, aucun compte | iPhone 16 | vide | PAT-01, CPT-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-31) |
| MQ-026 | Accueil : chargement | iPhone 16 | chargement | STA-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-57) |
| MQ-027 | Accueil : mode discret | iPhone 16 | nominal | SEC-07 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-83) |
| MQ-028 | Accueil : synchronisation à vérifier | iPhone 16 | alerte | CPT-08 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-109) |
| MQ-029 | Menu Ajouter (feuille) | iPhone 16 | nominal | CPT-01, CPT-02, GES-07 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-135) |
| MQ-030 | Comptes et fraîcheur | iPhone 16 | nominal | CPT-08 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-161) |
| MQ-031 | Nouveau compte : type et enveloppe | iPhone 16 | nominal | CPT-01, PAT-04 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-187) |
| MQ-032 | Nouveau compte : solde et devise | iPhone 16 | nominal | CPT-01, PAT-08 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-213) |
| MQ-033 | Détail d'un compte | iPhone 16 | nominal | CPT-01, CPT-08 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-239) |
| MQ-034 | Importer un fichier CSV (fichier partagé) | iPhone 16 | nominal | CPT-02 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-265) |
| MQ-035 | Import : aperçu et doublons | iPhone 16 | nominal | CPT-03, CPT-04 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-291) |
| MQ-036 | Synchronisation bancaire : choisir l'établissement | iPhone 16 | nominal | CPT-06 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-317) |
| MQ-037 | Synchronisation bancaire : consentement et état | iPhone 16 | nominal | CPT-06 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-343) |
| MQ-038 | Courtier ou plateforme crypto en lecture | iPhone 16 | nominal | CPT-07 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-369) |
| MQ-039 | Relevé PDF : lecture et vérification | iPhone 16 | nominal | CPT-10, CPT-09 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=9-395) |

## 03 · Patrimoine et fiche actif (27)

| ID | Écran | Format | État | Fonctionnalités | Priorité | Statut | Figma |
|---|---|---|---|---|---|---|---|
| MQ-040 | Patrimoine : vue d'ensemble | iPhone 16 | nominal | PAT-01, ANA-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-5) |
| MQ-041 | Patrimoine : par classe d'actifs | iPhone 16 | nominal | PAT-01, FIC-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-31) |
| MQ-042 | Classe Obligations et sous-classes | iPhone 16 | nominal | PAT-02, FIC-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-57) |
| MQ-043 | Prêts et dettes | iPhone 16 | nominal | PAT-06 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-83) |
| MQ-044 | Prêt : tableau d'amortissement | iPhone 16 | nominal | PAT-06 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-109) |
| MQ-045 | Bien immobilier et estimation | iPhone 16 | nominal | PAT-05 | V2 (2028) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-135) |
| MQ-046 | Autres actifs | iPhone 16 | nominal | PAT-07 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-161) |
| MQ-047 | Objectifs d'épargne | iPhone 16 | nominal | BUD-06 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-187) |
| MQ-048 | Fiche action : aperçu | iPhone 16 | nominal | FIC-01, PAT-02, PAT-03 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-213) |
| MQ-049 | Fiche action : cours et volume | iPhone 16 | nominal | FIC-07 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-239) |
| MQ-050 | Fiche action : données par action | iPhone 16 | nominal | FIC-07 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-265) |
| MQ-051 | Fiche action : ratios | iPhone 16 | nominal | FIC-07 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-291) |
| MQ-052 | Fiche action : données financières | iPhone 16 | nominal | FIC-08 | V2 (2028) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-317) |
| MQ-053 | Fiche action : dividendes | iPhone 16 | nominal | INV-04 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-343) |
| MQ-054 | Fiche action : mes opérations | iPhone 16 | nominal | FIC-10 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-369) |
| MQ-055 | Fiche action : données tierces encadrées | iPhone 16 | nominal | FIC-09 | V2 (2028) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-395) |
| MQ-056 | Fiche ETF : composition | iPhone 16 | nominal | FIC-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-421) |
| MQ-057 | Fiche ETF : recouvrement avec mes fonds | iPhone 16 | nominal | ANA-02 | V2 (2028) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-447) |
| MQ-058 | Fiche obligation : caractéristiques | iPhone 16 | nominal | FIC-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-473) |
| MQ-059 | Fiche obligation : échéancier des coupons | iPhone 16 | nominal | FIC-01, ANA-11 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-499) |
| MQ-060 | Fiche crypto : aperçu et staking | iPhone 16 | nominal | FIC-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-525) |
| MQ-061 | Graphique plein écran en paysage | iPhone 16 paysage | nominal | FIC-02, FMT-05 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-551) |
| MQ-062 | Graphique : types et intervalles | iPhone 16 | nominal | FIC-02 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-575) |
| MQ-063 | Graphique : bibliothèque d'indicateurs | iPhone 16 | nominal | FIC-03 | V2 (2028) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-601) |
| MQ-064 | Graphique : comparer à un indice | iPhone 16 | nominal | FIC-06, INV-02 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-627) |
| MQ-065 | Ajouter une opération | iPhone 16 | nominal | CPT-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-653) |
| MQ-066 | Simulateur de seuil de revente | iPhone 16 | nominal | IA-07 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=10-679) |

## 04 · Investissements et analyse (12)

| ID | Écran | Format | État | Fonctionnalités | Priorité | Statut | Figma |
|---|---|---|---|---|---|---|---|
| MQ-067 | Performance réelle | iPhone 16 | nominal | INV-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-5) |
| MQ-068 | Exposition géographique et sectorielle | iPhone 16 | nominal | INV-03 | V2 (2028) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-31) |
| MQ-069 | Calendrier des dividendes et revenus | iPhone 16 | nominal | INV-04 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-57) |
| MQ-070 | Journal d'investissement | iPhone 16 | nominal | INV-06 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-83) |
| MQ-071 | Concentration | iPhone 16 | nominal | ANA-03 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-109) |
| MQ-072 | Contribution à la performance | iPhone 16 | nominal | ANA-04 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-135) |
| MQ-073 | Risque descriptif | iPhone 16 | nominal | ANA-05 | V2 (2028) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-161) |
| MQ-074 | Calculateur d'arbitrage vers ma cible | iPhone 16 | nominal | ANA-08 | V2 (2028) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-187) |
| MQ-075 | Plus-values par lot | iPhone 16 | nominal | ANA-09 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-213) |
| MQ-076 | Revenus passifs consolidés | iPhone 16 | nominal | ANA-10 | V2 (2028) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-239) |
| MQ-077 | Échéancier consolidé | iPhone 16 | nominal | ANA-11 | V2 (2028) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-265) |
| MQ-078 | Suivi des plafonds | iPhone 16 | nominal | FIS-05 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-291) |

## 05 · Budget et activité (19)

| ID | Écran | Format | État | Fonctionnalités | Priorité | Statut | Figma |
|---|---|---|---|---|---|---|---|
| MQ-079 | Budget du mois | iPhone 16 | nominal | BUD-04 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-320) |
| MQ-080 | Catégorie : détail et opérations | iPhone 16 | nominal | BUD-04 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-346) |
| MQ-081 | Détail d'une opération | iPhone 16 | nominal | BUD-01 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-372) |
| MQ-082 | Changer la catégorie : portée | iPhone 16 | nominal | BUD-02 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-398) |
| MQ-083 | Aperçu de propagation | iPhone 16 | nominal | BUD-02 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-424) |
| MQ-084 | Fiche enseigne | iPhone 16 | nominal | BUD-07 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-450) |
| MQ-085 | Règles personnelles | iPhone 16 | nominal | BUD-03 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-476) |
| MQ-086 | Abonnements détectés | iPhone 16 | nominal | BUD-05 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-502) |
| MQ-087 | Ventilation d'une opération | iPhone 16 | nominal | BUD-09 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-528) |
| MQ-088 | Signaler une correction d'annuaire | iPhone 16 | nominal | BUD-08 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-554) |
| MQ-089 | Activité : fil chronologique | iPhone 16 | nominal | GES-09 | MVP (juil. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-580) |
| MQ-090 | Listes de surveillance | iPhone 16 | nominal | GES-01 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-606) |
| MQ-091 | Créer une alerte de marché | iPhone 16 | nominal | GES-02 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-632) |
| MQ-092 | Alertes de patrimoine | iPhone 16 | nominal | GES-03 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-658) |
| MQ-093 | Étiquettes et groupes | iPhone 16 | nominal | GES-04 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-684) |
| MQ-094 | Opération sur titres : aperçu | iPhone 16 | nominal | GES-05 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-710) |
| MQ-095 | Transfert entre comptes | iPhone 16 | nominal | GES-07 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-736) |
| MQ-096 | Modification en masse | iPhone 16 | nominal | GES-06 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-762) |
| MQ-097 | Investissements programmés | iPhone 16 | nominal | GES-08 | V1.5 (oct. 2027) | Validée | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=11-788) |

## 06 · Recherche et marchés (17)

| ID | Écran | Format | État | Fonctionnalités | Priorité | Statut | Figma |
|---|---|---|---|---|---|---|---|
| MQ-098 | Recherche : récentes et suggestions | iPhone 16 | nominal | REC-09 | V1.5 (oct. 2027) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-5) |
| MQ-099 | Recherche : résultats | iPhone 16 | nominal | REC-01, REC-02, REC-08 | MVP (juil. 2027) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-31) |
| MQ-100 | Recherche : pastilles par type et filtres | iPhone 16 | nominal | REC-03 | V1.5 (oct. 2027) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-57) |
| MQ-101 | Filtres obligations (feuille) | iPhone 16 | nominal | REC-03 | V1.5 (oct. 2027) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-83) |
| MQ-102 | Systèmes de sélection | iPhone 16 | nominal | REC-04 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-109) |
| MQ-103 | Collections | iPhone 16 | nominal | REC-05, REC-06 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-135) |
| MQ-104 | Marchés : catalogue | iPhone 16 | nominal | REC-07, MON-08 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-161) |
| MQ-105 | Marchés : globe 3D | iPhone 16 | nominal | MON-01, MON-04 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-187) |
| MQ-106 | Marchés : carte 2D | iPhone 16 | nominal | MON-02 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-213) |
| MQ-107 | Marchés : vue liste accessible | iPhone 16 | nominal | MON-11 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-239) |
| MQ-108 | Marchés : région Europe | iPhone 16 | nominal | MON-03, MON-06 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-265) |
| MQ-109 | Fiche place ou pays | iPhone 16 | nominal | MON-05 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-291) |
| MQ-110 | Comparaison des indices | iPhone 16 | nominal | MON-07 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-317) |
| MQ-111 | Mon exposition sur la carte | iPhone 16 | nominal | MON-12 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-343) |
| MQ-112 | Actualités de mes actifs | iPhone 16 | nominal | ACT-01, ACT-02 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-369) |
| MQ-113 | Lecteur d'article | iPhone 16 | nominal | ACT-04 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-395) |
| MQ-114 | Calendrier des événements | iPhone 16 | nominal | ACT-03, MON-10 | V2 (2028) | À valider | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=12-421) |

## 07 · LiVi IA (10)

| ID | Écran | Format | État | Fonctionnalités | Priorité | Statut | Figma |
|---|---|---|---|---|---|---|---|
| MQ-115 | LiVi IA : consignes et coût du mois | iPhone 16 | nominal | IA-08 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=7-5) |
| MQ-116 | Nouvelle consigne en langage naturel | iPhone 16 | nominal | IA-02 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=7-31) |
| MQ-117 | Consigne : vérification et validation | iPhone 16 | nominal | IA-02, IA-03 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=7-57) |
| MQ-118 | Consigne déclenchée : rappel d'exécution | iPhone 16 | nominal | IA-05 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=7-83) |
| MQ-119 | Ordre préparé chez le courtier : validation | iPhone 16 | nominal | IA-04 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=7-109) |
| MQ-120 | Journal des actions de l'IA | iPhone 16 | nominal | IA-09 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=7-135) |
| MQ-121 | Assistant de lecture | iPhone 16 | nominal | IA-01 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=7-161) |
| MQ-122 | Catégorisation assistée | iPhone 16 | nominal | IA-10 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=7-187) |
| MQ-123 | Demande de conseil : réponse neutre | iPhone 16 | nominal | IA-01 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=7-213) |
| MQ-124 | Versements et arbitrages programmés | iPhone 16 | nominal | IA-06 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=7-239) |

## 08 · Autres formats (23)

| ID | Écran | Format | État | Fonctionnalités | Priorité | Statut | Figma |
|---|---|---|---|---|---|---|---|
| MQ-125 | Accueil : patrimoine net | iPhone SE | nominal | STA-01, FMT-01 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-5) |
| MQ-126 | Fiche action : aperçu | iPhone SE | nominal | FIC-01, FMT-01 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-31) |
| MQ-127 | Accueil : patrimoine net | iPhone Pro Max | nominal | STA-01, FMT-01 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-57) |
| MQ-128 | Patrimoine : vue d'ensemble | iPhone Pro Max | nominal | PAT-01, FMT-01 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-83) |
| MQ-129 | Connexion avec Google | Samsung Galaxy S | nominal | USR-02, FMT-01 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-109) |
| MQ-130 | Accueil : patrimoine net | Samsung Galaxy S | nominal | STA-01, FMT-01 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-133) |
| MQ-131 | Budget du mois | Samsung Galaxy S | nominal | BUD-04, FMT-01 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-157) |
| MQ-132 | Accueil : patrimoine net | Galaxy Z Fold plié (écran externe) | nominal | STA-01, FMT-02 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-181) |
| MQ-133 | Fiche action : aperçu | Galaxy Z Fold plié (écran externe) | nominal | FIC-01, FMT-02 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-205) |
| MQ-134 | Accueil : patrimoine net | Pliable format passeport (type Pixel Fold plié) | nominal | STA-01, FMT-02 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-229) |
| MQ-135 | Fiche action : graphique | Pliable format passeport (type Pixel Fold plié) | nominal | FIC-02, FMT-02 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-253) |
| MQ-136 | Accueil : patrimoine net | Galaxy Z Flip (écran intérieur) | nominal | STA-01, FMT-02 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-277) |
| MQ-137 | Activité : fil chronologique | Galaxy Z Flip (écran intérieur) | nominal | GES-09, FMT-02 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-301) |
| MQ-138 | Accueil : patrimoine net | Web mobile | nominal | STA-01, FMT-04 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-325) |
| MQ-139 | Patrimoine : maître-détail | iPad 11 pouces portrait | nominal | PAT-01, FMT-03 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-333) |
| MQ-140 | Budget : maître-détail | iPad 11 pouces portrait | nominal | BUD-04, FMT-03 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-357) |
| MQ-141 | Accueil : tableau de bord | iPad 11 pouces paysage | nominal | STA-01, FMT-03 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-381) |
| MQ-142 | Marchés : globe et panneau côte à côte | iPad 11 pouces paysage | nominal | MON-01, FMT-03 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-405) |
| MQ-143 | Graphique : périodes multiples | iPad 11 pouces paysage | nominal | FIC-05, FMT-03 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-429) |
| MQ-144 | LiVi IA : consignes | iPad 11 pouces paysage | nominal | IA-08, FMT-03 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-453) |
| MQ-145 | Patrimoine : maître-détail | Galaxy Z Fold déplié | nominal | PAT-01, FMT-02 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-477) |
| MQ-146 | Marchés : globe et panneau | Galaxy Z Fold déplié | nominal | MON-01, FMT-02 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-501) |
| MQ-147 | Posture table : graphique | Galaxy Z Fold déplié | nominal | FIC-02, FMT-02 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=13-525) |

## 09 · Web (33)

| ID | Écran | Format | État | Fonctionnalités | Priorité | Statut | Figma |
|---|---|---|---|---|---|---|---|
| MQ-148 | Connexion | Web bureau | nominal | USR-01, USR-02, USR-03 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-5) |
| MQ-149 | Tableau de bord | Web bureau | nominal | STA-01, FMT-04 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-101) |
| MQ-150 | Patrimoine | Web bureau | nominal | PAT-01, ANA-01 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-168) |
| MQ-151 | Patrimoine : classe Actions | Web bureau | nominal | PAT-02, FIC-01 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-235) |
| MQ-152 | Prêts et dettes | Web bureau | nominal | PAT-06 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-302) |
| MQ-153 | Comptes et fraîcheur | Web bureau | nominal | CPT-08 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-369) |
| MQ-154 | Import CSV : fichier | Web bureau | nominal | CPT-02, CPT-03 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-436) |
| MQ-155 | Import CSV : correspondance des colonnes | Web bureau | nominal | CPT-03 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-503) |
| MQ-156 | Import CSV : aperçu et doublons | Web bureau | nominal | CPT-03, CPT-04 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-570) |
| MQ-157 | Proposer un modèle CSV | Web bureau | nominal | CPT-05 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-637) |
| MQ-158 | Budget et catégories | Web bureau | nominal | BUD-04, STA-02 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-704) |
| MQ-159 | Règles personnelles | Web bureau | nominal | BUD-03 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-771) |
| MQ-160 | Fiche enseigne | Web bureau | nominal | BUD-07 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-838) |
| MQ-161 | Fiche action : aperçu et statistiques clés | Web bureau | nominal | FIC-01, FIC-07 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-905) |
| MQ-162 | Fiche action : données financières | Web bureau | nominal | FIC-08 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-972) |
| MQ-163 | Fiche ETF : composition et recouvrement | Web bureau | nominal | FIC-01, ANA-02 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1039) |
| MQ-164 | Fiche obligation | Web bureau | nominal | FIC-01 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1106) |
| MQ-165 | Espace de travail par widgets | Web bureau | nominal | FIC-11 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1173) |
| MQ-166 | Graphique : périodes multiples | Web bureau | nominal | FIC-05 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1240) |
| MQ-167 | Graphique : indicateurs et outils de dessin | Web bureau | nominal | FIC-03, FIC-04 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1307) |
| MQ-168 | Marchés : globe et panneau | Web bureau | nominal | MON-01, MON-04, MON-05 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1374) |
| MQ-169 | Marchés : carte 2D et calques | Web bureau | nominal | MON-02, MON-09 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1441) |
| MQ-170 | Marchés : Europe, indices et indicateurs | Web bureau | nominal | MON-03, MON-06, MON-07 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1508) |
| MQ-171 | Recherche ⌘K | Web bureau | nominal | REC-01, REC-02, REC-08 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1575) |
| MQ-172 | Systèmes de sélection | Web bureau | nominal | REC-04, REC-03 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1642) |
| MQ-173 | Analyse : répartition, concentration, recouvrement | Web bureau | nominal | ANA-01, ANA-02, ANA-03 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1709) |
| MQ-174 | Analyse : frais, projection, corrélations | Web bureau | nominal | INV-05, INV-07, ANA-06, ANA-07 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1776) |
| MQ-175 | Rapports PDF et rapport commenté | Web bureau | nominal | STA-03, STA-04 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1843) |
| MQ-176 | Fiscalité : plus-values, crypto, revenus | Web bureau | nominal | FIS-01, FIS-02, FIS-03, FIS-04 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1910) |
| MQ-177 | Famille et société | Web bureau | nominal | FAM-01, FAM-02, SOC-01, SOC-02 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-1977) |
| MQ-178 | Partage avec un conseiller et espace conseiller | Web bureau | nominal | B2B-01, B2B-02 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-2044) |
| MQ-179 | LiVi IA : consignes et journal | Web bureau | nominal | IA-02, IA-09 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-2111) |
| MQ-180 | Réglages : sécurité, sauvegarde, export | Web bureau | nominal | STA-05, SEC-03, PAT-09 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=14-2178) |

## 10 · Back-office (20)

| ID | Écran | Format | État | Fonctionnalités | Priorité | Statut | Figma |
|---|---|---|---|---|---|---|---|
| MQ-181 | Tableau de bord | Back-office bureau | nominal | BO-12, BO-23 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-5) |
| MQ-182 | Utilisateurs et support | Back-office bureau | nominal | BO-08 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-55) |
| MQ-183 | Offres et tarifs | Back-office bureau | nominal | BO-01, BO-10 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-105) |
| MQ-184 | Drapeaux et ajustements | Back-office bureau | nominal | BO-20 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-155) |
| MQ-185 | Maintenance et tests | Back-office bureau | nominal | BO-21, BO-22 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-205) |
| MQ-186 | Journaux techniques | Back-office bureau | nominal | BO-15 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-255) |
| MQ-187 | Erreurs et plantages | Back-office bureau | nominal | BO-17 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-305) |
| MQ-188 | Bugs et tickets | Back-office bureau | nominal | BO-19 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-355) |
| MQ-189 | Audits | Back-office bureau | nominal | BO-16, BO-13 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-405) |
| MQ-190 | Messages d'erreur | Back-office bureau | nominal | BO-18 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-455) |
| MQ-191 | Modèles CSV | Back-office bureau | nominal | BO-03 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-505) |
| MQ-192 | Annuaire des enseignes | Back-office bureau | nominal | BO-04, BO-05 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-555) |
| MQ-193 | Classes et sous-classes d'actifs | Back-office bureau | nominal | BO-26, BO-07 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-605) |
| MQ-194 | Référentiel des marchés | Back-office bureau | nominal | BO-25 | V2 (2028) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-655) |
| MQ-195 | Connecteurs | Back-office bureau | nominal | BO-06 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-705) |
| MQ-196 | Quotas et routage IA | Back-office bureau | nominal | BO-02 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-755) |
| MQ-197 | Contenus et textes légaux | Back-office bureau | nominal | BO-11 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-805) |
| MQ-198 | Conformité et consentements | Back-office bureau | nominal | BO-27, BO-09 | V1.5 (oct. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-855) |
| MQ-199 | Pilotage | Back-office bureau | nominal | BO-12, BO-24 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-905) |
| MQ-200 | Rôles et accès | Back-office bureau | nominal | BO-13, BO-14 | MVP (juil. 2027) | À concevoir | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=15-955) |


# Figma : fichier des maquettes

Fichier : **LiVi — Maquettes** — https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq (équipe « SMITTHI STUDIO's team », offre Pro). Préparé le 14 novembre 2026.

L'inventaire des 214 maquettes vit dans le dépôt (`docs/design/maquettes.json`, vue générée : [maquettes.md](maquettes.md)). Le fichier Figma contient un cadre nommé `MQ-… · écran` pour chacune, à remplir. Méthode pas à pas : skill `livi-maquette-figma`.

## Pages

| Page | Contenu |
|---|---|
| Couverture | Règles de travail, statuts |
| Fondations | Une planche par thème (Sombre, Clair, Pastel) : nuancier des 42 couleurs d'origine (`surface/knob` et `surface/scrim`, ajoutées au lot 1, n'y figurent pas encore), styles de texte, aperçu des composants |
| Composants | Planche des composants de base ([ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=6-266)) |
| Formats | 14 gabarits à dupliquer ([ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=16-910)) |
| Parcours iPhone | Les 136 écrans iPhone rangés dans l'ordre du parcours, une section par étape (01 Inscription et offres à 09 Profil et réglages) ; prototype jouable, 8 points de départ |
| 10 · Autres formats, 11 · Web, 12 · Back-office | Une section par groupe, cadres à concevoir |
| Archive | Maquettes remplacées (on déplace, on ne supprime pas) |

## Variables (sources : `packages/design-tokens/src/tokens.json`)

| Collection | Modes | Variables | Syntaxe de code |
|---|---|---|---|
| Couleurs | Sombre, Clair, Pastel | 44, rangées par groupe : `surface/`, `verre/`, `liquide/`, `texte/`, `accent/`, `etat/`, `graphique/`, `teinte/` ; le nom final est celui du jeton (`texte/ink` = `ink`) | Web `var(--lv-ink)`, iOS `c['ink']` |
| Espacements | Valeur | 9 (`espacement/space-1` à `space-14`) | `var(--lv-space-4)` |
| Rayons | Valeur | 6 (`rayon/radius-xs` à `radius-pill`) | `var(--lv-radius-lg)` |

Les alias du code sont conservés (`surface-solid`, `accent-text`, `danger`, `info`, `chart-2`, `tint-*`). Chaque variable porte l'usage du jeton en description et des portées ciblées (fond, texte, trait).

**Changer de thème** : sélectionner un cadre, panneau Apparence › mode de la collection « Couleurs ». Les maquettes mobiles et web sont en Sombre par défaut, le back-office en Clair.

## Styles

- **Texte (14)** : `Affichage/hero`, `Affichage/display-title`, `Interface/title-1`, `title-2`, `title-3`, `body`, `body-strong`, `callout`, `caption`, `overline`, `Chiffres/figure-lg`, `figure`, `figure-sm`, `Code/code`. Polices Manrope et Geist Mono.
- **Effets (12)** : `Sombre|Clair|Pastel / Carte, Verre, Flottant, Curseur` (ombres du design system ; Verre et Flottant incluent le flou d'arrière-plan de 24 et 40).

## Composants

| Composant | Variantes et propriétés | Lien |
|---|---|---|
| Icône (39) | `budget` (ajoutée lors de la revue du parcours), `Icône/chevron-droite`, `plus`, `recherche`, `cloche`, `accueil`, `patrimoine`, `marches`, `ia`, `activite`, `fleche-haut`, `fleche-bas`, `filtre`, `reglages`, `fermer`, `alerte`, `verrou` ; ajoutées au lot 1 : `chevron-gauche`, `oeil`, `oeil-barre`, `check`, `info`, `horloge`, `cle`, `telephone`, `nuage`, `utilisateur`, `aide`, `sortie`, `document`, `synchro`, `lien`, `banque`, `carte`, `maison`, `poubelle`, `envoyer`, `bouclier`, `visage` | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=4-4) |
| Bouton | Style (Principal, Secondaire, Verre, Texte, Danger) × Taille (Normal, Compact) ; Libellé, Icône visible, Icône | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=4-100) |
| Pastille | État (Inactive, Active) ; Libellé | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=4-105) |
| Variation | Sens (Hausse, Baisse, Stable), signe et flèche | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=4-112) |
| Bouton rond | Icône (échange) | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=4-113) |
| Ligne de liste | Type (Compte, Transaction, Actif) | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=5-32) |
| Carte | Titre, Lien visible ; trois lignes | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=5-33) |
| Contrôle segmenté | Périodes 1J à Tout | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=5-64) |
| Champ de recherche | Indication | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=5-79) |
| Montant héros | Variante (Standard, Baisse, Étroit, 7 chiffres, Texte agrandi) ; libellé, montant, variation, fraîcheur ; jamais tronqué | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=176-163) |
| Pastille de notification | Nombre ; fond `etat/danger`, chiffre `texte/on-accent`, rayon `radius-pill` ; posée sur la cloche (position absolue), masquée à zéro, « 99+ » au-delà | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=176-164) |
| Bandeau maintenance | Message | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=5-92) |
| Barre d'onglets | Actif (Accueil, Patrimoine, Budget, Marchés, LiVi IA) ; « Activité » renommé « Budget » lors de la revue du parcours ; onglets sans masquage du contenu, pour que les libellés ne soient jamais coupés en format étroit | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=6-159) |
| Rail de navigation | Actif (mêmes valeurs que la barre d'onglets) ; les cinq entrées à la verticale sur 72 pt, pour la classe moyenne (MQ-246, MQ-247) ; hauteur réglée à celle de l'écran sous la barre système | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=186-537) |
| Barre d'action | Ajouter une opération · Créer une consigne | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=6-160) |
| Barre système | iOS, Android ; Indicateur d'accueil | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=6-171) |
| Barre latérale web, En-tête web | Navigation web 248 px, recherche ⌘K | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=6-205) |
| Interrupteur | Activé, désactivé ; poignée `surface/knob` | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=31-203) |
| Case radio, Case à cocher | État (Cochée, Vide) | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=31-207) |
| Champ de saisie | État (Rempli, Indication, Focus, Erreur) ; Libellé, Valeur, Aide visible ; le texte d'aide passe à la ligne | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=31-233) |
| Barre de navigation | Titre, Retour visible, Action visible (icône échangeable) | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=31-234) |
| Poignée de feuille | Haut des feuilles modales ; le voile derrière utilise `surface/scrim` | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=31-245) |
| Ligne de réglage | Droite (Chevron, Interrupteur activé, Interrupteur désactivé, Radio cochée, Radio vide, Valeur) ; Titre, Sous-titre, Icône, Valeur | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=31-306) |
| Onglet | État (Actif, Inactif) ; Libellé. Rangée d'onglets de fiche défilante (FIC-01), onglet actif toujours entièrement visible | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=56-133) |
| Statistique | Libellé, Valeur ; hauteur automatique, en grille de deux colonnes dans une carte, source et date sous la carte (FIC-07) | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=56-134) |
| Légende | Libellé, Valeur, Part ; pastille liée à `graphique/chart-1` à `chart-5` (ANA-01) | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=56-137) |

Les barres système sont des gabarits génériques : le kit Apple « iOS and iPadOS » est disponible dans les bibliothèques du fichier mais demande d'accepter sa licence dans Figma avant usage.

## Règles

1. Une maquette = un cadre existant (`MQ-…`), jamais un nouveau cadre hors inventaire. Nouvel écran : l'ajouter d'abord dans `maquettes.json`.
2. Instances de composants, variables et styles uniquement ; un besoin nouveau devient un composant (agent `design-system`), puis un jeton dans `tokens.json` s'il faut une valeur nouvelle.
3. Neutralité, ton et accessibilité de `CLAUDE.md` §2 et §5 (signe et flèche sur les variations, cibles de 44 pt, contrastes vérifiés dans les trois modes).
4. Statut tenu dans `maquettes.json` (`a-faire`, `en-cours`, `a-valider`, `validee`) et sur la pastille du cadre ; `pnpm docs:generate` met à jour [maquettes.md](maquettes.md).
5. Retour en arrière : historique des versions Figma (nommer une version à chaque lot validé) et page Archive.
6. Parcours : chaque écran a une entrée et une sortie dans le prototype, et se range dans la section de son étape (`groupe` de l'inventaire).

## Prototype

- Page « Parcours iPhone », points de départ : 1 Inscription et offres, 2 Ajouter un établissement, 3 Utilisation quotidienne, 4 Patrimoine et analyses, 5 Budget, 6 Marchés, 7 LiVi IA, 8 Profil et réglages, 9 Retour et cas limites, 10 Maintenance, 11 Compte de test, 12 Widgets iOS, 13 Annonce sur l'accueil, 14 Hors ligne.
- Liens : flèche retour = « Retour » ; onglets et sous-onglets = fondu de 0,28 s (`duration-base`) vers la racine de l'onglet (depuis l'accueil vide : budget proposé et LiVi IA sans Signature) ; écran poussé = glissement depuis la droite de 0,42 s (`duration-slow`) ; plein écran des offres = montée du bas, fermeture par descente (0,42 s).
- Zones de toucher : un élément relié de moins de 44 pt (lien texte, segment, onglet de fiche, pastille, poignée, bouton compact, légende) porte son lien sur un calque transparent `ui/zone-44` qui l'entoure, posé dans le premier cadre parent assez grand, sans chevaucher un autre élément relié.
- « Réduire les animations » : annoté sur la page ; toutes les transitions deviennent des fondus de 0,28 s.
- Feuilles : animation intelligente. L'écran parent contient une copie invisible de `ui/voile` (opacité 0) et de `ui/feuille` (placée sous le cadre) ; la feuille monte en 0,42 s, le voile ou la poignée la referme. Paires : MQ-024 › MQ-029, MQ-025 › MQ-244, MQ-019 › MQ-245 (copie du voile masquée et sans interaction), MQ-036 › MQ-202 › MQ-203 › MQ-220, MQ-201 › MQ-218 et MQ-219, MQ-048 › MQ-062, MQ-081 › MQ-082, MQ-100 › MQ-101.
- Fermeture des offres : descente vers le bas. Écran de chargement (MQ-026) : passage automatique à l'accueil après 1,5 s.
- Lire le prototype : page « Parcours iPhone », bouton Présenter, choisir un point de départ.

## Lots

| Lot | Maquettes | Statut | Revue |
|---|---|---|---|
| 1 · Entrée et compte, Accueil et comptes | MQ-001 à MQ-039 (pages 01 et 02) | Validé le 15 novembre 2026, version Figma « Lot 1 validé » | Étiquettes « MQ-… · Validée » |
| 2 · Patrimoine et fiche actif | MQ-040 à MQ-066 (page 03, dont MQ-061 en paysage) | Validé le 15 novembre 2026, version Figma « Lot 2 validé » | Étiquettes « MQ-… · Validée » |
| 3 · Investissements et analyse | MQ-067 à MQ-078 (page 04) | Validé le 15 novembre 2026, version Figma « Lot 3 validé » | Étiquettes « MQ-… · Validée » |
| 4 · Budget et activité | MQ-079 à MQ-097 (page 05) | Validé le 15 novembre 2026, version Figma « Lot 4 validé » | Étiquettes « MQ-… · Validée » |
| 5 · Recherche et marchés | MQ-098 à MQ-114 (page 06) | Validé le 15 novembre 2026 ; son état est compris dans la version « Parcours iPhone revu » | Étiquettes « MQ-… · Validée » |
| 6 · LiVi IA | MQ-115 à MQ-124 (section 08) | À valider depuis le 15 novembre 2026 | Planches de revue dans les trois thèmes envoyées au porteur de projet ; étiquettes « MQ-… · À valider » |
| Ajustements d'après les audits, jour 1 (26 nov.) | Décision 0009 : offres datées et Signature non achetable avant sa sortie (MQ-201, MQ-016, MQ-203, MQ-212, MQ-218, MQ-219) ; feuilles d'achat avec « Annuler » et mentions de renouvellement ; MQ-264 (récapitulatif depuis l'annuaire), MQ-265 et MQ-266 (abonnement activé), MQ-267 et MQ-268 (Offres et abonnement pour Essentiel et Plus), MQ-269 (gérer ou résilier) ; navigation unique (barre latérale web et iPad) ; fraîcheur ancienne écrite en mots (A-05) ; noms de cadres (M-04) ; « Valider ce budget » relié ; MQ-005 « trois choix présentés à égalité » | À valider depuis le 26 novembre 2026 ; suite le 27 novembre | Rapport d'ajustement complet à la fin du jour 2 |
| Restes des audits du 20 novembre | Pastille à largeur variable (99+) ; entrées du rail de 56 pt et de la barre latérale web de 44 pt, entrée « Budget » ; avatar « CM » ; liens Conditions d'utilisation, Confidentialité et Restaurer mes achats sur MQ-201 ; titres sur deux lignes et défilement sur MQ-130 et MQ-132 ; fin de l'import de Caisse du Port (MQ-257 à MQ-259) ; Lieux et courtiers et Source des cours sur iPad (MQ-260, MQ-262) et sur le web (MQ-261, MQ-263) ; référentiel du back-office (MQ-256) | À valider depuis le 26 novembre 2026, version Figma « Restes des audits du 20 novembre » | Planches Sombre, Clair et Pastel ; test UX par personas dans `rapports-ux/` |
| Sources de cours et meilleur prix | Carte du meilleur prix sous le cours de la fiche action (MQ-048) ; MQ-254 (lieux de cotation et courtiers : tri Moins cher, Plus cher, A à Z ; courtiers par ordre alphabétique ; identifiants) ; MQ-255 (Source des cours, entrée « Source des cours » dans MQ-011) ; MQ-256 (référentiel du back-office) à concevoir | À valider depuis le 26 novembre 2026, version Figma « Sources de cours et meilleur prix » | Décision 0008 ; planches Sombre, Clair et Pastel |
| Restes de la revue | Écran Aide (MQ-250), fiches d'Horizon Vie et d'Atlas Bourse (MQ-248, MQ-249), import sans préréglage pour Caisse du Port (MQ-251 à MQ-253), « Étape 3 sur 3 » sur MQ-204, opérations du 12 et du 13 novembre sur MQ-089 (défilement vertical, barre d'onglets fixe) ; rail de navigation en composant ; couverture à 253 écrans | À valider depuis le 20 novembre 2026, version Figma « Restes de la revue » | Revue du 15 novembre, partie 3 |
| Accueil sur tous les formats | Lot 7 : accueil sur MQ-125, 127, 130, 132, 134, 136, 138 (compacts), MQ-141 (iPad paysage), MQ-149 (web) ; nouveaux cadres MQ-246 (Fold déplié) et MQ-247 (iPad portrait) ; variantes du montant héros ; pastille de non-lues sur les cloches ; annonce dans le centre de notifications (MQ-019 › MQ-245) | À valider depuis le 19 novembre 2026, version Figma « Accueil sur tous les formats » | Décision 0007 ; planches Sombre, Clair et Pastel |
| Accueil corrigé et annonces | Corrections de l'audit de l'accueil ; MQ-237 (bannière d'annonce), MQ-238 (fiche consultable), MQ-239 (hors ligne), MQ-244 (feuille Ajouter sur l'accueil vide) ; MQ-240 à MQ-243 à concevoir | À valider depuis le 19 novembre 2026, version Figma « Accueil corrigé et annonces » | Audit `docs/audit-figma/2026-11-19-accueil.md` ; décision 0006 |
| Corrections de la revue, partie 2 | MQ-236 ajouté, 43 écrans repris ; 12 cadres « à concevoir » (MQ-224 à MQ-235) ; contraste de `ink-tertiary`, espacements et rayons liés aux variables, zones de toucher de 44 pt, durées des jetons | À valider depuis le 19 novembre 2026, version Figma « Corrections de la revue, partie 2 » | Décision 0005 ; suivi dans le rapport de revue |
| Corrections de la revue, partie 1 | 9 écrans ajoutés (MQ-215 à MQ-223) et 28 repris, après la revue de l'agent `revue-maquettes` | À valider depuis le 16 novembre 2026, version Figma « Corrections de la revue, partie 1 » | Rapport : `docs/qualite/revues/2026-11-15-revue-maquettes.md` ; décisions : `parcours-utilisateur.md`, section 8 |
| Revue du parcours | 12 écrans ajoutés (MQ-201 à MQ-212) et 21 repris (dont l'accueil, l'annuaire, l'import, le budget) | À valider depuis le 15 novembre 2026, version Figma « Parcours iPhone revu » | Audit : [parcours-utilisateur.md](parcours-utilisateur.md) ; planches des écrans nouveaux ou repris dans les trois thèmes |

Contrôles faits sur chaque lot avant de le soumettre : aucun bloc « à concevoir » restant, aucun contenu sous la barre du bas ou la barre d'onglets, aucun texte tronqué, capture des trois modes. Après validation, passer les statuts à `validee`, changer les étiquettes et nommer une version Figma « Lot N validé » (menu Fichier › Enregistrer dans l'historique des versions : l'API des plugins ne permet pas de le faire).

Données fictives communes aux lots : patrimoine net 184 320,57 € = 384 108,13 € d'actifs (vue détaillée, supports d'assurance vie rangés dans leur classe) moins 199 787,56 € de dettes (crédit immobilier 192 740,59 €, prêt auto 7 046,97 €, calculés à partir des conditions saisies au 15 novembre 2026). Placements (lot 3) : 103 245,03 € en 9 lignes (PEA 38 920,15 €, Horizon Vie 61 204,88 €, crypto 3 120,00 €), gain de 7 812,40 € sur 1 an. Budget de novembre (lot 4) : 1 240,00 € dépensés sur 1 800,00 € au 15 novembre, enseignes fictives (Marché Plein Ciel, Brico Rivage, Maison Bleue, Café Lumière). Marchés (lot 5) : séance du vendredi 13 novembre, places fermées le dimanche 15 ; globe et carte 2D en points, à partir de contours simplifiés des continents (dessinés à la main, sans données cartographiques tierces). LiVi IA (lot 6) : 112 crédits utilisés sur 400 inclus en novembre (1 crédit = 0,01 €, valeurs réglables en back-office), consignes écrites par Camille (ETF Monde 300 € le 12, comme l'investissement programmé du lot 4 ; vente de la moitié de ses ETH sous 2 600 € ; versement de 150 € sur Horizon Vie le 15 ; cible 60/40 sur Horizon Vie), plateforme crypto fictive Valcrypto. Bulles de conversation, zone de saisie et champ de question sont construits avec les variables, sans nouveau composant. Revue du parcours : 12 comptes répartis par établissement (Banque Rivière : compte courant, livret A, crédit immobilier ; Atlas Bourse : PEA ; Horizon Vie ; Valcrypto ; Toits Partagés ; Crédit du Littoral : prêt auto ; biens saisis à la main pour 269 120,00 €) ; offre de Camille : Signature ; import de démonstration de 8 412 lignes (2 janv. 2019 au 31 oct. 2026), 8 409 opérations importées ; budget : « Shopping et vêtements » devient « Énergie et eau » (44,00 € sur 200 €) et le transport passe à 280 €, totaux inchangés. Corrections du 16 novembre : Banque Rivière affichée à −183 608,07 € (comptes 9 132,52 €, crédit −192 740,59 €) ; import de démonstration : 3 doublons proposés, 2 écartés, 8 410 opérations importées sur 7 ans et 10 mois ; budget proposé en Essentiel en 5 enveloppes (dont « Autres dépenses » 570 €). Corrections du 19 novembre : valeurs égales à quantité × cours (Lumière Industries 35 × 177,44 € = 6 210,40 €, plus-value 428,40 € ; ETF Monde 142 × 150,28 € = 21 339,76 € ; liquidités du PEA 2 457,59 €, total du PEA inchangé) ; or : 4 napoléons à 480,00 € la pièce ; obligation au cours du 13 nov. : 4 854,32 € (le relevé Horizon Vie du 30 sept. reste à 4 854,48 €) ; exemple de saisie manuelle : compte courant Banque Rivière de 4 812,40 € (MQ-032 › MQ-236). Accueil : « 1 valeur ancienne » (Horizon Vie, relevé du 30 sept.) ; annonce de démonstration « Bien démarrer avec LiVi », rencontre en ligne le jeudi 3 décembre 2026 à 18 h, dans le scénario où l'accès de Banque Rivière a été renouvelé (aucune alerte). Tout nouveau lot reprend ces chiffres.

## Relier Figma et le code

- **Serveur MCP Figma** déclaré dans `.mcp.json` à la racine du dépôt : un agent peut lire et modifier le fichier (connexion Figma demandée au premier usage).
- **Code Connect** (lien composant Figma ↔ composant React) demande une offre Organisation ou Entreprise ; non disponible avec l'offre Pro actuelle.
- Gabarits de formats contrôlés par `apps/mobile/test/formats-maquettes.test.ts` : chaque taille de gabarit donne le format et la classe attendus par `detecterFormat`.

# Figma : fichier des maquettes

Fichier : **LiVi — Maquettes** — https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq (équipe « SMITTHI STUDIO's team », offre Pro). Préparé le 14 novembre 2026.

L'inventaire des 200 maquettes vit dans le dépôt (`docs/design/maquettes.json`, vue générée : [maquettes.md](maquettes.md)). Le fichier Figma contient un cadre nommé `MQ-… · écran` pour chacune, à remplir. Méthode pas à pas : skill `livi-maquette-figma`.

## Pages

| Page | Contenu |
|---|---|
| Couverture | Règles de travail, statuts |
| Fondations | Une planche par thème (Sombre, Clair, Pastel) : nuancier des 42 couleurs d'origine (`surface/knob` et `surface/scrim`, ajoutées au lot 1, n'y figurent pas encore), styles de texte, aperçu des composants |
| Composants | Planche des composants de base ([ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=6-266)) |
| Formats | 14 gabarits à dupliquer ([ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=16-910)) |
| 01 à 10 | Une section par groupe de l'inventaire, cadres `MQ-001` à `MQ-200` |
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
| Icône (38) | `Icône/chevron-droite`, `plus`, `recherche`, `cloche`, `accueil`, `patrimoine`, `marches`, `ia`, `activite`, `fleche-haut`, `fleche-bas`, `filtre`, `reglages`, `fermer`, `alerte`, `verrou` ; ajoutées au lot 1 : `chevron-gauche`, `oeil`, `oeil-barre`, `check`, `info`, `horloge`, `cle`, `telephone`, `nuage`, `utilisateur`, `aide`, `sortie`, `document`, `synchro`, `lien`, `banque`, `carte`, `maison`, `poubelle`, `envoyer`, `bouclier`, `visage` | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=4-4) |
| Bouton | Style (Principal, Secondaire, Verre, Texte, Danger) × Taille (Normal, Compact) ; Libellé, Icône visible, Icône | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=4-100) |
| Pastille | État (Inactive, Active) ; Libellé | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=4-105) |
| Variation | Sens (Hausse, Baisse, Stable), signe et flèche | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=4-112) |
| Bouton rond | Icône (échange) | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=4-113) |
| Ligne de liste | Type (Compte, Transaction, Actif) | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=5-32) |
| Carte | Titre, Lien visible ; trois lignes | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=5-33) |
| Contrôle segmenté | Périodes 1J à Tout | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=5-64) |
| Champ de recherche | Indication | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=5-79) |
| Montant héros | Libellé, montant, variation, fraîcheur | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=5-84) |
| Bandeau maintenance | Message | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=5-92) |
| Barre d'onglets | Actif (Accueil, Patrimoine, Marchés, LiVi IA, Activité) | [ouvrir](https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq?node-id=6-159) |
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

## Lots

| Lot | Maquettes | Statut | Revue |
|---|---|---|---|
| 1 · Entrée et compte, Accueil et comptes | MQ-001 à MQ-039 (pages 01 et 02) | Validé le 15 novembre 2026, version Figma « Lot 1 validé » | Étiquettes « MQ-… · Validée » |
| 2 · Patrimoine et fiche actif | MQ-040 à MQ-066 (page 03, dont MQ-061 en paysage) | Validé le 15 novembre 2026, version Figma « Lot 2 validé » | Étiquettes « MQ-… · Validée » |
| 3 · Investissements et analyse | MQ-067 à MQ-078 (page 04) | Validé le 15 novembre 2026, version Figma « Lot 3 validé » | Étiquettes « MQ-… · Validée » |
| 4 · Budget et activité | MQ-079 à MQ-097 (page 05) | Validé le 15 novembre 2026, version Figma « Lot 4 validé » | Étiquettes « MQ-… · Validée » |
| 5 · Recherche et marchés | MQ-098 à MQ-114 (page 06) | À valider depuis le 15 novembre 2026 | Planches de revue dans les trois thèmes envoyées au porteur de projet ; étiquettes « MQ-… · À valider » |

Contrôles faits sur chaque lot avant de le soumettre : aucun bloc « à concevoir » restant, aucun contenu sous la barre du bas ou la barre d'onglets, aucun texte tronqué, capture des trois modes. Après validation, passer les statuts à `validee`, changer les étiquettes et nommer une version Figma « Lot N validé » (menu Fichier › Enregistrer dans l'historique des versions : l'API des plugins ne permet pas de le faire).

Données fictives communes aux lots : patrimoine net 184 320,57 € = 384 108,13 € d'actifs (vue détaillée, supports d'assurance vie rangés dans leur classe) moins 199 787,56 € de dettes (crédit immobilier 192 740,59 €, prêt auto 7 046,97 €, calculés à partir des conditions saisies au 15 novembre 2026). Placements (lot 3) : 103 245,03 € en 9 lignes (PEA 38 920,15 €, Horizon Vie 61 204,88 €, crypto 3 120,00 €), gain de 7 812,40 € sur 1 an. Budget de novembre (lot 4) : 1 240,00 € dépensés sur 1 800,00 € au 15 novembre, enseignes fictives (Marché Plein Ciel, Brico Rivage, Maison Bleue, Café Lumière). Marchés (lot 5) : séance du vendredi 13 novembre, places fermées le dimanche 15 ; globe et carte 2D en points, à partir de contours simplifiés des continents (dessinés à la main, sans données cartographiques tierces). Tout nouveau lot reprend ces chiffres.

## Relier Figma et le code

- **Serveur MCP Figma** déclaré dans `.mcp.json` à la racine du dépôt : un agent peut lire et modifier le fichier (connexion Figma demandée au premier usage).
- **Code Connect** (lien composant Figma ↔ composant React) demande une offre Organisation ou Entreprise ; non disponible avec l'offre Pro actuelle.
- Gabarits de formats contrôlés par `apps/mobile/test/formats-maquettes.test.ts` : chaque taille de gabarit donne le format et la classe attendus par `detecterFormat`.

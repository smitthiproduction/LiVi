# Maquettes : lots, parcours et revues (14 au 26 novembre 2026)

_Ajout : 2026-11-26 07:10 (Europe/Paris). État Figma non vérifié directement le 26 nov. (aucun outil Figma appelé, sur consigne). Tout ce qui suit vient du dépôt._

## 1. Origine
- Fichier Figma « LiVi — Maquettes » : https://www.figma.com/design/cR7EtAZKpKCkgOoEqcJ8Wq (`docs/suivi/journal.md`, ligne 102).
- Source unique : `docs/design/maquettes.json` ; guide : `docs/design/figma.md` (chapitres Pages ligne 7, Composants ligne 36, Prototype ligne 78, Lots ligne 88).
- Maquettes antérieures (21 écrans, artefact https://claude.ai/artifact/2JwSn4myZHNdof24VFEMYx, titre « LiVi — Écrans mobile, web et admin ») et design system (https://claude.ai/artifact/WXAbZ6Zdqy8tcwMUtw31AX) : existence vérifiée le 26 nov., contenu non lu.

## 2. Chronologie
| Date | Événement | Inventaire | Commit |
|---|---|---|---|
| 2026-11-14 | Fichier Figma, 200 cadres | 200 | c92f433 |
| 2026-11-15 04:54 à 08:43 | Lots 1 à 5 dessinés et validés un par un ; lot 6 (LiVi IA) à valider | 200 | 30347f2 à 98743a6 |
| 2026-11-15 21:54 | Parcours iPhone revu, 12 écrans ajoutés, 21 repris (repassés à valider) | 214 | 5f612f1 |
| 2026-11-15 23:29 | Revue par l'agent `revue-maquettes` : 60 constats, 12 bloquants | 214 | ed80505 |
| 2026-11-16 | Corrections partie 1 : 9 écrans, 28 repris | 223 | 2ee3f8d |
| 2026-11-19 | Corrections partie 2, décision 0005 | 236 | bce14c7 |
| 2026-11-19 | Audit de l'accueil, puis annonces (0006), puis tous formats et notifications (0007) | 247 | 2d4e94e, 1ba7668, 46863e9 |
| 2026-11-20 | Restes de la revue ; audits « Figma UX & Spec Auditor » et « simulation à 5 personas » | 253 | f2d1b15 |
| 2026-11-26 | Sources de cours (MQ-254 à MQ-256), décision 0008 | 256 | 8365dca |

## 3. Statuts au 26 novembre 2026 (comptés dans `maquettes.json`)
57 validées, 113 à valider, 86 à faire ; 256 au total. Figma : 254 cadres selon `docs/suivi/etat-du-projet.md` (MQ-213 et MQ-214 sans cadre).

Les lots 1 à 5 validés le 15 novembre (MQ-001 à MQ-114) ne sont plus tous validés : les reprises successives les ont repassés à « à valider ». C'est le fonctionnement voulu, mais le porteur doit revalider.

## 4. Rapports ouverts
- `docs/audit-figma/2026-11-20-formats-notifications-restes.md` : 0 bloquant, 13 importants, 20 améliorations, corrections reportées (quota Figma).
- `docs/qualite/revues/2026-11-20-simulation-ux-5-personas.md` (ligne 12 : 65 annotations, 2 bloquantes ; ligne 31 : l'écran des offres MQ-201 vend des fonctions absentes du MVP).
- Le dossier `rapports-ux/` demandé par l'ordre du 26 novembre 07:04 n'existe pas encore.

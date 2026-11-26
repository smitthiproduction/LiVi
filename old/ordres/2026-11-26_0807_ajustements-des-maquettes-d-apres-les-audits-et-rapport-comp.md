# Ordre : Ajustements des maquettes d'après les audits et rapport complet

- Reçu le : 2026-11-26T07:07:40.352Z
- Statut : en cours

## Texte de l'ordre

continue l'ensemble de tes taches et apres : effectue l'ensemble des modification/ajustement necessaires en consultant les audits et documents md et creer moi un rapport complet d'ajustement et de mise a jour des maquettes. Réponses : offres = dater chaque fonction (Dès octobre 2027, En 2028), trois offres à égalité, Signature non achetable avant sa sortie ; navigation = ordre des onglets partout (Accueil, Patrimoine, Budget, Marchés, LiVi IA), Accueil aussi sur le web, Import et Rapports en plus sur le web, profil et réglages par l'avatar ; rythme = prioriser aujourd'hui (quota Figma), reprise programmée demain, puis rapport complet.

## Interprétation

- Ce qui sera fait : les ajustements des maquettes que demandent les audits et rapports en Markdown (audit Figma du 20 nov., simulation à cinq personas du 20 nov., tests UX du 26 nov. et leur synthèse, chronique), en deux jours à cause du quota Figma ; spécification et code alignés quand l'ajustement le demande ; un rapport complet d'ajustement et de mise à jour des maquettes à la fin.
- Ce qui ne sera pas fait : les arbitrages de business plan et de calendrier (chronique E-02, E-03, E-05) ; les écrans V2 (Famille, Société) au-delà de leur datation.
- Points à valider avec le porteur de projet : réponses du 26 nov. (fonctions datées, navigation unique, deux jours) ; reste à valider les écrans ajoutés.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Jour 1 : offres datées, parcours d'achat iPhone, navigation unique, petites corrections | `design-system`, `frontend-web`, `mobile-ios` | Décision 0009, USR-14, MQ-264 à MQ-269, code de navigation, trois thèmes |
| Jour 2 : web, saisie à la main, budget, notifications, Aide, nombres, texte agrandi | `design-system` | Constats restants des audits traités ou justifiés |
| Rapport complet d'ajustement | `documentaliste` | Rapport sourcé, chaque constat avec son état |

## Fichiers archivés avant modification

- `old/versions/2026-11-26_0807/docs/design/maquettes.json`
- `old/versions/2026-11-26_0807/docs/design/figma.md`
- `old/versions/2026-11-26_0807/docs/produit/navigation.md`
- `old/versions/2026-11-26_0807/docs/design/responsive-et-formats.md`
- `old/versions/2026-11-26_0807/docs/produit/catalogue.json`
- `old/versions/2026-11-26_0807/docs/suivi/etat-du-projet.md`

## Résultat

- Jour 1 (PR n° 38) : décision 0009, USR-14, MQ-264 à MQ-269, navigation unique (maquettes et code), petites corrections.
- Jour 2, avancé au même jour à la demande du porteur (8 h 44) : MQ-224, MQ-232, MQ-270 à MQ-276, espaces des nombres, notifications, Aide, Horizon Vie, étiquettes et compteurs ; reprise programmée du 27 novembre annulée.
- Rapport complet : `docs/design/rapports/2026-11-26-ajustements-maquettes.md` (154 constats : 40 faits, 24 en partie, 72 reportés, 16 décisions du porteur, 2 sans objet).
- Vérifications : trois thèmes, docs cohérentes, 69 tests, intégration continue. Versions Figma « jour 1 » et « jour 2 ».
- Écarts : la séparation pro et perso sans option n'est pas au catalogue, laissée au porteur ; les écrans en texte agrandi sont des vérifications de mise en page, pas des composants.

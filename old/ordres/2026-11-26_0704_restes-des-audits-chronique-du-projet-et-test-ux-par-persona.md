# Ordre : Restes des audits, chronique du projet et test UX par personas

- Reçu le : 2026-11-26T06:04:58.704Z
- Statut : en cours

## Texte de l'ordre

continue le rreste et en plus lance l'agent : (name: Project Context & Chronicle Agent ; model claude-opus-5-5, effort low ; description : Agent qui contextualise un projet en début de parcours, vérifie et source tous les documents/éléments, et tient à jour un rapport chronologique en Markdown (index principal ≤500 lignes + fichiers datés par dossier). system : Tu es un agent de contextualisation et de mémoire de projet. Réponds dans la langue de l'utilisateur (français par défaut). Au début d'un projet : inspecte tous les éléments disponibles (fichiers, documents, mémoire, images, maquettes Figma, fichiers .h2d, sites référencés) avec tes outils. Pour chacun, vérifie l'authenticité et la source, indique l'origine, la date de création/modification, son utilité pour le projet et ses liens avec les autres éléments. Contrôle via web_search/web_fetch si les sources externes sont toujours d'actualité ; sinon signale qu'une recherche approfondie est nécessaire. Ne jamais inventer une source : marque « non vérifié » si besoin. Produis un rapport principal REPORT.md (500 lignes max) : chapitres, titres et sous-titres numérotés, sources détaillées, résumé des modifications et décisions (chemin pris, ajustements), avec renvois précis (fichier, chapitre, ligne) pour qu'une IA retrouve vite l'information. Détaille chaque évolution dans des fichiers .md datés (YYYY-MM-DD) rangés par dossier/sous-dossier ; le principal pointe vers eux. Au fil des échanges, enrichis le rapport en horodatant chaque ajout/modification (date et heure). Vérifie la cohérence logique, corrige les erreurs, consolide et précise la stratégie en la rapprochant du marché réel visé. Signale tout écart ou contradiction. N'écrase jamais l'historique : ajoute-le.)

et lance aussi cette commande : Lance le test UX de la maquette Figma : [LIEN FIGMA].
1. Si le dossier rapports-ux/ n'existe pas, crée-le avec _personas/, _index.md et _synthese.md.
2. Lis _index.md pour connaître les objectifs déjà testés. Pour chaque persona, garde l'objectif par défaut s'il n'a pas été utilisé ; sinon invente-en un nouveau, différent.
3. Lance ux-persona-tester une fois par persona, chacune dans une instance séparée. Ne donne à chaque instance que : sa fiche, son objectif, le lien Figma et le chemin de son rapport. Ne lui donne ni les autres rapports ni le contenu de l'index.
4. Quand les 5 sont terminés, lance ux-report-auditor sur rapports-ux/.
5. Fais-moi un résumé : problèmes communs, problèmes bloquants, et rapports à relancer si l'auditeur a trouvé des redites.
Ne modifie rien dans Figma pour cette commande.

## Interprétation

- Ce qui sera fait : « le reste » = corrections objectives des audits du 20 nov. (pastille, cibles de 44 pt du rail et de la barre latérale, troncatures en format étroit, avatar du web, liens obligatoires de l'écran des offres, fin de l'import de Caisse du Port), formats moyen et étendu de Lieux et courtiers et de Source des cours, écran du back-office MQ-256 ; chronique du projet par l'agent « Project Context & Chronicle Agent » (définition de la Claude Console, Opus, effort faible) dans `docs/chronique/` ; test UX de « LiVi — Maquettes » par cinq personas clients (agent « UX Persona Tester », Fable, effort élevé), puis « UX Report Auditor », dans `rapports-ux/`.
- Ce qui ne sera pas fait : aucune modification de Figma par le test UX ; pas d'arbitrage à la place du porteur (ordre de la navigation, contenu du centre de notifications, écran des offres face au MVP, calendrier et business plan).
- Points à valider avec le porteur de projet : maquette du test (« [LIEN FIGMA] » laissé dans la commande) : réponse « LiVi — Maquettes » ; ordre : corrections puis test (réponse du porteur) ; personas et objectifs par défaut créés pour LiVi (achat = offre ou option).

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Corrections Figma des audits du 20 nov. | `design-system` | A-02, A-03, A-06, A-09, A-13 et liens de MQ-201 corrigés, vérifiés en Sombre, Clair, Pastel |
| Formats et back-office | `design-system` | MQ-260 à MQ-263 et MQ-256 dessinés, reliés, inscrits à l'inventaire |
| Chronique | agent « Project Context & Chronicle Agent » | `docs/chronique/REPORT.md` (500 lignes au plus) et fichiers datés |
| Test UX | agents « UX Persona Tester » (5 instances séparées) puis « UX Report Auditor » | 5 rapports, `_index.md` et `_synthese.md` à jour |
| Docs et livraison | `documentaliste` | CHANGELOG, journal, état du projet, PR fusionnée |

## Fichiers archivés avant modification

- `old/versions/2026-11-26_0704/docs/design/maquettes.json`
- `old/versions/2026-11-26_0704/docs/design/figma.md`
- `old/versions/2026-11-26_0704/docs/suivi/etat-du-projet.md`
- `old/versions/2026-11-26_0704/docs/audit-figma/2026-11-20-formats-notifications-restes.md`

## Résultat

_À compléter après livraison, le jour même : commits, fichiers créés ou modifiés, tests, écarts par rapport au plan._

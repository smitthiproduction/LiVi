# Ordre : Sources de cours au choix, meilleur prix et registre des identifiants

- Reçu le : 2026-11-26T05:10:40.082Z
- Statut : livré le 26 novembre 2026 (maquettes à valider)

## Texte de l'ordre

Je veux que les trackers en direct puisse etre choisi par l'utilisateur entre google finance, yahoo finance ou autres trackers avec pour defaut "le meilleur prix" comme pour traderepublic avec affichage endessous du prix le trackers/market data utilisé pour voir chaque actifs lié à son isin et ses informations. celà demandera qu'un registre en interne recupere l'ensemble des isin, tracker code etc.. repertorié pour chaque market data de la liste permettant de savoir pour chaque possibilité l'usage et la possibilité de voir les plus chers, moins cher et savoir sur quel application acheter via quoi (nasdaq,  turquoise ou autres... ). Pièce jointe : liste des places de marché et de leurs offres de données (PDF, 9 pages). Réponses du porteur : Google Finance et Yahoo Finance proposés comme sources sous réserve de licence (désactivés sans contrat) ; meilleur prix d'achat et de vente sur la fiche, patrimoine valorisé au cours de la place principale, en rappelant qu'aucun achat n'est possible dans LiVi au début (réglementation) ; pour chaque place, prix, écart, fraîcheur et courtiers qui y donnent accès d'après leur politique d'exécution, tri par prix ou alphabétique, liens d'affiliation égaux pour chaque courtier, sans mise en avant ; livrer l'ensemble (spécification, registre et logique, back-office, maquettes).

## Interprétation

- Ce qui sera fait : choix de la source des cours avec « Meilleur prix » par défaut ; sous le prix, le meilleur prix d'achat et de vente, les lieux retenus et la source ; comparatif des lieux de cotation (prix d'achat et de vente, écart, tri par prix ou par nom) et des courtiers qui y donnent accès d'après leur politique d'exécution ; registre interne des identifiants (ISIN, FIGI, MIC, mnémoniques, codes par source) tenu au back-office ; logique testée dans `packages/market-data` ; maquettes Figma.
- Ce qui ne sera pas fait : aucun achat, aucune vente ni aucun ordre dans LiVi (réponse du porteur : « aucun achat de cours n'est possible sur LiVi au début ») ; aucune donnée de Google Finance ni de Yahoo Finance tant qu'aucune licence n'est signée (listées « Sous réserve de licence », désactivées) ; aucune source affichée sans contrat ; liens d'affiliation désactivés jusqu'à l'avis juridique.
- Points à valider avec le porteur de projet : exception d'affiliation de la décision 0008 ; source recommandée pour le meilleur prix (EuroCTP) et contrats à négocier ; priorités proposées (registre BO-07 au MVP, FIC-12 à FIC-14 et BO-30 en V1.5) ; maquettes MQ-048, MQ-254 et MQ-255.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Conformité (neutralité, licences, affiliation, MiCA) | `conformite` | Aucun conseil ni ordre ; sources sans licence désactivées ; affiliation égale, tout ou rien, désactivée ; décision 0008 |
| Spécification | `chef-de-projet` | FIC-12, FIC-13, FIC-14, BO-30 au catalogue, BO-07 réécrit, docs générées |
| Registre et logique | `donnees-marches` | Lieux (MIC), sources et licences, registre ISIN, meilleur prix, comparatif, courtiers ; tests verts |
| Back-office | `back-office` | Section « Référentiel d'actifs et sources de cours », permissions `referentiel.modifier` et `affiliation.activer` testées |
| Maquettes | `design-system` | MQ-048 complété, MQ-254, MQ-255, MQ-256 ; liens du prototype ; trois thèmes |
| Docs et livraison | `documentaliste` | CHANGELOG, journal, état du projet, figma.md, `pnpm verifier` vert, PR fusionnée |

## Fichiers archivés avant modification

- `old/versions/2026-11-26_0610/packages/market-data/src/fournisseurs.ts`
- `old/versions/2026-11-26_0610/docs/reglementation/donnees-tierces-et-licences.md`
- `old/versions/2026-11-26_0610/docs/produit/catalogue.json`
- `old/versions/2026-11-26_0610/docs/design/maquettes.json`
- Règles et docs modifiées (copies de la version de `main`) : `CLAUDE.md`, `.claude/agents/conformite.md`, `.claude/agents/frontend-web.md`, `.claude/skills/livi-conformite/SKILL.md`, `docs/reglementation/README.md`, `docs/produit/fonctionnalites/13-fiche-actif-et-graphiques.md`, `docs/exploitation/back-office.md`, `docs/design/figma.md`, `docs/suivi/etat-du-projet.md`, `apps/admin/src/lib/roles.ts`

## Résultat

- Code : `packages/market-data/src/lieux.ts` (22 lieux, MIC ISO 10383), `sources.ts` (16 sources, toutes « à négocier » sauf Google Finance et Yahoo Finance « sous réserve »), `registre.ts` (ISIN contrôlé, anomalies), `meilleur-prix.ts` (`meilleurPrix`, `comparatifLieux`, `coursDeValorisation`), `courtiers.ts` (`courtiersPourLieu`, mention commerciale) ; `packages/market-data/test/sources-cours.test.ts` (11 tests). `fournisseurs.ts` inchangé.
- Back-office : `apps/admin/src/app/referentiel/page.tsx`, entrée de navigation, permissions `referentiel.modifier` (administrateur, contenu) et `affiliation.activer` (conformité), test.
- Spécification : FIC-12, FIC-13, FIC-14, BO-30 (V1.5), BO-07, BO-10 et PAT-03 repris ; décision 0008 ; `donnees-tierces-et-licences.md`, `13-fiche-actif-et-graphiques.md`, `navigation.md`, `back-office.md`, règles d'affiliation (README de la réglementation, skill et agents).
- Figma : MQ-048 (`10:213`), MQ-254 (`206:10363`), MQ-255 (`206:9588`), entrée dans MQ-011 (`8:265`), MQ-256 (`206:10910`) ; planches Clair et Pastel contrôlées ; version « Sources de cours et meilleur prix ».
- Tests : 43 paquets et 26 applications, tous verts ; `verifier-docs` : cohérent (181 fonctionnalités, 256 maquettes).
- Écarts : le comparatif liste les courtiers dans une section unique avec les lieux de chacun, plutôt que sous chaque lieu (plus lisible sur iPhone) ; pas de bouton « Utiliser ce lieu pour cet actif » : la ligne « Source pour cet actif » ouvre le réglage pour cet actif seulement.

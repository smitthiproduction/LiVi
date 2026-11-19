# Ordre : Accueil sur tous les formats, variantes du montant et centre de notifications au MVP

- Reçu le : 2026-11-19T20:21:28.108Z
- Statut : livré le 19 novembre 2026 (maquettes à valider)

## Texte de l'ordre

Message du porteur de projet (19 novembre 2026, 21:19) : « Ce qui reste, vas-y : l'accueil sur tablette, pliable et web (lot 7) ; les variantes du montant : baisse, format étroit, 7 chiffres, texte agrandi ; la cloche : elle est visible dès la première version, alors que le centre de notifications est prévu pour plus tard. Comme les annonces s'y retrouvent, je propose de l'avancer à la première version. »

## Interprétation

- Ce qui sera fait : l'accueil dessiné sur tous les formats de l'inventaire (compacts, iPad portrait et paysage, Fold déplié, web), avec deux cadres nouveaux pour la classe moyenne (MQ-246, MQ-247) ; les variantes Baisse, Étroit, 7 chiffres et Texte agrandi du composant Montant héros ; le centre de notifications (USR-09) avancé au MVP, une pastille de non-lues sur la cloche et l'annonce rouverte depuis les notifications (MQ-245).
- Ce qui ne sera pas fait : les autres écrans de la page « Autres formats » (fiches, budget, marchés, LiVi IA) ; le prototype des autres formats (le parcours jouable reste l'iPhone) ; les annonces restent en V1.5 avec l'éditeur promotionnel.
- Points à valider avec le porteur de projet : rail de 72 pt en classe moyenne (iPad portrait, pliable déplié) à la place de la barre latérale de 248 pt ; deux colonnes en iPad paysage et sur le web.

## Plan

| Lot | Agent | Critère d'acceptation |
|---|---|---|
| Cloche et notifications | `design-system`, `documentaliste` | USR-09 au MVP, décision 0007, pastille sur toutes les cloches, MQ-019 › MQ-245 jouable avec retour |
| Montant héros | `design-system` | Cinq variantes, aucune troncature, signe et flèche en baisse |
| Accueil compact | `design-system` | Sept cadres sans bloc « à concevoir », rien sous la barre d'onglets, marges de 12 pt sous 360 pt |
| Accueil moyen, étendu, web | `design-system`, `mobile-ios` | MQ-141, MQ-149, MQ-246, MQ-247 ; navigation conforme à `disposition()` |
| Vérification et livraison | `qa-tests`, `documentaliste` | Planches des trois thèmes, `docs:check`, tests, PR fusionnée, version Figma |

## Fichiers archivés avant modification

- `old/versions/2026-11-19_2121/docs/design/maquettes.json`
- `old/versions/2026-11-19_2121/docs/produit/catalogue.json`

## Résultat

- Figma : accueil sur MQ-125, 127, 130, 132, 134, 136, 138, 141, 149 ; MQ-245 (`176:9139`), MQ-246 (`179:3562`), MQ-247 (`179:3714`) ; `Montant héros` en ensemble de cinq variantes (`176:163`) ; `Pastille de notification` (`176:164`) ; onglets de la barre d'onglets sans masquage ; version « Accueil sur tous les formats ».
- Dépôt : `maquettes.json` (247 maquettes ; 57 validées, 105 à valider, 85 à faire), `catalogue.json` (USR-09 au MVP ; USR-12 et BO-29 en V1.5), décision 0007, `responsive-et-formats.md`, `navigation.md`, `figma.md`, `parcours-utilisateur.md` §10, rapport d'audit de l'accueil (A-08, M-06, M-08 traités), `formats.ts` et `BarreLaterale` (rail de 72 pt), tests.
- Tests : paquets et applications verts ; `docs:check` vert.
- Écarts : le quota quotidien du serveur MCP Figma a été atteint avant les captures Clair et Pastel ; contrôle de ces thèmes fait dans le navigateur. Restent pour la prochaine séance Figma : faire du rail un composant (calque détaché dans MQ-246 et MQ-247), passer la couverture à 247 écrans, relancer le contrôle des liens du prototype.

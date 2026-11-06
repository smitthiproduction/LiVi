# Architecture : vue d'ensemble

```
apps/mobile (Expo, iOS puis Android) ─┐
apps/web (Next.js)                    ├── packages/core · asset-classes · market-data · design-tokens · ui-web
apps/admin (Next.js, back-office)     ┘
          │ HTTPS (jetons de session)
apps/api (Fastify, Prisma, PostgreSQL, Redis)
          ├── Agrégateur bancaire agréé (DSP2) ── relais sans conservation
          ├── API courtiers et plateformes crypto (lecture)
          ├── Fournisseurs de données de marché, macro, actualités (sous licence)
          ├── API Claude (passerelle LiVi IA, quotas)
          ├── Paiements (App Store, Stripe)
          └── Supervision (journaux, erreurs, santé)
```

## Principes
1. **Local d'abord** : transactions, positions et soldes vivent sur l'appareil (SQLite chiffré). Le serveur ne garde que des blobs chiffrés de bout en bout pour la sauvegarde et la synchronisation entre appareils.
2. **Un cœur de calcul partagé** : `packages/core` sert le mobile, le web et l'API ; les mêmes chiffres partout.
3. **Référentiels pilotés par les données** : classification des actifs, modèles CSV, annuaire, marchés, messages d'erreur, drapeaux ; modifiables en back-office sans nouvelle version d'app.
4. **Hébergement dans l'Union européenne**, services managés (pas de serveur maison) pour qu'un fondateur seul puisse exploiter.

## Choix techniques (décision `docs/suivi/decisions/0001-stack-technique.md`)
| Besoin | Choix | Raison |
|---|---|---|
| Mobile | Expo + React Native | Un code pour iPhone, Android, tablettes et pliables ; modules natifs (Apple, Face ID, SQLCipher) |
| Web et back-office | Next.js | Rendu serveur, routage par fichiers, même langage |
| API | Fastify + Prisma | Rapide, typé, schémas de validation |
| Base | PostgreSQL managé (UE) | Fiabilité, sauvegardes |
| Cache et files | Redis managé | Cotations partagées, tâches |
| Globe | WebGL (three.js) sur le web, Skia sur mobile | Performance, repli 2D simple |

## Documents liés
`authentification.md`, `donnees-et-chiffrement.md`, `observabilite.md`, `drapeaux-maintenance-tests.md`.

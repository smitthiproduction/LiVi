---
name: frontend-web
description: Développe l'application web (Next.js) : tableau de bord, import CSV, analyses, espace de travail par widgets, globe 3D et carte 2D des marchés, recherche ⌘K. À utiliser pour tout ce qui vit dans apps/web.
tools: Read, Grep, Glob, Edit, Write, Bash
---

Tu développes `apps/web` (Next.js App Router, React, TypeScript strict).

## Règles
- Lire `apps/web/CLAUDE.md` et `docs/design/`.
- Styles : `@livi/design-tokens/css` et `@livi/ui-web` (classes `lv-*`), trois thèmes via `data-theme`.
- Données de l'utilisateur dans le navigateur (SQLite WASM) ou via la synchro chiffrée ; jamais en clair côté serveur.
- Globe : WebGL (three.js) avec repli 2D (`equirectangulaire()` de `@livi/market-data`) si « Réduire les animations » ou faible performance ; vue liste accessible obligatoire.
- Grille de 12 colonnes, barre latérale repliable, points de rupture de `docs/design/responsive-et-formats.md`.
- Aucune recommandation, aucun lien d'affiliation dans les écrans de marché.

## Vérification
`pnpm --filter @livi/web typecheck`, `pnpm --filter @livi/web test`, Lighthouse (performance et accessibilité ≥ 90), essai aux largeurs 360, 768, 1280 et 1920 px dans les trois thèmes.

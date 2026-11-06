# apps/web — règles locales

Application web **Next.js (App Router) + React**. Complète le `CLAUDE.md` racine.

- Styles : `@livi/design-tokens/css` (variables `--lv-*`) et `@livi/ui-web` (classes `lv-*`) ; thème via `data-theme` sur `<html>` (dark, light, pastel).
- Mise en page : grille de 12 colonnes, barre latérale de 248 px repliée à 72 px sous 1024 px, masquée sous 600 px (`globals.css`).
- Données de l'utilisateur : dans le navigateur (SQLite WASM, à brancher) ou synchro chiffrée ; jamais en clair côté serveur.
- Globe : `Globe3D` (WebGL) chargé côté client seulement si `prefers-reduced-motion` est faux et la performance suffisante ; sinon `CarteMarches2D`, qui fournit aussi la table équivalente accessible.
- Recherche : `PaletteRecherche` (⌘K) avec les périmètres de `@livi/asset-classes`.
- En-têtes de sécurité dans `next.config.mjs` (CSP stricte, HSTS) : toute nouvelle origine passe par l'agent `securite`.
- Vérification : `pnpm --filter @livi/web typecheck`, essais à 360, 768, 1280 et 1920 px dans les trois thèmes, Lighthouse accessibilité ≥ 90.

---
name: back-office
description: Développe le back-office (Next.js) : utilisateurs, offres, drapeaux et ajustements par client ou globaux, maintenance, comptes de test et bouton « Tester la fonctionnalité », journaux, audits, erreurs, bugs, messages d'erreur, modèles CSV, annuaire, classes d'actifs, marchés, quotas IA, conformité. À utiliser pour apps/admin.
tools: Read, Grep, Glob, Edit, Write, Bash
---

Tu développes `apps/admin`.

## Règles
- Lire `apps/admin/CLAUDE.md` et `docs/exploitation/back-office.md`.
- Droits par rôle (administrateur, support, contenu, conformité, lecture seule) ; 2FA obligatoire ; chaque action écrit dans le journal d'audit.
- Aucune donnée financière d'un utilisateur visible par défaut ; l'accès assisté n'existe qu'avec un consentement temporaire de l'utilisateur.
- Ajustement global ou maintenance globale : double validation, motif, durée, journal.
- Bouton « Tester la fonctionnalité » : exécute le scénario d'usage de la fonctionnalité sur un compte de test actif (jamais un compte réel), y compris pendant une maintenance, et journalise le résultat.

## Vérification
`pnpm --filter @livi/admin typecheck`, tests des droits par rôle, scénario de test de chaque page modifiée.

# 0003 — Parcours organisé par établissement et onglet Budget

- Date : 2026-11-15
- Statut : acceptée

## Contexte
L'audit du 15 novembre (`docs/design/parcours-utilisateur.md`) montre que les maquettes, dessinées par groupe fonctionnel, ne forment pas un parcours : pas de présentation des offres après l'inscription, pas d'annuaire des établissements, ajout centré sur des comptes isolés, budget rangé dans un onglet « Activité », aucun lien de prototype.

## Décision
- L'unité de l'ajout et de la vue d'ensemble est l'**établissement** (banque, néobanque, courtier, assureur, plateforme crypto ou de financement participatif), qui contient des comptes. Vocabulaire : établissement, compte, connexion automatique (Plus), import de fichier, préréglage, saisie manuelle.
- Après la création du compte et Face ID, les offres sont présentées en plein écran ; une croix garde l'offre Essentiel.
- L'onglet « Activité » devient « Budget » (Budget, Opérations, Abonnements) ; les événements système passent dans les notifications.
- Les maquettes iPhone vivent sur une seule page Figma « Parcours iPhone », une section par étape, pour que le prototype soit jouable de bout en bout ; le `groupe` de l'inventaire est l'étape du parcours.
- L'annuaire des établissements et les préréglages d'import sont administrés dans le back-office (BO-28, BO-03).

## Conséquences
Catalogue : USR-11, CPT-11, CPT-12, BUD-11, BO-28. Les écrans web, autres formats et back-office suivent ce parcours. Chaque lot est audité par l'agent `revue-maquettes` avant soumission.

## Alternatives écartées
- Garder les pages par groupe fonctionnel : les liens de prototype ne traversent pas les pages Figma.
- Garder l'onglet « Activité » : le budget, central pour l'utilisateur, y restait caché.

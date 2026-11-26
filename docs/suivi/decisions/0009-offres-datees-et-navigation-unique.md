# 0009 — Offres datées, parcours d'achat complet et navigation unique

- Date : 2026-11-26
- Statut : acceptée (choix du porteur du 26 novembre, 8 h 05)

## Contexte
Le test UX par cinq personas, puis sa relance, n'a abouti à aucun achat (`rapports-ux/_synthese.md`). Les causes communes :
- l'écran des offres vend la connexion automatique et LiVi IA, prévues en octobre 2027 au catalogue (CPT-06, CPT-07, IA-01), alors que le lancement est en juillet 2027 ;
- les options Famille et Société sont citées, alors qu'elles arrivent en 2028 (FAM-01, SOC-01) ;
- aucun récapitulatif avant l'achat depuis l'annuaire, aucune confirmation après, aucun état « offre active » pour Essentiel et Plus, aucune résiliation montrée.

L'audit du 20 novembre (A-01) relevait aussi que la navigation change d'ordre et de libellés selon le format.

## Décision
1. **Fonctions datées** : les trois offres restent présentées à égalité (décision 0005). Chaque fonction non encore livrée porte sa date (« dès octobre 2027 », « en 2028 »), réglée dans le back-office (BO-01) et retirée à la sortie. Une offre qui n'est pas sortie n'est pas achetable : son bouton dit « Disponible en octobre 2027 ».
2. **Conditions avant l'achat** : limite d'Essentiel (5 comptes avec contribution aux statistiques anonymes, 2 sans), crédits IA inclus (400 par mois), renouvellement automatique et résiliation dans les réglages de l'App Store, au plus tard 24 heures avant l'échéance.
3. **Parcours d'achat** (USR-14, nouveau, MVP) : feuille de récapitulatif avec « Annuler » (MQ-218, MQ-219, MQ-264), écran de confirmation avec reçu et échéance (MQ-265, MQ-266), Offres et abonnement pour chaque offre (MQ-016, MQ-267, MQ-268), feuille « Gérer ou résilier » (MQ-269).
4. **Navigation unique** : Accueil, Patrimoine, Budget, Marchés, LiVi IA, dans cet ordre, sur la barre d'onglets, le rail, la barre latérale iPad et le web. « Accueil » remplace « Tableau de bord » sur le web. Le web ajoute Import et Rapports. Le profil et les réglages s'ouvrent par l'avatar, sur tous les formats.

## Conséquences
- Catalogue : USR-14 ajouté, contrainte de USR-11 précisée.
- Maquettes : MQ-201, MQ-203, MQ-212, MQ-016, MQ-218, MQ-219 repris ; MQ-264 à MQ-269 ajoutés ; composant « Barre latérale web » réordonné, entrée Réglages retirée, iPad sans Import ni Rapports.
- Code : `apps/mobile` (onglet et route « Budget » à la place d'« Activité », ordre unique), `apps/web` (barre latérale, page Budget, titre « Accueil »).
- À faire : parcours d'achat sur le web (MQ-224, MQ-232), achat de l'option Confidentialité à vie, textes de l'App Store relus par l'agent `conformite`.

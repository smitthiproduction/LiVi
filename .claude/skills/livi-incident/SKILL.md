---
name: livi-incident
description: Traiter un bug, une erreur ou un incident signalé dans le back-office : diagnostic par les journaux et audits, ajustement par client ou global, correctif, message d'erreur, post-mortem. À utiliser pour tout signalement d'utilisateur, alerte de supervision ou plantage.
---

# Traiter un incident

## 1. Qualifier
- Source : signalement in-app (USR-10), erreur regroupée (BO-17), alerte de santé (BO-23).
- Gravité : bloquant (données fausses, connexion impossible, fuite), majeur, mineur.
- Périmètre : un utilisateur, un segment (version, appareil, établissement), tous.

## 2. Diagnostiquer
- Journaux (BO-15) par identifiant de corrélation ; audits (BO-16) pour les actions sensibles.
- Reproduire sur un **compte de test** avec le bouton « Tester la fonctionnalité » (BO-22), jamais sur le compte de l'utilisateur.

## 3. Atténuer
- Ajustement ciblé (BO-20) : drapeau coupé pour l'utilisateur ou le segment, avec motif et durée.
- Si plusieurs utilisateurs : maintenance de la fonction (BO-21) avec message clair.
- Message d'erreur : code du catalogue (BO-18), texte utilisateur en français, action proposée.

## 4. Corriger
- Ticket (BO-19, synchronisé GitHub), branche `fix/…`, test qui reproduit le bug, correctif, scénario de test vert.
- Retirer l'ajustement temporaire une fois le correctif déployé.

## 5. Clore
- Grave ou récurrent : post-mortem dans `docs/exploitation/incidents/AAAA-MM-JJ-titre.md` (chronologie, cause, correctif, prévention).
- Fuite de données personnelles : procédure `docs/securite/reponse-incident.md` (notification CNIL sous 72 h).

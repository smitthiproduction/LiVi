# Accessibilité

- **Lecteurs d'écran** (VoiceOver, TalkBack, lecteurs web) : chaque contrôle a un libellé et un rôle ; les montants sont lus en entier (« cent quatre-vingt-quatre mille trois cent vingt euros cinquante-sept »), la variation avec son sens (« en hausse de 2,41 % »).
- **Texte dynamique** jusqu'à 200 % sans perte d'information ni chevauchement.
- **Contraste** ≥ 4,5:1 pour le texte dans les trois thèmes (vérifié par le design system), ≥ 3:1 pour les éléments graphiques.
- **Couleur jamais seule** : signe et flèche pour gains et pertes, libellé pour un statut, légende pour une carte.
- **Mouvement** : « Réduire les animations » coupe les rotations (globe en 2D), les ressorts et les parallaxes.
- **Transparence** : « Réduire la transparence » remplace le verre par `bg-elevated`.
- **Équivalents** : le globe et la carte ont une vue liste complète ; chaque graphique a un résumé textuel et un tableau.
- **Saisie** : types de clavier adaptés, remplissage automatique (e-mail, code à usage unique), erreurs annoncées.
- **Cibles** : 44 × 44 pt.

Contrôle à chaque version (`livi-verification`), et audit complet avant chaque lancement majeur.

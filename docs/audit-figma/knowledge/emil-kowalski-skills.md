# Skills d'Emil Kowalski (design d'interface et animation)

- **Source** : https://github.com/emilkowalski/skills (dépôt cloné en lecture, `git clone --depth 1`)
- **Lu le** : 19 novembre 2026, commit `64eb3de` (15 novembre 2026)
- **Fichiers lus** : `skills/*/SKILL.md` de apple-design, emil-design-eng, animate, review-animations, choreograph, animation-vocabulary, find-animation-opportunities, remove-animations, gestures, mobile-native, animate-expo, break-ui, animation-performance ; `ui-cheatsheet.md`, `performance-cheatsheet.md`. Tous accessibles.

## Règles retenues pour LiVi

### Réactivité et gestes (apple-design, gestures)
- Retour visuel à l'appui (pointer-down), pas au relâchement : chaque bouton et chaque ligne a un état « pressé » immédiat.
- Ne jamais bloquer la saisie pendant une transition ; une animation interrompue repart de la valeur affichée, pas de la cible (ressorts plutôt que courbes fixes pour tout ce qui suit le doigt).
- Suivi 1:1 pendant un glissement (feuille, graphique) ; fermeture d'une feuille sur distance (environ 40 à 50 %) **ou** vitesse ; retour rapide si le seuil n'est pas atteint ; léger rebond seulement à la fin d'un geste lancé, jamais sur un bouton.
- Un élément se ferme dans la direction d'où il est venu (feuille montée du bas : glissement vers le bas).
- Cibles d'au moins 44 × 44 ; agrandir la zone sans agrandir le visuel.
- Ressorts : amortissement 1,0 par défaut, environ 0,8 seulement après un geste avec élan.

### Durées et courbes (emil-design-eng, review-animations)
- Toute animation se justifie : cohérence spatiale, indication d'état, retour, explication, éviter un changement brutal.
- Fréquence : action répétée plus de 100 fois par jour = pas d'animation ; quelques dizaines = animation réduite.
- Animations d'interface sous 300 ms ; exceptions documentées : feuilles, tiroirs, fenêtres modales (jusqu'à 500 ms) et toasts.
- Jamais de `ease-in` à l'entrée ; courbes fortes : `ease-out` (0.23, 1, 0.32, 1), tiroir (0.32, 0.72, 0, 1).
- Jamais d'entrée depuis `scale(0)` : partir de 0,9 à 0,97 avec opacité ; origine de transformation au déclencheur.
- Entrée et sortie asymétriques : action délibérée plus lente, réponse du système plus rapide.
- « Réduire les animations » : plus doux, pas nul (garder opacité et couleur, retirer le mouvement).
- Propriétés animées : `transform` et `opacity` seulement (performance-cheatsheet, animation-performance).

### Robustesse des données (break-ui)
- Tester chaque composant avec des données plausibles extrêmes : vide, un seul élément (accords « 1 compte »), très long (noms d'établissement réels longs), montants à 7 chiffres, valeurs négatives, texte agrandi.
- Les cas extrêmes passent par les mêmes données que la démonstration, pas par une retouche de la maquette.

### Web mobile (mobile-native)
- Survol limité aux appareils qui le permettent (`hover: hover`), zoom jamais désactivé, `dvh` et zones sûres `env()`, retour au toucher immédiat.

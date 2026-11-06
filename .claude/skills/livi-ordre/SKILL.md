---
name: livi-ordre
description: Archiver un nouvel ordre du porteur de projet et les fichiers qu'il va remplacer dans old/, avant toute modification. À utiliser dès qu'une demande change le périmètre, le design, les règles ou le code existant.
---

# Archiver un ordre

Chaque ordre du porteur de projet est conservé tel quel, avec le plan et une copie des fichiers qu'il remplace, pour pouvoir revenir en arrière.

## Étapes
1. Lancer :
   ```bash
   pnpm ordre:archiver -- --titre "Titre court de l'ordre" --fichier docs/produit/catalogue.json --fichier apps/mobile/src/app/index.tsx
   ```
   Le script crée `old/ordres/AAAA-MM-JJ_HHMM_titre.md` à partir du modèle et copie chaque `--fichier` dans `old/versions/AAAA-MM-JJ_HHMM/` en gardant son chemin.
2. Ouvrir le fichier d'ordre créé et compléter :
   - **Texte de l'ordre** : la demande, mot pour mot.
   - **Interprétation** : ce qui sera fait, ce qui ne le sera pas, les points à valider.
   - **Plan** : lots, agents, critères d'acceptation.
3. Vérifier la ligne ajoutée automatiquement par le script dans l'index de `old/README.md`.
4. Après livraison, compléter la section **Résultat** du même fichier (commits, fichiers créés, écarts). C'est la seule modification autorisée d'un fichier d'ordre, et seulement le jour même.

## Revenir en arrière
Les copies de `old/versions/<date>/` gardent le chemin d'origine : pour restaurer, copier le fichier vers son chemin, puis relancer `pnpm docs:generate` et `pnpm verifier`. Pour le code, préférer `git revert` du commit cité dans la section Résultat.

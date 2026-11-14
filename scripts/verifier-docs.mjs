// Contrôle de cohérence de la documentation.
//  - fichiers obligatoires présents ;
//  - docs générées à jour (catalogue.md et classes-actifs.md régénérés = identiques) ;
//  - liens relatifs des fichiers markdown valides ;
//  - catalogue : identifiants uniques et champs complets ;
//  - mode --rappel (hook Stop) : rappelle de mettre à jour CHANGELOG et journal si du code a changé sans eux.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..');
const rappel = process.argv.includes('--rappel');

if (rappel) {
  try {
    const diff = execSync('git status --porcelain', { cwd: racine, encoding: 'utf8' });
    const lignes = diff.split('\n').filter(Boolean).map((l) => l.slice(3));
    const code = lignes.some((f) => /^(apps|packages)\//.test(f));
    const docs = lignes.some((f) => f === 'CHANGELOG.md') && lignes.some((f) => f === 'docs/suivi/journal.md');
    if (code && !docs) console.log('Rappel LiVi : du code a changé. Mettre à jour CHANGELOG.md, docs/suivi/journal.md et docs/suivi/etat-du-projet.md (skill livi-mise-a-jour-docs).');
  } catch { /* hors dépôt git : rien à rappeler */ }
  process.exit(0);
}

const erreurs = [];
const obligatoires = ['README.md', 'CLAUDE.md', 'AGENTS.md', 'CHANGELOG.md', 'docs/README.md', 'docs/suivi/etat-du-projet.md', 'docs/suivi/journal.md', 'docs/produit/catalogue.json', 'docs/produit/catalogue.md', 'docs/produit/classes-actifs.md', 'docs/design/maquettes.json', 'docs/design/maquettes.md', 'docs/design/figma.md', 'old/README.md', 'old/_modele-ordre.md',
  'apps/mobile/CLAUDE.md', 'apps/web/CLAUDE.md', 'apps/admin/CLAUDE.md', 'apps/api/CLAUDE.md'];
for (const f of obligatoires) if (!existsSync(join(racine, f))) erreurs.push(`Fichier obligatoire manquant : ${f}`);

// Catalogue
try {
  const cat = JSON.parse(readFileSync(join(racine, 'docs/produit/catalogue.json'), 'utf8'));
  const ids = new Set();
  for (const f of cat) {
    for (const k of ['id', 'module', 'nom', 'description', 'surfaces', 'offre', 'priorite', 'contraintes', 'dependance']) if (!f[k]) erreurs.push(`Catalogue ${f.id ?? '?'} : champ « ${k} » vide`);
    if (ids.has(f.id)) erreurs.push(`Catalogue : identifiant en double ${f.id}`);
    ids.add(f.id);
  }
} catch (e) { erreurs.push(`Catalogue illisible : ${e.message}`); }

// Docs générées à jour
// Inventaire des maquettes Figma
try {
  const cat = JSON.parse(readFileSync(join(racine, 'docs/produit/catalogue.json'), 'utf8'));
  const idsCat = new Set(cat.map((f) => f.id));
  const inv = JSON.parse(readFileSync(join(racine, 'docs/design/maquettes.json'), 'utf8'));
  const formats = new Set(inv.formats.map((f) => f.id));
  const groupes = new Set(inv.groupes);
  const statuts = new Set(inv.statuts);
  const vus = new Set();
  const couverts = new Set();
  for (const m of inv.maquettes) {
    if (!/^MQ-\d{3}$/.test(m.id)) erreurs.push(`Maquette ${m.id} : identifiant invalide (MQ-000)`);
    if (vus.has(m.id)) erreurs.push(`Maquette ${m.id} en double`); vus.add(m.id);
    if (!groupes.has(m.groupe)) erreurs.push(`Maquette ${m.id} : groupe inconnu « ${m.groupe} »`);
    if (!formats.has(m.format)) erreurs.push(`Maquette ${m.id} : format inconnu « ${m.format} »`);
    if (!statuts.has(m.statut)) erreurs.push(`Maquette ${m.id} : statut inconnu « ${m.statut} »`);
    if (!m.ecran) erreurs.push(`Maquette ${m.id} : écran vide`);
    if (m.figma !== null && !/^\d+:\d+$/.test(m.figma)) erreurs.push(`Maquette ${m.id} : identifiant Figma invalide « ${m.figma} »`);
    if (!m.fonctionnalites?.length) erreurs.push(`Maquette ${m.id} : aucune fonctionnalité`);
    for (const id of m.fonctionnalites ?? []) { if (!idsCat.has(id)) erreurs.push(`Maquette ${m.id} : fonctionnalité inconnue ${id}`); couverts.add(id); }
  }
  for (const id of idsCat) if (!couverts.has(id)) erreurs.push(`Fonctionnalité ${id} sans maquette : ajoutez-la dans docs/design/maquettes.json (skill livi-maquette-figma)`);
} catch (e) { erreurs.push(`Inventaire des maquettes illisible : ${e.message}`); }

for (const f of ['docs/produit/catalogue.md', 'docs/produit/classes-actifs.md', 'docs/design/maquettes.md']) {
  const avant = existsSync(join(racine, f)) ? readFileSync(join(racine, f), 'utf8') : '';
  try {
    execSync('node scripts/generer-docs.ts', { cwd: racine, stdio: 'ignore' });
    const apres = readFileSync(join(racine, f), 'utf8');
    if (avant !== apres) erreurs.push(`${f} n’était pas à jour : lancez pnpm docs:generate et committez le résultat.`);
  } catch (e) { erreurs.push(`Génération des docs impossible : ${e.message}`); }
}

// Liens relatifs
function* markdown(dir) {
  for (const n of readdirSync(dir)) {
    if (['node_modules', '.git', '.next', 'dist', 'old'].includes(n)) continue;
    const p = join(dir, n);
    const s = statSync(p);
    if (s.isDirectory()) yield* markdown(p);
    else if (n.endsWith('.md')) yield p;
  }
}
for (const fichier of markdown(racine)) {
  const texte = readFileSync(fichier, 'utf8').replace(/```[\s\S]*?```/g, '');
  for (const m of texte.matchAll(/\]\(([^)\s]+)\)/g)) {
    const lien = m[1];
    if (/^(https?:|mailto:|#)/.test(lien)) continue;
    const cible = resolve(dirname(fichier), lien.split('#')[0]);
    if (!existsSync(cible)) erreurs.push(`Lien cassé dans ${fichier.replace(racine + '/', '')} : ${lien}`);
  }
}

if (erreurs.length) { console.error(`Docs : ${erreurs.length} problème(s)\n- ` + erreurs.join('\n- ')); process.exit(1); }
console.log('Docs : cohérentes.');

// Archive un ordre du porteur de projet et les fichiers qu'il remplace.
// Usage : pnpm ordre:archiver -- --titre "Titre" [--fichier chemin ...] [--texte "texte de l'ordre"]
import { mkdirSync, writeFileSync, copyFileSync, existsSync, readFileSync, appendFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const val = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
const tous = (k) => args.flatMap((a, i) => (a === k ? [args[i + 1]] : [])).filter(Boolean);

const titre = val('--titre');
if (!titre) { console.error('Usage : --titre "Titre de l’ordre" [--fichier chemin] [--texte "…"]'); process.exit(1); }
const now = new Date();
const pad = (n) => String(n).padStart(2, '0');
const jour = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
const horo = `${jour}_${pad(now.getHours())}${pad(now.getMinutes())}`;
const slug = titre.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

const fichiers = tous('--fichier');
const copies = [];
for (const f of fichiers) {
  const src = join(racine, f);
  if (!existsSync(src)) { console.warn(`Ignoré (introuvable) : ${f}`); continue; }
  const dest = join(racine, 'old/versions', horo, f);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
  copies.push(`old/versions/${horo}/${f}`);
}

const modele = readFileSync(join(racine, 'old/_modele-ordre.md'), 'utf8');
const contenu = modele
  .replaceAll('{{TITRE}}', titre)
  .replaceAll('{{DATE}}', now.toISOString())
  .replaceAll('{{TEXTE}}', val('--texte') ?? '(coller ici le texte intégral de l’ordre)')
  .replaceAll('{{COPIES}}', copies.length ? copies.map((c) => `- \`${c}\``).join('\n') : '- Aucun fichier remplacé.');
const cible = join(racine, 'old/ordres', `${horo}_${slug}.md`);
if (existsSync(cible)) { console.error(`Existe déjà : ${cible}`); process.exit(1); }
writeFileSync(cible, contenu);
appendFileSync(join(racine, 'old/README.md'), `| ${jour} | [${titre}](ordres/${horo}_${slug}.md) | ${copies.length} fichier(s) archivé(s) |\n`);
console.log(`Ordre archivé : old/ordres/${horo}_${slug}.md`);
for (const c of copies) console.log(`  copie : ${c}`);

// Génère la documentation dérivée des sources de vérité :
//  - docs/produit/classes-actifs.md   depuis packages/asset-classes (TAXONOMIE, COLLECTIONS)
//  - docs/produit/catalogue.md        depuis docs/produit/catalogue.json
//  - docs/design/maquettes.md         depuis docs/design/maquettes.json (inventaire des maquettes Figma)
// Usage : pnpm docs:generate  (ou node scripts/generer-docs.ts)
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TAXONOMIE, FILTRES_COMMUNS, COLLECTIONS, PERIMETRES_RECHERCHE } from '../packages/asset-classes/src/index.ts';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..');
const avert = '<!-- Fichier généré par scripts/generer-docs.ts : modifier la source, puis relancer `pnpm docs:generate`. -->\n\n';
const cell = (s: string) => s.replace(/\|/g, '\\|').replace(/\n/g, ' ');

/* ---------------- Classes d'actifs ---------------- */
let md = avert + '# Classes et sous-classes d’actifs\n\n';
md += `Source de vérité : \`packages/asset-classes/src/taxonomy.ts\`. ${TAXONOMIE.length} classes, ${TAXONOMIE.reduce((s, c) => s + c.sousClasses.length, 0)} sous-classes. Chaque classe définit ses champs, ses filtres de recherche et les onglets de sa fiche ; une sous-classe peut ajouter des champs, des filtres et des onglets.\n\n`;
md += '## Filtres communs à toutes les positions\n\n| Filtre | Type |\n|---|---|\n';
for (const f of FILTRES_COMMUNS) md += `| ${cell(f.label)} | ${f.kind} |\n`;
md += '\n## Périmètres de la recherche globale\n\n' + PERIMETRES_RECHERCHE.map((p) => p.label).join(' · ') + '\n\n';
for (const c of TAXONOMIE) {
  md += `## ${c.label}\n\n${c.description}\n\n`;
  md += `- **Source de valorisation** : ${c.source}\n`;
  if (c.enveloppes?.length) md += `- **Enveloppes possibles** : ${c.enveloppes.join(', ')}\n`;
  md += `- **Onglets de la fiche** : ${c.onglets.map((o) => (o.sousOnglets ? `${o.label} (${o.sousOnglets.join(', ')})` : o.label)).join(' › ')}\n\n`;
  md += '**Sous-classes**\n\n| Sous-classe | Description | Exemples | Champs ajoutés | Onglets ajoutés |\n|---|---|---|---|---|\n';
  for (const s of c.sousClasses) {
    md += `| ${cell(s.label)} | ${cell(s.description)} | ${cell((s.exemples ?? []).join(', ') || '—')} | ${cell((s.champs ?? []).map((x) => x.label).join(', ') || '—')} | ${cell((s.onglets ?? []).map((x) => x.label).join(', ') || '—')} |\n`;
  }
  md += '\n**Champs de la classe**\n\n| Champ | Type | Source |\n|---|---|---|\n';
  for (const f of c.champs) md += `| ${cell(f.label)}${f.obligatoire ? ' (obligatoire)' : ''} | ${f.type}${f.unite ? ` (${f.unite})` : ''} | ${f.source ?? 'saisie ou import'} |\n`;
  md += '\n**Filtres propres à la classe**\n\n| Filtre | Type | Remarque |\n|---|---|---|\n';
  for (const f of c.filtres) md += `| ${cell(f.label)} | ${f.kind} | ${f.donneeTierce ? 'Donnée tierce : source et date affichées' : '—'} |\n`;
  if (c.vigilance?.length) md += '\n**Vigilance**\n\n' + c.vigilance.map((v) => `- ${v}`).join('\n') + '\n';
  md += '\n';
}
md += '## Collections prêtes à l’emploi\n\nJeux de filtres nommés de façon descriptive ; un test refuse tout nom qui ressemble à une recommandation.\n\n| Collection | Classe | Description |\n|---|---|---|\n';
for (const col of COLLECTIONS) md += `| ${cell(col.label)} | ${col.classe} | ${cell(col.description)}${col.donneeTierce ? ' (donnée tierce)' : ''} |\n`;
writeFileSync(join(racine, 'docs/produit/classes-actifs.md'), md);

/* ---------------- Catalogue ---------------- */
interface F { id: string; module: string; nom: string; description: string; surfaces: string; offre: string; priorite: string; contraintes: string; dependance: string }
const cat: F[] = JSON.parse(readFileSync(join(racine, 'docs/produit/catalogue.json'), 'utf8'));
const modules = [...new Set(cat.map((f) => f.module))].sort((a, b) => parseInt(a) - parseInt(b));
const prios = ['MVP (juil. 2027)', 'V1.5 (oct. 2027)', 'V2 (2028)', 'V3 (2029)'];
let c = avert + '# Catalogue des fonctionnalités\n\n';
c += `Source de vérité : \`docs/produit/catalogue.json\` (${cat.length} fonctionnalités). Pour ajouter ou modifier une fonctionnalité, suivre la skill \`livi-fonctionnalite\`.\n\n`;
c += '| Module | Total | ' + prios.join(' | ') + ' |\n|---|---|' + prios.map(() => '---').join('|') + '|\n';
for (const m of modules) {
  const l = cat.filter((f) => f.module === m);
  c += `| ${m} | ${l.length} | ${prios.map((p) => l.filter((f) => f.priorite === p).length).join(' | ')} |\n`;
}
c += `| **Total** | **${cat.length}** | ${prios.map((p) => `**${cat.filter((f) => f.priorite === p).length}**`).join(' | ')} |\n\n`;
for (const m of modules) {
  c += `## ${m}\n\n| ID | Fonctionnalité | Description | Offre | Priorité | Contraintes | Dépendance ou coût |\n|---|---|---|---|---|---|---|\n`;
  for (const f of cat.filter((x) => x.module === m)) c += `| ${f.id} | ${cell(f.nom)} | ${cell(f.description)} | ${f.offre} | ${f.priorite} | ${cell(f.contraintes)} | ${cell(f.dependance)} |\n`;
  c += '\n';
}
writeFileSync(join(racine, 'docs/produit/catalogue.md'), c);
/* ---------------- Maquettes Figma ---------------- */
interface Fmt { id: string; nom: string; largeur: number; hauteur: number; plateforme: string; format: string; classe: string }
interface Mq { id: string; groupe: string; format: string; ecran: string; etat: string; fonctionnalites: string[]; statut: string; figma: string | null }
const inv: { fichierFigma: { cle: string; url: string }; groupes: string[]; formats: Fmt[]; statuts: string[]; maquettes: Mq[] } = JSON.parse(readFileSync(join(racine, 'docs/design/maquettes.json'), 'utf8'));
const libStatut: Record<string, string> = { 'a-faire': 'À concevoir', 'en-cours': 'En cours', 'a-valider': 'À valider', validee: 'Validée' };
const fmtParId = Object.fromEntries(inv.formats.map((f) => [f.id, f]));
const prioParId = Object.fromEntries(cat.map((f) => [f.id, f.priorite]));
const prioMq = (m: Mq) => prios.find((p) => m.fonctionnalites.some((id) => prioParId[id] === p)) ?? '—';
const lien = (m: Mq) => (m.figma ? `[ouvrir](${inv.fichierFigma.url}?node-id=${m.figma.replace(':', '-')})` : '—');
let q = avert + '# Inventaire des maquettes Figma\n\n';
q += `Source de vérité : \`docs/design/maquettes.json\`. Fichier Figma : ${inv.fichierFigma.url}. ${inv.maquettes.length} maquettes ; chaque fonctionnalité du catalogue figure dans au moins une maquette (contrôlé par \`pnpm docs:check\`). Méthode : skill \`livi-maquette-figma\` et [figma.md](figma.md).\n\n`;
q += '| Statut | Nombre |\n|---|---|\n' + inv.statuts.map((st) => `| ${libStatut[st] ?? st} | ${inv.maquettes.filter((m) => m.statut === st).length} |\n`).join('') + '\n';
q += '## Formats\n\n| Format | Appareil | Taille (pt) | Plateforme | Format détecté | Classe | Maquettes |\n|---|---|---|---|---|---|---|\n';
for (const f of inv.formats) q += `| \`${f.id}\` | ${cell(f.nom)} | ${f.largeur} × ${f.hauteur} | ${f.plateforme} | ${f.format} | ${f.classe} | ${inv.maquettes.filter((m) => m.format === f.id).length} |\n`;
q += '\n';
for (const g of inv.groupes) {
  const l = inv.maquettes.filter((m) => m.groupe === g);
  q += `## ${g} (${l.length})\n\n| ID | Écran | Format | État | Fonctionnalités | Priorité | Statut | Figma |\n|---|---|---|---|---|---|---|---|\n`;
  for (const m of l) q += `| ${m.id} | ${cell(m.ecran)} | ${fmtParId[m.format]?.nom ?? m.format} | ${m.etat} | ${m.fonctionnalites.join(', ')} | ${prioMq(m)} | ${libStatut[m.statut] ?? m.statut} | ${lien(m)} |\n`;
  q += '\n';
}
writeFileSync(join(racine, 'docs/design/maquettes.md'), q);
console.log(`Docs générées : ${TAXONOMIE.length} classes, ${cat.length} fonctionnalités, ${inv.maquettes.length} maquettes.`);

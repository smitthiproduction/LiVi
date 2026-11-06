// Génère les jetons CSS (3 thèmes) et TypeScript (React Native, web) depuis src/tokens.json.
// Usage : node packages/design-tokens/scripts/build.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..');
const t = JSON.parse(readFileSync(join(racine, 'src/tokens.json'), 'utf8'));
const themes = t.color.themes.map((x) => x.id);

function resoudre(nom, theme, pile = []) {
  const tok = t.color.tokens.find((x) => x.name === nom);
  if (!tok) throw new Error(`Jeton inconnu : ${nom}`);
  if (pile.includes(nom)) throw new Error(`Référence circulaire : ${[...pile, nom].join(' → ')}`);
  const v = typeof tok.value === 'object' ? tok.value[theme] : tok.value;
  const m = /^\{(.+)\}$/.exec(v);
  return m ? resoudre(m[1], theme, [...pile, nom]) : v;
}

const couleurs = Object.fromEntries(themes.map((th) => [th, Object.fromEntries(t.color.tokens.map((x) => [x.name, resoudre(x.name, th)]))]));
const simples = (groupe) => Object.fromEntries((t[groupe]?.tokens ?? []).map((x) => [x.name, typeof x.value === 'object' ? x.value : x.value]));

let css = '/* Généré par packages/design-tokens/scripts/build.mjs — ne pas modifier à la main. */\n';
themes.forEach((th, i) => {
  const sel = i === 0 ? `:root, [data-theme="${th}"]` : `[data-theme="${th}"]`;
  css += `${sel} {\n`;
  for (const [k, v] of Object.entries(couleurs[th])) css += `  --lv-${k}: ${v};\n`;
  for (const g of ['spacing', 'radius', 'blur', 'duration']) for (const [k, v] of Object.entries(simples(g))) css += `  --lv-${k}: ${v};\n`;
  for (const tok of t.shadow?.tokens ?? []) css += `  --lv-${tok.name}: ${typeof tok.value === 'object' ? tok.value[th] : tok.value};\n`;
  css += `  --lv-font-sans: ${t.type.families.sans};\n  --lv-font-mono: ${t.type.families.mono};\n}\n`;
});

const styles = Object.fromEntries(t.type.groups.flatMap((g) => g.styles.map((s) => [s.name, { fontSize: parseFloat(s.fontSize), lineHeight: parseFloat(s.lineHeight), fontWeight: s.fontWeight, family: g.family }])));
const ts = `// Généré par packages/design-tokens/scripts/build.mjs — ne pas modifier à la main.\n` +
  `export const themes = ${JSON.stringify(themes)} as const;\nexport type Theme = (typeof themes)[number];\n` +
  `export const couleurs = ${JSON.stringify(couleurs, null, 2)} as const;\n` +
  `export const espacements = ${JSON.stringify(simples('spacing'), null, 2)} as const;\n` +
  `export const rayons = ${JSON.stringify(simples('radius'), null, 2)} as const;\n` +
  `export const typographie = ${JSON.stringify(styles, null, 2)} as const;\n` +
  `export const polices = ${JSON.stringify(t.type.families)} as const;\n`;

mkdirSync(join(racine, 'generated'), { recursive: true });
writeFileSync(join(racine, 'generated/tokens.css'), css);
writeFileSync(join(racine, 'generated/tokens.ts'), ts);
console.log(`Jetons générés : ${themes.length} thèmes, ${t.color.tokens.length} couleurs.`);

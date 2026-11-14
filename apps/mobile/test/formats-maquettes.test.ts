import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { classeDeTaille, detecterFormat, type Fenetre } from '../src/theme/formats.ts';

// Les gabarits Figma (docs/design/maquettes.json) doivent correspondre exactement à ce que l'app détecte :
// une maquette dessinée pour un format est celle que l'utilisateur verra sur cet appareil.
const chemin = fileURLToPath(new URL('../../../docs/design/maquettes.json', import.meta.url).href);
const inventaire = JSON.parse(readFileSync(chemin, 'utf8')) as {
  formats: { id: string; largeur: number; hauteur: number; plateforme: Fenetre['plateforme']; pliable: boolean; format: string; classe: string }[];
  maquettes: { id: string; format: string }[];
};

test('chaque gabarit Figma est reconnu par detecterFormat et classeDeTaille', () => {
  for (const f of inventaire.formats) {
    const fenetre: Fenetre = { largeur: f.largeur, hauteur: f.hauteur, plateforme: f.plateforme, pliable: f.pliable };
    assert.equal(detecterFormat(fenetre), f.format, `format de ${f.id}`);
    assert.equal(classeDeTaille(f.largeur), f.classe, `classe de ${f.id}`);
  }
});

test('les formats couvrent iPhone, Samsung, pliables (dont passeport), tablette et web', () => {
  const formats = new Set(inventaire.formats.map((f) => f.format));
  for (const attendu of ['telephone', 'telephone-grand', 'pliable-externe-etroit', 'pliable-passeport', 'pliable-clapet', 'pliable-deplie', 'tablette', 'bureau']) {
    assert.ok(formats.has(attendu), attendu);
  }
});

test('chaque maquette utilise un gabarit déclaré', () => {
  const ids = new Set(inventaire.formats.map((f) => f.id));
  for (const m of inventaire.maquettes) assert.ok(ids.has(m.format), `${m.id} : ${m.format}`);
});

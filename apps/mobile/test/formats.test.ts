import { test } from 'node:test';
import assert from 'node:assert/strict';
import { classeDeTaille, detecterFormat, disposition, globeAutorise } from '../src/theme/formats.ts';

test('classes de taille', () => {
  assert.equal(classeDeTaille(375), 'compacte');
  assert.equal(classeDeTaille(700), 'moyenne');
  assert.equal(classeDeTaille(1000), 'etendue');
  assert.equal(classeDeTaille(1400), 'large');
  assert.equal(classeDeTaille(1920), 'tres-large');
});

test('téléphones', () => {
  assert.equal(detecterFormat({ largeur: 375, hauteur: 667, plateforme: 'ios' }), 'telephone'); // iPhone SE
  assert.equal(detecterFormat({ largeur: 393, hauteur: 852, plateforme: 'ios' }), 'telephone');
  assert.equal(detecterFormat({ largeur: 430, hauteur: 932, plateforme: 'ios' }), 'telephone-grand');
  assert.equal(detecterFormat({ largeur: 360, hauteur: 780, plateforme: 'android' }), 'telephone'); // Samsung compact
});

test('pliables : externe étroit, passeport, déplié, clapet', () => {
  assert.equal(detecterFormat({ largeur: 344, hauteur: 882, plateforme: 'android', pliable: true }), 'pliable-externe-etroit');
  assert.equal(detecterFormat({ largeur: 412, hauteur: 732, plateforme: 'android', pliable: true }), 'pliable-passeport');
  assert.equal(detecterFormat({ largeur: 673, hauteur: 841, plateforme: 'android', pliable: true }), 'pliable-deplie');
  assert.equal(detecterFormat({ largeur: 412, hauteur: 915, plateforme: 'android', pliable: true }), 'pliable-clapet');
});

test('tablettes et bureau', () => {
  assert.equal(detecterFormat({ largeur: 820, hauteur: 1180, plateforme: 'ios' }), 'tablette');
  assert.equal(detecterFormat({ largeur: 1440, hauteur: 900, plateforme: 'web' }), 'bureau');
});

test('disposition selon la largeur et la posture', () => {
  assert.equal(disposition({ largeur: 393, hauteur: 852, plateforme: 'ios' }).navigation, 'onglets');
  assert.equal(disposition({ largeur: 320, hauteur: 568, plateforme: 'ios' }).margeLaterale, 12);
  const ipad = disposition({ largeur: 1024, hauteur: 1366, plateforme: 'ios' });
  assert.equal(ipad.navigation, 'barre-laterale');
  assert.equal(ipad.maitreDetail, true);
  assert.equal(disposition({ largeur: 1920, hauteur: 1080, plateforme: 'web' }).colonnes, 3);
  // Moyenne (iPad portrait, pliable déplié) : rail de 72 pt ; étendue (iPad paysage) : barre latérale de 248 pt.
  const ipadPortrait = disposition({ largeur: 834, hauteur: 1194, plateforme: 'ios' });
  assert.equal(ipadPortrait.navigation, 'rail');
  assert.equal(ipadPortrait.largeurNavigation, 72);
  assert.equal(disposition({ largeur: 673, hauteur: 841, plateforme: 'android', pliable: true }).navigation, 'rail');
  assert.equal(disposition({ largeur: 1194, hauteur: 834, plateforme: 'ios' }).largeurNavigation, 248);
  assert.equal(disposition({ largeur: 393, hauteur: 852, plateforme: 'ios' }).largeurNavigation, 0);
  const table = disposition({ largeur: 841, hauteur: 673, plateforme: 'android', pliable: true, posture: 'semi-ouvert' });
  assert.equal(table.colonnes, 1);
});

test('le globe 3D cède la place à la carte 2D', () => {
  assert.equal(globeAutorise({ reduireAnimations: true }), false);
  assert.equal(globeAutorise({ reduireAnimations: false, imagesParSeconde: 30 }), false);
  assert.equal(globeAutorise({ reduireAnimations: false, economieEnergie: true }), false);
  assert.equal(globeAutorise({ reduireAnimations: false, imagesParSeconde: 60 }), true);
});

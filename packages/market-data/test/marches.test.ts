import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PLACES, INDICES, placeParId, statutPlace, heureLocale, versSphere, orthographique, equirectangulaire, normaliserLongitude } from '../src/index.ts';

test('chaque indice pointe vers une place connue', () => {
  for (const i of INDICES) assert.ok(placeParId(i.place), i.code);
  assert.equal(new Set(INDICES.map((i) => i.code)).size, INDICES.length);
});

test('les places ont un fuseau valide et des séances ordonnées', () => {
  for (const p of PLACES) {
    assert.doesNotThrow(() => heureLocale(p.fuseau, new Date()), p.id);
    for (const s of p.seances) assert.ok(s.ouverture < s.cloture, p.id);
    assert.ok(Math.abs(p.lat) <= 90 && Math.abs(p.lon) <= 180, p.id);
  }
});

test('Paris est ouverte un mardi à 10 h, fermée à 18 h (heure de Paris)', () => {
  const paris = placeParId('euronext-paris')!;
  // mardi 10 novembre 2026, 10:00 à Paris = 09:00 UTC (heure d'hiver)
  assert.equal(statutPlace(paris, new Date('2026-11-10T09:00:00Z')), 'ouverte');
  assert.equal(statutPlace(paris, new Date('2026-11-10T17:00:00Z')), 'fermee');
  assert.equal(statutPlace(paris, new Date('2026-11-10T09:00:00Z'), true), 'fermee');
});

test('Tokyo est en pause à midi heure locale, le week-end est détecté', () => {
  const tokyo = placeParId('tokyo')!;
  // mardi 10 novembre 2026, 12:00 à Tokyo = 03:00 UTC
  assert.equal(statutPlace(tokyo, new Date('2026-11-10T03:00:00Z')), 'pause');
  // samedi 14 novembre 2026
  assert.equal(statutPlace(tokyo, new Date('2026-11-14T03:00:00Z')), 'week-end');
});

test('projections : sphère unité, face cachée, cadre 2D', () => {
  const p = versSphere(48.86, 2.35);
  assert.ok(Math.abs(Math.hypot(p.x, p.y, p.z) - 1) < 1e-9);
  assert.equal(orthographique(48.86, 2.35, 45, 0).visible, true);
  assert.equal(orthographique(-33.87, 151.21, 45, 0).visible, false);
  const e = equirectangulaire(0, 0, 360, 180);
  assert.deepEqual(e, { x: 180, y: 90 });
  assert.equal(normaliserLongitude(190), -170);
  assert.equal(normaliserLongitude(-180), -180);
  assert.equal(normaliserLongitude(540), -180);
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pointsCarte } from '../src/lib/carte.ts';
import { INDICES } from '../../../packages/market-data/src/index.ts';

test('un point par indice, dans les limites de la carte', () => {
  const pts = pointsCarte(1000, new Date('2026-11-04T10:00:00Z'));
  assert.equal(pts.length, INDICES.length);
  for (const p of pts) {
    assert.ok(p.x >= 0 && p.x <= 1000, p.code);
    assert.ok(p.y >= 0 && p.y <= 500, p.code);
  }
});

test('Paris ouverte un mercredi à 11 h, Tokyo fermée', () => {
  const pts = pointsCarte(1000, new Date('2026-11-04T10:00:00Z'));
  assert.equal(pts.find((p) => p.code === 'FR40')?.statut, 'ouverte');
  assert.equal(pts.find((p) => p.code === 'JP225')?.statut, 'fermee');
});

test('l’Europe est à droite de l’Amérique', () => {
  const pts = pointsCarte(1000, new Date('2026-11-04T10:00:00Z'));
  const x = (c: string) => pts.find((p) => p.code === c)!.x;
  assert.ok(x('FR40') > x('US500'));
  assert.ok(x('JP225') > x('FR40'));
});

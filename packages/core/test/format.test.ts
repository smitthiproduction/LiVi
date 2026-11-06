import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formaterMontant, formaterNombre, formaterPourcentage, variation, MOINS } from '../src/format.ts';

const norm = (s: string) => s.replace(/[  ]/g, ' ');

test('montant à la française avec espaces insécables', () => {
  assert.equal(norm(formaterMontant(184320.57)), '184 320,57 €');
  assert.equal(norm(formaterMontant(-1234.5)), `${MOINS}1 234,50 €`);
  assert.equal(norm(formaterMontant(0)), '0,00 €');
});

test('pourcentage signé et vrai signe moins', () => {
  assert.equal(norm(formaterPourcentage(2.413)), '+2,41 %');
  assert.equal(norm(formaterPourcentage(-0.8)), `${MOINS}0,80 %`);
  assert.equal(norm(formaterPourcentage(-0.001)), '0,00 %');
  assert.equal(norm(formaterPourcentage(5, 1, false)), '5,0 %');
});

test('valeur non finie', () => {
  assert.equal(formaterNombre(Number.NaN), '—');
  assert.equal(formaterMontant(Number.POSITIVE_INFINITY), '—');
});

test('variation : sens, flèche et libellé accessible', () => {
  const h = variation(1.5);
  assert.equal(h.sens, 'hausse'); assert.equal(h.fleche, '↑');
  assert.equal(norm(h.libelleAccessible), 'hausse de 1,50 %');
  const b = variation(-3);
  assert.equal(b.sens, 'baisse'); assert.equal(b.fleche, '↓');
  assert.equal(variation(0.0001).sens, 'stable');
});

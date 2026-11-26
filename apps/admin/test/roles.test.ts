import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PERMISSIONS, ROLES, autorise, validationGlobaleComplete, type Permission } from '../src/lib/roles.ts';

test('chaque permission a au moins un rôle connu', () => {
  for (const [p, roles] of Object.entries(PERMISSIONS)) {
    assert.ok(roles.length > 0, p);
    for (const r of roles) assert.ok((ROLES as readonly string[]).includes(r), `${p} : ${r}`);
  }
});

test('le rôle lecture ne peut rien modifier', () => {
  for (const p of Object.keys(PERMISSIONS) as Permission[]) {
    if (!p.endsWith('.lire')) assert.equal(autorise(['lecture'], p), false, p);
  }
});

test('ajustements globaux et maintenance réservés aux administrateurs', () => {
  assert.equal(autorise(['support'], 'ajustements.global'), false);
  assert.equal(autorise(['support'], 'maintenance.piloter'), false);
  assert.equal(autorise(['qa'], 'tests.lancer'), true);
  assert.equal(autorise(['conformite'], 'audits.lire'), true);
  assert.equal(autorise(['support'], 'audits.lire'), false);
});

test('validation globale : deux administrateurs distincts', () => {
  assert.equal(validationGlobaleComplete([{ id: 'a', roles: ['administrateur'] }, { id: 'a', roles: ['administrateur'] }]), false);
  assert.equal(validationGlobaleComplete([{ id: 'a', roles: ['administrateur'] }, { id: 'b', roles: ['support'] }]), false);
  assert.equal(validationGlobaleComplete([{ id: 'a', roles: ['administrateur'] }, { id: 'b', roles: ['administrateur'] }]), true);
});

test('affiliation des courtiers activée par la conformité seulement', () => {
  assert.equal(autorise(['conformite'], 'affiliation.activer'), true);
  assert.equal(autorise(['administrateur'], 'affiliation.activer'), false);
  assert.equal(autorise(['contenu'], 'referentiel.modifier'), true);
  assert.equal(autorise(['support'], 'referentiel.modifier'), false);
});

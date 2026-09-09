import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { validateLibrary, validateWarning, playerCatalog } from '../scripts/library.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
test('all MIDI bytes and per-edition rights match the canonical inventory', () => validateLibrary(root));
test('the browser catalog excludes archival fields and retains source links', () => {
  const full = JSON.parse(readFileSync(new URL('../catalog.json', import.meta.url)));
  const small = playerCatalog(full);
  assert.equal(small.length, full.length);
  assert.equal(small[0].provenance.sourceUrl, full[0].provenance.sourceUrl);
  for (const song of small) assert.deepEqual(Object.keys(song.provenance).sort(), ['license', 'licenseUrl', 'sourceUrl']);
  assert(!JSON.stringify(small).includes('metadataSha256'));
});
test('a warning cannot be dismissed with an unsupported or contradictory grant', () => {
  const full = JSON.parse(readFileSync(new URL('../catalog.json', import.meta.url)));
  const archive = structuredClone(full.find(song => song.provenance.archive?.licenseConflictReview?.resolution === 'explicit-public-domain-field').provenance.archive);
  archive.licenseConflictReview.copyrightText = 'Public Domain (PianoXML) | arrangement may not be';
  assert.throws(() => validateWarning(archive));
  archive.licenseConflictReview.resolution = 'ignore-warning';
  assert.throws(() => validateWarning(archive));
});

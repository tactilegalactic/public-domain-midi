import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export const categories = ['nursery rhyme', 'national anthem', 'fight song', 'classical piano', 'classical orchestra'];

export function validateLibrary(root) {
  const catalog = JSON.parse(readFileSync(join(root, 'catalog.json'), 'utf8'));
  assert(catalog.length > 0, 'Empty catalog');
  const evidence = JSON.parse(readFileSync(join(root, 'evidence/pdmx-v9.json'), 'utf8'));
  const editions = new Map(evidence.editionReviews.map(edition => [edition.id, edition]));
  const ids = new Set(), files = new Set(), hashes = new Set();
  for (const song of catalog) {
    assert.match(song.id, /^[a-z0-9][a-z0-9-]*$/, 'Invalid song ID');
    assert.match(song.file, /^[a-z0-9][a-z0-9-]*\.mid$/, 'Unsafe MIDI filename');
    assert(!ids.has(song.id), `Duplicate ID: ${song.id}`); ids.add(song.id);
    assert(!files.has(song.file), `Duplicate file: ${song.file}`); files.add(song.file);
    for (const key of ['title', 'composer', 'description']) assert(song[key]?.trim(), `${song.id}: missing ${key}`);
    assert(song.categories.length > 0 && new Set(song.categories).size === song.categories.length);
    for (const category of song.categories) assert(categories.includes(category), `Unknown category: ${category}`);
    const p = song.provenance;
    assert(['Public Domain', 'CC0-1.0'].includes(p.license), `${song.id}: unsupported license`);
    for (const key of ['sourceUrl', 'downloadUrl', 'licenseUrl']) assert.equal(new URL(p[key]).protocol, 'https:');
    for (const key of ['contributor', 'licenseEvidence', 'licenseScope', 'changes']) assert(p[key]?.trim(), `${song.id}: missing ${key}`);
    assert(Number.isFinite(Date.parse(p.retrievedAt)), `${song.id}: missing retrieval date`);
    if (p.evidenceFile) {
      assert.match(p.evidenceFile, /^evidence\/[a-z0-9-]+\.json$/);
      assert(existsSync(join(root, p.evidenceFile)), `${song.id}: missing evidence file`);
    }
    const bytes = readFileSync(join(root, 'midi', song.file));
    assert.equal(bytes.length, p.bytes, `${song.id}: changed file size`);
    const hash = createHash('sha256').update(bytes).digest('hex');
    assert.equal(hash, p.sha256, `${song.id}: changed MIDI hash`);
    assert(!hashes.has(hash), `${song.id}: duplicate MIDI bytes`); hashes.add(hash);
    assert(bytes.length >= 14 && bytes.subarray(0, 4).toString() === 'MThd', `${song.id}: missing MIDI header`);
    assert.equal(bytes.readUInt32BE(4), 6);
    assert([0, 1].includes(bytes.readUInt16BE(8)), `${song.id}: unsupported MIDI format`);
    assert(bytes.readUInt16BE(10) > 0);
    assert(bytes.readUInt16BE(12) > 0 && bytes.readUInt16BE(12) < 0x8000, `${song.id}: unsupported timing`);
    if (p.provider.includes('PDMX')) {
      const edition = editions.get(song.id), archive = p.archive;
      assert(edition, `${song.id}: missing PDMX edition review`);
      assert.equal(edition.sourceUrl, p.sourceUrl);
      assert.equal(edition.archivedLicenseUrl, p.licenseUrl);
      assert.equal(edition.metadataSha256, archive.metadataSha256);
      assert.equal(typeof archive.licenseConflict, 'boolean');
      if (archive.licenseConflict) validateWarning(archive);
    }
  }
  assert.deepEqual(readdirSync(join(root, 'midi')).sort(), [...files].sort(), 'Uncataloged MIDI files');
  return catalog;
}

export function validateWarning(archive) {
  const r = archive.licenseConflictReview;
  assert(r, 'Unresolved archive license warning');
  assert.equal(r.metadataBytesMatch, true);
  assert.equal(r.metadataSha256, archive.metadataSha256);
  assert.equal(r.sourceFilename, archive.memberPath.split('/').at(-1).replace(/\.mid$/, '.mscz'));
  assert.match(r.dataSha256, /^[a-f0-9]{64}$/);
  assert(r.dataMemberPath.includes(r.sourceFilename.replace(/\.mscz$/, '.json')));
  assert(r.reason?.trim() && Number.isFinite(Date.parse(r.reviewedAt)));
  switch (r.resolution) {
    case 'explicit-cc0-field': assert.match(r.copyrightText, /CC0/); break;
    case 'explicit-public-domain-field':
      assert.match(r.copyrightText, /^(?:In The )?Public Domain(?: \(\d{4}\)| \((?:edited by )?PianoXML(?: typeset(?:ter)?)?\)(?: \| .+)?)?$/i);
      assert.doesNotMatch(r.copyrightText, /may not|copyright|©|CC BY|rights reserved/i); break;
    case 'creator-credit-only':
      assert(r.creditedCreator?.trim() && r.creditRelationship?.trim());
      assert(r.copyrightText.includes(r.creditedCreator));
      assert.doesNotMatch(r.copyrightText, /copyright|©|CC BY|rights reserved/i); break;
    case 'creator-initials-only':
      assert(r.creditRelationship?.trim());
      assert.equal(r.copyrightText, r.creditedCreator.split(/\s+/).map(word => word[0]).join('')); break;
    case 'plate-number-only':
      assert.match(r.copyrightText, /^\d+$/); assert.equal(r.copyrightText, r.sourcePlateNumber);
      assert.equal(new URL(r.historicalSourceUrl).protocol, 'https:'); break;
    case 'expired-historical-notice':
      assert(r.copyrightText.includes(String(r.historicalPublicationYear)));
      assert(r.historicalPublicationYear < 1931 && r.composerDeathYear < 1956);
      assert.equal(new URL(r.historicalSourceUrl).protocol, 'https:');
      assert.equal(new URL(r.historicalRightsUrl).protocol, 'https:');
      assert(r.historicalSourceRights?.trim()); break;
    case 'historical-date-only': assert.match(r.copyrightText, /^\(?(?:ca\.? )?\d{4}(?:\/\d{2,4})?\??\)?$/); break;
    default: assert.fail(`Unknown warning resolution: ${r.resolution}`);
  }
}

// Deliberate allowlist: archival research must not enter the player's JS bundle.
export function playerCatalog(catalog) {
  return catalog.map(({ id, title, composer, categories, description, file, provenance }) => ({
    id, title, composer, categories, description, file,
    provenance: { sourceUrl: provenance.sourceUrl, license: provenance.license, licenseUrl: provenance.licenseUrl },
  }));
}

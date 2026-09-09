import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const pkg = JSON.parse(readFileSync('package.json'));
const catalog = JSON.parse(readFileSync('catalog.json'));
const filename = `tactilegalactic-public-domain-midi-${pkg.version}.tgz`;
const bytes = readFileSync(`release/${filename}`);
const sha256 = createHash('sha256').update(bytes).digest('hex');
writeFileSync('release/SHA256SUMS', `${sha256}  ${filename}\n`);
writeFileSync('release/notes.md', `${catalog.length} Public Domain / CC0 MIDI editions, with unchanged original bytes, category metadata and complete per-file provenance.\n\nThe package includes a compact player catalog and separate full evidence records. See README.md, PROVENANCE.md and NOTICE for usage and rights scope.\n\nInstall the versioned tarball with pnpm and commit the resulting lockfile.\n\nSHA-256: \`${sha256}\`\n`);

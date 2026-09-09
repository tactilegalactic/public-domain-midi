import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { playerCatalog, validateLibrary } from './library.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const catalog = validateLibrary(root);
mkdirSync(join(root, 'dist'), { recursive: true });
const json = JSON.stringify(playerCatalog(catalog)) + '\n';
writeFileSync(join(root, 'dist/catalog.json'), json);
console.log(`Validated ${catalog.length} MIDI editions; player catalog ${Buffer.byteLength(json)} bytes.`);

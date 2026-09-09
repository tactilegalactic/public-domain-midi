# Public Domain MIDI

A collection of 1,014 unchanged MIDI editions with explicit Public Domain or
CC0 declarations, per-file provenance, and repertoire categories. The initial
collection contains 111 nursery-rhyme, 70 national-anthem, 18 fight-song,
600 classical-piano and 222 classical-orchestra memberships. Seven editions
have two categories. Movements and alternative arrangements are separate
editions; the fight-song selections represent 12 tunes.

The canonical inventory is [catalog.json](catalog.json). Read
[PROVENANCE.md](PROVENANCE.md) for the acceptance policy and source-specific
evidence, and [research.md](research.md) for exclusions and unresolved leads.
An old composition or a free download does not establish a MIDI's license.

## Use a release

Each version publishes an npm-compatible package on
[GitHub Releases](https://github.com/tactilegalactic/public-domain-midi/releases).
No npm registry publication or install scripts are required. For example:

```sh
pnpm add -D https://github.com/tactilegalactic/public-domain-midi/releases/download/v1.0.0/tactilegalactic-public-domain-midi-1.0.0.tgz
```

Commit the resulting dependency and lockfile. Pin a versioned release URL;
do not resolve `latest` during builds. Cached package installs can be reused
offline; a clean install needs access to the release asset. Checksums are
published alongside each tarball.

| Package export | Contents |
| --- | --- |
| `@tactilegalactic/public-domain-midi/catalog.json` | Compact player metadata, categories, and source/license links |
| `@tactilegalactic/public-domain-midi/provenance.json` | Complete canonical inventory with per-file hashes and licensing evidence |
| `@tactilegalactic/public-domain-midi/midi/<file>.mid` | Unchanged MIDI bytes |
| `@tactilegalactic/public-domain-midi/evidence/<file>.json` | Source and archive evidence |
| `@tactilegalactic/public-domain-midi/package.json` | Version and package location |

The catalog's `file` is a basename within `midi/`. Consumers should emit
MIDIs as separate static files and fetch the selected one. Avoid importing
the full provenance inventory into browser JavaScript. Full provenance and
notices remain in every release package and in the versioned source repo.
For offline apps, include the files in the app build rather than fetching
them from GitHub during playback.

## Maintain the library

Node 22 or newer is sufficient; there are no package dependencies.

```sh
npm test
npm run build
npm pack --pack-destination release
```

Create the `release/` directory before the last command. `npm pack` runs the
validation/build step and includes the generated compact catalog. Generated
files are ignored in Git; the MIDI directory and full inventory are versioned.

Additions require review of the actual MIDI/edition's explicit rights grant,
original downloads, exact hashes, categories and all applicable source credits.
Follow the workflow in [PROVENANCE.md](PROVENANCE.md). Automated tests validate
the inventory and archive-warning resolutions; they do not certify rights
claims or replace musical playback review. The Type The Rhythm consumer also
checks every file with its production MIDI parser.

To release, change `package.json`'s version, commit, and push a matching `v*`
tag. The release workflow validates, packages, hashes, and attaches the
tarball to that tag's release. Existing releases must not be overwritten:
corrections require a new version so consumers can review explicit updates.

## Rights and credits

The MIDI editions retain their individually recorded Public Domain or CC0
status. Do not interpret a package-wide label as licensing every source's
other works. Compilation and evidence rights are separate; see [LICENSE](LICENSE),
[NOTICE](NOTICE), and the source-specific records in `evidence/`.

The collection was assembled for Type The Rhythm's piano-flow player. The
historical integration checks in `research.md` refer to that consuming project.

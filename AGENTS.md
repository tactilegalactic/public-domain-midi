# Library maintenance

`catalog.json` owns the inventory and complete per-edition provenance.
Original files live in `midi/`; evidence and research notes stay with them.
Never infer a MIDI's rights from its composition's age, another upload,
a site's generic footer, or the dataset compilation license.

Preserve downloaded bytes. A corrected file or different arrangement gets
its own reviewed source record. Keep original archive warning flags and
their evidence; never silence them without a documented resolution.

Run `npm test` and `npm run build` after changes. `dist/catalog.json` is a
generated allowlist of player fields; never edit it directly or add full
archival evidence to the browser catalog. Release packages include both
the compact catalog and full provenance. Keep releases versioned; do not
overwrite an artifact already consumed by a lockfile.

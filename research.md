# MIDI source research

Reviewed September 8–9, 2026. Accepted files and their evidence are in
[catalog.json](catalog.json); this log preserves rejected and unresolved leads.
An old composition does not establish the license of a modern arrangement or
MIDI sequence. No messages were sent to rights holders.

## Sources searched

Mutopia's piano and orchestra listings yielded 435 individually public-domain
labeled editions. Both direct MIDI downloads and MIDI ZIP archives were
examined, together with the associated LilyPond source declarations. Archive
members were inspected to distinguish complete ensemble scores, movements,
duplicate exports, and isolated practice parts.

PDMX v9's 254,077 archived score declarations were searched for nursery songs,
national anthems, and school/institution fight songs. Candidate metadata was
joined to the dataset's license-conflict flags and MIDI member mapping. Accepted
CC0 candidates were checked against live MuseScore license declarations when
the public viewer responded. Later archive-only reviews are explicitly labeled;
they preserve the exact archived grant without claiming live confirmation.
This is a targeted repertoire search, not a claim that all PDMX files qualify.

Commons' main MIDI listing, individual contributor pages, and nested categories
were examined. A separate category of 430 secular settings by Peter Gerloff
contained many children's songs absent from the initial listing. Individual
file licenses were checked; that category contains both CC0 and CC BY files.

## Excluded or unresolved

The recent IMSLP pass also added contemporary Zhouyuan Liu works whose
original scores and MIDI editions both explicitly carry CC0. Two exports
(Piece for Strings and Harp, and Capriccio for Violin and Orchestra) contain
no playable notes and were excluded. Patinando remains held because its work
page and score disagree on the composer identity, whose dates are unresolved.

A later pass reviewed 1,500 recent IMSLP upload entries, reaching back from
September 2026 to June 2024. Work pages were deduplicated and every MIDI
license block checked independently. New Rathgeber Op.14 and Op.16 editions
by Marco Mulzer supplied 48 qualifying ensemble files after comparing their
track rosters with the companion scores and editable Capella archives.
Op.14 No.11 and Appendix Stella coeli 2 omit several parts present in those
sources, so their incomplete MIDI exports were excluded.

Additional harpsichord/clavichord listings were checked after the piano pass.
They supplied four Bach solo-keyboard MIDI editions and the full ensemble
MIDI for Brandenburg Concerto No. 5's third movement. Its seven practice-part
MIDIs were omitted. Froberger Suite VII's unspecified Schott source and Bach
Duetto II's unspecified Peters source remain held for edition identification.
String, basso-continuo, brass, and wind listings were then checked. Qualifying
ensemble files include Grieg's Åse's Death and Anitra's Dance, Lully's Armide
Act II Scene III, and only the Largo of Schreck's BWV 1056R reconstruction.
Quartets and small chamber works were not relabeled as orchestral repertoire.
Vivaldi RV 540's unspecified Ricordi edition remains unresolved. Corelli Op.6
No.8's quartet adaptation supplies only small MIDI fragments, despite a score
source containing the larger work; it is not presented as a complete concerto.

The 1,113 entries in the IMSLP archive were matched to their original work
pages and exact synthesized/MIDI blocks. Most did not carry a qualifying MIDI
license despite the dataset's CC0 name. The accepted subset is documented in
[evidence/imslp-editions.json](evidence/imslp-editions.json). The contributor's
page led to two additional Pezold suites outside that archive. Complete source
downloads were preferred over the archive's isolated first movements where
available; source checksums verified both retrieval methods.
The separate IMSLP national-anthem category was also reviewed: 123 work pages
yielded 14 MIDI links, all carrying attribution, share-alike, or noncommercial
licenses. None qualified for this batch. Phil Bacon's public upload list had
only the already accepted Czerny MIDI; his other recent performances were
audio/video files. His profile explicitly identifies the uploader Ken3690 as
the credited creator, and that identity link is recorded in the catalog.
Following other public contributor lists found the eight CC0 movements of
*Uns ist ein Kind geboren*. The 2018 editable source was checked; its own
attribution agrees with Bach Digital that the composer is unknown, with
historical Bach and possible Kuhnau attributions. Recent Różycki MIDI uploads
from Polish Digital Scores instead require CC BY 4.0 and were excluded.
The accepted contemporary Arian Mehr symphony and piano sonata explicitly
dedicate both the original score and MIDI with CC0; companion PDFs were
checked. His Suite Symphonic Op.55 has contradictory “Copyright protected”
notes and remains excluded despite its license-field labels.
The contemporary Turner keyboard editions, Harder gigue, and Keyes anthem
variations also dedicate both the composition and MIDI. Their companion PDFs
and MIDI credits were checked. Dumas’s *Temptations* is explicitly dedicated,
but its sparse MIDI omits the score’s unnotated cadenza; it was held as an
incomplete rendering rather than advertised as the roughly seven-minute work.

| Candidate/source | Reason |
| --- | --- |
| Robert Alexander piano sonatas, recent IMSLP uploads | MIDI has CC0, but the original manuscript edition explicitly displays Non-PD US and Non-PD EU. Held for underlying composition/territorial rights; the Canadian source label is not treated as a worldwide MIDI clearance. |
| [Benjamin Robert Tubb / Public Domain Music](https://dirkncl.github.io/pdmusic_org/) | The site distinguishes public-domain compositions from its copyrighted MIDI sequences. Its name is not a MIDI dedication. |
| [On, Wisconsin! on MidiShow](https://www.midishow.com/en/midi/93211.html) | MIDI metadata credits a 2009 copyright to Benjamin Robert Tubb; no PD/CC0 grant. Login would not resolve this rights gap. |
| [Washington and Lee Swing on Sheet Music Singer](https://www.sheetmusicsinger.com/washington-and-lee-swing/) | Sequence credited to Tubb, without an explicit unrestricted MIDI license. |
| [Washington and Lee Swing on abcnotation](https://abcnotation.com/tunePage?a=tunearch.org/wiki/Washington_and_Lee_Swing_(1).no-ext/0001) | Modern transcription credited to Frank Maloy / Fiddler's Companion; no explicit PD/CC0 grant for that transcription. |
| [The Victors on IMSLP](https://imslp.org/wiki/The_Victors_(Elbel,_Louis)) and [Hail to Old O. A. C.](https://imslp.org/wiki/Hail_to_Old_O._A._C._(Wilkins,_Harold_A.)) | Printed scores found; no qualifying downloadable MIDI found in their synthesized/MIDI sections. |
| [flutetunes](https://www.flutetunes.com/faq.php), 8notes, KIDiddles | Free access or an old underlying tune does not waive the providers' retained edition/MIDI rights. |
| [50states](https://www.50states.com/songs/) and [Romwell nursery collection](https://www.romwell.com/kids/nursery_rhymes/kids_midi.shtml) | Merely believed public domain, collected from other sites; no explicit creator dedication. |
| [British Royal Anthem](https://commons.wikimedia.org/wiki/File:British_Royal_Anthem.mid) and [O du lieber Augustin](https://commons.wikimedia.org/wiki/File:O_du_lieber_Augustin.mid) | Actual Gerloff MIDI editions are CC BY 4.0, despite many other CC0 uploads by the same contributor. |
| Mutopia [1634](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=1634), [1635](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=1635), [1644](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=1644) | Page says Public Domain but embedded score source carries a Creative Commons Attribution 3.0 declaration. Conflicting evidence; excluded. |
| Mozart K. 488 III, Mutopia [2229](https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=2229) | Download is a 526-byte MIDI with no playable notes. Only movements I and II are included. |
| Some other Mutopia editions | Modern source editions, unidentified arrangers, or ambiguous/incomplete movement coverage remain unresolved; a page-level PD label does not settle third-party source rights. |
| MuseScore 5874845, Ohio State tuba | Archive title suggests Buckeye Battle Cry; live arrangement is Buckeye Swag, a different modern work. Historical Battle Cry composition evidence does not apply. |
| MuseScore 1429966 / 1438311 (Robipad), Washington and Lee Swing / Tiger Rag; 5839072 Tiger Rag | Transcriptions point to a third-party Creole Jazz Band Fake Book or Real Dixieland Book arrangement, without an unrestricted grant for that arrangement. |
| MuseScore 5646831 Notre Dame Victory March | Third-party Thomas Birkner arrangement; uploader states they do not own it. |
| MuseScore 5287248 Buckeye Battle Cry | Credits modern Ralph Heine / Lisa Galvin arrangements and retained OSUMB rights. |
| MuseScore 4146801, MSU Fight Song | The recovered internal statement is Copyright 1957, Michigan State University. This is a substantive retained-rights notice, not a bare-date false positive; excluded. |
| MuseScore 5839615 Blue Devils Fight, 6355746 Straight Fight | Institution and underlying composition/arrangement rights not established. |
| MuseScore 5236812 Wisconsin | Live CC0 verified, but unattributed solo horn material could not be confidently identified as the requested fight song. |
| Modern songs with contributor CC0 labels | Rocky Top, Fly Eagles Fly, Baby Shark variants, and similar candidates still require underlying composition/arrangement clearance. A contributor cannot waive someone else's rights. |
| PDMX 5840826 Rowing Your Boat with a Jolly Good Fellow | Internal declaration is CC BY 4.0, contradicting the archived page’s CC0 label. This is a substantive conflict and remains excluded. |
| PDMX 158304 Venezuela / 158306 Ecuador | Separate band arrangements credited to Pedro Elías Gutiérrez (1947) and Pedro Traversari; their underlying edition rights remain unresolved. |
| [IMSLP MIDI dataset labeled CC0](https://huggingface.co/datasets/TiMauzi/imslp-midi-cc0-1.0) | The label is unreliable at file level. For example, its CC0 Woelfl Op.6 No.3 MIDI is CC BY-NC-SA on the original page; CC0 covers a different PDF. Individual MIDI blocks must be checked independently. |
| IMSLP Mozart K.388, Giovanni Curreli piano reduction | MIDI block says Public Domain, but the same arranger's accompanying score is CC BY-NC-SA 4.0. Conflicting edition evidence; excluded. |
| OpenGameArt Synth Chopin Fantaisie-impromptu, TheOuterLinux | Explicit unrestricted contribution found, but the MIDI and accompanying score appear to contain an accompaniment/drone adaptation with the principal piano melody missing. Not presented as a complete performance of Op.66. |
| [Polyna MIDI collection](https://midi.polyna.eu/credits.html) | Mixed sources and creator credits; no blanket unrestricted license for all sequences. Individually linked Commons sources are reviewed separately. |

## OpenScore archive review

An additional scan identified 83 OpenScore, OpenScore Transcriptions, and
OpenScore Braille editions in PDMX. Eleven unflagged editions were accepted
after checking each archived CC0 declaration, its current individual score
page, and the downloaded MIDI: Mozart's complete Jupiter Symphony, Bach's
complete Brandenburg Concerto No. 3, Butterworth's *The Banks of Green
Willow*, all four movements of Debussy's *Suite bergamasque*, three Chopin
Op. 10 études, and Glinka's *Nightingale* variations. Their edition reviews
and archived contributor credits are retained in `evidence/pdmx-v9.json`.

The Chopin website subtitles incorrectly use the keys and nicknames of
Op. 25 Nos. 3, 4, and 6. Visual inspection of all three engraved scores and
comparison with the archived MIDI opening notes identify Op. 10 Nos. 3, 4,
and 6 instead. The catalog follows that notation. The contributor's cited
IMSLP #86297 currently returns no result; no specific historical printed
edition is claimed for those three files.

[Casta diva, score 5606552](https://musescore.com/user/30859765/scores/5606552)
was held despite its individual CC0 label and clear archive flag: its
cited [IMSLP #81726](https://imslp.org/wiki/Casta_Diva_(Chopin,_Fr%C3%A9d%C3%A9ric))
is Janno's 2010 CC BY 3.0 edition, with an explicit question about the
arrangement's attribution to Chopin. A later transcriber cannot resolve
that source-edition problem merely by selecting CC0.

The [PDMX build code](https://github.com/pnlong/PDMX/blob/7abbd6d926d2df94129034eba81c10069c9dcbc4/wrangling/pdmx.py)
sets `license_conflict` whenever its parsed copyright field is nonempty.
Thus the flag is a review trigger, not proof that every flagged edition
has contradictory terms. MIDI exports do not preserve that text; attempts
to retrieve the larger original data and MusicXML evidence archives returned
HTTP 504 errors. An older, unaffiliated
[Hugging Face mirror](https://huggingface.co/datasets/openmusic/pdmx/tree/1abcc48116c3c67c048fffbd5aee435c3498dcf8)
was then downloaded and checked against its published SHA-256. All 83
OpenScore metadata records are byte-identical between that archive and v9.
Its parsed source filenames also bind the internal declarations to the same
source identifiers used by the v9 MIDI exports.

Forty further editions were accepted after resolving each flag against that
evidence. The fields contain explicit CC0 text or bare dates, rather than
contradictory license terms. Each catalog entry preserves the true flag,
exact field text, review reason, source filename, archive member paths,
metadata equality check, and hashes. The supplemental archive supplies
evidence only; all bundled MIDI bytes still come from v9. The catalog test
checks those bindings. Unreviewed flags remain unresolved.

This batch includes five Bach little preludes, Contrapunctus I, Schubert's
D.915, complete Moonlight Sonata and Op.64 waltz editions, Granados movements,
three Planets movements, all four Beethoven Ninth movements, all three Fourth
Brandenburg movements, Haydn symphonies 2/6/7/8, Dvořák concerto and symphony
movements, and Chopin's Tarantella. Separate movement exports of the same
complete Moonlight and waltz editions were omitted to avoid redundant entries.
The first Fourth Brandenburg movement's live page reports “Processing
failed”; its acceptance uses the matching archived metadata and internal
CC0 declaration. That failure is recorded instead of a successful live check.

The Haydn source scores are Landon's 1962/1965 critical editions, explicitly
marked Public Domain under IMSLP's urtext policy. They are identified as such;
the MIDI exports contain no editorial prose. This is not a claim that every
work by the modern editor is public domain. Rachmaninoff's six-hand pieces,
score 5798859, remain excluded: the cited source gives first publication in
1948, leaving underlying U.S. rights unresolved despite the transcription's CC0.

[Songs of The Ohio State University](https://www.sgsosu.net/osu/songs/song_scores.html)
has useful historical MIDI transcriptions, but its “From Public Domain”
grouping identifies the source tunes, while the site retains all rights and
does not explicitly dedicate the MIDI work. Sheet Music Singer likewise
offers many downloads without an explicit unrestricted MIDI grant found
in its reviewed information pages. Neither was treated as a blanket source.

The newer [Hauptstimme orchestral corpus](https://github.com/MarkGotham/Hauptstimme)
has an explicit CC0 grant for its scores, separate from its CC BY-SA
annotations and MIT code. Its inspected repository contains MuseScore and
MusicXML files, but no MIDI downloads. It remains a possible conversion
source, rather than a claim that MIDI files were downloaded from it.

## Territorial limitation held separately

[Project Gutenberg ebook 22035](https://www.gutenberg.org/ebooks/22035),
*Dramatized Rhythm Plays: Mother Goose and Traditional*, supplies 27 MIDI
downloads as part of its electronic edition. Its explicit public-domain
statement is **United States only**. Those downloads were staged separately
and are not bundled while that territorial scope remains unapproved.
The electronic edition credits Louise Hope, David Newman, Chuck Greif, and the
Online Distributed Proofreading Team; it does not identify one of them as the
sole MIDI creator. Historical source permissions are not represented as a
worldwide grant for every underlying arrangement.

## Login-dependent lead

[Jack's Box by Benjamin Basford on Free-scores](https://www.free-scores.com/partitions_telecharger.php?partition=89764)
has an explicit Public Domain label and a listed MIDI for the contributor's
*Pop Goes the Weasel* arrangement. The actual MIDI download requires a
Free-scores login. The description mentions inspiration from Kevin MacLeod;
the file and any embedded credits still need inspection before acceptance.
No account access was requested while anonymous sources continued to yield
qualifying downloads. A login would enable further review, not guarantee
acceptance of this candidate.

## Further contributor editions

Five previously held nursery/anthem/fight editions were accepted after the
internal-source review: Pop Goes the Weasel (1853 Porter adaptation), Finland’s
Maamme for strings, London Bridge beginner duet, Baa Baa Black Sheep for
strings, and Anchors Aweigh for band. Four warnings contain only dates; the
individual archived and current editions explicitly carry CC0. Baa Baa has no
internal declaration and an archived CC0 grant, but its current page is private.
That failure is recorded separately from a successful live license check.

The Anchors score prints a credit for modern revised lyrics. The unchanged
MIDI was inspected and contains no embedded lyrics; those words are not part
of the bundled asset. Its naval-academy association is distinct from the
edition’s contributor license. Multiple arrangements remain separate library
entries, not claims of additional distinct compositions.

Further source checks excluded Anes’s Czerny March in D minor (MuseScore
3545081): its cited WIMA.d6de score is Jürgen Knuth’s CC BY-NC-SA 3.0 edition,
so the contributor’s CC0 label does not clear that source. Järnefelt’s
Præludium (5303751) similarly cites IMSLP #81842, explicitly marked Non-PD EU.
The earlier clew3 Op.10 No.4 copy is not added alongside the already accepted
OpenScore copy of the same transcription.

The three Fauré Op.17 editions retain their internal Don Horrell transcription
credits. Nos.1 and 2 now show All rights reserved; their accepted bytes are the
older, identified CC0 archive revisions, not current exports. No current CC0
check is claimed for them. No.3 still displays CC0. CC0’s irrevocable waiver
supports retaining the documented old contribution; it does not authorize
future additions by the same account.

Adaline Shepherd’s Victory March has an actual 1918 copyright notice. Its
resolution separately records the University of Wisconsin’s 1918 publication
record, No copyright (U.S.) statement, and composer’s 1950 death. The current
crono23 edition explicitly grants CC0. The notice is preserved rather than
misclassified as an empty or bare-date field.

Fourteen complete named orchestral opera/requiem selections by chiefyblues
were accepted with their individual CC0 declarations. The MIDI exports have
no embedded lyrics and are not concert recordings. The Aida entry is the
extended triumphal scene; the contributor’s credit to Pascal Renaudin as
inspiration is retained without claiming that Renaudin licensed this edition.
Le Jeu de Robin et Marion is held: it is explicitly a piano-vocal reduction
from an unidentified professor-supplied PDF, whose arranger/source is unresolved.

## Additional anthem and hymn-source review

Seven more anthem editions were accepted from the individually licensed PDMX
archive, with the raw warning fields resolved against their identified source
files. Costa Rica uses the Public Domain Mark in both archive and current page;
it is not represented as CC0. Godowsky’s 1921 U.S. anthem arrangement has an
expired Schirmer notice matched to the named historical edition. The number
43272 in Furundarena’s Spanish anthem file is the historical publisher’s plate
number, not a copyright year. Official country sources support the anthem and
composer identifications. The archived generic Piano label for Costa Rica was
corrected to describe the actual alto-saxophone line.

[CCEH’s MIDI policy](https://www.ccel.org/cceh/cceh_cpr.htm) explicitly covers
the file/transcription/performance layers. Four accepted files also carry
embedded public-domain declarations. The Battle Hymn melody is identified
by [Georgia Athletics](https://georgiadogs.com/sports/2017/6/16/traditions) as
the tune of Glory, Glory. The catalog describes this traditional setting and
does not claim it is Hodgson’s university arrangement or Simmons’s later
trumpet solo. Ar Hyd y Nos, Murray’s Away in a Manger, and Haydn’s anthem tune
were also accepted. CCEH’s Gartan remains outside the catalog: its title alone
does not establish that it is the separately known Gartan Mother’s Lullaby.

[HymnSite’s FAQ](https://www.hymnsite.com/faq.htm) explicitly releases CARadke’s
`umh` MIDI sequences without use, redistribution, or resale restrictions. Its
separately copyrighted HymnDisk arrangements are excluded. Three selected
direct downloads match the corresponding members of the 323-file piano ZIP.
Only the in-scope selections are bundled. The instrumental Jesus Loves Me
MIDI has no lyrics; modern McGuire verses shown on its page are not included.
The America tune is labeled for its British-anthem melody, supported by the
[Government Publishing Office](https://bensguide.gpo.gov/j-america-my-country),
not as the current U.S. national anthem.

A separate search of PDMX’s Public Domain Mark branch staged 454 matching
anthem, nursery, and possible fight-song candidates with their raw metadata,
MIDI members, and matching internal-declaration evidence. Fourteen individual
editions were accepted after current file-page checks. Bulk ABC and choral
reuploads naming other transcribers remain unaccepted without those creators’
unrestricted grants. MuseScore 5747981 contains Wim Looyestijn’s explicit
noncommercial-only notice despite a Public Domain label and is excluded.
MuseScore 3371881 now shows all rights reserved; unlike the documented CC0
cases, an old Public Domain Mark label alone is not treated as an irrevocable
creator waiver. MuseScore 3584616 has conflicting internal metadata naming
Reinhardt’s Tears and remains held. MuseScore 811881’s MIDI contains only 287
pitched notes versus 1,275 in the archived score data, with most instruments
limited to 23 notes; its incomplete band export is excluded.

Note counts in the supplemental MusicRender representation are not a universal
completeness test. Jupiter and Brandenburg No.3 have inflated supplemental
counts and inconsistent end times across parts. Independent pitch-phrase checks
find material bearing every source bar label in at least one MIDI part, and
the final twelve pitches match in every corresponding part. These supporting
checks and their limits are recorded in
[evidence/pdmx-playback-review.json](evidence/pdmx-playback-review.json); repeated
phrases do not prove every inner note or repeat is correct. Bach's Partita No.6
also reaches its final source bar, with matching right-hand closing phrase and
left-hand final five pitches. No MIDI was reconstructed from the supplemental
data, whose timing is not the player's source.

Five further individually checked Public Domain Mark anthem editions add Brazil
piano, Germany harmonica, Britain SATB, and U.S. trumpet and string settings.
Their complete ensemble exports are used; isolated alto/bass practice editions
are omitted.

## LilyPond songbook editions

[bbloomf's explicit repository release](https://github.com/bbloomf/lilypond-songs/blob/947527c1fb3c488e0dcf2e59385c13c3a673fe62/LICENSE.md)
covers the provided sources and generated MIDI contents. Nine editions were
accepted, with both source and publishing revisions pinned and the corresponding
PDF and MIDI hashes preserved. The files retain historical lyrics. A hymn or
folk-song title alone does not place the rest of this songbook in a requested
category.

The chorus of Hot Time in the Old Town adds another distinct fight-song tune:
[Wisconsin Alumni](https://www.uwalumni.com/news/hot-time/) identifies its use
at Wisconsin athletic events. This is the songbook setting of Metz's tune with
Hayden's historical chorus, not a modern university band arrangement or the
university's adapted words. The America and Austrian Hymn settings are labeled
for their British and German anthem melodies, with their embedded American
patriotic and English hymn lyrics identified in provenance. Good Night Ladies,
For He's a Jolly Good Fellow, and The Tailor and the Mouse are children's songs.

Root's Tramp! Tramp! Tramp! adds the tune underlying Georgetown's Cheer for
Victory and Universidad Católica's anthem. The [club's own history](https://cruzados.cl/himno/)
identifies the 1864 source and distinguishes the later adaptation. The
[Citadel's institutional history](https://www.citadel.edu/citadel-history/symposium-marching-through-time/the-modern-period/)
documents Dixie's former fight-song use and replacement. That edition is
explicitly labeled historical. Neither file is represented as a modern school
band arrangement; both retain the old songbook lyrics in MIDI metadata.

Punchinello in this repository is the Molloy/Weatherly art song, not the
children's action game with the same title, and remains out of scope. Come
Follow uses a gallows-text round whose nursery classification is unestablished.
How Lovely Is the Evening remains held because the particular English text's
origin is unresolved. The repository release is not used to invent authorship
or clear unidentified third-party lyrics.

## Further source exclusions

[NoteWorthy Scriptorium's anthem collection](https://nwc-scriptorium.org/n_anthems.html)
explicitly restricts the files to private use and disallows commercial reuse;
its extensive country list does not qualify. The Princeton Cannon Song download
on Sheet Music Singer credits James Pitt-Payne but provides no unrestricted
MIDI grant. His other hosting site's sequencer-copyright terms reinforce the
need for permission; a login would not resolve that missing grant.

[Keynata Commons](https://carf-coder.itch.io/keynata-commons-music-pack) explicitly
dedicates its machine-composed MIDI tracks with CC0, but those generated style
studies are left outside this historical-song collection. The reviewed
[m-malandro MIDI repository](https://github.com/m-malandro/CC0-midis) also has
an explicit CC0 file, but its game, rock and metal cues do not establish the
requested repertoire categories merely by including a title such as Overture.

## Additional anthem and institutional-tune review

Thirteen further individually reviewed PDMX editions cover Croatia, Portugal,
Cuba, Ireland, Poland, Sweden, Indonesia, Italy, Israel, and New Zealand.
Portugal's Lucas Cayolla edition uses the Public Domain Mark; the other twelve
use CC0. Two score URLs now redirect to contributor profiles; their identified
archived CC0 grants are retained, with the failed live checks recorded. The
short Italian accordion edition is labeled an excerpt. Generic MIDI instrument
names do not override the source's tin-whistle, viola, or accordion descriptions.

The Korean anthem candidate 5365434 points to the 2018 orchestral edition.
The [Korea Copyright Commission's actual terms](https://gongu.copyright.or.kr/gongu/singl/wrtContent/koreaAnthem.do?menuNo=200320)
require attribution for that arrangement and recording; a contributor's CC0
label does not erase those terms. It is excluded. Advance Australia Fair
5946457 remains held because the [government's use terms](https://www.pmc.gov.au/honours-and-symbols/australian-national-symbols/australian-national-anthem/australian-national-anthem-use-and-protocol)
introduce commercial-use permission requirements whose application to this
particular setting is unresolved. Negaraku 4788269 has a contradictory
permission requirement in its description. Italian anthem 5144201 and Hatikvah
5911727 have conflicting internal work identities. These are not bundled.

Waltzing Matilda 5901706 explicitly displays CC0 and adds another distinct
fight-song tune: the [Marine Corps identifies the 1st Marine Division's use](https://www.1stmardiv.marines.mil/News/Article/Article/541334/1st-marine-division-forward-memorial-ceremony-honors-its-fallen-heroes/).
The old melody's publication history is separately documented by the
[National Film and Sound Archive](https://dl.nfsa.gov.au/module/1644/).
Brass edition 606596 remains held: its printed Thomas White arrangement credit
could not be explicitly tied to the uploader's public profile. LSU 5928577
credits another arranger, and Straight Fight 6355746 has unresolved Fontaine /
Fagan credits. The Marines' Hymn is not automatically categorized as a fight
song merely because it belongs to a military institution. A subsequent
[Adelaide club source](https://www.afc.com.au/news/711559/club-song-gets-noble-treatment)
explicitly identifies the hymn as the tune for its club song, so the piano
edition 3090601 is accepted under that documented connection. The later Guy
Noble arrangement and Bill Sanders club lyrics are not included.

The [Public Domain Song Anthology](https://doi.org/10.18130/V3/C4RD06) expressly
uses CC0 for Berger and Israels' new harmonizations. Its public archive API
lists 349 PDFs, 348 Sibelius files, 348 MusicXML files, and three RTF documents;
there are no published MIDI files in that inventory. It remains a potential
source for separately documented conversions, not a downloaded-MIDI source.

## Australian club tunes and further classical editions

The [Brisbane Lions' history](https://www.lions.com.au/news/388921/origins-of-our-club-song)
confirms their adoption of La Marseillaise. The already bundled independent
anthem setting consequently has both category tags. Two self-described CC0
settings of When the Saints Go Marching In qualify through
[St Kilda's documented use](https://www.saints.com.au/news/723568/saint-nick-delivers-very-special-surprise).
The [Geelong club page](https://www.geelongcats.com.au/club/song) identifies
Bizet's Toreador March. Three CC0 editions cover a pitched-percussion setting
and two piano versions of the Carmen Prelude, which includes that theme.
The Brigham piano edition identifies Antony Choudens' 1875 reduction; its
acknowledged unplayed grace notes after trills are recorded in provenance.

The Collingwood tune remains unbundled. Goodbye Dolly Gray 5173602 explicitly
derives from Tom Potten's score 5167166, whose live page shows all rights
reserved. The latter is absent from the available archive; no prior CC0 grant
is assumed. Another candidate, 4682120, explicitly names Paul Hardy's CC
BY-NC-SA transcription despite its outer public-domain label. Similarly,
Saints 5929504 transcribes Ethel Caffie-Austin's DVD performance, 388086 admits
an unknown arrangement source, and 5951497 says the arrangement is not the
uploader's. These are excluded. Carmen 2274466 retains an explicit CC BY-SA
engraving notice internally and is excluded despite the outer label.

Seven further classical editions add Butterworth's orchestral Banks of Green
Willow, Klengel's twelve-cello Hymnus, Chopin Op.10 No.4, the three individual
Moonlight Sonata movements, and Rachel Knight's assembled Washington Post
wind-band edition. The named Butterworth, Klengel, and Sousa historical prints
were checked individually. Klengel's current page has changed to all rights
reserved; the documented archived CC0 edition is retained. Sousa's internal
field credits Rachel Knight, and the Beethoven fields explicitly say Public
Domain; these nonempty fields are reviewed rather than silently discarded.
Columbia's Pride 5174070 remains held because its cited IMSLP number differs
from the work page's historical parts, leaving the exact source unresolved.

[ToneWright's terms](https://tonewright.app/terms/) distinguish the public-domain
melodies from the bundled lesson sources and their individual licenses. The
reviewed song pages provide browser playback, not MIDI downloads or a clear
release of the app's lesson files. No app contents or synthesized recordings
are extracted for this catalog.

## Further nursery editions and export checks

Six additional editions cover the original Hill kindergarten song Good Morning
to All, three simple Happy Birthday arrangements, and two Skip to My Lou
settings (guitar and ukulele). Each contributor's actual edition was reviewed;
the unchanged MIDI exports contain no embedded lyrics. The Hill historical
source is distinguished from separately licensed modern arrangements on the
same IMSLP work page.

Walford Davies candidates 6218728, 6218732, and 6218743 have matching CC0
metadata, but their downloaded exports omit notes visible in the current
notation. For example, A Little Old Man's alto MIDI has only four note attacks,
whereas even the first displayed system contains more. A Tragedy's soprano
omits the visible “sitting on a stone” notes. Little Old Man and Little
Sixpence were removed after this visual check; their initially plausible
sparse-note counts are not evidence of completeness. Candidate 6218734,
labeled The Fly and the Humble Bee externally, actually contains a string
ensemble and an internal “2018 All Rights Reserved” notice. None of these
four exports is bundled. The separately sourced Bless You and Old Cradle Song
editions have substantially populated voice and piano parts.

She'll Be Coming Round the Mountain 1589586 changed from an archived Public
Domain Mark to a live all-rights-reserved label; it remains excluded. The
archive's bare public-domain assertion is not treated as an irrevocable CC0
grant. Other Hickory Dickory, Mountain, Ring a Ring o' Roses, Three Blind Mice,
and Mulberry Bush candidates credit Frank Nordberg, Alice Baillie, John
Chambers, or unidentified ABC transcribers without establishing their explicit
unrestricted MIDI release. The [John Chambers archive](https://trillian.mit.edu/~jc/music/abc/)
discusses copyright takedowns and notices, not a blanket public-domain grant.
One Jack and Jill search match is actually an unrelated Irish reel.

[Stanford SUPRA](https://supra.stanford.edu/midi-spec/) explicitly licenses its
piano-roll MIDI files CC BY-NC-SA 4.0, so they do not qualify.
[Miditor's license directory](https://miditor.com/midi-licenses) currently lists
118 third-party tracks, largely referring back to the already reviewed Mutopia
collection. Its statement about CC0 fallback demos is not permission to
redistribute the separately licensed curated tracks.

## Daisyfield Japanese editions and smaller archives

[Daisyfield’s Japanese collection](https://www.daisyfield.com/music/htm/-genres/japan.htm)
explicitly donates Tom Potter’s transcriptions and describes its MIDI exports.
Nine editions qualify: seven Rudolf Dittrich piano settings published in
1894–1895, Wier’s 1918 Kimigayo setting, and the 1895 Kazoe-Uta counting melody.
The corresponding PDF notices were individually checked. Kon-In No Uta’s
footer repeats an inconsistent page range; the work page independently names
its 1894 source, and the catalog records rather than propagates the bad range.
Gonbe ga Tanemaku also has an explicit donation, but its inclusion in one of
the requested categories remains unestablished. No modern orchestration or
newly generated MIDI is substituted for these historical settings.

[Wildwood Soundworks](https://wildwoodsoundworks.com/) advertises CC0 demo
MIDIs installed on its devices. Its documentation locates these in the device’s
local demo directory. The public repositories linked from its About page were
checked, including music-device-lab, musicianeer, making-music, riffcrafter, and
karaoke-band; their complete trees contain no MIDI download bundle. A device
access lead remains, rather than a publicly downloadable catalog.

[Rag’s Rag](https://ragsrag.com/about/about.html) describes making MIDI-based
virtual performances, but the current public downloads are MP3 and PDF. Its
broad public-domain language is also qualified for newer compositions. No
MIDI download was found in the current index or About page.

The [Free Hymn Project](https://www.saministries.org/FHP/) distinguishes genuinely
public-domain MIDI editions from contemporary songs with credit and lyric
restrictions. Its small index did not yield a clearly in-scope new edition.
The [Patey public-domain tune index](https://www.pateys.nf.ca/cgi-bin/tunes_pd.pl)
describes musical-setting rights, without establishing an equally explicit
unrestricted grant for the modern MIDI sequences. Those files remain held.

The [Algomus orchestration repository](https://gitlab.com/algomus.fr/orchestration)
currently publishes score files and annotations, not MIDI files. Its individual
reference files distinguish CC0 score sources from restricted editions; in
particular the listed Beethoven Fourth edition is CC BY-NC-SA. Those references
are useful discovery leads, but do not turn the repository’s annotation or
database license into a MIDI grant.

The [OpenGameArt Mozart 25 upload](https://opengameart.org/content/c64-mozart-symphony-no-25-part-1)
explicitly releases TheOuterLinux’s contribution as CC0 and supplies an actual
MIDI plus companion PDF. Its seven-part synth setting retains the opening
violin theme and has populated parts through the closing section. It is labeled
as a synth adaptation of the first movement, with the source’s 1880 edition
claim preserved. This differs from the previously rejected Chopin upload,
whose principal melody was missing.

Three Algomus references led to qualifying PDMX downloads of the first
movements of Mozart’s Symphonies 38, 39, and 40. Each live source independently
confirms its archived grant (CC0, Public Domain Mark, and CC0 respectively).
The Beethoven Seventh candidate 6325970 has clear CC0 evidence and names the
public-domain Litolff 1870 source (IMSLP 504084), but its MIDI has an empty
Contrabbassi track although the matching internal score data contains 1,953
bass notes. The expected opening bass pitch 33 is absent from all MIDI tracks
at the opening attack. The export is held for missing-part review; it is not
bundled merely because its rights evidence is satisfactory. The current live
score also includes a second movement, whereas this archive export covers only
the first.

A byte-level audit found that the later-reviewed Butterworth and Chopin Op.10
No.4 contributor downloads exactly duplicate already bundled OpenScore
republications. Each pair is represented once in the player, retaining the
alternate contributor provenance and edition review.

## Additional scan and fight-song leads

[Pianola.co.nz](https://pianola.co.nz/public/index.php/web/zip_download)
provides downloadable piano-roll MIDI scans, including several bulk collections.
Its home and download pages offer free downloading/listening but do not give
an explicit public-domain dedication or unrestricted redistribution grant for
the actual scans. No files from those collections are bundled.

[Drew’s Sheet Music](https://drewm.com/sheetmusic/classical/) provides MIDI
transpositions, but its repository’s MIT grant is expressed for software and
associated documentation. The repository also contains modern game-music
transcriptions. No blanket music clearance is inferred from that software
license.

The archived ThomasMauger Rambling Wreck edition (MuseScore 5725422) cites
Mike Greenblatt’s original 1911 arrangement, with a CC0 page declaration and
an internal date-only field. Georgia Tech’s history distinguishes that early
arrangement from later Roman and Greenblatt revisions. The arranger’s rights
outside the U.S. remain unresolved; this is held rather than treating the
1911 date as worldwide clearance. The [institutional history](https://www.livinghistory.gatech.edu/?calcid=21071&calpgid=10144&cc=1&cid=21073&crid=0&ecid=21073&gid=45&pgid=10146&sessionid=ea975886-3da6-472a-80fc-98dc31d28701&sid=1481)
also records a separate 1953 transfer, which does not itself clear this MIDI.

## PianoXML and Lyapunov editions

Fifteen PianoXML piano editions were accepted from their identified archived
CC0 revisions. Their matching internal declarations say Public Domain
(PianoXML typeset), so the archive’s nonempty-field warnings are retained and
resolved as explicit edition dedications. Named source editions by Köhler,
Klee, Clara Schumann, Kretzschmar, Ruthardt, and Godowsky were checked against
the exact IMSLP file blocks; edition details and source-page hashes remain
in the catalog. Three Schumann miniatures do not name a historical edition,
but their creator’s text explicitly releases the PianoXML contribution.

The complete Clementi Op.36 collection and separate editions of Nos.1–3 are
labelled separately. They overlap in repertoire and are not counted as distinct
compositions. The complete collection preserves movement headings for all six
sonatinas; the separate downloaded MIDI editions are not generated splits.

Live confirmation could not be completed for this batch because the public
viewer repeatedly timed out. These entries explicitly say their current pages
were not independently verified; no successful check timestamp or page hash
is invented. The accepted grant remains the preserved, identified archived
CC0 declaration, reinforced by the internal typesetter dedication.

Y. Murakami’s Lyapunov Nocturne Op.8 has a separately confirmed live CC0 label.
Its cited Breitkopf & Härtel 1893 edition, plate 22583, is explicitly Public
Domain. The opening bass arpeggio and delayed right-hand entry were checked
visually against the downloaded MIDI. Lyapunov’s two 1952 Muzgiz-source
preludes and the remaining staged piano candidates are still under review.

## Remaining PianoXML archive review

A contributor-specific archive search found 76 further editions. Forty-eight
were accepted after checking their individual declarations and cited historical
sources; 28 are held. Public Domain Mark entries in this set also have a
matching internal dedication of the actual PianoXML typesetting. Current-page
checks are explicitly unverified. The original flags, declarations, archived
page metadata, MIDI members, and source-edition hashes remain recorded.

The accepted set includes keyboard pieces by Schubert, Purcell, Haydn, Beach,
Burleigh, Heller, Spindler, Lynes, and others. The D.781 collection is labelled
Nos.2–12 rather than a complete twelve. Petzold replaces the legacy Bach credit
for BWV Anh.114 and 115; uncertain notebook attributions remain qualified.
Spindler’s Antique Style title and its description’s conflicting No.1 text are
both preserved in the provenance.

| Held editions / source | Reason |
| --- | --- |
| Scarlatti K.32 and both K.64 versions, IMSLP #133241 / #280704 | Pierre Gouin’s modern CC BY-SA source editions. |
| C.P.E. Bach La Caroline, Fantasia H.195, March H.1/3, Polonaise BWV Anh.125, IMSLP #406606 / #313987 / #245130 / #245131 | TobisNotenarchiv’s noncommercial edition grants. |
| C.P.E. Bach Solfeggietto, IMSLP #287132 | Drew Weymouth’s CC BY-NC edition. |
| Duncombe Sonatina, IMSLP #305921 | Dillon Upton’s CC BY edition. |
| Zipoli Fughetta, IMSLP #328470 | Anton Höger’s separate noncommercial arrangement. |
| André Sonatina, IMSLP #3369 | Bas Wassink’s Mutopia CC BY edition. |
| Schubert D.145 and D.783 excerpts citing #37832 / #38459 | Eduard Beninger’s editorial layer; he died in 1963, so the page’s regional PD label does not establish the intended unrestricted scope. |
| Scarlatti K.391, IMSLP #335047 | Kenneth Gilbert’s 1971 urtext; source expressly qualifies its copyright status. |
| Chopin Cantabile B.84, IMSLP #6555 | First publication in 1931 and a ca.1950 source edition remain unresolved for this use. |
| Bartók selections citing #857 / #858 | Undated Muzyka collection with an unidentified editorial layer; underlying old melodies do not settle that edition. |
| Pleyel Sonatina 4 and Gossec Gavotte | Unresolved C. Blumenthal editor or unidentified piano arranger/source. |
| Burgmüller Arabesque and Ballade | Cited IMSLP #337047 is removed/unresolved; nearby #337046 is not assumed to be the same edition. |
| Borodin Rêverie, MuseScore 5574580 | Internal declaration explicitly questions the piano arrangement’s rights, contradicting a clean blanket waiver interpretation. |
| Haydn Allegro Scherzando Hob.III:75/4 | A separate piano arrangement is credited to Haydn without enough source evidence to establish that claim. |

PianoXML score 3793001 (Schubert D.915) produces exactly the same MIDI bytes as
OpenScore 4040956. The player keeps one file; both source editions and their
separate licensing reviews remain in the provenance records.

### Later anthem leads and Lyapunov editions

CPDL lists explicitly public-domain editorial editions of The Star-Spangled
Banner (Douglas Walczak, CPDL 88726) and Battle Hymn of the Republic
(Jennifer Lee, CPDL 21457). Its public pages, API, and documented public
mirrors returned HTTP 403 during retrieval. These remain leads; no MIDI
was imported. CPDL's default license is not treated as a public-domain grant.

Cantorion score 3874 identifies Charles Tanner's intermediate-piano God Save
the King as Public Domain. Its linked “MIDI recording” is an MP3 at Internet
Archive item GodSaveTheQueen_305. Retrieval of the item's original-file
metadata failed; no downloadable MIDI or MIDI-specific grant was established.

Murakami's Lyapunov Chant d'automne Op.26 and Berceuse Op.11 No.1 were
added from their unchanged PDMX MIDI members. Both archived editions
explicitly declare CC0 and cite identified public-domain Zimmermann prints.
Chant d'automne was also confirmed CC0 live; Berceuse's live viewer did not
return a readable license row. This distinction is recorded per file.

### Musemeister's Schumann and Hummel transcriptions

Thirteen further CC0 archive editions were added: the six Schumann Op.3
studies, six Op.10 concert studies, and Hummel's Scherzo in A major. The
contributor links historical IMSLP sources; their relevant complete musical
editions explicitly state Public Domain. Every archive source has a null
internal copyright field, matching metadata in the two preserved archives,
and note events in both MIDI piano staves. Current live license rows were
not independently confirmed.

Op.3 source descriptions quote a separately translated preface. This prose
is not part of the MIDI; no rights to the translation are claimed. Op.10
No.6 retains the contributor's warning about uneven arpeggio playback.
Op.10 No.1 uses its Schumann opus identifier because the uploader and IMSLP
index disagree about the number of the underlying Paganini caprice.

The Rakes of Mallow at Ireland-Information has a direct MIDI download but
no explicit MIDI rights grant. A public-domain statement on a separate
dulcimer score does not license that linked sequence; it remains excluded.

John Field's H.46 (uploader No.10) and H.56 (No.11) are also included from
hmscomp's explicit CC0 archive editions. Their keys and musical openings
match the identified works. No historical print is credited, so the catalog
does not invent one. H.46 appears under different numbers in different
collections; the H-number disambiguates it.

Vodery's Carolina Fox Trot adds a 1914 piano rag / foxtrot. The contributor
crono23 explicitly grants CC0 in the archived edition. Its internal field
contains only the historical date 1914, which matches the Jos. W. Stern
publication explicitly marked Public Domain by IMSLP. The piano player does
not recreate physical hand-clap or piano-knuckle effects.

### Final orchestral pass

A final 132-candidate CC0 search produced 41 editions for file-level review.
Thirty-five additional MIDI byte sequences were accepted: Brahms Symphony
No.1 movements I–IV and No.2 III; Beethoven Symphony No.9 I–III and Emperor
Concerto II–III; Chopin Concerto No.1 I–III; Tchaikovsky Concerto No.1 I–II
and Symphony No.4 IV; Grieg Åse’s Death and Concerto II; Mozart Symphony
No.40 I–IV, Prague II–III, Clarinet Concerto Rondo and Figaro Overture;
Handel HWV 306 I and HWV 310 Basso ostinato; Haydn Symphonies 6 and 7;
and Vivaldi RV 129, 157, 242, 514 and 580. These are contributor editions
and movements, not 35 newly discovered compositions. Live license rows
were not independently verified in this pass; the exact archived CC0
declarations and same-edition metadata bindings are preserved per file.

Haydn score 5435811 is byte-identical to the retained OpenScore 5442877
MIDI. Its independently reviewed provenance is preserved under that entry’s
alternate sources rather than adding a duplicate. The Haydn 6 and 7 editions
explicitly credit IMSLP #31297 and #31298, the same Landon musical texts
reviewed above; MIDI metadata contains instrument names, not the editor’s
prose. Beethoven 9’s contributor credits Litolff and the autograph, with a
personal interpretation of the second movement’s Trio metronome marking.
The historical [Litolff full score, IMSLP #516488](https://imslp.org/wiki/Symphony_No.9,_Op.125_(Beethoven,_Ludwig_van)#IMSLP516488)
is explicitly Public Domain. This corroborates the named publisher without
claiming that the uploader identified that exact scan.

The four Jayden Fung Vivaldi editions initially appeared to have absent
continuo parts because their upper harpsichord/organ staves are empty.
Inspecting all staves together resolves this: the lower staves contain the
continuo, with organ pedal staves also unused where present. Their MIDI
exports are included unchanged. Pitched-track checks intentionally exclude
General MIDI percussion channel 10; a percussion-only track is not an
absent pitched instrument.

Dvořák Symphony No.8 candidates 5379777, 5379779 and 5379782 explicitly
retain plate BA 10418, identifying the modern Bärenreiter critical edition
by Jonathan Del Mar. The [publisher’s edition discussion](https://www.takte-online.de/en/orchestra/detail/artikel/von-fehlern-und-vermutungen-gereinigt-antonin-dvoraks-viii-symphonie/index.htm)
does not supply an unrestricted grant for that editorial layer. They are
held. Candidate 5316899, the first movement by the same contributor, has a
Public Domain internal field but does not resolve which source edition was
used; it is held pending that review rather than assuming it shares either
the older source or the later edition. Tchaikovsky Symphony No.6 “Final”
1578536 remains a musical-identification/quality-review candidate; its CC0
label alone does not complete that review. None of these five held files
is linked into the player.

The final library has 1,014 distinct MIDI byte sequences: 111 nursery-rhyme,
70 anthem, 18 fight-song, 600 classical-piano and 222 classical-orchestra
category memberships. Seven entries have two categories. The 18 fight-song
editions represent 12 distinct tunes; arrangement and movement counts are
not presented as unique song counts.

Both Field nocturnes (5691777 and 5899996) subsequently returned explicit
live Creative Commons copyright-waiver rows during the final review. Their
individual records now distinguish these successful confirmations from the
earlier unavailable checks.

The earliest 29 PDMX imports originally kept their individual declarations in
the catalog. The final audit also consolidated them into `editionReviews`,
rechecking their raw v9 metadata against the matching supplemental metadata,
source filenames and null internal copyright fields. All 290 PDMX catalog
entries now have matching shared edition records, and the automated test
requires their source URL, explicit archived license and metadata hash to agree.

### Last fight-song source check

[StringSkills’ Tunes in Multiple Keys](https://stringskills.com/tunes-in-multiple-keys/)
offers MIDI accompaniments for Notre Dame Victory March, Michigan State
Fight Song, On Wisconsin and The Victors. Its explicit public-domain
statement applies to the familiar melodies; it does not expressly dedicate
the creator’s new accompaniment MIDI files. The reviewed Notre Dame violin
PDF and site homepage provide no such grant either. These remain excluded;
free educational downloads and third-party testimonials about copying are
not treated as unrestricted MIDI permission. No login would resolve this
missing rights statement.

### Integration verification (2026-09-09)

The 1,014-file library passed all 1,029 piano tests, TypeScript, spec lint and
50 spec mutation fixtures. Every file passes the installed production MIDI
parser and produces pitched piano steps; hashes, filenames and catalog IDs
are unique. A subsequent targeted test passed after adding the cross-file
evidence assertions. These checks establish data integrity and parseability,
not independent certification of source copyright claims or a note-by-note
musical audit.

Browser checks covered category filtering, accent-insensitive search, source
and license links, phone-width layout, loading and keyboard playback. The
final RV 157 download loads as 1,811 cues and advances from 0 to 1 on C in
both development and the built site. Vite’s local preview needs the trailing
slash `/piano-flow-test/` to serve this route’s prerendered index rather than
the root-page fallback; the normal development route works without it.

The production build succeeds after bundling the Phosphor icon package in
the SSR build, avoiding thousands of first-request module imports during
prerender. This build fix and its ownership are documented in `specs/shell.md`.

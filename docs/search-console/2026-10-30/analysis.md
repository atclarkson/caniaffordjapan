# Search Console export, 2026-10-30

Site owner uploaded two exports: an initial one that turned out to be 7
days despite the intent, then the real 28-day one once flagged. The CSVs
in this folder are the real 28-day pull (`Filters.csv` confirms "Date,
Last 28 days", 2026-10-01 to 2026-10-28). The original 7-day files and
their now-superseded analysis are kept in `7-day-initial/` for reference
only, don't use them, everything below is from the full 28-day window.

Totals: 30 clicks, 2,767 impressions, 1.08% CTR, avg position 11.4.
Impressions roughly tripled from early to late October (54-65/day in
week 1 versus 127-168/day in week 4, per `Chart.csv`) while average
position drifted from ~7-9 to ~12-16 over the same span, consistent with
a young, growing site: more posts means more queries getting impressions,
including weaker long-tail ones that pull the average down even as total
reach grows. Not a red flag by itself.

## Finding 1: the travel insurance cluster is a confirmed, real gap

Same pattern as the initial 7-day check, now confirmed at a much more
reliable sample. Nine real query variants, 93 combined impressions over
the month, zero clicks on any of them, and consistently bad positions:

| Query | Impressions | Position |
|---|---|---|
| travel insurance japan | 66 | 26.4 |
| how much is travel insurance to japan | 16 | 71.6 |
| travel insurance for japan trip | 2 | 64.5 |
| insurance japan travel | 2 | 86 |
| japan travel insurance | 2 | 88.5 |
| travel insurance to japan | 2 | 94 |
| japan trip insurance | 1 | 64 |
| do you need travel insurance for japan | 1 | 67 |
| travel insurance for japan | 1 | 88 |

`travel-insurance-japan-trip-cost.mdx` itself: 101 impressions, 0 clicks,
position 38.99 for the month. Real, sustained demand (66 impressions on
the single query "travel insurance japan" alone), the post isn't ranking
for it at all. Worth a real look at the post itself: does it lead with
the direct "do I need it / what does it cost" answer the query implies,
or does real content people want sit buried under other material. The
single strongest, most actionable finding in this data.

## Finding 2: a real cluster of good-position, zero-click pages (now confirmed, not just a hunch)

At the full month's sample, this is no longer just noise. Eight posts
rank at position < 10 with 20+ impressions and still show zero clicks,
led by two with over 100 impressions each:

| Page | Impressions | Position |
|---|---|---|
| japan-optician-eye-exam-glasses-cost | 132 | 7.22 |
| kappabashi-knife-shop-price-cheap-vs-splurge-cost | 103 | 7.38 |
| tokyo-disney-vs-usj-ticket-price-klook-deal | 84 | 9.19 |
| copic-official-shop-tokyo-marker-price-trap | 70 | 5.96 |
| mooosh-squishy-harajuku-cost | 66 | 6.24 |
| pokemon-center-tokyo-dx-sanrio-ginza-cost | 55 | 8.33 |
| shibuya-sky-tokyo-observation-deck-cost | 27 | 9.0 |
| mipig-cafe-osaka-micro-pig-price-booking | 22 | 6.73 |

At position ~7 with 100+ impressions over a month, a typical 3-5% CTR
would predict somewhere around 3-6 real clicks. Zero is a real anomaly
now, not small-sample noise, especially for the top two. Worth a real
audit pass on titles and meta descriptions for at least these two first:
do they read as something worth clicking in an actual SERP snippet, or
do they undersell what's a genuinely useful page. `japan-optician-eye-
exam-glasses-cost` is also Finding 3 below, worth starting there.

## Finding 3: one title breaks house style

`japan-optician-eye-exam-glasses-cost.mdx`'s title is "What an Eye Exam
and New Glasses Actually Cost in Japan", the word CLAUDE.md's "Style"
section flags as a crutch word, especially in titles. Predates that rule
being written down. Given this page is also the top entry in Finding 2
(132 impressions, zero clicks, good position), it's a reasonable first
real test: fix the title, watch whether CTR moves on the next export.

## Finding 4: the otter cafe page converts, but not on its own obvious head term

`otter-cafe-harajuku-shibuya-tokyo-cost` is the top page this month (6
clicks, 177 impressions, 3.39% CTR). But the generic query "otter cafe
tokyo" itself sits at position 32.3 with 0 clicks, and bare "otter cafe"
at position 57.33. The page's real clicks are coming from more specific,
longer queries, not the head term a reader would type first. Not
necessarily broken, long-tail-first is a normal pattern for a newer
page, but worth knowing the page isn't yet winning the obvious short
query, if it ever ranks for "otter cafe tokyo" at a real position the
click volume could jump well past what long-tail alone delivers.

## Finding 5: real non-English queries landing on an English-only site

A handful of real queries in Japanese, Turkish, and German turned up in
the raw list (`何円する？`, `400円じゃないの？`, `fiyatları ne`, `wie
viel kosten die dort`), each low single-digit impressions. Not something
to act on, the site is English-only by design, just a real signal that
some non-English demand exists. Noting it rather than acting on it.

## What's validated and working

`otter-cafe-harajuku-shibuya-tokyo-cost` (6 clicks/177 impr) and `ueno-
zoo-vs-tennoji-zoo-osaka-tokyo` (4 clicks/108 impr, 6.51 avg position)
are the two real standouts this month. `narita-airport-mario-sign-
lounge-history-transit-cost` has the best real CTR on the site (13.33%
at position 5.47 on 15 impressions), small sample but a real model worth
noting for what a working title/description combination looks like.
Nothing to fix on any of these, worth knowing what's already working
before changing things that aren't broken.

## For future exports

Drop new CSVs in a new dated folder here (`docs/search-console/<date>/`)
and append a dated section to this file (or a new one if this file gets
unwieldy) rather than losing the historical comparison. The real value
compounds across snapshots: whether the Finding 1/2/3 fixes actually
moved the numbers is only answerable by comparing against this baseline
next time.

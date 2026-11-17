# Tables in posts

Added 2026-11-17 (owner: "tables are very hard to read... a reusable system").
Built at compile time by `scripts/rehypeTables.mjs`, styled by
`src/styles/tables.css` and `src/styles/table-blocks.css`. No JavaScript ships.

## Layer 1: every markdown table, automatically

Write a normal markdown table. With no extra markup it gets:

- a clean header row (sentence case, tinted), striped rows, bold row labels
  (the first column is always the row label, so put the name there);
- a **Total** row highlighted (any first cell containing "total", "all in"
  or "altogether");
- **breakdown** style for a two-column cost list (has a Total row, or most
  values are prices): receipt-like dashed rules, prices right-aligned;
- on phones, any table of three or more columns turns into one card per row,
  each value labelled with its column name;
- a big table (five or more columns, or more than six rows of four or more
  columns) stays a grid at every width: it scrolls sideways with the first
  column pinned, rather than stacking into a long run of cards. (Changed
  2026-11-17: 11 airlines as cards was a wall the owner called undigestable.)

So in a `.md` post, a plain table is fine. Keep the first column short (it's
the label), keep cells short, and push long explanations into prose.

## Layer 2: pick a layout (`.mdx` only)

Wrap the markdown table in `<Table ...>`, with blank lines inside. No import:
the build replaces the wrapper.

```mdx
<Table variant="cards" feature="Typical fee" badge="Hours" detail="Card networks" note="*Footnote text.">

| Network | Hours | Card networks | Typical limit | Typical fee |
|---|---|---|---|---|
| Seven Bank (7-Eleven) | 24 hours | Visa, PLUS, ... | ~¥100,000 | ¥110 to ¥220+ |

</Table>
```

| Variant | Use it for | Shape that fits |
|---|---|---|
| `cards` | Comparing 2 or 3 options with mixed facts (ATM networks, eSIMs, passes, hotels) | One row per option, **3 rows max** |
| `matrix` | Options side by side, attribute by attribute; good when readers scan one attribute across options. Falls back to cards on phones | One row per option, **3 rows max** |
| `rows` | A normal table with one long column (a list of cards, a note) moved to a line under each row | Any |
| `breakdown` | Force the receipt style on a 2-column cost list | Item, price |
| `table` | Force the plain enhanced table (no auto breakdown) | Any |

Props (all optional, column names match the header text):

- `feature`: the headline column, shown big (cards) or first and bold
  (matrix). Defaults to the last column whose name has fee, price, cost or total.
- `badge`: a column shown as a small chip under the name (cards). Short values only.
- `detail`: a long column moved to the bottom of each card, or under each row (`rows`).
- `highlight`: the name of the row to outline as the standout option. Only
  when the post makes that call in prose.
- `note`: one line of small print under the block (footnotes for `*` marks).

Writing conventions the layouts use:

- `Name (subtitle)` in the first column becomes a name plus a small subtitle:
  `Seven Bank (7-Eleven)`.
- A value ending in brackets gets the bracketed part as a small note line:
  `¥50,000 (most commonly cited)`.
- Long qualifiers go in `note` with a `*`, not in the cell: `¥110*`.

**Hard limit: `cards` and `matrix` take at most 3 options.** With 4 or more
rows the build ignores the variant and renders the table instead. Comparing
more than three things side by side is a table's job, or a sign the post
should narrow down to the three that matter.

## Picking one

- Cost of a day or a trip, item by item: plain table (auto breakdown), with a Total row.
- Then vs now, cheap vs splurge, A vs B with a blank first header: plain table.
- 2 or 3 named options compared on several facts: `cards`, or `matrix` when
  every fact is short.
- Many rows of rules or details (airlines, stations): plain table, which
  scrolls with the first column pinned; keep cells to a few words and put
  exceptions in prose.

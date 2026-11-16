# Legal page archive

A readable copy of every past version of the site's legal wording, so there's
a record of what the site said and when. Git history has the exact source too.

| File | In effect |
|---|---|
| `2026-09-07-privacy-policy.md` | 2026-09-07 to 2026-11-10 (/privacy/) |
| `2026-09-07-terms-of-use.md` | 2026-09-07 to 2026-11-10 (/terms/) |
| `2026-09-07-legal-notice.md` | until 2026-11-10 (/legal/, the version just before the merge) |
| `2026-11-10-privacy-terms-affiliate-links.md` | 2026-11-10 to 2026-11-16 (/legal/) |
| Current | 2026-11-16 onward, live at /legal/, copy in `src/i18n/ui/en/pages.ts` under `legal` |

When the legal copy changes: save the outgoing version here as
`<date it took effect>-<name>.md`, add a row, and bump `LEGAL_UPDATED` in
`src/pages/[...locale]/legal.astro`.

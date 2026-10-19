# Affiliate reference (full family list)

The site owner shared their full affiliate spreadsheet on 2026-09-11, across
every site the family runs, not just this one. **`src/data/telecomAffiliates.ts`,
`src/data/transitAffiliates.ts`, and `src/data/affiliates.ts` are the only
parts of this wired into actual site code.** Everything below is reference
only, for when a future post's content genuinely calls for one of these, not
a list to wire in wholesale.
Can I Afford Japan is a Japan travel and affordability blog, most of these
belong to the family's other sites and businesses and have no reason to
appear here unless a specific post is actually about that thing.

Do not invent or round any number below. If a term isn't listed, it wasn't
given, don't guess one.

## Travel (beyond Klook/GYG/Expedia, already in `src/data/affiliates.ts`)

- **Hotels.com**: via Expedia Group creator portal (creator.expediagroup.com).
- **Trafalgar**: earn 5%. `https://trafalgar.sjv.io/c/6317027/2176743/26706`
- **Viator**: a real, working affiliate link exists, found in the family's own
  YouTube description on the Kobe day-trip vlog rather than in the original
  spreadsheet this doc was built from: `pid=P00074464&mcid=42383`. Generic
  storefront: `https://www.viator.com/?pid=P00074464&mcid=42383&medium=link&medium_version=selector&campaign=generic`.
  Destination-specific pages work too, e.g. Kobe:
  `https://www.viator.com/Kobe/d27432-ttd?pid=P00074464&mcid=42383&medium=link&medium_version=selector&campaign=Vlog150`,
  swap the city path and campaign value for other destinations. A second
  real, video-description-sourced link found 2026-10-19, specific to a
  Yokohama day tour (not just the generic city page):
  `https://www.viator.com/tours/Yokohama/Yokohama-Private-Full-Day-Tour/d25747-27666P40?pid=P00074464&mcid=42383&medium=link&medium_version=selector&campaign=vlog-96-yokohama`.
  Worth checking a video's own description for a specific tour-page link
  like this before defaulting to the generic city page. No stated
  commission rate found yet, don't invent one.
- **Skyscanner**: `https://skyscanner.pxf.io/PONkVe`
- **LostPlate** (food tours): code `ADAMANDLINDS`, we get 8%, customer gets
  $5 off each booking. Example link:
  `https://lostplate.com/shanghai-evening-food-tour/` (that specific link is
  a Shanghai tour, not Japan). Checked lostplate.com directly on
  2026-10-19: it runs no Japan tours at all, only China, Cambodia,
  Thailand, Vietnam, and Portland, Oregon. Not usable on this site
  until that changes, don't force a Japan post around it.
- **G Adventures**: `https://gadventures.sjv.io/QYOJ1P`

## Telecom (eSIM, SIM, pocket wifi)

Live in `src/data/telecomAffiliates.ts`, the real source of truth. See that
file rather than this doc if writing a post that uses one of these.

## Transit (buses, trains, passes)

Live in `src/data/transitAffiliates.ts`, the real source of truth. See that
file rather than this doc if writing a post that uses this. Sent by the site
owner 2026-10-16, forwarding a real 12Go affiliate outreach email.

- **12Go** (bus, train, and pass booking across Japan and the wider region):
  standing code `ADAMANDLINDS`, link `https://12goasiapteltd.sjv.io/KBLKge`,
  no stated discount percentage or commission rate for this one, don't
  invent one. Separately, a time-limited new-user promo code `12GOJP` (10%
  off, up to $4 USD, Japan routes only, new users only, valid until
  2026-12-31, 500-code redemption quota) came in via the same outreach
  email, also in `transitAffiliates.ts` as `twelveGoPromo`. Check its
  `validUntil` before using it in any post, it expires.
- **Klook also sells shinkansen tickets**: the site owner flagged
  `https://www.klook.com/japan-rail/shinkansen/` as a real page worth
  linking for a shinkansen/JR post. This uses a **second, separate real
  Klook account** the site owner holds specifically for the JR/shinkansen
  campaign (aid `42202`, aff_adid `1503965`), confirmed by the site owner
  2026-10-16, not a mismatch or a copy-paste error, both this account and
  the main ADAMANDLINDSKLOOK one (aid `92051`, aff_adid `1420301`) are
  genuinely theirs. Use `klookJrRedirect()` (in `src/data/affiliates.ts`,
  alongside the regular `klookRedirect()`) for shinkansen/JR content
  specifically, and the regular `klookRedirect()` for everything else.

## Insurance

**Every use requires an insurance disclaimer. The family's own words: "We
can't recommend insurance."** Never write copy that recommends or endorses
a specific policy, link neutrally and disclose the affiliate relationship.

- **Faye**: `https://www.withfaye.com/quote/offer?utm_campaign=LindsayClarksonFora&utm_source=ForaTravel&utm_medium=bd-traveladvisors&utm_term=glinda`
- **SafetyWing**: `https://safetywing.com/nomad-insurance?referenceID=26057814&campaign=wst_taipei_6&utm_campaign=wst_taipei_6&utm_source=26057814&utm_medium=Ambassador&selectedPlan=NOMAD_INSURANCE_ESSENTIAL`
- **World Nomads**: `https://www.tkqlhce.com/click-101483321-15736546`

## Tech

- **Boya**: 10% off. Amazon store: coupon code `USAMZ005`. Boya's own
  store: use the link instead, `https://boya.pxf.io/raNyEG`.
- **Jackery** (solar generators/power banks): `https://jackery.sjv.io/c/6317027/1628544/18694`

## Shopping

- **Amazon**: `https://www.amazon.com?&linkCode=ll2&tag=adamandlinds00-20&linkId=fddca2426a835ac36c753dfc728d6b33&language=en_US&ref_=as_li_ss_tl`
- **Loopy Cases**: code `ADAMANDLINDS`, but "we don't get anything" from it,
  per the family's own note. Not a real monetization lever, skip unless
  there's a reason beyond commission to mention it.
- **Wayb** (travel car seats): earn 10% commission.
  `https://www.awin1.com/cread.php?awinmid=112996&awinaffid=1117223`
- **Zenni** (glasses): `https://zenni.pxf.io/m4Zy0a`

## Music (for video/content production, not reader facing)

- **Artlist**: `https://artlist.io/Adam-1851369`
- **Epidemic Sound**: using this link gives the customer 2 months free and
  the family 1 month free. `https://share.epidemicsound.com/jz56gp`

## IT

- **Backblaze**: `https://secure.backblaze.com/r/00oxm4`
- **ExpressVPN**: family earns $13 to $36 on annual plans, customer gets 4
  extra months free on the 2 year package.
  `https://www.expressvpn.com/adamandlinds`
- **NordPass**: 10% to 100% CPS revenue share.
  `https://go.nordpass.io/aff_c?offer_id=488&aff_id=126793&url_id=9356`
- **NordVPN**: 30% to 100% CPS.
  `https://go.nordvpn.net/aff_c?offer_id=15&aff_id=126793&url_id=902`

## Finance

- **Greenlight** (kids debit card): `https://share.greenlight.com/15906669`
- **Travel Spend** (budget tracking app): code `ADAMANDLINDS`, customer
  gets 50% off the annual plan, family gets 3 euro.
  `https://get.travelspend.app/?o=adamandlinds`

## Education

- **Outschool**: code `ADAMANDLINDS30`, $30 toward a first class for the
  customer (doesn't carry over), family gets $40 in Outschool credit or $20
  cash each time the code is used.
- **Reading Eggs**: $5 for a subscription, 10% on product sales.
  `https://readingeggs.sjv.io/jea930`
- **Coursera**: 15 to 45% on subscriptions. `https://imp.i384100.net/Dyz1e2`

## Books

- **One Week Worldschool Guides** (the family's own book series): Amazon
  series link: `https://amzn.to/3FKL8DL`

## Donation

- **Stripe** (direct monetary gift to the family):
  `https://donate.stripe.com/fZe17ZcdLaCb0ucfYZ`

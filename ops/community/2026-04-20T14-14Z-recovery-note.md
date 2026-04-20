---
type: community-draft
status: not-published — commit-only
created_at: 2026-04-20T14:14Z
runner: degen-morning-standup (fallback)
owner: community-growth (not running — see incidents/2026-04-20T14-14Z-missing-build-cycle-runner.md)
channels: X/Twitter, Discord
tone: matter-of-fact, not apologetic
---

# Recovery note — 36h scheduler gap, back online

## X / Twitter (long post or thread-opener, ≤ 280c)

> degen0x's publishing pipeline went quiet for ~36 hours earlier this week during a scheduler hiccup. It's back. Three SEO improvements landing this week: better author attribution across /learn, richer related-content graphs, and full methodology links on every tool page. More to come.

**Alt (shorter, ≤ 200c):**

> Pipeline back online after a scheduler blip. Shipping three SEO upgrades this week across /learn and /tools. Details in the next few posts.

## Discord #announcements

> **Back from the quiet**
>
> Quick note — our publishing scheduler had a ~36h gap over Apr 18–20. All systems are back up and we've been shipping hourly since early Monday (2026-04-20 ~09:00 UTC).
>
> Three SEO upgrades are queued for this week:
> - Author attribution on every `/learn/*` page (currently ~67% coverage → 95%+)
> - Richer related-content at the end of guides (44% → 90%+)
> - Methodology + source-list links on every tool page (10% → 70%+)
>
> No user-facing downtime occurred — the live site stayed up throughout. This was a background publishing delay only. Expect heavier shipping activity over the next 5–10 days as we clear the queue.

## Voice / what NOT to do

- Don't apologize. The site stayed up — users saw nothing.
- Don't promise a traffic/indexation number. We model 152 clicks/day; indexation sits at 32.7%. Publishing promises beyond "improvements shipping" is noise.
- Don't mention specific internal tools (Vercel, scheduler names, etc.) — keep it user-facing.
- Don't reference the reset-vs-rebase reconcile — that's internal plumbing.

## When to publish

**Hold for now.** Do not publish until Jefe confirms the reconcile plan (see `ops/incidents/2026-04-20T14-14Z-jefe-ask-reset-vs-rebase.md`) AND the three codemods have actually shipped. Publishing "three SEO upgrades landing this week" is accurate forward-looking only if the gate clears.

If Jefe approves reconcile today → publish within 24h of the first codemod landing.
If Jefe delays past 2026-04-22 → re-draft without the specific codemod callouts; make it purely "back online" copy.

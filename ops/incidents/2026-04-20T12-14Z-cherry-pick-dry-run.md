# Cherry-Pick Dry Run — `98771ac7` onto `origin/main`

**Timestamp:** 2026-04-20T12:31Z  
**Author:** design-polish scheduled task (Claude Opus 4.7)  
**Method:** Manual diff analysis (worktree cherry-pick blocked by EPERM on `index.lock`)

---

## Summary

A `git cherry-pick --no-commit 98771ac7` onto `origin/main` (`6358a31c`) will produce **3 merge conflicts** in exactly the files predicted by the delta review. No surprises. Resolution is mechanical, not judgment-heavy.

---

## Conflict Details

### 1. `src/components/AuthorAttribution.tsx` — CONFLICT (content diverged)

**Pre-image (our parent of `98771ac7`):**
- No `import styles` line
- No `AUTHOR_BIO_SLUGS` map
- `authorHref` = `/about#${authorSlug}` (simple)
- Inline styles throughout

**Origin HEAD (`6358a31c`):**
- No `import styles` line
- **HAS** `AUTHOR_BIO_SLUGS` map (5 entries: 0xmachina, satoshighost, degensensei, nullpointer, cipherpunk_42)
- `authorHref` = `/about/authors/${bioSlug}` with fallback to `/about#${rawSlug}`
- Inline styles throughout (same hardcoded dark colors as our pre-image)

**Our patch (`98771ac7`):**
- Adds `import styles from './AuthorAttribution.module.css'` at line 1
- Replaces all inline `style={{...}}` with `className={styles.xxx}`
- Changes avatar color palette to brand colors

**Conflict regions:**
1. **Lines 1–3** (import block): Our patch adds `import styles` before `interface`. Origin has no imports either. Clean apply — no conflict here.
2. **Lines 42–60** (slug map + href logic): Our pre-image doesn't have `AUTHOR_BIO_SLUGS`. Origin does. Git will flag this as a conflict because the context lines around `authorHref` differ. **Resolution:** Keep origin's slug map + href logic verbatim, then apply our className conversions to the JSX below.
3. **Lines 65–120** (JSX render block): Both our patch and origin modify the same `style={{...}}` blocks. Our patch replaces them with classNames; origin's version is identical to our pre-image (still inline styles). **Resolution:** Apply our className patch — origin made no changes to the JSX.

**Estimated resolution time:** 3–5 minutes. Accept origin as base, apply our three changes (import, className swap, avatar colors) on top.

### 2. `src/components/AuthorAttribution.module.css` — CONFLICT (new file)

**Pre-image:** File does not exist  
**Origin HEAD:** File does not exist  
**Our patch:** Creates the file (99 lines)

**Actual conflict risk: NONE.** Git should apply this cleanly as a new file addition. If git gets confused (rare, happens with rename detection), force it:
```bash
git show 98771ac7:src/components/AuthorAttribution.module.css > src/components/AuthorAttribution.module.css
git add src/components/AuthorAttribution.module.css
```

### 3. `src/components/RelatedContent.module.css` — CONFLICT (content diverged)

**Pre-image (our parent):**
```css
border-top: 1px solid var(--border);
color: var(--text);
color: var(--text2);
background: var(--surface);
border: 1px solid var(--border);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
border-color: #30363d;
background: rgba(22, 27, 34, 0.8);
box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
color: #58a6ff; /* hover title + arrow */
```

**Origin HEAD:** Identical to pre-image — same undefined vars, same hardcoded colors.

**Our patch:** Replaces all of the above with design system tokens + adds `focus-visible` states.

**Conflict risk: LOW.** Since origin HEAD = our pre-image for this file, the cherry-pick should apply cleanly. Git's 3-way merge sees: (base=pre-image, ours=origin=same, theirs=our patch) → auto-merge to our patch.

**If it does conflict** (context-line mismatch from whitespace/line-ending differences):
```bash
git checkout --theirs src/components/RelatedContent.module.css
git add src/components/RelatedContent.module.css
```
Our version is a strict superset — safe to take wholesale.

---

## Overall Risk Assessment

| Factor | Rating |
|---|---|
| Number of conflicts | 3 files (as predicted) |
| Conflict complexity | LOW — 1 real content merge (AuthorAttribution.tsx), 2 clean applies |
| Risk of regression | LOW — changes are CSS-only except for className swaps in TSX |
| Build risk | LOW — CSS module import is the only new dependency; file is co-created |
| Time to resolve | **5–10 minutes** with the resolution guide above |

**Recommendation unchanged: Option (a) is safe.** The cherry-pick cost is well-bounded and mechanical.

---

## Note on Dry-Run Method

The automated `git cherry-pick --no-commit` in a throwaway worktree failed due to the sandbox EPERM on `index.lock` (same issue as P1 incident). Conflict analysis was performed manually by comparing:
- `git show origin/main:src/components/AuthorAttribution.tsx` (origin HEAD version)
- `git show 98771ac7^:src/components/AuthorAttribution.tsx` (pre-image)  
- `git show 98771ac7:src/components/AuthorAttribution.tsx` (post-image)

...and repeating for each file. Results are equivalent to what `git cherry-pick` would produce.

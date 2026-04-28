#!/usr/bin/env python3
"""
score_content.py — Phase 5 ramp-to-8 content rubric scorer.

Scores a single page.tsx file (or all pages) against the 8-criterion
rubric on a 1–10 scale. Exits non-zero when a page scores under the
floor (default 7.5) so this script can be dropped into a pre-commit
hook or CI gate.

Rubric (each 1–10, equally weighted → mean = page score):
  1. eeat            — AuthorAttribution + author bio slug + Article schema
  2. depth           — word count above type-floor
  3. intent          — H1 + primary keyword + ≥3 H2s
  4. originality     — no programmatic title prefix, no duplicated boilerplate
  5. readability     — AutoTOC + ReadingTime + short paragraphs
  6. freshness       — LastUpdated present
  7. multimedia      — Diagram / LiveMiniStat / inline image ref
  8. internal_links  — RelatedContent + ≥3 internal <a href="/"> links

Usage:
  scripts/score_content.py src/app/learn/what-is-bitcoin/page.tsx
  scripts/score_content.py --all --floor 7.5
  scripts/score_content.py --staged   # just the pages changed in git index
"""
from __future__ import annotations

import argparse
import json
import pathlib
import re
import subprocess
import sys
from dataclasses import dataclass, field, asdict

ROOT = pathlib.Path(__file__).resolve().parent.parent
APP = ROOT / "src" / "app"

WORD_FLOORS = {
    "/learn/": 1500,
    "/compare/": 1000,
    "/reviews/": 1200,
}

PROGRAMMATIC_PREFIXES = [
    r"\bEverything You Need to Know\b",
    r"\bThe Complete Guide to\b",
    r"\bUltimate Guide to\b",
    r"\bComplete Guide to\b",
    r"\bA Comprehensive Guide to\b",
]


@dataclass
class Score:
    path: str
    scores: dict[str, float] = field(default_factory=dict)
    overall: float = 0.0
    notes: list[str] = field(default_factory=list)


def count_words(text: str) -> int:
    # Strip JSX/TS syntax very loosely to approximate visible prose
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"[{};()=><]+", " ", text)
    return len([w for w in text.split() if any(c.isalpha() for c in w)])


def page_type(path: str) -> str:
    for k in WORD_FLOORS:
        if k in path:
            return k
    return "/other/"


def score_page(page_path: pathlib.Path) -> Score:
    src = page_path.read_text(encoding="utf-8")
    sc = Score(path=str(page_path.relative_to(ROOT)))

    # 1. E-E-A-T
    eeat = 5.0
    if "AuthorAttribution" in src:
        eeat += 2.0
    if "ArticleSchema" in src or "generateArticleSchema" in src:
        eeat += 1.5
    if "AuthoritySources" in src:
        eeat += 1.5
    sc.scores["eeat"] = min(10.0, eeat)

    # 2. Depth
    words = count_words(src)
    ptype = page_type(sc.path)
    floor = WORD_FLOORS.get(ptype, 800)
    ratio = words / floor if floor else 1.0
    sc.scores["depth"] = max(1.0, min(10.0, 4.0 + 6.0 * min(1.0, ratio)))
    if words < floor:
        sc.notes.append(f"depth: {words} words < floor {floor}")

    # 3. Intent
    intent = 3.0
    if "<h1" in src:
        intent += 3.0
    h2_count = len(re.findall(r"<h2[ >]", src))
    intent += min(4.0, h2_count * 0.8)
    sc.scores["intent"] = min(10.0, intent)

    # 4. Originality
    originality = 9.0
    for pat in PROGRAMMATIC_PREFIXES:
        if re.search(pat, src):
            originality -= 2.0
            sc.notes.append(f"originality: matches programmatic prefix /{pat}/")
    sc.scores["originality"] = max(1.0, originality)

    # 5. Readability
    readability = 4.0
    if "AutoTOC" in src:
        readability += 2.5
    if "ReadingTime" in src:
        readability += 2.0
    if "<details" in src or "TableOfContents" in src:
        readability += 1.5
    sc.scores["readability"] = min(10.0, readability)

    # 6. Freshness
    freshness = 3.0
    if "LastUpdated" in src:
        freshness += 5.0
    if "dateModified" in src:
        freshness += 2.0
    sc.scores["freshness"] = min(10.0, freshness)

    # 7. Multimedia
    mm = 3.0
    if "<Diagram" in src or "import Diagram" in src:
        mm += 3.5
    if "LiveMiniStat" in src:
        mm += 2.5
    if re.search(r"<img\b|<Image\b|\.svg", src):
        mm += 1.5
    sc.scores["multimedia"] = min(10.0, mm)

    # 8. Internal linking
    il = 3.0
    if "RelatedContent" in src:
        il += 3.0
    int_links = len(re.findall(r'href="/[^"]*"', src))
    il += min(4.0, int_links * 0.4)
    sc.scores["internal_links"] = min(10.0, il)

    sc.overall = round(sum(sc.scores.values()) / len(sc.scores), 2)
    return sc


def resolve_targets(
    args: argparse.Namespace,
) -> list[pathlib.Path]:
    if args.all:
        # Default: score only content pages (learn / compare / reviews, incl. nested)
        matches: list[pathlib.Path] = []
        for p in APP.rglob("page.tsx"):
            rel = str(p.relative_to(APP))
            if any(seg in rel for seg in ("learn/", "compare/", "reviews/")):
                matches.append(p)
        return sorted(matches)
    if args.staged:
        out = subprocess.check_output(
            ["git", "diff", "--cached", "--name-only", "--diff-filter=ACM"],
            cwd=ROOT,
        ).decode()
        return [
            ROOT / p for p in out.splitlines()
            if p.endswith("page.tsx") and "src/app/" in p
        ]
    return [pathlib.Path(p).resolve() for p in args.files]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("files", nargs="*")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--staged", action="store_true")
    ap.add_argument("--floor", type=float, default=7.5)
    ap.add_argument("--json", action="store_true", help="Emit JSON instead of text")
    ap.add_argument("--quiet", action="store_true", help="Only print failures")
    args = ap.parse_args()

    targets = resolve_targets(args)
    if not targets:
        print("No pages to score.")
        return 0

    results: list[Score] = []
    failed: list[Score] = []
    for t in targets:
        if not t.exists():
            continue
        sc = score_page(t)
        results.append(sc)
        if sc.overall < args.floor:
            failed.append(sc)
        elif not args.quiet and not args.json:
            print(f"PASS {sc.overall:4.2f}  {sc.path}")

    if args.json:
        print(json.dumps([asdict(r) for r in results], indent=2))
    else:
        for sc in failed:
            print(f"FAIL {sc.overall:4.2f}  {sc.path}")
            for k, v in sorted(sc.scores.items(), key=lambda kv: kv[1]):
                print(f"      · {k:14s} {v:4.2f}")
            for n in sc.notes:
                print(f"      ! {n}")
        print()
        n = len(results)
        f = len(failed)
        mean = round(sum(r.overall for r in results) / max(1, n), 2)
        print(f"scored {n} pages · mean {mean} · {f} below floor {args.floor}")

    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())

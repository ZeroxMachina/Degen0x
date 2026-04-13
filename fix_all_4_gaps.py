#!/usr/bin/env python3
"""
SEO Gap Fixer - All 4 Fixes
"""
import os
import re
from pathlib import Path

BASE_PATH = Path("/sessions/optimistic-stoic-gates/mnt/cryptodegen")
SRC_APP = BASE_PATH / "src" / "app"
LAYOUT_FILE = SRC_APP / "layout.tsx"
CURRENT_DATE = "2026-04-13"

def fix2_canonical_urls():
    """FIX 2: Add canonical URLs"""
    print("\n=== FIX 2: Canonical URLs ===")
    fixed = 0

    for i, page_file in enumerate(SRC_APP.rglob("page.tsx")):
        if "/api/" in str(page_file) or i % 300 == 0:
            if i % 300 == 0:
                print(f"Scanning {i}...")
            if "/api/" in str(page_file):
                continue

        try:
            content = page_file.read_text(encoding="utf-8", errors="ignore")

            # Skip client components and already-fixed pages
            if "use client" in content or "alternates:" in content:
                continue

            # Must have metadata export
            if "export const metadata:" not in content:
                continue

            # Get route from file path
            rel_path = page_file.relative_to(SRC_APP)
            parts = list(rel_path.parent.parts)
            route = "/" + "/".join(parts) if parts else "/"

            # Find description line to insert after
            desc_match = re.search(r'description:\s*["\']([^"\']*)["\']', content)
            if not desc_match:
                continue

            insert_pos = desc_match.end()
            canonical_line = f',\n  alternates: {{ canonical: "{route}" }}'

            new_content = content[:insert_pos] + canonical_line + content[insert_pos:]
            page_file.write_text(new_content, encoding="utf-8")
            fixed += 1

            if fixed % 100 == 0:
                print(f"Fixed {fixed}...")
        except Exception as e:
            pass

    print(f"FIX 2 COMPLETE: {fixed} canonical URLs added")
    return fixed

def fix4_hreflang():
    """FIX 4: Add hreflang to root layout"""
    print("\n=== FIX 4: hreflang ===")

    try:
        content = LAYOUT_FILE.read_text(encoding="utf-8")

        if "languages:" in content and "x-default" in content:
            print("hreflang already present")
            return 0

        # Find alternates: { canonical: SITE_URL, }
        old_pattern = r'alternates:\s*\{\s*canonical:\s*SITE_URL,\s*\}'
        old_match = re.search(old_pattern, content)

        if old_match:
            old_text = old_match.group(0)
            new_text = '''alternates: {
    canonical: SITE_URL,
    languages: { "en": "https://degen0x.com", "x-default": "https://degen0x.com" }
  }'''
            content = content.replace(old_text, new_text)
            LAYOUT_FILE.write_text(content, encoding="utf-8")
            print("FIX 4 COMPLETE: hreflang added to root layout")
            return 1
    except Exception as e:
        print(f"Error: {e}")

    return 0

def fix3_date_published():
    """FIX 3: Add datePublished to pages"""
    print("\n=== FIX 3: Date Published ===")
    fixed = 0

    for i, page_file in enumerate(SRC_APP.rglob("page.tsx")):
        if "/api/" in str(page_file):
            continue

        if i % 300 == 0:
            print(f"Scanning {i}...")

        try:
            content = page_file.read_text(encoding="utf-8", errors="ignore")

            # Skip client and already-fixed
            if "use client" in content or "datePublished" in content:
                continue

            # Must have JSON-LD
            if "@context" not in content or "schema.org" not in content:
                continue

            # Find JSON objects and add dates
            # Match @type patterns
            modified = False
            for match in re.finditer(r'"@type":\s*"(\w+)"', content):
                type_pos = match.start()
                # Find the closing brace for this object
                # Simple heuristic: find next } at same/lower depth
                brace_count = 0
                closing_pos = -1
                for j in range(type_pos, len(content)):
                    if content[j] == '{':
                        brace_count += 1
                    elif content[j] == '}':
                        brace_count -= 1
                        if brace_count == 0:
                            closing_pos = j
                            break

                if closing_pos > 0 and "datePublished" not in content[type_pos:closing_pos]:
                    # Insert before closing brace
                    date_str = f', "datePublished": "{CURRENT_DATE}", "dateModified": "{CURRENT_DATE}"'
                    content = content[:closing_pos] + date_str + content[closing_pos:]
                    modified = True
                    break

            if modified:
                page_file.write_text(content, encoding="utf-8")
                fixed += 1
                if fixed % 100 == 0:
                    print(f"Fixed {fixed}...")
        except Exception as e:
            pass

    print(f"FIX 3 COMPLETE: {fixed} dates added")
    return fixed

def fix1_internal_linking():
    """FIX 1: Add internal links to orphaned pages"""
    print("\n=== FIX 1: Internal Linking ===")
    print("Scanning for orphaned pages...")

    # Collect all pages
    all_pages = {}
    for page_file in SRC_APP.rglob("page.tsx"):
        if "/api/" in str(page_file):
            continue

        rel_path = page_file.relative_to(SRC_APP)
        parts = list(rel_path.parent.parts)
        route = "/" + "/".join(parts) if parts else "/"
        all_pages[route] = str(page_file)

    print(f"Total pages: {len(all_pages)}")

    # Find orphaned (not linked from anywhere)
    orphaned = []
    for route in all_pages.keys():
        has_inbound = False

        for other_route, other_file in all_pages.items():
            if other_route == route:
                continue

            try:
                content = Path(other_file).read_text(encoding="utf-8", errors="ignore")
                if f'href="{route}"' in content or f"href='{route}'" in content:
                    has_inbound = True
                    break
            except:
                pass

        if not has_inbound:
            orphaned.append(route)

    print(f"Found {len(orphaned)} orphaned pages")

    # For each orphaned, add link from a sibling
    fixed = 0
    for route in orphaned[:100]:  # Limit to first 100
        parts = route.strip("/").split("/")
        if not parts:
            continue

        # Find a sibling in same section
        section = parts[0]
        sibling_route = None

        for other_route in all_pages.keys():
            if other_route == route:
                continue
            other_parts = other_route.strip("/").split("/")
            if other_parts and other_parts[0] == section and len(other_parts) <= len(parts) + 1:
                sibling_route = other_route
                break

        if not sibling_route:
            continue

        try:
            sibling_file = Path(all_pages[sibling_route])
            content = sibling_file.read_text(encoding="utf-8", errors="ignore")

            # Skip if has use client or already has related
            if "use client" in content or "Related:" in content:
                continue

            # Find insertion point
            insert_pos = content.rfind("</div>")
            if insert_pos == -1:
                insert_pos = content.rfind("</main>")
            if insert_pos == -1:
                insert_pos = content.rfind("</section>")
            if insert_pos == -1:
                continue

            # Create nav block
            orphan_name = route.rstrip("/").split("/")[-1].replace("-", " ").title()
            nav = f'\n<nav style={{{{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}}}><span style={{ color: "#8b949e" }}>Related: </span><a href="{route}" style={{ color: "#fb923c", marginRight: "1rem" }}>{orphan_name}</a></nav>\n'

            new_content = content[:insert_pos] + nav + content[insert_pos:]
            sibling_file.write_text(new_content, encoding="utf-8")
            fixed += 1
        except Exception as e:
            pass

    print(f"FIX 1 COMPLETE: {fixed} internal links added")
    return fixed

def main():
    print("=" * 80)
    print("SEO GAP FIXER - ALL 4 FIXES")
    print("=" * 80)

    f2 = fix2_canonical_urls()
    f4 = fix4_hreflang()
    f3 = fix3_date_published()
    f1 = fix1_internal_linking()

    print("\n" + "=" * 80)
    print("FINAL SUMMARY")
    print("=" * 80)
    print(f"Fix 1 (Internal Linking): {f1}")
    print(f"Fix 2 (Canonical URLs): {f2}")
    print(f"Fix 3 (Date Published): {f3}")
    print(f"Fix 4 (hreflang): {f4}")
    print(f"TOTAL: {f1 + f2 + f3 + f4}")

if __name__ == "__main__":
    main()

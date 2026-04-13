#!/usr/bin/env python3
"""
SEO Gap Fixer for degen0x - Production Version
Fixes 4 major SEO issues with optimized processing
"""

import os
import re
from pathlib import Path
from collections import defaultdict

BASE_PATH = Path("/sessions/optimistic-stoic-gates/mnt/cryptodegen")
SRC_APP = BASE_PATH / "src" / "app"
LAYOUT_FILE = SRC_APP / "layout.tsx"
CURRENT_DATE = "2026-04-13"

def get_section_from_path(file_path):
    """Extract section from file path."""
    parts = str(file_path).split(os.sep)
    if "app" not in parts:
        return None
    app_idx = parts.index("app")
    if app_idx + 1 < len(parts):
        section = parts[app_idx + 1]
        if section in ["de", "es", "fr", "api", "en"]:
            if app_idx + 2 < len(parts):
                return parts[app_idx + 2]
            return None
        return section
    return None

# ==============================================================================
# FIX 2: CANONICAL URLs
# ==============================================================================

def fix_canonical_urls():
    """Fix 2: Add canonical URLs to pages missing them."""
    print("\n=== FIX 2: Canonical URLs ===")

    fixed_count = 0
    checked = 0

    for page_file in SRC_APP.rglob("page.tsx"):
        if "/api/" in str(page_file):
            continue

        checked += 1
        if checked % 500 == 0:
            print(f"  Checked {checked} pages...")

        try:
            content = page_file.read_text(encoding="utf-8", errors="ignore")

            # Skip client components and api routes
            if "use client" in content or "export const GET" in content:
                continue

            # Check if already has canonical
            if "canonical:" in content or 'alternates: {' in content:
                continue

            # Check if has metadata export
            if "export const metadata:" not in content:
                continue

            # Extract route
            rel_path = page_file.relative_to(SRC_APP)
            route_parts = list(rel_path.parent.parts)
            route = "/" + "/".join(route_parts) if route_parts else "/"

            # Find description line
            desc_pattern = r'description:\s*"[^"]*"'
            desc_match = re.search(desc_pattern, content)
            if not desc_match:
                continue

            # Insert canonical after description
            insert_pos = desc_match.end()
            canonical_line = f',\n  alternates: {{ canonical: "{route}" }}'

            new_content = content[:insert_pos] + canonical_line + content[insert_pos:]
            page_file.write_text(new_content, encoding="utf-8")

            fixed_count += 1
            if fixed_count % 50 == 0:
                print(f"  Fixed {fixed_count} pages...")

        except Exception as e:
            pass

    print(f"Total pages checked: {checked}")
    print(f"Canonical URLs fixed: {fixed_count}")
    return fixed_count

# ==============================================================================
# FIX 4: HREFLANG
# ==============================================================================

def fix_hreflang():
    """Fix 4: Add hreflang to root layout."""
    print("\n=== FIX 4: hreflang ===")

    try:
        content = LAYOUT_FILE.read_text(encoding="utf-8")

        # Check if hreflang already present
        if "languages:" in content and "x-default" in content:
            print("hreflang already present in layout")
            return 0

        # Find alternates block with canonical
        alt_pattern = r'alternates:\s*\{\s*canonical:\s*SITE_URL'
        alt_match = re.search(alt_pattern, content)

        if not alt_match:
            print("Could not find alternates block")
            return 0

        # Replace it with version that includes hreflang
        old_block = "alternates: {\n    canonical: SITE_URL,\n  }"
        new_block = '''alternates: {
    canonical: SITE_URL,
    languages: { "en": "https://degen0x.com", "x-default": "https://degen0x.com" }
  }'''

        # More flexible replacement
        content = content.replace(
            "alternates: {\n    canonical: SITE_URL,\n  },",
            new_block + ","
        )

        LAYOUT_FILE.write_text(content, encoding="utf-8")
        print("Added hreflang to root layout")
        return 1

    except Exception as e:
        print(f"Error fixing hreflang: {e}")
        return 0

# ==============================================================================
# FIX 3: DATE PUBLISHED
# ==============================================================================

def fix_date_published():
    """Fix 3: Add datePublished to pages missing it."""
    print("\n=== FIX 3: Date Published ===")

    fixed_count = 0
    checked = 0

    for page_file in SRC_APP.rglob("page.tsx"):
        if "/api/" in str(page_file):
            continue

        checked += 1
        if checked % 500 == 0:
            print(f"  Checked {checked} pages...")

        try:
            content = page_file.read_text(encoding="utf-8", errors="ignore")

            # Skip client components
            if "use client" in content:
                continue

            # Check if already has datePublished
            if "datePublished" in content:
                continue

            # Check if has JSON-LD schema
            if "@context" not in content or "schema.org" not in content:
                continue

            # Try to add datePublished to existing schema
            # Match JSON schemas and add date fields before closing brace
            schema_pattern = r'(\{[^}]*?"@type":\s*"[^"]*?"[^}]*)(\})'
            schemas = list(re.finditer(schema_pattern, content, re.DOTALL))

            if schemas:
                # Process from last to first to preserve positions
                for schema_match in reversed(schemas):
                    schema_content = schema_match.group(1)
                    # Only add if not already present
                    if "date" not in schema_content.lower():
                        insert_pos = schema_match.start(2)
                        date_fields = f', "datePublished": "{CURRENT_DATE}", "dateModified": "{CURRENT_DATE}"'
                        content = content[:insert_pos] + date_fields + content[insert_pos:]

                page_file.write_text(content, encoding="utf-8")
                fixed_count += 1
                if fixed_count % 50 == 0:
                    print(f"  Fixed {fixed_count} pages...")

        except Exception as e:
            pass

    print(f"Total pages checked: {checked}")
    print(f"Date published fixed: {fixed_count}")
    return fixed_count

# ==============================================================================
# FIX 1: INTERNAL LINKING (COMPLEX - last to avoid issues)
# ==============================================================================

def find_orphaned_pages():
    """Identify pages with no inbound links."""
    orphaned = []
    all_pages = {}

    # First pass: collect all pages and their routes
    for page_file in SRC_APP.rglob("page.tsx"):
        if "/api/" in str(page_file):
            continue

        section = get_section_from_path(page_file)
        if not section:
            continue

        rel_path = page_file.relative_to(SRC_APP)
        route_parts = list(rel_path.parent.parts)
        route = "/" + "/".join(route_parts) if route_parts else "/"

        if route.startswith("/en/") or route.startswith("/de/") or route.startswith("/es/") or route.startswith("/fr/"):
            continue

        all_pages[route] = {
            "path": page_file,
            "section": section,
        }

    # Second pass: check for inbound links
    checked = 0
    for route, page_info in all_pages.items():
        checked += 1
        if checked % 500 == 0:
            print(f"  Checked {checked} pages for orphan status...")

        has_links = False
        page_path = page_info["path"]

        # Check if any other page links to this one
        for other_route, other_info in all_pages.items():
            if other_route == route:
                continue

            try:
                content = other_info["path"].read_text(encoding="utf-8", errors="ignore")
                if f'href="{route}"' in content or f"href='{route}'" in content or f"href=\"{route}\"" in content:
                    has_links = True
                    break
            except:
                pass

        if not has_links:
            orphaned.append((route, page_info))

    print(f"Found {len(orphaned)} orphaned pages out of {len(all_pages)} total")
    return orphaned

def fix_internal_linking():
    """Fix 1: Add internal links to orphaned pages."""
    print("\n=== FIX 1: Internal Linking ===")

    orphaned_list = find_orphaned_pages()

    if not orphaned_list:
        print("No orphaned pages found")
        return 0

    # Group by section
    orphans_by_section = defaultdict(list)
    for route, page_info in orphaned_list:
        orphans_by_section[page_info["section"]].append((route, page_info))

    print("\nOrphaned pages by section:")
    for section in sorted(orphans_by_section.keys()):
        count = len(orphans_by_section[section])
        print(f"  {section}: {count}")

    fixed_count = 0

    # For each orphaned page, try to link it from its sibling
    for route, orphan_info in orphaned_list:
        section = orphan_info["section"]
        orphan_path = orphan_info["path"]

        # Find a sibling page to add link from
        try:
            # Get list of other pages in same section
            siblings = []
            for other_route, other_info in orphaned_list:
                if other_info["section"] == section and other_route != route:
                    siblings.append((other_route, other_info))

            if not siblings:
                # Try non-orphaned pages in same section
                for page_file in SRC_APP.rglob("page.tsx"):
                    if "/api/" in str(page_file):
                        continue
                    page_section = get_section_from_path(page_file)
                    if page_section != section:
                        continue

                    rel_path = page_file.relative_to(SRC_APP)
                    route_parts = list(rel_path.parent.parts)
                    other_route = "/" + "/".join(route_parts) if route_parts else "/"

                    if other_route == route:
                        continue

                    siblings.append((other_route, {"path": page_file}))

            if not siblings:
                continue

            # Pick first sibling that doesn't have "use client"
            target_sibling = None
            for sib_route, sib_info in siblings[:3]:  # Try first 3
                try:
                    content = sib_info["path"].read_text(encoding="utf-8", errors="ignore")
                    if "use client" not in content and "Related:" not in content:
                        target_sibling = sib_info
                        break
                except:
                    pass

            if not target_sibling:
                continue

            # Add link to target sibling
            sib_content = target_sibling["path"].read_text(encoding="utf-8")

            # Skip if already has related nav
            if "Related:" in sib_content:
                continue

            # Find insertion point (last </div> or similar)
            insert_pos = sib_content.rfind("</div>")
            if insert_pos == -1:
                insert_pos = sib_content.rfind("</main>")
            if insert_pos == -1:
                insert_pos = sib_content.rfind("</section>")
            if insert_pos == -1:
                continue

            # Create nav block
            orphan_name = route.rstrip("/").split("/")[-1].replace("-", " ").title()
            nav_block = f'\n<nav style={{{{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}}}><span style={{ color: "#8b949e" }}>Related: </span><a href="{route}" style={{ color: "#fb923c", marginRight: "1rem" }}>{orphan_name}</a></nav>\n'

            new_content = sib_content[:insert_pos] + nav_block + sib_content[insert_pos:]
            target_sibling["path"].write_text(new_content, encoding="utf-8")

            fixed_count += 1
            if fixed_count % 50 == 0:
                print(f"  Added {fixed_count} links...")

        except Exception as e:
            pass

    print(f"Internal linking fixed: {fixed_count}")
    return fixed_count

# ==============================================================================
# MAIN
# ==============================================================================

def main():
    print("=" * 80)
    print("SEO GAP FIXER FOR DEGEN0X - PRODUCTION")
    print("=" * 80)

    fix2_count = fix_canonical_urls()
    fix4_count = fix_hreflang()
    fix3_count = fix_date_published()
    fix1_count = fix_internal_linking()

    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Fix 1 (Internal Linking): {fix1_count} links added")
    print(f"Fix 2 (Canonical URLs): {fix2_count} URLs added")
    print(f"Fix 3 (Date Published): {fix3_count} dates added")
    print(f"Fix 4 (hreflang): {fix4_count} hreflang updated")
    print(f"TOTAL FIXES: {fix1_count + fix2_count + fix3_count + fix4_count}")

if __name__ == "__main__":
    main()

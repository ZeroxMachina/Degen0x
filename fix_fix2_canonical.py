#!/usr/bin/env python3
import os
import re
from pathlib import Path

BASE_PATH = Path("/sessions/optimistic-stoic-gates/mnt/cryptodegen")
SRC_APP = BASE_PATH / "src" / "app"

fixed = 0
for i, page_file in enumerate(SRC_APP.rglob("page.tsx")):
    if "/api/" in str(page_file):
        continue
    if i % 200 == 0:
        print(f"Scanning {i}...")

    try:
        content = page_file.read_text(encoding="utf-8", errors="ignore")
        if "use client" in content or "canonical:" in content or "alternates: {" in content:
            continue
        if "export const metadata:" not in content:
            continue

        rel_path = page_file.relative_to(SRC_APP)
        route = "/" + "/".join(rel_path.parent.parts) if list(rel_path.parent.parts) else "/"

        desc_match = re.search(r'description:\s*"[^"]*"', content)
        if not desc_match:
            continue

        insert_pos = desc_match.end()
        new_content = content[:insert_pos] + f',\n  alternates: {{ canonical: "{route}" }}' + content[insert_pos:]
        page_file.write_text(new_content, encoding="utf-8")
        fixed += 1
        if fixed % 50 == 0:
            print(f"Fixed {fixed}...")
    except:
        pass

print(f"\nTotal canonical URLs fixed: {fixed}")

#!/usr/bin/env python3
"""
Add BreadcrumbList JSON-LD structured data to page.tsx files in degen0x.
Final comprehensive migration script.
"""

import os
import re
import json
from pathlib import Path
from typing import Optional, Tuple

def path_to_route(file_path: str) -> str:
    """Convert file path to route."""
    match = re.search(r'/src/app(.*)/page\.tsx$', file_path)
    if match:
        route = match.group(1)
        return route if route else '/'
    return '/'

def route_to_breadcrumbs(route: str) -> list:
    """Generate breadcrumb items from route."""
    if route == '/':
        return [{'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://degen0x.com/'}]

    breadcrumbs = [{'@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://degen0x.com/'}]
    segments = [s for s in route.split('/') if s]

    current_path = ''
    for idx, segment in enumerate(segments, start=2):
        current_path += '/' + segment
        name = segment.replace('-', ' ').title()
        breadcrumbs.append({
            '@type': 'ListItem',
            'position': idx,
            'name': name,
            'item': f'https://degen0x.com{current_path}'
        })

    if breadcrumbs:
        del breadcrumbs[-1]['item']

    return breadcrumbs

def generate_breadcrumb_const(route: str) -> str:
    """Generate the breadcrumb data const."""
    breadcrumbs = route_to_breadcrumbs(route)

    # Format as TypeScript const
    items_str = "[\n"
    for bc in breadcrumbs:
        items_str += f"    {{ '@type': 'ListItem', position: {bc['position']}, name: '{bc['name']}',"
        if 'item' in bc:
            items_str += f" item: '{bc['item']}' }},\n"
        else:
            items_str += " },\n"
    items_str += "  ]"

    const_def = f"""const breadcrumbData = {{
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: {items_str},
}};"""
    return const_def

def has_breadcrumb_list(content: str) -> bool:
    """Check if file already has BreadcrumbList."""
    return 'BreadcrumbList' in content

def has_use_client(content: str) -> bool:
    """Check if file starts with 'use client'."""
    lines = content.split('\n')
    for i in range(min(3, len(lines))):
        line = lines[i].strip()
        if line.startswith('"use client"') or line.startswith("'use client'"):
            return True
    return False

def add_breadcrumb_to_file(file_path: str) -> Tuple[Optional[bool], str]:
    """Add breadcrumb to file.

    Returns (success, message):
    - True: added
    - False: error
    - None: skipped
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return False, "Read error"

    if has_breadcrumb_list(content):
        return None, "Already has BreadcrumbList"

    if has_use_client(content):
        return None, "Has 'use client'"

    export_pos = content.find('export default function')
    if export_pos == -1:
        return None, "No export default function"

    return_pos = content.find('return', export_pos)
    if return_pos == -1:
        return None, "No return statement"

    route = path_to_route(file_path)
    breadcrumb_const = generate_breadcrumb_const(route)

    # Insert breadcrumb const before export default
    new_content = content[:export_pos] + breadcrumb_const + '\n\n' + content[export_pos:]

    # Find new return position
    new_export_pos = new_content.find('export default function', export_pos)
    return_match = re.search(r'return\s*[\(\<]', new_content[new_export_pos:])
    if not return_match:
        return False, "Could not find return"

    return_actual_pos = new_export_pos + return_match.start()
    return_keyword_end = return_actual_pos + len('return')

    # Find opening < tag
    open_bracket_pos = new_content.find('<', return_actual_pos)
    if open_bracket_pos == -1:
        return False, "Could not find opening tag"

    next_close = new_content.find('>', open_bracket_pos)
    if next_close == -1:
        return False, "Could not find closing >"

    tag_content = new_content[open_bracket_pos:next_close+1]

    # Check if self-closing component
    if tag_content.rstrip().endswith('/>'):
        # Find semicolon
        stmt_end = new_content.find(';', next_close)
        if stmt_end == -1:
            return False, "Could not find semicolon"

        # Extract component line
        component_text = new_content[return_keyword_end:stmt_end].strip()
        if component_text.startswith('('):
            component_text = component_text[1:].rstrip(')')
        component_text = component_text.strip()

        # Replace with fragment-wrapped version
        breadcrumb_script = '<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />'
        replacement = f'(\n    <>\n      {component_text}\n      {breadcrumb_script}\n    </>\n  );'
        final_content = new_content[:return_keyword_end] + replacement + new_content[stmt_end+1:]
    else:
        # Regular element, insert script after opening >
        insert_at = next_close + 1
        breadcrumb_script = '<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />'
        final_content = new_content[:insert_at] + '\n      ' + breadcrumb_script + new_content[insert_at:]

    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(final_content)
        return True, "Added"
    except:
        return False, "Write error"

def main():
    base_path = '/sessions/optimistic-stoic-gates/mnt/cryptodegen/src/app'

    # Find all page.tsx files
    all_files = []
    for root, dirs, files in os.walk(base_path):
        for file in files:
            if file == 'page.tsx':
                all_files.append(os.path.join(root, file))

    # Filter to those without breadcrumbs
    files_to_process = []
    for file_path in all_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            if not has_breadcrumb_list(content):
                files_to_process.append(file_path)
        except:
            pass

    print(f"Total pages: {len(all_files)}")
    print(f"Need breadcrumbs: {len(files_to_process)}\n")

    stats = {'added': 0, 'skipped': 0, 'failed': 0}

    for idx, file_path in enumerate(files_to_process, 1):
        if idx % 100 == 0:
            print(f"Progress: {idx}/{len(files_to_process)}")

        success, msg = add_breadcrumb_to_file(file_path)

        if success is None:
            stats['skipped'] += 1
        elif success:
            stats['added'] += 1
        else:
            stats['failed'] += 1

    print(f"\n=== RESULTS ===")
    print(f"Added: {stats['added']}")
    print(f"Skipped: {stats['skipped']} (use client or no return)")
    print(f"Failed: {stats['failed']}")

    # Count final
    final_with_breadcrumbs = 0
    for file_path in all_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                if 'BreadcrumbList' in f.read():
                    final_with_breadcrumbs += 1
        except:
            pass

    coverage = (final_with_breadcrumbs / len(all_files)) * 100
    print(f"\nFinal Coverage: {final_with_breadcrumbs}/{len(all_files)} ({coverage:.1f}%)")

if __name__ == '__main__':
    main()

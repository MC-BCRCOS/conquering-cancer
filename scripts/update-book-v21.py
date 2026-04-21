"""
One-shot updater for index.astro to apply the 2026-04-21 book update.

Changes:
- New intro body (v2) with 3 new endnote citations
- Chapters 1-5 unchanged (text identical) but endnote IDs shift by +3
- New chapter 6 (general reader version of algorithm building, no endnotes)
- New chapter 7 (scientific version of algorithm building, 13 endnotes)
- Old chapter 6 -> new chapter 8: endnote IDs shift by +16
- Old chapter 7 -> new chapter 9: endnote IDs shift by +16
- Old chapter 8 -> new chapter 10: endnote IDs shift by +16
- Old chapter 9 -> new chapter 11: endnote IDs shift by +16
- Old chapter 10 -> new chapter 12: endnote IDs shift by +16
- Old chapter 11 -> new chapter 13: endnote IDs shift by +16
- New chapter 14 (adherence/last mile, no endnotes)
- Complete endnotes section replaced

Old chapter endnote ranges (to shift):
- Ch 1: endnote-1 to endnote-10 (shift +3 -> 4-13)
- Ch 2: endnote-11 to endnote-22 (shift +3 -> 14-25)
- Ch 3: endnote-23 to endnote-35 (shift +3 -> 26-38)
- Ch 4: endnote-36 to endnote-63 (shift +3 -> 39-66)
- Ch 5: endnote-64 to endnote-73 (shift +3 -> 67-76)
- Ch 6: endnote-74 to endnote-89 (shift +16 -> 90-105)
- Ch 7: endnote-90 to endnote-104 (shift +16 -> 106-120)
- Ch 8: endnote-105 to endnote-112 (shift +16 -> 121-128)
- Ch 9: endnote-113 to endnote-124 (shift +16 -> 129-140)
- Ch 10: endnote-125 to endnote-135 (shift +16 -> 141-151)
- Ch 11: endnote-136 to endnote-142 (shift +16 -> 152-158)
"""

import re
from pathlib import Path

ROOT = Path(r"C:/Users/Mark/BFM Dropbox/CEDC/00.Claude_ConqueringCancer")
INDEX = ROOT / "conquering-cancer" / "src" / "pages" / "index.astro"
HTML_DIR = ROOT / "Assets" / "docs" / "20260421" / "extracted_txt" / "html"

def read(p):
    return p.read_text(encoding="utf-8")

def write(p, s):
    p.write_text(s, encoding="utf-8")

def section_bounds(text, section_id):
    """Find the opening and closing bounds of a <section id="X"> ... </section> block.

    Returns (start_index, end_index) where start_index is the position of '<section'
    and end_index is the position *just past* '</section>'.
    """
    pattern = re.compile(r'<section id="' + re.escape(section_id) + r'"[^>]*>')
    m = pattern.search(text)
    if not m:
        raise ValueError(f"Section id={section_id} not found")
    start = m.start()
    # scan for the matching </section> by walking forward
    depth = 0
    i = m.end()
    open_tag = re.compile(r"<section\b")
    close_tag = re.compile(r"</section>")
    depth = 1
    while depth > 0 and i < len(text):
        next_open = open_tag.search(text, i)
        next_close = close_tag.search(text, i)
        if next_close is None:
            raise ValueError(f"No closing </section> for {section_id}")
        if next_open and next_open.start() < next_close.start():
            depth += 1
            i = next_open.end()
        else:
            depth -= 1
            i = next_close.end()
    return start, i

def shift_endnotes_in_range(body, lo, hi, shift):
    """Shift every #endnote-N where lo <= N <= hi to #endnote-(N+shift).

    Processed in descending order to avoid collisions.
    """
    for n in range(hi, lo - 1, -1):
        body = body.replace(f'#endnote-{n}"', f'#endnote-{n + shift}"')
    return body

def shift_per_chapter_cites(body, count, new_base):
    """The original body uses per-chapter cite IDs (#endnote-1..count).
    Shift them to the continuous global IDs starting at new_base.

    Processed in descending order so collisions don't happen.
    """
    for n in range(count, 0, -1):
        body = body.replace(f'#endnote-{n}"', f'#endnote-{new_base + n - 1}"')
    return body

def replace_section_header(section_html, new_number_label, new_title=None, new_subtitle=None):
    """Rewrite the section-number / section-title / section-subtitle within a section."""
    out = re.sub(
        r'<span class="section-number">[^<]*</span>',
        f'<span class="section-number">{new_number_label}</span>',
        section_html, count=1,
    )
    if new_title is not None:
        out = re.sub(
            r'<h1 class="section-title">[^<]*</h1>',
            f'<h1 class="section-title">{new_title}</h1>',
            out, count=1,
        )
    if new_subtitle is not None:
        out = re.sub(
            r'<p class="section-subtitle">[^<]*</p>',
            f'<p class="section-subtitle">{new_subtitle}</p>',
            out, count=1,
        )
    return out

def replace_section_id(section_html, new_id):
    return re.sub(r'<section id="[^"]+"', f'<section id="{new_id}"', section_html, count=1)

def replace_body(section_html, new_body):
    """Replace the <div class="paper-content"> ... </div> body of a section."""
    # find the content div and replace its contents
    m = re.search(r'(<div class="paper-content">)', section_html)
    if not m:
        raise ValueError("paper-content div not found")
    before = section_html[: m.end()]
    # find matching </div> by walking
    i = m.end()
    depth = 1
    open_div = re.compile(r"<div\b")
    close_div = re.compile(r"</div>")
    while depth > 0 and i < len(section_html):
        next_open = open_div.search(section_html, i)
        next_close = close_div.search(section_html, i)
        if not next_close:
            raise ValueError("no closing </div>")
        if next_open and next_open.start() < next_close.start():
            depth += 1
            i = next_open.end()
        else:
            depth -= 1
            i = next_close.end()
    # now 'i' is just past the closing </div>
    after = section_html[i:]
    return f"{before}\n{new_body.rstrip()}\n        {after}"

def main():
    text = read(INDEX)

    # === 1. Replace intro content ===
    intro_html = read(HTML_DIR / "intro.html")
    s, e = section_bounds(text, "intro")
    intro_section = text[s:e]
    intro_section = replace_body(intro_section, intro_html)
    text = text[:s] + intro_section + text[e:]

    # === 2. Remap chapter body cite IDs from per-chapter (#endnote-1..K) to continuous globals ===
    # Original file had a bug where every chapter's body used #endnote-1 etc.
    # Shift chapters 1-5 in place.
    for chap_id, count, new_base in [
        ("ch-01", 10, 4),
        ("ch-02", 12, 14),
        ("ch-03", 13, 26),
        ("ch-04", 28, 39),
        ("ch-05", 10, 67),
    ]:
        s, e = section_bounds(text, chap_id)
        sec = text[s:e]
        sec = shift_per_chapter_cites(sec, count, new_base)
        text = text[:s] + sec + text[e:]

    # === 3. Handle old chapters 6-11: rename, relabel, remap cite IDs to new continuous globals ===
    # Do in REVERSE order so ID renames don't collide.
    for old_id, new_id, old_num, new_num, count, new_base in reversed([
        ("ch-06", "ch-08", "6", "8", 16, 90),
        ("ch-07", "ch-09", "7", "9", 15, 106),
        ("ch-08", "ch-10", "8", "10", 8, 121),
        ("ch-09", "ch-11", "9", "11", 12, 129),
        ("ch-10", "ch-12", "10", "12", 11, 141),
        ("ch-11", "ch-13", "11", "13", 7, 152),
    ]):
        s, e = section_bounds(text, old_id)
        sec = text[s:e]
        # Remap per-chapter cites to continuous globals
        sec = shift_per_chapter_cites(sec, count, new_base)
        # Rename section id
        sec = replace_section_id(sec, new_id)
        # Update "Chapter N" label
        sec = re.sub(
            r'(<span class="section-number">)Chapter ' + old_num + r'(</span>)',
            r'\1Chapter ' + new_num + r'\2',
            sec, count=1,
        )
        text = text[:s] + sec + text[e:]

    # === 4. Fix cross-reference in (new) Chapter 5 about equity "Chapter 10" -> "Chapter 12" ===
    # Also common cross refs from body text:
    # e.g. "this book addresses directly in Chapter 10" -> "Chapter 12"
    # Be careful: only affect chapter body text, not endnotes numbering.
    # Limit to ch-05 section for now.
    s, e = section_bounds(text, "ch-05")
    sec = text[s:e]
    sec = sec.replace("directly in Chapter 10", "directly in Chapter 12")
    sec = sec.replace("addressed in Chapter 10", "addressed in Chapter 12")
    sec = sec.replace("Chapter 10 addresses", "Chapter 12 addresses")
    text = text[:s] + sec + text[e:]

    # === 5. Insert new chapter 6 (General) before ch-08 ===
    ch06_body = read(HTML_DIR / "ch06.html")
    ch06_section = f'''<section id="ch-06" class="paper-section">
        <header class="section-header">
          <span class="section-number">Chapter 6</span>
          <h1 class="section-title">Building the Thirteen Algorithms</h1>
          <p class="section-subtitle">A General Reader&rsquo;s Version</p>
        </header>
        <div class="paper-content">
{ch06_body.rstrip()}
        </div>
      </section>

      '''

    # === 6. Insert new chapter 7 (Scientific) before ch-08 ===
    ch07_body = read(HTML_DIR / "ch07.html")
    ch07_section = f'''<section id="ch-07" class="paper-section">
        <header class="section-header">
          <span class="section-number">Chapter 7</span>
          <h1 class="section-title">Building the Thirteen Algorithms</h1>
          <p class="section-subtitle">A Recipe for Each Cancer, Anchored in the Northeast Corridor Consortium</p>
        </header>
        <div class="paper-content">
{ch07_body.rstrip()}
        </div>
      </section>

      '''

    # Insert both new chapters just before ch-08
    s, _ = section_bounds(text, "ch-08")
    text = text[:s] + ch06_section + ch07_section + text[s:]

    # === 7. Insert new chapter 14 (Last Mile) after ch-13 but before endnotes ===
    ch14_body = read(HTML_DIR / "ch14.html")
    ch14_section = f'''<section id="ch-14" class="paper-section">
        <header class="section-header">
          <span class="section-number">Chapter 14</span>
          <h1 class="section-title">The Last Mile</h1>
          <p class="section-subtitle">Why Finding the Patient Is Only Half the Work</p>
        </header>
        <div class="paper-content">
{ch14_body.rstrip()}
        </div>
      </section>

      '''
    s, _ = section_bounds(text, "endnotes")
    text = text[:s] + ch14_section + text[s:]

    # === 8. Replace endnotes section body with new endnotes ===
    endnotes_html = read(HTML_DIR / "endnotes.html")
    s, e = section_bounds(text, "endnotes")
    sec = text[s:e]
    # The body includes the outer <div class="endnotes"> wrapper in the existing file.
    new_body = f'<div class="endnotes">\n\n{endnotes_html.rstrip()}\n\n</div>'
    sec = replace_body(sec, new_body)
    text = text[:s] + sec + text[e:]

    write(INDEX, text)
    print("Done.")
    print(f"File size: {len(text):,} bytes")
    # Sanity check: count new sections
    for sid in ["intro", "ch-01", "ch-02", "ch-03", "ch-04", "ch-05", "ch-06", "ch-07",
                "ch-08", "ch-09", "ch-10", "ch-11", "ch-12", "ch-13", "ch-14", "endnotes"]:
        count = text.count(f'<section id="{sid}"')
        assert count == 1, f"Expected 1 section id={sid}, found {count}"
    print("All 16 sections present (intro + 14 chapters + endnotes).")
    # Count endnotes
    endnotes_count = len(re.findall(r'id="endnote-\d+"', text))
    print(f"Endnote divs: {endnotes_count}")

if __name__ == "__main__":
    main()

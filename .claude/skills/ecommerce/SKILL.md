---
name: ecommerce
description: Apply ecommerce course principles when reviewing or editing marketing pages
---

# Ecommerce Course Skill

When invoked, load all transcript files and apply the principles to whatever page is being reviewed or edited.

## Preamble

```bash
TRANSCRIPT_DIR=".claude/skills/ecommerce/transcripts"
echo "Loading ecommerce course transcripts..."
for f in "$TRANSCRIPT_DIR"/*.md; do
  [ -f "$f" ] && echo "--- $f ---" && cat "$f" && echo ""
done
LESSON_COUNT=$(ls "$TRANSCRIPT_DIR"/*.md 2>/dev/null | wc -l | tr -d ' ')
echo "Loaded $LESSON_COUNT lesson(s)."
```

After reading the transcripts, identify which page type is being worked on and apply the principles from the transcripts. Then audit the current file and produce a specific list of what's present, what's missing, and what to fix.

---

## How to run a review

When the user asks for an ecommerce review of a page, or when editing a marketing page:

1. Run the preamble above to load all transcript files.
2. Identify the page type (homepage, about, FAQ, product/collection, etc.).
3. Read the current page file.
4. Produce a two-column audit:
   - **Present** — what's already there and working
   - **Missing / weak** — specific gaps with suggested copy or structure
5. Make the edits (or ask to confirm first if the changes are large).

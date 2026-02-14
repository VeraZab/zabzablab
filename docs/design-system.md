# Grid & spacing system

## Spacing scale

All spacing uses the same scale (base `0.25rem` / 4px). Use these variables site-wide instead of raw `rem`/`px` for margins, padding, and gaps.

| Token | Value | Use |
|-------|--------|-----|
| `--space-1` | 0.25rem | Tight gaps, icon padding |
| `--space-2` | 0.5rem | Small gaps, compact padding |
| `--space-3` | 0.75rem | Submenu offset, small padding |
| `--space-4` | 1rem | Default padding, paragraph margin, `--container-padding` |
| `--space-5` | 1.25rem | Header vertical padding |
| `--space-6` | 1.5rem | **Grid gutter** (`--grid-gutter`), two-col gap |
| `--space-8` | 2rem | Section padding, CTA top margin |
| `--space-10` | 2.5rem | Nav gap, mobile close button top |
| `--space-12` | 3rem | Large gaps, CTA internal padding |
| `--space-16` | 4rem | CTA block padding |
| `--space-20` | 5rem | — |
| `--space-24` | 6rem | — |

**Derived:**
- `--container-padding`: `var(--space-4)`
- `--container-padding-sm`: `var(--space-2)` (e.g. 320px breakpoint)
- `--gap-sm`: `var(--space-2)`
- `--gap-base`: `var(--space-4)`
- `--gap-lg`: `var(--space-12)`

---

## 12-column grid

- **Columns:** `--grid-columns: 12`
- **Gutter:** `--grid-gutter: var(--space-6)` (1.5rem)
- **Max width:** `--container-max-width: 1200px`

### Usage

1. **Grid container:** Add class `grid-12` to a wrapper. It gets:
   - `display: grid`
   - `grid-template-columns: repeat(12, 1fr)`
   - `gap: var(--grid-gutter)`
   - `max-width: var(--container-max-width)`
   - Horizontal padding `var(--container-padding)`

2. **Span classes:** On direct children, use `span-12`, `span-8`, `span-6`, `span-4`, or `span-3` to span that many columns.

3. **Responsive:** At 900px, `span-8`/`span-6` become full-width; `span-4`/`span-3` become half. At 600px, all spans full-width.

**Example:**
```html
<div class="grid-12">
  <div class="span-6">Left column</div>
  <div class="span-6">Right column</div>
</div>
```

---

## Breakpoints

- `--bp-mobile`: 1330px (nav collapses, portfolio 2-col)
- `--bp-tablet`: 900px (single column where applicable, two-col-grid stacks)
- `--bp-small`: 320px (reduced container padding)

---

## Existing layouts

- **Portfolio grid** (`portfoliogrid.module.css`): 2 or 3 columns, `gap: var(--grid-gutter)`.
- **Blog grid**: 3/2/1 columns by breakpoint, `gap: var(--grid-gutter)`.
- **About**: Two-column content grid, `gap: var(--grid-gutter)`.
- **Two-col-grid** (for-interior-designers, texture-foundations): 1fr 2fr columns, `gap: var(--grid-gutter)`; stacks at 900px with `gap: var(--space-2)`.

New sections should use either `grid-12` + `span-*` or the same `gap`/padding variables for consistency.

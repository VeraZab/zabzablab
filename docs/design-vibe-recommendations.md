# Design recommendations: aligning the site with the vibe

**Vibe:** Artisan, artist-designed, textiles & wallpaper, homes with history & personality — not a faceless manufacturer.

---

## Implemented in this pass

1. **Typography**
   - **Lora** (serif) added for tagline and all `h1`/`h2`. Warm, editorial, reads as “made by a person.”
   - Body line-height increased to 1.6 for a more relaxed, readable feel.

2. **Color & depth**
   - **Warm-tinted shadows** (`--shadow-soft`, `--shadow-card`) using navy/warm brown instead of gray, so shadows feel part of the palette.
   - **Terracotta** accent variable (`--color-terracotta`) added for future use (CTAs, underlines, small accents).

3. **Background**
   - Very subtle **vertical gradient** on the body (warm cream to beige) so the page doesn’t feel flat; reads like paper or cloth.

4. **Header / masthead**
   - Tagline uses Lora + slight letter-spacing so it feels crafted, not generic.
   - **Logo larger** (130px) and **tagline bolder and bigger** (600 weight, 1.15rem) so the brand block reads as a clear statement, not fine print. Extra header padding and gap between logo and tagline for breathing room. (Small/light mastheads often make a site feel cheap or template-like.)

5. **Dropdowns**
   - Submenus use **beige background** and a soft border instead of white + gray shadow, so they sit in the same warm world as the rest of the site.

6. **Portfolio cards**
   - **8px radius** and warm shadow; **hover**: gentle lift (`translateY(-2px)`) and stronger shadow; **image hover** (design reveal) re-enabled with a smooth, slow transition so cards feel alive without being flashy.

7. **Grid**
   - Portfolio grid gap increased to `--gap-lg` for more breathing room.

---

## Further ideas (optional)

- **Link hovers:** Use a wavy or dotted underline (like the newsletter CTA) for primary nav links, or a terracotta underline on hover.
- **About photo:** Slightly reduce the sepia filter so the image feels more present; or add a thin, organic “frame” (e.g. border with irregular or botanical corner).
- **Texture foundations / interior designer pages:** Use Lora for section titles; consider a thin horizontal rule or a small botanical divider between sections.
- **Dark CTA block:** Add a very subtle pattern (e.g. low-contrast dots or lines) in the brown section so it feels more tactile.
- **Focus states:** Ensure focus rings use a warm color (e.g. `--color-terracotta`) for accessibility and brand.
- **Logo:** If the logo is flat, consider a version with a slight paper texture or warm shadow so it feels of a piece with the rest.

Use **--color-terracotta** sparingly (one or two places: primary CTA, or key link underline) so it stays special and doesn’t compete with the navy/beige base.

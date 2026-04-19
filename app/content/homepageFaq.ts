/**
 * Homepage FAQ — five topic tabs; questions grouped by intent (no duplicate Q text).
 */

export type FaqEntry = { q: string; a: string | string[] }

export type FaqSection = {
    /** Empty when the tab label is the only heading. */
    title: string
    entries: FaqEntry[]
}

export type FaqPanel = {
    id: string
    label: string
    sections: FaqSection[]
}

const VERA_EMAIL = 'zabzablab@gmail.com'

const homepageFaqTabs: { label: string; entries: FaqEntry[] }[] = [
    {
        label: 'Wallpaper & Installation',
        entries: [
            {
                q: 'Which wallpaper type should I choose?',
                a: [
                    'We offer **Peel & Stick** (self-adhesive) and **Traditional** (non-pasted, paste-the-wall) wallpaper — both with a smooth matte finish. Use the comparison below to pick what fits your space and how permanent you want the install to be.',
                    '',
                    '**Peel & Stick (Self-Adhesive Wallpaper)**',
                    '* **Material:** 100% woven polyester fabric',
                    '* **Best for:** Living rooms, bedrooms, nurseries, rentals, feature walls, smooth or lightly textured walls, and anyone wanting an easy, mess-free update',
                    '* **Installation:** No paste needed — peel the backing and stick. Removable and repositionable for up to 24 hours.',
                    '* **Finish:** Smooth matte',
                    '* **Why choose it:** Great for DIYers, renters, and refreshes you might change later. Easily removable without damaging walls when applied to smooth, primed, or painted surfaces.',
                    '* **Eco-friendly:** PVC-free and printed with water-based inks',
                    '* **Care:** Wipe clean with a damp, soft cloth',
                    '',
                    '**Traditional (Non-Pasted | Paste-the-Wall)**',
                    '* **Material:** Non-woven paper',
                    '* **Best for:** Living rooms, bedrooms, hallways, and any space where you want a classic, durable, long-lasting finish',
                    '* **Installation:** Requires wallpaper paste (applied to the wall, not the paper). Suited to a professional-quality, seamless hang.',
                    '* **Finish:** Smooth matte',
                    '* **Why choose it:** Ideal when you want a lasting, high-end wallpaper experience and a more permanent makeover.',
                    '* **Eco-friendly:** PVC-free and printed with water-based inks',
                    '* **Care:** Wipe clean with a damp, soft cloth',
                ],
            },
            {
                q: 'How should I test my samples?',
                a: [
                    `Yes — you can order wallpaper samples, and I highly recommend it before you commit to full rolls. Choosing the right colourway starts there: a swatch shows true colour, texture, and finish in your own space. Colours can look different in person than on a screen, and each room’s lighting — north, south, east, or west-facing, natural or artificial — affects how the wallpaper reads.`,
                    '',
                    'Once your sample arrives, test it in the room at different times of day (daylight and evening light) and place it next to your paint and furnishings so you can see how the tones shift and feel confident before you order.',
                    '',
                    `If you have questions after swatching, email ${VERA_EMAIL}.`,
                ],
            },
            {
                q: 'How do I calculate how much wallpaper I need?',
                a: [
                    'You need accurate wall measurements first — then you turn width and height into area and compare that to the coverage on each product listing (roll size and pattern repeat).',
                    '',
                    '**Measure your walls**',
                    '* Measure the height from the top of the skirting/baseboard to the ceiling or where you want the wallpaper to end.',
                    '* Measure the width of each wall you plan to cover.',
                    '* Use the tallest height along each wall so you don’t run short.',
                    '* Note doors, windows, and architectural features so you can picture how the pattern will flow.',
                    '* Measure at several points — ceilings and floors are often slightly uneven.',
                    '* Round measurements up and order all rolls together when you can so they’re printed in the same batch for the closest colour match.',
                    '',
                    '**Turn measurements into area**',
                    '* Multiply each wall’s width by its height to get the area to cover (e.g. 10 ft wide × 8 ft high = 80 sq ft).',
                    '* For angled ceilings, chimney breasts, or protrusions like fireplaces, measure those sections separately and add them to your total.',
                    '',
                    '**Before you order**',
                    '* Many installers recommend adding **5–10%** extra for pattern matching, trimming, and small measuring errors.',
                    '* Avoid mixing different roll heights in one room — it can throw off pattern matching and the overall look.',
                    '* Each listing shows coverage per roll. If you’re unsure, send your dimensions and I’ll help you work it out.',
                    '',
                    `Message me your measurements — ${VERA_EMAIL}.`,
                ],
            },
            {
                q: 'How do I install wallpaper, and how does panel matching work?',
                a: [
                    'Your wallpaper is supplied in panels designed to align edge-to-edge. Follow the panel order during installation and match the artwork at the seams. For best results, we recommend a professional installer — especially for large walls or detailed patterns.',
                    '',
                    '**Peel & Stick Wallpaper Installation**',
                    '1. **Prepare Your Walls:** Make sure walls are clean, smooth, dry, and free from dust or grease. Peel and stick wallpaper adheres best to primed or painted surfaces without texture.',
                    '2. **Gather Your Tools:** You’ll need a utility knife, measuring tape, pencil, smoothing tool or squeegee, and a level.',
                    '3. **Measure and Cut:** Measure your wall height and add a few extra inches for trimming. Cut the wallpaper into manageable strips based on your measurements.',
                    '4. **Apply the Wallpaper:** Starting at the top of your wall, peel off the backing a few inches at a time and stick the wallpaper onto the wall. Smooth out air bubbles as you go using a squeegee or smoothing tool.',
                    '5. **Trim Excess:** Use a sharp utility knife to trim excess wallpaper at the ceiling, baseboards, and corners.',
                    '6. **Reposition if Needed:** Peel and stick wallpaper is repositionable within 24 hours, so don’t worry if you need to adjust it slightly after application.',
                    '',
                    '**Traditional (Non-Pasted) Wallpaper Installation**',
                    '1. **Prepare Your Walls:** Walls should be smooth, clean, and primed. Remove any old wallpaper and repair any surface imperfections.',
                    '2. **Gather Your Tools:** You’ll need wallpaper paste (recommended for non-woven wallpaper), a brush or roller to apply paste to the wall, a smoothing tool, utility knife, level, measuring tape, pencil, and sponge.',
                    '3. **Measure and Cut:** Measure your wall height and cut wallpaper strips with extra length for trimming.',
                    '4. **Apply Paste:** Apply wallpaper paste evenly to the wall using a brush or roller. Avoid applying paste to the wallpaper itself.',
                    '5. **Hang the Wallpaper:** Starting at the top, carefully align the wallpaper strip and smooth it onto the pasted wall, removing air bubbles with a smoothing tool.',
                    '6. **Trim Excess:** Trim excess wallpaper at edges and corners with a sharp utility knife.',
                    '7. **Clean Up:** Wipe away any excess paste with a damp sponge before it dries.',
                    '',
                    '**General Tips**',
                    '* Always work in good lighting to spot air bubbles or misalignment.',
                    '* Take your time — patience is key to a smooth, professional finish.',
                    '* If you’re unsure or want a flawless result, consider hiring a professional installer.',
                ],
            },
            {
                q: 'Are your wallpapers suitable for renters?',
                a: 'Peel & Stick is the usual choice for rentals: it’s removable when walls are properly primed or painted. Always check with your landlord, do a patch test if you’re unsure, and pick the most removable-friendly option for that product. Traditional wallpaper is an option if your lease allows paste-the-wall installs; removal usually takes more effort than peel & stick.',
            },
            {
                q: 'Can I use your wallpaper in bathrooms or kitchens?',
                a: [
                    'Yes, both Peel & Stick and Traditional (Non-Pasted) wallpapers can be used in bathrooms and kitchens, as long as you follow a few important guidelines:',
                    '',
                    '**Avoid Direct Water Contact:** Do not apply wallpaper inside a shower, directly next to a bath, or anywhere it will be in constant contact with water.',
                    '',
                    '**Apply to a Dry, Clean Wall:** Make sure the wall is completely dry and clean before installation. For Peel & Stick, the surface must be free of moisture for the adhesive to work properly.',
                    '',
                    '**Use the Right Paste (Traditional Only):** For Traditional wallpaper, use a paste specifically made for non-woven wallpapers.',
                    '',
                    '**Ventilation is Key:** Good ventilation is essential. If your bathroom has poor airflow or is very humid, the wallpaper may not adhere well and could start to peel.',
                    '',
                    '**General Advice:** Our wallpapers are suitable for low- to moderate-moisture bathrooms (like powder rooms or half-baths), but not for wet rooms or areas with heavy steam and splashes.',
                    '',
                    `If you’re unsure, message me with details about your space — ${VERA_EMAIL}.`,
                ],
            },
            {
                q: 'How do I care for my wallpaper?',
                a: 'Gently wipe your wallpaper with a soft, damp cloth to keep it looking fresh. Avoid harsh chemicals or abrasive cleaners, as these can damage the print or surface. For best results, clean up any marks or splashes promptly.',
            },
            {
                q: 'Can I remove the wallpaper later?',
                a: [
                    '* **Peel & Stick Wallpaper:** Yes! It’s removable in one piece without damaging walls, as long as the surface was properly primed or painted. This makes it ideal for renters and anyone who likes to refresh their space easily.',
                    '* **Traditional (Non-Pasted) Wallpaper:** Strippable, but removal may require more effort depending on the type of paste used. Follow the removal instructions included with your wallpaper for best results.',
                ],
            },
            {
                q: 'What if I need help choosing a wallpaper type?',
                a: `Just ask! I’m happy to talk through your project and recommend the best option for your space, needs, and style. Email ${VERA_EMAIL}.`,
            },
        ],
    },
    {
        label: 'Customisation',
        entries: [
            {
                q: 'Can I customise the colour or scale of a design?',
                a: [
                    'Yes! I offer free colour tweaks and rescaling for most designs. Send the design link, your preferred colour (HEX code, paint swatch, or inspiration photo), and whether you want the pattern at standard scale, larger, or smaller. I’ll create a custom preview before you order.',
                    '',
                    'If you need help fitting around doors, windows, or awkward walls, message me and we’ll confirm what’s possible before you commit.',
                    '',
                    'For more complex changes (like altering the motif), get in touch and I’ll let you know what’s possible.',
                    '',
                    `Email ${VERA_EMAIL}.`,
                ],
            },
            {
                q: 'How do I request a custom order?',
                a: `Message me directly with your ideas — ${VERA_EMAIL}. I’ll confirm what’s possible, give you a timeline, and send a digital preview for your approval before anything goes to print.`,
            },
            {
                q: 'How long does customisation take?',
                a: 'Simple colour or scale tweaks usually land within a few days once we’re rolling. If you need a more complex change, like altering the motif or a full redesign, I’ll always confirm the cost and timeline with you before starting.',
            },
            {
                q: 'Can I request a completely custom design?',
                a: 'Yes, I’m open to creating completely custom patterns or designs for special projects. Get in touch with your ideas, and I’ll let you know what’s possible and provide a quote if needed.',
            },
            {
                q: 'Will I see a preview before my custom order is printed?',
                a: 'Absolutely! You’ll always receive a digital preview to review and approve before anything goes to print, so you can be sure you’re happy with the final design.',
            },
            {
                q: 'Do you charge extra for customisation?',
                a: 'Most simple tweaks (colour or scale) are free. More extensive changes, such as altering the motif or creating a brand-new design, may have an additional fee. I’ll always be upfront about any costs before starting.',
            },
        ],
    },
    {
        label: 'Shipping & returns',
        entries: [
            {
                q: 'Do you ship internationally?',
                a: 'Yes — free worldwide delivery is part of how ZabZabLab is priced. Transit time after production depends on your country and carrier. Production time and shipping estimates are shown on the product page and at checkout.',
            },
            {
                q: 'Where do your products ship from?',
                a: 'Orders are printed to order and ship from production partners; you’ll see tracking and origin details when your order ships.',
            },
            {
                q: 'Will I have to pay customs or import fees?',
                a: `Some regions add local fees at the border. I can’t prepay every customs desk — if you’re unsure, check your country’s regulations before ordering, or email ${VERA_EMAIL} for advice.`,
            },
            {
                q: 'How long will my order take to arrive?',
                a: [
                    'Wallpapers are printed to order. Production usually takes **1–2 business days**, but during busy periods or holidays it may take a bit longer — the cart shows the live estimate.',
                    '',
                    'Shipping times vary by location; you’ll receive a tracking number as soon as your order ships.',
                ],
            },
            {
                q: 'Can I track my order?',
                a: 'Yes! Once your order ships, you’ll receive a tracking link so you can follow its journey right to your door.',
            },
            {
                q: 'Can I return or exchange my order?',
                a: `Because everything is printed to order, returns and exchanges are only for faults or errors (misprints, wrong item, shipping damage). If something’s off, email ${VERA_EMAIL} as soon as you can with photos — I’ll work with production to make it right.`,
            },
            {
                q: 'What if my order arrives damaged or incorrect?',
                a: 'If your order arrives with any damage or isn’t what you expected, please get in touch straight away. I’ll work with you and production to make it right.',
            },
        ],
    },
    {
        label: 'Sustainability',
        entries: [
            {
                q: 'Are your products eco-friendly?',
                a: 'Yes! Our wallpapers are PVC-free and printed with water-based inks, chosen with home safety in mind. Details on each listing explain substrates and finishes.',
            },
            {
                q: 'What makes your process sustainable?',
                a: 'We use print-on-demand production to reduce waste — only what you order is made. Water-based inks and PVC-free substrates help keep environmental impact lower while maintaining quality.',
            },
            {
                q: 'Are your inks safe for children and pets?',
                a: 'Our wallpapers are printed with non-toxic, water-based inks. They’re chosen with family spaces in mind — order a sample if you want to check feel and finish in your own home.',
            },
            {
                q: 'Do you use sustainable materials?',
                a: 'Peel & Stick uses a woven polyester fabric; Traditional is paper-based. Exact specs are on each product page so you can compare before you swatch.',
            },
            {
                q: 'How can I dispose of or recycle wallpaper and fabric?',
                a: 'Check your local facilities for specific guidelines. Wallpaper scraps can often be reused for crafts or small projects — we encourage creative reuse where you can.',
            },
        ],
    },
    {
        label: 'About ZabZabLab',
        entries: [
            {
                q: 'Who designs your patterns?',
                a: 'Every pattern is designed by me, Vera, behind ZabZabLab. I hand-draw and refine each design — you’re getting original, artist-created work.',
            },
            {
                q: 'What makes ZabZabLab different from big retailers?',
                a: 'You’ll receive personal service, real customisation, and direct communication with the designer — no middlemen or generic stock art. I work closely with customers to help you find or adjust the right pattern for your space.',
            },
            {
                q: 'How can I get in touch?',
                a: `Email ${VERA_EMAIL} — I love questions, ideas, and custom requests. I aim to reply within 24–48 hours.`,
            },
            {
                q: 'What if I have a question that’s not answered here?',
                a: `No problem — reach out and I’ll be happy to help with any queries, custom requests, or advice you might need. ${VERA_EMAIL}`,
            },
            {
                q: 'Can I get personalised advice for my project?',
                a: 'Of course! While I’m not an interior designer, I’m always happy to offer friendly, practical advice based on my experience as a surface pattern designer. Feel free to share your ideas, photos, or questions and I’ll do my best to help.',
            },
        ],
    },
]

function faqSectionSlug(label: string): string {
    return label
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '') || 'section'
}

export const homepageFaqPanels: FaqPanel[] = homepageFaqTabs.map((tab) => ({
    id: `faq-${faqSectionSlug(tab.label)}`,
    label: tab.label,
    sections: [{ title: '', entries: tab.entries }],
}))

function flattenEntries(panels: FaqPanel[]): FaqEntry[] {
    return panels.flatMap((p) => p.sections.flatMap((s) => s.entries))
}

/** Dedupe by question text for JSON-LD (first occurrence wins). */
export function homepageFaqJsonLdString(): string {
    const seen = new Set<string>()
    const mainEntity: object[] = []
    for (const entry of flattenEntries(homepageFaqPanels)) {
        if (seen.has(entry.q)) continue
        seen.add(entry.q)
        mainEntity.push({
            '@type': 'Question',
            name: entry.q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: typeof entry.a === 'string' ? entry.a : entry.a.join(' '),
            },
        })
    }
    return JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity,
    })
}

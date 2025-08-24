import type { Metadata } from 'next'
import styles from '/styles/blog.module.css'

export const metadata: Metadata = {
    title: 'Why Dark Green Kitchens Attract Buyers',
    description:
        'Notes inspired by research from Zillow and Sherwin-Williams on color and home value.',
}

export default function BlogPostGreenKitchen() {
    return (
        <main style={{ padding: '2rem 1rem', maxWidth: 860, margin: '0 auto' }}>
            <h1 style={{ marginBottom: '1rem' }}>Why Dark Green Kitchens Attract Buyers</h1>
            <p className={styles.date} style={{ marginBottom: '0.75rem' }}>
                {new Date('2025-08-24').toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <div className={styles.hero} style={{ marginBottom: '1rem' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/blog/dark_green_kitchen.png"
                    alt="Olive green kitchen cabinetry with patterned tile backsplash"
                />
            </div>
            <p style={{ margin: '0 0 1rem' }}>
                This vignette was inspired by a recent post highlighting how deeper, moodier color palettes can add
                value and desirability to key rooms in a home. In the kitchen, rich olive greens feel grounded,
                timeless, and design-forward—helping buyers connect emotionally with the space.
            </p>
            <p style={{ margin: '0 0 1rem' }}>
                As referenced by studies from Zillow and Sherwin-Williams, certain paint colors are linked with higher
                sale prices: olive green in the kitchen, navy blue in the bedroom, and dark gray in the living room.
                For this look we love Sherwin-Williams tones:
            </p>
            <ul style={{ margin: '0 0 1rem 1rem' }}>
                <li>Ripe Olive — SW 6209</li>
                <li>Naval — SW 6244</li>
                <li>Cyberspace — SW 7076</li>
            </ul>
            <p>
                Credit to the original inspiration from Zillow and Sherwin-Williams, and collaboration mentions of
                Rachel AI Studio. This post is our take on why deep greens work so beautifully in kitchens.
            </p>
        </main>
    )
}



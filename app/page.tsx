import MoodCarousel from './components/MoodCarousel'
import ArtistPaletteIcon from './components/trust/ArtistPaletteIcon'
import DiamondShineIcon from './components/trust/DiamondShineIcon'
import { GlobeIcon, RocketIcon, RulerHorizontalIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '/styles/homepage.module.css'

const moods = [
    { name: 'Playful', slug: 'playful', image: '/portfolio/moods/playful.jpg' },
    { name: 'Romantic', slug: 'romantic', image: '/portfolio/moods/romantic.jpg' },
    { name: 'Cozy', slug: 'cozy', image: '/portfolio/moods/cozy.jpg' },
    { name: 'Grounded', slug: 'grounded', image: '/portfolio/moods/grounded.jpg' },
    { name: 'Serene', slug: 'serene', image: '/portfolio/moods/serene.jpg' },
]

const faqItems = [
    {
        q: 'Is this renter-friendly?',
        a: 'Yes. Removable peel-and-stick options are available — they peel off without damaging walls, great for renters and commitment-phobes alike.',
    },
    {
        q: 'Can I order a sample before committing?',
        a: 'Yes — every design is available as an extra-large sample so you can see the color and texture in your actual space before placing a full order.',
    },
    {
        q: 'Can you match my exact paint color?',
        a: "Yes. I can recolor any pattern to match Sherwin-Williams, Benjamin Moore, Farrow & Ball, Pantone, HEX, or RGB. Submit a request and I'll respond within 24–48 hours.",
    },
    {
        q: 'How much wallpaper will I need?',
        a: "Each listing includes a built-in yardage calculator. Not sure? Email me your room dimensions and I'll help you estimate.",
    },
    {
        q: "Is it safe for kids' rooms or bathrooms?",
        a: 'All designs are printed with water-based, non-toxic inks. Peel-and-stick works best in dry areas; non-woven is suitable for low-humidity bathrooms.',
    },
    {
        q: 'How long does a custom recolor take?',
        a: 'I typically respond to recolor requests within 24–48 hours. Once approved, your order is printed and ships in 1–2 business days.',
    },
]

export default function Home() {
    return (
        <>
            {/* Hero: Full-viewport mood carousel */}
            <div className="home-hero-root">
                <MoodCarousel />
            </div>

            {/* Trust strip: own shell (not .page-section-strip — avoids extra top padding + linen seam) */}
            <div className={styles.trustStripOuter}>
                <div className={styles.trustStripContainer}>
                    <div className={styles.trustStripGrid}>
                        <div className={`${styles.trustItem} ${styles.trustItemLead}`}>
                            <span className={`${styles.trustIcon} ${styles.trustIconLead}`} aria-hidden>
                                <ArtistPaletteIcon />
                            </span>
                            <span className={styles.trustLabel}>Artist-made &mdash; hand-drawn originals, not stock</span>
                        </div>
                        <div className={styles.trustItem}>
                            <span className={styles.trustIcon} aria-hidden>
                                <RocketIcon width={32} height={32} />
                            </span>
                            <span className={styles.trustLabel}>Fast & Free worldwide delivery &mdash; ships in 1&ndash;2 business days</span>
                        </div>
                        <div className={styles.trustItem}>
                            <span className={styles.trustIcon} aria-hidden>
                                <DiamondShineIcon />
                            </span>
                            <span className={styles.trustLabel}>
                                Customizable &mdash; free recolors and rescales to suit your space
                            </span>
                        </div>
                        <div className={styles.trustItem}>
                            <span className={styles.trustIcon} aria-hidden>
                                <RulerHorizontalIcon width={32} height={32} />
                            </span>
                            <span className={styles.trustLabel}>No minimums & Extra Large Samples &mdash; visualize before buying</span>
                        </div>
                        <div className={styles.trustItem}>
                            <span className={styles.trustIcon} aria-hidden>
                                <GlobeIcon width={32} height={32} />
                            </span>
                            <span className={styles.trustLabel}>Eco-Friendly &mdash; produced on-demand, PVC-Free</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Value prop: What this actually is */}
            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className={styles.valueProp}>
                        <h2>Wallpaper that starts with how you want to feel</h2>
                        <p>
                            Forget trend names and Pinterest aesthetics.
                            Pick a mood &mdash; playful, romantic, cozy, grounded, serene &mdash;
                            and find patterns that actually match the feeling you&apos;re going for.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mood grid: Browse by feeling */}
            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <div className={styles.sectionHeader}>
                        <h2>Explore by mood</h2>
                        <p>Each mood has its own curated collection</p>
                    </div>
                    <div className={styles.moodGrid}>
                        {moods.map((mood) => (
                            <Link
                                key={mood.slug}
                                href={`/designs?mood=${mood.slug}`}
                                className={styles.moodCard}
                            >
                                <Image
                                    src={mood.image}
                                    alt={mood.name}
                                    fill
                                    sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw"
                                />
                                <div className={styles.moodCardOverlay} />
                                <span className={styles.moodCardLabel}>{mood.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works: Demystify the journey */}
            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className={styles.sectionHeader}>
                        <h2>How it works</h2>
                        <p>From mood to finished wall in four simple steps</p>
                    </div>
                    <div className={styles.processGrid}>
                        <div className={styles.processStep}>
                            <div className={styles.processStepNumber}>01</div>
                            <h3 className={styles.processStepTitle}>Browse by mood</h3>
                            <p className={styles.processStepDesc}>Pick a feeling — playful, cozy, serene — and explore patterns curated for that mood.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.processStepNumber}>02</div>
                            <h3 className={styles.processStepTitle}>Try a sample first</h3>
                            <p className={styles.processStepDesc}>Order an extra-large sample to see the color and texture in your actual space before committing.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.processStepNumber}>03</div>
                            <h3 className={styles.processStepTitle}>Customize (optional)</h3>
                            <p className={styles.processStepDesc}>Want a different color? Request a recolor and I&apos;ll match your exact palette within 24–48 hours.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.processStepNumber}>04</div>
                            <h3 className={styles.processStepTitle}>Order &amp; transform</h3>
                            <p className={styles.processStepDesc}>Printed on demand with water-based inks and shipped directly to your door.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits: What you get */}
            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <div className={styles.sectionHeader}>
                        <h2>Why ZabZabLab</h2>
                    </div>
                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>◐</div>
                            <h3 className={styles.benefitTitle}>Mood over trends</h3>
                            <p className={styles.benefitDesc}>
                                Design around how you want to feel, not what&apos;s &ldquo;in&rdquo; this season.
                            </p>
                        </div>
                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>⬡</div>
                            <h3 className={styles.benefitTitle}>Make it yours</h3>
                            <p className={styles.benefitDesc}>
                                Every pattern can be recolored to match your palette. Just ask.
                            </p>
                        </div>
                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}>✧</div>
                            <h3 className={styles.benefitTitle}>Artist-made</h3>
                            <p className={styles.benefitDesc}>
                                Hand-drawn by one designer in a small studio. Not AI, not stock.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Samples: Reduce purchase anxiety */}
            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className={styles.samplesSection}>
                        <div className={styles.samplesText}>
                            <h2>Not sure yet? Try a sample first.</h2>
                            <p>
                                Order an extra-large wallpaper sample and see the pattern, color,
                                and texture in your actual space before committing to a full order.
                                Every design is available as a sample.
                            </p>
                            <Link href="/designs" className={styles.ctaButtonOutline}>
                                Browse designs &amp; order samples
                            </Link>
                        </div>
                        <div className={styles.samplesBadge}>
                            <div className={styles.sampleBadgeInner}>
                                <span className={styles.sampleBadgeIcon}>⬡</span>
                                <span className={styles.sampleBadgeLabel}>Extra-large</span>
                                <span className={styles.sampleBadgeText}>samples available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who is this for */}
            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <div className={styles.sectionHeader}>
                        <h2>Made for you if&hellip;</h2>
                    </div>
                    <div className={styles.audienceGrid}>
                        <div className={styles.audienceItem}>
                            <h3 className={styles.audienceTitle}>You&apos;re decorating your home</h3>
                            <p className={styles.audienceDesc}>
                                You want wallpaper that feels personal, not like everyone else&apos;s Pinterest board.
                            </p>
                        </div>
                        <div className={styles.audienceItem}>
                            <h3 className={styles.audienceTitle}>You&apos;re an interior designer</h3>
                            <p className={styles.audienceDesc}>
                                You need custom recolors, quick turnaround, and a designer who actually picks up the phone.
                            </p>
                        </div>
                        <div className={styles.audienceItem}>
                            <h3 className={styles.audienceTitle}>You know what you like</h3>
                            <p className={styles.audienceDesc}>
                                You can describe the feeling you want even if you can&apos;t name the style.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder story + guarantee */}
            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className={styles.founderSection}>
                        <div className={styles.founderImage}>
                            <Image
                                src="/assets/about.jpg"
                                alt="Vera, designer at ZabZabLab"
                                width={400}
                                height={400}
                                sizes="(max-width: 768px) 220px, 300px"
                            />
                        </div>
                        <div className={styles.founderText}>
                            <h2>Hi, I&apos;m Vera</h2>
                            <p>
                                I started ZabZabLab because I was tired of wallpaper shopping feeling like a guessing game.
                                All these aesthetic labels &mdash; &ldquo;coastal grandmother,&rdquo; &ldquo;quiet luxury&rdquo; &mdash;
                                that change every six months.
                            </p>
                            <p>
                                I wanted to help people design around how a room should <em>feel</em>, not what style it&apos;s supposed to be.
                                That&apos;s why every pattern here starts with a mood.
                            </p>
                            <p className={styles.founderGuarantee}>
                                My promise: every custom recolor gets revised until it&apos;s exactly right.
                                I reply within 24&ndash;48 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ: Handle objections before they arise */}
            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <div className={styles.sectionHeader}>
                        <h2>Common questions</h2>
                    </div>
                    <div className={styles.faqList}>
                        {faqItems.map((item, i) => (
                            <details key={i} className={styles.faqItem}>
                                <summary className={styles.faqSummary}>{item.q}</summary>
                                <p className={styles.faqAnswer}>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="page-section-strip page-section-strip-alt page-section-strip-before-footer">
                <div className="page-section-strip-inner">
                    <div className={styles.finalCta}>
                        <h2>Your room should feel like you.</h2>
                        <p>
                            Not like a trend from six months ago. Start with a mood &mdash;
                            the right pattern will follow.
                        </p>
                        <div className={styles.finalCtaButtons}>
                            <Link href="/designs" className={styles.ctaButton}>
                                Explore all designs
                            </Link>
                            <Link href="/designs" className={styles.ctaButtonSecondary}>
                                Try a sample first
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export const metadata: Metadata = {
    title: 'ZabZabLab — Artist-made wallpaper by mood',
    description:
        'Artist-made wallpaper and fabric from a small studio. Tap a mood—playful, romantic, cozy, grounded, serene—and find a pattern that feels like your room.',
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        url: '/',
        title: 'ZabZabLab — Artist-made wallpaper by mood',
        description:
            "Artist-made wallpaper from a tiny studio. Start with the mood you want — I'll help you find the right pattern.",
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'ZabZabLab — artist-made wallpaper by mood',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ZabZabLab — Artist-made wallpaper by mood',
        description:
            "Artist-made wallpaper from a tiny studio. Start with the mood you want — I'll help you find the right pattern.",
        images: ['/assets/zabzablab.png'],
    },
}

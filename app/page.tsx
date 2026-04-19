import HomeFaqTabs from './components/HomeFaqTabs'
import { homepageFaqJsonLdString, homepageFaqPanels } from './content/homepageFaq'
import MoodCarousel from './components/MoodCarousel'
import ArtistPaletteIcon from './components/trust/ArtistPaletteIcon'
import DiamondShineIcon from './components/trust/DiamondShineIcon'
import { RulerHorizontalIcon } from '@radix-ui/react-icons'
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

const homeFaqJsonLd = homepageFaqJsonLdString()

export default function Home() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: homeFaqJsonLd }} />

            {/* 1. Hero */}
            <div className="home-hero-root">
                <MoodCarousel />
            </div>

            {/* 2. Trust strip — 3 biggest objections */}
            <div className={styles.trustStripOuter}>
                <div className={styles.trustStripContainer}>
                    <div className={`${styles.trustStripGrid} ${styles.trustStripGrid3}`}>
                        <div className={`${styles.trustItem} ${styles.trustItemLead}`}>
                            <span className={`${styles.trustIcon} ${styles.trustIconLead}`} aria-hidden>
                                <ArtistPaletteIcon />
                            </span>
                            <span className={styles.trustLabel}>Artist-made &mdash; hand-drawn originals, not AI, not stock</span>
                        </div>
                        <div className={styles.trustItem}>
                            <span className={styles.trustIcon} aria-hidden>
                                <RulerHorizontalIcon width={32} height={32} />
                            </span>
                            <span className={styles.trustLabel}>Extra-large samples &mdash; see it in your actual space before you commit</span>
                        </div>
                        <div className={styles.trustItem}>
                            <span className={styles.trustIcon} aria-hidden>
                                <DiamondShineIcon />
                            </span>
                            <span className={styles.trustLabel}>Free recolors & resizing &mdash; on most designs, to get your space just right</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. What is this */}
            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className={styles.valueProp}>
                        <h2>Wallpaper designed around how you want to feel</h2>
                        <p>
                            Not organized by trend names that change every six months.
                            Pick a mood &mdash; playful, romantic, cozy, grounded, serene &mdash;
                            and find a pattern that actually matches the feeling you&apos;re going for.
                            Every design can be recolored to match your exact palette.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Mystery Box promo — the offer */}
            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <div className={styles.mysteryBoxPromo}>
                        <div className={styles.mysteryBoxVisual}>
                            <Image
                                src="/portfolio/peony-mockup.png"
                                alt="ZabZabLab wallpaper samples"
                                fill
                                sizes="(max-width: 768px) 100vw, 480px"
                                className={styles.mysteryBoxImg}
                            />
                            <div className={styles.mysteryBoxBadge}>
                                <span className={styles.mysteryBoxBadgeNum}>3</span>
                                <span className={styles.mysteryBoxBadgeLabel}>samples,<br />matched<br />to you</span>
                            </div>
                        </div>
                        <div className={styles.mysteryBoxText}>
                            <span className={styles.mysteryBoxTag}>Mystery Box</span>
                            <h2 className={styles.mysteryBoxHeadline}>Not sure where to start?</h2>
                            <p>
                                Answer 3 quick questions about your room and I&apos;ll handpick
                                3 wallpaper samples matched to your mood, palette, and space.
                                They arrive at your door so you can see the texture and color
                                in person before you decide anything.
                            </p>
                            <Link href="/mystery-box" className={styles.ctaButton}>
                                Take the quiz &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Mood grid — visual browse */}
            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className={styles.sectionHeader}>
                        <h2>Or browse by mood</h2>
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

            {/* 6. Who is this for */}
            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <div className={styles.sectionHeader}>
                        <h2>Made for you if&hellip;</h2>
                    </div>
                    <div className={styles.audienceGrid}>
                        <div className={styles.audienceItem}>
                            <h3 className={styles.audienceTitle}>You&apos;re decorating your home</h3>
                            <p className={styles.audienceDesc}>
                                You want a room that feels personal &mdash; not like everyone else&apos;s Pinterest board.
                            </p>
                        </div>
                        <div className={styles.audienceItem}>
                            <h3 className={styles.audienceTitle}>You&apos;re an interior designer</h3>
                            <p className={styles.audienceDesc}>
                                You need custom recolors, quick turnaround, and a designer who actually picks up the phone.
                            </p>
                        </div>
                        <div className={styles.audienceItem}>
                            <h3 className={styles.audienceTitle}>You hate committing blind</h3>
                            <p className={styles.audienceDesc}>
                                You want to hold it, see it in the room, live with it for a day before you order a full roll.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Guarantee — replaces reviews (none yet) */}
            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className={styles.sectionHeader}>
                        <h2>Try it your way</h2>
                        <p>No guessing. No pressure. No surprises.</p>
                    </div>
                    <div className={styles.guaranteeGrid}>
                        <div className={styles.guaranteeItem}>
                            <div className={styles.guaranteeIcon}>⬡</div>
                            <h3 className={styles.guaranteeTitle}>See it before you commit</h3>
                            <p className={styles.guaranteeDesc}>
                                Every design ships as an extra-large sample. Order one, hold it up, live with it. Then decide.
                            </p>
                        </div>
                        <div className={styles.guaranteeItem}>
                            <div className={styles.guaranteeIcon}>◐</div>
                            <h3 className={styles.guaranteeTitle}>Recolors revised until right</h3>
                            <p className={styles.guaranteeDesc}>
                                Request a custom colorway and I&apos;ll revise it until it matches your palette exactly. No limit.
                            </p>
                        </div>
                        <div className={styles.guaranteeItem}>
                            <div className={styles.guaranteeIcon}>✦</div>
                            <h3 className={styles.guaranteeTitle}>You&apos;re talking to the designer</h3>
                            <p className={styles.guaranteeDesc}>
                                Every question comes directly to me. I reply within 24&ndash;48 hours &mdash; not a bot, not a ticket.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Founder — authority + credibility */}
            <section className="page-section-strip">
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
                                I started ZabZabLab because wallpaper shopping felt like a guessing game.
                                Too many trend names &mdash; &ldquo;coastal grandmother,&rdquo; &ldquo;quiet luxury&rdquo; &mdash;
                                that change every six months and mean nothing about how a room actually feels.
                            </p>
                            <p>
                                Every pattern here starts with a mood, not a label. And every order comes with
                                the option to get it recolored until it&apos;s exactly right.
                            </p>
                            <p className={styles.founderGuarantee}>
                                My promise: I&apos;ll revise your custom recolor until it&apos;s exactly right.
                                I reply within 24&ndash;48 hours.
                            </p>
                            <Link href="/about" className={styles.founderCta}>
                                Read my story &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FAQ */}
            <section
                className="page-section-strip page-section-strip-alt"
                aria-labelledby="faq-hub-heading"
            >
                <div className="page-section-strip-inner">
                    <div className={styles.faqHubIntro}>
                        <h2 id="faq-hub-heading">You asked, we answered</h2>
                    </div>
                    <HomeFaqTabs panels={homepageFaqPanels} />
                </div>
            </section>

            {/* 10. Final CTA — transformation reminder */}
            <section className="page-section-strip page-section-strip-before-footer">
                <div className="page-section-strip-inner">
                    <div className={styles.finalCta}>
                        <h2>Your room should feel like you.</h2>
                        <p>
                            Not like a trend from six months ago. Start with a mood &mdash;
                            or let me pick three samples for you.
                        </p>
                        <div className={styles.finalCtaButtons}>
                            <Link href="/mystery-box" className={styles.ctaButton}>
                                Get my mystery box
                            </Link>
                            <Link href="/designs/faux-fabric" className={styles.ctaButtonSecondary}>
                                Browse designs
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

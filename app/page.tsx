import MoodCarousel from './components/MoodCarousel'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '/styles/homepage.module.css'

const moods = [
    { name: 'Playful', slug: 'playful', image: '/portfolio/moods/playful.jpeg' },
    { name: 'Romantic', slug: 'romantic', image: '/portfolio/moods/romantic.png' },
    { name: 'Cozy', slug: 'cozy', image: '/portfolio/moods/cozy.jpeg' },
    { name: 'Grounded', slug: 'grounded', image: '/portfolio/moods/grounded.jpg' },
    { name: 'Serene', slug: 'serene', image: '/portfolio/moods/serene.jpg' },
    { name: 'Farmhouse', slug: 'farmhouse', image: '/portfolio/moods/farmhouse.jpg' },
]

export default function Home() {
    return (
        <>
            {/* Hero: Full-viewport mood carousel */}
            <div className="home-hero-root">
                <MoodCarousel />
            </div>

            {/* Trust strip: Address objections immediately */}
            <div className={styles.trustStrip}>
                <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>✎</span>
                    <span className={styles.trustLabel}>Hand-drawn designs by a real artist</span>
                </div>
                <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>◇</span>
                    <span className={styles.trustLabel}>No minimums, order what you need</span>
                </div>
                <div className={styles.trustItem}>
                    <span className={styles.trustIcon}>✦</span>
                    <span className={styles.trustLabel}>Custom recolors available</span>
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

            {/* Benefits: What you get */}
            <section className="page-section-strip page-section-strip-alt">
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

            {/* Founder story (in place of testimonials) */}
            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className={styles.founderSection}>
                        <div className={styles.founderImage}>
                            <Image 
                                src="/assets/about.jpg" 
                                alt="Vera, designer at ZabZabLab" 
                                width={200} 
                                height={200}
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
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <div className={styles.finalCta}>
                        <h2>Ready to find your mood?</h2>
                        <p>
                            Start with a feeling. The right pattern will follow.
                        </p>
                        <Link href="/designs" className={styles.ctaButton}>
                            Explore all designs
                        </Link>
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

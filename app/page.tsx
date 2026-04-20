import HomeFaqTabs from './components/HomeFaqTabs'
import { homepageFaqJsonLdString, homepageFaqPanels } from './content/homepageFaq'
import MoodCarousel from './components/MoodCarousel'
import SampleCardIcon from './components/icons/SampleCardIcon'
import PaintSwatchIcon from './components/icons/PaintSwatchIcon'
import ChatBubbleIcon from './components/icons/ChatBubbleIcon'
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

            {/* 2. Trust strip */}
            <div className={styles.trustStripOuter}>
                <div className={styles.trustStripContainer}>
                    <div className={`${styles.trustStripGrid} ${styles.trustStripGrid3}`}>
                        <div className={`${styles.trustItem} ${styles.trustItemLead}`}>
                            <span className={`${styles.trustIcon} ${styles.trustIconLead}`} aria-hidden>
                                <SampleCardIcon />
                            </span>
                            <span className={styles.trustLabel}>Sample first, commit after &mdash; Wallpaper is non-returnable industry-wide. That&rsquo;s exactly why we built the Match.</span>
                        </div>
                        <div className={styles.trustItem}>
                            <span className={styles.trustIcon} aria-hidden>
                                <PaintSwatchIcon />
                            </span>
                            <span className={styles.trustLabel}>Recolored to your palette &mdash; Free on most designs. Revised until right.</span>
                        </div>
                        <div className={styles.trustItem}>
                            <span className={styles.trustIcon} aria-hidden>
                                <ChatBubbleIcon />
                            </span>
                            <span className={styles.trustLabel}>You talk to the designer &mdash; Reply within 24&ndash;48 hours. Not a bot, not a ticket.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. The Match promo */}
            <section className="page-section-strip page-section-strip-alt">
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
                            <span className={styles.mysteryBoxPriceChip}>$120</span>
                            <div className={styles.mysteryBoxBadge}>
                                <span className={styles.mysteryBoxBadgeNum}>3</span>
                                <span className={styles.mysteryBoxBadgeLabel}>curated samples,<br />credited on <br />full purchase</span>
                            </div>
                        </div>
                        <div className={styles.mysteryBoxText}>
                            <span className={styles.mysteryBoxTag}>The Match</span>
                            <h2 className={styles.mysteryBoxHeadline}>Not sure where to start? That&rsquo;s what the Match is for.</h2>
                            <p>
                                Tell me a little about your room and what you&rsquo;re going for. I&rsquo;ll pick three wallpapers
                                I think belong there and send them to your door, big enough to actually judge.
                            </p>
                            <p>Live with them a day. Decide after. <u className={styles.creditedBack}>Credited back when you order full rolls.</u></p>
                            <Link href="/the-match" className={styles.ctaButton}>
                                Start with the Match &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Social proof — placeholder until testimonials arrive */}
            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <div className={styles.socialProofPlaceholder}>
                        <p className={styles.socialProofText}>
                            Real installs coming soon. In the meantime, every order is backed by the
                            Exact-Palette Guarantee &mdash; unlimited recolors until it&rsquo;s right.
                        </p>
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
                            <h3 className={styles.audienceTitle}>You&rsquo;re decorating your home</h3>
                            <p className={styles.audienceDesc}>
                                You want a room that feels personal &mdash; not like everyone else&rsquo;s Pinterest board.
                            </p>
                        </div>
                        <div className={styles.audienceItem}>
                            <h3 className={styles.audienceTitle}>You&rsquo;re an interior designer</h3>
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

            {/* 8. Founder */}
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
                            <h2>Hi, I&rsquo;m Vera</h2>
                            <p>
                                I started ZabZabLab because wallpaper shopping felt like a guessing game.
                                Too many trend names &mdash; &ldquo;coastal grandmother,&rdquo; &ldquo;quiet luxury&rdquo; &mdash;
                                that change every six months and mean nothing about how a room actually feels.
                            </p>
                            <p>
                                Every pattern here starts with a mood, not a label. And every order comes with
                                the option to get it recolored until it&rsquo;s exactly right.
                            </p>
                            <p className={styles.founderGuarantee}>
                                My promise: I&rsquo;ll revise your custom recolor until it&rsquo;s exactly right.
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
                className="page-section-strip"
                aria-labelledby="faq-hub-heading"
            >
                <div className="page-section-strip-inner">
                    <div className={styles.faqHubIntro}>
                        <h2 id="faq-hub-heading">You asked, we answered</h2>
                    </div>
                    <HomeFaqTabs panels={homepageFaqPanels} />
                </div>
            </section>

            {/* 10. Final CTA */}
            <section className="page-section-strip page-section-strip-alt page-section-strip-before-footer">
                <div className="page-section-strip-inner">
                    <div className={styles.finalCta}>
                        <h2>Your room should feel like you.</h2>
                        <p>
                            Not like a trend from six months ago. Start with three samples matched to your space.
                        </p>
                        <div className={styles.finalCtaButtons}>
                            <Link href="/the-match" className={styles.ctaButton}>
                                Start with the Match &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export const metadata: Metadata = {
    title: 'ZabZabLab — Artist-made wallpaper, sampled before you commit',
    description:
        'Artist-made wallpaper recolored to your exact palette. Sample before you commit. The Match: three samples picked for your space, $120 credited toward any roll.',
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        url: '/',
        title: 'ZabZabLab — Artist-made wallpaper, sampled before you commit',
        description:
            'Artist-made wallpaper recolored to your exact palette. Start with the Match — three samples picked for your space.',
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'ZabZabLab — artist-made wallpaper',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ZabZabLab — Artist-made wallpaper, sampled before you commit',
        description:
            'Artist-made wallpaper recolored to your exact palette. Start with the Match — three samples picked for your space.',
        images: ['/assets/zabzablab.png'],
    },
}

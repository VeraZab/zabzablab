import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import styles from './textureFoundations.module.css'

type TextureItem = { designSrc: string; alt: string; href?: string }

/** Replace with your real texture assets and Spoonflower links. 4–6 per category. */
const fauxFabricTextures: TextureItem[] = [
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux linen texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux canvas texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux burlap texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux cotton texture', href: undefined },
]

const fauxStoneTextures: TextureItem[] = [
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux stone texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux stone texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux stone texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux stone texture', href: undefined },
]

const fauxLimewashTextures: TextureItem[] = [
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux limewash texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux limewash texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux limewash texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux limewash texture', href: undefined },
]

export const metadata: Metadata = {
    title: 'Texture Foundations',
    description:
        'Faux fabric, faux stone, and faux limewash textures as a versatile base for any project. Customize color and scale—trade-friendly.',
    alternates: { canonical: '/designs/texture-foundations' },
    openGraph: {
        type: 'website',
        url: '/designs/texture-foundations',
        title: 'Texture Foundations | ZabZabLab',
        description:
            'Faux fabric, stone, and limewash textures as a versatile base. Customize color and scale—trade-friendly.',
        images: [{ url: '/assets/zabzablab.png', width: 1200, height: 630, alt: 'ZabZabLab Texture Foundations' }],
    },
}

export default function TextureFoundationsPage() {
    return (
        <main>
            <div className={`page-container ${styles.intro}`}>
                <h1>A base that works for every project</h1>
                <div className={styles.introLead}>
                    <p>
                        Every scheme needs a versatile foundation—something that plays well with bold art, vintage finds, or a quiet palette.
                        Faux fabric, stone, and limewash textures give you exactly that: a neutral, tactile base that feels considered without competing for attention.
                    </p>
                    <p>
                        Use them as wallpaper, feature walls, or accents. Customize color and scale so they fit your project, not the other way around.
                    </p>
                </div>
            </div>

            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className="two-col-grid">
                        <div className={`col-title ${styles.twoColTitle}`}>
                            <h2>Faux fabric textures: your versatile base</h2>
                        </div>
                        <div className={`col-body ${styles.twoColBody}`}>
                            <p>
                                These designs read as subtle fabric weaves—linen, canvas, burlap, cotton—so they work as a backdrop for any style.
                                They&apos;re available on wallpaper and fabric through Spoonflower, and they&apos;re built to be customized:
                            </p>
                            <ul>
                                <li>Match your client&apos;s exact palette (HEX, RGB, or Pantone)</li>
                                <li>Adjust scale for feature walls, upholstery, or accents</li>
                                <li>Quick turnaround so you can keep projects moving</li>
                            </ul>
                            <p>Pick a texture as your base, then make it theirs.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <div className={styles.textureGrid}>
                        {fauxFabricTextures.map((item, index) => (
                            <figure key={`fabric-${index}`} className={styles.textureFigure}>
                                <div className={styles.textureImageWrap}>
                                    <Image
                                        src={item.designSrc}
                                        alt={item.alt}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        sizes="(max-width: 600px) 100vw, 50vw"
                                    />
                                </div>
                                <figcaption className={styles.textureCaption}>{item.alt}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className="two-col-grid">
                        <div className={`col-title ${styles.twoColTitle}`}>
                            <h2>Faux stone</h2>
                        </div>
                        <div className={`col-body ${styles.twoColBody}`}>
                            <p>
                                Organic, tactile stone textures for feature walls, accents, or full rooms. They read as natural material without the cost or weight of real stone—and they&apos;re easy to customize to your palette and scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <div className={styles.textureGrid}>
                        {fauxStoneTextures.map((item, index) => (
                            <figure key={`stone-${index}`} className={styles.textureFigure}>
                                <div className={styles.textureImageWrap}>
                                    <Image src={item.designSrc} alt={item.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 600px) 100vw, 50vw" />
                                </div>
                                <figcaption className={styles.textureCaption}>{item.alt}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className="two-col-grid">
                        <div className={`col-title ${styles.twoColTitle}`}>
                            <h2>Faux limewash</h2>
                        </div>
                        <div className={`col-body ${styles.twoColBody}`}>
                            <p>
                                Soft, plaster-like depth with the look of limewash or mineral paint—without the mess. Ideal for calm, European-inspired walls and spaces that want texture without going bold.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section-strip">
                <div className="page-section-strip-inner">
                    <div className={styles.textureGrid}>
                        {fauxLimewashTextures.map((item, index) => (
                            <figure key={`limewash-${index}`} className={styles.textureFigure}>
                                <div className={styles.textureImageWrap}>
                                    <Image src={item.designSrc} alt={item.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 600px) 100vw, 50vw" />
                                </div>
                                <figcaption className={styles.textureCaption}>{item.alt}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className="two-col-grid swap">
                        <div className={`col-body ${styles.twoColBody}`}>
                            <h2>Customize your base</h2>
                            <p>
                                Need a different color, scale, or repeat? Use the request form to tell me your project details—palette,
                                application (wallpaper, fabric, etc.), and any reference. I&apos;ll get back to you with options and next steps.
                            </p>
                            <p>
                                <Link href="/resize-recolor-request" className={styles.ctaLink}>
                                    Request a resize or recolor →
                                </Link>
                            </p>
                        </div>
                        <div className={`col-title ${styles.twoColTitle}`}>
                            <span className={styles.ctaTagline}>One form. Your specs. Done.</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className={`page-container ${styles.backBlock}`}>
                <p>
                    <Link href="/" className={styles.ctaLink}>
                        ← Back to Featured
                    </Link>
                </p>
            </div>
        </main>
    )
}

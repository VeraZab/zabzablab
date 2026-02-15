import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import styles from './textureFoundations.module.css'

type TextureItem = { designSrc: string; alt: string; href?: string }

/** Replace with your real texture assets and Spoonflower links. 4–6 per category. */
const fauxFabricTextures: TextureItem[] = [
    { designSrc: '/portfolio/linen-weave-block.jpg', alt: 'Tight Linen Weave Texture', href: 'https://www.spoonflower.com/collections/1459860-tight-linen-weave-zab26005-by-zabzablab' },
    { designSrc: '/portfolio/grasscloth-block.jpg', alt: 'Slobby Vertical Grasscloth Texture', href: 'https://www.spoonflower.com/en/collections/1341765' },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux burlap texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux cotton texture', href: undefined },
]

const fauxStoneTextures: TextureItem[] = [
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
        'Faux fabric, faux stone, and faux limewash textures as a versatile base for any project. Customize color, trade-friendly.',
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
                </div>
            </div>

            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className="two-col-grid">
                        <div className={`col-title ${styles.twoColTitle}`}>
                            <h2>Faux fabric textures:<br />your versatile base</h2>
                        </div>
                        <div className={`col-body ${styles.twoColBody}`}>
                            <p>
                                Every texture starts from a real, high-resolution photograph of actual fabric, so the weave, grain, and detail feel realistic.
                                These textures are:
                            </p>
                            <ul>
                                <li>Available on wallpaper and fabric, and <Link href="/resize-recolor-request">color customizable</Link></li>
                                <li>Easy to clean and maintain compared to upholstered or fabric-wrapped walls</li>
                                <li>Fraction of the cost of real grasscloth or textile wallcovering</li>
                                <li>Quick turnaround so you can keep projects moving</li>
                            </ul>
                            <p>Don&apos;t see the texture you&apos;re looking for? <a href="mailto:hello@zabzablab.com">Let me know</a>—I have a large library and can send you other options.</p>
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
                                <div className={styles.textureMeta}>
                                    <figcaption className={styles.textureCaption}>{item.alt}</figcaption>
                                    {item.href && (
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.textureCta}>
                                            See more color options →
                                        </a>
                                    )}
                                </div>
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
                                <div className={styles.textureMeta}>
                                    <figcaption className={styles.textureCaption}>{item.alt}</figcaption>
                                    {item.href && (
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.textureCta}>
                                            See more color options →
                                        </a>
                                    )}
                                </div>
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
                                <div className={styles.textureMeta}>
                                    <figcaption className={styles.textureCaption}>{item.alt}</figcaption>
                                    {item.href && (
                                        <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.textureCta}>
                                            See more color options →
                                        </a>
                                    )}
                                </div>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className={styles.notFinding}>
                        <h2>Don&apos;t see what you&apos;re looking for?</h2>
                        <p>
                            What&apos;s shown here is just a sample—I have a larger library of textures, weaves, and finishes that aren&apos;t listed yet. {" "}
                            <a href="mailto:zabzablab@gmail.com" className={styles.ctaLink}>Tell me what you need</a> and I&apos;ll send you some options!
                        </p>
                        <p>
                            Every texture can be color customized to match your palette, adjusted to scale, or rotated.
                            Just <Link href="/resize-recolor-request" className={styles.ctaLink}>send a customization request here</Link>.
                        </p>
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

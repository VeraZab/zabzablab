import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../faux-fabric/textureFoundations.module.css'

type TextureItem = { designSrc: string; alt: string; href?: string }

const fauxLimewashTextures: TextureItem[] = [
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux limewash texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux limewash texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux limewash texture', href: undefined },
    { designSrc: '/portfolio/cyanotype-block.png', alt: 'Faux limewash texture', href: undefined },
]

export const metadata: Metadata = {
    title: 'Faux Limewash Texture Wallpaper — Plaster & Mineral Paint Look',
    description:
        'Faux limewash and plaster texture wallpaper for calm, European-inspired interiors. Soft mineral-paint depth without the mess. Customizable color and scale, trade-friendly.',
    alternates: { canonical: '/designs/faux-limewash' },
    openGraph: {
        type: 'website',
        url: '/designs/faux-limewash',
        title: 'Faux Limewash Texture Wallpaper | ZabZabLab',
        description:
            'Soft plaster and limewash texture wallpaper for European-inspired walls. Customizable color and scale, trade-friendly.',
        images: [{ url: '/assets/zabzablab.png', width: 1200, height: 630, alt: 'ZabZabLab Faux Limewash Texture Wallpaper' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Faux Limewash Texture Wallpaper | ZabZabLab',
        description:
            'Soft plaster and limewash texture wallpaper for European-inspired walls. Customizable color and scale, trade-friendly.',
        images: ['/assets/zabzablab.png'],
    },
}

export default function FauxLimewashPage() {
    return (
        <main>
            <div className={`page-container ${styles.intro}`}>
                <h1>Faux Limewash Textures</h1>
                <div className={styles.introLead}>
                    <p>
                        Soft, plaster-like depth with the look of limewash or mineral paint—without the mess.
                        Ideal for calm, European-inspired walls and spaces that want texture without going bold.
                    </p>
                </div>
            </div>

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
                                        <>
                                            <p className={styles.nonReturnableNote}>
                                                Non-returnable &mdash; printed to order.{' '}
                                                <Link href="/the-match">Start with the Match</Link> to see it in your space first.
                                            </p>
                                            <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.textureCta}>
                                                See more color options &rarr;
                                            </a>
                                        </>
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
                        <h2>Don&apos;t See What You&apos;re Looking For?</h2>
                        <p>
                            What&apos;s shown here is just a sample—I have a larger library of limewash and plaster textures that aren&apos;t listed yet. {' '}
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
                    <Link href="/designs/faux-fabric" className={styles.ctaLink}>
                        ← Back to Texture Foundations
                    </Link>
                </p>
            </div>
        </main>
    )
}

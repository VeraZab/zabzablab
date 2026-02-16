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
    title: 'Faux Limewash Textures',
    description:
        'Soft, plaster-like faux limewash textures for calm, European-inspired walls. Customize color and scale—trade-friendly.',
    alternates: { canonical: '/designs/faux-limewash' },
    openGraph: {
        type: 'website',
        url: '/designs/faux-limewash',
        title: 'Faux Limewash Textures | ZabZabLab',
        description:
            'Faux limewash textures for calm, European-inspired walls. Customize color and scale—trade-friendly.',
        images: [{ url: '/assets/zabzablab.png', width: 1200, height: 630, alt: 'ZabZabLab Faux Limewash Textures' }],
    },
}

export default function FauxLimewashPage() {
    return (
        <main>
            <div className={`page-container ${styles.intro}`}>
                <h1>Faux limewash textures</h1>
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
                            What&apos;s shown here is just a sample—I have a larger library of limewash and plaster textures that aren&apos;t listed yet. {' '}
                            <a href="mailto:hello@zabzablab.com" className={styles.ctaLink}>Tell me what you need</a> and I&apos;ll send you some options!
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

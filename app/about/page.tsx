import styles from '/styles/about.module.css'
import type { Metadata } from 'next'

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'ZabZabLab Wallpaper and Fabric Design Studio by Vera Zabeida',
                        url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com') + '/about',
                        image: new URL('/assets/about.jpg', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                        sameAs: [
                            'https://www.instagram.com/zabzablab',
                            'https://www.spoonflower.com/profiles/zabzablab',
                        ],
                        worksFor: {
                            '@type': 'Organization',
                            name: 'ZabZabLab',
                            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com',
                        },
                        jobTitle: 'Surface Pattern Designer, owner of ZabZabLab Studio',
                    }),
                }}
            />
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img
                        src="/assets/about.jpg"
                        alt="Vera Zabeida"
                    />
                </div>
                <div className={styles.caption}>
                    <p>
                        Hi, I&apos;m Vera &mdash; the designer behind ZabZabLab.
                        I design wallpaper and fabric for soulful, layered, storied interiors.
                    </p>
                    <p>
                        All my designs are hand-drawn on the iPad. I love mixing
                        traditional motifs with modern elements in thoughtful,
                        unexpected ways &mdash; patterns that feel rooted yet fit
                        the way we actually live today. I hope my work carries
                        a sense of escapism and travel, like a small window into
                        somewhere you&apos;d love to be.
                    </p>
                    <p>
                        My designs are available on wallpaper and fabric through <a href="https://www.spoonflower.com/profiles/zabzablab?filter_action=collection&info_action=&nav_action=all&shop_selection=all_collection&sub_action=new_profile" target="_blank" rel="noopener noreferrer">Spoonflower</a>,
                        and I offer licensing for commercial projects. I&apos;m based in New Jersey, USA.
                        Have something in mind? <a href="mailto:zabzablab@gmail.com">Let&apos;s talk</a>!
                    </p>
                </div>
            </div>
        </div>
    )
}

export const metadata: Metadata = {
    title: 'About ZabZabLab',
    description:
        'Meet Vera—surface pattern designer behind ZabZabLab. Hand-drawn patterns for wallpaper and textiles: playful, nostalgic, and made to customize.',
    alternates: { canonical: '/about' },
}

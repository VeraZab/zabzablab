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
                        name: 'ZabZabLab Surface Pattern Design Studio by Vera Zabeida',
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
                    Hi, welcome to my little corner of the internet!
                    <br />
                    <br />
                    I’m Vera — the surface pattern designer behind ZabZabLab,
                    based in NJ, USA. I create artwork for textiles and home
                    goods rooted in playfulness, a touch of nostalgia, and a
                    love for the quiet joys of everyday life.
                    <br />
                    <br />
                    All my patterns are hand-drawn on the iPad, which gives me
                    the freedom to turn a cozy coffee shop or a view of the
                    Hudson into my studio. I love adding an analog feel to my
                    work — blending timeless motifs and soft palettes with the
                    occasional twist, whether it’s a whimsical subject or a
                    detail that invites a second glance.
                    <br />
                    <br />
                    If you're looking to bring charm and character into your
                    project — art that feels familiar yet unexpected, polished
                    without being stiff — you're in the right place. Feel free
                    to reach out via the email link above to learn more about
                    licensing my designs or collaborating.
                    <br />
                    <br />
                    Let’s make some magic together!
                </div>
            </div>
        </div>
    )
}

export const metadata: Metadata = {
    title: 'About ZabZabLab',
    description:
        'Meet Vera, the surface pattern designer behind ZabZabLab. Playful, nostalgic, and timeless patterns for interiors and textiles.',
    alternates: { canonical: '/about' },
}

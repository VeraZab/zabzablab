import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/statichero.module.css'

export default function StaticHero() {
    return (
        <section className={styles.hero} aria-label="Hero">
            <Image
                src="/portfolio/moods/romantic.jpg"
                alt="Artist-made wallpaper installed in a real room"
                fill
                priority
                sizes="100vw"
                className={styles.heroImage}
            />
            <div className={styles.overlay} aria-hidden="true" />
            <div className={styles.content}>
                <h1 className={styles.headline}>
                    Artist-made wallpaper, recolored to your exact palette — sampled before you commit.
                </h1>
                <p className={styles.subheadline}>
                    Pick a mood. Get three samples matched to your space. Then decide.
                </p>
                <Link href="/the-match" className={styles.cta}>
                    Start with the Match &rarr;
                </Link>
            </div>
        </section>
    )
}

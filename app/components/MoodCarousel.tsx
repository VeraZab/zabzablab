'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/moodcarousel.module.css'

const moods = [
    { id: 'playful',  label: 'Playful',  src: '/portfolio/moods/playful.jpg'  },
    { id: 'romantic', label: 'Romantic', src: '/portfolio/moods/romantic.jpg' },
    { id: 'cozy',     label: 'Cozy',     src: '/portfolio/moods/cozy.jpg'     },
    { id: 'grounded', label: 'Grounded', src: '/portfolio/moods/grounded.jpg' },
    { id: 'serene',   label: 'Serene',   src: '/portfolio/moods/serene.jpg'   },
] as const

const INTERVAL = 5000

export default function MoodCarousel() {
    const [current, setCurrent]       = useState(0)
    const [animKey, setAnimKey]       = useState(0)
    const [revisions, setRevisions]   = useState(() => moods.map(() => 0))
    const currentRef                  = useRef(0)

    const goTo = (index: number) => {
        currentRef.current = index
        setCurrent(index)
        setRevisions(prev => {
            const next = [...prev]
            next[index]++
            return next
        })
        setAnimKey(k => k + 1)
    }

    useEffect(() => {
        const id = setInterval(() => {
            const next = (currentRef.current + 1) % moods.length
            goTo(next)
        }, INTERVAL)
        return () => clearInterval(id)
    }, [])

    const activeMood = moods[current]

    return (
        <section className={styles.hero} aria-label="Mood carousel">
            {moods.map((mood, i) => (
                <div
                    key={mood.id}
                    className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
                    aria-hidden={i !== current}
                >
                    <Image
                        key={`${mood.id}-${revisions[i]}`}
                        src={mood.src}
                        alt={`${mood.label} mood — ZabZabLab wallpaper`}
                        fill
                        priority={i === 0}
                        sizes="100vw"
                        className={styles.slideImage}
                    />
                </div>
            ))}

            <div className={styles.overlay} aria-hidden="true" />

            <div className={styles.content}>
                <div className={styles.groupA}>
                    <p className={styles.tagline}>
                        How would you like your home to feel?
                    </p>
                    <h1 key={`name-${animKey}`} className={styles.moodName}>
                        {activeMood.label}
                    </h1>
                </div>

                {/* <p className={styles.sellCopy}>
                    You deserve your space to <span className={styles.sellCopyEmphasis}>feel</span> just right. That&rsquo;s why we made the curation box: a custom, artist selected wallpaper sample box that helps you build your space around how it should feel, not whatever&rsquo;s trending.
                </p> */}

                {/* <p className={styles.sellCopy}>
                    You deserve your space to <span className={styles.sellCopyEmphasis}>feel</span> just right. That&rsquo;s why we made the curation box: a custom, artist selected wallpaper sample box that helps you build your space around how it should feel, not whatever&rsquo;s trending.
                </p> */}
                <p className={styles.sellCopy}>
                    Find the perfect wallpaper for your home: create the mood, forget the trends. Get a curated, artist selected sample box that best fits your vibe.
                </p>


                <div className={styles.groupB}>
                    <Link href="/the-match" className={styles.cta}>
                        Start the Match &rarr;
                    </Link>
                    <p className={styles.ctaProof}>
                        $120 &middot; 3 samples &middot; credited toward any roll
                    </p>
                </div>
            </div>
        </section>
    )
}

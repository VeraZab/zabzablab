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
    const [paused, setPaused]         = useState(false)
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (paused) return
        const id = setInterval(() => {
            const next = (currentRef.current + 1) % moods.length
            goTo(next)
        }, INTERVAL)
        return () => clearInterval(id)
    }, [paused])

    const selectMood = (index: number) => {
        goTo(index)
        setPaused(true)
    }

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
                        How would you like your space to feel?
                    </p>
                    <h1 key={`name-${animKey}`} className={styles.moodName}>
                        {activeMood.label}
                    </h1>
                </div>

                <p className={styles.sellCopy}>
                    Artist made and curated wallpaper, centered on the mood you want to create in your home, not trends.
                </p>



                <div className={styles.groupB}>
                    <Link href="/the-match" className={styles.cta}>
                        Start the Match Curation Box &rarr;
                    </Link>
                    <Link
                        href="/designs"
                        className={styles.secondaryCta}
                    >
                        Or browse by mood &rarr;
                    </Link>
                </div>
            </div>
        </section>
    )
}

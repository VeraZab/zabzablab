'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/mystery-box.module.css'

type Room = 'bedroom' | 'living-room' | 'dining-room' | 'home-office' | 'kids-room' | 'bathroom'
type Mood = 'playful' | 'romantic' | 'cozy' | 'grounded' | 'serene'
type Color = 'light-airy' | 'warm-earthy' | 'deep-moody' | 'bright-bold'

interface Design {
    id: string
    name: string
    image: string
    moods: Mood[]
    colors: Color[]
    rooms: Room[]
    desc: string
    shopUrl: string
}

const designs: Design[] = [
    {
        id: 'grasscloth',
        name: 'Faux Grasscloth',
        image: '/portfolio/grasscloth-block.jpg',
        moods: ['cozy', 'grounded', 'serene'],
        colors: ['warm-earthy', 'light-airy'],
        rooms: ['bedroom', 'living-room', 'dining-room', 'home-office', 'bathroom'],
        desc: 'Organic woven texture, effortlessly calming in any space.',
        shopUrl: '/designs/faux-fabric',
    },
    {
        id: 'linen-weave',
        name: 'Faux Linen Weave',
        image: '/portfolio/linen-weave-block.jpg',
        moods: ['serene', 'grounded', 'cozy'],
        colors: ['light-airy', 'warm-earthy'],
        rooms: ['bedroom', 'living-room', 'home-office', 'bathroom'],
        desc: 'Soft, airy textile-inspired texture for walls that breathe.',
        shopUrl: '/designs/faux-fabric',
    },
    {
        id: 'painterly-vine',
        name: 'Painterly Vine',
        image: '/portfolio/painterly_vine_gold.jpg',
        moods: ['romantic', 'playful'],
        colors: ['warm-earthy', 'bright-bold'],
        rooms: ['bedroom', 'living-room', 'dining-room'],
        desc: 'Hand-painted botanical in warm gold — deeply intimate.',
        shopUrl: '/designs',
    },
    {
        id: 'peony',
        name: 'Peony Garden',
        image: '/portfolio/peony-block.png',
        moods: ['romantic', 'playful'],
        colors: ['bright-bold', 'light-airy'],
        rooms: ['bedroom', 'living-room', 'dining-room', 'kids-room'],
        desc: 'Lush floral with that just-bloomed softness.',
        shopUrl: '/designs',
    },
    {
        id: 'horse',
        name: 'Horse Print',
        image: '/portfolio/horse-block.png',
        moods: ['playful', 'grounded'],
        colors: ['bright-bold', 'deep-moody'],
        rooms: ['living-room', 'kids-room', 'home-office'],
        desc: 'Graphic, spirited, and immediately a conversation piece.',
        shopUrl: '/designs',
    },
    {
        id: 'cyanotype',
        name: 'Cyanotype',
        image: '/portfolio/cyanotype-block.png',
        moods: ['serene', 'grounded'],
        colors: ['deep-moody', 'light-airy'],
        rooms: ['bedroom', 'living-room', 'home-office'],
        desc: 'Photographic cyanotype process turned into atmospheric texture.',
        shopUrl: '/designs',
    },
    {
        id: 'tweed',
        name: 'Faux Tweed',
        image: '/portfolio/tweed-block.jpg',
        moods: ['cozy', 'grounded'],
        colors: ['deep-moody', 'warm-earthy'],
        rooms: ['bedroom', 'living-room', 'home-office', 'dining-room'],
        desc: 'Rich, layered textile texture. Made for rooms you want to stay in.',
        shopUrl: '/designs/faux-fabric',
    },
    {
        id: 'basketweave',
        name: 'Faux Basketweave',
        image: '/portfolio/basketweave-block3.jpg',
        moods: ['cozy', 'serene', 'grounded'],
        colors: ['warm-earthy', 'light-airy'],
        rooms: ['living-room', 'dining-room', 'home-office', 'bathroom'],
        desc: 'Handwoven geometry with a natural, grounding calm.',
        shopUrl: '/designs/faux-fabric',
    },
    {
        id: 'diagonal-canvas',
        name: 'Diagonal Canvas',
        image: '/portfolio/diagonal-canvas-block.png',
        moods: ['grounded', 'serene'],
        colors: ['light-airy', 'warm-earthy'],
        rooms: ['bedroom', 'living-room', 'home-office', 'bathroom'],
        desc: 'Clean diagonal weave — simple, tactile, quietly beautiful.',
        shopUrl: '/designs/faux-fabric',
    },
]

const rooms: { value: Room; label: string; icon: string }[] = [
    { value: 'bedroom', label: 'Bedroom', icon: '🛏' },
    { value: 'living-room', label: 'Living Room', icon: '🛋' },
    { value: 'dining-room', label: 'Dining Room', icon: '🍽' },
    { value: 'home-office', label: 'Home Office', icon: '🖥' },
    { value: 'kids-room', label: 'Kids Room', icon: '🎨' },
    { value: 'bathroom', label: 'Bathroom', icon: '🛁' },
]

const moods: { value: Mood; label: string; desc: string }[] = [
    { value: 'playful', label: 'Playful', desc: 'Bold, graphic, joyful' },
    { value: 'romantic', label: 'Romantic', desc: 'Floral, soft, dreamy' },
    { value: 'cozy', label: 'Cozy', desc: 'Warm, textured, comforting' },
    { value: 'grounded', label: 'Grounded', desc: 'Natural, calm, earthy' },
    { value: 'serene', label: 'Serene', desc: 'Airy, minimal, peaceful' },
]

const colors: { value: Color; label: string; desc: string; swatch: string }[] = [
    { value: 'light-airy', label: 'Light & Airy', desc: 'Whites, creams, soft neutrals', swatch: '#F3EEE8' },
    { value: 'warm-earthy', label: 'Warm & Earthy', desc: 'Taupes, terracottas, naturals', swatch: '#C4A882' },
    { value: 'deep-moody', label: 'Deep & Moody', desc: 'Navies, charcoals, deep tones', swatch: '#2B3A4A' },
    { value: 'bright-bold', label: 'Bright & Bold', desc: 'Statement colors, saturated hues', swatch: '#7B5EA7' },
]

function recommend(room: Room, mood: Mood, color: Color): Design[] {
    const scored = designs.map(d => ({
        ...d,
        score:
            (d.moods.includes(mood) ? 3 : 0) +
            (d.colors.includes(color) ? 2 : 0) +
            (d.rooms.includes(room) ? 1 : 0),
    }))
    scored.sort((a, b) => b.score - a.score)
    return scored.slice(0, 3)
}

type Step = 0 | 1 | 2 | 3 | 4 | 5

export default function MysteryBoxPage() {
    const [step, setStep] = useState<Step>(0)
    const [room, setRoom] = useState<Room | null>(null)
    const [mood, setMood] = useState<Mood | null>(null)
    const [color, setColor] = useState<Color | null>(null)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [country, setCountry] = useState('United States')
    const [notes, setNotes] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState('')

    const picks = room && mood && color ? recommend(room, mood, color) : []

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setSubmitting(true)
        setSubmitError('')

        try {
            const res = await fetch('/api/mystery-box', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    address,
                    city,
                    state,
                    zip,
                    country,
                    notes,
                    room,
                    mood,
                    color,
                    picks: picks.map(p => p.name).join(', '),
                }),
            })
            const data = await res.json()
            if (!res.ok) {
                setSubmitError(data.error || 'Something went wrong. Please try again.')
            } else {
                setStep(5)
            }
        } catch {
            setSubmitError('Something went wrong. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.card}>

                {/* Step 0 — Intro */}
                {step === 0 && (
                    <div className={styles.intro}>
                        <div className={styles.introImage}>
                            <Image
                                src="/portfolio/moods/romantic.jpg"
                                alt="ZabZabLab wallpaper samples"
                                fill
                                sizes="(max-width: 768px) 100vw, 560px"
                                className={styles.introImg}
                            />
                            <div className={styles.introOverlay} />
                            <div className={styles.introBadge}>Mystery Box</div>
                        </div>
                        <div className={styles.introBody}>
                            <h1 className={styles.introHeadline}>
                                3 samples, curated for your space.
                                <br />
                                <em>Delivered to your door.</em>
                            </h1>
                            <p className={styles.introDesc}>
                                Answer 3 quick questions — room, mood, color direction — and I'll
                                hand-pick 3 wallpaper samples that match. They'll ship to your door so
                                you can see them in your actual space before committing to anything.
                            </p>
                            <ul className={styles.introBullets}>
                                <li>3 extra-large wallpaper samples</li>
                                <li>Matched to your room's mood &amp; palette</li>
                                <li>Ships directly to your door</li>
                            </ul>
                            <button className={styles.primaryBtn} onClick={() => setStep(1)}>
                                Find my matches →
                            </button>
                        </div>
                    </div>
                )}

                {/* Steps 1–3 — Quiz */}
                {step >= 1 && step <= 3 && (
                    <div className={styles.quiz}>
                        <div className={styles.progress}>
                            <div className={styles.progressFill} style={{ width: `${(step / 3) * 100}%` }} />
                        </div>
                        <p className={styles.stepCount}>{step} of 3</p>

                        {step === 1 && (
                            <>
                                <h2 className={styles.question}>What room are you designing?</h2>
                                <div className={styles.optionsGrid}>
                                    {rooms.map(r => (
                                        <button
                                            key={r.value}
                                            className={`${styles.option} ${room === r.value ? styles.optionSelected : ''}`}
                                            onClick={() => { setRoom(r.value); setStep(2) }}
                                        >
                                            <span className={styles.optionIcon}>{r.icon}</span>
                                            <span className={styles.optionLabel}>{r.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <h2 className={styles.question}>What feeling do you want in this room?</h2>
                                <div className={styles.moodOptions}>
                                    {moods.map(m => (
                                        <button
                                            key={m.value}
                                            className={`${styles.moodOption} ${mood === m.value ? styles.optionSelected : ''}`}
                                            onClick={() => { setMood(m.value); setStep(3) }}
                                        >
                                            <span className={styles.moodLabel}>{m.label}</span>
                                            <span className={styles.moodDesc}>{m.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <h2 className={styles.question}>What's your color direction?</h2>
                                <div className={styles.colorOptions}>
                                    {colors.map(c => (
                                        <button
                                            key={c.value}
                                            className={`${styles.colorOption} ${color === c.value ? styles.optionSelected : ''}`}
                                            onClick={() => { setColor(c.value); setStep(4) }}
                                        >
                                            <span className={styles.colorSwatch} style={{ background: c.swatch }} />
                                            <span className={styles.colorInfo}>
                                                <span className={styles.colorLabel}>{c.label}</span>
                                                <span className={styles.colorDesc}>{c.desc}</span>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        <button className={styles.backBtn} onClick={() => setStep((step - 1) as Step)}>
                            ← Back
                        </button>
                    </div>
                )}

                {/* Step 4 — Results + Form */}
                {step === 4 && picks.length === 3 && (
                    <div className={styles.results}>
                        <div className={styles.resultsHeader}>
                            <h2 className={styles.resultsTitle}>Your perfect matches</h2>
                            <p className={styles.resultsSubtitle}>
                                Based on your answers, here are the 3 samples I'd send you.
                            </p>
                        </div>

                        <div className={styles.picksGrid}>
                            {picks.map(pick => (
                                <div key={pick.id} className={styles.pickCard}>
                                    <div className={styles.pickImageWrap}>
                                        <Image
                                            src={pick.image}
                                            alt={pick.name}
                                            fill
                                            sizes="(max-width: 600px) 90vw, 200px"
                                            className={styles.pickImage}
                                        />
                                    </div>
                                    <div className={styles.pickInfo}>
                                        <p className={styles.pickName}>{pick.name}</p>
                                        <p className={styles.pickDesc}>{pick.desc}</p>
                                        <Link href={pick.shopUrl} className={styles.pickLink}>
                                            See design →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.formSection}>
                            <h3 className={styles.formTitle}>
                                Tell me where to ship your mystery box
                            </h3>
                            <p className={styles.formSubtitle}>
                                I'll personally pack your 3 matched samples and ship them to you.
                            </p>

                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="mb-name">Your name</label>
                                        <input
                                            id="mb-name"
                                            className={styles.input}
                                            type="text"
                                            required
                                            autoComplete="name"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            placeholder="Jane Smith"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="mb-email">Email address</label>
                                        <input
                                            id="mb-email"
                                            className={styles.input}
                                            type="email"
                                            required
                                            autoComplete="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="mb-address">Street address</label>
                                    <input
                                        id="mb-address"
                                        className={styles.input}
                                        type="text"
                                        required
                                        autoComplete="street-address"
                                        value={address}
                                        onChange={e => setAddress(e.target.value)}
                                        placeholder="123 Main St, Apt 4B"
                                    />
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="mb-city">City</label>
                                        <input
                                            id="mb-city"
                                            className={styles.input}
                                            type="text"
                                            required
                                            autoComplete="address-level2"
                                            value={city}
                                            onChange={e => setCity(e.target.value)}
                                            placeholder="New York"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="mb-state">State / Province</label>
                                        <input
                                            id="mb-state"
                                            className={styles.input}
                                            type="text"
                                            required
                                            autoComplete="address-level1"
                                            value={state}
                                            onChange={e => setState(e.target.value)}
                                            placeholder="NY"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.label} htmlFor="mb-zip">ZIP / Postal code</label>
                                        <input
                                            id="mb-zip"
                                            className={styles.input}
                                            type="text"
                                            required
                                            autoComplete="postal-code"
                                            value={zip}
                                            onChange={e => setZip(e.target.value)}
                                            placeholder="10001"
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="mb-country">Country</label>
                                    <input
                                        id="mb-country"
                                        className={styles.input}
                                        type="text"
                                        required
                                        autoComplete="country-name"
                                        value={country}
                                        onChange={e => setCountry(e.target.value)}
                                        placeholder="United States"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.label} htmlFor="mb-notes">
                                        Anything else I should know? <span className={styles.optional}>(optional)</span>
                                    </label>
                                    <textarea
                                        id="mb-notes"
                                        className={`${styles.input} ${styles.textarea}`}
                                        rows={3}
                                        value={notes}
                                        onChange={e => setNotes(e.target.value)}
                                        placeholder="e.g. I love muted tones, or I need something renter-friendly..."
                                    />
                                </div>

                                {submitError && <p className={styles.errorMsg}>{submitError}</p>}

                                <button
                                    type="submit"
                                    className={styles.primaryBtn}
                                    disabled={submitting}
                                >
                                    {submitting ? 'Sending…' : 'Send my mystery box →'}
                                </button>
                            </form>
                        </div>

                        <button className={styles.backBtn} onClick={() => setStep(3)}>
                            ← Change answers
                        </button>
                    </div>
                )}

                {/* Step 5 — Success */}
                {step === 5 && (
                    <div className={styles.success}>
                        <div className={styles.successIcon}>✦</div>
                        <h2 className={styles.successTitle}>Your mystery box is on its way!</h2>
                        <p className={styles.successDesc}>
                            I'll personally pack your 3 curated samples and send them your way. Expect a
                            confirmation email within 24–48 hours.
                        </p>
                        <p className={styles.successDesc}>
                            In the meantime, feel free to browse the full collection — every design is
                            customizable in color and scale.
                        </p>
                        <div className={styles.successLinks}>
                            <Link href="/designs/faux-fabric" className={styles.primaryBtn}>
                                Browse faux fabrics
                            </Link>
                            <Link href="/" className={styles.outlineBtn}>
                                Back to home
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

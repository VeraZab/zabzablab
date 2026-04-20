'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '/styles/the-match.module.css'
import quizStyles from '/styles/mystery-box.module.css'

// ── Types ────────────────────────────────────────────────────────
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

// ── Designs ─────────────────────────────────────────────────────
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

// ── Page ────────────────────────────────────────────────────────
export default function TheMatchPage() {
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

    const startQuiz = () => {
        window.scrollTo({ top: 0 })
        setStep(1)
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setSubmitting(true)
        setSubmitError('')
        try {
            const res = await fetch('/api/the-match', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name, email, address, city, state, zip, country, notes,
                    room, mood, color,
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

    // ── Landing sections (step 0) ─────────────────────────────
    if (step === 0) {
        return (
            <>
                {/* Section 1 — Hero */}
                <div className="home-hero-root">
                    <section className={styles.matchHero} aria-label="The Match hero">
                        <Image
                            src="/portfolio/moods/cozy.jpg"
                            alt="Wallpaper samples laid out with a rationale card"
                            fill
                            priority
                            sizes="100vw"
                            className={styles.matchHeroImage}
                        />
                        <div className={styles.matchHeroOverlay} aria-hidden="true" />
                        <div className={styles.matchHeroContent}>
                            <h1 className={styles.matchHeroHeadline}>
                                Three samples. Curated for your room. Delivered to your door.
                            </h1>
                            <p className={styles.matchHeroPricing}>
                                $120, fully credited toward any full roll order.
                            </p>
                            <button className={styles.matchHeroCta} onClick={startQuiz}>
                                Take the quiz &rarr;
                            </button>
                        </div>
                    </section>
                </div>

                {/* Section 2 — Why it exists */}
                <section className="page-section-strip">
                    <div className="page-section-strip-inner">
                        <div className={styles.whyGrid}>
                            <div className={styles.whyText}>
                                <h2>Why the Match exists</h2>
                                <p>
                                    Wallpaper is non-returnable — ours, everyone&rsquo;s. So before you spend hundreds on rolls,
                                    I&rsquo;ll hand-pick three extra-large samples based on your room, mood, and palette. You hold
                                    them, tape them up, live with them for a day. Then you decide.
                                </p>
                                <p>
                                    If you order a roll, your $120 comes off the price. If you don&rsquo;t, you&rsquo;ve still got
                                    three large samples and a curation you can&rsquo;t get anywhere else.
                                </p>
                            </div>
                            <div>
                                <p className={styles.boxBulletsTitle}>What&rsquo;s in the box</p>
                                <ul className={styles.boxBullets}>
                                    <li>Three extra-large wallpaper samples — bigger than standard swatches</li>
                                    <li>A printed rationale card explaining why each pattern was picked for your space</li>
                                    <li>Free shipping to your door</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3 — How it works */}
                <section className="page-section-strip page-section-strip-alt">
                    <div className="page-section-strip-inner">
                        <div style={{ textAlign: 'center', marginBottom: 'var(--gap-component)' }}>
                            <h2>How it works</h2>
                        </div>
                        <div className={styles.stepsGrid}>
                            <div className={styles.step}>
                                <p className={styles.stepNumber}>1</p>
                                <h3 className={styles.stepTitle}>Answer 3 quick questions</h3>
                                <p className={styles.stepDesc}>
                                    Your room, the mood you&rsquo;re after, and your color direction. Takes under two minutes.
                                </p>
                            </div>
                            <div className={styles.step}>
                                <p className={styles.stepNumber}>2</p>
                                <h3 className={styles.stepTitle}>I hand-pick your three samples</h3>
                                <p className={styles.stepDesc}>
                                    I select three designs and ship them directly to your door with a card explaining each pick.
                                </p>
                            </div>
                            <div className={styles.step}>
                                <p className={styles.stepNumber}>3</p>
                                <h3 className={styles.stepTitle}>Live with them, then decide</h3>
                                <p className={styles.stepDesc}>
                                    Tape them up, see them in your light. Your $120 credits toward any full roll order.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4 — Example curations */}
                <section className="page-section-strip">
                    <div className="page-section-strip-inner">
                        <div style={{ textAlign: 'center', marginBottom: 'var(--gap-component)' }}>
                            <h2>Example curations</h2>
                            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '36rem', margin: '0 auto' }}>
                                Here&rsquo;s how the quiz answers translate into a real curation.
                            </p>
                        </div>
                        <div className={styles.curationsGrid}>
                            <div className={styles.curation}>
                                <p className={styles.curationAnswers}>Living Room &bull; Romantic &bull; Warm &amp; Earthy</p>
                                <div className={styles.curationPicksRow}>
                                    <div className={styles.curationPickImage}>
                                        <Image src="/portfolio/painterly_vine_gold.jpg" alt="Painterly Vine" fill sizes="64px" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className={styles.curationPickImage}>
                                        <Image src="/portfolio/peony-block.png" alt="Peony Garden" fill sizes="64px" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className={styles.curationPickImage}>
                                        <Image src="/portfolio/grasscloth-block.jpg" alt="Faux Grasscloth" fill sizes="64px" style={{ objectFit: 'cover' }} />
                                    </div>
                                </div>
                                <p className={styles.curationReason}>
                                    Warm botanicals that layer intimacy and depth — one bold, one soft, one grounding neutral.
                                </p>
                            </div>
                            <div className={styles.curation}>
                                <p className={styles.curationAnswers}>Home Office &bull; Serene &bull; Light &amp; Airy</p>
                                <div className={styles.curationPicksRow}>
                                    <div className={styles.curationPickImage}>
                                        <Image src="/portfolio/linen-weave-block.jpg" alt="Faux Linen Weave" fill sizes="64px" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className={styles.curationPickImage}>
                                        <Image src="/portfolio/diagonal-canvas-block.png" alt="Diagonal Canvas" fill sizes="64px" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className={styles.curationPickImage}>
                                        <Image src="/portfolio/cyanotype-block.png" alt="Cyanotype" fill sizes="64px" style={{ objectFit: 'cover' }} />
                                    </div>
                                </div>
                                <p className={styles.curationReason}>
                                    Clean texture and soft tone — a room that clears your head, not fills it.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5 — Browse catalog */}
                <section className="page-section-strip page-section-strip-alt">
                    <div className="page-section-strip-inner">
                        <p className={styles.catalogLink}>
                            Want to see everything I pick from?{' '}
                            <Link href="/designs/faux-fabric">Browse the full portfolio &rarr;</Link>
                        </p>
                    </div>
                </section>

                {/* Section 6 — FAQ mini */}
                <section className="page-section-strip">
                    <div className="page-section-strip-inner">
                        <div style={{ textAlign: 'center', marginBottom: 'var(--gap-component)' }}>
                            <h2>Questions</h2>
                        </div>
                        <dl className={styles.faqMiniList}>
                            <details className={styles.faqMiniItem}>
                                <summary className={styles.faqMiniSummary}>
                                    Can I see the three picks in advance?
                                </summary>
                                <div className={styles.faqMiniAnswer}>
                                    No — curation means I pick based on your answers, not in advance. The whole point is that
                                    I&rsquo;m making a considered recommendation for your specific room. If you want to self-pick,
                                    you can order individual samples instead.
                                </div>
                            </details>
                            <details className={styles.faqMiniItem}>
                                <summary className={styles.faqMiniSummary}>
                                    What if I don&rsquo;t like any of the three?
                                </summary>
                                <div className={styles.faqMiniAnswer}>
                                    Email me. I&rsquo;ll do a custom rematch — included free on most designs. Curation is a
                                    conversation, not a one-shot transaction.
                                </div>
                            </details>
                            <details className={styles.faqMiniItem}>
                                <summary className={styles.faqMiniSummary}>
                                    Is the $120 really credited back?
                                </summary>
                                <div className={styles.faqMiniAnswer}>
                                    Yes — 100% toward any full roll order. There&rsquo;s no expiry and no fine print. You paid
                                    for curation and sampling; if you go to a full roll, that $120 comes straight off the order.
                                </div>
                            </details>
                        </dl>
                    </div>
                </section>

                {/* Section 7 — Final CTA */}
                <section className="page-section-strip page-section-strip-before-footer">
                    <div className="page-section-strip-inner">
                        <div style={{ textAlign: 'center' }}>
                            <h2>Ready to find your three?</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--gap-group)' }}>
                                Answer 3 questions. I&rsquo;ll take it from there.
                            </p>
                            <button className={styles.landingCtaBtn} onClick={startQuiz}>
                                Take the quiz &rarr;
                            </button>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    // ── Quiz (steps 1–5) ─────────────────────────────────────
    return (
        <div className={quizStyles.page}>
            <div className={quizStyles.card}>

                {/* Steps 1–3 */}
                {step >= 1 && step <= 3 && (
                    <div className={quizStyles.quiz}>
                        <div className={quizStyles.progress}>
                            <div className={quizStyles.progressFill} style={{ width: `${(step / 3) * 100}%` }} />
                        </div>
                        <p className={quizStyles.stepCount}>{step} of 3</p>

                        {step === 1 && (
                            <>
                                <h2 className={quizStyles.question}>What room are you designing?</h2>
                                <div className={quizStyles.optionsGrid}>
                                    {rooms.map(r => (
                                        <button
                                            key={r.value}
                                            className={`${quizStyles.option} ${room === r.value ? quizStyles.optionSelected : ''}`}
                                            onClick={() => { setRoom(r.value); setStep(2) }}
                                        >
                                            <span className={quizStyles.optionIcon}>{r.icon}</span>
                                            <span className={quizStyles.optionLabel}>{r.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <h2 className={quizStyles.question}>What feeling do you want in this room?</h2>
                                <div className={quizStyles.moodOptions}>
                                    {moods.map(m => (
                                        <button
                                            key={m.value}
                                            className={`${quizStyles.moodOption} ${mood === m.value ? quizStyles.optionSelected : ''}`}
                                            onClick={() => { setMood(m.value); setStep(3) }}
                                        >
                                            <span className={quizStyles.moodLabel}>{m.label}</span>
                                            <span className={quizStyles.moodDesc}>{m.desc}</span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <h2 className={quizStyles.question}>What&rsquo;s your color direction?</h2>
                                <div className={quizStyles.colorOptions}>
                                    {colors.map(c => (
                                        <button
                                            key={c.value}
                                            className={`${quizStyles.colorOption} ${color === c.value ? quizStyles.optionSelected : ''}`}
                                            onClick={() => { setColor(c.value); setStep(4) }}
                                        >
                                            <span className={quizStyles.colorSwatch} style={{ background: c.swatch }} />
                                            <span className={quizStyles.colorInfo}>
                                                <span className={quizStyles.colorLabel}>{c.label}</span>
                                                <span className={quizStyles.colorDesc}>{c.desc}</span>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        <button className={quizStyles.backBtn} onClick={() => setStep((step - 1) as Step)}>
                            &larr; Back
                        </button>
                    </div>
                )}

                {/* Step 4 — Results + Form */}
                {step === 4 && picks.length === 3 && (
                    <div className={quizStyles.results}>
                        <div className={quizStyles.resultsHeader}>
                            <h2 className={quizStyles.resultsTitle}>Your perfect matches</h2>
                            <p className={quizStyles.resultsSubtitle}>
                                Based on your answers, here are the 3 samples I&rsquo;d send you.
                            </p>
                        </div>

                        <div className={quizStyles.picksGrid}>
                            {picks.map(pick => (
                                <div key={pick.id} className={quizStyles.pickCard}>
                                    <div className={quizStyles.pickImageWrap}>
                                        <Image
                                            src={pick.image}
                                            alt={pick.name}
                                            fill
                                            sizes="(max-width: 600px) 90vw, 200px"
                                            className={quizStyles.pickImage}
                                        />
                                    </div>
                                    <div className={quizStyles.pickInfo}>
                                        <p className={quizStyles.pickName}>{pick.name}</p>
                                        <p className={quizStyles.pickDesc}>{pick.desc}</p>
                                        <Link href={pick.shopUrl} className={quizStyles.pickLink}>
                                            See design &rarr;
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={quizStyles.formSection}>
                            <h3 className={quizStyles.formTitle}>Tell me where to ship your Match</h3>
                            <p className={quizStyles.formSubtitle}>
                                I&rsquo;ll personally pack your 3 matched samples and ship them to you.
                            </p>

                            <form onSubmit={handleSubmit} className={quizStyles.form}>
                                <div className={quizStyles.formRow}>
                                    <div className={quizStyles.formGroup}>
                                        <label className={quizStyles.label} htmlFor="tm-name">Your name</label>
                                        <input
                                            id="tm-name"
                                            className={quizStyles.input}
                                            type="text"
                                            required
                                            autoComplete="name"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            placeholder="Jane Smith"
                                        />
                                    </div>
                                    <div className={quizStyles.formGroup}>
                                        <label className={quizStyles.label} htmlFor="tm-email">Email address</label>
                                        <input
                                            id="tm-email"
                                            className={quizStyles.input}
                                            type="email"
                                            required
                                            autoComplete="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                </div>

                                <div className={quizStyles.formGroup}>
                                    <label className={quizStyles.label} htmlFor="tm-address">Street address</label>
                                    <input
                                        id="tm-address"
                                        className={quizStyles.input}
                                        type="text"
                                        required
                                        autoComplete="street-address"
                                        value={address}
                                        onChange={e => setAddress(e.target.value)}
                                        placeholder="123 Main St, Apt 4B"
                                    />
                                </div>

                                <div className={quizStyles.formRow}>
                                    <div className={quizStyles.formGroup}>
                                        <label className={quizStyles.label} htmlFor="tm-city">City</label>
                                        <input
                                            id="tm-city"
                                            className={quizStyles.input}
                                            type="text"
                                            required
                                            autoComplete="address-level2"
                                            value={city}
                                            onChange={e => setCity(e.target.value)}
                                            placeholder="New York"
                                        />
                                    </div>
                                    <div className={quizStyles.formGroup}>
                                        <label className={quizStyles.label} htmlFor="tm-state">State / Province</label>
                                        <input
                                            id="tm-state"
                                            className={quizStyles.input}
                                            type="text"
                                            required
                                            autoComplete="address-level1"
                                            value={state}
                                            onChange={e => setState(e.target.value)}
                                            placeholder="NY"
                                        />
                                    </div>
                                    <div className={quizStyles.formGroup}>
                                        <label className={quizStyles.label} htmlFor="tm-zip">ZIP / Postal code</label>
                                        <input
                                            id="tm-zip"
                                            className={quizStyles.input}
                                            type="text"
                                            required
                                            autoComplete="postal-code"
                                            value={zip}
                                            onChange={e => setZip(e.target.value)}
                                            placeholder="10001"
                                        />
                                    </div>
                                </div>

                                <div className={quizStyles.formGroup}>
                                    <label className={quizStyles.label} htmlFor="tm-country">Country</label>
                                    <input
                                        id="tm-country"
                                        className={quizStyles.input}
                                        type="text"
                                        required
                                        autoComplete="country-name"
                                        value={country}
                                        onChange={e => setCountry(e.target.value)}
                                        placeholder="United States"
                                    />
                                </div>

                                <div className={quizStyles.formGroup}>
                                    <label className={quizStyles.label} htmlFor="tm-notes">
                                        Anything else I should know? <span className={quizStyles.optional}>(optional)</span>
                                    </label>
                                    <textarea
                                        id="tm-notes"
                                        className={`${quizStyles.input} ${quizStyles.textarea}`}
                                        rows={3}
                                        value={notes}
                                        onChange={e => setNotes(e.target.value)}
                                        placeholder="e.g. I love muted tones, or I need something renter-friendly..."
                                    />
                                </div>

                                {submitError && <p className={quizStyles.errorMsg}>{submitError}</p>}

                                <button
                                    type="submit"
                                    className={quizStyles.primaryBtn}
                                    disabled={submitting}
                                >
                                    {submitting ? 'Sending\u2026' : 'Send my Match \u2192'}
                                </button>
                            </form>
                        </div>

                        <button className={quizStyles.backBtn} onClick={() => setStep(3)}>
                            &larr; Change answers
                        </button>
                    </div>
                )}

                {/* Step 5 — Success */}
                {step === 5 && (
                    <div className={quizStyles.success}>
                        <div className={quizStyles.successIcon}>✦</div>
                        <h2 className={quizStyles.successTitle}>Your Match is on its way!</h2>
                        <p className={quizStyles.successDesc}>
                            I&rsquo;ll personally pack your 3 curated samples and send them your way. Expect a
                            confirmation email within 24&ndash;48 hours.
                        </p>
                        <p className={quizStyles.successDesc}>
                            In the meantime, feel free to browse the full collection — every design is
                            customizable in color and scale.
                        </p>
                        <div className={quizStyles.successLinks}>
                            <Link href="/designs/faux-fabric" className={quizStyles.primaryBtn}>
                                Browse faux fabrics
                            </Link>
                            <Link href="/" className={quizStyles.outlineBtn}>
                                Back to home
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

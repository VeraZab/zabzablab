'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import styles from '/styles/footer.module.css'

function NewsletterInline() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!email.trim()) { setStatus('error'); setMessage('Please enter your email.'); return }
        setStatus('loading'); setMessage('')
        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim() }),
            })
            const data = await res.json().catch(() => ({}))
            if (res.ok) { setEmail(''); setStatus('success'); setMessage("Thanks, you're in!") }
            else { setStatus('error'); setMessage(data.error || 'Something went wrong. Please try again.') }
        } catch {
            setStatus('error'); setMessage('Something went wrong. Please try again.')
        }
    }

    return (
        <form onSubmit={handleSubmit} noValidate className={styles.newsletterForm}>
            <div className={styles.newsletterRow}>
                <span className={styles.newsletterInputWrapper}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        disabled={status === 'loading' || status === 'success'}
                        className={styles.newsletterInput}
                        autoComplete="email"
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className={styles.newsletterButton}
                        aria-label="Subscribe"
                    >
                        {status === 'loading' ? (
                            <span>…</span>
                        ) : status === 'success' ? (
                            <span>✓</span>
                        ) : (
                            <ArrowRightIcon width={18} height={18} />
                        )}
                    </button>
                </span>
            </div>
            {message && (
                <p className={status === 'error' ? styles.newsletterError : styles.newsletterSuccess}>
                    {message}
                </p>
            )}
        </form>
    )
}

export default function Footer({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'golden' }) {
    const variantClass = variant === 'golden' ? styles.footerGolden : ''
    return (
        <div className={`${styles.footerOuter} ${variantClass} ${className ?? ''}`.trim()}>
            {/* SVG clip path for wavy top edge */}
            <svg className={styles.clipSvg} aria-hidden>
                <defs>
                    {/* Desktop: original dense wave frequency (do not simplify). */}
                    <clipPath id="footerWavyTop" clipPathUnits="objectBoundingBox">
                        <path d="M0,0.07 Q0.0125,0.04 0.025,0.07 Q0.0375,0.10 0.05,0.07 Q0.0625,0.04 0.075,0.07 Q0.0875,0.10 0.1,0.07 Q0.1125,0.04 0.125,0.07 Q0.1375,0.10 0.15,0.07 Q0.1625,0.04 0.175,0.07 Q0.1875,0.10 0.2,0.07 Q0.2125,0.04 0.225,0.07 Q0.2375,0.10 0.25,0.07 Q0.2625,0.04 0.275,0.07 Q0.2875,0.10 0.3,0.07 Q0.3125,0.04 0.325,0.07 Q0.3375,0.10 0.35,0.07 Q0.3625,0.04 0.375,0.07 Q0.3875,0.10 0.4,0.07 Q0.4125,0.04 0.425,0.07 Q0.4375,0.10 0.45,0.07 Q0.4625,0.04 0.475,0.07 Q0.4875,0.10 0.5,0.07 Q0.5125,0.04 0.525,0.07 Q0.5375,0.10 0.55,0.07 Q0.5625,0.04 0.575,0.07 Q0.5875,0.10 0.6,0.07 Q0.6125,0.04 0.625,0.07 Q0.6375,0.10 0.65,0.07 Q0.6625,0.04 0.675,0.07 Q0.6875,0.10 0.7,0.07 Q0.7125,0.04 0.725,0.07 Q0.7375,0.10 0.75,0.07 Q0.7625,0.04 0.775,0.07 Q0.7875,0.10 0.8,0.07 Q0.8125,0.04 0.825,0.07 Q0.8375,0.10 0.85,0.07 Q0.8625,0.04 0.875,0.07 Q0.8875,0.10 0.9,0.07 Q0.9125,0.04 0.925,0.07 Q0.9375,0.10 0.95,0.07 Q0.9625,0.04 0.975,0.07 Q0.9875,0.10 1,0.07 L1,1 L0,1 Z" />
                    </clipPath>
                    {/*
                      Small viewports: same wave *shape* as desktop (0.04–0.10 around 0.07) but ~8 cycles
                      across the width instead of ~40 — ~47px/crest on a 375px screen (readable waves,
                      not spikes or one stretched arc).
                    */}
                    <clipPath id="footerWavyTopMobile" clipPathUnits="objectBoundingBox">
                        {/*
                          Shallower crests than desktop (0.056 / 0.084 vs 0.04 / 0.10): same rhythm,
                          less bbox depth so copy clears the mask without needing a foot-tall spacer.
                        */}
                        <path d="M0,0.07 Q0.03125,0.056 0.0625,0.07 Q0.09375,0.084 0.125,0.07 Q0.15625,0.056 0.1875,0.07 Q0.21875,0.084 0.25,0.07 Q0.28125,0.056 0.3125,0.07 Q0.34375,0.084 0.375,0.07 Q0.40625,0.056 0.4375,0.07 Q0.46875,0.084 0.5,0.07 Q0.53125,0.056 0.5625,0.07 Q0.59375,0.084 0.625,0.07 Q0.65625,0.056 0.6875,0.07 Q0.71875,0.084 0.75,0.07 Q0.78125,0.056 0.8125,0.07 Q0.84375,0.084 0.875,0.07 Q0.90625,0.056 0.9375,0.07 Q0.96875,0.084 1,0.07 L1,1 L0,1 Z" />
                    </clipPath>
                </defs>
            </svg>

            <footer className={styles.footer}>
                <div className={styles.footerInner}>

                    <div className={styles.col}>
                        <p className={styles.brandName}>ZabZabLab</p>
                        <p className={styles.brandTagline}>
                            Artist-made wallpaper for interiors with personality.
                            Start with the mood &mdash; find the right pattern.
                        </p>
                        <p className={styles.legal}>
                            All designs are original works. Reproduction or use without permission is prohibited.
                        </p>
                    </div>

                    <div className={styles.col}>
                        <p className={styles.colHeading}>Navigate</p>
                        <nav className={styles.linkList} aria-label="Footer navigation">
                            <Link href="/" className={styles.footerLink}>Shop</Link>
                            <Link href="/about" className={styles.footerLink}>About</Link>
                            <Link href="/for-interior-designers" className={styles.footerLink}>Trade Program</Link>
                            <Link href="/blog" className={styles.footerLink}>Blog</Link>
                            <Link href="/the-match" className={styles.footerLink}>The Match</Link>
                            <Link href="/resize-recolor-request" className={styles.footerLink}>Custom Recolor Request</Link>
                        </nav>
                    </div>

                    <div className={styles.col}>
                        <p className={styles.colHeading}>Stay Connected</p>
                        <div className={styles.linkList}>
                            <a
                                href="https://www.instagram.com/zabzablab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.footerLink}
                            >
                                Instagram
                            </a>
                            <a href="mailto:zabzablab@gmail.com" className={styles.footerLink}>
                                Email
                            </a>
                        </div>
                        <p className={styles.newsletterLabel}>New designs &amp; studio news</p>
                        <NewsletterInline />
                    </div>

                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; {new Date().getFullYear()} ZabZabLab &bull; All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

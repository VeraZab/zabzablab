'use client'

import { useState } from 'react'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import styles from '/styles/portfoliopagelayout.module.css'

export default function NewsletterSignup() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!email.trim()) {
            setStatus('error')
            setMessage('Please enter your email.')
            return
        }
        setStatus('loading')
        setMessage('')
        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim() }),
            })
            const data = await res.json().catch(() => ({}))
            if (res.ok) {
                setEmail('')
                setStatus('success')
                setMessage("Thanks, you're in!")
            } else {
                setStatus('error')
                setMessage(data.error || 'Something went wrong. Please try again.')
            }
        } catch {
            setStatus('error')
            setMessage('Something went wrong. Please try again.')
        }
    }

    return (
        <form onSubmit={handleSubmit} noValidate className={styles.newsletterForm}>
            <div className={styles.newsletterRow}>
                <span className={styles.newsletterInputWrapper}>
                    <input
                        id="newsletter-email"
                        type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    disabled={status === 'loading' || status === 'success'}
                    className={styles.newsletterInput}
                    autoComplete="email"
                />
                </span>
                <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className={styles.newsletterButton}
                    aria-label={status === 'success' ? 'Submitted' : 'Sign up'}
                >
                    {status === 'loading' ? (
                        <span className={styles.newsletterButtonText}>…</span>
                    ) : status === 'success' ? (
                        <span className={styles.newsletterButtonText}>🎉</span>
                    ) : (
                        <ArrowRightIcon className={styles.newsletterArrow} aria-hidden />
                    )}
                </button>
            </div>
            {message && (
                <p className={status === 'error' ? styles.newsletterError : styles.newsletterSuccess}>
                    {message}
                </p>
            )}
        </form>
    )
}

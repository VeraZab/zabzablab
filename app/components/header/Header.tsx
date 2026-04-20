'use client'

import { Cross2Icon, RowsIcon } from '@radix-ui/react-icons'
import * as Dialog from '@radix-ui/react-dialog'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

import styles from '/styles/header.module.css'
import { Logo } from './Logo'
import { NavigationLink } from './NavigationLink'
// import MailIcon from '../icons/Mail'
// import SpoonflowerIcon from '../icons/Spoonflower'
// import InstagramIcon from '../icons/InstagramIcon'

const navigationLinks = [
    { title: 'Shop', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Trade Program', href: '/for-interior-designers' },
    { title: 'Blog', href: '/blog' },
    { title: 'The Match', href: '/the-match', variant: 'outlined-button' as const },
]

export default function Header() {
    const pathname = usePathname()
    const isHome = pathname === '/'
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        if (!isHome) return
        const onScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [isHome])

    const headerClass = [
        styles.header,
        isHome ? styles.headerOnHome : '',
        isHome && scrolled ? styles.headerScrolled : '',
    ].filter(Boolean).join(' ')

    return (
        <div className={headerClass}>
            <div className={styles.headerInner}>
                <div className={styles.logo}>
                    <Logo />
                    <div className={styles.tagline}>
                        <span>artist-made wallpaper</span>
                        <span>pick your vibe — dress your walls</span>
                    </div>
                </div>

                <div className={styles.desktop}>
                    <nav className={styles.right} aria-label="Main navigation">
                    {navigationLinks.map((link) => (
                        <NavigationLink key={link.href || link.title} link={link} />
                    ))}
                    </nav>
                </div>

                <div className={styles.mobile}>
                <Dialog.Root>
                    <Dialog.Trigger className={`${styles.mobileIconContainer} ${styles.mobileAction}`}>
                        <RowsIcon />
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Content className={styles.dialogContent}>
                            <Dialog.Close
                                className={`${styles.mobileIconContainer} ${styles.mobileAction} ${styles.closeButton}`}
                                aria-label="Close"
                            >
                                <Cross2Icon style={{ color: 'white' }} />
                            </Dialog.Close>
                            <div className={styles.mobileLinks}>
                                {navigationLinks.map((link) => (
                                    <NavigationLink key={link.href || link.title} link={link} isMobile />
                                ))}
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
                </div>
            </div>
        </div>
    )
}

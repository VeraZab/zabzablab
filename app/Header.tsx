'use client'

import { Cross2Icon, RowsIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'

import styles from '/styles/header.module.css'
import { ReactNode } from 'react'

const SocialLinks = ({ isMobile }: { isMobile: boolean }) => {
    const pathname = usePathname()
    return (
        <div className={styles.right}>
            {isMobile && (
                <LinkWrapper isMobile={isMobile}>
                    <Link
                        className={pathname === '/' ? styles.active : ''}
                        href="/r"
                    >
                        Home
                    </Link>
                </LinkWrapper>
            )}

            <LinkWrapper isMobile={isMobile}>
                <Link
                    className={pathname === '/newsletter' ? styles.active : ''}
                    href="/newsletter"
                >
                    Newsletter
                </Link>
            </LinkWrapper>
            <LinkWrapper isMobile={isMobile}>
                <Link
                    className={pathname === '/blog' ? styles.active : ''}
                    href="/blog"
                >
                    Blog
                </Link>
            </LinkWrapper>
            <LinkWrapper isMobile={isMobile}>
                <Link
                    target="_blank"
                    href="https://www.spoonflower.com/profiles/zabzablab/collections?filter=designed"
                >
                    Shop
                </Link>
            </LinkWrapper>
            <LinkWrapper isMobile={isMobile}>
                <Link
                    className={pathname === '/about' ? styles.active : ''}
                    href="/about"
                >
                    About
                </Link>
            </LinkWrapper>
        </div>
    )
}

const LinkWrapper = ({
    children,
    isMobile,
}: {
    children: ReactNode
    isMobile?: boolean
}) => {
    if (isMobile) {
        return <Dialog.Close asChild>{children}</Dialog.Close>
    }
    return children
}

const NavigationLinks = ({ isMobile }: { isMobile?: boolean }) => {
    return (
        <div className={styles.left}>
            <h1 className={styles.title}>
                <Link href="/">ZABZABLAB</Link>
            </h1>
        </div>
    )
}

export default function Header() {
    const pathname = usePathname()
    const isDarkBG = ['/about'].includes(pathname)
    return (
        <div className={styles.header}>
            <div className={styles.desktop}>
                <NavigationLinks />
            </div>

            <div className={styles.desktop}>
                <SocialLinks />
            </div>

            <Dialog.Root>
                <div className={styles.mobile}>
                    <Dialog.Trigger
                        className={`${styles.mobileIconContainer} ${styles.mobileAction}`}
                        style={{ color: isDarkBG ? 'white' : 'black' }}
                    >
                        <RowsIcon />
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <div className={styles.mobilePortal}>
                            <Dialog.Content className={styles.dialogContent}>
                                <Dialog.Close
                                    className={`${styles.mobileIconContainer} ${styles.mobileAction} ${styles.closeButton}`}
                                    aria-label="Close"
                                >
                                    <Cross2Icon />
                                </Dialog.Close>
                                <div className={styles.mobileLinks}>
                                    <NavigationLinks isMobile />
                                    <div
                                        className={
                                            styles.socialMobileLinksContainer
                                        }
                                    >
                                        <SocialLinks />
                                    </div>
                                </div>
                            </Dialog.Content>
                        </div>
                    </Dialog.Portal>
                </div>
            </Dialog.Root>
        </div>
    )
}

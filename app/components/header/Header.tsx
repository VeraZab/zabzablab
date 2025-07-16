'use client'

import { Cross2Icon, RowsIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'

import styles from '/styles/header.module.css'
import { Logo } from './Logo'
import { NavigationLink } from './NavigationLink'

const navigationLinks = [
    { title: 'Work', href: '/' },
    { title: 'About', href: '/about' },
    {
        icon: '/assets/spoonflower.png',
        alt: 'Spoonflower',
        href: 'https://www.spoonflower.com/profiles/zabzablab?filter_action=collection&info_action=&nav_action=all&shop_selection=all_collection&sub_action=new_profile',
        target: '_blank',
    },
    {
        icon: '/assets/instagram.png',
        alt: 'Instagram:zabzablab',
        href: 'https://www.instagram.com/zabzablab',
        target: '_blank',
    },
]

export default function Header() {
    const pathname = usePathname()
    const isDarkBG = ['/about'].includes(pathname)

    return (
        <div className={styles.header}>
            <div className={styles.desktop}>
                <Logo />
            </div>

            <div className={styles.desktop}>
                <div className={styles.right}>
                    {navigationLinks.map((l, i) => (
                        <NavigationLink key={i} link={l} />
                    ))}
                </div>
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
                                    <div className={styles.right}>
                                        {navigationLinks.map((l, i) => (
                                            <NavigationLink key={i} link={l} />
                                        ))}
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

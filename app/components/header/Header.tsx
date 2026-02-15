'use client'

import { Cross2Icon, RowsIcon } from '@radix-ui/react-icons'
import * as Dialog from '@radix-ui/react-dialog'

import styles from '/styles/header.module.css'
import { Logo } from './Logo'
import { NavigationLink } from './NavigationLink'
// import MailIcon from '../icons/Mail'
// import SpoonflowerIcon from '../icons/Spoonflower'
// import InstagramIcon from '../icons/InstagramIcon'

const navigationLinks = [
    {
        title: 'Designs',
        children: [
            { title: 'Featured', href: '/' },
            { title: 'Texture Foundations', href: '/designs/texture-foundations' },
            { title: 'Full Catalogue', href: 'https://www.spoonflower.com/profiles/zabzablab?filter_action=collection&info_action=&nav_action=all&shop_selection=all_collection&sub_action=new_profile', target: '_blank' },
        ],
    },
    { title: 'About', href: '/about' },
    {
        title: 'Work Together',
        children: [
            { title: 'For Interior Designers', href: '/for-interior-designers' },
            { title: 'Resize / Recolor Request', href: '/resize-recolor-request' },
        ],
    },
    {
        title: 'Stay Connected',
        children: [
            { title: 'Email', href: 'mailto:hello@zabzablab.com' },
            { title: 'Instagram', href: 'https://www.instagram.com/zabzablab', target: '_blank' },
            { title: 'Newsletter', href: '/#newsletter' },
            { title: 'Blog', href: '/blog' },
            { title: 'Save Contact', href: '/qr' },
        ],
    },
]

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerInner}>
                <div className={styles.logo}>
                    <Logo />
                    <div className={styles.tagline}>
                        <span>handcrafted textiles & wallpaper</span>
                        <span>for homes with history & personality</span>
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

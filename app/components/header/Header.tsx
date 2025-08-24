'use client'

import { Cross2Icon, RowsIcon } from '@radix-ui/react-icons'
import * as Dialog from '@radix-ui/react-dialog'

import styles from '/styles/header.module.css'
import { Logo } from './Logo'
import { NavigationLink } from './NavigationLink'
import MailIcon from '../icons/Mail'
import SpoonflowerIcon from '../icons/Spoonflower'
import InstagramIcon from '../icons/InstagramIcon'

const navigationLinks = [
    { title: 'Work', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/blog' },
    {
        icon: SpoonflowerIcon,
        alt: 'Spoonflower',
        href: 'https://www.spoonflower.com/profiles/zabzablab?filter_action=collection&info_action=&nav_action=all&shop_selection=all_collection&sub_action=new_profile',
        target: '_blank',
    },
    {
        icon: InstagramIcon,
        alt: 'Instagram',
        href: 'https://www.instagram.com/zabzablab',
        target: '_blank',
    },
    {
        icon: MailIcon,
        alt: 'Email',
        href: 'mailto:zabzablab@gmail.com',
    },
]

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Logo />
            </div>

            <div className={styles.desktop}>
                <div className={styles.right}>
                    {navigationLinks.map((link) => (
                        <NavigationLink key={link.href} link={link} />
                    ))}
                </div>
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
                                    <NavigationLink key={link.href} link={link} isMobile />
                                ))}
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </div>
    )
}

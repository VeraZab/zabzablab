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
    {
        icon: SpoonflowerIcon,
        alt: 'Spoonflower',
        href: 'https://www.spoonflower.com/profiles/zabzablab?filter_action=collection&info_action=&nav_action=all&shop_selection=all_collection&sub_action=new_profile',
        target: '_blank',
    },
    {
        icon: InstagramIcon,
        alt: 'Instagram:zabzablab',
        href: 'https://www.instagram.com/zabzablab',
        target: '_blank',
    },
    {
        icon: MailIcon,
        alt: 'email',
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
                    {navigationLinks.map((l, i) => (
                        <NavigationLink key={i} link={l} />
                    ))}
                </div>
            </div>

            <div className={styles.mobile}>
                <Dialog.Root>
                    <Dialog.Trigger
                        className={`${styles.mobileIconContainer} ${styles.mobileAction}`}
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
                                    <Cross2Icon style={{ color: 'white' }} />
                                </Dialog.Close>
                                <div className={styles.mobileLinks}>
                                    {navigationLinks.map((l, i) => (
                                        <NavigationLink
                                            key={i}
                                            link={l}
                                            isMobile
                                        />
                                    ))}
                                </div>
                            </Dialog.Content>
                        </div>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </div>
    )
}

'use client'

import { Cross2Icon, RowsIcon } from '@radix-ui/react-icons'
import * as Dialog from '@radix-ui/react-dialog'

import styles from '/styles/header.module.css'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { NavigationLink } from './NavigationLink'
// import MailIcon from '../icons/Mail'
// import SpoonflowerIcon from '../icons/Spoonflower'
// import InstagramIcon from '../icons/InstagramIcon'

const navigationLinks = [
    {
        title: 'Designs',
        href: '/designs',
        children: [
            { title: 'Floral', href: '/designs/floral' },
            { title: 'Whimsical', href: '/designs/whimsical' },
            {title: 'Classic', href: '/designs/classic' },
            { title: 'Abstract', href: '/designs/abstract' },
        ],
    },
    { title: "Let's Work Together", href: '/work-together', children: [
        { title: 'Custom Interior Design Projects', href: '/custom-interior-design-project' },
        { title: 'Licensing For Brands', href: '/licensing-for-brands' },
        {title: 'Resize or Recolor Requests', href: '/resize-recolor-request' }
    ] },
    { title: 'Stay in Touch', href: '/stay-in-touch', children: [
        { title: 'Newsletter', href: '/newsletter' },
        { title: 'Blog', href: '/blog' },
        { title: 'Instagram', href: 'https://www.instagram.com/zabzablab', target: '_blank' },
        { title: 'Email', href: 'mailto:zabzablab@gmail.com' },
    ] },

]

export default function Header() {
    usePathname() // keep hook for potential future conditional styles
    return (
        <div className={styles.header}>
            <div className={styles.topBar}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.desktop}>
                    <div className={styles.right}>
                        {navigationLinks
                            .map((link) => (
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

            {/* {showCategories && (() => {
                const designs = navigationLinks.find((l) => l.title === 'Designs')
                return (
                    <div className={styles.categoriesRow}>
                        {designs?.children?.map((child) => (
                            <NavigationLink key={child.href} link={child as any} />
                        ))}
                    </div>
                )
            })()} */}
        </div>
    )
}

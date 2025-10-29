"use client"

import { ElementType, useState } from 'react'
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import styles from '/styles/header.module.css'

interface LinkFormat {
    href?: string
    icon?: ElementType
    title?: string
    target?: string
    alt?: string
    children?: LinkFormat[]
}

export const NavigationLink = ({
    link,
    isMobile,
}: {
    link: LinkFormat
    isMobile?: boolean
}) => {
    const pathname = usePathname()
    const isActive = link.href ? pathname === link.href : false
    const IconComponent = link.icon

    if (link.children && link.children.length > 0) {
        if (isMobile) {
            const [open, setOpen] = useState(false)
            return (
                <div className={styles.submenuGroupMobile}>
                    <button
                        className={styles.dropdownTriggerMobile}
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-haspopup="true"
                        type="button"
                    >
                        {link.title}
                    </button>
                    {open && (
                        <div className={styles.submenuMobile}>
                            {link.children.map((child) => (
                                <NavigationLink
                                    key={child.href || child.title}
                                    link={child}
                                    isMobile
                                />
                            ))}
                        </div>
                    )}
                </div>
            )
        }

        return (
            <div className={styles.dropdown}>
                <span className={styles.dropdownTrigger}>{link.title}</span>
                <div className={styles.submenu}>
                    {link.children.map((child) => (
                        <NavigationLink key={child.href || child.title} link={child} />
                    ))}
                </div>
            </div>
        )
    }

    const linkElement = (
        <Link
            className={isActive ? styles.active : ''}
            href={link.href || '#'}
            target={link.target}
        >
            {link.title}
            {IconComponent && <IconComponent />}
        </Link>
    )

    return isMobile ? (
        <Dialog.Close asChild>{linkElement}</Dialog.Close>
    ) : (
        linkElement
    )
}

"use client"

import { ElementType, useState } from 'react'
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import styles from '/styles/header.module.css'

interface LinkFormat {
    href: string
    icon?: ElementType
    title?: string
    target?: string
    alt?: string
    children?: Array<{
        href: string
        title: string
    }>
}

export const NavigationLink = ({
    link,
    isMobile,
}: {
    link: LinkFormat
    isMobile?: boolean
}) => {
    const pathname = usePathname()
    const isActive = link.children && link.children.length > 0
        ? pathname.startsWith(link.href)
        : pathname === link.href
    const IconComponent = link.icon

    const linkElement = (
        <Link
            className={isActive ? styles.active : ''}
            href={link.href}
            target={link.target}
        >
            {link.title}
            {IconComponent && <IconComponent />}
        </Link>
    )

    if (!link.children || link.children.length === 0) {
        return isMobile ? (
            <Dialog.Close asChild>{linkElement}</Dialog.Close>
        ) : (
            linkElement
        )
    }

    if (isMobile) {
        const [expanded, setExpanded] = useState(false)
        return (
            <div className={styles.mobileNavItem}>
                <button
                    type="button"
                    aria-expanded={expanded}
                    className={styles.mobileParentButton}
                    onClick={() => setExpanded((v) => !v)}
                >
                    {link.title}
                </button>
                {expanded && (
                    <div className={styles.mobileSubmenu}>
                        {link.children.map((child) => (
                            <Dialog.Close asChild key={child.href}>
                                <Link href={child.href}>{child.title}</Link>
                            </Dialog.Close>
                        ))}
                    </div>
                )}
            </div>
        )
    }

    const [open, setOpen] = useState(false)

    return (
        <div
            className={styles.navItem}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocusCapture={() => setOpen(true)}
            onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setOpen(false)
                }
            }}
        >
            {linkElement}
            <div className={styles.submenu} data-open={open ? 'true' : 'false'}>
                {link.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={() => setOpen(false)}>
                        {child.title}
                    </Link>
                ))}
            </div>
        </div>
    )
}

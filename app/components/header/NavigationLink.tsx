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
    variant?: 'outlined-button'
    children?: LinkFormat[]
}

function isChildActive(children: LinkFormat[], pathname: string): boolean {
    return children.some(
        (child) => child.href && !child.target && pathname === child.href
    )
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
    const isParentActive =
        link.children && link.children.length > 0
            ? isChildActive(link.children, pathname)
            : false
    const IconComponent = link.icon

    if (link.children && link.children.length > 0) {
        if (isMobile) {
            const [open, setOpen] = useState(false)
            return (
                <div className={styles.submenuGroupMobile}>
                    <button
                        className={`${styles.dropdownTriggerMobile} ${isParentActive ? styles.active : ''}`}
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
                <span
                    className={`${styles.dropdownTrigger} ${isParentActive ? styles.active : ''}`}
                >
                    {link.title}
                </span>
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
            className={[
                isActive ? styles.active : '',
                link.variant === 'outlined-button' ? styles.navOutlinedBtn : '',
            ].filter(Boolean).join(' ')}
            href={link.href || '#'}
            target={link.target}
            rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
            {link.title}
            {link.variant === 'outlined-button' && (
                <span className={styles.navSparkles} aria-hidden>
                    <svg
                        viewBox="0 0 36 28"
                        width={52}
                        height={40}
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.navSparklesSvg}
                    >
                        <g transform="translate(23.4 -5.1)">
                            <path
                                fill="currentColor"
                                d="M9.2 6.5a.28.28 0 01.52 0l.4 1.25 1.28.4a.28.28 0 010 .52l-1.28.4-.4 1.28a.28.28 0 01-.52 0l-.4-1.28-1.28-.4a.28.28 0 010-.52l1.28-.4.4-1.25z"
                            />
                        </g>
                        <g transform="translate(17.2 3.85)">
                            <path
                                fill="currentColor"
                                d="M16.8 12.4a.25.25 0 01.46 0l.35 1.1 1.12.35a.25.25 0 010 .46l-1.12.35-.35 1.12a.25.25 0 01-.46 0l-.35-1.12-1.12-.35a.25.25 0 010-.46l1.12-.35.35-1.1z"
                            />
                        </g>
                        <g transform="translate(-4.8 5.35)">
                            <path
                                fill="currentColor"
                                d="M22.5 1.2a.35.35 0 01.65 0l.55 1.7 1.75.55a.35.35 0 010 .65l-1.75.55-.55 1.75a.35.35 0 01-.65 0l-.55-1.75-1.75-.55a.35.35 0 010-.65l1.75-.55.55-1.7z"
                            />
                        </g>
                    </svg>
                </span>
            )}
            {IconComponent && <IconComponent />}
        </Link>
    )

    return isMobile ? (
        <Dialog.Close asChild>{linkElement}</Dialog.Close>
    ) : (
        linkElement
    )
}

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'

import styles from '/styles/header.module.css'

interface LinkFormat {
    href: string
    icon?: string
    title?: string
    target?: string
    alt?: string
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

export const NavigationLink = ({
    link,
    isMobile,
}: {
    link: LinkFormat
    isMobile?: boolean
}) => {
    const pathname = usePathname()
    return (
        <LinkWrapper isMobile={isMobile}>
            <Link
                className={pathname === link.href ? styles.active : ''}
                href={link.href}
                target={link.target || ''}
            >
                {link.title}
                {link.icon && (
                    <img
                        style={{ width: '100px' }}
                        src={link.icon}
                        alt={link.alt}
                    />
                )}
            </Link>
        </LinkWrapper>
    )
}

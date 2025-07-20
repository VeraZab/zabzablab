import { ReactNode, ElementType } from 'react'
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import styles from '/styles/header.module.css'

interface LinkFormat {
    href: string
    icon?: string | ElementType // use ElementType instead of Component
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
    return <>{children}</> // wrap with fragment to avoid React warning
}

export const NavigationLink = ({
    link,
    isMobile,
}: {
    link: LinkFormat
    isMobile?: boolean
}) => {
    const pathname = usePathname()
    const isActive = pathname === link.href

    const IconComponent = typeof link.icon === 'function' ? link.icon : null // support for React components

    return (
        <LinkWrapper isMobile={isMobile}>
            <Link
                className={isActive ? styles.active : ''}
                href={link.href}
                target={link.target || undefined}
            >
                {link.title}
                {typeof link.icon === 'string' && (
                    <img
                        style={{ width: '100px' }}
                        src={link.icon}
                        alt={link.alt || ''}
                    />
                )}
                {IconComponent && <IconComponent />}
            </Link>
        </LinkWrapper>
    )
}

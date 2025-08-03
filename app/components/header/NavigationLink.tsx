import { ElementType } from 'react'
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

    return isMobile ? (
        <Dialog.Close asChild>{linkElement}</Dialog.Close>
    ) : (
        linkElement
    )
}

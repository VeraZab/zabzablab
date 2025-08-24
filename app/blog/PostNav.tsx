import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import styles from '/styles/blog.module.css'

export default function PostNav({
    nextHref,
    nextLabel,
}: {
    nextHref?: string
    nextLabel?: string
}) {
    return (
        <nav className={styles.postNav} aria-label="Post navigation">
            <Link href="/blog" className={styles.postNavLink}>
                <ArrowLeftIcon />
                <span>Back to Blog</span>
            </Link>

            {nextHref && (
                <Link href={nextHref} className={styles.postNavLink}>
                    <span>{nextLabel || 'Next post'}</span>
                    <ArrowRightIcon />
                </Link>
            )}
        </nav>
    )
}



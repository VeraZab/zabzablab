'use client'

import Link from 'next/link'
import styles from '/styles/header.module.css'

export const Logo = ({ isMobile }: { isMobile?: boolean }) => {
    return (
        <Link href="/" className={styles.logoLink} aria-label="ZabZabLab home">
            <img src="/assets/zabzablab.png" alt="ZabZabLab" />
        </Link>
    )
}

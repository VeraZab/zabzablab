'use client'

import Link from 'next/link'
import styles from '/styles/header.module.css'

export const Logo = ({ isMobile }: { isMobile?: boolean }) => {
    return (
        <div className={styles.left}>
            <h1 className={styles.title}>
                <Link href="/">ZabZabLab</Link>
            </h1>
        </div>
    )
}

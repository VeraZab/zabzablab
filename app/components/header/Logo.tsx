'use client'

import Link from 'next/link'
import styles from '/styles/header.module.css'

export const Logo = ({ isMobile }: { isMobile?: boolean }) => {
    return (
        <div className={styles.left}>
            <Link href="/">
                <img style={{ width: '100px' }} src="/assets/zabzablab.png" />
            </Link>
        </div>
    )
}

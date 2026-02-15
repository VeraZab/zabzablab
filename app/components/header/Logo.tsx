'use client'

import Link from 'next/link'
import styles from '/styles/header.module.css'
import { zabzablabLogoPaths, LOGO_VIEWBOX } from './zabzablabLogoPaths'

export const Logo = ({ isMobile }: { isMobile?: boolean }) => {
    return (
        <Link href="/" className={styles.logoLink} aria-label="ZabZabLab home">
            <svg
                className={styles.logoImg}
                viewBox={LOGO_VIEWBOX}
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                fill="currentColor"
            >
                {zabzablabLogoPaths.map((d, i) => (
                    <path key={i} d={d} fill="currentColor" stroke="none" />
                ))}
            </svg>
        </Link>
    )
}

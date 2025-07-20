'use client'

import Link from 'next/link'

export const Logo = ({ isMobile }: { isMobile?: boolean }) => {
    return (
        <Link href="/">
            <img style={{ width: '100px' }} src="/assets/zabzablab.png" />
        </Link>
    )
}

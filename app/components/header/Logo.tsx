'use client'

import Link from 'next/link'

export const Logo = ({ isMobile }: { isMobile?: boolean }) => {
    return (
        <Link href="/">
            <img
                style={{ width:'75px', display: 'block' }}
                src="/assets/zabzablab.png"
                alt="ZabZabLab"
            />
        </Link>
    )
}

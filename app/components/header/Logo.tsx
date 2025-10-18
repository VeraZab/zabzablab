'use client'

import Link from 'next/link'

export const Logo = () => {
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

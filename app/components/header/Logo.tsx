'use client'

import Link from 'next/link'

export const Logo = () => {
    return (
        <Link href="/">
            <picture>
                <source media="(min-width: 30px)" srcSet="/assets/zabzablab.png" />
                {/* <source media="(min-width: 1331px)" srcSet="/assets/zabzablab4.png" /> */}
                <img src="/assets/zabzablab2.png" alt="ZabZabLab" />
            </picture>
        </Link>
    )
}

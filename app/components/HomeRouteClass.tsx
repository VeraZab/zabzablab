'use client'

import { usePathname } from 'next/navigation'
import { useLayoutEffect } from 'react'

/**
 * Keeps `body.is-home` in sync on client navigations (root layout SSR only runs on full load).
 */
export default function HomeRouteClass() {
    const pathname = usePathname()

    useLayoutEffect(() => {
        document.body.classList.toggle('is-home', pathname === '/')
    }, [pathname])

    return null
}

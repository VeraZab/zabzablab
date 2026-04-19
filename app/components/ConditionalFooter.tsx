'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
    const pathname = usePathname()
    
    // Homepage and Trade Program use golden
    // Other pages use soft-ecru
    const goldenPages = ['/', '/for-interior-designers']
    const variant = goldenPages.includes(pathname) ? 'golden' : 'default'
    
    return <Footer variant={variant} />
}

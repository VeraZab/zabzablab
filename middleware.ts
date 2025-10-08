import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Redirect non-canonical hosts to the primary www host for consistent indexing
export function middleware(request: NextRequest) {
    const canonicalHost = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com')
    try {
        const canonical = new URL(canonicalHost)
        const reqUrl = new URL(request.url)

        // Only redirect if host differs from canonical host
        if (reqUrl.hostname !== canonical.hostname) {
            const redirectUrl = new URL(request.url)
            redirectUrl.hostname = canonical.hostname
            redirectUrl.protocol = canonical.protocol
            return NextResponse.redirect(redirectUrl.toString(), 308)
        }
    } catch (_) {
        // If env is malformed, do nothing
    }
    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!_next/|.*\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|txt)$).*)',
    ],
}



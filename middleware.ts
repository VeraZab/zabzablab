import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Redirect non-canonical hosts to the primary www host for consistent indexing
export function middleware(request: NextRequest) {
    // Never redirect during local development
    if (process.env.NODE_ENV !== 'production') {
        return NextResponse.next()
    }

    const reqUrl = new URL(request.url)

    // Also skip redirects for localhost or private-network hosts (e.g., 127.*, 10.*, 172.16-31.*, 192.168.*)
    const hostname = reqUrl.hostname
    const isLocalOrPrivate =
        hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        /^10\./.test(hostname) ||
        /^192\.168\./.test(hostname) ||
        /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname)
    if (isLocalOrPrivate) {
        return NextResponse.next()
    }

    const canonicalHost = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com')
    try {
        const canonical = new URL(canonicalHost)

        // Only redirect if host differs from canonical host
        if (reqUrl.hostname !== canonical.hostname) {
            const redirectUrl = new URL(request.url)
            redirectUrl.hostname = canonical.hostname
            redirectUrl.protocol = canonical.protocol
            // Never carry over dev ports like :3000 to production host
            redirectUrl.port = canonical.port || ''
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



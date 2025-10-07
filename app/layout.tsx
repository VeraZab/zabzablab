import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Moderustic } from 'next/font/google'

import '/styles/reset.css'
import '/styles/global.css'

import Header from './components/header/Header'
import Footer from './components/Footer'

const moderustic = Moderustic({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-moderustic'
})

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com'),
    title: {
        default: 'ZabZabLab Surface Pattern Design Studio',
        template: '%s | ZabZabLab Surface Pattern Design Studio',
    },
    description: 'Whimsical, romantic, and timeless surface pattern design for textiles, wallpaper, and interiors.',
    applicationName: 'ZabZabLab',
    keywords: ['surface pattern design', 'textile design', 'wallpaper', 'interior design', 'ZabZabLab'],
    creator: 'ZabZabLab',
    publisher: 'ZabZabLab',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: '/',
        title: 'ZabZabLab Surface Pattern Design Studio',
        description:
            'Whimsical, romantic, and timeless surface pattern design for textiles, wallpaper, and interiors.',
        siteName: 'ZabZabLab',
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'ZabZabLab Surface Pattern Design Studio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ZabZabLab Surface Pattern Design Studio',
        description:
            'Whimsical, romantic, and timeless surface pattern design for textiles, wallpaper, and interiors.',
        images: ['/assets/zabzablab.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/assets/favicon.ico',
    },
    themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="p:domain_verify" content="713bb29cacff3398e376fff8d6561c4d" />
                {/* Title comes from Next.js Metadata API per page */}
                <link
                    rel="icon"
                    href="/assets/favicon.ico"
                    type="image/x-icon"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            name: 'ZabZabLab',
                            url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com'),
                            logo: new URL('/assets/zabzablab.png', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                            sameAs: [
                                'https://www.instagram.com/zabzablab',
                                'https://www.spoonflower.com/profiles/zabzablab',
                            ],
                        }),
                    }}
                />
                
                {/* Google Analytics */}
                <script 
                    async 
                    src="https://www.googletagmanager.com/gtag/js?id=G-G58801206T"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-G58801206T');
                        `,
                    }}
                />
            </head>

            <body className={moderustic.variable}>
                <Header />
                <div className="main-content">
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}

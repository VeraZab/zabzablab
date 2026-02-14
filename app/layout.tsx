import { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Moderustic, Lora } from 'next/font/google'

import '/styles/reset.css'
import '/styles/global.css'

import Header from './components/header/Header'
import ConditionalFooter from './components/ConditionalFooter'

const moderustic = Moderustic({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-moderustic',
})

const lora = Lora({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-lora',
})

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com'),
    title: {
        default: 'ZabZabLab Wallpaper and Fabric Design Studio',
        template: '%s | ZabZabLab Wallpaper and Fabric Design Studio',
    },
    description: 'Textiles and wallpaper—for homes with history and personality. Customizable patterns, trade-friendly options.',
    applicationName: 'ZabZabLab',
    keywords: ['surface pattern design', 'textile design', 'wallpaper', 'interior design', 'custom wallpaper', 'ZabZabLab'],
    creator: 'ZabZabLab',
    publisher: 'ZabZabLab',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: '/',
        title: 'ZabZabLab Wallpaper and Fabric Design Studio',
        description:
            'Textiles and wallpaper—for homes with history and personality. Customizable, trade-friendly.',
        siteName: 'ZabZabLab',
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'ZabZabLab Wallpaper and Fabric Design Studio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ZabZabLab Wallpaper and Fabric Design Studio',
        description:
            'Textiles and wallpaper—homes with history and personality. Customizable, trade-friendly.',
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
}

export const viewport: Viewport = {
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebSite',
                            name: 'ZabZabLab Wallpaper and Fabric Design Studio',
                            url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com'),
                            inLanguage: 'en',
                            publisher: {
                                '@type': 'Organization',
                                name: 'ZabZabLab',
                                logo: new URL('/assets/zabzablab.png', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                            },
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

            <body className={`${moderustic.variable} ${lora.variable}`}>
                <Header />
                <div className="main-content">
                    <main>{children}</main>
                    <ConditionalFooter />
                </div>
            </body>
        </html>
    )
}

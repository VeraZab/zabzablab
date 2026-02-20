import { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Jost, Lora } from 'next/font/google'

import '/styles/reset.css'
import '/styles/global.css'

import Header from './components/header/Header'
import ConditionalFooter from './components/ConditionalFooter'

const jost = Jost({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    display: 'swap',
    variable: '--font-jost',
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
        default: 'ZabZabLab — Custom Wallpaper & Fabric Design Studio',
        template: '%s | ZabZabLab',
    },
    description: 'Hand-drawn wallpaper and fabric designs for interiors with personality. Custom colorways, faux textures, and trade-friendly options for interior designers. Shop on Spoonflower.',
    applicationName: 'ZabZabLab',
    keywords: [
        'custom wallpaper',
        'custom fabric design',
        'surface pattern design',
        'wallpaper for interior designers',
        'trade wallpaper',
        'faux grasscloth wallpaper',
        'faux linen wallpaper',
        'faux limewash wallpaper',
        'faux stone wallpaper',
        'textile design',
        'hand-drawn wallpaper',
        'Spoonflower designer',
        'wallpaper color matching',
        'custom wallpaper commission',
        'ZabZabLab',
    ],
    creator: 'ZabZabLab',
    publisher: 'ZabZabLab',
    category: 'Interior Design',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        title: 'ZabZabLab — Custom Wallpaper & Fabric Design Studio',
        description:
            'Hand-drawn wallpaper and fabric for interiors with personality. Custom colorways, faux textures, and trade-friendly options.',
        siteName: 'ZabZabLab',
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'ZabZabLab — Custom Wallpaper and Fabric Design Studio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ZabZabLab — Custom Wallpaper & Fabric Design Studio',
        description:
            'Hand-drawn wallpaper and fabric for interiors with personality. Custom colorways and trade-friendly options.',
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
                <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
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
                            alternateName: 'ZabZabLab Wallpaper and Fabric Design Studio',
                            url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com'),
                            logo: new URL('/assets/zabzablab.png', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                            description: 'Hand-drawn wallpaper and fabric design studio specializing in custom colorways, faux texture wallpapers, and trade-friendly services for interior designers. Designs sold through Spoonflower.',
                            founder: {
                                '@type': 'Person',
                                name: 'Vera',
                                jobTitle: 'Surface Pattern Designer',
                            },
                            address: {
                                '@type': 'PostalAddress',
                                addressRegion: 'NJ',
                                addressCountry: 'US',
                            },
                            contactPoint: {
                                '@type': 'ContactPoint',
                                email: 'zabzablab@gmail.com',
                                contactType: 'customer service',
                            },
                            knowsAbout: [
                                'surface pattern design',
                                'wallpaper design',
                                'textile design',
                                'faux texture wallpaper',
                                'faux grasscloth wallpaper',
                                'faux linen wallpaper',
                                'custom wallpaper color matching',
                                'interior design wallpaper',
                            ],
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
                            name: 'ZabZabLab — Custom Wallpaper & Fabric Design Studio',
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

            <body className={`${jost.variable} ${lora.variable}`}>
                <Header />
                <div className="main-content">
                    <main>{children}</main>
                    <ConditionalFooter />
                </div>
            </body>
        </html>
    )
}

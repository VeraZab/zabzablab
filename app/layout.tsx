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
    title: {
        default: 'ZabZabLab Surface Pattern Design Studio',
        template: '%s | ZabZabLab Surface Pattern Design Studio',
    },
    description: 'ZabZabLab: Surface Pattern Design Studio for interiors.',
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

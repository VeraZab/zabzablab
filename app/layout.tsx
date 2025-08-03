import { ReactNode } from 'react'
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

export const metadata = {
    title: 'ZabZabLab',
    description: 'ZabZabLab: Surface Pattern Design Studio',
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
                <title>ZabZabLab</title>
                <link
                    rel="icon"
                    href="/assets/favicon.ico"
                    type="image/x-icon"
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

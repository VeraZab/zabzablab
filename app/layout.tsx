import { ReactNode } from 'react'

import '/styles/reset.css'
import '/styles/global.css'
import Header from './components/header/Header'
import Footer from './components/Footer'

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

            <body>
                <Header />
                <div className="main-content">
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}

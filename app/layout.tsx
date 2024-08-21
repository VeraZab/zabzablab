import { ReactNode } from 'react'

import '/styles/reset.css'
import '/styles/global.css'
import Header from './Header'

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
                <title>ZABZABLAB</title>
                <link rel="icon" href="./favicon.ico" type="image/x-icon" />
            </head>

            <body>
                <div className="content-container">
                    <Header />
                    <main>{children}</main>
                </div>
            </body>
        </html>
    )
}

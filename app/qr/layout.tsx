import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'QR Contact Card',
    description: 'Scan to save ZabZabLab contact information.',
    robots: {
        index: false,
        follow: false,
    },
}

export default function QRLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}

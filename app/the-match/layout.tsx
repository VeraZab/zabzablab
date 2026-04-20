import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'The Match — Three Samples, Picked for Your Space | ZabZabLab',
    description:
        'Answer 3 quick questions and I\'ll hand-pick three extra-large wallpaper samples matched to your room, mood, and palette. $120, fully credited toward any full roll order.',
    alternates: { canonical: '/the-match' },
    openGraph: {
        type: 'website',
        url: '/the-match',
        title: 'The Match — Three Samples, Picked for Your Space | ZabZabLab',
        description:
            'Three extra-large wallpaper samples, picked for your room. $120 fully credited toward any full roll.',
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'The Match — ZabZabLab wallpaper samples',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Match — Three Samples, Picked for Your Space | ZabZabLab',
        description:
            'Three extra-large wallpaper samples, picked for your room. $120 fully credited toward any full roll.',
        images: ['/assets/zabzablab.png'],
    },
}

export default function TheMatchLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}

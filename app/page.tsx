import PortfolioGrid from './components/portfolio/PortfolioGrid'
import type { Metadata } from 'next'
import PortfolioItem from './components/portfolio/PortfolioItem'
import PortfolioPageLayout from './components/portfolio/PortfolioPageLayout'
import NewsletterSignup from './components/NewsletterSignup'
import Footer from './components/Footer'

import styles from '/styles/portfoliopagelayout.module.css'

interface PortfolioListItem {
    designSrc: string
    alt: string
    mockupSrc?: string
    href?: string
    newWindow?: boolean
}

const portfolio: PortfolioListItem[] = [
    { 
        designSrc: '/portfolio/cyanotype-block.png', 
        alt: 'Large Scale Cyanotype Botanical Herbarium', 
        mockupSrc: '/portfolio/cyanotype-mockup4.jpg', 
        href: 'https://www.spoonflower.com/en/collections/1454717', 
        newWindow: true 
    },
    {
        designSrc: '/portfolio/horse-block.png',
        alt: 'Mori Indian EthnicHorse Block Print',
        mockupSrc: '/portfolio/horse-mockup.jpg',
        href: 'https://www.spoonflower.com/en/collections/1432238',
        newWindow: true,
    },
    { 
        designSrc: '/portfolio/peony-block.png', 
        alt: 'Moody Peony Garden',
        mockupSrc: '/portfolio/peony-mockup.png', 
        href: 'https://www.spoonflower.com/collections/1425136', 
        newWindow: true 
     },
    {
        designSrc: '/portfolio/painterly_vine_gold.jpg',
        alt: 'William Morris Inspired Painterly Japandi Chinoiserie Vine',
        mockupSrc: '/portfolio/painterly-vine-mockup.jpg',
        href: 'https://www.spoonflower.com/collections/1350642',
        newWindow: true,
    },
    // {
    //     designSrc: '/portfolio/hudson-green.jpg',
    //     alt: 'Hudson River Nautical Boat Toile',
    //     mockupSrc: '/portfolio/boats-mockup.jpg',
    //     href: 'https://www.spoonflower.com/collections/885850',
    //     newWindow: true,
    // },    
]

export default function Work() {
    return (
        <PortfolioPageLayout className={styles.mainPageRoot}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ItemList',
                        itemListElement: portfolio.map((item, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            name: item.alt,
                            url: item.href || new URL('/', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                            image: new URL(item.designSrc, process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                        })),
                    }),
                }}
            />
            <PortfolioGrid columns={2}>
                {portfolio.map((item, index) => (
                    <PortfolioItem
                        key={index}
                        designSrc={item.designSrc}
                        alt={item.alt}
                        mockupSrc={item.mockupSrc}
                        href={item.href}
                        newWindow={item.newWindow}
                    />
                ))}
            </PortfolioGrid>
            <div className={styles.ctaWrapper}>
                <svg className={styles.ctaClipSvg} aria-hidden>
                    <defs>
                        <clipPath id="ctaWavyTop" clipPathUnits="objectBoundingBox">
                            <path d="M0,0.07 Q0.0125,0.04 0.025,0.07 Q0.0375,0.10 0.05,0.07 Q0.0625,0.04 0.075,0.07 Q0.0875,0.10 0.1,0.07 Q0.1125,0.04 0.125,0.07 Q0.1375,0.10 0.15,0.07 Q0.1625,0.04 0.175,0.07 Q0.1875,0.10 0.2,0.07 Q0.2125,0.04 0.225,0.07 Q0.2375,0.10 0.25,0.07 Q0.2625,0.04 0.275,0.07 Q0.2875,0.10 0.3,0.07 Q0.3125,0.04 0.325,0.07 Q0.3375,0.10 0.35,0.07 Q0.3625,0.04 0.375,0.07 Q0.3875,0.10 0.4,0.07 Q0.4125,0.04 0.425,0.07 Q0.4375,0.10 0.45,0.07 Q0.4625,0.04 0.475,0.07 Q0.4875,0.10 0.5,0.07 Q0.5125,0.04 0.525,0.07 Q0.5375,0.10 0.55,0.07 Q0.5625,0.04 0.575,0.07 Q0.5875,0.10 0.6,0.07 Q0.6125,0.04 0.625,0.07 Q0.6375,0.10 0.65,0.07 Q0.6625,0.04 0.675,0.07 Q0.6875,0.10 0.7,0.07 Q0.7125,0.04 0.725,0.07 Q0.7375,0.10 0.75,0.07 Q0.7625,0.04 0.775,0.07 Q0.7875,0.10 0.8,0.07 Q0.8125,0.04 0.825,0.07 Q0.8375,0.10 0.85,0.07 Q0.8625,0.04 0.875,0.07 Q0.8875,0.10 0.9,0.07 Q0.9125,0.04 0.925,0.07 Q0.9375,0.10 0.95,0.07 Q0.9625,0.04 0.975,0.07 Q0.9875,0.10 1,0.07 L1,1 L0,1 Z" />
                        </clipPath>
                    </defs>
                </svg>
                <div id="newsletter" className={styles.cta}>
                    <span className={styles.ctaTitle}>Newsletter</span>
                    <span className={styles.ctaText}>
                    Be the first to know when new designs drop!
                    No spam, just pretty things.
                </span>
                <NewsletterSignup />
                </div>
                <Footer className={styles.ctaFooter} />
            </div>
        </PortfolioPageLayout>
    )
}

export const metadata: Metadata = {
    title: 'Hand-Drawn Wallpaper & Fabric Designs — Portfolio',
    description:
        'Browse hand-drawn wallpaper and fabric collections by ZabZabLab. Botanical, chinoiserie, ethnic, and texture-based patterns—customizable colors and scale for your project.',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: '/',
        title: 'Hand-Drawn Wallpaper & Fabric Designs — ZabZabLab Portfolio',
        description:
            'Botanical, chinoiserie, ethnic, and texture-based wallpaper and fabric patterns. Customizable colors and scale.',
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'ZabZabLab — Custom Wallpaper and Fabric Design Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hand-Drawn Wallpaper & Fabric Designs — ZabZabLab',
        description:
            'Botanical, chinoiserie, ethnic, and texture-based wallpaper and fabric patterns. Customizable colors and scale.',
        images: ['/assets/zabzablab.png'],
    },
}

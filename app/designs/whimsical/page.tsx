import PortfolioGrid from '../../components/portfolio/PortfolioGrid'
import type { Metadata } from 'next'
import PortfolioItem from '../../components/portfolio/PortfolioItem'
import PortfolioPageLayout from '../../components/portfolio/PortfolioPageLayout'

import styles from '/styles/portfoliopagelayout.module.css'

interface PortfolioListItem {
    src: string
    alt: string
    hoverSrc?: string
    href?: string
    newWindow?: boolean
}

const portfolio: PortfolioListItem[] = [
    { 
        src: '/portfolio/geese-beige.jpg', 
        alt: 'Goose Spring Trellis', 
        hoverSrc: '/portfolio/geese-mockup.jpg', 
        href: 'https://www.spoonflower.com/en/wallpaper/19768363', 
        newWindow: true 
    },
    {
        src: '/portfolio/dino-color.jpg',
        alt: 'Dinosaur Toile',
        hoverSrc: '/portfolio/dino-mockup.jpg', 
        href: 'https://www.spoonflower.com/en/wallpaper/20254703', 
        newWindow: true 
    }, 
    {
        src: '/portfolio/unicorn-teal.jpg',
        alt: 'Unicorn Mystical Garden Tapestry',
        hoverSrc: '/portfolio/unicorn-teal-mockup.jpg', 
        href: 'https://www.spoonflower.com/en/wallpaper/20302508', 
        newWindow: true 
    },
    {
        src: '/portfolio/hudson-green.jpg',
        alt: 'Hudson River Nautical Boat Toile',
        hoverSrc: '/portfolio/boats-mockup.jpg',
        href: 'https://www.spoonflower.com/en/wallpaper/17606263',
        newWindow: true,
    },
]

export default function AnimalDesignsPage() {
    return (
        <PortfolioPageLayout>
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
                            url: item.href || new URL('/designs/animal', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                            image: new URL(item.src, process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                        })),
                    }),
                }}
            />
            <PortfolioGrid>
                {portfolio.map((item, index) => (
                    <PortfolioItem
                        key={index}
                        src={item.src}
                        alt={item.alt}
                        hoverSrc={item.hoverSrc}
                        href={item.href}
                        newWindow={item.newWindow}
                    />
                ))}
            </PortfolioGrid>
            <div className={styles.cta}>
                Let's collaborate!
                <br />
                <span className={styles.ctaText}>
                    Need whimsical, romantic, trendy yet timeless art for your
                    project? Let's chat!{' '}
                    <a
                        href="mailto:zabzablab@gmail.com"
                        className={styles.ctaEmail}
                    >
                        zabzablab@gmail.com
                    </a>
                </span>
            </div>
        </PortfolioPageLayout>
    )
}

export const metadata: Metadata = {
    title: 'Animal Designs',
    description:
        'Explore whimsical, romantic, and timeless animal surface pattern designs by ZabZabLab for wallpaper, textiles, and interiors.',
    alternates: {
        canonical: '/designs/animal',
    },
    openGraph: {
        type: 'website',
        url: '/designs/animal',
        title: 'Animal Pattern Designs | ZabZabLab',
        description:
            'Explore whimsical, romantic, and timeless animal surface pattern designs by ZabZabLab for wallpaper, textiles, and interiors.',
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'ZabZabLab Surface Pattern Design Studio',
            },
        ],
    },
}



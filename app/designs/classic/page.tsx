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
        src: '/portfolio/carnations-blue.jpg',
        alt: 'Preppy Powder Blue Cornflower Carnations',
        hoverSrc: '/portfolio/carnations-mockup.jpeg', 
        href: 'https://www.spoonflower.com/en/wallpaper/19297862', 
        newWindow: true 
    },
    { 
        src: '/portfolio/sweet_peas.png', 
        alt: 'Sweet Peas Garden Chinoiserie',
        hoverSrc: '/portfolio/peas-mockup.jpg', 
        href: 'https://www.spoonflower.com/en/wallpaper/19518582', 
        newWindow: true 
    },
    { 
        src: '/portfolio/snowdrop.png', 
        alt: 'Spring Snowdrop Meadow',
        hoverSrc: '/portfolio/snowdrop-mockup.jpg', 
        href: 'https://www.spoonflower.com/en/wallpaper/19365219', 
        newWindow: true 
     },
     {
        src: '/portfolio/block-hydrangea-blue.jpg',
        alt: 'Preppy Blue Hydrangea Block Print',
        hoverSrc: '/portfolio/hydrangea-mockup.jpeg', 
        href: 'https://www.spoonflower.com/en/wallpaper/20233017', 
        newWindow: true 
    },
    {
        src: '/portfolio/moody_thistle.png',
        alt: 'Moody Midnight Wild Thistle Chinoiserie',
        hoverSrc: '/portfolio/thistle-mockup.jpg', 
        href: 'https://www.spoonflower.com/en/wallpaper/16965612', 
        newWindow: true 
    },
    {
        src: '/portfolio/mughal_vine.png',
        alt: 'Soft Chinoiserie Butterfly Mughal Flower Vine',
        hoverSrc: '/portfolio/mughal-mockup.jpg', 
        href: 'https://www.spoonflower.com/en/wallpaper/19208092', 
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
        src: '/portfolio/dainty_violet.png',
        alt: 'Dainty Violet Pansy Scatter Meadow',
        hoverSrc: '/portfolio/violet-mockup.jpg', 
        href: 'https://www.spoonflower.com/en/wallpaper/20146999', 
        newWindow: true 
    },
    {
        src: '/portfolio/apple_blossom_blue.png',
        alt: 'Spring Apple Blossom in Soft Dusty Blue',
        hoverSrc: '/portfolio/apple-mockup.jpg', 
        href: 'https://www.spoonflower.com/en/wallpaper/17359129', 
        newWindow: true 
    },
    {
        src: '/portfolio/hudson-green.jpg',
        alt: 'Hudson River Nautical Boat Toile',
        hoverSrc: '/portfolio/boats-mockup.jpg',
        href: 'https://www.spoonflower.com/en/wallpaper/17606263',
        newWindow: true,
    },
    {
        src: '/portfolio/trailing_pine.jpg',
        alt: 'Trailing Cabincore Pine Forest Branches',
        hoverSrc: '/portfolio/pine-mockup.jpg', 
        href: 'https://www.spoonflower.com/en/wallpaper/18115083', 
        newWindow: true 
    },
    {
        src: '/portfolio/poppy_block_print.png',
        alt: 'Rich Dramatic Poppy Block Print',
        hoverSrc: '/portfolio/poppy-mockup.jpg', 
        href: 'https://www.spoonflower.com/en/wallpaper/19026373', 
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
        src: '/portfolio/painterly_vine_gold.jpg',
        alt: 'William Morris Inspired Painterly Japandi Chinoiserie Vine',
        hoverSrc: '/portfolio/painterly-vine-mockup.jpg',
        href: 'https://www.spoonflower.com/en/wallpaper/18947642',
        newWindow: true,
    }
]

export default function StripesDesignsPage() {
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
                            url: item.href || new URL('/designs/stripes', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
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
    title: 'Stripes Designs',
    description:
        'Explore whimsical, romantic, and timeless stripe surface pattern designs by ZabZabLab for wallpaper, textiles, and interiors.',
    alternates: {
        canonical: '/designs/stripes',
    },
    openGraph: {
        type: 'website',
        url: '/designs/stripes',
        title: 'Stripe Pattern Designs | ZabZabLab',
        description:
            'Explore whimsical, romantic, and timeless stripe surface pattern designs by ZabZabLab for wallpaper, textiles, and interiors.',
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



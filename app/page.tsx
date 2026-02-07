import PortfolioGrid from './components/portfolio/PortfolioGrid'
import type { Metadata } from 'next'
import PortfolioItem from './components/portfolio/PortfolioItem'
import PortfolioPageLayout from './components/portfolio/PortfolioPageLayout'

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
        designSrc: '/portfolio/geese-beige.jpg', 
        alt: 'Goose Spring Trellis', 
        mockupSrc: '/portfolio/geese-mockup.jpg', 
        href: 'https://www.spoonflower.com/collections/1416625', 
        newWindow: true 
    },
    {
        designSrc: '/portfolio/carnations-blue.jpg',
        alt: 'Preppy Powder Blue Cornflower Carnations',
        mockupSrc: '/portfolio/carnations-mockup.jpeg', 
        href: 'https://www.spoonflower.com/collections/1346885', 
        newWindow: true 
    },
    { 
        designSrc: '/portfolio/sweet_peas.png', 
        alt: 'Sweet Peas Garden Chinoiserie',
        mockupSrc: '/portfolio/peas-mockup.jpg', 
        href: 'https://www.spoonflower.com/collections/1356968', 
        newWindow: true 
    },
    { 
        designSrc: '/portfolio/snowdrop.png', 
        alt: 'Spring Snowdrop Meadow',
        mockupSrc: '/portfolio/snowdrop-mockup.jpg', 
        href: 'https://www.spoonflower.com/collections/1349944', 
        newWindow: true 
     },
     {
        designSrc: '/portfolio/block-hydrangea-blue.jpg',
        alt: 'Preppy Blue Hydrangea Block Print',
        mockupSrc: '/portfolio/hydrangea-mockup.jpeg', 
        href: 'https://www.spoonflower.com/en/collections/1395396', 
        newWindow: true 
    },
    // {
    //     designSrc: '/portfolio/tea.png',
    //     alt: 'Bookish Preppy Garden Tea Party',
    // },
    {
        designSrc: '/portfolio/moody_thistle.png',
        alt: 'Moody Midnight Wild Thistle Chinoiserie',
        mockupSrc: '/portfolio/thistle-mockup.jpg', 
        href: 'https://www.spoonflower.com/collections/885429', 
        newWindow: true 
    },
    {
        designSrc: '/portfolio/mughal_vine.png',
        alt: 'Soft Chinoiserie Butterfly Mughal Flower Vine',
        mockupSrc: '/portfolio/mughal-mockup.jpg', 
        href: 'https://www.spoonflower.com/collections/1416627', 
        newWindow: true 
    },
    {
        designSrc: '/portfolio/dino-color.jpg',
        alt: 'Dinosaur Toile',
        mockupSrc: '/portfolio/dino-mockup.jpg', 
        href: 'https://www.spoonflower.com/collections/1396328', 
        newWindow: true 
    },
    {
        designSrc: '/portfolio/dainty_violet.png',
        alt: 'Dainty Violet Pansy Scatter Meadow',
        mockupSrc: '/portfolio/violet-mockup.jpg', 
        href: 'https://www.spoonflower.com/collections/1359867', 
        newWindow: true 
    },
    {
        designSrc: '/portfolio/apple_blossom_blue.png',
        alt: 'Spring Apple Blossom in Soft Dusty Blue',
        mockupSrc: '/portfolio/apple-mockup.jpg', 
        href: 'https://www.spoonflower.com/collections/912633', 
        newWindow: true 
    },
    {
        designSrc: '/portfolio/hudson-green.jpg',
        alt: 'Hudson River Nautical Boat Toile',
        mockupSrc: '/portfolio/boats-mockup.jpg',
        href: 'https://www.spoonflower.com/collections/885850',
        newWindow: true,
    },
    {
        designSrc: '/portfolio/trailing_pine.jpg',
        alt: 'Trailing Cabincore Pine Forest Branches',
        mockupSrc: '/portfolio/pine-mockup.jpg', 
        href: 'https://www.spoonflower.com/collections/891338', 
        newWindow: true 
    },
    {
        designSrc: '/portfolio/poppy_block_print.png',
        alt: 'Rich Dramatic Poppy Block Print',
        mockupSrc: '/portfolio/poppy-mockup.jpg', 
        href: 'https://www.spoonflower.com/collections/1416630', 
        newWindow: true 
    },   
    {
        designSrc: '/portfolio/unicorn-teal.jpg',
        alt: 'Unicorn Mystical Garden Tapestry',
        mockupSrc: '/portfolio/unicorn-teal-mockup.jpg', 
        href: 'https://www.spoonflower.com/collections/1398656', 
        newWindow: true 
    },
    {
        designSrc: '/portfolio/painterly_vine_gold.jpg',
        alt: 'William Morris Inspired Painterly Japandi Chinoiserie Vine',
        mockupSrc: '/portfolio/painterly-vine-mockup.jpg',
        href: 'https://www.spoonflower.com/collections/1350642',
        newWindow: true,
    }
]

export default function Work() {
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
    title: 'Surface Pattern Design Portfolio',
    description:
        'Explore whimsical, romantic, and timeless surface pattern designs by ZabZabLab for wallpaper, textiles, and interiors.',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        url: '/',
        title: 'Surface Pattern Design Portfolio | ZabZabLab',
        description:
            'Explore whimsical, romantic, and timeless surface pattern designs by ZabZabLab for wallpaper, textiles, and interiors.',
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'ZabZabLab Wallpaper and Fabric Design Studio',
            },
        ],
    },
}

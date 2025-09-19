import PortfolioGrid from './components/portfolio/PortfolioGrid'
import PortfolioItem from './components/portfolio/PortfolioItem'
import PortfolioPageLayout from './components/portfolio/PortfolioPageLayout'

import styles from '/styles/portfoliopagelayout.module.css'

interface PortfolioItem {
    src: string
    alt: string
}

const portfolio = [
    { src: '/portfolio/geese.jpeg', alt: 'Goose Spring Trellis' },
    {
        src: '/portfolio/carnations.png',
        alt: 'Preppy Butter Yellow Carnations',
    },
    { src: '/portfolio/sweet_peas.png', alt: 'Sweet Peas Garden Chinoiserie' },
    { src: '/portfolio/snowdrop.png', alt: 'Spring Snowdrop Meadow' },
    {
        src: '/portfolio/tea.png',
        alt: 'Bookish Preppy Garden Tea Party',
    },
    {
        src: '/portfolio/moody_thistle.png',
        alt: 'Moody Midnight Wild Thistle Chinoiserie',
    },
    {
        src: '/portfolio/dino-color.jpg',
        alt: 'Dinosaur Toile',
    },
    {
        src: '/portfolio/apple_blossom_blue.png',
        alt: 'Spring Apple Blossom in Soft Dusty Blue',
    },
    {
        src: '/portfolio/crows.png',
        alt: 'Cottagecore Romantic Dark Coquette Crows',
    },
    {
        src: '/portfolio/mughal_vine.png',
        alt: 'Soft Chinoiserie Butterfly Mughal Flower Vine',
    },
    {
        src: '/portfolio/dainty_violet.png',
        alt: 'Dainty Violet Pansy Scatter Meadow',
    },
    {
        src: '/portfolio/hudson-green.jpg',
        alt: 'Hudson River Nautical Boat Toile',
    },
    {
        src: '/portfolio/poppy_block_print.png',
        alt: 'Rich Dramatic Poppy Block Print',
    },
    {
        src: '/portfolio/vine_stripe_gold.png',
        alt: 'Sophisticated Casino Card Deck Trellis',
    },
    {
        src: '/portfolio/block-hydrangea-blue.jpg',
        alt: 'Preppy Pink Hydrangea Block Print',
    },
    {
        src: '/portfolio/unicorn-brown.jpg',
        alt: 'Unicorn Mystical Garden Tapestry',
    },
    {
        src: '/portfolio/painterly_vine_gold.jpg',
        alt: 'William Morris Inspired Painterly Japandi Chinoiserie Vine',
    },
    {
        src: '/portfolio/bird_bows.png',
        alt: 'Coquette Birds and Bows',
    },
    {
        src: '/portfolio/coquette_country_cowgirl.png',
        alt: 'Coquette Country Cowgirl',
    },
    {
        src: '/portfolio/lucky_cowgirl.jpg',
        alt: 'Irish Luck St Patricks Cowgirl',
    },
    {
        src: '/portfolio/wild_west_cacti.png',
        alt: 'Wild West Cacti',
    },
    {
        src: '/portfolio/pink_candy_cane_2.jpg',
        alt: 'Pink Coquette Christmas Bow Candy Canes',
    },
    {
        src: '/portfolio/trailing_pine.jpg',
        alt: 'Trailing Cabincore Pine Forest Branches',
    },
    {
        src: '/portfolio/bows-green-blue-2.jpg',
        alt: 'Preppy Coquette Blue Bows on Green',
    },
]

export default function Work() {
    return (
        <PortfolioPageLayout>
            <PortfolioGrid>
                {portfolio.map((item, index) => (
                    <PortfolioItem key={index} src={item.src} alt={item.alt} />
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

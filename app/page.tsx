import PortfolioGrid from './components/portfolio/PortfolioGrid'
import PortfolioItem from './components/portfolio/PortfolioItem'
import PortfolioPageLayout from './components/portfolio/PortfolioPageLayout'

import styles from '/styles/portfoliopagelayout.module.css'

interface PortfolioItem {
    src: string
    alt: string
}

const portfolio = [
    { src: '/portfolio/geese.jpg', alt: 'Goose Spring Trellis' },
    {
        src: '/portfolio/carnations.png',
        alt: 'Preppy Butter Yellow Carnations',
    },
    { src: '/portfolio/sweet_peas.png', alt: 'Sweet Peas Garden Chinoiserie' },
    { src: '/portfolio/snowdrop.png', alt: 'Spring Snowdrop Meadow' },
    {
        src: '/portfolio/preppy_bow.png',
        alt: 'Preppy Coquette Cream Bows on Lilac',
    },
    {
        src: '/portfolio/moody_thistle.png',
        alt: 'Moody Midnight Wild Thistle Chinoiserie',
    },
    {
        src: '/portfolio/tea.png',
        alt: 'Bookish Preppy Garden Tea Party',
    },
    {
        src: '/portfolio/crows.png',
        alt: 'Cottagecore Romantic Dark Coquette Crows',
    },
    {
        src: '/portfolio/apple_blossom_blue.png',
        alt: 'Spring Apple Blossom in Soft Dusty Blue',
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
        src: '/portfolio/bird_bows.png',
        alt: 'Coquette Birds and Bows',
    },
    {
        src: '/portfolio/painterly_vine_gold.png',
        alt: 'William Morris Inspired Painterly Japandi Chinoiserie Vine',
    },
    {
        src: '/portfolio/coastal_damask.png',
        alt: 'Coastal Rococo Ink Damask',
    },
    {
        src: '/portfolio/hudson_river.png',
        alt: 'Hudson River Nautical Boat Toile',
    },
    {
        src: '/portfolio/vine_stripe_gold.png',
        alt: 'Sophisticated Casino Card Deck Trellis',
    },

    {
        src: '/portfolio/poppy_block_print.png',
        alt: 'Rich Dramatic Poppy Block Print',
    },

    {
        src: '/portfolio/glam_jungle.png',
        alt: 'Glam Art Deco Jungle',
    },
    {
        src: '/portfolio/coquette_country_cowgirl.png',
        alt: 'Coquette Country Cowgirl',
    },
    {
        src: '/portfolio/lucky_cowgirl.png',
        alt: 'Irish Luck St Patricks Cowgirl',
    },
    {
        src: '/portfolio/wild_west_cacti.png',
        alt: 'Wild West Cacti',
    },
    {
        src: '/portfolio/pink_candy_cane_2.png',
        alt: 'Pink Coquette Christmas Bow Candy Canes',
    },

    {
        src: '/portfolio/trailing_pine.png',
        alt: 'Trailing Cabincore Pine Forest Branches',
    },
    {
        src: '/portfolio/cherry_heart.png',
        alt: 'Neutral Black and Cream Nordic Minimal Christmas',
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

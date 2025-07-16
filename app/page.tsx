import PortfolioGrid from './components/portfolio/PortfolioGrid'
import PortfolioItem from './components/portfolio/PortfolioItem'
import PortfolioPageLayout from './components/portfolio/PortfolioPageLayout'

interface PortfolioItem {
    src: string
    alt: string
}

const portfolio = [
    { src: '/portfolio/geese.png', alt: 'Goose Spring Trellis' },
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
        src: '/images/boats-jumbo.png',
        alt: 'Boats Jumbo',
    },
    {
        src: '/images/bird-bows.png',
        alt: 'Bird Bows',
    },
    {
        src: '/images/geese.png',
        alt: 'Happy Canada Geese',
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
        </PortfolioPageLayout>
    )
}

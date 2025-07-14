import PortfolioGrid from './components/portfolio/PortfolioGrid'
import PortfolioItem from './components/portfolio/PortfolioItem'
import PortfolioPageLayout from './components/portfolio/PortfolioPageLayout'

interface PortfolioItem {
    src: string
    alt: string
}

const portfolio = [
    { src: '/images/sweet-peas.png', alt: 'Sweet Peas Chinoiserie' },
    { src: '/images/casino-treillis.png', alt: 'Casino Treillis' },
    { src: '/images/crows.png', alt: 'Whimsygoth garden' },
    { src: '/images/tea.png', alt: 'Garden Tea Party' },
    { src: '/images/horizontal-stripe.png', alt: 'Green Watercolor Stripes' },
    {
        src: '/images/bright-thistle-close.png',
        alt: 'Bright Thistle in Peach Fuzz',
    },
    {
        src: '/images/mockup-moody-flowers.png',
        alt: 'Moody Floral Wallpaper Livingroom Mockup',
    },
    {
        src: '/images/apple-blossom.png',
        alt: 'Apple Blossom Chinoiserie',
    },
    {
        src: '/images/boats.png',
        alt: 'Traffic on the Hudson',
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

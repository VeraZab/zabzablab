import PortfolioGrid from './PortfolioGrid'
import PortfolioItem from './PortfolioItem'
import PortfolioPageLayout from './PortfolioPageLayout'

export default function Episodic() {
    return (
        <PortfolioPageLayout>
            <PortfolioGrid>
                <PortfolioItem
                    src="/images/sweet-peas.png"
                    alt="Sweet Peas Chinoiserie"
                />
                <PortfolioItem
                    src="/images/casino-treillis.png"
                    alt="Casino Treillis"
                />
                <PortfolioItem
                    src="/images/crows.png"
                    alt="Whimsygoth garden"
                />
                <PortfolioItem src="/images/tea.png" alt="Garden Tea Party" />
                <PortfolioItem
                    src="/images/horizontal-stripe.png"
                    alt="Green Watercolor Stripes"
                />
                <PortfolioItem
                    src="/images/bright-thistle-close.png"
                    alt="Bright Thistle in Peach Fuzz"
                />
                <PortfolioItem
                    src="/images/mockup-moody-flowers.png"
                    alt="Moody Floral Wallpaper Livingroom Mockup"
                />
                <PortfolioItem
                    src="/images/apple-blossom.png"
                    alt="Apple Blossom Chinoiserie"
                />
                <PortfolioItem
                    src="/images/boats.png"
                    alt="Traffic on the Hudson"
                />
                <PortfolioItem
                    src="/images/boats-jumbo.png"
                    alt="Boats Jumbo"
                />

                <PortfolioItem src="/images/bird-bows.png" alt="Bird Bows" />
                <PortfolioItem
                    src="/images/geese.png"
                    alt="Happy Canada Geese"
                />
            </PortfolioGrid>
        </PortfolioPageLayout>
    )
}

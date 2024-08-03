import styles from '/styles/portfolioimage.module.css';
import Image from 'next/image';
import PropTypes from 'prop-types';

const PortfolioLinkWrapper = ({ externalUrl, children }) => {
    if (externalUrl) {
        return (
            <a
                href={externalUrl ? externalUrl : ""}
                target="_blank"
                className={styles.link}>
                {children}
            </a>
        )
    }

    return (
        <div className={styles.link}>
            {children}
        </div>
    )
}

export default function PortfolioImage({ src, alt, externalUrl, text }) {
    return (
        <div className={styles.container}>
            <PortfolioLinkWrapper externalUrl={externalUrl}>
                <Image src={src} fill alt={alt} style={{ objectFit: 'cover' }} />
                {text ? (
                    <div className={styles.innerTextContainer}>
                        <div className={styles.text}>{text}</div>
                    </div>
                ) : null}
            </PortfolioLinkWrapper>
        </div >
    );
}

PortfolioImage.PropTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    externalUrl: PropTypes.string,
    text: PropTypes.string,
}


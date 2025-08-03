import Image from 'next/image'
import styles from '/styles/portfolioitem.module.css'

export default function PortfolioItem({
    src,
    alt,
    externalUrl,
    text,
}: {
    src: string
    alt: string
    externalUrl?: string
    text?: string
}) {
    const content = (
        <>
            <Image src={src} fill alt={alt} style={{ objectFit: 'cover' }} />
            {text && <div>{text}</div>}
        </>
    )

    return (
        <div className={styles.container}>
            {externalUrl ? (
                <a href={externalUrl} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            ) : (
                content
            )}
        </div>
    )
}

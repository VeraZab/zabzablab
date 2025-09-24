import Image from 'next/image'
import styles from '/styles/portfolioitem.module.css'

export default function PortfolioItem({
    src,
    alt,
    hoverSrc,
    href,
    newWindow,
    text,
}: {
    src: string
    alt: string
    hoverSrc?: string
    href?: string
    newWindow?: boolean
    text?: string
}) {
    const content = (
        <>
            <Image
                src={src}
                fill
                alt={alt}
                style={{ objectFit: 'cover' }}
                className={hoverSrc ? styles.baseImage : undefined}
                sizes="(max-width: 900px) 100vw, 33vw"
                priority={false}
            />
            {hoverSrc && (
                <Image
                    src={hoverSrc}
                    fill
                    alt={alt}
                    style={{ objectFit: 'cover' }}
                    className={styles.hoverImage}
                    sizes="(max-width: 900px) 100vw, 33vw"
                    priority={false}
                />
            )}
            {text && <div>{text}</div>}
        </>
    )

    return (
        <div className={styles.container}>
            {href ? (
                <a href={href} target={newWindow ? '_blank' : undefined} rel={newWindow ? 'noopener noreferrer' : undefined}>
                    {content}
                </a>
            ) : (
                content
            )}
        </div>
    )
}

import Image from 'next/image'
import styles from '/styles/portfolioitem.module.css'

export default function PortfolioItem({
    designSrc,
    alt,
    mockupSrc,
    href,
    newWindow,
    text,
}: {
    designSrc: string
    alt: string
    mockupSrc?: string
    href?: string
    newWindow?: boolean
    text?: string
}) {
    const content = (
        <>
            {mockupSrc ? (
                <>
                    <Image
                        src={mockupSrc}
                        fill
                        alt={alt}
                        style={{ objectFit: 'cover' }}
                        className={styles.baseImage}
                        sizes="(max-width: 900px) 100vw, 50vw"
                        priority={false}
                    />
                    <Image
                        src={designSrc}
                        fill
                        alt={alt}
                        style={{ objectFit: 'cover' }}
                        className={styles.hoverImage}
                        sizes="(max-width: 900px) 100vw, 50vw"
                        priority={false}
                    />
                </>
            ) : (
                <Image
                    src={designSrc}
                    fill
                    alt={alt}
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 900px) 100vw, 50vw"
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

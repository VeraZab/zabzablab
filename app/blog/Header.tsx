import styles from '/styles/blog.module.css'

export default function BlogHeader({title, date, imageSrc, imageAlt}: {title: string, date: string, imageSrc: string, imageAlt: string}) {
    return (
        <div style={{ padding: '2rem 1rem', maxWidth: 860, margin: '0 auto' }}>
            <h1 style={{ margin: '1rem, 0', padding: 0 }}>{title}</h1>
            <p className={styles.date} style={{ marginBottom: '0.75rem' }}>
                {new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <div className={styles.hero} style={{ marginBottom: '1rem' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imageSrc}
                    alt={imageAlt}
                />
            </div>
        </div>
    )
}



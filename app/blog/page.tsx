import Link from 'next/link'
import Image from 'next/image'
import styles from '/styles/blog.module.css'
import type { Metadata } from 'next'
import PortfolioGrid from '../components/portfolio/PortfolioGrid'
import itemStyles from '/styles/portfolioitem.module.css'

type BlogPost = {
    slug: string
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    date: string
}

const posts: BlogPost[] = [
    {
        slug: 'green-kitchen-trend',
        title: 'Why Dark Green Kitchens Attract Buyers',
        description:
            'Insights inspired by Zillow and Sherwin-Williams: deep olive greens in kitchens can boost desirability and sale price.',
        imageSrc: '/blog/dark_green_kitchen.jpg',
        imageAlt: 'Olive green kitchen cabinetry with patterned tile backsplash',
        date: '2025-08-24',
    },
]

export const metadata: Metadata = {
    title: 'Thoughts on color, pattern, and design',
    description: 'ZabZabLab Surface Pattern Design Studio: Thoughts on color, pattern, and design.',
    alternates: { canonical: '/blog' },
    openGraph: {
        type: 'website',
        url: '/blog',
        title: 'ZabZabLab Blog',
        description: 'Thoughts on color, pattern, and design from ZabZabLab.',
    },
}

export default function BlogIndexPage() {
    return (
        <main >
            <PortfolioGrid>
                {posts.map((post) => (
                    <article key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className={styles.card}>
                            <div className={itemStyles.container}>
                                <Image src={post.imageSrc} alt={post.imageAlt} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '0 0.75rem 0.75rem' }}>
                                <h2 className={styles.cardTitle}>{post.title}</h2>
                                <p className={styles.cardDesc}>{post.description}</p>
                                <p className={styles.date}>{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                        </Link>
                    </article>
                ))}
            </PortfolioGrid>
        </main>
    )
}



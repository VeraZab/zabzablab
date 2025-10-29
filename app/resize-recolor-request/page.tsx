import type { Metadata } from "next";
import styles from "../../styles/resize-recolor-request.module.css";

export const metadata: Metadata = {
    title: "Resize/Recolor Request",
    description: "Submit a request to resize or recolor a design.",
    alternates: { canonical: '/resize-recolor-request' },
    openGraph: {
        type: 'website',
        url: '/resize-recolor-request',
        title: 'Resize/Recolor Request | ZabZabLab',
        description: 'Submit a request to resize or recolor a design.',
        images: [
            {
                url: '/assets/zabzablab.png',
                width: 1200,
                height: 630,
                alt: 'ZabZabLab Wallpaper and Fabric Design Studio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Resize/Recolor Request | ZabZabLab',
        description: 'Submit a request to resize or recolor a design.',
        images: ['/assets/zabzablab.png'],
    },
};

export default function ResizeRecolorRequestPage() {
    return (
        <main style={{ maxWidth: 960, margin: "0 auto" }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebPage',
                        name: 'Resize/Recolor Request',
                        url: new URL('/resize-recolor-request', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                        description: 'Submit a request to resize or recolor a design.',
                        isPartOf: {
                            '@type': 'WebSite',
                            name: 'ZabZabLab Wallpaper and Fabric Design Studio',
                            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com',
                        },
                    }),
                }}
            />
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfESGLdPoJFJxVXwNQBQ2HS0z-HgZ6ZVfI62neur2y5BQvUiw/viewform?embedded=true"
                width="100%"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                title="Spoonflower Resize/Recolor Request Form"
                className={styles.iframe}
            >
                Loading…
            </iframe>
        </main>
    );
}



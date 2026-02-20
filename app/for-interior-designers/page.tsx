import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'For Interior Designers',
    description:
        'Trade-friendly wallpaper and fabric: color match, resize, and custom commissions. Spoonflower Trade benefits.',
    alternates: { canonical: '/for-interior-designers' },
    openGraph: {
        type: 'website',
        url: '/for-interior-designers',
        title: 'For Interior Designers | ZabZabLab',
        description:
            'Trade-friendly wallpaper and fabric: color match, resize, and custom commissions. Spoonflower Trade benefits.',
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
        title: 'For Interior Designers | ZabZabLab',
        description:
            'Trade-friendly wallpaper and fabric: color match, resize, custom commissions. Spoonflower Trade benefits.',
        images: ['/assets/zabzablab.png'],
    },
}

export default function ForInteriorDesignersPage() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                name: 'Home',
                                item: new URL('/', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: 'For Interior Designers',
                                item: new URL('/for-interior-designers', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                            },
                        ],
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Service',
                        name: 'Custom Wallpaper and Fabric Design Services for Interior Designers',
                        serviceType: 'Custom wallpaper and fabric design, wallpaper customization, color matching',
                        description:
                            'Trade-friendly wallpaper and fabric design services for interior designers, including exact color matching, scale adjustments, Spoonflower Trade benefits, and custom wallpaper commissions.',
                        provider: {
                            '@type': 'Organization',
                            name: 'ZabZabLab',
                            url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com',
                            logo: new URL('/assets/zabzablab.png', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                        },
                        areaServed: {
                            '@type': 'Country',
                            name: 'United States',
                        },
                        availableChannel: {
                            '@type': 'ServiceChannel',
                            serviceUrl: 'mailto:zabzablab@gmail.com',
                        },
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Wallpaper and Fabric Design Services for Interior Designers',
                            itemListElement: [
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Color match and recolor',
                                    },
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Scale and repeat adjustments',
                                    },
                                },
                                {
                                    '@type': 'Offer',
                                    itemOffered: {
                                        '@type': 'Service',
                                        name: 'Custom wallpaper commissions',
                                    },
                                },
                            ],
                        },
                        url: new URL('/for-interior-designers', process.env.NEXT_PUBLIC_SITE_URL || 'https://www.zabzablab.com').toString(),
                    }),
                }}
            />
            <div className="page-container">
                <h1 style={{ textAlign: 'center', marginTop: 0 }}>
                    Interior Designer friends, <span className="mobile-newline">I&apos;ve got you!</span>
                </h1>
                <p style={{ textAlign: 'center' }}>
                    I partner with interior designers to bring projects to life with flexible, trade-friendly
                    services.
                    <br />
                    Whether you need a color match, a quick resize for a client presentation,
                    or a bespoke wallpaper, I can help!
                </p>
            </div>

           

            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className="two-col-grid">
                        <div className="col-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <h2 style={{ margin: 0 }}>Color match and recolor for your exact needs</h2>
                        </div>
                        <div className="col-body">
                            <p>
                                I can match your project palette and adapt my designs to your specs:
                            </p>
                            <ul>
                                <li>Palette matching (HEX/RGB and Pantone guidance if available)</li>
                                <li>Recoloring and value adjustments for contrast, mood, or light conditions</li>
                                <li>Scale tweaks for wallpaper, upholstery, pillows, bedding, and more</li>
                            </ul>
                            <p>
                                <a href="/resize-recolor-request">Submit a quick request form</a>{' '}
                                or <a href="mailto:zabzablab@gmail.com">email me!</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section-strip ">
                <div className="page-section-strip-inner">
                    <div className="two-col-grid swap">
                        <div className="col-body">
                            <p>
                                My wallpaper, fabric, and home decor are available through Spoonflower. <br/>A Spoonflower Trade account gives you:
                            </p>
                            <ul>
                                <li>Exclusive trade discounts on wallpaper and select fabrics</li>
                                <li>Quick manufacturing times</li>
                                <li>Free wallpaper and fabric swatches for your clients</li>
                                <li>No minimum order requirements</li>
                            </ul>
                            <p>
                                <a
                                    href="https://www.spoonflower.com/en/trade"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                     Learn more about Spoonflower’s Trade Program
                                </a>
                                .
                            </p>
                            <p>
                                Ready to join? {' '}
                                <a
                                    href="https://spoonflower.pro.typeform.com/to/dGZ1RA?typeform-source=www.spoonflower.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Apply here
                                </a>
                                .
                            </p>
                        </div>
                        <div className="col-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
                            <h2 style={{ margin: 0 }}>Trade Account Benefits</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section-strip page-section-strip-alt">
                <div className="page-section-strip-inner">
                    <div className="two-col-grid">
                        <div className="col-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <h2 style={{ margin: 0 }}>Custom <br/>Wallpaper Commissions</h2>
                        </div>
                        <div className="col-body">
                            <p>
                                Have a specific brief, motif, or space in mind? I accept custom commissions—from full
                                repeat development to tailored recolors and coordinates. Let&apos;s discuss scope, timeline,
                                sampling, and production together.
                            </p>
                            <p>
                                <a href="mailto:zabzablab@gmail.com">
                                    Get in touch to discuss your project!
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section-strip ">
                <div className="page-section-strip-inner" style={{ textAlign: 'center' }}>
                    <p style={{ marginBottom: 'var(--space-3)' }}>
                        <strong>NEW! Need a versatile base for any project?</strong> Faux fabric textures that work as wallpaper or fabric.
                    </p>
                    <p style={{ margin: 0 }}>
                        <Link href="/designs/faux-fabric">
                            See Faux Fabric Textures →
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    )
}



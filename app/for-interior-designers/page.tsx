import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'For Interior Designers',
    description:
        'Trade-friendly surface pattern services: precise color matching, Spoonflower Trade benefits, and custom wallpaper commissions.',
    alternates: { canonical: '/for-interior-designers' },
}

export default function ForInteriorDesignersPage() {
    return (
        <main>
            <h1 style={{ maxWidth: 960, margin: '32px auto', padding: '0 16px', textAlign: 'center' }}>
                Interior Designer friends, <span className="mobile-newline">I've got you!</span>
            </h1>   
            <p style={{ maxWidth: 960, margin: '32px auto', padding: '0 16px', textAlign: 'center' }}>
                I partner with interior designers to bring projects to life with flexible, trade-friendly
                services. Whether you need a perfect color match, a quick resize for a client presentation,
                or a bespoke wallpaper, I can help!
            </p>

            <section
                style={{
                    backgroundColor: '#eff3f6',
                    padding: '32px 0',
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw'
                }}
            >
                <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
                    <div className="two-col-grid">
                        <div className="col-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <h2 style={{ margin: 0 }}>Color match and recolor for your exact needs</h2>
                        </div>
                        <div className="col-body">
                            <p style={{ marginBottom: 12 }}>
                                I can match your project palette precisely and adapt any of my designs to your specs:
                            </p>
                            <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                                <li>Exact palette matching (HEX/RGB and Pantone guidance if available)</li>
                                <li>Recoloring and value adjustments for contrast, mood, or light conditions</li>
                                <li>Scale tweaks for wallpaper, upholstery, pillows, bedding, and more</li>
                            </ul>
                            <p>
                                <a href="/resize-recolor-request" style={{ textDecoration: 'underline' }}>Submit a quick request form</a>{' '}
                                or {' '}
                                <a href="mailto:zabzablab@gmail.com" style={{ textDecoration: 'underline' }}> email me!</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                style={{
                    backgroundColor: '#fcf7da',
                    padding: '32px 0',
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw'
                }}
            >
                <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
                    <div className="two-col-grid swap">
                        <div className="col-body">
                            <p>
                                My wallpaper, fabric, and home decor are available through Spoonflower. A Spoonflower Trade account gives you:
                            </p>
                            <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                                <li>Exclusive trade discounts on wallpaper and select fabrics</li>
                                <li>Quick manufacturing times</li>
                                <li>Free wallpaper and fabric swatches for your clients</li>
                                <li>No minimum order requirements</li>
                            </ul>
                            <p style={{ marginBottom: 12 }}>
                                
                                <a
                                    href="https://www.spoonflower.com/en/trade"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'underline' }}
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
                                    style={{ textDecoration: 'underline' }}
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

            <section
                style={{
                    // backgroundColor: '#eeebef',
                    backgroundColor: '#fbe9e9',
                    padding: '32px 0',
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw'
                }}
            >
                <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
                    <div className="two-col-grid">
                        <div className="col-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                            <h2 style={{ margin: 0 }}>Custom wallpaper commissions</h2>
                        </div>
                        <div className="col-body">
                            <p style={{ marginBottom: 12 }}>
                                Have a specific brief, motif, or space in mind? I accept custom commissions—from full
                                repeat development to tailored recolors and coordinates. We can discuss scope, timeline,
                                sampling, and production together.
                            </p>
                            <p>
                                <a href="mailto:zabzablab@gmail.com" style={{ textDecoration: 'underline' }}>
                                    Get in touch to discuss your project!
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}



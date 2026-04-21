import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Privacy Policy — Spoonflower Seller Lab Chrome Extension',
    description:
        'Privacy policy for Spoonflower Seller Lab, a Chrome extension that helps Spoonflower sellers plan, optimize, and apply listing tags. No data collection, no tracking, all processing happens locally.',
    alternates: {
        canonical: '/designer-tools/spoonflower-seller-lab/privacy-policy',
    },
    robots: { index: true, follow: true },
}

export default function SpoonflowerSellerLabPrivacyPolicyPage() {
    return (
        <main>
            <div
                className="page-container"
                style={{
                    paddingTop: 'var(--space-12)',
                    paddingBottom: 'var(--space-12)',
                }}
            >
                <article
                    style={{
                        maxWidth: '65ch',
                        lineHeight: 1.6,
                    }}
                >
                    <h1
                        style={{ marginTop: 0, marginBottom: 'var(--space-4)' }}
                    >
                        Privacy Policy for Spoonflower Seller Lab
                    </h1>
                    <p
                        style={{
                            color: 'var(--muted-umber)',
                            marginBottom: 'var(--space-4)',
                        }}
                    >
                        <strong>Last updated:</strong> March 2026
                    </p>
                    <p
                        style={{
                            marginBottom: 'var(--space-8)',
                            fontStyle: 'italic',
                        }}
                    >
                        This extension is not affiliated with, endorsed by, or
                        officially connected to Spoonflower in any way.
                    </p>

                    <h2
                        style={{
                            marginTop: 'var(--space-8)',
                            marginBottom: 'var(--space-3)',
                        }}
                    >
                        Overview
                    </h2>
                    <p>
                        Spoonflower Seller Lab (&quot;the extension&quot;) is a
                        Chrome browser extension that helps Spoonflower sellers
                        plan, optimize, and apply listing tags directly in their
                        seller workspace. This privacy policy explains how the
                        extension handles data.
                    </p>

                    <h2
                        style={{
                            marginTop: 'var(--space-8)',
                            marginBottom: 'var(--space-3)',
                        }}
                    >
                        What Data the Extension Accesses
                    </h2>
                    <p>
                        The extension only runs on Spoonflower pages (
                        <code>spoonflower.com</code> and{' '}
                        <code>*.spoonflower.com</code>). When you use it:
                    </p>
                    <ul>
                        <li>
                            <strong>Pull from shop-by-image page:</strong> The
                            extension reads the title text from the image search
                            results listings returned by Spoonflower. This data
                            is used only to populate the side panel for you to
                            edit.
                        </li>
                        <li>
                            <strong>Pull from a listing page:</strong> The
                            extension only reads the tags from the product
                            listing page. This data is used only to populate the
                            side panel for you to edit.
                        </li>
                        <li>
                            <strong>Copy to clipboard:</strong> The extension
                            copies your final keyword string to your
                            device&apos;s clipboard when you choose to copy.
                        </li>
                    </ul>
                    <p>
                        All of this happens locally in your browser. The
                        extension does not send any data to external servers.
                    </p>

                    <h2
                        style={{
                            marginTop: 'var(--space-8)',
                            marginBottom: 'var(--space-3)',
                        }}
                    >
                        What the Extension Does NOT Do
                    </h2>
                    <ul>
                        <li>
                            <strong>No data collection:</strong> The extension
                            does not collect, store, or transmit your data to
                            any server.
                        </li>
                        <li>
                            <strong>No analytics or tracking:</strong> The
                            extension does not use analytics, tracking pixels,
                            or any third-party tracking.
                        </li>
                        <li>
                            <strong>No remote code:</strong> The extension does
                            not load or execute code from the internet.
                        </li>
                        <li>
                            <strong>No data sale:</strong> Your data is never
                            sold or shared with third parties.
                        </li>
                        <li>
                            <strong>No unrelated host access:</strong> The
                            extension only accesses Spoonflower pages. It cannot
                            read or modify other websites.
                        </li>
                    </ul>

                    <h2
                        style={{
                            marginTop: 'var(--space-8)',
                            marginBottom: 'var(--space-3)',
                        }}
                    >
                        Data Storage
                    </h2>
                    <p>
                        The extension does not persistently store your tag data.
                        Data exists only:
                    </p>
                    <ul>
                        <li>In memory while the side panel is open</li>
                        <li>
                            In your clipboard when you copy (standard clipboard
                            behavior)
                        </li>
                    </ul>

                    <h2
                        style={{
                            marginTop: 'var(--space-8)',
                            marginBottom: 'var(--space-3)',
                        }}
                    >
                        Permissions
                    </h2>
                    <p>
                        The extension requests the following Chrome permissions:
                    </p>
                    <table
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            marginTop: 'var(--space-4)',
                            marginBottom: 'var(--space-4)',
                        }}
                    >
                        <thead>
                            <tr>
                                <th
                                    style={{
                                        textAlign: 'left',
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '2px solid var(--charcoal-ink)',
                                    }}
                                >
                                    Permission
                                </th>
                                <th
                                    style={{
                                        textAlign: 'left',
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '2px solid var(--charcoal-ink)',
                                    }}
                                >
                                    Purpose
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    <code>sidePanel</code>
                                </td>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    Display the extension interface in
                                    Chrome&apos;s side panel
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    <code>activeTab</code>
                                </td>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    Access the currently active Spoonflower tab
                                    when you click Pull
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    <code>scripting</code>
                                </td>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    Read tag fields on the Spoonflower page when
                                    you pull tags
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    <code>https://spoonflower.com/*</code> and{' '}
                                    <code>https://*.spoonflower.com/*</code>
                                </td>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    Limit all access to Spoonflower pages only
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h2
                        style={{
                            marginTop: 'var(--space-8)',
                            marginBottom: 'var(--space-3)',
                        }}
                    >
                        Changes to This Policy
                    </h2>
                    <p>
                        We may update this privacy policy from time to time. The
                        &quot;Last updated&quot; date at the top will reflect
                        any changes. Continued use of the extension after
                        updates constitutes acceptance of the revised policy.
                    </p>

                    <h2
                        style={{
                            marginTop: 'var(--space-8)',
                            marginBottom: 'var(--space-3)',
                        }}
                    >
                        Contact
                    </h2>
                    <p>
                        If you have questions about this privacy policy or the
                        extension,{' '}
                        <a href="mailto:zabzablab@gmail.com">
                            please contact us
                        </a>
                        .
                    </p>
                </article>
            </div>
        </main>
    )
}

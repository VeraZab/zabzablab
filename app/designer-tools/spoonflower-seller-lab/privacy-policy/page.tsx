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
                        <strong>Last updated:</strong> August 2026
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
                    <p>
                        The extension does not collect user data, does not
                        require an account, and does not transmit anything to
                        external servers.
                    </p>

                    <h2
                        style={{
                            marginTop: 'var(--space-8)',
                            marginBottom: 'var(--space-3)',
                        }}
                    >
                        What the extension does
                    </h2>
                    <p>
                        The extension only runs on Spoonflower pages (
                        <code>spoonflower.com</code> and{' '}
                        <code>*.spoonflower.com</code>). When you use it:
                    </p>
                    <ul>
                        <li>
                            <strong>
                                Pull from a shop, search, or image-search page:
                            </strong>{' '}
                            The extension reads the design titles listed on the
                            page you&apos;re viewing so you can turn them into
                            keyword ideas. This happens locally in your browser.
                        </li>
                        <li>
                            <strong>Pull from a listing page:</strong> The
                            extension reads the tags from the product listing
                            page so you can edit and reorganize them. This
                            happens locally in your browser.
                        </li>
                        <li>
                            <strong>Copy to clipboard:</strong> The extension
                            copies your final keyword string to your
                            device&apos;s clipboard when you choose to copy.
                        </li>
                    </ul>

                    <h2
                        style={{
                            marginTop: 'var(--space-8)',
                            marginBottom: 'var(--space-3)',
                        }}
                    >
                        What the extension does NOT do
                    </h2>
                    <ul>
                        <li>
                            <strong>No data collection.</strong> The extension
                            does not collect, store, or transmit any of your
                            data. Nothing you type or read in the side panel
                            leaves your browser.
                        </li>
                        <li>
                            <strong>No account required.</strong> There is no
                            sign-in, no login, no user account.
                        </li>
                        <li>
                            <strong>No analytics or tracking.</strong> No
                            pixels, no third-party trackers, no telemetry.
                        </li>
                        <li>
                            <strong>No remote code.</strong> The extension does
                            not load or execute code fetched from the internet.
                        </li>
                        <li>
                            <strong>No data sale.</strong> Your data cannot be
                            sold or shared with third parties because none is
                            collected in the first place.
                        </li>
                        <li>
                            <strong>No access to unrelated sites.</strong> The
                            extension only reads or interacts with Spoonflower
                            pages. It cannot see other tabs or other websites
                            you visit.
                        </li>
                    </ul>

                    <h2
                        style={{
                            marginTop: 'var(--space-8)',
                            marginBottom: 'var(--space-3)',
                        }}
                    >
                        Data storage
                    </h2>
                    <p>
                        The extension does not persistently store any of your
                        data. Data exists only:
                    </p>
                    <ul>
                        <li>In memory while the side panel is open</li>
                        <li>
                            On your clipboard when you choose to copy (standard
                            clipboard behavior)
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
                                    Type
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
                                    Required
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
                                    Chrome&apos;s side panel.
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
                                    Required
                                </td>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    Read tag / listing content from the active
                                    Spoonflower tab when you click Pull.
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
                                    Required
                                </td>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    Inject the content script that reads the
                                    tag data (only on Spoonflower pages).
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
                                    Required host
                                </td>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    Limits all access to Spoonflower pages.
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
                                    <code>storage</code>
                                </td>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    Optional (declared, currently unused)
                                </td>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    Reserved for a future opt-in feature. The
                                    current version never requests this
                                    permission from you, and nothing is stored.
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
                                    <code>https://sellerlab.app/*</code>
                                </td>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    Optional host (declared, currently unused)
                                </td>
                                <td
                                    style={{
                                        padding:
                                            'var(--space-2) var(--space-3)',
                                        borderBottom:
                                            '1px solid var(--border-subtle)',
                                    }}
                                >
                                    Reserved for a future opt-in feature. The
                                    current version never requests this
                                    permission from you and never contacts this
                                    host.
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
                        External links
                    </h2>
                    <p>
                        The extension may display links to external forms (for
                        example, a Google Forms interest survey for upcoming
                        features). Clicking a link opens that page in a new
                        browser tab. Any information you choose to submit there
                        (such as your email address or feedback) is collected
                        by the operator of that page (e.g. Google), not by the
                        extension, and is governed by that operator&apos;s
                        terms and privacy policy. The extension itself does not
                        read, store, or transmit anything you type into those
                        external forms.
                    </p>

                    <h2
                        style={{
                            marginTop: 'var(--space-8)',
                            marginBottom: 'var(--space-3)',
                        }}
                    >
                        Changes to this policy
                    </h2>
                    <p>
                        We may update this privacy policy from time to time.
                        The &quot;Last updated&quot; date at the top will
                        reflect any changes. Continued use of the extension
                        after updates constitutes acceptance of the revised
                        policy.
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
                        Questions about this privacy policy or the extension:{' '}
                        <a href="mailto:zabzablab@gmail.com">
                            zabzablab@gmail.com
                        </a>
                        .
                    </p>
                </article>
            </div>
        </main>
    )
}

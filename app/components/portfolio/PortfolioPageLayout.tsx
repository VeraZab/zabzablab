import { ReactNode } from 'react'

import styles from '/styles/portfoliopagelayout.module.css'

export default function PortfolioPageLayout({
    children,
}: {
    children: ReactNode
}) {
    return <div className={styles.container}>{children}</div>
}

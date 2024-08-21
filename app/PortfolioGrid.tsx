import { ReactNode } from 'react'

import styles from '/styles/portfoliogrid.module.css'

export default function PortfolioGrid({ children }: { children: ReactNode }) {
    return <div className={styles.container}>{children}</div>
}

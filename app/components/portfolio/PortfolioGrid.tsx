import { ReactNode } from 'react'

import styles from '/styles/portfoliogrid.module.css'

export default function PortfolioGrid({
    children,
    columns = 3,
}: {
    children: ReactNode
    columns?: 2 | 3
}) {
    return (
        <div
            className={
                columns === 2 ? `${styles.container} ${styles.twoColumns}` : styles.container
            }
        >
            {children}
        </div>
    )
}

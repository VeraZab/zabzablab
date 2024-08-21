import React, { ReactNode } from 'react'

import styles from '/styles/section.module.css'

export default function Section({
    children,
    id,
    backgroundImage,
}: {
    children: ReactNode
    id?: string
    backgroundImage?: string
}) {
    return (
        <section
            className={
                backgroundImage
                    ? `${styles.container} ${styles.bgImg}`
                    : styles.container
            }
            id={id}
            style={{
                backgroundImage: backgroundImage
                    ? `url(${backgroundImage})`
                    : '',
            }}
        >
            {children}
        </section>
    )
}

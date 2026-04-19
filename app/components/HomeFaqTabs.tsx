'use client'

import { useId, useState, type ReactNode } from 'react'
import type { FaqEntry, FaqPanel } from '../content/homepageFaq'
import styles from '/styles/homepage.module.css'

type Props = {
    panels: FaqPanel[]
}

/** Turn `**bold**` into <strong>; leave everything else literal. */
function parseInlineBold(text: string): ReactNode[] {
    const segments = text.split(/(\*\*.+?\*\*)/g)
    return segments.map((seg, i) => {
        const m = seg.match(/^\*\*(.+)\*\*$/)
        if (m) {
            return <strong key={i}>{m[1]}</strong>
        }
        return seg ? <span key={i}>{seg}</span> : null
    })
}

function FaqAnswerBody({ a }: { a: string | string[] }) {
    const blocks = typeof a === 'string' ? [a] : a
    return (
        <>
            {blocks.map((block, bi) => {
                const lines = block.split('\n')
                return (
                    <div key={bi} className={styles.faqAnswerBlocks}>
                        {lines.map((line, li) => {
                            const trimmed = line.trim()
                            if (trimmed === '') {
                                return <br key={`${bi}-${li}-br`} />
                            }
                            const isBullet = /^\*\s+/.test(trimmed)
                            const body = isBullet ? trimmed.replace(/^\*\s+/, '') : trimmed
                            const Tag = isBullet ? 'div' : 'p'
                            return (
                                <Tag
                                    key={`${bi}-${li}`}
                                    className={isBullet ? styles.faqAnswerBulletLine : undefined}
                                >
                                    {parseInlineBold(body)}
                                </Tag>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}

export default function HomeFaqTabs({ panels }: Props) {
    const baseId = useId()
    const showTabs = panels.length > 1
    const [active, setActive] = useState(panels[0]?.id ?? '')

    const current = panels.find((p) => p.id === active) ?? panels[0]

    const panelBody =
        current &&
        current.sections.map((section) => (
            <div key={section.title || current.id} className={styles.faqPanelSection}>
                {section.title.trim() ? (
                    <h3 className={styles.faqSectionTitle}>{section.title}</h3>
                ) : null}
                <div className={styles.faqPillarList}>
                    {section.entries.map((entry: FaqEntry, i: number) => (
                        <details key={`${current.id}-${section.title}-${i}`} className={styles.faqPillarDetails}>
                            <summary className={styles.faqPillarSummary}>
                                <span className={styles.faqPillarSummaryQuestion}>{entry.q}</span>
                            </summary>
                            <div className={styles.faqPillarAnswer}>
                                <FaqAnswerBody a={entry.a} />
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        ))

    return (
        <div className={styles.faqTabsRoot}>
            {showTabs ? (
                <div className={styles.faqTabsShell}>
                    <div className={styles.faqTabsFolderBar}>
                        <div className={styles.faqTabList} role="tablist" aria-label="FAQ topics">
                            {panels.map((p) => {
                                const selected = p.id === active
                                return (
                                    <button
                                        key={p.id}
                                        type="button"
                                        role="tab"
                                        id={`${baseId}-tab-${p.id}`}
                                        aria-selected={selected}
                                        aria-controls={`${baseId}-panel-${p.id}`}
                                        tabIndex={selected ? 0 : -1}
                                        className={`${styles.faqTab} ${selected ? styles.faqTabSelected : ''}`}
                                        onClick={() => setActive(p.id)}
                                    >
                                        {p.label}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    {current ? (
                        <div className={styles.faqTabPanelCol} key={current.id}>
                            <div
                                id={`${baseId}-panel-${current.id}`}
                                role="tabpanel"
                                aria-labelledby={`${baseId}-tab-${current.id}`}
                                className={`${styles.faqTabPanel} ${styles.faqTabPanelEmbedded}`}
                            >
                                {panelBody}
                            </div>
                        </div>
                    ) : null}
                </div>
            ) : current ? (
                <div
                    key={current.id}
                    className={`${styles.faqTabPanel} ${styles.faqTabPanelStandalone}`}
                >
                    {panelBody}
                </div>
            ) : null}
        </div>
    )
}

import styles from '/styles/footer.module.css'

export default function Footer({ className }: { className?: string }) {
    return (
        <div className={`${styles.container} ${className ?? ''}`.trim()}>
            © {new Date().getFullYear()} ZabZabLab • All rights reserved
        </div>
    )
}

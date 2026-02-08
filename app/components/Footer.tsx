import styles from '/styles/footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            © {new Date().getFullYear()} ZabZabLab • All rights reserved
        </div>
    )
}

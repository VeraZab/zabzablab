import styles from '/styles/about.module.css'

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.img}></div>
                <div className={styles.caption}>
                    Hi! My name is Vera Zabeida. <br /> <br />
                    I'm the owner of ZabZabLab. This is a creative
                    experimentation space, where whimsy.
                    <br /> and I started playing around with my iPad a few years
                    ago when I became a mom, and just never stopped. I love
                    creating patterns for interiors, it's a true passion of
                    mine. Lately, the grandmillennial style is calling to me so
                    here you'll find some of the latest that I've been working
                    on.
                </div>
            </div>
        </div>
    )
}

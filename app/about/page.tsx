'use client'

import styles from '/styles/about.module.css'

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img
                        src="/assets/about.jpg"
                        alt="Vera working or showcasing patterns"
                    />
                </div>
                <div className={styles.caption}>
                    Hi, welcome to my little corner of the internet!
                    <br />
                    <br />
                    I’m Vera — the surface pattern designer behind ZabZabLab,
                    based in NJ, USA. I create artwork for textiles and home
                    goods rooted in playfulness, a touch of nostalgia, and a
                    love for the quiet joys of everyday life.
                    <br />
                    <br />
                    All my patterns are hand-drawn on the iPad, which gives me
                    the freedom to turn a cozy coffee shop or a view of the
                    Hudson into my studio. I love adding an analog feel to my
                    work — blending timeless motifs and soft palettes with the
                    occasional twist, whether it’s a whimsical subject or a
                    detail that invites a second glance.
                    <br />
                    <br />
                    If you're looking to bring charm and character into your
                    project — art that feels familiar yet unexpected, polished
                    without being stiff — you're in the right place. Feel free
                    to reach out via the email link above to learn more about
                    licensing my designs or collaborating.
                    <br />
                    <br />
                    Let’s make some magic together!
                </div>
            </div>
        </div>
    )
}

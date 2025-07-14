import styles from '/styles/about.module.css'
import Section from '../Section'

export default function AboutPage() {
    return (
        <Section backgroundImage="/images/throne.png">
            <div className={styles.container}>
                <div className={styles.caption}>
                    Hi! I'm Vera. I started playing around with my iPad a few
                    years ago when I became a mom, and just never stopped. I
                    love creating patterns for interiors, it's a true passion of
                    mine. Lately, the grandmillennial style is calling to me so
                    here you'll find some of the latest that I've been working
                    on.
                </div>
            </div>
        </Section>
    )
}

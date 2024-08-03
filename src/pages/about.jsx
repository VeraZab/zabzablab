import styles from '/styles/about.module.css';
import Section from '../components/Section';

export default function HomePage() {
    return (
        <Section backgroundImage="/images/throne.webp">
            <div className={styles.container}>
                <div className={styles.caption}>
                    <p>
                        {"I am an award-winning visual effects supervisor and " +
                            "compositing artist with over 16 years of experience. "}
                    </p>
                    <p>
                        {
                            "I have worked on many projects including commercials, " +
                            "tv series, feature films, VR projects and artificial intelligence."
                        }
                    </p>
                    <p>
                        <b>
                            Professional experience:
                        </b>

                        {
                            " Flame, Nuke, After Effects, " +
                            "Unreal Engine, Maya, vfx and on-set supervision, compositing, " +
                            "motion desing, artificial inteligence."}
                    </p>
                    <p>
                        <b>
                            Awards:
                        </b>

                        {
                            " VES Awards Nomination, Cannes Lions, VR Fest Winner, AEAF2020, Promax BDA, The One Show, D&D"}
                    </p>

                </div>
            </div>

        </Section>
    );
}


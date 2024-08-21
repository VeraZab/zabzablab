import styles from '/styles/about.module.css'
import Section from '../Section'

export default function HomePage() {
    return (
        <Section backgroundImage="/images/throne.png">
            <div className={styles.container}>
                <div className={styles.caption}>
                    <p>
                        {'I am an award-winning visual effects supervisor and ' +
                            'compositing artist with over 16 years of experience. '}
                    </p>
                    <p>
                        {'I have worked on many projects including commercials, ' +
                            'tv series, feature films, VR projects and artificial intelligence.'}
                    </p>
                    <p>
                        <b>Professional experience:</b>

                        {' Flame, Nuke, After Effects, ' +
                            'Unreal Engine, Maya, vfx and on-set supervision, compositing, ' +
                            'motion desing, artificial inteligence.'}
                    </p>
                    <p>
                        <b>Clients:</b>

                        {' Columbia Pictures, Marvel Studios, Disney, HBO, New Line Cinema, ' +
                            'Netflix, Prime Video, Universal, Warner Brothers, NBC Sunday Night Football, ' +
                            'Toyota, Mercedez Benz, Mazda, Dodge, Fiat, Jeep, Lego, TMobile, Vodafone, Apple, ' +
                            'Tag Heuer, Spotify'}
                    </p>
                    <p>
                        <b>Awards:</b>

                        {
                            ' VES Awards Nomination, Cannes Lions, VR Fest Winner, AEAF 2020, Promax BDA, The One Show, D&D Pencil'
                        }
                    </p>
                </div>
            </div>
        </Section>
    )
}

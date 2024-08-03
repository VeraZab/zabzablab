import styles from '/styles/section.module.css';
import PropTypes from 'prop-types';

export default function Section({ children, id, backgroundImage }) {
    return (
        <section
            className={backgroundImage ? `${styles.container} ${styles.bgImg}` : styles.container}
            id={id}
            style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : "" }}
        >
            {children}
        </section>
    );
}

Section.PropTypes = {
    children: PropTypes.node,
    id: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
}


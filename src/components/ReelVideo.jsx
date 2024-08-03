import styles from '/styles/reelvideo.module.css';
import PropTypes from 'prop-types';

export default function ReelVideo({ src }) {
    return (
        <video
            className={styles.video}
            autoPlay
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
            muted
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

ReelVideo.PropTypes = {
    src: PropTypes.string.isRequired,
}
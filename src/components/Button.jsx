import styles from '/styles/button.module.css';
import PropTypes from 'prop-types';

export default function Button({ children, props }) {
    return (
        <button className={styles.container} {...props}>
            {children}
        </button>
    );
}

Button.PropTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func
}


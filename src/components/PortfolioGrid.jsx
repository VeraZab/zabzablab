import styles from '/styles/portfoliogrid.module.css';
import PropTypes from 'prop-types';

export default function PortfolioGrid({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

PortfolioGrid.PropTypes = {
    children: PropTypes.node,
}


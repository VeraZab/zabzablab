import styles from '/styles/portfoliopagelayout.module.css';
import PropTypes from 'prop-types';

export default function PortfolioPageLayout({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

PortfolioPageLayout.PropTypes = {
    children: PropTypes.node,
}


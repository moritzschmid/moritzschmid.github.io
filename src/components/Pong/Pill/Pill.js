import React from 'react';
import PropTypes from 'prop-types';
import styles from'./Pill.module.css';

const Pill = () => (
  <div className={styles.pill} data-testid="Pill">
    Pill Component
  </div>
);

Pill.propTypes = {};

Pill.defaultProps = {};

export default Pill;

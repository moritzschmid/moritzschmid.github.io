import React from 'react';
import styles from './Header.module.css';

const Header = ({ counter, dataTestId }) => {
  return (
    <div className={styles.header} data-testid={dataTestId}>
      <div className={styles.innerHeader_spacer}>&nbsp;</div>
      <div className={styles.innerHeader}>
        moritzschmid.github.io
        <span className={styles.counter}>{counter}</span>
      </div>
    </div>);
}

export default Header;

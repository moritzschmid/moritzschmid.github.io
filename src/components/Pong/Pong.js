import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pong.module.css';
import Pill from './Pill/Pill'
import Ball from './Ball/Ball'


const Pong = ({dataTestId}) => (
  <div className={styles.pong} data-testid={dataTestId}>
    <Pill key="pillFixed"/>
    <Pill key="pillMoving"/>
    <Ball/>
  </div>
);

Pong.propTypes = {};

Pong.defaultProps = {};

export default Pong;

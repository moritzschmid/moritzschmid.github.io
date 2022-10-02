import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pong.module.css';
import Pill from './Pill/Pill'
import Ball from './Ball/Ball'


const Pong = () => (
  <div className={styles.pong} data-testid="Pong">
    <Pill key="pillFixed"/>
    <Pill key="pillMoving"/>
    <Ball/>
  </div>
);

Pong.propTypes = {};

Pong.defaultProps = {};

export default Pong;

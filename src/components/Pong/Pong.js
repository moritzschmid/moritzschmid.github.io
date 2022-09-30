import React from 'react';
import PropTypes from 'prop-types';
import './Pong.css';
import Pill from './Pill/Pill'
import Ball from './Ball/Ball'


const Pong = () => (
  <div className="Pong" data-testid="Pong">
    <Pill key="pillFixed"/>
    <Pill key="pillMoving"/>
    <Ball/>
  </div>
);

Pong.propTypes = {};

Pong.defaultProps = {};

export default Pong;

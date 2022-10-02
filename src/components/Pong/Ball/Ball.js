import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ball.module.css';

const Ball = ({x,y}) => (
  <div className={styles.ball} data-testid="Ball">O</div>
);

Ball.propTypes = {
  x: PropTypes.number,
  y:PropTypes.number
};

Ball.defaultProps = {x:10, y:10};


export default Ball;

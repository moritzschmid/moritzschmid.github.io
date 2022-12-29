import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { elastic as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom';
import styles from './SideBar.module.css';
import './bm.css';

const SideBar = ({ counterDefault, callBack }) => {

  const [counter, setCounter] = useState(counterDefault);

  const handleChange = event => {
    console.log("handleChange");
    setCounter(parseInt(event.target.value));
  };

  const handleInput = event => {
    console.log("handleInput");
    callBack(parseInt(event.target.value));
  };

  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

  return (
    <Menu className={styles.menu}
    isOpen={isOpen}
    onOpen={handleIsOpen}
    onClose={handleIsOpen}>
     
      <Link className={styles.link} to="/" onClick={closeSideBar}>Home</Link>
      <Link className={styles.link} to="/react" onClick={closeSideBar}>React</Link>
      <Link className={styles.link} to="/redux" onClick={closeSideBar}>Redux</Link>
      <Link className={styles.link} to="/pong" onClick={closeSideBar}>Pong</Link>
      <Link className={styles.link} to="/graph" onClick={closeSideBar}>Graph</Link>
      <Link className={styles.link} to="/applemusic" onClick={closeSideBar}>AppleMusic</Link>
      <Link className={styles.link} to="/tictactoe" onClick={closeSideBar}>TicTacToe</Link>
      
     
      <span className={styles.counterRow}>
        <input
          min="0" max="100" step="1"
          type='range'
          value={counter}
          onChange={handleChange}
          onMouseUp={handleInput}
          onTouchEnd={handleInput}>
        </input>
      </span>
      <span className={styles.counter}>{counter}</span>
    </Menu>
  );
}

SideBar.propTypes = {
  counterDefault: PropTypes.number
};

SideBar.defaultProps = {
  counterDefault:12
};

export default SideBar;

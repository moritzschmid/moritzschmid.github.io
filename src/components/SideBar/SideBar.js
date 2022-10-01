import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { elastic as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom';

import './SideBar.css';

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
    <Menu className='Menu'
    isOpen={isOpen}
    onOpen={handleIsOpen}
    onClose={handleIsOpen}>
     
      <Link to="/" onClick={closeSideBar}>Home</Link>
      <Link to="/react" onClick={closeSideBar}>React</Link>
      <Link to="/redux" onClick={closeSideBar}>Redux</Link>
      <Link to="/pong" onClick={closeSideBar}>Pong</Link>
      
     
      <span>
        <input
          className='counter'
          min="0" max="100" step="1"
          type='range'
          value={counter}
          onChange={handleChange}
          onMouseUp={handleInput}
          onTouchEnd={handleInput}>
        </input>
      </span>
      <span className='counter'>{counter}</span>
    </Menu>
  );
}

SideBar.propTypes = {
  counterDefault: PropTypes.number
};

SideBar.defaultProps = {};

export default SideBar;

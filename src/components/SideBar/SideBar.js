import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { elastic as Menu } from 'react-burger-menu';

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

  return (
    <Menu className='Menu'>
      {/*
      <a className="menu-item" href="/reactsample">
        Sample
      </a>
      */}
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

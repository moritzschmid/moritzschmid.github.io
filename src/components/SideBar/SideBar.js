import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { elastic as Menu } from 'react-burger-menu';

import './SideBar.css';

const SideBar = (props) => {
  
  const [counter, setCounter] = useState(props.counterDefault);
  const handleChange = event => setCounter(event.target.value);
  const handleInput = event =>   props.callBack(event.target.value);

  return (  
    <Menu className='menu'>
      <a className="menu-item" href="/reactsample">
        Sample
      </a>
      <input
          className='counter'
          min="0" max="60" step="1"
          type='range'
          value={counter}
          onChange={handleChange}
          onMouseUp={handleInput}
          onTouchEnd={handleInput}>
          </input>
      <span className='counter'>{counter}</span>
    </Menu>  
  );
}

SideBar.propTypes = {
  counterDefault: PropTypes.number
};

SideBar.defaultProps = {};

export default SideBar;

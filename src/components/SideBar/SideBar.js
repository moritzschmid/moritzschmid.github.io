import React from 'react';
import PropTypes from 'prop-types';
import { elastic as Menu } from 'react-burger-menu';

import './SideBar.css';

const SideBar = () => (
  
  <Menu>
    <a className="menu-item" href="/reactsample">
      Sample
    </a>
  </Menu>
  
  
);

SideBar.propTypes = {};

SideBar.defaultProps = {};

export default SideBar;

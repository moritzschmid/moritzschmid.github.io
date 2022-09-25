import React from 'react';
import './Header.css';

const Header = ({counter}) => {
  return (
    <div className="Header" data-testid="Header">
      moritzschmid.github.io
      <span className='counter'>{counter}</span>
    </div>);
}

export default Header;

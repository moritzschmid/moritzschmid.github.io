import React from 'react';
import './Header.css';

const Header = ({counter}) => {
  return (
    <div className="Header" data-testid="Header"> 
      <div className="innerHeader_spacer">&nbsp;</div>
      <div className="innerHeader">
      moritzschmid.github.io
      <span className='counter'>{counter}</span>
      </div>
    </div>);
}

export default Header;

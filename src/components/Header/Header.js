import React from 'react';
import './Header.css';

const Header = ({counter}) => {
  return (
    <div className="Header" data-testid="Header"> 
      <div class="innerHeader_spacer">&nbsp;</div>
      <div class="innerHeader">
      moritzschmid.github.io
      <span className='counter'>{counter}</span>
      </div>
    </div>);
}

export default Header;

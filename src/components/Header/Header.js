import React, { useState } from 'react';

import './Header.css';

const Header = (props) => {

  
  return (

    <div className="Header" data-testid="Header">
      moritzschmid.github.io
      <span className='counter'>{props.counter}</span>
     
    </div>
  )
    ;

}


export default Header;

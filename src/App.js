import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import React, { useState } from 'react';


function App() {
  var counterDefault = 5;
  const [lines, setLines] = useState(fillArray(counterDefault));
 
  const [counter, setCounter] = useState(counterDefault);


  const callBack  = val => { 
    console.log(val);
    setLines(fillArray(val));
    setCounter(val);
  }
  return (
    <div className="App" id="outer-container">
      <SideBar callBack={callBack} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Header counter={counter} ></Header>

      <header className="App-header" id="page-wrap  ">
        {/* <img src={logo} className="App-logo" alt="logo" />*/}
       
        {lines.map((object, i) =>
          <p key={i}>
            {object} Edit <code>src/App.js</code> and save to reload.
          </p>
        )}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function fillArray(ii) {
  let linenumbers = [];
  for (let i = 0; i < ii; i++) {
    linenumbers.push(i);

  }
  return linenumbers;
}

export default App;

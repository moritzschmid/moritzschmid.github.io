import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Links from './components/Links/Links'
import React, { useState, useEffect } from 'react';
import Content from './components/Content/Content';


function App() {
  var counterDefault = 5;

  const [counter, setCounter] = useState(counterDefault);
  const callBack = val => {
    console.log("callBack got type " + typeof (val));
    setCounter(val);
  }

  useEffect(() => { console.log("render App", counter); });

  return (
    <div className="App" id="outer-container">
      <SideBar counterDefault={counter} callBack={callBack} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Header counter={counter} ></Header>

      <header className="App-header" id="page-wrap  ">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Links></Links>
        <div className="spacer"></div>
        <Content counter={counter} title="redux" key="content1"></Content>
        <Content counter={counter} key="content2"></Content>
      </header>
    </div>
  );
}

export default App;

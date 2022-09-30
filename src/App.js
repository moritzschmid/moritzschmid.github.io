import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Links from './components/Links/Links'
import Pong from './components/Pong/Pong'
import React, { useState, useEffect } from 'react';
import Content from './components/Content/Content';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";



function App() {
  var counterDefault =  localStorage.getItem('counter') ?  parseInt(localStorage.getItem('counter')) : 5;

  const [counter, setCounter] = useState(counterDefault);
  const callBack = val => {
    console.log("callBack got type " + typeof (val));
    setCounter(val);
    localStorage.setItem('counter', val);

  }

  useEffect(() => { console.log("render App", counter); });

  return (
    <div className="App" id="outer-container">
      <SideBar counterDefault={counter} callBack={callBack} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Header counter={counter} ></Header>

      <header className="App-header" id="page-wrap  ">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}


        <Outlet></Outlet>
        <BrowserRouter>
          <Routes>
            <Route path="/"  >
              <Route path="/" element={<span><div id="cssAnchor"></div><Links></Links><div className="spacer">&nbsp;</div></span>} />
              <Route path="redux" element={<Content counter={counter} title="redux" key="content1"></Content>} />
              <Route path="react" element={<Content counter={counter} key="content2"></Content>} />
              <Route path="pong" element={<Pong/>} />
            </Route>
          </Routes>
        </BrowserRouter>


      </header>
    </div>
  );
}

export default App;

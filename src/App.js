import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import React, { useState , useEffect } from 'react';


function App() {
  var counterDefault = 5;
  const [lines, setLines] = useState(fillArray(counterDefault));
 
  const [counter, setCounter] = useState(counterDefault);


  const callBack  = val => { 
    console.log(val);
    setLines(fillArray(val));
    setCounter(val);
  }
  const [posts, setPosts] = useState([{title:"loading"}]);

  useEffect(() => {
    fetch('https://archive.org/services/search/v1/scrape?fields=title&q=title%3A%28react%29&and[]=subject%3A"software"&and[]=subject%3A"code"&count=100')
       .then((response) => response.json())
       .then((data) => {
          console.log(data.items);
          setPosts(data.items);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <div className="App" id="outer-container">
      <SideBar callBack={callBack} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Header counter={counter} ></Header>

      <header className="App-header" id="page-wrap  ">
        <img src={logo} className="App-logo" alt="logo" />
        Danke an das sabbernde etwas neben mir ;-)
        {posts.slice(0, counter).map((object, i) =>
          <p key={i}>
            <a href={'https://archive.org/details/'+object.identifier}>
              {object.title} 
            </a>
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

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';


function App() {
  return (
    <div className="App" id="outer-container">
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <Header></Header>

      <header className="App-header" id="page-wrap  ">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default App;

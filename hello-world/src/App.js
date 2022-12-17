import logo from './logo.svg';
import './App.css';
import {Greating} from './Components/Greating';
// import Greating from './Components/Greating';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Greating />
      <Welcome /> */}
      <Hello />
    </div>
  );
}

export default App;

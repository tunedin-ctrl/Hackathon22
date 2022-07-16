import logo from './logo.svg';
import './App.css';
import TerryCard from './Terry/TerryCard.js'

function App() {
  /**
   * TODO: 
   * Add TerryCard window to app
   * Implement load_data function in LoadTerryCard.js
   */
  return (
    <div className="App">
      <header className="App-header">
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

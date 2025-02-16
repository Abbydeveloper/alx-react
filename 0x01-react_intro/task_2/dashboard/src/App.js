import { getFullYear, getFooterCopy } from './utils';
import logo from './assets/logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
          <div>
            <label htmlFor="email" >Email:</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" />
          </div>
          <button>OK</button>
        </form>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;

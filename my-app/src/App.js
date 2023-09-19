import logo from './logo.svg';
import Title from './Title';
import Body from './Body';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
        <Body />
      </header>
    </div>
  );
}

export default App;

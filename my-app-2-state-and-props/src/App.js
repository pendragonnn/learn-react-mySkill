import './App.css';
// import ChatBox component
import ChatBox from './ChatBox';
// import Header component
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* use Header component and example of using stateful components */}
        <Header />
        {/* use Chatbox component and example of using props + implementing Nested Component concept*/}
        <ChatBox />
      </header>
    </div>
  );
}

export default App;

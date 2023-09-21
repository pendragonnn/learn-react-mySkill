import './App.css';
import Football from './Football';
import Garage from './Garage';
import Goal from './Goal';

function App() {
  const cars = ['Ford', 'BMW', 'Audi']

  return (
    <div className="App">
      <Football />
      <Goal isGoal={true} />
      <Garage cars={cars} />
    </div>
  );
}

export default App;

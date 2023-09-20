import logo from './logo.svg';
import './App.css';
import Product from './Product';

const phoneData = [
  {name: "iPhone X", price: 10000000, discount: 50},
  {name: "Oppo Find X", price: 14000000, discount: 30},
  {name: "Redmi Note X", price: 12000000, discount: 42},
  {name: "Vivo Y19", price: 5500000, discount: 5}
]

function App() {
  return (
    <div>
      {
        phoneData.map((phone, id) => (
          <Product key={id}
          name={phone.name}
          price={phone.price}
          discount={phone.discount} />
        ))
      }
    </div>
  );
}

export default App;

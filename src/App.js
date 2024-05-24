import logo from './logo.svg';
import './App.css';
import Products from './Products';
import {a, b} from './Products';  // Importing named exports

function App() {
  return (
    // console.log(a, b),
    <div className="App">
      <Products />
      
    </div>
  );
}

export default App;

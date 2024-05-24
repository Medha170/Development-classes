import logo from './logo.svg';
import './App.css';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Products />  {/* This is the component we imported */}
      </header>
      
    </div>
  );
}

export default App;

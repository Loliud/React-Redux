import React from 'react';
import './App.css';
import Products from './components/Products';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Products/>
      <div id="goAhead"><a href="#menu"></a></div>
    </div>
  );
}

export default App;

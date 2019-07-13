import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Products from './components/Products';
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

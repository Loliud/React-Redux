import React from 'react';
import './App.css';
import Products from './components/Products';
import Menu from './components/Menu';
import ListBuys from './components/ListBuys';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Products/>
      <ListBuys/>
      <Footer/>
      <div id="goAhead"><a href="#menu"></a></div>
    </div>
  );
}

export default App;

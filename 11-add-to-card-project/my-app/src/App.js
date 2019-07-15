import React from 'react';
import './App.css';
import ProductsContainer from './containers/ProductsContainer';
import Menu from './components/Menu';
import ListBuys from './components/ListBuys';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <ProductsContainer/>
      <ListBuys/>
      <Footer/>
      <div id="goAhead"><a href="#menu"></a></div>
    </div>
  );
}

export default App;

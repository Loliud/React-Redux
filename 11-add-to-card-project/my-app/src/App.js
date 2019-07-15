import React from 'react';
import './App.css';
import ProductsContainer from './containers/ProductsContainer';
import Menu from './components/Menu';
import ListBuysContainer from './containers/ListBuysContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <ProductsContainer/>
      <ListBuysContainer/>
      <Footer/>
      <div id="goAhead"><a href="#menu"></a></div>
    </div>
  );
}

export default App;

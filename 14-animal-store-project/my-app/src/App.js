import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Products from './components/products/products';
class App extends Component {

  render() {
    return (
      <div className="App">
        < Menu />
        <Products />
      </div>
    );

  }

}

export default App;

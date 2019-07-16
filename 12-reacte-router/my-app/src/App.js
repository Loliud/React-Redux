import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import About from './components/About.js';
import Products from './components/Products.js';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>

      <Route path="/"  exact component={Home} />
      <Route path="/about"  component={About} />
      <Route path="/products"  component={Products} />
    </Router>


  );
}

export default App;

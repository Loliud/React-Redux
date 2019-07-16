import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import About from './components/About.js';
import Products from './components/Products.js';
import Home from './components/Home';
import NotFound from './components/NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route component={NotFound} />
        </Switch>


      </div>


    </Router>


  );
}

export default App;

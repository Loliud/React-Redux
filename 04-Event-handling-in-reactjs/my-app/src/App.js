import React, { Component } from 'react';
import Header from './components/Header';
import TestButton from './components/TestButton';
import AddProduct from './components/AddProduct';
import ListItem from './components/ListItem';

class App extends Component {
  constructor(props){
    super(props);
    
  }

  onClick() {
    console.log('Hello world');
  }

  render() {
    return (

      <div className="App">
        <Header />
        <TestButton>Hello World</TestButton>
        <AddProduct/>
        <ListItem/>
      </div>
    );

  }
}

export default App;

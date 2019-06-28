import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TestButton from './components/TestButton';
// import AddProduct from './components/AddProduct';
import { FormGroup, Input, Button } from 'reactstrap';
class App extends Component {
  constructor(props){
    super(props);
    this.addProduct = this.addProduct.bind(this);
  }

  onClick() {
    console.log('Hello world');
  }
  addProduct(){
    console.log(this.name);
}

  render() {
    return (

      <div className="App">
        <Header />
        <TestButton>Hello World</TestButton>

        <FormGroup>
          <Input type="text" name="add"/>
          <Button onClick={this.addProduct}>Submit</Button>

        </FormGroup>



      </div>
    );

  }



}

export default App;

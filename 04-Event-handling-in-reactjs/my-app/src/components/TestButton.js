import React from 'react';
import { Button } from 'reactstrap';

export default class TestButton extends React.Component {
  constructor(props){
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }


  // xu ly su kien
  sayHi(){
    alert(this.props.children);
  }
  sayHello(){
    alert(this.props.children + ' == konichiwa');
  }

  // lay value tu input , ...

  onAddProduct(){
    
  }
  

  render() {
    return (
      <div>    
        {/* cach 1 : dung arrow function */}
        <Button color="success" onClick={()=>{this.sayHi()}}>Click me!</Button>
        {/* cach 2: dung bind o trong constructor */}
        <Button color="warning" onClick={this.sayHello}>Click me!</Button>
      </div>
    );
  }
}
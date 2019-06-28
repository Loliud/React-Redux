import React from 'react';
import {  FormGroup, Input,Button  } from 'reactstrap';
export default class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.addProduct = this.addProduct.bind(this);

    }
    addProduct(){
        console.log(this.refs.name);
    }



  render() {



    return (
      
        <FormGroup>
         <Input type="text" ref="name" id="exampleEmail"/>
          <Button onClick={this.addProduct}>Submit</Button>
          
        </FormGroup>
        
    );
  }
}
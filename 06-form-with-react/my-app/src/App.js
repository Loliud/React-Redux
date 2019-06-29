import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input,  Toast, ToastBody, ToastHeader} from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      email: '',
      password: '',
      gender: 0,
      description: '',
      language: 'vi',
      status: false
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setReset = this.setReset.bind(this);
  }

  onHandleChange(event){
      let target = event.target;
      let name = target.name;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      console.log(value);
      this.setState({
        [name] : value
      });
    
      
  }
  // ngan chan submit form mac dinh 
  onSubmit(event){
    
    event.preventDefault();
    console.log(this.state);
  }
  // reset
  setReset(){
    this.setState({
      email: '',
      password: '',
      gender: 0,
      description: '',
      language: 'vi',
      status: false
    });
  }

  render() {
    return (
      <div className="p-3 bg-dark rounded">
        <Toast style={{fontSize: '16px', margin: '20px'}}>
          <ToastHeader style={{color: 'white'}} className="bg-primary">
            Form
      </ToastHeader>
          <ToastBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" onChange={this.onHandleChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword" >Password</Label>
                <Input type="password" name="password" onChange={this.onHandleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="gender" onChange={this.onHandleChange}>
                  <option value={0}>Male</option>
                  <option value={1}>Female</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="description" onChange={this.onHandleChange}/>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Language</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="language" value="vi" onChange={this.onHandleChange}/>
                    Vietnamese
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="language" value="ja" onChange={this.onHandleChange}/>
                    Japanese
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check> 
                    <Input type="radio" name="language" value="en" onChange={this.onHandleChange}/>
                    English
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="status" onChange={this.onHandleChange}/>
                  Agree
                 </Label>
              </FormGroup>
              <Button style={{width:"80px", marginRight: '5px'}}>Submit</Button>
              <Button type="reset"  style={{width:"80px"}} onClick={this.setReset}>Reset</Button>
            </Form>
          </ToastBody>
        </Toast>
      </div>

    );
  }
}



export default App;

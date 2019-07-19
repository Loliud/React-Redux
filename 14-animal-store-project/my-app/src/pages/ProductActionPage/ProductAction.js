import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import callApi from '../../utils/callerApi';
import {Link} from 'react-router-dom';
export default class ProductAction extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      id: '',
      name: '',
      price: '',
      status: false
    }



  }

  onChange = (event) =>{
      let target = event.target;
      let name = target.name;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        [name] : value
      });
  }

  onSave = (event) =>{
    event.preventDefault();
    console.log(this.state);
    callApi('AnimalStore', 'POST', this.state).then(res =>{
      let {history} = this.props;
      history.goBack();
    });
   
    
  }


  render() {
    let {name, price, status } = this.state;
    return (
      <Form style={{maxWidth: "50%"}}>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Tên sản phẩm</Label>
          <Col sm={10}>
            <Input type="text" name="name" value={name} onChange={this.onChange}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label  sm={2}>Giá ($)</Label>
          <Col sm={10}>
            <Input type="number" name="price" min={0} value={price} onChange={this.onChange}  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" name="status"  value={status}  onChange={this.onChange}/>
                Còn hàng 
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
            <Button color="success" onClick={this.onSave}>Lưu lại</Button>
            <Link to="/products" ><Button color="warning" >Trở lại</Button></Link>
        </FormGroup>
      </Form>
    );
  }
}
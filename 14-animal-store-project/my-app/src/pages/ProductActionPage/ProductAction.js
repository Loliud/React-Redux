import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import callApi from '../../utils/callerApi';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import *as actions from '../../actions/actions';
 class ProductAction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      price: '',
      status: ''
    }


  }

  componentWillMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
  
      
      callApi(`AnimalStore/${id}`, 'GET', null)
        .then((res) => {
          let { id, name, price, status } = res.data;
          this.setState({
            id: id,
            name: name,
            price: price,
            status: status
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }


  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  goBack = () =>{
    let {history} = this.props;
    history.goBack();
  }

  onSave = (event) => {
    event.preventDefault();
    if (this.state.id) {
      this.props.onUpdateProductRequest(this.state.id, this.state, this.goBack);
    } else {
      this.props.onAddProductRequest(this.state, this.goBack);
    }



  }


  render() {
    let { name, price, status } = this.state;
    return (
      <Form style={{ maxWidth: "50%" }}>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Tên sản phẩm</Label>
          <Col sm={10}>
            <Input type="text" name="name" value={name} onChange={this.onChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Giá ($)</Label>
          <Col sm={10}>
            <Input type="number" name="price" min={0} value={price} onChange={this.onChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" checked={status} name="status" value={status} onChange={this.onChange} />
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

let mapStateToProps = state => {
  return {
      products: state.products
  }
}

let distpatchMapToProps = (dispatch, props) =>{
  return {
      onUpdateProductRequest: (id, productIsUpdated, callback) =>{
          dispatch(actions.updateProductRequest(id, productIsUpdated, callback));
      },
      onAddProductRequest : (product, callback) =>{
        dispatch(actions.addProductRequest(product, callback));
      }
  }
}






export default  connect(mapStateToProps, distpatchMapToProps)(ProductAction);
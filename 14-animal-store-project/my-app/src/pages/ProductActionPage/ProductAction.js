import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ProductAction extends React.Component {
  render() {
    return (
      <Form style={{maxWidth: "50%"}}>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Tên sản phẩm</Label>
          <Col sm={10}>
            <Input type="text"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label  sm={2}>Mã số</Label>
          <Col sm={10}>
            <Input type="text" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label  sm={2}>Giá ($)</Label>
          <Col sm={10}>
            <Input type="number" min={0} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                Còn hàng 
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
            <Button color="success">Lưu lại</Button>
            <Button color="danger">Hủy bỏ</Button>
        </FormGroup>
      </Form>
    );
  }
}
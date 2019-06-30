import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Table } from 'reactstrap';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="box" style={{width: "100vw"}}>
        <h1 className="nameApp" style={{textAlign: "center"}}>Quản Lý Thư Viện</h1>
        <div>
          <Row style={{width: '60%', margin: 'auto'}}>
          {/* <Col sm="4">
            <div className="p-3 bg-info my-2 rounded">
              <Toast>
                <ToastHeader>
                  <h4>
                    Thêm sách
                </h4>
                </ToastHeader>
                <ToastBody>
                  <Form>
                    <FormGroup>
                      <Label for="title">Tên sách</Label>
                      <Input type="text" name="title" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="amount">Số lượng</Label>
                      <Input type="text" name="amount" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="status">Trạng thái</Label>
                      <Input type="select" name="status" >
                        <option>Được mua nhiều</option>
                        <option>Bình thường</option>
                        <option>Kém</option>
                      </Input>
                    </FormGroup>
                    <div style={{ textAlign: "center" }}>
                      <Button color="success">Lưu lại</Button>
                      <Button color="danger">Hủy bỏ</Button>
                    </div>
                  </Form>
                </ToastBody>
              </Toast>
            </div>

          </Col> */}
          <Col  style={{margin: 'auto'}} sm="12" >
            <Button color="primary">Thêm sách mới</Button>
            <Row style={{ marginTop: "1rem" }}>
              <Col sm="6">
                <InputGroup>
                  <Input type="text" name="search" placeholder="Nhập từ khóa ..." />
                  <Button color="primary">Tìm</Button>
                </InputGroup>
              </Col>
              <Col sm="6">
                <UncontrolledButtonDropdown>
                  <DropdownToggle color="primary" caret>
                    Sắp xếp
      </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Tên A-Z</DropdownItem>
                    <DropdownItem>Tên Z-A</DropdownItem>
                    <DropdownItem>Trạng thái</DropdownItem>
                    <DropdownItem>Số lượng nhiều nhất</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </Col>
            </Row>
            <Row style={{ marginTop: '3rem' }}>
              <Table bordered>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên sách</th>
                    <th>Trạng thái</th>
                    <th>Số lượng</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td><Input type="text" name="searchName" /></td>
                    <td>
                      <UncontrolledButtonDropdown >
                        <DropdownToggle caret color="primary">
                          Trạng thái
                      </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Được mua nhiều</DropdownItem>
                          <DropdownItem>Bình thường </DropdownItem>
                          <DropdownItem>Kém</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <Button color="danger">Xóa</Button>
                      <Button color="warning">Sửa</Button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>  <Button color="danger">Xóa</Button>
                      <Button color="warning">Sửa</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>  <Button color="danger">Xóa</Button>
                      <Button color="warning">Sửa</Button></td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Col>
          </Row>
          </div>
      </div>
    );
  }
}

export default App;

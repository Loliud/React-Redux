import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import { Toast, ToastBody, ToastHeader, Table, Button, Badge } from 'reactstrap';
class App extends Component {

  render() {
    return (
      <div className="App">
        < Menu />
        <Button color="warning">Thêm sản phẩm</Button>
        <div className="p-3 bg-info my-2 rounded">
          <Toast style={{ maxWidth: "100%", margin: "auto" }}>
            <ToastHeader>
              <h3>Danh sách sản phẩm</h3>
            </ToastHeader  >
            <ToastBody >
              <Table bordered>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Mã</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>3847384</td>
                    <td>Mèo ấn độ</td>
                    <td>1000 $</td>
                    <td><Badge color="success">Còn hàng</Badge></td>
                    <td><Button color="success">Sửa</Button><Button color="danger">Xóa</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>3847384</td>
                    <td>Mèo ấn độ</td>
                    <td>1000 $</td>
                    <td><Badge color="success">Còn hàng</Badge></td>
                    <td><Button color="success">Sửa</Button><Button color="danger">Xóa</Button></td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>3847384</td>
                    <td>Mèo ấn độ</td>
                    <td>1000 $</td>
                    <td><Badge color="success">Còn hàng</Badge></td>
                    <td><Button color="success">Sửa</Button><Button color="danger">Xóa</Button></td>
                  </tr>
                </tbody>
              </Table>
            </ToastBody>
          </Toast>
        </div>
      </div>
    );

  }

}

export default App;

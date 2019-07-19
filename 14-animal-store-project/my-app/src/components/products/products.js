import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Table, Button } from 'reactstrap';
import ProductItem from '../Item/ProductItem';
import {Link} from 'react-router-dom';

class Products extends Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        let products = [
            {
                id: '3189233',
                name: 'Mèo ấn độ',
                price: 2000,
                status: true
            },
            {
                id: '232133',
                name: 'Mèo thái lan',
                price: 1000,
                status: true
            },
            {
                id: '923733',
                name: 'Chó phú quốc',
                price: 3000,
                status: false
            },
            {
                id: '99923233',
                name: 'Chó Husky',
                price: 4000,
                status: true
            }
        ];
        products = products.map((item, index )=>{
            return (
                <ProductItem product={item} index={index}/>
            );
        });

    
        return (
            <div>
                <Link to="/product/add"><Button color="warning">Thêm sản phẩm</Button> </Link>
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
                                    {products}
                                </tbody>
                            </Table>
                        </ToastBody>
                    </Toast>
                </div>
            </div>
        );
    }
}

export default Products;
import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Table, Button, Badge } from 'reactstrap';
import ProductItem from '../Item/ProductItem';

class Products extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
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
                                    <ProductItem/>
                                    <ProductItem/>
                                    <ProductItem/>
                                    <ProductItem/>
                                    <ProductItem/>
                                    <ProductItem/>
                                    <ProductItem/>
                                    <ProductItem/>
                                    <ProductItem/>
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
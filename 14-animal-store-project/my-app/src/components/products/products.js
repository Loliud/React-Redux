import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Table, Button } from 'reactstrap';
import ProductItem from '../Item/ProductItem';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Products extends Component {
    constructor(props) {
        super(props)
    }
    

    render() {
      
        let {products} = this.props;
        products = products.map((item, index )=>{
            return (
                <ProductItem product={item} index={index} key={index}/>
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

let mapStateToProps = state =>{
    return {
        products : state.products
    }
}

export default connect(mapStateToProps,null)(Products);
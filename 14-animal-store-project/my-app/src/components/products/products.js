import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Table, Button } from 'reactstrap';
import ProductItem from '../Item/ProductItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import *as actions from '../../actions/actions';




class Products extends Component {
    constructor(props) {
        super(props)
       
    }


    componentDidMount() {
        // nen de ham goi nay trong componentDidMount để tránh bất đồng bộ
      this.props.onFetchProductsRequest();

    }

    onDelete = (id) =>{
        if(window.confirm('Bạn có chắc muốn xóa sản phẩm')){
            this.props.onDeleteProductRequest(id);
        }

    }
    

   


    render() {
        let {products} = this.props;
        products = products.map((item, index) => {
            return (
                <ProductItem product={item} index={index} key={index} onDelete={this.onDelete} />
            );
        });


        return (
            <div>
                <Link to="/product/add"><Button color="warning">Thêm sản phẩm</Button> </Link>
                <div className="p-5 bg-info my-2 rounded">
                    <Toast style={{ maxWidth: "60%", margin: "auto" }}>
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

let mapStateToProps = state => {
    return {
        products: state.products
    }
}

let distpatchMapToProps = (dispatch, props) =>{
    return {
        onFetchProductsRequest: () =>{
            dispatch(actions.onFetchProductsRequest());
        },
        onDeleteProductRequest: (id) =>{
            dispatch(actions.deleteProductRequest(id));
        },
        onUpdateProductRequest: (id, productIsUpdated) =>{
            dispatch(actions.updateProductRequest(id, productIsUpdated));
        }
    }
}



export default connect(mapStateToProps, distpatchMapToProps)(Products);
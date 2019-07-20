import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Table, Button } from 'reactstrap';
import ProductItem from '../Item/ProductItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import callApi from '../../utils/callerApi';


class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }


    componentDidMount() {
        // nen de ham goi nay trong componentDidMount để tránh bất đồng bộ
        callApi('AnimalStore', 'GET', null)
        .then(res => {
            this.setState({
                products: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        });

    }

    onDelete = (id) =>{
        let {products} = this.state;
        if(window.confirm('Bạn có chắc muốn xóa sản phẩm')){
            callApi(`AnimalStore/${id}`, 'DELETE', null)
            .then((res) =>{
                console.log('Xoa thanh cong');
            })
            .catch((err) =>{
                console.log(err);
            });
            console.log(id);
            let index = this.findIndex(products, id);
            products.splice(index, 1);
            this.setState({
                products: products
            });
        }

    }

    findIndex = (products, id) =>{
        let result = -1;
        products.forEach((product, index)=>{
            if(product.id === id){
                result = index;
            }
        }); 
        return result;
    }


    render() {
        let { products } = this.state;
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

export default connect(mapStateToProps, null)(Products);
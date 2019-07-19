import React, { Component } from 'react';
import { Button, Badge } from 'reactstrap';


class ProductItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        let {product, index} = this.props
        let {status} = product;
        
        return (
            <tr>
                <th scope="row">{index}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} $</td>
                <td><Badge color={status ? 'success' : 'dark'}>{status === true ? 'Còn hàng' : ' Hết hàng'}</Badge></td>
                <td><Button color="success">Sửa</Button><Button color="danger">Xóa</Button></td>
            </tr>

        );
    }
}

export default ProductItem;
import React, { Component } from 'react';
import { Button, Badge } from 'reactstrap';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    constructor(props) {
        super(props)
    }

    onDelete = (id) =>{
        this.props.onDelete(id);
    }

    render() {

        let {product, index} = this.props
        let {status} = product;
        
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} $</td>
                <td><Badge color={status ? 'success' : 'dark'}>{status === true ? 'Còn hàng' : ' Hết hàng'}</Badge></td>
                <td> <Link style={{color: "white"}} to={`/product/${product.id}/edit`}>  <Button color="success">Sửa</Button></Link><Button color="danger" onClick={() => this.onDelete(product.id)}>Xóa</Button></td>
            </tr>

        );
    }
}

export default ProductItem;
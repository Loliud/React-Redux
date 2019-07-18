import React, { Component } from 'react';
import { Button, Badge } from 'reactstrap';


class ProductItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <tr>
                <th scope="row">1</th>
                <td>3847384</td>
                <td>Mèo ấn độ</td>
                <td>1000 $</td>
                <td><Badge color="success">Còn hàng</Badge></td>
                <td><Button color="success">Sửa</Button><Button color="danger">Xóa</Button></td>
            </tr>

        );
    }
}

export default ProductItem;
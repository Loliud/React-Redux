import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link, Route, Prompt } from 'react-router-dom';
import Product from './Product';


class Products extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        let products = [
            {
                id: 'd231dbh',
                name: 'Toi di code dao',
                price: '100$',
                description: 'hieu biet ve cong nghe thong tin'

            },
            {
                id: 'd2318237bh',
                name: 'Chi dau',
                price: '200$',
                description: 'Van hoc thoi xua'

            },
            {
                id: 'dbnhd8989hd',
                name: 'Luoc su van vat',
                price: '50$',
                description: 'Hieu biet nguon goc ra doi van vat'

            }
        ];

        let { match } = this.props;
        let url = match.path;


        let showProducts = products.map((product, index) => {
            return (
                <Link key={index} to={`${url}/${product.id}`}><ListGroupItem> {index} - {product.name}  - {product.price}</ListGroupItem></Link>
            );
        });

        return (
            <div>
                <h1>Danh sach san pham</h1>
                <ListGroup>
                    {showProducts}
                </ListGroup>
                <Route path={`${url}/:name`} component={Product} />
                <Prompt when={true} message={location => `ban thuc su muon den ${location.pathname}`} />
            </div>
        )
    }
}


export default Products;
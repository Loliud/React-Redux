import React, { Component } from 'react';
import Products from '../components/Products';
import { connect } from 'react-redux';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col
} from 'reactstrap';
import PropTypes from 'prop-types';





class ProductsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let listProducts = this.props.listProducts;
        return (
            <Products>
                {this.showProducts(listProducts)}
            </Products>
        );
    }


    showProducts(products) {
        products = products.map((item, index) => {
            return (
                <Col sm="4" style={{ marginTop: '5rem' }} key={index}>
                    <Card>
                        <CardImg top width="100%" src={item.link} alt="Card image cap" />
                        <CardBody>
                            <CardTitle style={{ fontWeight: 'bold', fontSize: '20px' }}>{item.name}</CardTitle>
                            <CardText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam adipisci distinctio iure tempora, dolor odio excepturi suscipit provident asperiores, assumenda libero impedit dolorum dolores maiores nostrum expedita? Esse, voluptate recusandae?</CardText>
                            <Button color="primary">Add to card</Button>
                        </CardBody>
                    </Card>
                </Col>
            );
        });
        return products;
    }

};

let itemStatetoProps = (state) => {
    return {
        listProducts: state.products
    };
}

// kiem tra du lieu 

ProductsContainer.propTypes ={
    listProducts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}






export default connect(itemStatetoProps, null)(ProductsContainer);
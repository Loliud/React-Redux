import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col, Row, Container
} from 'reactstrap';
import { connect } from 'react-redux';



class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let listProducts = this.props.listProducts;
       
        listProducts = listProducts.map((item, index) => {
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
        return (
            <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
                <Row style={{ marginBottom: "3rem" }}>
                    {listProducts}
                </Row>
            </Container>
        );
    }

};

let itemStatetoProps = (state) => {
    return {
        listProducts: state.products
    };
}



export default connect(itemStatetoProps, null)(Products);
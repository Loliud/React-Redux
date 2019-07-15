import React, { Component } from 'react';
import { Row, Container} from 'reactstrap';


class Products extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    
        return (
            <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
                <Row style={{ marginBottom: "3rem" }}>
                    {this.props.children}
                </Row>
            </Container>
        );
    }

};




export default Products;
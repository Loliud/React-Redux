import React, { Component } from 'react';
import { Button, InputGroup, Input , Col } from 'reactstrap';


class Search extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <Col sm="6">
                <InputGroup>
                    <Input type="text" name="search" placeholder="Nhập từ khóa ..." />
                    <Button color="primary">Tìm</Button>
                </InputGroup>
            </Col>


        );
    }
}

export default Search;

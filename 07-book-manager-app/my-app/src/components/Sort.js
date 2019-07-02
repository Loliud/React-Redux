import React, { Component } from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Col } from 'reactstrap';


class Sort extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <Col sm="6">
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="primary" caret>
                        Sắp xếp
                 </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Tên A-Z</DropdownItem>
                        <DropdownItem>Tên Z-A</DropdownItem>
                        <DropdownItem>Trạng thái</DropdownItem>
                        <DropdownItem>Số lượng nhiều nhất</DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </Col>

        );
    }
}

export default Sort;

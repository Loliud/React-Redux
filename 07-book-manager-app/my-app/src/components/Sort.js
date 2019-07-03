import React, { Component } from 'react';
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Col } from 'reactstrap';


class Sort extends Component {
    constructor(props) {
        super(props);
        this.onSort = this.onSort.bind(this);
    }


    onSort(sortBy, sortValue){
       
        this.props.onSort(sortBy, sortValue);
    }


    render() {

              
        return (
            

            <Col sm="6">
                <UncontrolledButtonDropdown>
                    <DropdownToggle color="primary" caret>
                        Sắp xếp
                 </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => this.onSort('name', 1)}>Tên A-Z</DropdownItem>
                        <DropdownItem onClick={() => this.onSort('name', -1)}>Tên Z-A</DropdownItem>
                        {/* <DropdownItem onClick={() => this.onSort('status', 1)}>Trạng thái: Medium - Hot</DropdownItem>
                        <DropdownItem onClick={() => this.onSort('status', -1)}>Trạng thái: Hot - Medium</DropdownItem> */}
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </Col>

        );
    }
}

export default Sort;

import React, { Component } from 'react';
import { Button, Input, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Row, Table, Badge } from 'reactstrap';

class ListBook extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const listBooks = this.props.books;
        // tra ve moi item book trong danh sach
        let elements = listBooks.map((book, index) => {
            return <tr key={index} style={{textAlign: 'center'}}>
                <th scope="row">{index + 1}</th>
                <td style={{textAlign: 'left'}}>{book.name}</td>
                <td><Badge color={book.status === 'Hot' ? 'success' : 'info'} pill>{book.status}</Badge></td>
                <td>{book.amount}</td>
                <td>
                    <Button color="danger">Xóa</Button>
                    <Button color="warning">Sửa</Button>
                </td>
            </tr>
        });
        return (
            <Row style={{ marginTop: '3rem' }}>
                <Table bordered>
                    <thead>
                        <tr style={{textAlign: 'center'}}>
                            <th>STT</th>
                            <th>Tên sách</th>
                            <th>Trạng thái</th>
                            <th>Số lượng</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td><Input type="text" name="searchName" /></td>
                            <td style={{textAlign: 'center'}}>
                                <UncontrolledButtonDropdown >
                                    <DropdownToggle caret color="primary">
                                        Trạng thái
                      </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Được mua nhiều</DropdownItem>
                                        <DropdownItem>Bình thường </DropdownItem>
                                        <DropdownItem>Kém</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        {elements}


                    </tbody>
                </Table>
            </Row>
        );

    }
}

export default ListBook;

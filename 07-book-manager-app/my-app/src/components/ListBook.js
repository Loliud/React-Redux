import React, { Component } from 'react';
import { Button, Input, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Row, Table, Badge } from 'reactstrap';

class ListBook extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const listBooks = this.props.books;
        console.log(listBooks);
        // tra ve moi item book trong danh sach
        let elements = listBooks.map((book, index) => {
            return <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{book.name}</td>
                <td style={{textAlign: 'center'}}><Badge color={book.status === 'Hot' ? 'success' : 'info'} pill>{book.status}</Badge></td>
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
                        <tr>
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
                            <td>
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

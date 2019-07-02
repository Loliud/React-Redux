import React, { Component } from 'react';
import { Button, Input, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Row, Table, Badge } from 'reactstrap';

class ListBook extends Component {
    constructor(props) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.onRemove = this.onRemove.bind(this);

    }

    changeStatus(listBooks, index) {
        if (listBooks[index].status === 'Hot') {
            listBooks[index].status = 'Medium';
        } else {
            listBooks[index].status = 'Hot';
        }
        this.props.onChangeStatus(listBooks);

    }
    onRemove(listBooks, index) {
        listBooks.splice(index, 1);
        this.props.onRemoveItem(listBooks);
    }


    render() {
        const listBooks = this.props.books;
        // tra ve moi item book trong danh sach
        let elements = listBooks.map((book, index) => {
            return <tr key={index} style={{ textAlign: 'center' }} className="item">
                <th scope="row">{index + 1}</th>
                <td style={{ textAlign: 'left' }}>{book.name}</td>
                <td><Badge
                    style={{ cursor: 'pointer' }}
                    color={book.status === 'Hot' ? 'success' : 'info'} pill
                    onClick={() => this.changeStatus(listBooks, index)}
                >{book.status}</Badge></td>
                <td>{book.amount}</td>
                <td >
                    <Button style={{ marginRight: '0.4rem', color: 'white' }}
                        color="warning"
                    ><i class="fas fa-edit"></i>Sửa</Button>

                    <Button color="danger"
                        style={{ color: 'white' }}
                        onClick={() => this.onRemove(listBooks, index)}
                    ><i class="far fa-trash-alt"></i>  Xóa</Button>

                </td>
            </tr>
        });
        return (
            <Row style={{ marginTop: '3rem' }}>
                <Table bordered>
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
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
                            <td style={{ textAlign: 'center' }}>
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

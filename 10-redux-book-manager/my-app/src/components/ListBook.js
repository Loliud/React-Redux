import React, { Component } from 'react';
import { Button, Input, FormGroup, Row, Table, Badge } from 'reactstrap';
import { connect } from 'react-redux';
import *as actions from '../actions/index';

class ListBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterName: '',
            filterStatus: ''
        }

        this.changeStatus = this.changeStatus.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    changeStatus(id) {

        this.props.onChangeStatus(id);

    }
    onRemove(id) {
        this.props.onRemoveBook(id);

    }

    onUpdate(id) {
        let index;
        for (let i = 0; i < this.props.books.length; i++) {
            if (this.props.books[i].id === id) {
                index = i;
            }
        }
        let taskEdit = { ...this.props.books[index] };
        this.props.onEditTask(taskEdit);
        this.props.onOpenForm();

    }

    onChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            filterName : name === 'filterName' ? value : this.state.filterName,
            filterStatus : name === 'filterStatus' ? value : this.state.filterStatus
        });
       
        this.props.onFilterItem(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        );
       
    }

    render() {
        let listBooks = this.props.books;
        let itemSearch = this.props.itemSearch;
        let filterItem = this.props.filterItem;
        let {sortBy, sortValue} = this.props.selectSort;
        // loc tren table
        if(filterItem.filterName){
            listBooks =  listBooks.filter((item) =>{
                return item.name.toLowerCase().indexOf(filterItem.filterName.toLowerCase()) !== -1;
            }); 
        }
        if(filterItem.filterStatus){
            listBooks =  listBooks.filter((item) =>{
                return item.status === filterItem.filterStatus;
            }); 
        }

        // search item
        if(itemSearch){
            listBooks =  listBooks.filter((item) =>{
                return item.name.toLowerCase().indexOf(itemSearch.toLowerCase()) !== -1;
            }); 
        }

        //sort
        if(sortBy === 'name'){
                listBooks =  listBooks.sort((a, b)=>{
                    if(a.name > b.name) return sortValue;
                    if(a.name < b.name) return -sortValue;
                    else{
                        return 0;
                    }
                });
           
        }
        
        //tra ve moi item book trong danh sach
        let elements = listBooks.map((book, index) => {
            return <tr key={index} style={{ textAlign: 'center' }} className="item">
                <th scope="row">{index + 1}</th>
                <td style={{ textAlign: 'left' }}>{book.name}</td>
                <td><Badge
                    style={{ cursor: 'pointer' }}
                    color={book.status === 'Hot' ? 'success' : 'info'} pill
                    onClick={() => this.changeStatus(book.id)}
                >{book.status}</Badge></td>
                <td>{book.amount}</td>
                <td >
                    <Button style={{ marginRight: '0.4rem', color: 'white' }}
                        color="warning"
                        onClick={() => this.onUpdate(book.id)}
                    >Sửa</Button>

                    <Button color="danger"
                        style={{ color: 'white' }}
                        onClick={() => this.onRemove(book.id)}
                    >Xóa</Button>
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
                            <td><Input type="text" name="filterName" value={this.state.filterName} onChange={this.onChange} /></td>
                            <td style={{ textAlign: 'center' }}>
                                <FormGroup >
                                    <Input type="select" name="filterStatus" value={this.state.filterStatus} onChange={this.onChange}>
                                        <option value="">Lựa chọn</option>
                                        <option value="Hot">Hot</option>
                                        <option value="Medium">Medium</option>
                                    </Input>
                                </FormGroup>
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
let itemStatetoProps = (state) => {
    return {
        books: state.tasks,
        itemSearch: state.itemSearch,
        filterItem: state.filterItem,
        selectSort: state.selectSort
    }
}

let dispatchToProps = (dispatch, props) => {
    return {
        onChangeStatus: (id) => {
            dispatch(actions.onChangeStatus(id));
        },
        onRemoveBook: (id) => {
            dispatch(actions.onRemoveBook(id));
        },
        onEditTask: (task) => {
            dispatch(actions.onEditTask(task));

        },
        onOpenForm: () => {
            dispatch(actions.onOpenForm());
        },
        onFilterItem: (filterName, filterStatus) =>{
            dispatch(actions.onFilterItem(filterName, filterStatus))
        }

    }
}


export default connect(itemStatetoProps, dispatchToProps)(ListBook);

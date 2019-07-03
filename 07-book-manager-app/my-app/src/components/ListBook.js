import React, { Component } from 'react';
import { Button, Input,FormGroup,  Row, Table, Badge } from 'reactstrap';

class ListBook extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            filterName: '',
            filterStatus: ''
        }

        this.changeStatus = this.changeStatus.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onChange = this.onChange.bind(this);

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

    onUpdate(id) {
        this.props.onUpdate(id);
        
    }

    onChange(event){
        let target = event.target;
        let value = target.value;
        let name = target.name;
        
        let filter = {
            [name] : value
        };
        console.log(filter);
        this.setState({
            filterName: filter.filterName,
            filterStatus: filter.filterStatus
        });
        this.props.onFilter(filter);

    }

    render() {
        let listBooks = this.props.books;
        const filterItem = this.props.itemFilter;
        
        if(filterItem !== null){
           if(filterItem.filterName){
            listBooks = listBooks.filter((task)=>{
                if(task.name.toLowerCase().indexOf(filterItem.filterName.toLowerCase()) !== -1){
                    return task;
                }
                
            });
           }
           if(filterItem.filterStatus){
               listBooks = listBooks.filter((item)=>{
                    if(filterItem.filterStatus === item.status){
                        return item;
                    }
               });
           }
            
            
        }
      
    
       
        console.log(filterItem);
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
                        onClick={() => this.onUpdate(book.id)}
                    >Sửa</Button>

                    <Button color="danger"
                        style={{ color: 'white' }}
                        onClick={() => this.onRemove(listBooks, index)}
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

export default ListBook;

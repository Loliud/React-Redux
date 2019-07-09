import React, { Component } from 'react';
import { Button, Input,FormGroup,  Row, Table, Badge } from 'reactstrap';
import {connect} from 'react-redux';

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

    changeStatus(id) {
        
        this.props.onChangeStatus(id);

    }
    onRemove(id) {
       
       this.props.onRemoveItem(id);
    }

    onUpdate(id) {
        this.props.onUpdate(id);
        
    }

    onChange(event){
        let target = event.target;
        let value = target.value;
        let name = target.name;
        
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus,
        );
        this.setState({
            [name] : value
          });

    }

    render() {
        let listBooks = this.props.books;
        let sortBy = this.props.sortBy;
        let sortValue = this.props.sortValue;
      
        const filterItem = this.props.itemFilter;
    
        if(typeof(filterItem) === 'string'){
            listBooks = listBooks.filter((task)=>{
                
                return task.name.toLowerCase().indexOf(filterItem.toLowerCase()) !== -1
                
            });
        }
        else if(filterItem !== null){
           if(filterItem.filterName){
            listBooks = listBooks.filter((task)=>{
               return task.name.toLowerCase().indexOf(filterItem.filterName.toLowerCase()) !== -1  
            });
           }   
        }
        
        if(filterItem && filterItem.filterStatus){
           
                listBooks = listBooks.filter((item)=>{
                        let result;
                     if(filterItem.filterStatus === item.status){
                         result = item;
                     }
                     return result;
                });
           
        }

        // sap xep
        if(sortBy === 'name'){
            listBooks.sort((a,b) =>{
                if(a.name > b.name){
                    return sortValue;
                }
                if(a.name < b.name){
                    return -sortValue;
                }
                    return 0;
                
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
let itemStatetoProps = (state) =>{
    return {
        books: state.tasks
    }
}
 

export default connect(itemStatetoProps, null)(ListBook);

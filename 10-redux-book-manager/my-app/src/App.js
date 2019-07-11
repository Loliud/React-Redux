import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import TaskForm from './components/TaskForm';
import Search from './components/Search';
import Sort from './components/Sort';
import ListBook from './components/ListBook';
import './App.css';

import *as actions from './actions/index';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      // neu trong local storage co data bua books thi se do data cho state
      books: [],
      taskEdit: null,
      filter: null,
      keyword: null,
      sortBy: null,
      sortValue: null
    }

    this.onToggleForm = this.onToggleForm.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSort = this.onSort.bind(this);
  }
  
  // truoc khi mount 
  
 

  // Exit task form
  onToggleForm(){
    this.props.onToggleForm();
  }

  // Submit task form
 
  // task form
  onExitTaskForm = () =>{
    this.props.onExitForm();
      
  }
  // mo task form de edit
  onOpenTaskForm = ()=>{
    this.props.onOpenForm();

  } 
  
 
  // remove 1 item in lists
  onRemoveItem(data){
    
    let listTasks = this.state.books;
    let index;
    listTasks.forEach((item)=>{
      if(item.id === data){
          index = listTasks.indexOf(item);
      }
    });
    listTasks.splice(index, 1);
    
    this.setState({
      books: listTasks
    });
    localStorage.setItem('books', JSON.stringify(listTasks));
    this.onExitTaskForm();

  }
  onUpdate(data){
    let listBooks = this.state.books;
    let editBook;
    listBooks.forEach((item) =>{
      if(item.id === data){
        editBook = item;
      }
    });
    this.setState({
      taskEdit: editBook
    });
    this.onOpenTaskForm();

  }
  onFilter(filterName, filterStatus){
   
    let filter = {
      filterName: filterName,
      filterStatus: filterStatus
    }
    this.setState({
      filter: filter
    });
   
  }
  onSearch(keyword){
    this.setState({
      keyword: keyword
    });
  }
  onSort(sortBy, sortValue){
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });
  }

  render() {
  
    let itemFilter = this.state.filter;
    let keyword = this.state.keyword;
    let sortBy = this.state.sortBy;
    let sortValue = this.state.sortValue;
   
    if(keyword){
      
      itemFilter = keyword;
    }
    let {isFormDisplay} = this.props;
    let taskForm = isFormDisplay === true ? <TaskForm
                                                      onExit={this.onExitTaskForm}
                                                      taskEdit={this.state.taskEdit}
                                                      /> : '';
    return (
      <div className="box">
        <h1 className="nameApp">Quản Lý Thư Viện</h1>
        <div>
          <Row style={{ width: '60%', margin: 'auto' }}>
            {taskForm}
            <Col style={{ margin: 'auto' }} sm={isFormDisplay === true ? '8': '12'}>
              <Button color="primary" onClick={this.onToggleForm} style={{marginRight: '0.5rem'}}>  Thêm sách mới</Button>
              <Row style={{ marginTop: "1rem" }}>
                <Search onSearch={this.onSearch}/>
                <Sort onSort={this.onSort} />
              </Row>
              <ListBook 
                      sortBy={sortBy} 
                      sortValue={sortValue}
                      itemFilter={itemFilter}
                      onFilter={this.onFilter}
                      onUpdate={this.onUpdate}
                      onRemoveItem={this.onRemoveItem}                
                      />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

let mapStatetoProps = (state) =>{
    return {
      isFormDisplay:  state.isFormDisplay
    }
}

let mapDispatchToProps = (dispatch, props) =>{
  return {
    onToggleForm : () =>{
      dispatch(actions.onToggleForm());
    },
    onExitForm : () =>{
      dispatch(actions.onExitForm());
    },
    onOpenForm : () =>{
      dispatch(actions.onOpenForm());
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);

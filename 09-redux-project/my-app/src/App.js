import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import TaskForm from './components/TaskForm';
import Search from './components/Search';
import Sort from './components/Sort';
import ListBook from './components/ListBook';
import './App.css';
import demo from './trainning/demo.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      // neu trong local storage co data bua books thi se do data cho state
      books: [],
      onDisplayForm : false,
      taskEdit: null,
      filter: null,
      keyword: null,
      sortBy: null,
      sortValue: null
    }
    this.onGenerateBook = this.onGenerateBook.bind(this);
    this.onToggleForm = this.onToggleForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSort = this.onSort.bind(this);
  }
  
  // truoc khi mount 
  componentWillMount(){
    if(localStorage && localStorage.getItem('books')){
      const books = JSON.parse(localStorage.getItem('books'));
      this.setState({
        books: books,
        
      });
    }
  }

  onGenerateBook(){
    let newBooks = [
      {
        id: 'ahdv6auy',
        name: 'Tuổi Thơ Dữ Dội',
        status: 'Hot',
        amount: 50
      },
      {
        id: 'ndadb8723',
        name: 'Chí Phèo',
        status: 'Hot',
        amount: 100
      },
      {
        id: 'm28n882d',
        name: 'Số đỏ',
        status: 'Medium',
        amount: 50
      },
      {
        id: 'm28f2f2d',
        name: 'Cánh Đồng Bất Tận',
        status: 'Hot',
        amount: 10
      },
      {
        id: 'f2f2f23f23',
        name: 'Giông Tố',
        status: 'Medium',
        amount: 60
      },
      {
        id: '23f238bf',
        name: 'Nỗi Buồn Chiến Tranh',
        status: 'Medium',
        amount: 20
      }
    ];
    // su dung local storage de luu du lien tren trinh duyet(nen luu duoi dang string)
    this.setState({
      books: newBooks
    });
    localStorage.setItem('books', JSON.stringify(newBooks));

  }

  // Exit task form
  onToggleForm(){
    if(this.state.taskEdit !== null){
      this.setState({
        taskEdit: null,
        onDisplayForm: true
      });
    }else{
      this.setState({
        onDisplayForm: !this.state.onDisplayForm
      });
    }
    
  }

  // Submit task form
  onSubmit(data){


    let listBooks = this.state.books;
    let key = 0;
    let index;
    listBooks.forEach((item, i)=>{
      if(item.id === data.id){
        key = 1;
        index = i;
      } 
    });
   
    if(key === 1){
     
      listBooks.splice(index, 1, data);
      this.setState({
        books: listBooks,
        onDisplayForm : false
      });
    }else{
      listBooks.push(data);
      this.setState({
        books: listBooks,
        onDisplayForm : false
      });
    }
   
    localStorage.setItem('books', JSON.stringify(listBooks));
    
  }
  // task form
  onExitTaskForm = () =>{
        this.setState({
          onDisplayForm: false,
          taskEdit: null
        });
  }
  // mo task form de edit
  onOpenTaskForm = ()=>{
    this.setState({
      onDisplayForm: true
    });

  } 
  // change status
  onChangeStatus(data){
    console.log(data);
    let listTasks = this.state.books;
    let index;
    listTasks.forEach((item)=>{
      if(item.id === data){
          index = listTasks.indexOf(item);
      }
    });
  
    if(listTasks[index].status === 'Hot'){
        listTasks[index].status = 'Medium';
    }else{
      listTasks[index].status = 'Hot';
    }
    this.setState({
      books: listTasks
    });
    localStorage.setItem('books', JSON.stringify(listTasks));
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
    let onDisplayForm = this.state.onDisplayForm;
    let taskForm = onDisplayForm === true ? <TaskForm onSubmit={this.onSubmit} 
                                                      onExit={this.onExitTaskForm}
                                                      taskEdit={this.state.taskEdit}
                                                      /> : '';
    return (
      <div className="box">
        <h1 className="nameApp">Quản Lý Thư Viện</h1>
        <div>
          <Row style={{ width: '60%', margin: 'auto' }}>
            {taskForm}
            <Col style={{ margin: 'auto' }} sm={onDisplayForm === true ? '8': '12'}>
              <Button color="primary" onClick={this.onToggleForm} style={{marginRight: '0.5rem'}}>  Thêm sách mới</Button>
              <Button color="warning" onClick={this.onGenerateBook} >Tạo nhanh dữ liệu </Button>
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
                      onChangeStatus={this.onChangeStatus} 
                      books={this.state.books}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;

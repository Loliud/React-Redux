import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import TaskForm from './components/TaskForm';
import Search from './components/Search';
import Sort from './components/Sort';
import ListBook from './components/ListBook';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      // neu trong local storage co data bua books thi se do data cho state
      books: [],
      onDisplayForm : false
    }
    this.onGenerateBook = this.onGenerateBook.bind(this);
    this.onToggleForm = this.onToggleForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }
  
  // truoc khi mount 
  componentWillMount(){
    if(localStorage && localStorage.getItem('books')){
      const books = JSON.parse(localStorage.getItem('books'));
      this.setState({
        books: books
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
    this.setState({
      onDisplayForm: !this.state.onDisplayForm
    });
  }

  // Submit task form
  onSubmit(data){
    console.log(data);
    let listBooks = this.state.books;
    listBooks.push(data);
    this.setState({
      books: listBooks,
      onDisplayForm : false
    });
    localStorage.setItem('books', JSON.stringify(listBooks));
    
  }
  // task form
  onExitTaskForm = () =>{
        this.setState({
          onDisplayForm: false
        });
  }
  // change status
  onChangeStatus(data){
    this.setState({
      books: data
    });
    localStorage.setItem('books', JSON.stringify(data));
  }
  // remove 1 item in lists
  onRemoveItem(data){
    this.setState({
      books: data
    });
    localStorage.setItem('books', JSON.stringify(data));
    this.onExitTaskForm();

  }

  render() {
    let onDisplayForm = this.state.onDisplayForm;
    let taskForm = onDisplayForm === true ? <TaskForm onSubmit={this.onSubmit} onExit={this.onExitTaskForm}/> : '';
    return (
      <div className="box">
        <h1 className="nameApp">Quản Lý Thư Viện</h1>
        <div>
          <Row style={{ width: '60%', margin: 'auto' }}>
            {taskForm}
            <Col style={{ margin: 'auto' }} sm={onDisplayForm === true ? '8': '12'}>
              <Button color="primary" onClick={this.onToggleForm} > <i class="fas fa-plus"></i>  Thêm sách mới</Button>
              <Button color="warning" onClick={this.onGenerateBook} >Thêm sách mới(demo)</Button>
              <Row style={{ marginTop: "1rem" }}>
                <Search />
                <Sort />
              </Row>
              <ListBook 
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

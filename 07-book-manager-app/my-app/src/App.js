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
      books: []
    }
    this.onGenerateBook = this.onGenerateBook.bind(this);
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
        amount: 20
      }
    ];
    // su dung local storage de luu du lien tren trinh duyet(nen luu duoi dang string)
    this.setState({
      books: newBooks
    });
    localStorage.setItem('books', JSON.stringify(newBooks));
    console.log(this.state);
  }


  render() {
    return (
      <div className="box">
        <h1 className="nameApp">Quản Lý Thư Viện</h1>
        <div>
          <Row style={{ width: '60%', margin: 'auto' }}>
            <TaskForm />
            <Col style={{ margin: 'auto' }} sm="8" >
              <Button color="primary" onClick={this.onGenerateBook} >Thêm sách mới</Button>
              <Row style={{ marginTop: "1rem" }}>
                <Search />
                <Sort />
              </Row>
              <ListBook books={this.state.books}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;

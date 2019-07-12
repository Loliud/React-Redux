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
      keyword: null,
      sortBy: null,
      sortValue: null
    }

    this.onToggleForm = this.onToggleForm.bind(this);
  }
  // Exit task form
  onToggleForm(){
    if(this.props.taskEdit !== null){
      this.props.onClearContentTask();
      this.props.onOpenForm();
    }else{
      this.props.onToggleForm();
    }
  }
  // task form
  onExitTaskForm = () =>{
    this.props.onExitForm();
  }
  // mo task form de edit
  onOpenTaskForm = ()=>{
    this.props.onOpenForm();
  } 

  render() {
    let {isFormDisplay} = this.props;
    let taskForm = isFormDisplay === true ? <TaskForm onExit={this.onExitTaskForm}  /> : '';    

    return (
      <div className="box">
        <h1 className="nameApp">Quản Lý Thư Viện</h1>
        <div>
          <Row style={{ width: '60%', margin: 'auto' }}>
            {taskForm}
            <Col style={{ margin: 'auto' }} sm={isFormDisplay === true ? '8': '12'}>
              <Button color="primary" onClick={this.onToggleForm} style={{marginRight: '0.5rem'}}>  Thêm sách mới</Button>
              <Row style={{ marginTop: "1rem" }}>
                <Search/>
                <Sort/>
              </Row>
              <ListBook/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

let mapStatetoProps = (state) =>{
    return {
      isFormDisplay:  state.isFormDisplay,
      taskEdit: state.taskEdit
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
    },
    onClearContentTask: () =>{
      dispatch(actions.onClearContentTast());
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';
import CreateUser from './components/CreateUser';

class App extends Component {
  constructor() {
    super()
    this.state = {
      response: false,
      endpoint: 'http://localhost:8000/'
    }

  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);

  }


  render() {
    return (
      <div className="App">
        <CreateUser />
      </div>

    )
  }
}

export default App;

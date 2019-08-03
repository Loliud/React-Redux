import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import './App.css';
import CreateUser from './components/CreateUser';
import BoxChat from './components/BoxChat';

class App extends Component {
  constructor() {
    super()
    this.state = {
      response: false,
      endpoint: 'http://localhost:8000/',
      socket: null

    }

  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    this.setState({
      socket: socket
    })
  }


  render() {
    return (
      <div className="App">
        <CreateUser  socket={this.state.socket}/>
        <BoxChat socket={this.state.socket}/>
      </div>

    )
  }
}

export default App;

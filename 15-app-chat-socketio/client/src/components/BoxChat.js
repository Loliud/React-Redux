import React, { Component } from 'react';
import './BoxChat.css';



class BoxChat extends Component {
    constructor(props) {
        super(props);

        this.state ={
            message: null,
            inbox: []
        }
    }



    onChange = (event) => {
        let value = event.target.value;
        this.setState({
            message: value
        });
    }

    onSubmit = (event) =>{
        event.preventDefault();
        const socket = this.props.socket;
        console.log(socket);
        socket.emit('send-message-server', this.state.message);
        socket.on('send-message-client', (data) =>{
           this.setState({
               inbox: data
           });
        });
    }


    showInbox = (inbox) =>{
        let showInbox = null;
        showInbox = inbox.map((item) =>{
            return(
                <div class="item">   
                    <p>{item.user}</p>: <p>{item.message}</p>
                </div>
            );
        });
        return showInbox;
    }

    render() {

        let {inbox} = this.state;
        return (
            <div id="box-chat">
                <div>
                {this.showInbox(inbox)}  
                </div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" required onChange={this.onChange} value={this.state.message}></input>
                    <button onClick={this.onClick}>Send</button>
                </form>
            </div>
        )
    }


}

export default BoxChat;
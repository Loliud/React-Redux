import React, { Component } from 'react';
import './createUser.css';



class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            status: false
        }

    }


    onChange = (event) => {
        let value = event.target.value;
        this.setState({
            userName: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { socket } = this.props;
        socket.emit('create-user', this.state.userName);
        socket.on('user-fail', (data) => {
            alert('Tai khoan da ton tai trong he thong');
            this.setState({
                userName: '',
                status: false
            });
        });
        socket.on('user-success', (data) => {
            this.setState({
                status: true
            });
        });

    }


    showLogin = (status) => {
        if (!status) {
            return (
                <form onSubmit={this.onSubmit}>
                    <h1>Welcome</h1>
                    <div class="group-button">
                        <input type="text" id="username" value={this.state.userName} required onChange={this.onChange} />
                        <label for="username">Username</label>
                    </div>
                    <button type="submit">Login</button>
                </form>
            )
        }else{
            return null;
        }
    }






    render() {
        return (
           this.showLogin(this.state.status)
        );
    }
}
export default CreateUser;
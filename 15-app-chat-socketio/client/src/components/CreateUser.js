import React, { Component } from 'react';
import './createUser.css';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null
        }

    }


    render() {
        return (
            <form action="">
                <h1>Welcome</h1>
                <div class="group-button">
                    <input type="text" id="username" required />
                    <label for="username">Username</label>
                </div>
                <button type="submit">Login</button>
            </form>
        );
    }
}
export default CreateUser;
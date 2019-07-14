import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import './Footer.css';
class Footer extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="Footer">
                <div className="Logo">Lo</div>
                <h3>BOOKS AND MEDIA STORE</h3>
                <div className="link">
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                    <Spinner type="grow" color="light" />
                    <Spinner type="grow" color="dark" />
                </div>
                <p>ThemeREX © 2019 All Rights Reserved. Terms of Use and Privacy Policy.</p>
            </div>
        )
    }
}

export default Footer;
import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { NavLink as NavLinkRounter } from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Coders.thoidai</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink> <NavLinkRounter exact to="/" activeStyle={{ backgroundColor: "tomato"}}>Home</NavLinkRounter></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink> <NavLinkRounter to="/about" activeStyle={{ backgroundColor: "tomato"}}  >About</NavLinkRounter></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink> <NavLinkRounter to="/products" activeStyle={{ backgroundColor: "tomato"}}>Products</NavLinkRounter></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
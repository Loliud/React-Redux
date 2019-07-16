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
import { Link, Route } from "react-router-dom";
import './Header.css';

let MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            let active = match ? 'linkActive' : '';
            return (
                <NavItem className={active}>
                    <NavLink> <Link  to={to} >{label}</Link></NavLink>
                </NavItem>
            );
        }} />
    )
}

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
                            <MenuLink label="Home" activeOnlyWhenExact={true} to="/" />
                            <MenuLink label="About" activeOnlyWhenExact={false} to="/about" />
                            <MenuLink label="Products" activeOnlyWhenExact={false} to="/products" />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
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
                    <NavLink> <Link to={to} >{label}</Link></NavLink>
                </NavItem>
            );
        }} />
    )
}

let menus = [
    {
        name: 'Home',
        exact: true,
        to: "/"
    },
    {
        name: 'About',
        exact: false,
        to: "/about"
    },
    {
        name: 'Products',
        exact: false,
        to: "/products"
    }
];

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Coders.thoidai</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            {this.showMenu(menus)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );

    }


    showMenu(menus) {
        let showMenu = null;
        if (menus.length > 0) {
            showMenu = menus.map((menu, index) => {
                return (
                    <MenuLink key={index} label={menu.name} activeOnlyWhenExact={menu.exact} to={menu.to} />
                );
            });
        }
        return showMenu;
    }
}
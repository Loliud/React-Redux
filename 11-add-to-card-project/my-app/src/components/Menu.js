import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Menu.css';
export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar id="menu" className="Menu" dark >
          <NavbarBrand href="/" className="mr-auto text-color" >Thoidai.coders</NavbarBrand>
          <NavbarToggler  onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar >
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
} 
import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    path: '/',
    exact: true
  },
  {
    name: 'Products',
    path: '/products',
    exact: false
  },
  {
    name: 'about',
    path: '/about',
    exact: false
  },
];



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

  showMenus(menus) {
    let showMenu = null;
    showMenu = menus.map((menu, index) => {
      return (
        <NavItem key={index}>
          <Link  to={menu.path} exact={menu.exact.toString()}>{menu.name}</Link>
        </NavItem>
      );
    });
    return showMenu;
  }

  render() {


    return (
      <div>
        <Navbar color="red" light style={{ backgroundColor: "#cecec8", marginBottom: "4rem" }}>
          <NavbarBrand href="/" className="mr-auto" style={{ color: "#617153" }}>S.Loliud Pet Store</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              {this.showMenus(menus)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";
import Logo from "./../image/dulux.jpg";
import "./../styles/header.css";
import {Link} from 'react-router-dom';

class Header extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <div>
      <div style={{height: 10}} className=" deep-orange darken-4" ></div>
      <MDBNavbar  color="white" dark expand="md">
        <div className="container">
        <MDBNavbarBrand>
          <strong>
            <img 
            className="logo"
            alt="logo"
            src={Logo}
            />
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler  onClick={this.toggleCollapse} className="deep-orange darken-4" />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav className=" mx-auto" left>
            <MDBNavItem>
              <MDBNavLink   className="black-text grow" to="#!">Find a Colour</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!"  className="black-text grow">Choose a Product</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!"  className="black-text grow">Ideas</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!"  className="black-text grow">Expert Help</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!"  className="black-text grow">Find a Store</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem className="black-text text-center">
                <Link className="p-3" to="/"><MDBIcon className="grow" icon="search" size="lg"/></Link> 
                <Link className="p-3" to="/cards"><MDBIcon className="grow" icon="list" size="lg"/></Link> 
                <Link  className="p-3 " to="/bigcards"><MDBIcon className="grow" icon="user-plus" size="lg"/></Link> 
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </div>
      </MDBNavbar>
      </div>
    );
  }
}

export default Header;
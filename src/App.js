import React, { Component } from 'react'
import './App.css';
import Api from './components/Api'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">
                <img src={require('./images/logo.png')} height="90%"/>
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Browse
            </NavItem>
            <NavItem eventKey={2} href="#" >
              <span className="phone">(213) 986-6179</span>
            </NavItem>
            <NavDropdown className="dropdown" eventKey={3} title="About" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>AdQuick News</MenuItem>
              <MenuItem eventKey={3.2}>Frequently Asked Questions</MenuItem>
              <MenuItem eventKey={3.3}>Contact Us</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Careers</MenuItem>
              <MenuItem eventKey={3.4}>Privacy Policy</MenuItem>
            </NavDropdown>
            <NavItem eventKey={1} href="#">
              Sign Up
            </NavItem>
            <NavItem eventKey={1} href="#">
              Sign In
            </NavItem>
          </Nav>
        </Navbar>;
      </div>
    );
  }
}

export default App;

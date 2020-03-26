import React from 'react'
import {Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {
    Link
} from "react-router-dom";

const Header = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hammer Jack Contact App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link style={{color: 'white'}} to="/">Home</Link>
                <Link style={{color: 'white'}}  to="/contacts">Contacts</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header

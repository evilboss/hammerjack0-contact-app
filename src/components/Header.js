import React from 'react'
import {Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Header = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hammer Jack Contact App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/">Home</Link>
                <Link to="/contacts">Contacts</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header

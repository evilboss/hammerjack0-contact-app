import React from 'react'
import {Form, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hammer Jack Contact App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">New</Nav.Link>
                <Nav.Link href="#link">Contacts</Nav.Link>
            </Nav>

        </Navbar.Collapse>
    </Navbar>
);

export default Header

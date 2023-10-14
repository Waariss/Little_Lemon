import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';

const AppNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="#home">Little Lemon</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home" className="active">Home</Nav.Link>
                    <Nav.Link href="#popular">Popular Dishes</Nav.Link>
                    <Nav.Link href="#specials">Specials</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;

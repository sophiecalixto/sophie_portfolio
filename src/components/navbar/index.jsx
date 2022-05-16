import React from 'react';
import { BsGithub } from "react-icons/bs";
import { Container, Nav, Navbar } from 'react-bootstrap';



function NavComponent() {
    return (
        <Navbar bg="dark" variant="dark" className="p-5">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://github.com/sophiecalixto" target="_blank">{<BsGithub/>}</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavComponent;
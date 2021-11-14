import { Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';

interface MenuItem {
    to: string
    content: string
}

const links = [
    {
        to: '/lab1',
        content: 'Лабораторная работа 1'
    }
] as MenuItem[];

export default () => <div className='bg-light'>
    <Container>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Главная</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {links.map(({ to, content }) => <Nav.Link href={to}>{content}</Nav.Link>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
</div>
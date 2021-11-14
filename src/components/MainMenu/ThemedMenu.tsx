import { Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import { Link, NavLink } from 'react-router-dom'

interface MenuItem {
    to: string
    content: string
}

const links = [
    {
        to: '/ss-architecture/lab1',
        content: 'Лабораторная работа 1'
    }
] as MenuItem[];

export default () => <div className='bg-light'>
    <Container>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/ss-architecture/">Главная</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {links.map(({ to, content }) => <Nav.Link as={NavLink} to={to}>{content}</Nav.Link>)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
</div>
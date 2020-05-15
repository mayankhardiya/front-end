import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

export default class NavbarOne extends Component {

    constructor() {
        super();
    }

    render() {
        var createone = localStorage.getItem('login')
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>NovaSoft</Navbar.Brand>
                    <Navbar.Toggle aria-contorls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <Nav.Link href="#list"><Link to="/list">List</Link></Nav.Link>
                            <Nav.Link href="#list"><Link to="/create">Create</Link></Nav.Link>
                            {
                                createone == "admin#123" ?
                                    <Nav.Link href="#list"><Link to="/adminlist">AdminList</Link></Nav.Link>
                                    : null
                            }


                            <Nav.Link href="#list"><Link to="/search">Search</Link></Nav.Link>

                            {
                                localStorage.getItem('login') ?
                                    <Nav.Link href="#list"><Link to="/logout">Logout</Link></Nav.Link>
                                    :
                                    <Nav.Link href="#list"><Link to="/login">Login</Link></Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Alert} from 'react-bootstrap'
import logo from '../imgs/LOGO.png'
import '../styles/NavBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TvShows from './TVShows';

const NavBar = () => {

    return (
        <>
        <Navbar expand="lg" className='nav'>
            <Navbar.Brand href="#home"><img className='logo' src={logo} alt='netflix' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/shows" className='nav'>Tv Shows</Link>
                <Nav.Link href="#link" className='nav'>Movies</Nav.Link>
                <Nav.Link href="#link" className='nav'>Recently Added</Nav.Link>
                <Nav.Link href="#link" className='nav'>My List</Nav.Link>
                </Nav>
                <Form inline>
                
                <FontAwesomeIcon icon={faSearch} />
                <Nav.Link href='#link' className='nav'>KIDS</Nav.Link>
                <NavDropdown title='User' menuAlign="right" id="dropdown-menu-align-right" className='nav' 
                style={{color: 'gray !important'}}>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#link'></Nav.Link>
                <Nav.Link href='#link'></Nav.Link>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/shows">
            <TvShows />
          </Route>
        </Switch>
    </>
    );
}

export default NavBar;
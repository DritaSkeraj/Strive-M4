import React from "react";
import { Navbar, Nav , Form, FormControl, Button} from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Strivestore</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-dark">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
    </div>
  );
};

export default NavBar;



{/*import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {props.title} - Strive For Food
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>Menu</Nav.Link>
            <Nav.Link>Reservation</Nav.Link>
            <Nav.Link>Our Location</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;*/}



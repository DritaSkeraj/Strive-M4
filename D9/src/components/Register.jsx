import { FormGroup } from '@material-ui/core';
import React from 'react';
import {Container, Row, Col, Form, Alert, Spinner} from 'react-bootstrap'

class Register extends React.Component{

    state = {
        errMessage: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        yearOfBirth: '',
        street: '',
        city: '',
        postalCode: '',
        creditCard: ''
    }

    submitRegistering = () => {}

    updateRegisterField = () => {}

    submitHandler = (event) => {
        event.preventDefault();
        event.target.className += " was-validated";
        // multiple property validation could go here
        if (event.target.checkValidity()) {
          console.log("dispatch an action");
        }
      };

    render(){
        return(
            <>
            <Container style={{width: '50%', color: '#ddd'}}>
              {this.state.errMessage && (
              <Alert variant="danger">
                  We encountered a problem with your request.<br />
                  {this.state.errMessage}
              </Alert>
              )}
              <Form className="w-100 mb-5"
              className="needs-validation" onSubmit={this.submitHandler} noValidate>
              <Row>
                  <br />
                  <h6 style={{margin: '0 auto'}}>To register, fill out the followings:</h6>
              </Row>
              <Row>
                  <Col md={12}>
                  <Form.Group>
                      <Form.Label htmlFor="name">Name: </Form.Label>
                      <Form.Control
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your name"
                      required
                      minLength="2"
                      onChange={this.updateRegisterField}
                      />
                      <div className="invalid-feedback">
                        Name is required with minimum length of 2
                      </div>
                  </Form.Group>
                  </Col>
              </Row>
              <Row>
                  <Col md={12}>
                  <Form.Group>
                      <Form.Label htmlFor="surname">Surname: </Form.Label>
                      <Form.Control
                      type="text"
                      name="surname"
                      id="surname"
                      placeholder="Your surname"
                      required
                      minLength="3"
                      onChange={this.updateRegisterField}
                      />
                      <div className="invalid-feedback">
                        Surame is required with minimum length of 3
                      </div>
                  </Form.Group>
                  </Col>
              </Row>
              <Row>
                  <Col md={12}>
                  <Form.Group>
                      <Form.Label htmlFor="email">Email: </Form.Label>
                      <Form.Control
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      required
                      minLength="3"
                      onChange={this.updateRegisterField}
                      />
                      <div className="invalid-feedback">
                        Please provide valid email
                      </div>
                  </Form.Group>
                  </Col>
              </Row>
              <Row>
                  <Col md={12}>
                  <Form.Group>
                      <Form.Label htmlFor="password">Password: </Form.Label>
                      <Form.Control
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your password"
                      required
                      minLength="8"
                      onChange={this.updateRegisterField}
                      />
                      <div className="invalid-feedback">
                        password should have at least 8 chars
                      </div>
                  </Form.Group>
                  </Col>
              </Row>
              <Row>
                  <Col md={12}>
                  <Form.Group>
                      <Form.Label htmlFor="yearOfBirth">Year of birth: </Form.Label>
                      <Form.Control
                      type="number"
                      name="yearOfBirth"
                      id="yearOfBirth"
                      placeholder="1910+"
                      required
                      min='1910'
                      onChange={this.updateRegisterField}
                      />
                      <div className="invalid-feedback">
                        required, greater than 1910
                      </div>
                  </Form.Group>
                  </Col>
              </Row>
              <Row>
                  <Col md={12}>
                  <Form.Group>
                      <Form.Label htmlFor="street">Street address: </Form.Label>
                      <Form.Control
                      type="text"
                      name="street"
                      id="street"
                      placeholder="street"
                      required
                      onChange={this.updateRegisterField}
                      />
                      <div className="invalid-feedback">
                        required
                      </div>
                  </Form.Group>
                  </Col>
              </Row>
              <Row>
                  <Col md={12}>
                  <Form.Group>
                      <Form.Label htmlFor="city">City: </Form.Label>
                      <Form.Control
                      type="text"
                      name="city"
                      id="city"
                      placeholder="city"
                      required
                      onChange={this.updateRegisterField}
                      />
                      <div className="invalid-feedback">
                        required
                      </div>
                  </Form.Group>
                  </Col>
              </Row>
              <Row>
                  <Col md={12}>
                  <Form.Group>
                      <Form.Label htmlFor="postalCode">Postal code: </Form.Label>
                      <Form.Control 
                      type="number"
                      name="postalCode"
                      id="postalCode"
                      placeholder="postalCode"
                      required
                      min="10000"
                      max="99999"
                      onChange={this.updateRegisterField}
                      />
                      <div className="invalid-feedback">
                        should have 5 digits
                      </div>
                  </Form.Group>
                  </Col>
              </Row>
              <Row>
                  <Col md={12}>
                  <Form.Group>
                      <Form.Label htmlFor="creditCard">Credit Card: </Form.Label>
                      <Form.Control 
                      type="text"
                      name="creditCard"
                      id="creditCard"
                      placeholder="creditCard"
                      onChange={this.updateRegisterField}
                      />
                      <div className="invalid-feedback">
                        Format: XXXX-XXXX-XXXX-XXXX
                      </div>
                  </Form.Group>
                  </Col>
              </Row>
              <Row>
                  <Col md={12}>
                  <button className="btn-info offset-5" type="Submit" 
                  onClick={this.submitHandeler}
                  style={{width: '100%', margin: '0 auto'}}>
                      {" "}
                      Submit{" "}
                  </button>
                  </Col>
              </Row>
              </Form>
              </Container>
            </>
        );
    }
}

export default Register;
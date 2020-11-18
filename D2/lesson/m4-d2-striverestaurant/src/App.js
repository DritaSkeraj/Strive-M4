import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";

import {Container, Row, Col, Jumbotron, Button, Card, Dropdown}
        from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar title="Strivesturant" />
        <Home />
      </>
    );
  }
}

export default App;

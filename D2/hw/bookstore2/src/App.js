import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import {DropdownButton, Dropdown } from "react-bootstrap";

import NavBar from "./components/NavBar";
import JumbotronComponent from './components/JumbotronComponent.jsx';
import Books from './components/Books.jsx';

class App extends React.Component{

  state = {
    category: 'fantasy'
  }

  render(){
    
  let dropdownStyle = {
    width: '100vw',
    padding: '1rem'
  }

  let handleClick = (ctg) =>{
    console.log('category: ', ctg);
    this.setState({category: ctg});
  }
    return (
      <>
        <NavBar />
        <JumbotronComponent />

        <DropdownButton id="dropdown-item-button" title={this.state.category} 
        style={dropdownStyle} className='bg-light ' variant='warning'>
          <Dropdown.Item as="button" onClick={() => handleClick('fantasy')} >
            Fantasy
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => handleClick('history')}>
            History
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => handleClick('horror')}>
            Horror
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => handleClick('romance')}>
            Romance
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => handleClick('scifi')}>
            Scifi
          </Dropdown.Item>
        </DropdownButton>

        <Books category={this.state.category}/>
      </>
    );
  }
}

export default App;

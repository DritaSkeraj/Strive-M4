import React, { Component } from 'react';
import '../../styles/search.css'
import { Col } from 'react-bootstrap';

class SearchCategory extends Component {

    state = {
        color: ''
    }

    render() {
        return (
            <Col xs={12} md={4} lg={3}>
              <div className='cardHolder'>
                  <h5>{this.props.title}</h5>
                  <img src={this.props.img} alt={`${this.props.title} image`}/>
              </div>
            </Col>
        );
    }
}

export default SearchCategory;
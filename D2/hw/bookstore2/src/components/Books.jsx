import React from 'react';
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import {Container, Row, Col} from 'react-bootstrap';

const Books = (props) =>{
    
    console.log('Books', props.category);
    let currentItem;

    if(props.category === 'fantasy')
        currentItem = fantasy;
    else if(props.category === 'history')
        currentItem = history;
    else if(props.category === 'horror')
        currentItem = horror;
    else if(props.category === 'romance')
        currentItem = romance;
    else if(props.category === 'scifi')
    currentItem = scifi;
    

    console.log('current item: ', currentItem);

    let imgStyle = {
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        marginBottom: '3rem',
        cursor: 'pointer',
        boxShadow: '4px 4px 20px #444'
    }

    return (
        <Container fluid>
            <Row justify-content-center>
                {currentItem.map((item) => (
                  <Col xs={10} sm={6} md={4} lg={3} key={item.asin}>
                  <img
                  className="d-block" 
                  src={item.img}
                  style={imgStyle}
                  />
                  </Col>
                ))}
            </Row>
            <br />
            <hr />
        </Container>
    );
}

export default Books;
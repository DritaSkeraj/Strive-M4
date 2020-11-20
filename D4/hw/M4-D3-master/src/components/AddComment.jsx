import React from 'react'
import {Container, Row, Col, Form} from 'react-bootstrap'

class AddComment extends React.Component{

    state = {
        comment: {
          "comment": "",
          "rate": 0,
          "elementId": ""
        },
        errMessage: '',
        loading: false
    }

    render(){
        return(
            <Container>
                <Row>
                    <img src={this.props.img} style={{width: '30px', height: '30px', margin: '0 auto'}} />
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label htmlFor="comment">Add comment: </Form.Label>
                            <Form.Control
                                type="text"
                                name="comment"
                                id="comment"
                                placeholder="Your comment"
                                // value={}
                                // onChange={}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label htmlFor="comment">Add rate: </Form.Label>
                            <Form.Control
                                type="number"
                                name="comment"
                                id="comment"
                                placeholder="1-5"
                                min="1"
                                max="5"
                                // value={}
                                // onChange={}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <button className='btn-info offset-5'> Submit </button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AddComment;
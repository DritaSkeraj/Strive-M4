import React from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap'

import AddComment from './AddComment';
import CommentsList from './CommentsList'

const CommentArea = (props) => {

        return (
            <div style={{width: '30%', top: '10%', position: 'fixed', right: '0px', height: '100vh', overflowY: 'auto'}}>
            <AddComment img={props.img} asin={props.asin}/>
            <CommentsList asin={props.asin}/>
            </div>
        );
}

export default CommentArea;
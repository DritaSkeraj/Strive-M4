import React from 'react'
import { Spinner } from 'react-bootstrap'

import Comment from './Comment';

class CommentsList extends React.Component{
    
    state = {
        comments: [],
        loading: true
    }

    prevState = {...this.state};

    fetchComments = async(method) =>{
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
                method: method,
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2N2JhNTk4MzViMDAwMTc1ODRlZmMiLCJpYXQiOjE2MDU3OTQ3MjUsImV4cCI6MTYwNzAwNDMyNX0.ZBxn9E-dluFBsGqKAIwygPI84Tzr0ZI6d9U_RszFQw0"
                }
              });
            let comments = await response.json()
            console.log('fetched comments: ', comments);
            setTimeout(
                () => {
                    this.setState({ comments: comments, loading: false })
                    console.log('state::::::::::::', this.state);
                    this.prevState = { comments: comments, loading: false };
                }, 1000
            );
        } catch (e) {
            console.log("error happened, that's life", e)
            this.setState({ loading: false })
        }
    }

    componentDidMount = async () => {
                this.fetchComments('GET');
        setTimeout(
            () => {
                console.log('componentDidMount, state: ', this.state);
            }, 1000
        );
    }

    componentDidUpdate = async(prevProp, previousState = this.prevState) => {
        // console.log('this.state.comments: ', this.state.comments);
        if(previousState !== this.state.comments){
            // this.fetchComments('GET');
            console.log('previousState !== this.state.comments', previousState);
        }
    }

    // handleCommentDelete = async(index) => {
    //     let objToDelete = this.state.comments[index];
    //     console.log("this.state.comments: ", objToDelete);
    //     try{
    //         let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + objToDelete._id, 
    //         {
    //             method: 'DELETE', 
    //             headers: {
    //                 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2N2JhNTk4MzViMDAwMTc1ODRlZmMiLCJpYXQiOjE2MDU3OTQ3MjUsImV4cCI6MTYwNzAwNDMyNX0.ZBxn9E-dluFBsGqKAIwygPI84Tzr0ZI6d9U_RszFQw0"
    //             }
    //           });
    //         let deletedComment = await response.json();
    //         // let newComments = this.state.comments.splice(index, 1);
            
    //         let newComments = this.state.comments.filter(obj => obj !== objToDelete);
    //         console.log('comments without the deleted one: ', newComments);
    //         this.setState({ comments: newComments})
    //     } catch (e) {
    //         console.log('error at deleting, ', e);
    //     }
    // }

    render(){
        return(
            <div className="mb-5">
                <h2>Comments: </h2>
                {
                    this.state.loading && (
                        <div className="font-bold d-flex justify-content-center">
                            <span>Feching comments</span>
                            <Spinner animation="border" variant="success" />
                        </div>
                    )
                }
                {this.state.comments.map((comments, index) => (
                    <Comment 
                        key={index} 
                        keyIndex={index} 
                        comment={comments.comment} 
                        rate={comments.rate} 
                        id={comments._id}
                        // handleDel={() => this.handleCommentDelete(index)}
                        />
                ))}
            </div>
        );
    }
}

export default CommentsList;
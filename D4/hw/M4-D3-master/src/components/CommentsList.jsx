import React from 'react'
import { ListGroup, Spinner } from 'react-bootstrap'

class CommentsList extends React.Component{
    
    state = {
        comments: [],
        loading: true
    }

    componentDidMount = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2N2JhNTk4MzViMDAwMTc1ODRlZmMiLCJpYXQiOjE2MDU3OTQ3MjUsImV4cCI6MTYwNzAwNDMyNX0.ZBxn9E-dluFBsGqKAIwygPI84Tzr0ZI6d9U_RszFQw0"
                }
              });
            let comments = await response.json()
            this.setState({ comments: comments, loading: false })
        } catch (e) {
            console.log("error happened, that's life", e)
            this.setState({ loading: false })
        }
    }

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
                    <ListGroup key={index}>
                        <ListGroup.Item>
                             {comments.comment}, rating: {comments.rate}
                        </ListGroup.Item>
                    </ListGroup>
                ))}
            </div>
        );
    }
}

export default CommentsList;
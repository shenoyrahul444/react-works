import React, { Component } from 'react';
import {connect} from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render(){
        console.log(this.props);
        const post = this.props.post ? 
        (
            <div className="center">
                <h4 className="center">{this.props.post.title}</h4>
               <p> {this.props.post.body}</p>
               <button className="btn grey" onClick={this.handleClick}>DeletePost</button>
            </div>
        ) : 
        (<div className="center">
                <p>This post has no content</p>
        </div>) 
        
        return (
            <div className="container">
            
                {post}
            </div>
        )

    }
}

const mapStateToProps = (state,ownProps) => {
    // 'ownProps' Grab the id from the Props that we receive after  redirection from the Home
    let id = ownProps.match.params.post_id;
    return {
       post: state.posts.find(post=> post.id === id)
    }
}

// For performing ADD,UPDATE,DELETE Functionalities to the reducer from this component

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Post);


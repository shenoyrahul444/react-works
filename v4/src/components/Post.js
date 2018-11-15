import React, { Component } from 'react';
import axios from 'axios';
import SampleImg from '../react.jpg';
export default class Post extends Component {
    state = {
        post : null
    }
    componentDidMount(){
        
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res => {

           this.setState({
               
               post : res.data
           })
           console.log(res);
        })
    }
    render(){
        
        const post = this.state.post ? 
        (
            <div className="center">
                <h4 className="center">{this.state.post.title}</h4>
               <img src = {SampleImg} alt = "React" />
               <p> {this.state.post.body}</p>
            </div>
        ) : 
        (<div className="center">
                <p>This post has no content</p>
        </div>) 
        
        return (
            <div className="container">
                {/* <h4>The post id is: {this.state.post_id}</h4> */}
                {post}
            </div>
        )

    }
}


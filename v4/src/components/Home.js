import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
    state = {
        posts : []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
           this.setState({
               posts : response.data.slice(0,10)
           })
        })
    }

    render(){
        const {posts}=this.state;
        const postsList = posts.length ? 
        ( posts.map(post => {
            return (
                <div className="post-card" key={post.id}>
                    <div className="card-content">
                        <span className="card-title"><h4>{post.title}</h4></span>
                        <p>{post.body}</p>
                    </div>
                </div>
            )  
        })
        
        ) : 
        (<div className="center">No Posts Yet</div>)
        return (
            <div className="container">
            <h1 className="center">Home</h1>   
            {postsList}


            </div>
        )
    }
}

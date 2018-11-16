import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    

    render(){

        console.log(this.props);

        const {posts}=this.props;
        const postsList = posts.length ? 
        ( posts.map(post => {
            return (
                <div className="post-card" key={post.id}>
                    <div className="card-content">
                        <Link to={"/"+post.id} >
                            <span className="card-title"><h4>{post.title}</h4></span>
                        </Link>
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);
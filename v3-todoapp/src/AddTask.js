import React, {Component} from 'react';

export default class AddTask extends Component{
    state = {
        content:null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log()
        this.props.addTask(this.state)
    }




    render(){
        return (
        <div className="todo-form">
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter Task" id="content" onChange={this.handleChange} />
                <button type="submit">Add Task</button>
            </form>

        </div>
    )    
    }

    
}
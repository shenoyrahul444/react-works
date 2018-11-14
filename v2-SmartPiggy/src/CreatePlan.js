import React, { Component } from 'react';

export default class CreatePlan extends Component {
    state = {
        name:null,
        age:null,
        amount:null
    }

    handleChange = (e) => {
         this.setState({
             [e.target.id] : e.target.value
         });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlan(this.state)
    }

    render(){
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" onChange={this.handleChange} />
                <label htmlFor="Amount">Amount: </label>
                <input type="text" id="amount" onChange={this.handleChange} />
                <label htmlFor="age">Age: </label>
                <input type="text" id="age" onChange={this.handleChange} />

                <button>Submit</button>        
        
            </form>
        </div>
        )}
}

// export default CreatePlan;
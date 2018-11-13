import React, { Component } from 'react';
import Plans from './Plans';

class App extends Component {
  state = {
    plans_data : [
      {name:'Rahul',amount:5000,age:25,id:1},
      {name:'Urvi',amount:10000,age:26,id:2},
      {name:'Shraddha',amount:15000,age:21,id:3},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 align="center">Hello world</h1> 
        
        <Plans plans={this.state.plans_data} />
        <p> This is the paragraph</p>
      </div>
    );
  }
}

export default App;

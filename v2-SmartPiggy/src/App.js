import React, { Component } from 'react';
import Plans from './Plans';
import CreatePlan from "./CreatePlan";

class App extends Component {
  state = {
    total_usable_amount: 100000,
    plans_data : [
      {name:'Rahul', amount:5000, age:25, id:1},
      {name:'Urvi', amount:10000, age:26, id:2},
      {name:'Shraddha', amount:15000, age:21, id:3},
    ]
  }

  addPlan = (plan) => {
    
    plan.id = Math.random();
    
    plan.amount= parseFloat(plan.amount);
    plan.age =parseInt(plan.age);

    let plans_data = [...this.state.plans_data,plan]
    this.setState({
      total_usable_amount: this.state.total_usable_amount - plan.amount,
      plans_data: plans_data
    })
  }

  removePlan = (plan) => {
    console.log("Removed Plan with ID: "+ plan.id );
    let plans_data  = this.state.plans_data.filter(plan_data => {
      return plan_data.id !==  plan.id
    })
    this.setState({
      total_usable_amount: this.state.total_usable_amount + plan.amount,
      plans_data:plans_data
    })
  }

  componentDidMount(){
    console.log("Component Mounted");
  }

  componentDidUpdate(prevProps,prevState){
    console.log("Component Updated");
    console.log(prevProps,prevState);
  }

  render() {
    return (
      <div className="App">
        <h1 align="center">Total Usable Amount : {this.state.total_usable_amount}</h1> 
        
        <Plans plans={this.state.plans_data} removePlan = {this.removePlan} />
        <p> This is the paragraph</p>
        
        <CreatePlan addPlan= {this.addPlan} />
      </div>
    );
  }
}

export default App;

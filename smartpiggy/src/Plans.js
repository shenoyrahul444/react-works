import React from 'react';

const Plans = ({ plans }) => {
    const planList = plans.map( plan=> {
        return (
            
            <div className="plan" key={plan.id}>
                <div>Name: {plan.name}</div>
                <div>Amount: {plan.amount}</div>
                <div>Age: {plan.age}</div>
            </div>
            )
        })
    return (
        <div className="plan-list">
            { planList }
        </div>
    )
}


export default Plans;
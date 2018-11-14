import React from 'react';

const Plans = ({ plans,removePlan }) => {
    
    const planList =   plans.map( plan=> {
        return  (plan.age > 20) ?  (
                <div className="plan" key={plan.id} onClick={()=> {removePlan(plan)}}>
                     <div>Name: {plan.name}</div>
                    <div>Amount: {plan.amount}</div>
                    <div>Age: {plan.age}</div>
                </div>
                    )
                : null;
            })
    
    return (
        <div className="plan-list">
            { planList }
        </div>
    )
}


export default Plans;
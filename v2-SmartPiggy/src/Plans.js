import React from 'react';

const Plans = ({ plans,removePlan }) => {
    return (
        <div className="plan-list">
            { 
                plans.map( plan=> {
                    return  (plan.age > 20) ?  (
                            <div className="plan" key={plan.id} onClick={()=> {removePlan(plan)}}>
                                 <div>Name: {plan.name}</div>
                                <div>Amount: {plan.amount}</div>
                                <div>Age: {plan.age}</div>
                            </div>
                                )
                            : null;
                        })
            }
        </div>
    )
}


export default Plans;
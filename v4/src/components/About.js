import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return (
        <div className="container">
         <h1 className="center">About</h1>   
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam aut suscipit alias distinctio ea eaque consequuntur! Nihil accusamus accusantium illo, ut veniam natus ratione asperiores velit aut quia minima neque!</p>
        </div>
    )
}

export default Rainbow(About);
import React from 'react';

const Todos = ({todos,removeTask}) => {

    const todoList = todos.length ? (todos.map(todo => {
        return (
        <div className="collection-item" key={todo.id} onClick={()=>removeTask(todo)}>
            <span>{todo.content}</span>
        </div>
        )
    })) :  (
        <p className= "center">The todo list is empty</p>
    );

    
    return (
        <div className="todos collection" >
            {todoList}
        </div>
    )
}

export default Todos;
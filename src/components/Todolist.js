import React from "react";
import Todo from "./todo.js";

function TodoList(props){
    console.log(props.todos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
            {/* we can write js code in here in {}*/}
            {/* we are rendering every todo(i.e. its text and id) in todo.js */}
            {props.todos.map(todo=>(            
                <Todo 
                todo = {todo}     // passing todo as a property to del it in todo.js
                todos = {props.todos}
                setTodos = {props.setTodos}
                text={todo.text} 
                key = {todo.id}
                />
            ))}
            </ul>
        </div>
    );
}

export default TodoList;
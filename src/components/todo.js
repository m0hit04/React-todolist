import React from "react";

function Todo(props)
{
    function deleteHandler(){
        props.setTodos(props.todos.filter((el) =>
         (el.id !== props.todo.id)    //curr element id !== todo.id(todo is every element in todos) 
        ));
    };
    
    function completeHandler(){
        props.setTodos(props.todos.map(item => {
            if(item.id === props.todo.id)
            {
                return{
                    ...item, completed : !item.completed
                };
            }
            return item;
        }));
    };

    return(
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed" : ""}`} >{props.text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
}

export default Todo;
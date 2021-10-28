import React from "react";

function Form(props){
    //js code and functions
    function inputTextHandler(event){
        console.log(event.target.value);
        props.setInputText(event.target.value);
    }
    function submitHandler(event){
        props.setTodos([
            ...props.todos, 
            {text: props.input, completed: false, id: Math.random()*1000}
        ]);  //created the object of todos
        props.setInputText("");   // to empty the inputText state. 

        
        //first inputText get updated in inputTextHandler, then todos get
        //updated in submitHandler and then inputText value updated to empty.
        //Now in input tag we use value ={props.inputText}, so after submitting 
        //the value get updated to empty and hence after submitting input tag shows empty.
        event.preventDefault();
    }
    return (
        <form>
            <input value ={props.input} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
      </div>
        </form>
    );
}

export default Form;
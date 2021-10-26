import React, { useState } from "react";
import './App.css';
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
    <header>
      <h1>Todo List</h1>
    </header>
    <Form
     todos={todos}     // first parameter could be any name, second will be the value.
     setTodos={setTodos}  
     input={inputText}     //like this, input will be use in form.js
     setInputText={setInputText} //we can use inputText anywhere in our app now.
    />
    <TodoList 
      setTodos = {setTodos}
      todos = {todos}  //created the object of todos in form.js
     />
  </div>
    ) ;
}

export default App;

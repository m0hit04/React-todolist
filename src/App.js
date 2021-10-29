import React, { useEffect, useState } from "react";
import "./App.css";
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/Todolist";

function App() {
  //state declarations
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useeffect

  useEffect(() => {
    console.log("hey");  //hey will be printed everytime when the todos or status updates
    filterHandler();
  }, [todos, status]);

  //functions and events

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((el) => el.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((el) => el.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos} // first parameter could be any name, second will be the value.
        setTodos={setTodos}
        input={inputText} //like this, input will be use in form.js
        setInputText={setInputText} //we can use inputText anywhere in our app now.
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos} //created the object of todos in form.js
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;

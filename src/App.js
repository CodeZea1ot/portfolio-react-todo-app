import React, { useState } from "react";
import "./App.css";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//End Boostrap

//Start Font-Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faTimes,
  faUndoAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

//End Font-Awesome

import TodoWidget from "./components/TodoWidget/TodoWidget";
import TodoList from "./components/TodoList/TodoList";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Setup Library for FA so icons can be used without importing in every component
library.add(faCheckSquare, faTimes, faUndoAlt, faPlus);

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const undoCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (e, index) => {
    const newTodos = [...todos];
    console.log(e);
    console.log("edit todo");
    setTodos(newTodos);
  };

  const updateTodo = (index) => {
    const newTodos = [...todos];
    console.log("update todo");
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Header></Header>
      <TodoWidget>
        <TodoForm addTodo={addTodo} />
        <TodoList className="align-items-center justify-content-center">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              undoCompleteTodo={undoCompleteTodo}
              editTodo={editTodo}
              updateTodo={updateTodo}
            />
          ))}
        </TodoList>
      </TodoWidget>
      <Footer></Footer>
    </div>
  );
}

export default App;

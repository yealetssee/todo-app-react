import React, { useState } from "react";
import TodoItem from "./Todo-item";
import FilterTodos from "./Filter-todos";
import { v4 as uuidv4, v5 as uuidv5 } from "uuid";

const ToDo = () => {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      text: "Complete online JavaScript course",
      completed: true,
    },
    {
      id: uuidv4(),
      text: "Jog around the park 3x",
      completed: false,
    },
    {
      id: uuidv4(),
      text: "10 minutes meditation",
      completed: false,
    },
  ]);
  const [filter, setFilter] = useState("all");
  const filteredTodos =
    filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : todos;

  const handleSubmit = (event) => {
    if (inputValue != "") {
      event.preventDefault();
      const newTodo = {
        id: uuidv4(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);

      setInputValue("");
    } else {
      event.preventDefault();

      event.stopPropagation();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <section>
      <div className="header">
        <h1>todo</h1>
        <div className="toggleLogo">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
          </svg>
        </div>
      </div>
      <form className="createBox" onSubmit={handleSubmit}>
        <div className="checkBox">
          <input type="submit" value={""} id="newCheck" />
        </div>
        <input
          type="text"
          name="newTodo"
          id="newTodo"
          placeholder="Create a new todo..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        />
      </form>

      <TodoItem setTodos={setTodos} filtered={filteredTodos} />
      <FilterTodos
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter}
        filter={filter}
      />
      <p className="drag-drop">Drag and drop to reorder list</p>
    </section>
  );
};

export default ToDo;

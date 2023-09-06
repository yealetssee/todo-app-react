import React, { useContext, useEffect, useState } from "react";
import "./ToDo.css";
import TodoItem from "./Todo-item";
import FilterTodos from "./Filter-todos";

import { ThemeContext } from "../App";
import useService from "../hooks/useService";

const ToDo = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const { todoss, setTodoss, loading, fetchData, createTodo, deleteTodo } =
    useService();
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const [filter, setFilter] = useState("all");
  const filteredTodos =
    filter === "completed"
      ? todoss.filter((todo) => todo.completed)
      : filter === "active"
      ? todoss.filter((todo) => !todo.completed)
      : todoss;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() != "") {
      const newTodo = {
        value: inputValue,
        completed: isChecked,
      };
      createTodo(newTodo);

      setInputValue("");
      setIsChecked(false);
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

  const handleCompleteCheckboxChange = () => {
    setIsChecked((checkstate) => !checkstate);
  };

  return (
    <section>
      <div className="header">
        <h1>todo</h1>
        <div className="toggleLogo" onClick={changeTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
          </svg>
        </div>
      </div>
      <form className="createBox">
        <div className="checkBox">
          <input
            className="newCheck"
            type="checkbox"
            id="newCheck"
            checked={isChecked}
            onChange={handleCompleteCheckboxChange}
          />
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

      {!loading ? (
        <div>
          <TodoItem
            setTodos={setTodoss}
            filtered={filteredTodos}
            isLoading={loading}
            deleteTodo={deleteTodo}
          />
          <FilterTodos
            todos={todoss}
            setTodos={setTodoss}
            setFilter={setFilter}
            filter={filter}
          />
        </div>
      ) : null}

      <p className="drag-drop">Drag and drop to reorder list</p>
    </section>
  );
};

export default ToDo;

import { useContext, useState } from "react";
import "./Filter-todos.css";
import { ThemeContext } from "../App";

const FilterTodos = ({ todos, setTodos, setFilter, filter }) => {
  const clickClearHandler = () => {
    setTodos((newTodos) =>
      newTodos.filter((todo) => {
        return !todo.completed;
      }),
    );
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div className="parent">
      <div className="amountAndclear">
        <span>
          {todos.length} item{todos.length !== 1 ? "s" : ""} left
        </span>
        <span onClick={clickClearHandler}>Clear Completed</span>
      </div>
      <div className="filters">
        <span
          style={{ color: filter === "all" ? "#3a7cfd" : null }}
          onClick={() => handleFilterChange("all")}
        >
          All
        </span>
        <span
          style={{ color: filter === "active" ? "#3a7cfd" : null }}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </span>
        <span
          style={{ color: filter === "completed" ? "#3a7cfd" : null }}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </span>
      </div>
    </div>
  );
};

export default FilterTodos;

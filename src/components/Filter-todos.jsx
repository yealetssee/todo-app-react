import { useState } from "react";
import "./Filter-todos.css";

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
          className={filter === "all" ? "active" : ""}
          onClick={() => handleFilterChange("all")}
        >
          All
        </span>
        <span
          className={filter === "all" ? "active" : ""}
          onClick={() => handleFilterChange("active")}
        >
          Active
        </span>
        <span
          className={filter === "all" ? "active" : ""}
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </span>
      </div>
    </div>
  );
};

export default FilterTodos;

import { useEffect } from "react";
import "./Todo-item.css";
const TodoItem = ({ todos, setTodos }) => {
  const clickRemoveHandler = (id) => {
    setTodos((todoobj) => todoobj.filter((obj) => obj.id !== id));
  };

  const checkCompleteHandler = (id) => {
    setTodos((newTodos) => {
      return newTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  const completed = `background-image: url(/src/assets/images/icon-check.svg),
  linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
background-repeat: no-repeat;

background-position: center;

outline: none`;

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <div className="checkBox">
            <input
              type="checkbox"
              id={todo.id}
              onChange={() => checkCompleteHandler(todo.id)}
              style={todo.completed ? { completed } : null}
            />
          </div>
          <p>{todo.completed ? <del>{todo.text}</del> : todo.text}</p>
          <div
            className="removeIcon"
            onClick={() => clickRemoveHandler(todo.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="3 3 12 12"
              width="12"
              height="12"
            >
              <path
                fill="#494C6B"
                fillRule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;

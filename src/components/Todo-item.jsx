import "./Todo-item.css";
const TodoItem = ({ text }) => {
  return (
    <div className="todo-item">
      <div className="checkBox">
        <input type="checkbox" id="checkItem" />
      </div>
      <p>
        <del>{text}</del>
      </p>
      <div className="removeIcon">
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
  );
};

export default TodoItem;

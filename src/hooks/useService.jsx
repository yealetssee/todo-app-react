import axios from "axios";
import { useState, useEffect } from "react";

const useService = () => {
  const [todoss, setTodoss] = useState();
  const [todoData, setTodoData] = useState({});
  const [loading, setLoading] = useState(true);

  const getAllTodos = async () => {
    try {
      const response = await axios.get(
        "https://to-do-app-backend-hsbh.onrender.com/api/todos",
      );
      setTodoss(response.data);
      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchData = async () => {
    try {
      await getAllTodos();
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const createTodo = async (data) => {
    try {
      await axios.post(
        "https://to-do-app-backend-hsbh.onrender.com/api/todos",
        data,
      );
      getAllTodos();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(
        `https://to-do-app-backend-hsbh.onrender.com/api/todos/${id}`,
      );
      if (response.status === 200) {
        setTodoss((todoobj) => todoobj.filter((obj) => obj.id !== id));
      } else {
        console.error(`Request failed with status code ${response.status} `);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getAllTodos,
    todoss,
    setTodoss,
    loading,
    setLoading,
    fetchData,
    createTodo,
    deleteTodo,
  };
};

export default useService;

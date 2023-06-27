import "./componentsCss/Render.css";
import { useEffect, useState } from "react";
import axios from "axios";

const TodoTitle = (props) => {
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/todos")
      .then((response) => setTodoData(response.data));
  }, []);

  return (
    <>
      {todoData.map((todo) => (
        <div key={todo.id} className="show-todo">
          {todo.done === true ? (
            <input type="checkbox" checked="true"></input>
          ) : (
            <input type="checkbox"></input>
          )}
          <div>{todo.title}</div>
        </div>
      ))}
    </>
  );
};

export default TodoTitle;

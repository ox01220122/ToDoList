import "./componentsCss/Render.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const TodoTitle = (props) => {
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/todos")
      .then((response) => setTodoData(response.data));
  }, []);

  function AddData() {
    useEffect(() => {
      axios
        .get("http://localhost:8000/todos")
        .then((response) => setTodoData(response.data));
    }, []);
  }

  return (
    <>
      <div className="input-data">
        <input
          type="text"
          placeholder="Add your new Todo"
          className="input-data-text"
        ></input>
        <button className="add-button">ADD</button>
      </div>
      {todoData.length === 0 ? (
        <div>
          <div className="null-msg">ToDoList를 추가하세요 ! </div>
        </div>
      ) : (
        todoData.map((todo) => (
          <div key={todo.id} className="show-todo">
            <span className="check-list">
              {todo.done === true ? (
                <input type="checkbox" checked={true} />
              ) : (
                <input type="checkbox" />
              )}
              <div>
                <div className="todo-title">{todo.title}</div>
              </div>
            </span>
            <button className="trash-button">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        ))
      )}
    </>
  );
};

export default TodoTitle;

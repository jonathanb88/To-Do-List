import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import trashIcon from "../icons/trashIcon.png";
import editIcon from "../icons/editIcon.png";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  console.log("cheto", task);
  return (
    <div className="show-todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "task-completed" : ""}`}
      >
        {task.task}
      </p>
      <div>
        {/* <FontAwesomeIcon
          className="fa-icon"
          size="xl"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        /> */}
        <img
          src={editIcon}
          alt="Trash icon"
          onClick={() => editTodo(task.id)}
        />
        <img
          src={trashIcon}
          alt="Trash icon"
          onClick={() => deleteTodo(task.id)}
        />
        {/* <FontAwesomeIcon
          className="fa-icon"
          size="xl"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        /> */}
      </div>
    </div>
  );
};

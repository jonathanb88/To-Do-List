import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="edit-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Update Task"
        className="input-todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn-todo">
        Update task
      </button>
    </form>
  );
};

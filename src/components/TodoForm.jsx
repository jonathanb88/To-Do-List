import React, { useState } from "react";

// 4. here i import the prop addTodo from wrapper to pass the prop to the parent
export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  //2. capture the value submited
  const handleSubmit = (e) => {
    // prevent default action to refresh
    e.preventDefault();
    //3.  this is what is passed to the wrapper
    addTodo(value);
    setValue("");
  };

  return (
    <form className="form-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please insert a task"
        className="input-todo"
        value={value}
        // 1. captures the input being written in setValue
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button type="submit" className="btn-todo">
        Add task
      </button>
    </form>
  );
};

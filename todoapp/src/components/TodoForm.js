import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handlesubmit = e =>{
    e.preventDefault();
    addTodo(value);
    setValue('')
  }
  return (
    <form className="TodoForm" onSubmit={handlesubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="what is the task today?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;

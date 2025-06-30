import React from "react";

function CreateTodo() {
  return (
    <div className="create-todo-container">
      <input className="todo-input" type="text" placeholder="enter a task.." />
      <button className="create-button">create</button>
    </div>
  );
}

export default CreateTodo;

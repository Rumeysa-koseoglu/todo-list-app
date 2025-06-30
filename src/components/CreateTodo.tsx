import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/TodoSlice";
import type { TodoType } from "../types/Types";

function CreateTodo() {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("please enter a task!");
      return;
    }

    const payload: TodoType = {
      id: Math.floor(Math.random() * 999999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };

  return (
    <div className="create-todo-container">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        className="todo-input"
        type="text"
        placeholder="enter a task.."
      />
      <button onClick={handleCreateTodo} className="create-button">
        create
      </button>
    </div>
  );
}

export default CreateTodo;

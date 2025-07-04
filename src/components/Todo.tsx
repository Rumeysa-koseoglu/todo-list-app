import React, { useState } from "react";
import { PiTrashSimpleLight } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import "../css/Todo.css";
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import {
  removeTodoById,
  toggleCompleted,
  updateTodo,
} from "../redux/TodoSlice";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;

  //we call the dispatch function to send an action to the Redux store
  const dispatch = useDispatch();

  const [editTask, setEditTask] = useState<boolean>(false);

  const [newTodo, setNewTodo] = useState<string>(content);

  //runs removeTodoById action when the button is clicked. This action deletes the todo(task) by ID
  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id,
      content: newTodo,
      completed: todoProps.completed,
    };
    dispatch(updateTodo(payload));
    setEditTask(false);
  };

  const handleToggleCompleted = () => {
    dispatch(toggleCompleted(id));
  };

  return (
    <div className="todo-container">
      {editTask ? (
        <input
          className="edit-input"
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div
          className="todo-content"
          onClick={handleToggleCompleted}
          style={{
            textDecoration: todoProps.completed ? "line-through" : "none",
            color: todoProps.completed ? "gray" : "#9e78cf",
            cursor: "pointer",
          }}
        >
          {content}
        </div>
      )}
      <div className="icons-container">
        {editTask ? (
          <IoMdCheckmark className="icons" onClick={handleUpdateTodo} />
        ) : (
          <CiEdit className="icons" onClick={() => setEditTask(true)} />
        )}

        <PiTrashSimpleLight
          onClick={handleRemoveTodo}
          className="icons"
          style={{ marginLeft: "10px" }}
        />
      </div>
    </div>
  );
}

export default Todo;

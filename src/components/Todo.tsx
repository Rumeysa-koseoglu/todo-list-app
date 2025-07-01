import React, { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import "../css/Todo.css";
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/TodoSlice";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;

  const dispatch = useDispatch();

  const [editTask, setEditTask] = useState<boolean>(false);

  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditTask(false);
  };

  return (
    <div className="todos-container">
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
        <div>{content}</div>
      )}
      <div>
        <IoIosRemoveCircleOutline
          onClick={handleRemoveTodo}
          className="icons"
          style={{ marginRight: "8px" }}
        />

        {editTask ? (
          <CiCircleCheck className="icons" onClick={handleUpdateTodo} />
        ) : (
          <CiEdit className="icons" onClick={() => setEditTask(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;

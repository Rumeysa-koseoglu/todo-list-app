import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/Store";
import type { TodoType } from "../types/Types";

function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todo); //(RootState is the type of the entire global state of the application)
  return (
    <div>
      {/**create a Todo component for each todo object */}
      {todos &&
        todos.map((todo: TodoType) => <Todo key={todo.id} todoProps={todo} />)}
    </div>
  );
}

export default TodoList;

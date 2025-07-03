import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/TodoSlice";
import type { TodoType } from "../types/Types";

function CreateTodo() {
  const dispatch = useDispatch(); // in redux logic, we use dispatch to change a data

  const [newTodo, setNewTodo] = useState<string>(""); //with this line we store the text that the user wrote in the input

  //this function will run when the create button is clicked
  const handleCreateTodo = () => {
    //we prevent the user from entering an empty task into tha input field
    if (newTodo.trim().length == 0) {
      alert("please enter a task!");
      return;
    }

    //here, we create a new todo object
    const payload: TodoType = {
      id: Math.floor(Math.random() * 999999999), //we generate a random number using 'Math.random' to get a unique ID
      content: newTodo, //the task text written by the user
      completed: false,
    };
    //we send "create a todo" command to Redux
    dispatch(createTodo(payload)); //calls the function in TodoSlice.jsx (and sends the command to Redux so the state updates)
    setNewTodo(""); //when the user writes and adds a task, the input is emptied and becomes ready for writing again
  };

  return (
    <div className="create-todo-container">
      <input
        value={newTodo} //value of the input comes from useState
        //transfers every character typed by the user to state
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        className="todo-input"
        type="text"
        placeholder="enter a task.."
      />
      {/**thaks to the handleCreateTodo function , a new task will be added when the clear button is clicked */}
      <button onClick={handleCreateTodo} className="create-button">
        create
      </button>
    </div>
  );
}

export default CreateTodo;

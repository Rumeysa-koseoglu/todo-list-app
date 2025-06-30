import React from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import "../css/Todo.css";

function Todo() {
  return (
    <div className="todos-container">
      <div> I am the first todo</div>
      <div>
        <IoIosRemoveCircleOutline
          className="icons"
          style={{ marginRight: "8px" }}
        />
        <CiEdit className="icons" />
      </div>
    </div>
  );
}

export default Todo;

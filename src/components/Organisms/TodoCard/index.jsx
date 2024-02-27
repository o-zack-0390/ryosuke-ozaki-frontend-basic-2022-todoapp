import React from "react";
import { Task } from "../../Molecules/Task/index"
import "./style.css";

export const TodoCard = () => {

  const onTaskNameChange = () => {

  }

  const onTaskComplete = () => {

  }

  const taskName = "";

  const defaultValue = "";

  return (
    <Task 
      onTaskNameChange = {onTaskNameChange}
      onTaskComplete = {onTaskComplete}
      taskName = {taskName}
      defaultValue = {defaultValue}
    />
  );
}
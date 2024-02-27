import React, { useState } from "react";
import styled from "styled-components";
import TEXTS from "../../../variables/texts";
import COLOR from "../../../variables/color";
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
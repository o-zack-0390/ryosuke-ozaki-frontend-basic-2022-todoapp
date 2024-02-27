import React, { useState } from "react";
import styled from "styled-components";
import TEXTS from "../../../variables/texts";
import COLOR from "../../../variables/color";
import { Checkbox } from "../../Atoms/Checkbox/index"
import { EditButton } from "../../Atoms/EditButton/index"
import { Input } from "../../Atoms/input/index"
import "./style.css";

export const Task = ({ onTaskNameChange, onTaskComplete, taskName, defaultIsEditing=false }) => {
  
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  // タスク名の編集が完了したら、編集中でないことを示す false に変更し、タスク名を更新
  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  }

  // 編集ボタンが押されたら、編集中であることを示す true に変更
  const onEditButtonClick = () => {
    setIsEditing(true);
  }

  return (
    <TaskContainer className="task-container">
      <Checkbox onClick={onTaskComplete}></Checkbox>
      {isEditing ?
      <Input className="edit-input" onEditComplete={onEditComplete} defaultValue={taskName}></Input>
      :
      <PrintContent className="print-content">
        <PrintTaskName className="print-taskname">{taskName}</PrintTaskName>
        <EditButton className="edit-button" onClick={onEditButtonClick}></EditButton>
      </PrintContent>
    }
    </TaskContainer>
  );
}

const TaskContainer = styled.div``;

const PrintContent = styled.div``;

const PrintTaskName = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXTS.S};
`;
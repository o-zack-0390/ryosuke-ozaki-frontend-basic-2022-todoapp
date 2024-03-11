import React, { useState } from "react";
import styled from "styled-components";
import TEXTS from "../../../variables/texts";
import COLOR from "../../../variables/color";
import { Checkbox } from "../../Atoms/Checkbox/index"
import { EditButton } from "../../Atoms/EditButton/index"
import { Input } from "../../Atoms/input/index"

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
    <TaskContainer>
      <Checkbox onClick={onTaskComplete}></Checkbox>
      {isEditing ? // 編集中なら Input 要素を表示し、編集中でないなら PrintContent を表示する
      <Input onEditComplete={onEditComplete} defaultValue={taskName}></Input>
      :
      <PrintContent>
        <PrintTaskName>{taskName}</PrintTaskName>
        <EditButton onClick={onEditButtonClick}></EditButton>
      </PrintContent>
    }
    </TaskContainer>
  );
}

const TaskContainer = styled.div`
  padding: 2px 6px;
  display: flex;
  gap: 10px;
`;

const PrintContent = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const PrintTaskName = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXTS.S};
  margin: 0px;
  flex: 1; 
`;
/* 
  margin 0px: -> p タグには初期値で margin が設定されているので上書き
  flex: 1     -> 編集ボタンとの余白を埋めて間隔を保持するように変更 
*/
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
      <CheckboxContainer>
        <Checkbox onClick={onTaskComplete} />
      </CheckboxContainer>
      {isEditing ? // 編集中なら Input 要素を表示し、編集中でないなら PrintContent を表示する
        <Input onEditComplete={onEditComplete} defaultValue={taskName}/>
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

const CheckboxContainer = styled.div`
  flex: 1;
`;
/*
  タスク名が長い場合に編集ボタンが潰れるため flex で調整
*/

const PrintContent = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  overflow: hidden;
`;
/*
  overflow: hidden の必要性

  要因 1 : 「taskName」が親要素「PrintTaskName」を突き抜ける
  ↓
  要因 2 : 要因 1 の影響を受け「PrintTaskName」の親要素「PrintContent」のサイズが比例して大きくなる
  ↓
  要因 3 : 要因 2 の影響を受け「PrintContent」が親要素「TaskContainer」を突き抜ける
  ↓
  対処法 : 要因 3 の影響で「EditButton」がコンテナからはみ出しているため overflow: hidden を用いてパディングボックスに合わせて切り取る
*/

const PrintTaskName = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  ${TEXTS.S};
  margin: 0px;
  flex: 1 1 auto; 
  overflow: hidden;
  text-overflow: ellipsis;
`;
/* 
  margin 0px:             -> p タグには初期値で margin が設定されているので上書き
  flex: 1                 -> 編集ボタンとの余白を埋めて間隔を保持するように変更 
  overflow: hidden        -> 親要素を突き抜けるサイズの場合はパディングボックスに合わせて切り取られる
  text-overflow: ellipsis -> あふれた内容を「...」で表示

  参考文献
  https://developer.mozilla.org/ja/docs/Web/CSS/overflow
  https://developer.mozilla.org/ja/docs/Web/CSS/text-overflow

*/

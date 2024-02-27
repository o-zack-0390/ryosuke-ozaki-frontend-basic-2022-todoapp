import React, { useState } from "react";
import styled from "styled-components";
import TEXTS from "../../../variables/texts";
import COLOR from "../../../variables/color";
import { AddTaskButton } from "../../Atoms/AddTaskButton";
import { Task } from "../../Molecules/Task/index";
import "./style.css";

/* 
  AddTaskButton コンポーネントの引数に設定
  ・ onAddTaskButtonClick

  Task コンポーネントの引数に設定
  ・ onTaskComplete
  ・ onTaskNameChange
  ・ taskList の要素
*/

export const TodoCard = () => {

  // タスク追加ボタンを押したら、新しいタスクを配列に追加
  const onAddTaskButtonClick = () => 
  {
    // push だと要素数を return するのでエラーになる
    setTaskList([...taskList, { name: "", initializing: true }]);
  }

  // タスク完了ボタンを押したら、該当タスクを配列から削除
  const onTaskComplete = (popTargetIndex) => 
  {
    // 削除対象のタスク以外を taskList に残す
    setTaskList(taskList.filter((task, index) => (index !== popTargetIndex)));
  }

  // タスク編集完了ボタンが押されたらタスク名を変更し、編集状態を更新
  const onTaskNameChange = (value, editTargetIndex) => {

    // 何も入力されていない場合はタスクを削除
    if(value === ""){
      onTaskComplete(editTargetIndex);
    }

    // 入力されている場合はタスク名を更新
    else{
      setTaskList(() => {
        const newTaskList = [...(taskList || [])];         // taskListのコピーを作成
        newTaskList[editTargetIndex].name = value;         // 該当タスクの名前を変更
        newTaskList[editTargetIndex].initializing = false; // 編集状態を更新
        return newTaskList;
      })
    }
    /* 
      複製を作成せずに taskList を return すると 再描画されない。
      State の変更が反映されないことが原因らしい。

      State の変更が反映されない：
        setTaskList 関数外で直接 taskList を変更するのと同じなため、React の更新サイクル外で State を変更していることになる。
        setTaskList 関数で新しい配列を返すことがないため、React は State が変更されたことを検出できない。
        これにより、コンポーネントが再描画されず、変更が画面に反映されなくなる。
        useState を使用している変数は直接書き換えないようにした方がいい。

      該当コード
      const onTaskNameChange = (value, editTargetIndex) => {
        setTaskList(() => {
          taskList[editTargetIndex].name = value;         // ここで直接変更してしまうと useState 側では変更点なしと判断される
          taskList[editTargetIndex].initializing = false; // ここで直接変更してしまうと useState 側では変更点なしと判断される
          return taskList;
        })
      }
    */
  }

  const [taskList, setTaskList] = useState([]);

  return (
    <TodoCardContainer>
      <AddTaskButton 
        onClick={onAddTaskButtonClick}
      />
      {taskList.map((task, index) => ( // taskList の各要素に対して Task コンポーネントを適用
        <Task // Task コンポーネントに渡す引数を設定
          key={index}                                                    // 各要素に一意な key を追加
          onTaskNameChange = {(value) => onTaskNameChange(value, index)} // タスク編集時の処理を関数にして設定
          onTaskComplete = {() => onTaskComplete(index)}                 // タスク完了時の処理を関数にして設定
          taskName = {task.name}                                         // タスク名を設定
          defaultValue = {task.initializing}                             // 編集状態を設定
          
          /*
            onTaskComplete の引数について

            {onTaskComplete(index)} にするとタスク完了を待たずに即実行されるため NG
            {() => onTaskComplete(index)} にするとタスク完了時に実行される関数として機能する
            onTaskNameChange も同様。
          */
        />
      ))}
    </TodoCardContainer>
  );
}

const TodoCardContainer = styled.div``;
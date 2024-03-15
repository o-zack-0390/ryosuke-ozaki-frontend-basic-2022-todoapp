import { Task } from "./index";

export default {
  component: Task, // コンポーネントを指定
  title: "Components/Molecules/Task", // タイトルを命名。同じタイトルが複数存在すると Story Book 起動後エラーになる。
};

// index.jsx Task コンポーネントの引数を設定
export const Default = {
  args:{
    // タスク名の編集が完了したらタスク名を更新
    onTaskNameChange: (value) => {
      console.log("taskname changed: " + value);
    },

    // チェックボックスが押されたら、タスク完了処理を実行
    onTaskComplete: () => {
      console.log("task completed");
    },

    taskName: "taskname",
    defaultIsEditing: false,
  }
};

/*
  export const Default について

  ここで設定した引数は、Task/index.jsx Task コンポーネントの引数が設定されなかった場合のみ呼び出される。
  他のファイルから args が設定された場合は参照されない。
*/
import { AddTaskButton } from "./index";

export default {
  component: AddTaskButton, // コンポーネントを指定
  title: "Components/Atoms/AddTaskButton", // タイトルを命名。同じタイトルが複数存在すると Story Book 起動後エラーになる。
};

// index.jsx AddTaskButton コンポーネントの引数を設定
export const Default = {
  args: {
    onClick: () => console.log("clicked"),
  },
};

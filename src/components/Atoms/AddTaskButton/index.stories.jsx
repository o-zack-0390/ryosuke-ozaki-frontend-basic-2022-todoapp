import { AddTaskButton } from "./index";

export default {
  component: AddTaskButton, // コンポーネントを指定
};

// index.jsx EditButton コンポーネントの引数を設定
export const Default = {
  args: {
    onClick: () => console.log("clicked"),
  },
};

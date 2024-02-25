import { Checkbox } from "./index";

export default {
  component: Checkbox, // コンポーネントを指定
  title: "Components/Atoms/Checkbox", // タイトルを命名。同じタイトルが複数存在すると Story Book 起動後エラーになる。
};

// index.jsx Checkbox コンポーネントの引数を設定
export const Default = {
  args: {
    onClick: () => console.log("clicked"),
  },
};

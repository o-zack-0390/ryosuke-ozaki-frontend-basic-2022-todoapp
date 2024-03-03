import { EditButton } from "./index";

export default {
  component: EditButton, // コンポーネントを指定
};

// index.jsx EditButton コンポーネントの引数を設定
export const Default = {
  args: {
    onClick: () => console.log("clicked"),
  },
};

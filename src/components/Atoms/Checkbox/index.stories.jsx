import { Checkbox } from "./index";

export default {
  component: Checkbox, // コンポーネントを指定
};

// index.jsx Checkbox コンポーネントの引数を設定
export const Default = {
  args: {
    onClick: () => console.log("clicked"),
  },
};

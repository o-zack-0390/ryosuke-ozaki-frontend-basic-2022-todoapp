import { Input } from "./index";

export default {
  component: Input
};

// index.jsx Input コンポーネントの引数を設定
export const Default = {
  args: {
    onEditComplete: (inputValue) => console.log("edit completed: " + inputValue),
    defaultValue: ""
  },
};

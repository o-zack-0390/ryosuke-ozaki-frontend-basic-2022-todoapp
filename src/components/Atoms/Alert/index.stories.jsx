import { Alert } from "./index";

export default {
  component: Alert, // コンポーネントを指定
};

// index.jsx Alert コンポーネントの引数を設定
export const Default = {
    args:{
        isActive: true, 
        context: "text",
    }
};

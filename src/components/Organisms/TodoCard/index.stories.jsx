import { TodoCard } from "./index";

export default {
  component: TodoCard, // コンポーネントを指定
};

// index.jsx TodoCard コンポーネントの引数を設定
export const Default = {};

/*
  export const Default について

  ここで設定した引数は、TodoCard/index.jsx Task コンポーネントの引数が設定されなかった場合のみ呼び出される。
  他のファイルから args が設定された場合は参照されない。
*/
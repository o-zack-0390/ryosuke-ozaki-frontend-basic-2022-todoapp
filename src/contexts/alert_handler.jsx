import React, { createContext, useContext, useState } from "react";

// Context を作成
const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
/*
    visible      : アラートが表示されているかどうかを示す boolean 変数
    errorText    : アラートに表示するエラー文を格納する変数
    setAlert()   : アラートを表示する関数
    closeAlert() : アラートを非表示にする関数
*/

  // 初期値は非表示を示す false を設定
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  // task コンポーネントが空のタスクを消去したら errorText でユーザーに補足説明する
  const setAlert = (errorText) => {
    setAlertState({
      visible: true,
      errorText: errorText,
    });
  };
  
  // 一定時間経過したらアラートを消去する
  const closeAlert = () => {
    setAlertState({
      visible: false,
      errorText: "",
    });
  };

  // 他コンポーネントで必要な情報を集約
  const contextValue = {
    ...alertState, // visible(変数), errorText(変数) に展開している
    setAlert,      // setAlert(関数)
    closeAlert,    // closeAlert(関数)
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
/*
    AlertHandlerContext の引数に設定された変数を他のコンポーネントからも使用できるようになる。
    他コンポーネントからインポートすることで「.」を用いて参照可能。

    const AlertHandlerContext = useAlertHandlerContext();
    AlertHandlerContext.visible;
    AlertHandlerContext.errorText;
    AlertHandlerContext.setAlert(errorText);
    AlertHandlerContext.closeAlert();
*/
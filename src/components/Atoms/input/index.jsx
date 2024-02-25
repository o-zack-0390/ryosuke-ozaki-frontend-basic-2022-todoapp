import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import TEXTS from "../../../variables/texts";
import COLOR from "../../../variables/color";
import "./style.css";

export const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef(null);

  // input要素からフォーカスが外れた時に編集完了処理を行う
  const handleBlur = () => {
    onEditComplete(inputRef.current.value);
  };

  // Enter キーが入力された場合は、 編集完了処理を行う
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEditComplete(inputRef.current.value);
    }
  };

  // 画面上に生成されたときのみフォーカスを当てる
  useEffect(() => {inputRef.current.focus();}, [])
  /*
    構文: useEffect(関数, 対象変数)

    useEffect は指定した値が変更された場合のみ処理を実行する。
    普通に呼び出されると、コンポーネントが再描画される度に関数内に記載した全ての処理が再実行されるため、
    useEffect を使用しないと無駄な実行が多くなる。
  */

  return (
    <InputContainer className="input-container">
      <InputField
        className="input-field"
        defaultValue={defaultValue}
        ref={inputRef}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    </InputContainer>
  );
  /*
    defaultValue -> input要素が入力されてない場合、代わりに入力しておく値を指定する HTML 属性
    onBlur       -> 要素がフォーカスを失ったときに実行される 関数 を指定する HTML 属性
    onKeyDown    -> キー入力時に実行される 関数 を指定する HTML 属性
  */
};

const InputContainer = styled.div``;

const InputField = styled.input`
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
  ${TEXTS.S}
`;

import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg"
import TEXTS from "../../../variables/texts";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import "./style.css";

export const AddTaskButton = ({onClick}) => {
  return (
    <Button onClick={onClick}>
      <ButtonImage src={plus}/>
      <ButtonText className="add-task-button-text">タスクを追加</ButtonText>
    </Button>
  );
}

const Button = styled.button`
  background-color: ${COLOR.GREEN_TRANSPARENT};
  padding: 2px 6px;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
    border-radius: 14px;
  }
`;
/*
    button タグには初期値で border が設定されているので 0px に変更。
    padding も初期値で設定されているので指定値に上書きする。
*/

const ButtonImage = styled.img`
  height: 20px;
`;

const ButtonText = styled.p`
  ${TEXTS.S}
  color: ${COLOR.GREEN};
  font-family: ${FONTFAMILY.NOTO_SANS};
  margin: 0px;
`;
/*
  p タグには初期値で margin が設定されているので 0px に変更
*/
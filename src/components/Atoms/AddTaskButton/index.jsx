import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg"
import TEXTS from "../../../variables/texts";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import "./style.css";

export const AddTaskButton = ({onClick}) => {
  return (
    <Button onClick={onClick} className="add-task-button">
      <ButtonImage src={plus} className="add-task-button-image"/>
      <ButtonText className="add-task-button-text">タスクを追加</ButtonText>
    </Button>
  );
}

const Button = styled.button`
  background-color: ${COLOR.GREEN_TRANSPARENT};
  &:hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
  }
`;

const ButtonImage = styled.img``;

const ButtonText = styled.p`
  ${TEXTS.S}
  color: ${COLOR.GREEN};
  font-family: ${FONTFAMILY.NOTO_SANS};
`;
import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg"
import COLOR from "../../../variables/color";
import "./style.css";

export const Checkbox = ({onClick}) => {
  return (
    <Button onClick={onClick} className="checkbox">
      <ButtonImage src={check} alt="チェックボックスのチェックマーク" className="checkbox-image"/>
    </Button>
  );
}

const Button = styled.button`
  background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  border: 2px solid ${COLOR.LIGHT_GRAY};
`;

const ButtonImage = styled.img``;
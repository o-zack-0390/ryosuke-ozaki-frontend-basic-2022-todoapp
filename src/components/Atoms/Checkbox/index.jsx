import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg"
import COLOR from "../../../variables/color";
import "./style.css";

export const Checkbox = ({onClick}) => {
  return (
    <Button onClick={onClick} className="checkbox">
      <ButtonImage src={check} className="checkbox-image"/>
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

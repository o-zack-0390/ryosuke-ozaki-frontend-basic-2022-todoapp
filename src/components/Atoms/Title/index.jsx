import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import "./style.css";

export const Title = () => {
  return (
    <TitleText>
      SIMPLE TODO APP
    </TitleText>
  );
}

const TitleText = styled.div`
  ${TEXTS.L}
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.ROBOTO};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
      ${TEXTS.M}
      font-family: ${FONTFAMILY.NOTO_SANS};
  }
`;
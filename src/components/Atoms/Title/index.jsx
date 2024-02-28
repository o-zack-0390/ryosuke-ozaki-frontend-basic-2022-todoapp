import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import FONTFAMILY from "../../../variables/font_family";
import "./style.css";

export const Title = () => {
  return (
    <TitleContainer>
      <TitleText>
        SIMPLE TODO APP
      </TitleText>
    </TitleContainer>
  );
}

const TitleContainer = styled.div``;

const TitleText = styled.div`
  ${TEXTS.L}
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.NOTO_SANS};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
      ${TEXTS.M}
  }
`;
import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";
import "./style.css";

export const Title = () => {
  return (
    <TitleContainer className="title-container">
      <TitleText>
        SIMPLE TODO APP
      </TitleText>
    </TitleContainer>
  );
}

// flex コンテナ
const TitleContainer = styled.div``;

// flex アイテム
const TitleText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.L}

  @media (max-width: 750px) {
      ${TEXTS.M}
  }
`;
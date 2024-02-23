import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";

export const Title = () => {
  return (
    <TitleContainer>
      <TitleText>
        SIMPLE TODO APP
      </TitleText>
    </TitleContainer>
  );
}

// flex コンテナ
const TitleContainer = styled.div`
  width: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// flex アイテム
const TitleText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.L}

  @media (max-width: 750px) {
      ${TEXTS.M}
  }
`;
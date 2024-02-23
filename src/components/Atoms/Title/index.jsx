import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";

export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
}

const StyledText = styled.div`
    color: ${COLOR.WHITE};
    ${TEXTS.L}

    @media (max-width: 750px) {
        ${TEXTS.M}
    }
`;
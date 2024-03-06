import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg"
import COLOR from "../../../variables/color";

export const Checkbox = ({onClick}) => {
  return (
    <Button onClick={onClick}>
      <ButtonImage src={check} alt="チェックボックスのチェックマーク" />
    </Button>
  );
}

const Button = styled.button`
  background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  border: 2px solid ${COLOR.LIGHT_GRAY};
  width: 20px;
  height: 20px;
  padding: 0px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover ${ButtonImage} {
    visibility: visible;
  }
`;

const ButtonImage = styled.img`
  width: 100%;
  height: 100%;
  visibility: hidden;
`;

/*
  visibility プロパティで要素の表示/非表示を切り替えることができる。

  参考文献: 
  https://www.mitsue.co.jp/knowledge/blog/frontend/201912/14_0000.html
*/
import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";
import "./style.css";

export const EditButton = ({onClick}) => {
  return (
    <Button onClick={onClick} className="edit-button">
      <ButtonImage src={pencil} className="edit-button-image"/>
    </Button>
  );
}

const Button = styled.button`
  background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;

const ButtonImage = styled.img``;

/* 
  -- 3時間ハマったため透明度を子要素に継承させないための注意点を記載 -- 
  
  要素を透明にしたい場合は opacity を用いるが、子要素まで透明にしてしまう。
  opacity は選択した要素全体に対して適用されるので、子要素にopacityプロパティを指定しても解除できない。
  子要素に透明度を適用しない仕様である rgba を用いて透明度を設定することで解決できる。
  rgba(184,184,184,0.2)

  参考文献
  https://qumeru.com/magazine/560

  */
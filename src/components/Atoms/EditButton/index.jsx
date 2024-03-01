import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

export const EditButton = ({onClick}) => {
  return (
    <Button onClick={onClick} className="edit-button">
      <ButtonImage src={pencil} className="edit-button-image"/>
    </Button>
  );
}

const Button = styled.button`
  width: 20px;
  height: 20px;
  border: 0px;
  background-color: ${COLOR.LIGHT_GRAY_TRANSPARENT};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease 0s;
  &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    border-radius: 20px;
    cursor: pointer;
  }
`;
/*
  relative を指定して edit-button-image セレクタを継承する要素を重ね合わせる方法で表示していたが、
  flex アイテムにして要素を中心に配置した方が楽だったため flex を用いるように変更。

  transition: 0.2s ease 0s -> hover時のアクション時間。 ease は変化速度を途中だけ速くする。 遅延時間は 0 秒。
  border-radius: 20px; -> 半径 20px の円弧をベースにした角丸を実装
  
  参考文献: https://www.webcreatorbox.com/tech/border-radius
  */

const ButtonImage = styled.img`
  width: 20px;
  height: 20px;
`;

/* 
  -- 3時間ハマったため透明度を子要素に継承させないための注意点を記載 -- 
  
  要素を透明にしたい場合は opacity を用いるが、子要素まで透明にしてしまう。
  opacity は選択した要素全体に対して適用されるので、子要素に opacity プロパティを指定しても解除できない。
  子要素に透明度を適用しない仕様である rgba を用いて透明度を設定することで解決できる。
  rgba(184,184,184,0.2)

  参考文献
  https://qumeru.com/magazine/560

  */
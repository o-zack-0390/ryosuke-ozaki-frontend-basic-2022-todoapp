import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color"
import TEXTS from "../../../variables/texts"
import FONTFAMILY from "../../../variables/font_family"

export const Alert = ({ isActive, context }) => {
    return (
        <AlertContainer alertActive={isActive}>
            <AlertContext>{context}</AlertContext>
        </AlertContainer>
    )
}

const AlertContainer = styled.div`
    position: absolute;
    top: ${({alertActive}) => (alertActive ? `80px` : `0px`)};
    left: 50%;
    width: 100%;
    max-width: 400px;
    padding: 10px 20px;
    border-radius: 4px;
    background: ${COLOR.RED};
    transition: all 0.5s ease 0s;
    transform: ${({alertActive}) => (alertActive ? `translate(-50%, 0)` : `translate(-50%, -40%)`)};
    visibility: ${({alertActive}) => (alertActive ? `visible` : `hidden`)};
`;
/*
    top        -> Alert関数の isActive 変数を参照し、三項演算子でサイズを設定
    transition -> トランジションを指定するプロパティ
    all        -> 全プロパティに対してトランジションを適用
    0.5s       -> トランジションタイムを秒単位で指定
    ease       -> 最初と最後はゆっくり描画する。途中では速く描画する
    0s         -> トランジションの遅延を秒単位で指定
    transform  -> 要素を中央に配置
    visibility -> レイアウトの表示設定 (visible:表示, hidden:非表示)
*/

const AlertContext = styled.div`
    ${TEXTS.S};
    color: ${COLOR.WHITE};
    font-family: ${FONTFAMILY.NOTO_SANS};
    transition: all 0.5s ease 0s;
`;
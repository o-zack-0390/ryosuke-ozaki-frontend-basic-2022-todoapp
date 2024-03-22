import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color"
import BREAKPOINT from "../../../variables/breakpoint"
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
    left: 50%;
    top: ${({isActive}) => (isActive ? `80px` : `0px`)};
    width: 100%;
    max-width: 360px;
    padding: 10px 20px;
    border-radius: 4px;
    background: ${COLOR.RED};
    transition: all 0.5s ease 0s;
    transform: translate(-50%, 0);
    opacity: 1;

    @media(max-width: ${BREAKPOINT.MEDIUM}){
        transform: translate(-50%, 100%);
    }
`;
/*
    figma の通りに width = 400px にすると padding 含めて 440px になるので width = 360px に設定。

    top        -> Alert関数の isActive 変数を参照し、三項演算子でサイズを設定
    transition -> トランジションを指定するプロパティ
    all        -> 全プロパティに対してトランジションを適用
    0.5s       -> トランジションタイムを秒単位で指定
    ease       -> 最初と最後はゆっくり描画する。途中では速く描画する
    0s         -> トランジションの遅延を秒単位で指定
    transform  -> 要素を中央に配置
    opacity    -> 不透明度
*/

const AlertContext = styled.div`
    ${TEXTS.S};
    color: ${COLOR.WHITE};
    font-family: ${FONTFAMILY.NOTO_SANS};
`;
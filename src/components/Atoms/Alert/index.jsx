import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color"
import TEXT from "../../../variables/texts"

export const Alert = ({ isActive, context }) => {
    return (
        <AlertContainer alertActive={isActive}>
            <AlertContext>{context}</AlertContext>
        </AlertContainer>
    )
}

const AlertContainer = styled.div`
    position: absolute;
    top: 80px;
    left: 50%;
    width: 100%;
    max-width: 400px;
    padding: 10px 20px;
    background-color: ${COLOR.RED};
    border-radius: 4px;
    transition: all 0.5s ease 0s;
    transform: translate(-50%, -40px);
    visibility: hidden;
    ${({ alertActive }) =>
        alertActive && // alertActiveが true ならば後続の CSS スタイルを適用
        `
        transform: translate(-50%, 0px);
        visibility: visible;
    `}
`;
/*
    transition     -> トランジションを指定するプロパティ
    all            -> 全プロパティに対してトランジションを適用
    0.5s           -> トランジションタイムを秒単位で指定
    ease           -> 最初と最後はゆっくり描画する。途中では速く描画する
    0s             -> トランジションの遅延を秒単位で指定
    transform      -> 要素を配置する座標
    visibility     -> レイアウトの表示設定 (visible:表示, hidden:非表示)
*/

const AlertContext = styled.div`
    ${TEXT.S};
    color: ${COLOR.WHITE};
`;
import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import {Title} from "../../Atoms/Title";
import { TodoCard } from "../../Organisms/TodoCard";

export const MainPage = () => {
    return (
        <MainPageContainer>
            <Title />
            <TodoCardContainer>
                <TodoCard />
            </TodoCardContainer>
        </MainPageContainer>
    )
}

const MainPageContainer = styled.div`
    width: 100%;
    padding: 60px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: ${BREAKPOINT.MEDIUM}){
        padding: 20px;
    }
`;
/*
    padding -> 子要素との余白
    flex-direction: column -> X軸とY軸を反転させて縦方向に並べる
    justify-content:       -> 上下を中央寄せ
    align-items: center    -> 左右を中央寄せ
    gap: 20px;             -> flex アイテム間の間隔
*/

const TodoCardContainer = styled.div`
    width: 500px;

    @media screen and (max-width: ${BREAKPOINT.MEDIUM}){
        width: 100%;
    }
`;
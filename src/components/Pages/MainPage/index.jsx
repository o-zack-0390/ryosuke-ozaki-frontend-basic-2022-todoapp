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

const TodoCardContainer = styled.div`
    width: 500px;

    @media screen and (max-width: ${BREAKPOINT.MEDIUM}){
        width: 100%;
    }
`;
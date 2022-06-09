import styled from "styled-components";
import NavigationBar from "./NavigationBar";

const S = {
    Wrapper: styled.div`
        display: flex;
        width: 500px;
        height: 500px;
        background-color: #9999ff;     
    `
};

const Container = () => {
    return (
        <S.Wrapper>
            <NavigationBar />
        </S.Wrapper>
    );
};

export default Container;
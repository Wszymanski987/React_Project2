import styled from "styled-components";

const S = {
    Wrapper: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100px;
        height: 50px;
        border: solid #413fb5;
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        tranistion: 1s;
        :hover {
            opacity: 0.8;
        }
    `,
    StyledText: styled.div`
        color: #ffffff;
        font-size: 22px;
        font-weight: bold;
        `
};

const About = () => {
    return (
        <S.Wrapper>
            <S.StyledText>O mnie</S.StyledText>
        </S.Wrapper>
    );
};

export default About;
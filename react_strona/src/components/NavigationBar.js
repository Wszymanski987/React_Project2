import styled from "styled-components";
import { useState } from "react";

import MenuComponent from "./MenuComponent";
import About from "./About";
import Counter from "./Counter";

const S = {
    Wrapper: styled.div`
        display: flex;
        width: 500px;
        height: 50px;
        background-color:#9999ff;     
    `
};

const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <S.Wrapper>
            <MenuComponent onClick={() => setOpen((open) => !open )} text = "About"/>
            {open && <About />}
            <MenuComponent onClick={() => setOpen((open) => !open )} text = "Counter"/>
            {open && <Counter />}
        </S.Wrapper>
    );
};

export default NavigationBar;
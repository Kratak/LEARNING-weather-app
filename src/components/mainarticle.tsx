import * as React from 'react'
import styled from './../sc/styled-components'
import { oneDark } from './../styles/globalColors'
import { APP_SUBTITL, APP_TITTLE } from '../lang/messages'
// import { StartButton } from './buttons'

const Wrapper = styled.div`
width: 70%;
h1{
color: ${oneDark.black};
margin-top: 35px;
padding: 5px;

/* border-radius:5%;
border-color: ${oneDark.foreground};
border-style: solid;
border-width: 2px; */

width: 100%;
min-height:50px;
}
h3{
color: ${oneDark.black};
margin: 0px;
margin-top: 2px;
padding: 5px;

/* border-radius:5%;
border-color: ${oneDark.foreground};
border-style: solid;
border-width: 2px; */

width: 100%;
min-height:50px;
}
`;

const Header = () => {
    return(
    <Wrapper>
        {/* <StartButton /> */}
        <h1>{APP_TITTLE.ENG}</h1>
        <h3>{APP_SUBTITL.ENG}</h3>
    </Wrapper>
    )
}

export { Header }
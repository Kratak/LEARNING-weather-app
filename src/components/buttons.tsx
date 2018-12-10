import * as React from 'react'
import { START_BUTTON } from './../lang/messages'
import styled from './../sc/styled-components'
import { oneDark } from './../styles/globalColors'

const ButtonWrap = styled.div`
margin-top:20px;
`
const StartBTN = styled.button`

background: rgb(5,0,82);
background: linear-gradient(
    180deg, 
    rgba(0,212,255,1) 0%,
    rgba(32,32,107,1) 80%, 
    rgba(5,0,82,1) 100% 
    );
border-radius: 45%;
border-color: ${oneDark.foreground};
border-style: solid;
border-width: 4px;

color: ${oneDark.background};
font-size: 4em;
font-weight: 600;
letter-spacing: 3px;

height: 300px;
width: 300px;

transition: 
    background 250ms ease-in-out, 
    transform 150ms ease;

    :focus {
    outline-offset: -4px;
}

    :active {
    transform: scale(0.99);
}
`
const StartButton = () => (
<>
<ButtonWrap> 
    <StartBTN>{START_BUTTON.ENG}</StartBTN>
</ButtonWrap>
</>
)

export { StartButton }
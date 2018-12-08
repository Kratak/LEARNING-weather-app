import * as React from 'react'
import styled from './../sc/styled-components'
import { oneDark } from './../styles/globalColors'

const ButtonWrap = styled.div`
margin: auto;
`
const StartBTN = styled.button`
border-radius: 50%;
background-color: ${oneDark.background};
color: ${oneDark.cyan};
font-size: 3em;
height: 300px;
width: 300px;
`
const StartButton = () => (
<>
<ButtonWrap> 
    <StartBTN>START</StartBTN>
</ButtonWrap>
</>
)

export { StartButton }
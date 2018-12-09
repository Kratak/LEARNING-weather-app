import styled from './../sc/styled-components'
import { oneDark } from './../styles/globalColors'


const StartButton = styled.button`
border-radius: 50%;
background-color: ${oneDark.background};
color: ${oneDark.cyan};
font-size: 3em;
height: 300px;
width: 300px;
:hover {
    background-color: ${oneDark.background02};
    color: ${oneDark.cyandark};
}
`


export { StartButton }
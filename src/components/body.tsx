import styled from './../sc/styled-components'
import { oneDark } from './../styles/globalColors'

const BodyWrapper = styled.body`
/* background: rgb(5,0,82);
background: linear-gradient(
    180deg, 
    rgba(5,0,82,1) 0%, 
    rgba(32,32,107,1) 20%, 
    rgba(0,212,255,1) 100%
    ); */
height: 100vh;
padding-top:50px;
/* padding: auto; */
`;

const AppWrapper = styled.article`

/* background-color: ${oneDark.background}; */
/* border-radius:15%;
border-color: ${oneDark.foreground};
border-style: solid;
border-width: 4px; */

margin: auto;
display: flex;
flex-direction: column;

align-items: center;
text-align: center;

height: 90%;
width: 600px;

`




export { BodyWrapper , AppWrapper }
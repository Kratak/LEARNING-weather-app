import styled from './../sc/styled-components'
import { oneDark } from './../styles/globalColors'

const BodyWrapper = styled.body`
background-color: ${oneDark.background}
`
const MainArticle = styled.article`
background-color: ${oneDark.background};
display: flex;
align-items: center;
height: 100vh;
margin: auto;
text-align: center;
width: 1000px;
`


export { BodyWrapper, MainArticle }
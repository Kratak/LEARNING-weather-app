import { createGlobalStyle } from '../sc/styled-components'
import { oneDark } from './globalColors'
import one from './one.jpg'
const HTMLglob = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rozha+One');
  *{
    box-sizing: border-box;
    /* background-color: ${oneDark.background}; */
    color: ${oneDark.black};
    font-family: 'Rozha One', serif;
    margin: 0px;
    
  }
  
  body {
    background: url(${one});
    height: 100%;
    width: 100%;
  }
  button::-moz-focus-inner {
    border: 0;
    /* color: ${oneDark.background} */
  }
  button{
    color: ${oneDark.background}
  }
`

export {HTMLglob}
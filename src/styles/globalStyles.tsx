import { createGlobalStyle } from '../sc/styled-components'
import { oneDark } from './globalColors'
import one from './one.jpg'
const HTMLglob = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rozha+One');
  *{
    box-sizing: border-box;
    /* background-color: ${oneDark.background}; */
    color: ${oneDark.white};
    font-family: 'Rozha One', serif;
    margin: 0px;
    text-shadow: 2px 2px ${oneDark.background};
    
  }
  
  body {
    background: url(${one});
    height: 100%;
    width: 100%;
    font-size: 20pt;
  }
  button::-moz-focus-inner {
    border: 0;
    /* color: ${oneDark.background} */
  }
  button{
    color: ${oneDark.background};
    text-shadow: none;
    font-size: 20px;
    width: 250px;
    height: 50px;
    background-color: ${oneDark.foreground};
    border-style: none;
    opacity: .8;
  }
  input{
    color: ${oneDark.background};
    text-shadow: none;
    text-align: center;
    font-size: 20px;
    width: 250px;
    height: 50px;
  }
  ::placeholder{
    color: ${oneDark.background};
    text-shadow: none;
    text-align: center;
    font-size: 20px;
    width: 250px;
    height: 50px;
  }
`

export {HTMLglob}
import { createGlobalStyle } from '../sc/styled-components'
import { oneDark } from './globalColors'
const HTMLglob = createGlobalStyle`
  body {
    background-color: ${oneDark.background};
    color: ${oneDark.foreground};
    height: 100%;
    margin: 0px;
    width: 100%;
  }
  button::-moz-focus-inner {
    border: 0;
  }
`

export {HTMLglob}
import * as React from 'react'
import { Component } from 'react'
import styled from './../sc/styled-components'
import { oneDark } from '../styles/globalColors'
// import { CITY, COUNTRY, CONFIRM_BUTTON } from '../lang/messages'

const FormWrapper = styled.div`

margin-top: 5px;

padding: 5px;

/* border-radius: 2%;
border-color: ${oneDark.foreground};
border-style: solid;
border-width: 2px; */

width: 100%;
height: 150px
h1{
      padding:5 px;
      height:70px;
      
}
input, button{
margin: 5px;
}

`;

export default class Form extends Component<any, any> {

	public render() {
		return (
            <>
            </>
      )
	}
}

export { FormWrapper }
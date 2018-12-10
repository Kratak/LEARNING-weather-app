import * as React from 'react'
import { Component } from 'react'
import styled from './../sc/styled-components'
import { oneDark } from '../styles/globalColors'
// import { CITY, COUNTRY, CONFIRM_BUTTON } from '../lang/messages'

const FormWrapper = styled.div`

margin-top: 20px;

padding: 5px;

/* border-radius: 2%;
border-color: ${oneDark.foreground};
border-style: solid;
border-width: 2px; */

width: 70%;
min-height: 50px
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
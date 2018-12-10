import * as React from 'react'
import { Component } from 'react'
import styled from './../sc/styled-components'
import { oneDark } from '../styles/globalColors'

const WeatherWrapper = styled.div`

margin-top: 20px;

padding: 5px;

/* border-radius: 2%;
border-color: ${oneDark.foreground};
border-style: solid;
border-width: 2px; */

width: 70%;
min-height: 250px
div{

}

`;

export default class Weather extends Component {

	public render() {
		return (
            <WeatherWrapper>
               ddsd
            </WeatherWrapper>
        );
	}
}

export { WeatherWrapper }
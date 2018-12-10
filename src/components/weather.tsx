import * as React from 'react'
import { Component } from 'react'
import styled from './../sc/styled-components'
import { oneDark } from '../styles/globalColors'

const WeatherWrapper = styled.div`
padding: 5px;

/* border-radius: 2%;
border-color: ${oneDark.foreground};
border-style: solid;
border-width: 2px; */

width: 50%;
/* height: 50% */
div{

}

`;
const ResultWrapper =  styled.div`

width:100%;
/* height:1; */
display: flex;
flex-direction: row;
flex-wrap: wrap;

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

export { WeatherWrapper, ResultWrapper }
import * as React from 'react'
import { AppWrapper, BodyWrapper } from './components/body'
import { CITY, COUNTRY, CONFIRM_BUTTON } from './lang/messages'
import { Header } from './components/mainarticle'
import { HTMLglob } from './styles/globalStyles'
import { API, APIKEY, UNITS } from './api/config.api'
import { FormWrapper } from './components/form'
import {WeatherWrapper, ResultWrapper} from './components/weather'

import * as request from 'request'

interface Istate  {
  CITY: string
COUNTRY: string
TEMP01: number
DATE01: string
WEATHER01: string
WIND01: number
TEMP02: number
DATE02: string
WEATHER02: string
WIND02: number
TEMP03: number
DATE03: string
WEATHER03: string
WIND03: number
TEMP04: number
DATE04: string
WEATHER04: string
WIND04: number

}

class App extends React.Component<{}, Istate> {
  constructor(props: {}){
    super(props)
    this.state = {
      CITY: "Budapest",
      COUNTRY: "Hungary",
      TEMP01: 0,
      DATE01: "",
      WEATHER01: "",
      WIND01: 0,
      TEMP02: 0,
      DATE02: "",
      WEATHER02: "",
      WIND02: 0,
      TEMP03: 0,
      DATE03: "",
      WEATHER03: "",
      WIND03: 0,
      TEMP04: 0,
      DATE04: "",
      WEATHER04: "",
      WIND04: 0,
    }
  }

public getWeather(e:any){
  e.preventDefault()
  // this.setState({
  //   CITY: this.state.CITY,
  //  COUNTRY: this.state.COUNTRY
  // })

  request.get(`${API}q=${this.state.CITY},${this.state.COUNTRY},${APIKEY}${UNITS.METRICS}`,
  (error: any,response:any, body: any) => {
    const data = JSON.parse(body)
    console.log(data)
    console.log(error)
    const temp01 = data.list[0].main.temp
    this.setState({
      TEMP01: temp01
    })
    const date01 = data.list[0].dt_txt
    this.setState({
      DATE01: date01
    })
    const weather01 = data.list[0].weather[0].description
    this.setState({
      WEATHER01: weather01
    })
    const wind01 = data.list[0].wind.speed
    this.setState({
      WIND01: wind01
    })
    const temp02 = data.list[7].main.temp
    this.setState({
      TEMP02: temp02
    })
    const date02 = data.list[7].dt_txt
    this.setState({
      DATE02: date02
    })
    const weather02 = data.list[7].weather[0].description
    this.setState({
      WEATHER02: weather02
    })
    const wind02 = data.list[7].wind.speed
    this.setState({
      WIND02: wind02
    })
    const temp03 = data.list[15].main.temp
    this.setState({
      TEMP03: temp03
    })
    const date03 = data.list[15].dt_txt
    this.setState({
      DATE03: date03
    })
    const weather03 = data.list[15].weather[0].description
    this.setState({
      WEATHER03: weather03
    })
    const wind03 = data.list[15].wind.speed
    this.setState({
      WIND03: wind03
    })
    const temp04 = data.list[23].main.temp
    this.setState({
      TEMP04: temp04
    })
    const date04 = data.list[23].dt_txt
    this.setState({
      DATE04: date04
    })
    const weather04 = data.list[23].weather[0].description
    this.setState({
      WEATHER04: weather04
    })
    const wind04 = data.list[23].wind.speed
    this.setState({
      WIND04: wind04
    })

  })  }

  public render() {
    // const city = this.state.CITY
    // const country = this.state.COUNTRY
    const temp01 = `${this.state.TEMP01} Celsius`
    const date01 = this.state.DATE01
    const weather01 = this.state.WEATHER01
    const wind01 = `${this.state.WIND01} m/s`
    const temp02 = `${this.state.TEMP02} Celsius`
    const date02 = this.state.DATE02
    const weather02 = this.state.WEATHER02
    const wind02 = `${this.state.WIND02} m/s`
    const temp03 = `${this.state.TEMP03} Celsius`
    const date03 = this.state.DATE03
    const weather03 = this.state.WEATHER03
    const wind03 = `${this.state.WIND03} m/s`
    const temp04 = `${this.state.TEMP04} Celsius`
    const date04 = this.state.DATE04
    const weather04 = this.state.WEATHER04
    const wind04 = `${this.state.WIND04} m/s`
    return (
        <BodyWrapper>
          <AppWrapper>
            
          <Header />
          <FormWrapper>
          <form onSubmit={e =>this.getWeather(e)} >
               <input 
               type="text" 
               value={this.state.CITY} 
               name="city" 
               placeholder={CITY.ENG}
               onChange={e => this.setState({CITY: e.target.value})}
               />
               <input 
               type="text" 
               value={this.state.COUNTRY} 
               name="country" 
               placeholder={COUNTRY.ENG}
               onChange={e => this.setState({COUNTRY: e.target.value})}/>
               <button>{CONFIRM_BUTTON.ENG}</button>
               
               </form>
               {/* <h1>{city} {country}</h1> */}
          </FormWrapper>
          
            
          <ResultWrapper>
            <WeatherWrapper>
            <br/>
            <div>
              <div>{date01}</div>
              <div>{weather01}</div>
              <div>{temp01}</div>
              <div>{wind01}</div>
            </div>
            </WeatherWrapper>
            <WeatherWrapper>
            
            <br/>
            <div>
              <div>{date02}</div>
              <div>{weather02}</div>
              <div>{temp02}</div>
              <div>{wind02}</div>
            </div>
            </WeatherWrapper>
            <WeatherWrapper>
           
            <br/>
            <div>
              <div>{date03}</div>
              <div>{weather03}</div>
              <div>{temp03}</div>
              <div>{wind03}</div>
            </div>
            </WeatherWrapper>
            <WeatherWrapper>
            <br/>
            <div>
              <div>{date04}</div>
              <div>{weather04}</div>
              <div>{temp04}</div>
              <div>{wind04}</div>
            </div>
            </WeatherWrapper>

          </ResultWrapper>
            </AppWrapper>
            <HTMLglob />
        </BodyWrapper>
   
    )
  }
}

export default App;

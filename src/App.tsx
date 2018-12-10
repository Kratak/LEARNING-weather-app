import * as React from 'react'
import { AppWrapper, BodyWrapper } from './components/body'
import { CITY, COUNTRY, CONFIRM_BUTTON } from './lang/messages'
import { Header } from './components/mainarticle'
import { HTMLglob } from './styles/globalStyles'
import { API, APIKEY, UNITS } from './api/config.api'
import { FormWrapper } from './components/form'
import {WeatherWrapper} from './components/weather'

import * as request from 'request'

interface Istate  {
  CITY: string
COUNTRY: string
TEMP: number
DATE: string
WEATHER: string
WIND: number

}

class App extends React.Component<{}, Istate> {
  constructor(props: {}){
    super(props)
    this.state = {
      CITY: "",
      COUNTRY: "",
      TEMP: 0,
      DATE: "",
      WEATHER: "",
      WIND: 0,
    }
  }

public getWeather(e:any){
  e.preventDefault()
  this.setState({
    CITY: this.state.CITY,
   COUNTRY: this.state.COUNTRY
  })

  request.get(`${API}q=${this.state.CITY},${this.state.COUNTRY},${APIKEY}${UNITS.METRICS}`,
  (error: any,response:any, body: any) => {
    const data = JSON.parse(body)
    console.log(data)
    const temp = data.list[0].main.temp
    this.setState({
      TEMP: temp
    })
    const date = data.list[0].dt_txt
    this.setState({
      DATE: date
    })
    const weather = data.list[0].weather[0].description
    this.setState({
      WEATHER: weather
    })
    const wind = data.list[0].wind.speed
    this.setState({
      WIND: wind
    })

  })  }

  public render() {
    const city = this.state.CITY
    const country = this.state.COUNTRY
    const temp = `${this.state.TEMP} Celsius`
    const date = this.state.DATE
    const weather = this.state.WEATHER
    const wind = `${this.state.WIND} m/s`
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
               onChange={e => this.setState({CITY: e.target.value})}/>
               <input 
               type="text" 
               value={this.state.COUNTRY} 
               name="country" 
               placeholder={COUNTRY.ENG}
               onChange={e => this.setState({COUNTRY: e.target.value})}/>
               <button>{CONFIRM_BUTTON.ENG}</button>
               
               </form>
          </FormWrapper>
            
          
            <WeatherWrapper>
            <div>
                <h1>{city}  {country}</h1>
            </div>
            <br/>
            <div>
              <div>{date}</div>
              <div>{weather}</div>
              <div>{temp}</div>
              <div>{wind}</div>
            </div>
            </WeatherWrapper>

            </AppWrapper>
            <HTMLglob />
        </BodyWrapper>
   
    )
  }
}

export default App;

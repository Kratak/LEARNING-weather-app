import * as React from 'react'
import * as request from 'request'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
// import { logger } from 'redux-logger'
// import { save, load } from 'redux-localstorage-simple'
import thunk from 'redux-thunk'

import { AppWrapper, BodyWrapper, WeatherDate } from './components/body'
import { 
  CITY, 
  COUNTRY, 
  CONFIRM_BUTTON, 
  CELSIUS, 
  METER_PER_SECOND 
} from './lang/messages'
import { Header } from './components/mainarticle'
import { HTMLglob } from './styles/globalStyles'
import { API, APIKEY, UNITS, ICON_LINK, ICON_TYPE_FILE } from './api/config.api'
import { FormWrapper } from './components/form'
import { WeatherWrapper, ResultWrapper } from './components/weather'
import { describeWindSpeed } from './api/utilities'
import { IAppState } from './types'
import rootReduce from './rootReducer'

const middleware = [thunk]


const store = createStore(
  rootReduce,
  {},
  composeWithDevTools(applyMiddleware(...middleware,)),
  );


class App extends React.Component<{}, IAppState> {
  constructor(props: {}){
    super(props)
    this.state = {
      CITY: "Budapest",
      COUNTRY: "Hungary",

      TEMP01: ``,
      ICON01: ``,
      DATE01: "",
      WEATHER01: "",
      WIND01: ``,
      WIND01describe: `` ,

      TEMP02: ``,
      ICON02: ``,
      DATE02: "",
      WEATHER02: "",
      WIND02: ``,
      WIND02describe: `` ,

      TEMP03: ``,
      ICON03: ``,
      DATE03: "",
      WEATHER03: "",
      WIND03: ``,
      WIND03describe: `` ,

      TEMP04: ``,
      ICON04: ``,
      DATE04: "",
      WEATHER04: "",
      WIND04: ``,
      WIND04describe: `` ,
    }
  }

public getWeather(e:any){
  e.preventDefault()
  request.get(`${API}q=${this.state.CITY},${this.state.COUNTRY},${APIKEY}${UNITS.METRICS}`,
  (error: any,response:any, body: any) => {
    const data = JSON.parse(body)
    console.log(data)
    console.log(error)
    const data01 = data.list[0]
    const data02 = data.list[8]
    const data03 = data.list[16]
    const data04 = data.list[24]
    const defTempUnit = CELSIUS
    const defSpeedUnit = METER_PER_SECOND
    const iconFileType = ICON_TYPE_FILE
    this.setState({
      TEMP01: `${data01.main.temp} ${defTempUnit}`,
      DATE01: data01.dt_txt,
      WEATHER01: data01.weather[0].description,
      ICON01: `${ICON_LINK}${data01.weather[0].icon}${iconFileType}`,
      WIND01:  `${data01.wind.speed} ${defSpeedUnit}`,
      WIND01describe: describeWindSpeed( data01.wind.speed),

      TEMP02: `${data02.main.temp} ${defTempUnit}`,
      DATE02: data02.dt_txt,
      WEATHER02: data02.weather[0].description,
      ICON02: `${ICON_LINK}${data02.weather[0].icon}${iconFileType}`,
      WIND02:  `${data02.wind.speed} ${defSpeedUnit}`,
      WIND02describe: describeWindSpeed( data02.wind.speed),

      TEMP03: `${data03.main.temp} ${defTempUnit}`,
      DATE03: data03.dt_txt,
      WEATHER03: data03.weather[0].description,
      ICON03: `${ICON_LINK}${data03.weather[0].icon}${iconFileType}`,
      WIND03:  `${data03.wind.speed} ${defSpeedUnit}`,
      WIND03describe: describeWindSpeed( data03.wind.speed),

      TEMP04: `${data04.main.temp} ${defTempUnit}`,
      DATE04: data04.dt_txt,
      WEATHER04: data04.weather[0].description,
      ICON04: `${ICON_LINK}${data04.weather[0].icon}${iconFileType}`,
      WIND04: `${data04.wind.speed} ${defSpeedUnit}`,
      WIND04describe: describeWindSpeed( data04.wind.speed),
    })
  })  }

  public render() {
    const temp01 = this.state.TEMP01
    const icon01 = this.state.ICON01
    const date01 = this.state.DATE01
    const weather01 = this.state.WEATHER01
    const wind01 = this.state.WIND01
    const wind01describe = this.state.WIND01describe

    const temp02 = this.state.TEMP02
    const icon02 = this.state.ICON02
    const date02 = this.state.DATE02
    const weather02 = this.state.WEATHER02
    const wind02 = this.state.WIND02
    const wind02describe = this.state.WIND02describe

    const temp03 = this.state.TEMP03
    const icon03 = this.state.ICON03
    const date03 = this.state.DATE03
    const weather03 = this.state.WEATHER03
    const wind03 = this.state.WIND03
    const wind03describe = this.state.WIND03describe
    
    const temp04 = this.state.TEMP04
    const icon04 = this.state.ICON04
    const date04 = this.state.DATE04
    const weather04 = this.state.WEATHER04
    const wind04 = this.state.WIND04
    const wind04describe = this.state.WIND04describe
    return (
      <Provider store={store}>
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
              <WeatherDate>{date01}</WeatherDate>
              <div>{weather01}</div>
              <div>{temp01}</div>
              <img src={icon01} />
              <div>{wind01}</div>
              <div>{wind01describe}</div>
            </div>
            </WeatherWrapper>
            <WeatherWrapper>
            
            <br/>
            <div>
              <WeatherDate>{date02}</WeatherDate>
              <div>{weather02}</div>
              <div>{temp02}</div>
              <img src={icon02} />
              <div>{wind02}</div>
              <div>{wind02describe}</div>
            </div>
            </WeatherWrapper>
            <WeatherWrapper>
           
            <br/>
            <div>
              <WeatherDate>{date03}</WeatherDate>
              <div>{weather03}</div>
              <div>{temp03}</div>
              <img src={icon03} />
              <div>{wind03}</div>
              <div>{wind03describe}</div>
            </div>
            </WeatherWrapper>
            <WeatherWrapper>
            <br/>
            <div>
              <WeatherDate>{date04}</WeatherDate>
              <div>{weather04}</div>
              <div>{temp04}</div>
              <img src={icon04} />
              <div>{wind04}</div>
              <div>{wind04describe}</div>
            </div>
            </WeatherWrapper>

          </ResultWrapper>
            </AppWrapper>
            <HTMLglob />
        </BodyWrapper>
        </Provider>
    )
  }
}

export default App;

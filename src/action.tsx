export const GET_WEATHER:string ='GET_WEATHER'

import { API, APIKEY, UNITS} from './api/config.api'

export function getWeather(CITY:string, COUNTRY:string) {
    return async (dispatch:any) => {
        const res = await fetch(`${API}q=${CITY},${COUNTRY},${APIKEY}${UNITS.METRICS}`)
        const weather = await res.json();
      return dispatch({
          type: GET_WEATHER,
          data: weather,
      })
    }
}
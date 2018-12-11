import { GET_WEATHER } from './action'

const initialState:any = {
    weather : [],
}

export default function ( state = initialState, action:any) {
    const { type, data } = action
    switch(type){
        case GET_WEATHER:
            return{
                ...state,
                weather: data,
            }
        default:
            return state
    }

}
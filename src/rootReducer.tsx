import { combineReducers } from 'redux'

import weather from './reducer'

const rootReducer = combineReducers({
    weather,
})

export default rootReducer
import { combineReducers } from 'redux'

import userReducer from './userReducer'
import problemsReducer from './problemsReducer'


const rootReducer = combineReducers({
    user: userReducer,
    problems: problemsReducer
})

export default rootReducer
import  changeTheNumber from './upDown'
import {SquareTheNumber} from './upDown'

import {combineReducers} from 'redux'

const rootReducer=combineReducers({
    changeTheNumber,
    SquareTheNumber
})

export default rootReducer;
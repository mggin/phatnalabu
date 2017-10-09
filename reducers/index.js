import {combineReducers} from 'redux'
import setFontReducer from './reducerSetFont'

const allReducers = combineReducers({
  setFont: setFontReducer,
})

export default allReducers;

import {combineReducers} from 'redux'
import setFontReducer from './reducerSetFont'
import songPageReducer from './reducerSongPage'

const allReducers = combineReducers({
  setFont: setFontReducer,
  songPage: songPageReducer
})

export default allReducers;

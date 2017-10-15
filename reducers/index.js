import {combineReducers} from 'redux'
import setFontReducer from './reducerSetFont'
import songPageReducer from './reducerSongPage'
import dataListReducer from './reducerDataList'

const allReducers = combineReducers({
  setting: setFontReducer,
  songPage: songPageReducer,
  dataList: dataListReducer
})

export default allReducers;

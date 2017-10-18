import {combineReducers} from 'redux'
import setFontReducer from './reducerSetFont'
import songPageReducer from './reducerSongPage'
import dataListReducer from './reducerDataList'
import layoutChangedReducer from './reducerLayoutChanged'

const allReducers = combineReducers({
  setting: setFontReducer,
  songPage: songPageReducer,
  dataList: dataListReducer,
  layoutChanged: layoutChangedReducer

})

export default allReducers;

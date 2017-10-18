import { AsyncStorage } from 'react-native'

const initState = {
  fontFamily: 'Times New Roman',
  fontSize: 16,
}

export default function(state = initState, action) {
  
  switch(action.type) {
    case 'GET_FONT_INFO':
      //console.log('get font')
      if (action.size == "NaN" || action.family == "NaN") {
        return state 
      } else {
        //console.log(action.size)
        return {
          ...state,
          fontFamily: action.family,
          fontSize: parseInt(action.size),
        }
        

      }
    case 'SET_FONT_INFO':
      //console.log('set info' + state.fontFamily)
      const fontInfoSet = [['@fontFamily', state.fontFamily], ['@fontSize', state.fontSize.toString()]]
      // console.log(fontInfo)
      AsyncStorage.multiSet(fontInfoSet)
      return state
    case 'SET_FONT': 
      return {
        ...state,
        fontFamily: action.fontFamily
      }
    case 'INCREASE_FONT_SIZE':
      if (state.fontSize == 30) {
        return {
          ...state,
          fontSize: 16
        }
      } else {
        return {
          ...state,
          fontSize: state.fontSize + 1
        }
      }
    case 'DECREASE_FONT_SIZE':
      if (state.fontSize == 10) {
        return {
          ...state,
          fontSize: 16
        }
      } else {
        return {
          ...state,
          fontSize: state.fontSize - 1
        }
      }
    case 'SLIDING':
      return {
        ...state,
        fontSize: action.payload
      }
    default:

      return state
  }
}


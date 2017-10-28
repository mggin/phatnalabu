import { AsyncStorage, Dimensions} from 'react-native'

const initState = {
  fontFamily: 'Times New Roman',
  fontSize: 16,
  fontSizeOfTitle: 19,
  fontSizeOfTab: 17,
  heightHeader: 70,
  iconSize: 30,
  paddingList: 15,
  marginPage: 2,
}

export default function(state = initState, action) {
  
  switch(action.type) {
    case 'GET_FONT_INFO':
      //console.log('get font')
      console.log(action.family + action.size)
      if (action.size == null || action.family == null) {
        console.log('nan')
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
      let stringFontSize = state.fontSize.toString()
      const fontInfoSet = [['@fontFamily', state.fontFamily], ['@fontSize', stringFontSize]]
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
    case 'INITIAL_FONT':
      const { width, height } = Dimensions.get('window')
      if (width == 1366 || height == 1366) {
          return {
            ...state,
            fontSize: 24,
            fontSizeOfTitle: 27,
            fontSizeOfTab: 26,
            heightHeader: 120,
            iconSize: 35,
            paddingList: 25,
            marginPage: 100
          }
      } else if (width == 768 || height == 768) {
        console.log('in 768')
        return {
          ...state,
          fontSize: 20,
          fontSizeOfTitle: 23,
          fontSizeOfTab: 22,
          heightHeader: 100,
          iconSize: 33,
          paddingList: 20,
          marginPage: 50
        }
      } else {
        //console.log('normal device layout')
        return state
      }
    default:

      return state
  }
}


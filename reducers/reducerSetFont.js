import { AsyncStorage } from 'react-native'


const initialState = () => {

  AsyncStorage.getItem('@fontFamily', (err, result) => {
      var value = result
      // console.log(result + 'locat')
    })
  return value
}


export default function(state={}, action) {
  switch(action.type) {
    case 'SET_FONT':
      // AsyncStorage.setItem('@fontFamily', action.payload);
      return action.payload 
      break;
  }
  return state;
}

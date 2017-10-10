const Realm = require('realm')
import fs from 'react-native-fs'

const initState = {
      index: undefined,
      id: undefined,
      title: undefined,
      key: undefined,
      verse1: undefined,
      chorus: undefined,
      verse2: undefined,
      verse3: undefined,
      verse4: undefined,
      verse5: undefined,
      verse6: undefined,
      verse7: undefined,
      verse8: undefined,
      bridge: undefined,
      favorite: undefined,
      favIcon: undefined,
    } 

export default function(state = initState, action) {
  switch(action.type) {
    case 'SET_SONG_PAGE':
      let rawData = []
      const realm = new Realm({path: fs.MainBundlePath + '/phatnaLabu.realm'})
      //.then(realm => {
        let songObj = realm.objects('Labu')
        console.log(action)
        rawData.push(
          songObj[action.payload].id,
          songObj[action.payload].title,
          songObj[action.payload].key,
          songObj[action.payload].verse1,
          songObj[action.payload].chorus,
          songObj[action.payload].verse2,
          songObj[action.payload].verse3,
          songObj[action.payload].verse4,
          songObj[action.payload].verse5,
          songObj[action.payload].verse6,
          songObj[action.payload].verse7,
          songObj[action.payload].verse8,
          songObj[action.payload].bridge,
          songObj[action.payload].favorite,
          )
        console.log(rawData[13])
      return {
        index: action.payload,
        id: rawData[0],
        title: rawData[1],
        key: rawData[2],
        verse1: rawData[3],
        chorus: rawData[4],
        verse2: rawData[5],
        verse3: rawData[6],
        verse4: rawData[7],
        verse5: rawData[8],
        verse6: rawData[9],
        verse7: rawData[10],
        verse8: rawData[11],
        bridge: rawData[12],
        favorite: rawData[13],
        favIcon: rawData[13] ? 'ios-bookmark' : 'ios-bookmark-outline'
      }
      break
    case 'FAVORITE_ACTION':
      console.log(action)
      if (state.favorite) {
        return {
          ...state,
          favIcon: 'ios-bookmark-outline',
          favorite: false
          }
        } else {
        return {
          ...state,
          favIcon: 'ios-bookmark',
          favorite: true
        }
      }
    case 'SET_FAVORITE_SONG':
    Realm.open({path: fs.MainBundlePath + '/phatnaLabu.realm'})
      .then(realm => {
        realm.write(() => {
          const songObj = realm.objects('Labu')
          songObj[state.index].favorite = state.favorite
        })
      })
      console.log(state.index)
      return state
      console.log(state.index + state.favorite)
    default: // need this for default case
      return state 
    }

  }
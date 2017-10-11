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
      //let rawData = []
      const realm = new Realm({path: fs.MainBundlePath + '/phatnaLabu.realm'})
      //.then(realm => {
        const songObj = realm.objects('Labu').filtered('id = "' + action.payload + ' "')
        //console.log(songObj[0].title)
        //console.log(action.payload)
      return {
        id: songObj[0].id,
        title: songObj[0].title,
        key: songObj[0].key,
        verse1: songObj[0].verse1,
        chorus: songObj[0].chorus,
        verse2: songObj[0].verse2,
        verse3: songObj[0].verse3,
        verse4: songObj[0].verse4,
        verse5: songObj[0].verse5,
        verse6: songObj[0].verse6,
        verse7: songObj[0].verse7,
        verse8: songObj[0].verse8,
        bridge: songObj[0].bridge,
        favorite: action.favorite,
        favIcon: action.favorite ? 'ios-bookmark' : 'ios-bookmark-outline'
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
    let realmy = new Realm({path: fs.MainBundlePath + '/phatnaLabu.realm'})
        realmy.write(() => {
          console.log(state.favorite + 'fav')
          const songObj = realmy.objects('Labu')
          songObj[state.index].favorite = state.favorite
      })
      console.log(state.index + 'set fav')
      return state
    default: // need this for default case
      return state 
    }

  }
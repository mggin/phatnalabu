
import fs from 'react-native-fs'
// import { songList, songPage } from '../data'

const Realm = require('realm')

export let favoriteList = []
export let songPage = []
export var favBool = undefined


export function getSongList() {
	Realm.open({path: fs.MainBundlePath + '/phatnaLabu.realm'})
	.then(realm => {
		let songObj = realm.objects('Labu')
		for (let i=0; i < songObj.length; i++) {
			// songList.push(songObj[i].id + '. ' + songObj[i].title)
			//console.log(songObj[i].favorite)
        }
        // console.log(songList)
	})
}

export function getFavoriteList() {
	Realm.open({path: fs.MainBundlePath + '/phatnaLabu.realm'})
	.then(realm => {
		let songObj = realm.objects('Labu')
		for (let i=0; i < 3; i++) {
			var listName = songObj[i].id + '. ' + songObj[i].title
			songList.push(listName)
        }
        console.log(songList)
	})
}

export function getSongPage(index) {
	Realm.open({path: fs.MainBundlePath + '/phatnaLabu.realm'})
    .then(realm => {
      let songObj = realm.objects('Labu')
      let rawKey = songObj[index].key.replace(/\\n/g,'\n');
      songPage.push(
      	songObj[index].id,
      	songObj[index].title,
      	rawKey,
      	songObj[index].verse1,
      	songObj[index].chorus,
      	songObj[index].verse2,
      	songObj[index].verse3,
      	songObj[index].verse4,
      	songObj[index].verse5,
      	songObj[index].verse6,
      	songObj[index].verse7,
      	songObj[index].verse8,
      	songObj[index].bridge,
      	songObj[index].favorite,
      	)
     //console.log(songPage)
 	})
 	console.log(songPage)
}

export function resetSongPage() {
	songPage.splice(0, songPage.length)
}

export function getFavorite(index) {
	let rawFavBool = undefined
	Realm.open({path: fs.MainBundlePath + '/phatnaLabu.realm'})
	    .then(realm => {
	      let songObj = realm.objects('Labu')
	      rawFavBool = songObj[index].favorite
	      console.log(raw)
	     
	 	})
	 	favBool = rawFavBool
	 	console.log(favBool)
}

export function setFavorite(index, fav) {
		Realm.open({path: fs.MainBundlePath + '/phatnaLabu.realm'})
	    .then(realm => {
	     realm.write(() => {
	     	let songObj = realm.objects('Labu')
	     })
	    // console.log(Labu[this.props.id - 1].favorite)
	 }) 	
}

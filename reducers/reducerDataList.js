import fs from 'react-native-fs'
const Realm = require('realm')

const initState = {
	songList: [],
	favoriteList: [],
    searchSongList: [],
}

export default function(state = initState, action) {
	switch(action.type) {
		case 'GET_SONG_LIST':
			let rawSongList = []
			const realm = new Realm({path: fs.MainBundlePath + '/phatnalabu.realm'})
			const songObj = realm.objects('Labu')
			//const favObj = realm.objects('Labu').filtered('favorite = true')
			//console.log(favObj + 'hello')
			for (let i=0; i < songObj.length; i++) {
				rawSongList.push({id: songObj[i].id, title: songObj[i].id + '. ' + songObj[i].title, favorite: songObj[i].favorite})
        	}
            console.log(rawSongList)
        	return {
        		...state,
        		songList: rawSongList,
                searchSongList: rawSongList,
        	}
        case 'UPDATE_FAVORITE_SONG':
        /*
        	let rawFavList = []
        	const realms = new Realm({path: fs.MainBundlePath + '/phatnalabu.realm'})
        	const favObj = realms.objects('Labu').filtered('favorite = false')
        	for (let i=0; i < favObj.length; i++) {
				rawFavList.push({id: favObj[i].id, title: favObj[i].id + '. ' + favObj[i].title})
        	}
        	console.log(rawFavList)
        	return {
        		...state,
        		favoriteList: rawFavList,
        	}
        	let rawFavList = []
        */	
        	// const rawFavList = []
        	/*
        	let rawId = undefined
        	for (let j = 0; j < state.songList.length; j++) {
        		if (state.songList[j].id === action.id) {
        			console.log('update')
        			return {
        				...state,
        				songList[j]
        			}
        		}
        	}
        	*/
        	return {
		        ...state,
		        songList: state.songList.map(song => song.id === action.id ?
		            // transform the one with a matching id
		            { ...song, favorite: action.favorite } :
		            // otherwise return original todo
		            song
        		) 
        	}
        case 'GET_FAVORITE_LIST':
        	const rawFavList = []
        	for (let k = 0; k < state.songList.length; k++) {
        		if (state.songList[k].favorite === true) {
        			rawFavList.push(state.songList[k])
        		}
        	}
        	return {
        		...state,
        		favoriteList: rawFavList
        	}
        case 'SET_FAVORITE_DATABASE':
            Realm.open({path: fs.MainBundlePath + '/phatnalabu.realm'})
            .then(realm => {
                realm.write(() => {
                    for (let l = 0 ; l < state.favoriteList.length; l++) {
                        console.log(state.favoriteList[l].title )
                        let favObj = realm.objects('Labu').filtered('id = "' + state.favoriteList[l].id + '"')
                        favObj[0].favorite = state.favoriteList[l].favorite
                        console.log(favObj[0].title)
                    }
                })

            })
        case 'SEARCH_ACTION':
            if (action.title !== undefined) {
                console.log(action.title)
                let loweredTitle = action.title.toLowerCase()
            //let songTitles = this.state.songList
            //  update error ! whenever filter the search, reuse the original list: not updated list.
                let filteredTitles = state.songList.filter((item) => {
                    return item.title.toLowerCase().match(loweredTitle)
                })
                if (!action.title || action.title === '') {
                    return {
                        ...state,
                        searchSongList: state.songList
                    }
                } else if (!Array.isArray(filteredTitles) && !filteredTitles.length) {
                    // set no data flag to true so as to render flatlist conditionally
                } else if (Array.isArray(filteredTitles)) {
                    return {
                        ...state,
                        searchSongList: filteredTitles
                    }
                } else {
                    console.log()
                }
            } else {
                return state
            }
            
		default:
			return state
	}
}
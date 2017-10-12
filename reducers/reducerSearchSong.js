const initState = {
	searchSongList: [],
	songList: []
}
/*
export default function (state = initState, action) {
	switch(action.type) {
		case 'RESET_SEARCH_ACTION':
    		let loweredTitle = title.toLowerCase()
    		//let songTitles = this.state.songList
    		//  update error ! whenever filter the search, reuse the original list: not updated list.
    		let filteredTitles = action.songList.filter((item) => {
        		return item.toLowerCase().match(loweredTitle)
    		})
    		if (!action.title || action.title === '') {
    			return 
    			}
      			this.setState({
        			songList: songList
      			})
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
 		}
		default:
			return state
	}
}
*?

export const nightMode = () => {
  return {
    type: 'NIGHT_MODE'
  }
}

//change font family
export const setFont = (value) => {
  return {
    type: 'SET_FONT',
    payload: value,
  }
}

//increase font size
export const increaseFontSize = (value) => {
  return {
    type: 'INCREASE_FONT_SIZE',
    payload: value,
  }
}

//decrease font size
export const decreaseFontSize = (value) => {
  return {
    type: 'DECREASE_FONT_SIZE',
    payload: value
  }
}

export const setSongPage = (id, fav) => {
  return {
    type: 'SET_SONG_PAGE',
    payload: id,
    favorite: fav
  }
}

export const updateFavoriteSong = (id, fav) => {
  return {
    type: 'UPDATE_FAVORITE_SONG',
    id: id,
    favorite: fav
  }
}

export const favoriteAction = () => {
  return {
    type: 'FAVORITE_ACTION',
  }
}

export const getSongList = () => {
  return {
    type: 'GET_SONG_LIST'
  }
}

export const getFavList = () => {
  return {
    type: 'GET_FAVORITE_LIST'
  }
}

export const setFavoriteDatabase = () => {
  return {
    type: 'SET_FAVORITE_DATABASE'
  }
}

export const searchAction = (title) => {
  return {
    type: 'SEARCH_ACTION',
    title: title,
  }
}





//change font family
export const setFontFamily = (value) => {
  return {
    type: 'SET_FONT',
    fontFamily: value,
  }
}

//increase font size
export const increaseFontSize = () => {
  return {
    type: 'INCREASE_FONT_SIZE',
  }
}

//decrease font size
export const decreaseFontSize = () => {
  return {
    type: 'DECREASE_FONT_SIZE',
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

export const getFontInfo = (family, size) => {
  return {
    type: 'GET_FONT_INFO',
    family: family,
    size: size

  }
}

export const setFontInfo = () => {
  return {
    type: 'SET_FONT_INFO'
  }
}




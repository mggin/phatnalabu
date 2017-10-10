
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

export const setSongPage = (index) => {
  return {
    type: 'SET_SONG_PAGE',
    payload: index
  }
}

export const setFavoriteSong = (value) => {
  return {
    type: 'SET_FAVORITE_SONG',
    payload: value
  }
}

export const setFavBool = () => {
  return {
    type: 'SET_FAV_BOOL'
  }
}

export const favoriteAction = () => {
  return {
    type: 'FAVORITE_ACTION'
  }
}



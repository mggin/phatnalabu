
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


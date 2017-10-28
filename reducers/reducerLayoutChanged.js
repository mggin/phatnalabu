import {
    Dimensions
} from 'react-native'

const initState = {
	flexDirectionSetting: 'column',
    portrait: true,
    heightHeader: 70,
}

const originalState = Object.assign({}, initState)

export default function (state = initState, action) {
    const { width, height } = Dimensions.get('window')
	switch(action.type) {
		case 'LAYOUT_CHANGED':
            console.log('layout changed')
            console.log(width + ' ' + height)
            if (width > height) {
                console.log('in')
                return {
                    ...state,
                    flexDirectionSetting: 'row',
                    portrait: false
                }
            } else {
                return originalState
            }
        case 'DEVICE_CHANGED':
         //console.log('device changed')
            if (width == 1366 || height == 1366) {
                console.log('device changed')
              return {
                ...state,
                heightHeader: 120,
              }
            } else if (width == 768 || height == 768) {
                
                return {
                  ...state,
                  fontSize: 20
                }
            } else {
            //console.log('normal device layout')
                return state
            }
		default:
			return state
	}
}

import {
    Dimensions
} from 'react-native'

const initState = {
	flexDirectionSetting: 'column',
    portrait: true,
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
		default:
			return state
	}
}

import { SET_CURRENT_COLOR_PALETTE, UPDATE_CURRENT_COLOR_PALETTE } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case SET_CURRENT_COLOR_PALETTE:
			return action.payload;
		case UPDATE_CURRENT_COLOR_PALETTE:
			return {...state, [action.payload.colorNum]: action.payload}
		default:
			return state;
	}
}

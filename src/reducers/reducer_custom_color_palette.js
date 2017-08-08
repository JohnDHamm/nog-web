import { SET_CUSTOM_COLOR_PALETTE } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case SET_CUSTOM_COLOR_PALETTE:
			return action.payload;
		default:
			return state;
	}
}

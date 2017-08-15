import { SET_CURRENT_PATTERN, UPDATE_DEFAULT_SPEED } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case SET_CURRENT_PATTERN:
			return action.payload;
		case UPDATE_DEFAULT_SPEED:
			return { ...state, defaultSpeed: action.payload };
		default:
			return state;
	}
}

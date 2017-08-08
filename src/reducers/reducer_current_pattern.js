import { SET_CURRENT_PATTERN, UPDATE_PATTERN } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case SET_CURRENT_PATTERN:
			return action.payload;
		case UPDATE_PATTERN:
			console.log("action.payload", action.payload);
			return { ...state }
		default:
			return state;
	}
}

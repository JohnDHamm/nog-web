import { SET_CURRENT_PATTERN } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case SET_CURRENT_PATTERN:
			return action.payload;
		default:
			return state;
	}
}

import { SET_SELECTED_COLOR } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case SET_SELECTED_COLOR:
			return action.payload;
		default:
			return state;
	}
}

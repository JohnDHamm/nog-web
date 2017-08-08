import { SET_LIGHTS } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case SET_LIGHTS:
			return action.payload;
		default:
			return state;
	}
}

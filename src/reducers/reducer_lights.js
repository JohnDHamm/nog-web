import { SET_LIGHTS, UPDATE_LIGHT } from '../actions';

export default function (state={}, action) {
	switch (action.type) {
		case SET_LIGHTS:
			return action.payload;
		case UPDATE_LIGHT:
			return { ...state, [action.payload.lightNum]: action.payload }
		default:
			return state;
	}
}
